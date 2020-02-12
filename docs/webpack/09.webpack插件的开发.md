# webpack 插件的开发

* 插件没有像 loader 那样的独立运行环境
* 只能在 webpack 里面运行

## 插件的基本结构

```js
class MyPlugin { // 插件名称
    constructor(options) {
    	this.options = options    
    }
    
    apply(complier) { // 插件上的 apply 方法
        // 插件 hooks
        compiler.hooks.done.tap('My Plugin', (stats) => {
            console.log('hello') // 插件逻辑
        })
    }
}
module.exports = MyPlugin
```

插件使用

```js
plugins: [ new MyPlugin() ]
```

## 错误处理

* 参数校验阶段可以直接 throw 的方式抛出

  ```js
  throw new Error('error')
  ```

  

* 通过 compilation 对象的 warnings 和 errors 接收

  ```js
  compilation.warnings.push('warning')
  compilation.errors.push('error')
  ```

## 通过 Compilation 文件写入

Compilation 上的 assets 可以用于文件写入

* 可以将 zip 资源包设置到 compilation.assets 对象上

文件写入 **webpack-sources**

```js
const { RawSource } = require('webpack-sources')
module.exports = class DemoPlugin {
    constructor(options) {
        this.options = options
    }
    apply(compiler) {
        const { name } = this.options
        // 触发 emit hook
        compiler.plugin('emit', (compilation, cb) => {
            compilation.assets[name] = new RawSource('demo')
            cb()
        })
    }
}
```

> 插件也可以通过暴露 hooks 的方式进行自身扩展

## zip 插件

* jszip 写入zip文件

  ```js
  npm i jszip -D
  
  var zip = new JSZip();
  
  zip.file("Hello.txt", "Hello World\n");
  
  var img = zip.folder("images");
  img.file("smile.gif", imgData, {base64: true});
  
  zip.generateAsync({type:"blob"}).then(function(content) {
      // see FileSaver.js
      saveAs(content, "example.zip");
  });
  
  /*
  Results in a zip containing
  Hello.txt
  images/
      smile.gif
  */
  ```

* Hooks 是 emit，是一个异步的 hook

* emit 生成文件阶段，读取的是 compilation.assets 对象的值

  * 可以将 zip 资源包设置到 compilation.assets 对象上

### zip-plugin

```js
// zip-plugin,js
const JSZip = require('jszip');
const path = require('path');
const RawSource = require('webpack-sources').RawSource;
const zip = new JSZip();

module.exports = class ZipPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        // webpack 编译钩子对象 文件生成节点
        compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, callback) => {
            const folder = zip.folder(this.options.filename); // 创建zip文件包
			
            // 处理文件
            for (let filename in compilation.assets) {
                const source = compilation.assets[filename].source(); // 文件source内容
                folder.file(filename, source); // 写入文件包
            }

            zip.generateAsync({
                type: 'nodebuffer'
            }).then((content) => {
                const outputPath = path.join(
                    compilation.options.output.path, 
                    this.options.filename + '.zip'
                );
				
                // 绝对路径转成相对路径
                const outputRelativePath = path.relative(
                    compilation.options.output.path, // 相对路径
                    outputPath // 绝对路径
                );
                
                // 转换成source内容
                compilation.assets[outputRelativePath] = new RawSource(content);

                callback();
            });
        });
    }
}

// webpack.config.js
const ZipPlugin = require('./zip-plug')
module.exports = {
    ...
    plugins: [
        new ZipPlugin()
    ]
}
```