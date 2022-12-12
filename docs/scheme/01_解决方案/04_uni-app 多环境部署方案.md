# uni-app 多环境部署方案


## 前言

最近几周都在处理公司的移动业务，而为在后期能统一多端，解放自己，迎合公司的技术栈；选用了 `uni-app` 来开发。开发前期重新对公司移动业务做深入了解，重构大部分业务逻辑，也抽离出基础组件；但实际到部署的时候，出现来问题；由于现在只考虑 `H5` 端，部署和测试会出现多环境配置，但是我使用的 `HBuilderX` 工具创建的工程，所以只存在开发环境：`development` 和生产环境：`production`。

## 尝试几种方式

查询[官网](https://uniapp.dcloud.net.cn/)和论坛并没有很好的配置方案；官网的一些配置可以提供参考。

- package.json

对于根目录下 [package.json](https://uniapp.dcloud.net.cn/collocation/package.html) 里可以提供对**不同平台**的编译处理，这里指不同平台并不是不同环境，环境还是只有开发和生产两种环境

- vue.config.js

由于没有使用 VUE3 来开发，所以默认的配置项还是基于 webpack。如果项目根目录没有该配置项，可以自行创建 [vue.config.js](https://uniapp.dcloud.net.cn/collocation/vue-config.html) 文件，但是很遗憾还是没有可以处理多种环境下的一个配置。而且它还存在一些约束：


![uniapp.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1132aacde9d46a5bd3da871d5d29738~tplv-k3u1fbpfcp-watermark.image?)

不过它可以添加一些自定义的变量

```js
const webpack = require('webpack')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'].VUE_APP_TEST = '"test"'
        return args
      })
  }
}
```

## 解决方案

多环境部署，实际是需要对应自己部署环境，存在不同配置项。而实际业务中存在的环境可以是无限的，一般最基础而言需要三种：

- 开发环境

- 测试环境

- 生产环境

对于公司现有业务，只针对 `H5` 端，需要的配置可能只有：

- 接口：开发、测试、生产对应的接口配置不同

- 部署路径：测试、开发对应的部署路径不同

如果我们解决这两个，那部署方案实现一大半。对于环境配置，从 `vue-cli` 中可以看到很多；`cli` 配置基于 `.env.x` 不同文件来获取不同配置项，这里我们可以参考它来自己实现获取配置项。

### 部署方式

部署方式，通过命令行来解决；后续可以更好的对接自动化部署，而项目中通过 `HBuilderX` 工具创建，需要使用它的 [cli](https://hx.dcloud.net.cn/cli/README) 程序，它支持常见的三端打包；`H5` 端打包命令，在 `package.json` 设置：

```json
"build": "cli publish --platform h5 --project 项目名称",
```

### 获取接口

项目根目录创建不同环境下需要的配置：`.env.test`、`.env.prod`。

```bash
# .env.test
NODE_ENV=test
BASE_API = '/test'
h5.router.base_config = '/h5/'
h5.title_config = 'h5'
```

实际上我们只需要测试和生产两种配置，开发配置项在代码内部修改，这样可以增加效率，不用每次修改后，再重启项目。

配置项对应不同环境，而环境可以通过在 `package.json` 中设置不同参数来区分；

```json
	"scripts": {
		"build:config:test": "node ./deploy/index --mode=test",
		"build:config:prod": "node ./deploy/index --mode=prod",
	},
```

可以获取 `process.argv` 变量读取到设置的环境；后续还想设置什么变量也可以在后面直接添加，类似：`--test=test`

```js
// yargs.js
module.exports = function() {
	let args = process.argv;
	let argv = {};
	for (let i = 2; i < args.length; ++i) {
		let cur = args[i];
		if (/^(--)(\S*)(=)/.test(cur)) {
			const keys = cur.split('=')
			argv[keys[0].slice(2)] = keys[1];
		}
	}
	return argv
}

/**
 * {
 *      mode: 'test'
 * }
 */
```

获取配置后，需要读取配置，这里直接使用 `node` 的 `fs` 模块读取文件内容

```js
const fs = require('fs')
const path = require('path')
// 解析函数
function parse() {
    ...
}

module.exports = function() {
    // 获取环境
	const config = yargs();
	
	const env = config.mode;
	const envPath = path.resolve(__dirname, '../../') + '/.env.' + env
	
	try{
		const data = fs.readFileSync(envPath, 'utf8')
        // 解析文件
		return parse(data)
	}catch(e){
		console.log('读取env出错：' + JSON.stringify(e));
	}
}

```

其中解析函数，由于不想新增依赖增加项目负担，直接参考 [dotenv](https://github.com/motdotla/dotenv/blob/master/lib/main.js) 的 parse 函数解析出文件内容；得到类似的对象：

```js
{
    NODE_ENV: 'test',
    BASE_API: '/test',
    // ...
}
```

解析出配置内容，接下来动态配置文件；由于项目存在可能部署在客户内网环境下，这里采用动态生产一个共用的配置文件，在项目获取该配置项；后续运维人员可以想配置什么就配置什么。

```js
// 写入 /static/global.js
writeGlobalConfig()

function writeGlobalConfig() {
	const _global = {}
	for (let key in config) {
		if (key.includes('_API')) {
			_global[key] = config[key]
		}
	}
	const data = `window._GLOBAL__ = ${JSON.stringify(_global)}`
	fs.writeFileSync(path.resolve(__dirname, '../static/global.js'), data)
}
```

在项目中生产环境下取公用配置项

```js
const NODE_ENV = process.env.NODE_ENV;

/// 默认根目录模板 tempalte.h5 模板引入全局接口 static/global.js
const GLOBAL_CONFIG = window._GLOBAL__ || {};

const defaultAPI = {
	BASE_API: {
		development: ['/test'],
		production: GLOBAL_CONFIG.BASE_API,
	},
	SOCKET_API_BIDDIGN: {
		development: ['ws://test'],
		production: GLOBAL_CONFIG.SOCKET_API_BIDDIGN,
	},
    // ...
}
```

### 部署路径

`PC` 端或者是 `H5` 测试和生产环境上的部署路径可能会不同；由于创建项目使用其开发工具创建，需要统一工具和更方便的更新 `uni-app`，不考虑使用  `vue-cli` 方式。只能动态修改 `manifest.json` 文件。

`uni-app` 的部署路径是修改 `manifest.json` 中 `h5.router.base`。对应 Router 中的 base

```js
// manifest.js
const fs = require('fs')
const path = require('path')

const manifestPath = path.resolve(__dirname, '../../') + '/manifest.json'

let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' })
function replaceManifest(path, value) {
  const arr = path.split('.')
  const len = arr.length
  const lastItem = arr[len - 1]

  let i = 0
  let ManifestArr = Manifest.split(/\n/)

  for (let index = 0; index < ManifestArr.length; index++) {
    const item = ManifestArr[index]
    if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
    if (i === len) {
      const hasComma = /,/.test(item)
      ManifestArr[index] = item.replace(new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`), `"${lastItem}": ${value}${hasComma ? ',' : ''}`)
      break;
    }
  }

  Manifest = ManifestArr.join('\n')
}
module.exports = function(options) {
	for (let key in options) {
		replaceManifest(key, `"${options[key]}"`)
	}
	fs.writeFileSync(manifestPath, Manifest, {
	  "flag": "w"
	})
}
```

前面我们已经获取到配置文件内容，这里可以直接修改文件；这里需要给一个标明这是修改 `manifest.json` 的后缀。

```bash
h5.router.base_config = '/h5/'
h5.title_config = 'h5'
```
这里配置项如果 `_confg` 结束的变量就是修改 `manifest.json` 。

```js
const path = require('path')
const fs = require('fs')
const env = require('./modules/readEnv')
const parseManifest = require('./modules/manifest')
const config = env();

