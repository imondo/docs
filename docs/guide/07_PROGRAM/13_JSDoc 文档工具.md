# JSDoc 文档工具

JSDoc 是一个自动化生成 JavaScript 文档工具，它是利用对 JavaScript 函数的特定注释来编译成 HTML 文件的一个文档工具。<br />

<a name="ojEXE"></a>
## 安装

<br />全局安装或者局部安装：
```javascript
npm install jsdoc -g

npm install jsdoc -save-dev
```
<a name="YroaW"></a>
## 基本使用
只要在 JavaScript  中写好注释，利用命令即可：
```javascript
jsdoc a.js b.js ...
```
当然我们也可以在项目下定义 `jsdoc.json` 配置文件，通过 `-c` 参数来指定：
```javascript
jsdoc -c jsdoc.json
```
可以在 `package.json` 中的 `scripts` 添加命令：
```json
{
	"scripts": {
  	"docs": "jsdoc -c jsdoc.json"
  }
}
```
这样我们就可以通过在项目下执行 `npm run docs` 命令来生成文档了。
<a name="nSEGF"></a>
## 配置文件
常用的配置文件
```json
{
  "source": {
    "include": [ "src/" ],
    "exclude": [ "src/libs" ]
  },
  "opts": {
    "template": "templates/default",
    "encoding": "utf8",
    "destination": "./docs/",
    "recurse": true,
    "verbose": false
  }
}
```

- `source` 表示传递给 JSDOC 的文件
- `source.include` 表示 JSDOC 需要扫描哪些文件
- `source.exclude` 表示 JSDOC 需要排除哪些文件
- `opts` 表示传递给 JSDOC 的选项
- `opts.template` 生成文档的模板，默认是 `templates/default`
- `opts.encoding` 读取文件的编码，默认是 `utf8`
- `opts.destination` 生成文档的路径，默认是 `./out/`
- `opts.recurse` 运行时是否递归子目录
- `opts.verbose` 运行时是否输出详细信息，默认是 `false`



<a name="CFdGV"></a>
## 注释
```javascript
/**
* @author Mondo
* @description list 数据结构 转换成 树结构
* @param {Array} data 需要转换的数据
* @param {String} id 节点 id
* @param {String} pid 父级节点 id
* @param {String} child 子树为节点对象的某个属性值
* @param {Object} labels 需要新增的字段名集合 { label: 'category_name' }
* @return {Array}
*
* @example
* formatListToTree({data: [{id:1}, {id: 2}, {id: 3, pid: 1}]})
* =>
* [ { id: 1, children: [ {id: 3, pid: 1} ] }, { id: 2 } ]
*/

function formatListToTree({
  data = [],
  id = "id",
  pid = "pid",
  child = "children",
  labels = null
}) {
...
}
```
常见的 JavaScript 块级注释，必须以 `/**` 开头，不然会被忽略掉。<br />
<br />下面介绍一些常见的级块标签：

- `@author` 该类/方法的作者。
- `@class` 表示这是一个类。
- `@function/@method` 表示这是一个函数/方法(这是同义词)。
- `@private` 表示该类/方法是私有的，JSDOC 不会为其生成文档。
- `@name` 该类/方法的名字。
- `@description` 该类/方法的描述。
- `@param` 该类/方法的参数，可重复定义。
- `@return` 该类/方法的返回类型。
- `@link` 创建超链接，生成文档时可以为其链接到其他部分。
- `@example` 创建例子。



<a name="7Yutm"></a>
## 主题

<br />JSDoc 默认的主题可能不近如人意，不过大型交友网站上给我们提供了还不错的主题，只要我们对应 `install` 下来配置就行。推荐两款还不错的主题：<br />

- [docdash](https://github.com/clenemt/docdash)
- [minami](https://github.com/nijikokun/minami)


<br />**配置主题：**<br />**

- 下载下来
```javascript
npm install docdash --save-dev
```

- 在 `jsdoc.json` 文件中配置
```json
{
  "opts": {
    "template": "node_modules/docdash"
  }
}
```
<a name="yk2BM"></a>
## 模版
对主题还是不满意，我们也可以在 `jsdoc.json`  中指定自己的模版
```json
{
  "templates": {
    "cleverLinks": true,
    "default": {
      "layoutFile": "plugins/layout.tmpl"
    }
  }
}
```
模版文件其实就是主题中[自定义模版](https://github.com/one-pupil/js-utils/blob/master/plugins/layout.tmpl)。<br />

<a name="XEJza"></a>
## 部署
这一部分可参考 [travis-cli](https://docs.imondo.cn/docs/%E5%B7%A5%E7%A8%8B%E5%8C%96/10.vuepress%E4%B8%8Etravis-cli%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2.html#%E9%85%8D%E7%BD%AE) 持续集成。<br />
<br />[js-utils](http://js.imondo.cn) 是作者君利用 JSDoc  搭建的一个日常函数工具库，可以参考里面的配置。<br />
<br />**参考：**<br />[jsdoc](https://jsdoc.app/index.html)**
