# 我是如何开发第一个chrome插件的

自己摸鱼的时候，看盗版小说🤣发现总是弹出不可描述的广告页面，想着公共场所不合适，有啥办法可以去除广告，总不可能每次都点消除按钮，而 chorme 浏览器插件可以完美的实现这个小需求。


## 主要结构
chorme 浏览器插件主要就是由几个重要的文件组成：
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/928dd52e13ea4827a9f140d9491b9371~tplv-k3u1fbpfcp-zoom-1.image)
上图其实就是这个插件，我们可以看到其实 chorme 浏览器插件就是个页面，我们前端上手完全没有压力，而最重要的就是这个 `manifest.json` 文件。它是整个插件的配置
```json
{
	// 清单文件的版本，这个必须写，而且必须是2
	"manifest_version": 2,
	// 插件的名称
	"name": "demo",
	// 插件的版本
	"version": "1.0.0",
	// 插件描述
	"description": "简单的Chrome扩展demo",
	// 图标，一般偷懒全部用一个尺寸的也没问题
	"icons":
	{
		"16": "img/icon.png",
		"48": "img/icon.png",
		"128": "img/icon.png"
	},
	// 会一直常驻的后台JS或后台页面
	"background":
	{
		// 2 种指定方式，如果指定JS，那么会自动生成一个背景页
		"page": "background.html"
		//"scripts": ["js/background.js"]
	},
	// 浏览器右上角图标设置，browser_action、page_action、app必须三选一
	"browser_action": 
	{
		"default_icon": "img/icon.png",
		// 图标悬停时的标题，可选
		"default_title": "这是一个示例Chrome插件",
		"default_popup": "popup.html"
	},
	// 当某些特定页面打开才显示的图标
	/*"page_action":
	{
		"default_icon": "img/icon.png",
		"default_title": "我是 pageAction",
		"default_popup": "popup.html"
	},*/
	// 需要直接注入页面的 JS
	"content_scripts": 
	[
		{
			// "matches": ["http://*/*", "https://*/*"],
			// "<all_urls>" 表示匹配所有地址
			"matches": ["<all_urls>"],
			// 多个JS按顺序注入
			"js": ["js/jquery-1.8.3.js", "js/content-script.js"],
			// JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式
			"css": ["css/custom.css"],
			// 代码注入的时间，可选值： 
      // "document_start", "document_end",  "document_idle"，
      // 最后一个表示页面空闲时，默认 document_idle
			"run_at": "document_start"
		},
		// 这里仅仅是为了演示content-script可以配置多个规则
		{
			"matches": ["*://*/*.png", "*://*/*.jpg", "*://*/*.gif", "*://*/*.bmp"],
			"js": ["js/show-image-content-size.js"]
		}
	],
	// 权限申请
	"permissions":
	[
		"contextMenus", // 右键菜单
		"tabs", // 标签
		"notifications", // 通知
		"webRequest", // web请求
		"webRequestBlocking",
		"storage", // 插件本地存储
		"http://*/*", // 可以通过 executeScript 或者 insertCSS 访问的网站
		"https://*/*" // 可以通过 executeScript 或者 insertCSS 访问的网站
	],
	// 普通页面能够直接访问的插件资源列表，如果不设置是无法直接访问的
	"web_accessible_resources": ["js/inject.js"],
	// 插件主页，这个很重要，不要浪费了这个免费广告位
	"homepage_url": "https://www.baidu.com",
	// 覆盖浏览器默认页面
	"chrome_url_overrides":
	{
		// 覆盖浏览器默认的新标签页
		"newtab": "newtab.html"
	},
	// Chrome40以前的插件配置页写法
	"options_page": "options.html",
	// Chrome40以后的插件配置页写法，如果2个都写，新版Chrome只认后面这一个
	"options_ui":
	{
		"page": "options.html",
		// 添加一些默认的样式，推荐使用
		"chrome_style": true,
    // 默认值为false，表示以嵌入方式打开options页面；true表示在新的tab中打开options页面
    "open_in_tab": true
	},
	// 向地址栏注册一个关键字以提供搜索建议，只能设置一个关键字
	"omnibox": { "keyword" : "go" },
	// 默认语言
	"default_locale": "zh_CN",
	// devtools页面入口，注意只能指向一个HTML文件，不能是JS文件
	"devtools_page": "devtools.html"
}
```
上面是 `manifest.json` 的一些配置信息，如果需要详细的配置信息可以查看 [developer.chrome.com](https://developer.chrome.com/docs/extensions/mv3/getstarted/)。但当前开发前文需求的插件时，完全不需要这么多配置信息：
```json
{
  "manifest_version": 2,
  "name": "book_crx",
  "version": "1.0.0",
  "description": "简单的 Chrome 扩展在线阅读小说去掉广告",
  "icons": {
    "16": "img/icon.png",
    "48": "img/icon.png",
    "128": "img/icon.png"
  },
  "background": {
    "scripts": ["js/main.js"]
  },
  "content_scripts": [
    {
      "matches": ["http://m.biqu6.cc/*"] // 对应的小说网站
    }
  ]
}
```
新建一个插件目录 `book_ad`，对应配置信息新建文件
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/761e1c6dd6754389858bc41c54d92fc6~tplv-k3u1fbpfcp-zoom-1.image)
而 `main.js` 就是执行代码逻辑的文件了，再次梳理需求：去掉网站中的广告，由于这里是小说网站，所以我选择粗暴的直接去掉了页面中所有的 `img` 元素，代码也简单
```javascript
document.addEventListener('DOMContentLoaded', function() {
  console.log('我被执行了！');
  Array.from(document.querySelectorAll('img')).forEach(ele => {
    ele.remove();
  })
});
```
## 安装
开发完成后，就是安装问题了：**点击 chrome 右上角三个点 -> 更多工具 -> 扩展程序** 或者 直接访问 **chrome://extensions/ 地址**
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/001d8701722c43e7b520c5f87de51573~tplv-k3u1fbpfcp-zoom-1.image)
**开启开发者模式**后可以看到出现三个按钮选项
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/852cc7816d2049cab7012fb2156f26f4~tplv-k3u1fbpfcp-zoom-1.image)
点击【加载已解压扩展程序】直接加载 `book_ad` 目录
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2dce457208043b69bbaad7793eb314b~tplv-k3u1fbpfcp-zoom-1.image)
然后我们就可以看看效果啦

