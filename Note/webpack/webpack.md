# webpack打包优化方案

由于新建项目发版打包时间大概需要**30分钟**，发版时**严重**拖慢**下班**时间，所以特意查看了相关文档来优化打包速度，争取早点下班，^_^。

## 分析打包文件

要优化，先分析。我们先要知道到底是哪里拖慢我们的打包速度呢？

### 打包后生成文件分析

可以利用`webpack-bundle-analyzer`插件来分析我们打包后生成的文件

* 安装

```
npm i webpack-bundle-analyzer -D
```

* 使用

修改`webpack.prod.conf.js`文件

```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// 构建完成后，浏览器会自动打开localhost:8080
webpackConfig.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerPort: 8080,
    generateStatsFile: false
  })
)
```
![](https://user-gold-cdn.xitu.io/2019/6/6/16b2a7273e2e924b?w=1903&h=934&f=png&s=304816)

通过图片可以看到打包后文件的具体信息

### 打包进度条显示，可以查看到打包进度百分比

`simple-progress-webpack-plugin`可以显示打包百分比

* 安装

```
npm i simple-progress-webpack-plugin -D
```

* 使用

修改`webpack.prod.conf.js`文件

```
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' )
...
  plugins: [
    new SimpleProgressWebpackPlugin()
  ]
...
```

效果如下：


![](https://user-gold-cdn.xitu.io/2019/6/6/16b2a72adce34fe9?w=734&h=206&f=png&s=9902)

## 资源与依赖包的控制

通过上面进度可以看到，打包过程中，卡顿在压缩的地方过长，当项目越来越臃肿的时候，我们要需要对项目静态资源以及依赖包进行整理，

- 图片过大的可以压缩，这里推荐一个还不错的压缩[链接](https://www.yasuotu.com/)

- 项目中没有使用的依赖可以删除，可以按需引用的依赖，按需引用

项目里面使用`ElementUI`和`Echarts`都是全部引用挂在`Vue.prototype`上，现都改为按需引用。

## 减少文件搜索范围

- 设置`resolve.alias`字段，避免打包时如果使用相对路径访问或着`import`文件时会层层去查找解析文件

```
resolve: {
  alias: {
    '@': resolve('src')
  }
}
```

- 合理配置`extensions`扩展名

`resolve.extensions`能够自动解析确定的扩展，但是如果`extensions`扩展名过多，会导致解析过程过多，所以我们要合理配置扩展名，不要过多配置扩展名，项目引用多的文件，扩展名放在前面，我司项目中多的是`vue`，`js`文件，可以只引用这两种。

```
resolve: {
  extensions: ['.vue', '.js']
}
```

- `loader`预处理文件增加`include`匹配特定条件

预处理各种文件时指定匹配目录后，`webpack`解析文件时就不会循环查找其他目录，加快解析速度。

## `happypack`多线程执行

`webpack`执行预处理文件时单线程的，我们可以使用[happypack](https://github.com/amireh/happypack)来多线程处理文件。

* 安装

```
npm i happypack  -D
```

* 使用

修改`webpack.base.js`文件

```
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
module: {
  rules: [
    {
      test: /\.js$/,
      loader: 'happypack/loader?id=babel', // 原始loader替换成`happypack/loader`
      include: [resolve('src')]
    }
  ]
},
plugins: [
  new HappyPack({
    // id标识 需要处理的loader
    id: 'babel',
    // loader配置和原始配置一样
    loaders: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ],
    threadPool: happyThreadPool
  })
]
```

## `babel-plugin-dynamic-import-node`异步加载

`babel-plugin-dynamic-import-node`插件是使`import()` 替换成 `require` 编译

* 安装
```
npm i babel-plugin-dynamic-import-node -D
```

* 使用

修改`.babelrc` 文件

```
"env": {
  "development": {
    "plugins": ["dynamic-import-node"]
  },
  "production": {
    "plugins": ["dynamic-import-node"]
  }
}
```

**注意**：使用插件`build`后没有`chunk files`文件。

## `DllPlugin`分包

通过`DllPlugin`插件分离出第三方包

* 新建`webpack.dll.conf.js`

```
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    vendor: [
      'vue',
      'vue-router',
      'vuex',
      'axios',
      'element-ui',
      'echarts'
    ]
  },
  output: {
    filename: '[name]_dll_[hash:6].js', // 产生的文件名
    path: path.resolve(__dirname, '../static/dll'),
    library: '[name]_dll_[hash:6]'
  },
  plugins: [
    new CleanWebpackPlugin({ 
      root: path.resolve(__dirname, '../static/dll'),
      dry: false // 启用删除文件
    }),
    new webpack.DllPlugin({
      name: '[name]_dll_[hash:6]',
      path: path.resolve(__dirname, '../static/dll', '[name].dll.manifest.json')
    })
  ]
};
```

* 修改`webpack.prod.conf.js`

使用`add-asset-html-webpack-plugin`动态添加`dll.js`到`html`。

**需要注意**

1. `add-asset-html-webpack-plugin`要在`HtmlWebpackPlugin`后引入；

2. `html-webpack-plugin`依赖包版本`4.0.0-alpha`会出个问题，添加上去的路径会变成`undefined`需要是**3.2.0**版本

```
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
...
plugins: [
  // 插入dll json
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    manifest: require('../static/dll/vendor.dll.manifest.json')
  }),
  new HtmlWebpackPlugin(),
  // 插入 dll js
  new AddAssetHtmlPlugin([{ 
    publicPath: config.build.assetsPublicPath + 'static/dll/',  // 注入到html中的路径
    outputPath: 'static/dll/', // 输出文件目录
    filepath: resolve('static/dll/*.js'), // 文件路径
    includeSourcemap: false,
    typeOfAsset: "js"
  }])
]

```

## 总结

项目经过以上优化，打包从**30**分钟，到**2**分钟不到，整体还有优化空间，可以使用其他`cdn`等优化方式。