(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{229:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"前端常见下载处理方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端常见下载处理方案"}},[e._v("#")]),e._v(" 前端常见下载处理方案")]),e._v(" "),s("p",[e._v("下载是我们项目中常常会遇到的需求，不同的下载方案能呈现不同的效果，近期归纳下作者系统中用到常见几种下载处理方案")]),e._v(" "),s("h2",{attrs:{id:"a标签下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a标签下载"}},[e._v("#")]),e._v(" a标签下载")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<a href="test.xlsx" download="test.txt">下载</a>\n')])])]),s("p",[e._v("这种是我们常见的下载静态文件的处理方式，这种适用于项目文件是"),s("strong",[e._v("静态")]),e._v("的以及"),s("strong",[e._v("存放地点不变动")]),e._v("的。"),s("code",[e._v("download")]),e._v("属性还可以对文件命名处理")]),e._v(" "),s("h2",{attrs:{id:"form表单下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form表单下载"}},[e._v("#")]),e._v(" Form表单下载")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<form method="get" target="name" action="test.com">\n    <input type="hidden" name="token" value="token">\n    <input type="hidden" name="url" value="/api/download">\n</form>\n')])])]),s("p",[e._v("表单的下载可以做特殊的"),s("code",[e._v("传值")]),e._v("处理，也可以传入更多的参数；请求方式也多种多样。")]),e._v(" "),s("h2",{attrs:{id:"blob流下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blob流下载"}},[e._v("#")]),e._v(" Blob流下载")]),e._v(" "),s("p",[e._v("用上面方式下载处理，当用户点击下载时，前端不能够很好的捕捉到请求的状态，而用"),s("code",[e._v("Blob")]),e._v("我们可以更灵活的来处理不同状态。")]),e._v(" "),s("blockquote",[s("p",[e._v("Blob 对象表示一个不可变、原始数据的类文件对象。")])]),e._v(" "),s("p",[e._v("简单的示例：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const disposition = decodeURI(xhr.getResponseHeader('Content-Disposition')); // 文件名处理\nconst dispositionArray = disposition.split('filename=');\nconst name = dispositionArray[dispositionArray.length - 1];\nconst disposition = decodeURI(xhr.getResponseHeader('Content-Disposition')); // 文件名处理\nconst dispositionArray = disposition.split('filename=');\nconst name = dispositionArray[dispositionArray.length - 1];\nconst blob = window.URL.createObjectURL(res.data); // 创建对象URL \nreader.onload = function(e) {\n  const link = document.createElement('a');\n  link.style.display = 'none';\n  link.href = blob;\n  link.setAttribute('download', decodeURI(fileName));\n  document.body.appendChild(link);\n  link.click();\n  document.body.removeChild(link);\n  window.URL.revokeObjectURL(blob);\n};\n")])])]),s("p",[e._v("后端需要设置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Access-Control-Expose-Headers: Content-Disposition\n")])])]),s("p",[e._v("通过后台返回的数据来判断是否显示错误提示，也可以根据接口不同状态值来显示。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('const reader = new FileReader();\nreader.onload = e => {\n  if (e.target.result.includes(\'"data":""\')) {\n    const result = JSON.parse(e.target.result);\n    console.log(result.msg);\n  }\n};\nreader.readAsText(response); // 读取指定的Blob中的内容，result属性中将包含一个字符串以表示所读取的文件内容。\n')])])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[e._v("以上的三种处理方案是我们常见的前端下载简单汇总，方案不同，效果不同，不过还是推荐"),s("code",[e._v("Blob")]),e._v("方式下载，这种处理方式，可以更加灵活的捕捉到不同状态，前端可以更加方便的处理。")])])}),[],!1,null,null,null);t.default=n.exports}}]);