(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{342:function(e,s,n){"use strict";n.r(s);var a=n(18),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"面试系列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试系列"}},[e._v("#")]),e._v(" 面试系列")]),e._v(" "),n("h2",{attrs:{id:"html"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[e._v("#")]),e._v(" HTML")]),e._v(" "),n("ul",[n("li",[e._v("HTML整体执行")])]),e._v(" "),n("ol",[n("li",[n("p",[e._v("加载整体HTML文件")])]),e._v(" "),n("li",[n("p",[e._v("至上而下解析html")])]),e._v(" "),n("li",[n("p",[e._v("解析html建立dom树，遇到诸如"),n("code",[e._v("<script>")]),e._v("、"),n("code",[e._v("<link>")]),e._v("等标签时，就会去下载相应内容，并解析、执行。如果是"),n("code",[e._v("<link>")]),e._v("标签，解析css构建CSSOM树")])]),e._v(" "),n("li",[n("p",[e._v("DOM和CSSOM结合生成render树")])]),e._v(" "),n("li",[n("p",[e._v("布局render树（Layout/reflow），负责各元素尺寸、位置的计算")])]),e._v(" "),n("li",[n("p",[e._v("绘制render树（paint），绘制页面像素信息")])]),e._v(" "),n("li",[n("p",[e._v("浏览器会将各层的信息发送给GPU，GPU会将各层合成（composite），显示在屏幕上。")])])]),e._v(" "),n("p",[e._v("构建DOM树 -> 构建CSSOM树 -> 构建Render树 -> 布局layout")]),e._v(" "),n("ul",[n("li",[e._v("缓存机制")])]),e._v(" "),n("h2",{attrs:{id:"css"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[e._v("#")]),e._v(" CSS")]),e._v(" "),n("ul",[n("li",[e._v("BFC")])]),e._v(" "),n("p",[e._v("块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。")]),e._v(" "),n("ul",[n("li",[e._v("CSS优先级")])]),e._v(" "),n("img",{attrs:{src:"_img/editor/css.png"}}),e._v(" "),n("ul",[n("li",[e._v("盒子模型")])]),e._v(" "),n("img",{attrs:{src:"_img/editor/box-model.png"}}),e._v(" "),n("ul",[n("li",[e._v("box-sizing")])]),e._v(" "),n("p",[e._v("有两个重要的属性："),n("code",[e._v("border-box")]),e._v("，"),n("code",[e._v("content-box")]),e._v("；默认值"),n("code",[e._v("content-box")]),e._v("。")]),e._v(" "),n("p",[n("code",[e._v("content-box")]),e._v(": 在宽度和高度之外绘制元素的内边距和边框；\n"),n("code",[e._v("border-box")]),e._v(": 在宽度和高度之内绘制元素的内边距和边框；")]),e._v(" "),n("p",[n("strong",[e._v("它们的宽高度都和"),n("code",[e._v("margin")]),e._v("无关")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// W = content + 10 * 2 + 5 * 2  H = 10 * 2 + 5 * 2\ndiv {\n  // width: 200px;\n  padding: 10px;\n  border: 5px solid gray;\n  margin: 10px;\n  // height: 100px;\n  box-sizing: border-box;\n}\n\n// 200 × 100 \ndiv {\n  width: 200px;\n  padding: 10px;\n  border: 5px solid gray;\n  margin: 10px;\n  height: 100px;\n  box-sizing: border-box;\n}\n// W = 200 + 5 * 2 + 10 * 2  H = 100 + 5 * 2 + 10 * 2\ndiv {\n  width: 200px;\n  padding: 10px;\n  border: 5px solid gray;\n  margin: 10px;\n  height: 100px;\n  box-sizing: content-box;\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br")])]),n("ul",[n("li",[n("p",[e._v("css选择器")])]),e._v(" "),n("li",[n("p",[e._v("flex布局")])]),e._v(" "),n("li",[n("p",[e._v("三等份布局")])]),e._v(" "),n("li",[n("p",[e._v("居中布局")])]),e._v(" "),n("li",[n("p",[e._v("预编译Less，Scss")])]),e._v(" "),n("li",[n("p",[e._v("Block")])])]),e._v(" "),n("p",[n("code",[e._v("div")]),e._v("默认撑满整个body")]),e._v(" "),n("p",[n("code",[e._v("float")]),e._v(" 脱离文档流，内容占据宽度")]),e._v(" "),n("p",[n("code",[e._v("relative")]),e._v(" 相对定位的元素并未脱离文档流，而绝对定位"),n("code",[e._v("absolute")]),e._v("的元素则脱离了文档流。在布置文档流中其它元素时。\n"),n("code",[e._v("absolute")]),e._v("元素不占据空间。"),n("code",[e._v("absolute")]),e._v("元素相对于最近的非 static 祖先元素定位。当这样的祖先元素不存在时，则相对于ICB（inital container block, 初始包含块）。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<div class="box">\n  <div style="float: left">浮动</div>\n  <div>内容</div>\n</div>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("h2",{attrs:{id:"js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[e._v("#")]),e._v(" JS")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("原生Js的DOM操作")])]),e._v(" "),n("li",[n("p",[e._v("JQ的DOM操作")])]),e._v(" "),n("li",[n("p",[e._v("数组的操作")])])]),e._v(" "),n("ol",[n("li",[e._v("增 push, unshift, splice, concat")]),e._v(" "),n("li",[e._v("删 pop, shift, splice")]),e._v(" "),n("li",[e._v("改 splice, 下标, map, reduce")]),e._v(" "),n("li",[e._v("查 indexOf(e, formIndex), lastIndexOf, includes, find, findIndex, some, every, filter")])]),e._v(" "),n("ul",[n("li",[e._v("JS的数据类型")])]),e._v(" "),n("p",[e._v("基本类型：String, Number, Boolean, Null, Undefined\n引用类型：Object")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("typeof 1; // number 有效\ntypeof ‘ ’;// string 有效\ntypeof true; // boolean 有效\ntypeof undefined; // undefined 有效\ntypeof null; // object 无效\ntypeof new Function(); // function 有效\ntypeof [] ; // object 无效\ntypeof new Date(); // object 无效\ntypeof new RegExp(); // object 无效\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("p",[n("code",[e._v("instanceof")]),e._v("运算符只能用于对象，不适用原始类型的值。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("'hello' instanceof String // false\nnull instanceof Object // false\nundefined instanceof Object // false\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("ul",[n("li",[n("p",[e._v("ES6的变量声明")])]),e._v(" "),n("li",[n("p",[e._v("Null和Undefind区别")])])]),e._v(" "),n("p",[n("code",[e._v("null")]),e._v(" 对象的引用 没有这个对象\n"),n("code",[e._v("undefind")]),e._v(" 声明变量，未赋值")]),e._v(" "),n("ul",[n("li",[e._v("Promise的使用")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const p = Promise.all([p1,p2,p3]);\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("p 的状态由 p1、p2、p3 决定，分成两种情况。")]),e._v(" "),n("p",[e._v("（1）只有p1、p2、p3的状态都变成"),n("code",[e._v("fulfilled")]),e._v("，p的状态才会变成"),n("code",[e._v("fulfilled")]),e._v("，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。\n（2）只要p1、p2、p3之中有一个被"),n("code",[e._v("rejected")]),e._v("，p的状态就变成"),n("code",[e._v("rejected")]),e._v("，此时第一个被"),n("code",[e._v("reject")]),e._v("的实例的返回值，会传递给p的回调函数。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const p = Promise.race([p1,p2,p3]);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的返回值。")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.im/post/5c179aad5188256d9832fb61",target:"_blank",rel:"noopener noreferrer"}},[e._v("怎么实现"),n("OutboundLink")],1)]),e._v(" "),n("ul",[n("li",[e._v("对象的深浅复制")])]),e._v(" "),n("p",[e._v("复杂的数据类型即是引用类型，它的值是对象，保存在堆内存中，包含引用类型值的变量实际上包含的不是对象本身，而是一个指向该对象的指针。从一个变量向另一个变量复制引用类型的值，复制的其实是指针地址而已，因此两个变量最终都指向同一个对象")]),e._v(" "),n("p",[e._v("浅复制优先考虑"),n("code",[e._v("Object.assign")]),e._v("函数;\n深复制优先考虑"),n("code",[e._v("lodash")]),e._v("中的"),n("code",[e._v("_.cloneDeep()")]),e._v("方法;\n简单的深复制并符合"),n("code",[e._v("JSON")]),e._v("格式可以考虑"),n("code",[e._v("JSON.parse(JSON.stringify(obj))")]),e._v("。")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Ajax的重复请求解决方案")])]),e._v(" "),n("li",[n("p",[e._v("对象的遍历")])])]),e._v(" "),n("p",[e._v("for ... in, $.each")]),e._v(" "),n("ul",[n("li",[e._v("对象的属性值判断")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const foo = {goo: undefined};\nfoo.hasOwnProperty('go'); // false\nfoo.hasOwnProperty('go'); // true\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("ul",[n("li",[e._v("JS的浮点数计算")])]),e._v(" "),n("h2",{attrs:{id:"vue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[e._v("#")]),e._v(" Vue")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("项目的搭建")])]),e._v(" "),n("li",[n("p",[e._v("常用指令的使用")])]),e._v(" "),n("li",[n("p",[e._v("v-for为什么指定key")])])]),e._v(" "),n("p",[e._v("DOM树的复用，更新\n使用v-for更新已渲染的元素列表时,默认用就地复用策略;列表数据修改的时候,他会根据key值去判断某个值是否修改,如果修改,则重新渲染这一项,否则复用之前的元素;")]),e._v(" "),n("ul",[n("li",[e._v("生命周期")])]),e._v(" "),n("p",[e._v("created, mounted")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("vue-router")])]),e._v(" "),n("li",[n("p",[e._v("路由页面的传值问题")])]),e._v(" "),n("li",[n("p",[e._v("路由query与params的区别")])]),e._v(" "),n("li",[n("p",[e._v("路由模式mode")])]),e._v(" "),n("li",[n("p",[e._v("怎么处理hash mode出现404")])]),e._v(" "),n("li",[n("p",[e._v("私有样式的处理")])]),e._v(" "),n("li",[n("p",[e._v("nextTick的作用")])]),e._v(" "),n("li",[n("p",[e._v("怎么操作DOM（ref）")])]),e._v(" "),n("li",[n("p",[e._v("组件的传值")])])]),e._v(" "),n("p",[e._v("props/$emit/$on, Bus, $attrs/$listeners, provide/inject, $parent/$children, ref")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("store的作用和属性")])]),e._v(" "),n("li",[n("p",[e._v("数据响应")])])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Object.defineProperty\n\nget set\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("h2",{attrs:{id:"http"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[e._v("#")]),e._v(" HTTP")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("常用请求方法")])]),e._v(" "),n("li",[n("p",[e._v("GET与POST的区别")])])]),e._v(" "),n("p",[n("code",[e._v("GET")]),e._v("，"),n("code",[e._v("POST")]),e._v("，"),n("code",[e._v("PUT")]),e._v("，"),n("code",[e._v("DELETE")])]),e._v(" "),n("p",[n("code",[e._v("GET")]),e._v(" 字节大小，可见，请求的 URL 中\n"),n("code",[e._v("POST")]),e._v(" 大小无限制，消息主体中发送的")]),e._v(" "),n("ul",[n("li",[e._v("服务器请求代理")])]),e._v(" "),n("h2",{attrs:{id:"项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目"}},[e._v("#")]),e._v(" 项目")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("大量数据的处理")])]),e._v(" "),n("li",[n("p",[e._v("行业的看法")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);