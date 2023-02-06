# NPM 依赖管理

## 创建

```
npm init 
```

创建新的`package.json`文件
```
{
  "name": npm,
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "mine",
    "js"
  ],
  "author": "Mondo",
  "license": "ISC"
}
```

## 编写

可在项目目录下新建 `index.js` 来编写代码

## 发布

 * [注册](https://www.npmjs.com/)
 * 登录

```
// 登录
npm login

// 发布
npm publish
// 返回下面的信息就是发布成功了 
+ my-npm@1.0.0
```

以上后我们可在项目中直接`npm`自己的模块包了。

## 更新

当我们要修改直接的模块包，想要更新时，先执行

```
// 更新 package.json 中的 version 版本
npm version patch

npm publish

```

一些`npm`另外的操作

```
//可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
npm update <package>

//可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
npm cache clear

//可以撤销发布自己发布过的某个版本代码
npm unpublish <package>@<version>

```

## 修改 node_module 包，却不受重新安装的影响

使用补丁方法

```bash
yarn add patch-package postinstall-postinstall -D
```

添加命令

```bash
 "scripts": {
+  "postinstall": "patch-package"
 }
```
尝试修改 `node_module` 包中的源码；修改后打补丁

```bash
yarn patch-package package-name
```

成功后出现补丁目录 `patchs`

![](https://cdn.nlark.com/yuque/0/2021/png/124135/1638495326004-3168e7c9-7f78-43d1-a2df-1dd17ec63b68.png)

文件中的版本号是针对修改包的版本号。**如果包需要更细，需要再次对源码进行修改并重新打补丁。**