原谅我不能放效果，会被河*蟹

这下摸鱼可以不受广告困扰了。
## options 选项
上面实现了一个基本的插件，但是这个只能在一个小说网站上面可以使用我们的插件，如果摸鱼摸到其他盗版小说网站时又没用了，因为当前只配置了一个网站
```json
"content_scripts": [
    {
      "matches": ["http://m.biqu6.cc/*"]
    }
  ]
```
我们可以配置选项页面，来动态的配置多个网站，需要在 `manifest.json` 文件中配置 `options.html` 页面
```javascript
"options_page": "options.html",
"options_ui": {
    "page": "options.html",
    "chrome_style": true,
    "open_in_tab": true
},
```
再在根目录新建 `options.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>options</title>
</head>
<body>
  <h1>options</h1>
  <input id="input" type="text" placeholder="输入网站">
  <button id="btn">添加</button>
  <script src="js/options.js"></script>
</body>
</html>
```
然后在 `chrome://extensions/` 地址中找到插件，点击刷新；点击浏览器右侧扩展程序图标可以看到【选项】，点击可跳到我们自己写的 `options.html` 页面
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7360365fb0cf4cd98641ab26de98a35d~tplv-k3u1fbpfcp-zoom-1.image)
新建 `options.js`
```javascript
;(function(window, document){
  const S_KEY = '__book_ad__';
  document.querySelector('#btn').onclick = function() {
    const val = document.querySelectorAll('input')[0].value
    console.log(val)
    // 获取 background 端
    const page = chrome.extension.getBackgroundPage()
    page.getStore(S_KEY).then(site => {
      console.log(site)
      if (Array.isArray(site)) {
        site.push(val);
        page.setStore(S_KEY, site);
        alert('添加成功!')
      } else {
        page.setStore(S_KEY, [val]);
        alert('添加成功!')
      }
    })
    
  }
})(window, document)
```
## content_scripts
`content_scripts` 选项是内容脚本，当配置页面加载时执行的脚本，这里把逻辑都移到 `content_scripts.js` 中，先要配置 `manifest.json`
```json
"content_scripts": [
  {
    "matches": ["<all_urls>"],
    "js": [
      "js/content_scripts.js"
    ],
    "run_at": "document_end"
  }
],
```
新建 `content_scripts.js`
```javascript
console.log('我被执行了！');
// clearStore()
getStore('__book_ad__').then(sites => {
  console.log(sites);
  if (!Array.isArray(sites)) return;
  sites.forEach(site => {
    if (location.href.includes(site)) {
     	main();
    }
  })
})

function main() {
  const $imgs = document.querySelectorAll('img');
  const $bingo = document.querySelectorAll('bingo');
  const $object = document.querySelectorAll('object');
  Array.from($imgs).forEach(ele => {
    ele.remove();
  })
  Array.from($bingo).forEach(ele => {
    ele.remove();
  })
  Array.from($object).forEach(ele => {
    ele.remove();
  })
}

function setStore(key, value) {
  return new Promise(resolve =>
    chrome.storage.local.set({ [key]: value }, resolve)
  );
}

function getStore(key) {
  return new Promise(resolve => {
    chrome.storage.local.get(key, item => resolve(item[key]));
  });
}

function clearStore() {
  return new Promise(resolve => {
    chrome.storage.local.clear(() => resolve());
  });
}
```
这里我们使用 `chrome.store` 来存储网址配置，使用这个选项需要在 `manifest.json` 文件中配置权限
```json
  "permissions": [
    "storage"
  ]
```
**注意：**`chrome.storage` 中存储的数据，在开发者调式工具中看不到，这里我就使用代码清理数据了。


## 打包
点击 【打包扩展程序】按钮
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b4d68f7dafd4ff8990ba4c41e13b28b~tplv-k3u1fbpfcp-zoom-1.image)
选中目录打包生成 `.crx` 文件，不过它需要发布到谷歌应用上才能使用
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b332b8d5efa4534ad17daf63be9f1b2~tplv-k3u1fbpfcp-zoom-1.image)
## 总结
插件只是一个简单的使用，里面还有更多的细致的知识点可以帮助插件实现更多的功能。这次又是在自己生活中，发现需求点使用技术来解决。自己后面也使用 `vue` 尝试重新构建了一次，[源码在此](https://github.com/one-pupil/toy_crearad_crx)。


**注意：**
使用 `CDN` 时，加载程序会弹出如下错误
 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4b73e315eac46e193a7ab4fe7d1876b~tplv-k3u1fbpfcp-zoom-1.image)
需要在 `manifest.json` 添加字段
```json
"content_security_policy": "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; script-src 'self' 'unsafe-eval' https://cdn.jsdelivr.net; object-src 'self';"
```

