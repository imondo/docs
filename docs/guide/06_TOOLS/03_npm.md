# 如何发布自己模块包到NPM

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

