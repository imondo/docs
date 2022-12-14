import{_ as s,c as n,o as l,a}from"./app.c07b7be5.js";const y=JSON.parse('{"title":"面试系列","description":"","frontmatter":{},"headers":[],"relativePath":"interview/01_records/01_公司面试系列.md","lastUpdated":1670995541000}'),p={name:"interview/01_records/01_公司面试系列.md"},e=a(`<h1 id="面试系列" tabindex="-1">面试系列 <a class="header-anchor" href="#面试系列" aria-hidden="true">#</a></h1><h2 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-hidden="true">#</a></h2><ul><li>HTML整体执行</li></ul><ol><li><p>加载整体HTML文件</p></li><li><p>至上而下解析html</p></li><li><p>解析html建立dom树，遇到诸如<code>&lt;script&gt;</code>、<code>&lt;link&gt;</code>等标签时，就会去下载相应内容，并解析、执行。如果是<code>&lt;link&gt;</code>标签，解析css构建CSSOM树</p></li><li><p>DOM和CSSOM结合生成render树</p></li><li><p>布局render树（Layout/reflow），负责各元素尺寸、位置的计算</p></li><li><p>绘制render树（paint），绘制页面像素信息</p></li><li><p>浏览器会将各层的信息发送给GPU，GPU会将各层合成（composite），显示在屏幕上。</p></li></ol><p>构建DOM树 -&gt; 构建CSSOM树 -&gt; 构建Render树 -&gt; 布局layout</p><ul><li>缓存机制</li></ul><h2 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h2><ul><li>BFC</li></ul><p>块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。</p><ul><li>CSS优先级</li></ul><ul><li>盒子模型</li></ul><ul><li>box-sizing</li></ul><p>有两个重要的属性：<code>border-box</code>，<code>content-box</code>；默认值<code>content-box</code>。</p><p><code>content-box</code>: 在宽度和高度之外绘制元素的内边距和边框； <code>border-box</code>: 在宽度和高度之内绘制元素的内边距和边框；</p><p><strong>它们的宽高度都和<code>margin</code>无关</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// W = content + 10 * 2 + 5 * 2  H = 10 * 2 + 5 * 2</span></span>
<span class="line"><span style="color:#A6ACCD;">div {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: 5px solid gray;</span></span>
<span class="line"><span style="color:#A6ACCD;">  margin: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // height: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 200 × 100 </span></span>
<span class="line"><span style="color:#A6ACCD;">div {</span></span>
<span class="line"><span style="color:#A6ACCD;">  width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: 5px solid gray;</span></span>
<span class="line"><span style="color:#A6ACCD;">  margin: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  height: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// W = 200 + 5 * 2 + 10 * 2  H = 100 + 5 * 2 + 10 * 2</span></span>
<span class="line"><span style="color:#A6ACCD;">div {</span></span>
<span class="line"><span style="color:#A6ACCD;">  width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: 5px solid gray;</span></span>
<span class="line"><span style="color:#A6ACCD;">  margin: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  height: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  box-sizing: content-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>css选择器</p></li><li><p>flex布局</p></li><li><p>三等份布局</p></li><li><p>居中布局</p></li><li><p>预编译Less，Scss</p></li><li><p>Block</p></li></ul><p><code>div</code>默认撑满整个body</p><p><code>float</code> 脱离文档流，内容占据宽度</p><p><code>relative</code> 相对定位的元素并未脱离文档流，而绝对定位<code>absolute</code>的元素则脱离了文档流。在布置文档流中其它元素时。 <code>absolute</code>元素不占据空间。<code>absolute</code>元素相对于最近的非 static 祖先元素定位。当这样的祖先元素不存在时，则相对于ICB（inital container block, 初始包含块）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div style=&quot;float: left&quot;&gt;浮动&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;内容&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-hidden="true">#</a></h2><ul><li><p>原生Js的DOM操作</p></li><li><p>JQ的DOM操作</p></li><li><p>数组的操作</p></li></ul><ol><li>增 push, unshift, splice, concat</li><li>删 pop, shift, splice</li><li>改 splice, 下标, map, reduce</li><li>查 indexOf(e, formIndex), lastIndexOf, includes, find, findIndex, some, every, filter</li></ol><ul><li>JS的数据类型</li></ul><p>基本类型：String, Number, Boolean, Null, Undefined 引用类型：Object</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">typeof 1; // number 有效</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof ‘ ’;// string 有效</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof true; // boolean 有效</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof undefined; // undefined 有效</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof null; // object 无效</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof new Function(); // function 有效</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof [] ; // object 无效</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof new Date(); // object 无效</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof new RegExp(); // object 无效</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>instanceof</code>运算符只能用于对象，不适用原始类型的值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&#39;hello&#39; instanceof String // false</span></span>
<span class="line"><span style="color:#A6ACCD;">null instanceof Object // false</span></span>
<span class="line"><span style="color:#A6ACCD;">undefined instanceof Object // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>ES6的变量声明</p></li><li><p>Null和Undefind区别</p></li></ul><p><code>null</code> 对象的引用 没有这个对象 <code>undefind</code> 声明变量，未赋值</p><ul><li>Promise的使用</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const p = Promise.all([p1,p2,p3]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>p 的状态由 p1、p2、p3 决定，分成两种情况。</p><p>（1）只有p1、p2、p3的状态都变成<code>fulfilled</code>，p的状态才会变成<code>fulfilled</code>，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。 （2）只要p1、p2、p3之中有一个被<code>rejected</code>，p的状态就变成<code>rejected</code>，此时第一个被<code>reject</code>的实例的返回值，会传递给p的回调函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const p = Promise.race([p1,p2,p3]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的返回值。</p><p><a href="https://juejin.im/post/5c179aad5188256d9832fb61" target="_blank" rel="noreferrer">怎么实现</a></p><ul><li>对象的深浅复制</li></ul><p>复杂的数据类型即是引用类型，它的值是对象，保存在堆内存中，包含引用类型值的变量实际上包含的不是对象本身，而是一个指向该对象的指针。从一个变量向另一个变量复制引用类型的值，复制的其实是指针地址而已，因此两个变量最终都指向同一个对象</p><p>浅复制优先考虑<code>Object.assign</code>函数; 深复制优先考虑<code>lodash</code>中的<code>_.cloneDeep()</code>方法; 简单的深复制并符合<code>JSON</code>格式可以考虑<code>JSON.parse(JSON.stringify(obj))</code>。</p><ul><li><p>Ajax的重复请求解决方案</p></li><li><p>对象的遍历</p></li></ul><p>for ... in, $.each</p><ul><li>对象的属性值判断</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const foo = {goo: undefined};</span></span>
<span class="line"><span style="color:#A6ACCD;">foo.hasOwnProperty(&#39;go&#39;); // false</span></span>
<span class="line"><span style="color:#A6ACCD;">foo.hasOwnProperty(&#39;go&#39;); // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>JS的浮点数计算</li></ul><h2 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-hidden="true">#</a></h2><ul><li><p>项目的搭建</p></li><li><p>常用指令的使用</p></li><li><p>v-for为什么指定key</p></li></ul><p>DOM树的复用，更新 使用v-for更新已渲染的元素列表时,默认用就地复用策略;列表数据修改的时候,他会根据key值去判断某个值是否修改,如果修改,则重新渲染这一项,否则复用之前的元素;</p><ul><li>生命周期</li></ul><p>created, mounted</p><ul><li><p>vue-router</p></li><li><p>路由页面的传值问题</p></li><li><p>路由query与params的区别</p></li><li><p>路由模式mode</p></li><li><p>怎么处理hash mode出现404</p></li><li><p>私有样式的处理</p></li><li><p>nextTick的作用</p></li><li><p>怎么操作DOM（ref）</p></li><li><p>组件的传值</p></li></ul><p>props/$emit/$on, Bus, $attrs/$listeners, provide/inject, $parent/$children, ref</p><ul><li><p>store的作用和属性</p></li><li><p>数据响应</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Object.defineProperty</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">get set</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-hidden="true">#</a></h2><ul><li><p>常用请求方法</p></li><li><p>GET与POST的区别</p></li></ul><p><code>GET</code>，<code>POST</code>，<code>PUT</code>，<code>DELETE</code></p><p><code>GET</code> 字节大小，可见，请求的 URL 中 <code>POST</code> 大小无限制，消息主体中发送的</p><ul><li>服务器请求代理</li></ul><h2 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-hidden="true">#</a></h2><ul><li><p>大量数据的处理</p></li><li><p>行业的看法</p></li></ul>`,62),o=[e];function i(c,t,d,r,C,A){return l(),n("div",null,o)}const h=s(p,[["render",i]]);export{y as __pageData,h as default};
