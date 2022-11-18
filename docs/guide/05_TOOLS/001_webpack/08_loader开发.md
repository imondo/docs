# loader 开发

## loader-runner

loader-runner 允许在不安装 webpack 的情况下运行 loaders

* 作为 webpack 的依赖， webpack 中使用它执行 loader
* 进行 loader 的开发和调试

```js
const { runLoaders } = require('loader-runner')
const fs = require('fs')
const path = require('path')

runLoaders({
    resource: path.join(__dirname, './src/demo.txt'),
    loaders: [
        path.join(__dirname, './src/test-loader.js')
    ],
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs)
}, (err, res) => {
    err ? console.log(err) : console.log(res)
})
```

## loader 参数获取

通过 loader-utils 的 `getOptions` 方法获取

```js
const loaderUtils = require('loader-utils')
module.exports = content => {
    const { name } = loaderUtils.getOptions(this)
}
```

## loader 异步处理

通过 `this.async` 来返回一个异步函数

* 第一个参数是 Error，第二个参数是处理的结果

```js
module.exports = function(input) {
    const callback = this.async()
    // no callback => return 
    callback(null, input)
}
```

## loader 使用缓存

webpack 中默认开启 loader 缓存

* 可以使用 `this.cacheable(false)` 关掉缓存

缓存条件：loader 的结果在相同的输入下有确定的输出

* 有依赖的 loader 无法使用缓存

## loader 文件输出

通过 `this.emitFile` 进行文件写入

## 开发自动合成雪碧图 loader

* 如何将两张图片合成一张图片

```js
const Spritesmith = require('spritesmith')
const sprites = ['./image/1.png', './image/2.png']
Spritesmith.run({ src: sprites }, function handleResult(err, result) {
    result,image;
    result.coordinates;
    result.properties;
})
```

## 简单的写入文件内容 loader

[具体源码](https://github.com/one-pupil/study/tree/master/webpack/test-loader)