function writeManifest() {
	const _global = {}
	for (let key in config) {
		if (key.includes('_config')) {
			const k = key.slice(0, -7)
			_global[k] = config[key]
		}
	}
	parseManifest(_global);
}
```

### 命令行

准备工作完成后，可以编写对应的命令，来简化我们的操作；

```json
	"scripts": {
		"build": "cli publish --platform h5 --project test-h5",
		"build:config:test": "node ./deploy/index --mode=test",
		"build:config:prod": "node ./deploy/index --mode=prod",
		"build:prod": "npm run build:config:prod && npm run build",
		"deploy:test": "npm run build:config:test && npm run build && fd-cli"
	},
```

`&&` 符号是串行命令；`&` 是并行命令，其中 [fd-cli](https://github.com/imondo/fronted-deploy-cli) 是个部署命令，也是我以前基于业务需要开发的一个前端简易部署命令。

### 其他

这里只针对 `H5` 端做了处理，如果需要做多平台，也可以在命令行后面接不同平台参数，然后在部署打包前处理好逻辑；比如在打包前根据自己定义的环境变量添加参数

```js
// vue.config.js
const webpack = require('webpack')

// 生成不同环境不同平台的配置
const config = require('./config')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        // config.VUE_APP_TEST
        for(let key in config) {
            args[0]['process.env'][key] = `"${config.VUE_APP_TEST}"`
        }
        return args
      })
  }
}
```

## 总结

在开发阶段完成后，需要特别注意一些重复的步骤或者是需要手动修改的操作，只要是手动修改，就会增加上线分险，特别是后来者接受项目的时候。**当然也要文档齐全**。
