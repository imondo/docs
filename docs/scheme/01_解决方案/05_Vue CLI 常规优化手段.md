# Vue CLI 常规优化手段

> Vue CLI 版本为 4.x

使用 [Vue-cli](https://cli.vuejs.org/zh/guide/installation.html) 创建 Vue 项目，到部署阶段一些常规的优化手段汇总。

## 全局引入 Less Scss

全局引入预处理 Less 或者 Scss 变量

```js
pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [
            path.resolve(__dirname, './src/styles/vars.scss')
        ]
    }
},
```

## CDN 外链

常用第三方库可以使用 CDN 外链，不打入最终文件中

```js
const PUBLIC_PATH = process.env.VUE_APP_PUBLIC_PATH;

const externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    'babel-polyfill': 'window._babelPolyfill'
};
// CDN 外链，会插入到 index.html 中
const cdn = {
    // 开发环境
    dev: {
        css: [],
        js: []
    },
    // 生产环境
    build: {
        css: [],
        js: [
            `${PUBLIC_PATH}vendors/polyfill.min.js`,
            `${PUBLIC_PATH}vendors/vue.min.js`,
            `${PUBLIC_PATH}vendors/vue-router.min.js`,
            `${PUBLIC_PATH}vendors/axios.min.js`,
            `${PUBLIC_PATH}vendors/vuex.min.js`,
        ]
    }
};

module.exports = {
  configureWebpack: config => {
      // 为生产环境修改配置
      if (isProduction) {
          config.externals = externals;
      }
  },
  chainWebpack(config) {
    /**
     * 添加 CDN 参数到 htmlWebpackPlugin 配置中
     */
    config.plugin('html').tap(args => {
        if (isProduction) {
            args[0].cdn = cdn.build;
        } else {
            args[0].cdn = cdn.dev;
        }
        return args;
    });
  }
}
```

最终插入到 index.html 中

```html
<head>
  <!-- 使用 CDN 的 CSS 文件 -->
  <% for (var i in htmlWebpackPlugin.options.cdn&&htmlWebpackPlugin.options.cdn.css) { %>
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="preload" as="style" />
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet" />
    <% } %>
</head>

<body>
  <!-- 使用 CDN 加速的 JS 文件，配置在 vue.config.js 下 -->
  <% for (var i in htmlWebpackPlugin.options.cdn&&htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
    <% } %>
</body>

```

## 代码拆分

Vue CLI 默认使用了 [SplitChunksPlugin](https://webpack.docschina.org/plugins/split-chunks-plugin/) 插件来拆分代码。

```js
chainWebpack(config) {
    /**
     * 添加 CDN 参数到 htmlWebpackPlugin 配置中
     */
    config.plugin('html').tap(args => {
        if (isProduction) {
            args[0].cdn = cdn.build;
        } else {
            args[0].cdn = cdn.dev;
        }
        return args;
    });
    config.when(process.env.NODE_ENV !== 'development', (config) => {
        config.optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
                libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial',
                },
                echarts: {
                    name: 'chunk-echarts',
                    priority: 20,
                    test: /[\\/]node_modules[\\/]_?echarts(.*)/,
                },
                elementUI: {
                    name: 'chunk-elementUI',
                    priority: 30,
                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
                },
                commons: {
                    name: 'chunk-commons',
                    test: resolve('src/components'),
                    minChunks: 3,
                    priority: 5,
                    reuseExistingChunk: true,
                },
                styles: { //样式抽离
                    name: 'styles',
                    test: /\.(sa|sc|c)ss$/,
                    chunks: 'all',
                    enforce: true
                }
            },
        });
    });
},
```

## 动态插入首屏 Loading

添加首屏白屏动态，利用 `webpack` 插件 `html-webpack-plugin-before-html-processing` 动态写入一个 `loading` 状态。

根目录创建插件文件：`vue-skeleton-plugin`

```js
const fs = require('fs');

module.exports = class VueSkeletonPlugin {
    constructor(options) {
        this.options = options;
    }

    parseSkeletonHtml() {
        // 传入 loading 文件路径
        const { skeletonPath } = this.options;
        try{
            // 解析文件
            const data = fs.readFileSync(skeletonPath, 'utf8');
            return data;
        }catch(e){
            throw new Error('读取 skeleton.html ：' + JSON.stringify(e));
        }
    }

    apply(compiler) {
        const result = this.parseSkeletonHtml();
        compiler.hooks.compilation.tap(
            'VueSkeletonPlugin',
            (compilation) => {
                // 插件逻辑 调用 compilation 提供的 plugin 方法
                compilation.plugin(
                    'html-webpack-plugin-before-html-processing',
                    function (htmlPluginData) {
                        // 在 index.html 替换
                        let resultHTML = htmlPluginData.html.replace(
                            '<!-- config skeleton inset -->',
                            result
                        );
                        // 返回修改后的结果
                        htmlPluginData.html = resultHTML;
                    }
                );
            }
        );
    }
};

```

在 `vue.config.js` 使用本地插件

```js
configureWebpack: config => {
    // ...
    config.plugins.push(
        new VueSkeletionPlugin({
            // loading 状态
            skeletonPath: resolve('public/skeletons/loading.html')
        })
    );
},
```
