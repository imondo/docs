# webpack 打包库和组件

webpack 除了可以用来打包应用，也可以用来打包 js 库

实现一个大整数加法库的打包

* 需要打包压缩版和非压缩版本
* 支持 AMD/CJS/ESM 模块引入

## 库的目录结构和打包要求

目录结构

```js
|-- dist                          // 打包后输出目录
	|--test.js					  // 未压缩版本	
	|--test.min.js				  // 压缩版本 	
|-- src                           // 源码目录
	|--index.js
|-- package.json                  
|-- index.js                      // 引入库的入口 
|-- webpack.config.js        	  // 打包配置	
```

支持使用方式

* 可以直接通过 script 引入
* 支持 AMD/CJS/ESM 模块引入

## 如何将库暴露出去

* 大整数加法

  ```js
  export default function add(a, b) {
      let i = a.length - 1;
      let j = b.length - 1;
  
      let carry = 0;
      let ret = '';
      while (i >= 0 || j >= 0) {
          let x = 0;
          let y = 0;
          let sum;
  
          if (i >= 0) {
              x = a[i] - '0';
              i --;
          }
  
          if (j >= 0) {
              y = b[j] - '0';
              j --;
          }
  
          sum = x + y + carry;
  
          if (sum >= 10) {
              carry = 1;
              sum -= 10;
          } else {
              carry = 0;
          }
          // 0 + ''
          ret = sum + ret;
      }
  
      if (carry) {
          ret = carry + ret;
      }
  
      return ret;
  }
  ```

* 打包配置脚本

  ```js
  // webpack.config.js
  const TerserPlugin = require('terser-webpack-plugin');
  module.exports = {
      mode: 'none',
      entry: {
          test: './src/index.js',
          'test.min': './src/index.js'
      },
      output: {
          filename: '[name].js',
          library: 'Test', // 指定库的全局变量
          libraryExport: 'default',
          libraryTarget: 'umd' // 支持库的引入方式
      },
      optimization: {
          minimize: true,
          minimizer: [
              new TerserPlugin({
                  include: /\.min\.js$/,
              })
          ]
      }
  }
  ```

## 设置入口文件

* `package.json` 的 `main` 字段为 `index.js`

  ```js
  // index.js
  if (process.env.NODE_ENV === 'production') {
      module.exports = require('./dist/test.min.js');
  } else {
      module.exports = require('./dist/test.js');
  }
  ```

  

