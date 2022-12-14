# webpack 多页应用打包方案

## 基本思路

* 每个页面对应一个 `entry`，一个 `html-webpack-plugin`

  缺点： 每次新增或删除页面需要改 `webapck` 配置

* 动态获取 `entry` 和设置 `html-webapck-plugin` 数量

* 利用 `glob.sync`

  ```js
  // 约定文件规则
  module.exports = {
      entry: {
          index: './src/index/index.js',
          b: './src/b/index.js'
      }
  }
  
  // 动态获取
  npm i glob -D
  module.exports = {
      entry: glob.sync(path.join(__dirname, './src/*/index.js'))
  }
  ```

  

## 如何打包

```js
const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));

    Object.keys(entryFiles)
        .map((index) => {
            const entryFile = entryFiles[index];
            // '/Users/cpselvis/my-project/src/index/index.js'

            const match = entryFile.match(/src\/(.*)\/index\.js/);
            const pageName = match && match[1];

            entry[pageName] = entryFile;
            htmlWebpackPlugins.push(
                new HtmlWebpackPlugin({
                    inlineSource: '.css$',
                    template: path.join(__dirname, `src/${pageName}/index.html`),
                    filename: `${pageName}.html`,
                    chunks: ['vendors', pageName],
                    inject: true,
                    minify: {
                        html5: true,
                        collapseWhitespace: true,
                        preserveLineBreaks: false,
                        minifyCSS: true,
                        minifyJS: true,
                        removeComments: false
                    }
                })
            );
        });

    return {
        entry,
        htmlWebpackPlugins
    }
}

const { entry, htmlWebpackPlugins } = setMPA();

module.exoprts = {
    entry: entry
    plugins: [
    	...
    ].concat(htmlWebpackPlugins)
}
```