import{_ as s,c as a,o as n,a as e}from"./app.c07b7be5.js";const _=JSON.parse('{"title":"小程序项目入坑实践","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/1113_微信端/01_小程序项目入坑实践.md","lastUpdated":1670995541000}'),l={name:"guide/04_FRONTEND/1113_微信端/01_小程序项目入坑实践.md"},p=e(`<h1 id="小程序项目入坑实践" tabindex="-1">小程序项目入坑实践 <a class="header-anchor" href="#小程序项目入坑实践" aria-hidden="true">#</a></h1><p>公司由于小程序原开发需求变动，产品决定重新开始设计新的小程序，人员紧张，导致我接了这个坑~。原开发时准备使用 <code>mpvue</code> 来开发，<a href="https://segmentfault.com/a/1190000014748397" target="_blank" rel="noreferrer">前篇文章</a>介绍了一些关于<code>mpvue</code>的写法，后来在我将简易框架搭建后，发现<code>mpvue</code>的组件分发支持不是很友好，所以弃用，还是用原生来开发程序。</p><p>基本使用可能各大教程都已说的明明白白，这里就不啰嗦，改篇主要是记录下本人开发过程中所遇到的一些问题。</p><h2 id="不能使用-async-await语法糖" tabindex="-1">不能使用 <code>async</code> <code>await</code>语法糖 <a class="header-anchor" href="#不能使用-async-await语法糖" aria-hidden="true">#</a></h2><p>小程序还是不支持这类语法糖，本人解决办法就是在使用该语法代码中引用了<a href="https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime" target="_blank" rel="noreferrer">regeneratorRuntime</a></p><h2 id="引入图片时-请先压缩图片-小程序大小限制2m多一点" tabindex="-1">引入图片时，请先压缩图片，小程序大小限制2M多一点 <a class="header-anchor" href="#引入图片时-请先压缩图片-小程序大小限制2m多一点" aria-hidden="true">#</a></h2><p>尽量少引用本地图片，能放服务器的图片还是放在服务器上，毕竟程序大小有限制，本人在没注意图片压缩时，上传代码突然报了个程序代码限制在2M内。</p><h2 id="input输入数字" tabindex="-1">input输入数字 <a class="header-anchor" href="#input输入数字" aria-hidden="true">#</a></h2><p>一般项目可能都会碰到金额的输入限制，这里小程序<code>input</code>组件，可利用<code>type = &#39;digit&#39;</code>，来控制输入只能是数值和小数点。</p><h2 id="textarea组件键盘遮挡问题" tabindex="-1">textarea组件键盘遮挡问题 <a class="header-anchor" href="#textarea组件键盘遮挡问题" aria-hidden="true">#</a></h2><p>这个可能大部分都可预见，各机型对<code>textarea</code>组件输入可能都有问题，本人开发遇见的是安卓机，尤其是华为，当聚焦输入时键盘挡住输入，并没有如预期页面向上滚动输入，暂时的兼容解决办法</p><p>在页面的底部增加元素，当聚焦输入时，给其高度，让页面滚动到键盘不可遮住的位置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;!--控制textarea键盘遮挡  --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;view style=&#39;height: {{pageScrollHeight}}px&#39;&gt;&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>当我们使用组件的聚焦，失焦来处理后，发现在换行时都会触发<code>textarea</code>的聚焦事件，所以我们的具体代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// Textarea 获取键盘高度</span></span>
<span class="line"><span style="color:#A6ACCD;">  focusTextarea: function(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const _this = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let height = e.detail.height; // 键盘高度</span></span>
<span class="line"><span style="color:#A6ACCD;">    _this.setData({</span></span>
<span class="line"><span style="color:#A6ACCD;">      pageScrollHeight: (height - 60)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.pageScrollToBottom();</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 换行时</span></span>
<span class="line"><span style="color:#A6ACCD;">  changTextarea: function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.setData({</span></span>
<span class="line"><span style="color:#A6ACCD;">      hasFocus: false</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 失去焦点</span></span>
<span class="line"><span style="color:#A6ACCD;">  blurTextarea: function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const _this = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">    _this.setData({</span></span>
<span class="line"><span style="color:#A6ACCD;">      pageScrollHeight: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">      hasFocus: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> // 页面滚动到底部</span></span>
<span class="line"><span style="color:#A6ACCD;">  pageScrollToBottom: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.data.hasFocus) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      wx.createSelectorQuery().select(&#39;#page-scroll&#39;).boundingClientRect(function (rect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 使页面滚动到底部</span></span>
<span class="line"><span style="color:#A6ACCD;">        wx.pageScrollTo({</span></span>
<span class="line"><span style="color:#A6ACCD;">          scrollTop: rect.height</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }).exec()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="ios9报can-t-find-variable-setcsstohead-错误" tabindex="-1">ios9报Can&#39;t find variable: setCssToHead 错误 <a class="header-anchor" href="#ios9报can-t-find-variable-setcsstohead-错误" aria-hidden="true">#</a></h2><p>这个在小程序社区里出现过，原因好像是微信小程序的<code>wxs</code>所引起的，<a href="https://developers.weixin.qq.com/blogdetail?action=get_post_info&amp;docid=abf5cf90b9ff095159a32f46fc1538fd&amp;highline=setcsstohead&amp;token=570087027&amp;lang=zh_CN" target="_blank" rel="noreferrer">原贴</a>说是由于<code>wxs</code>文件使用了<code>es6</code>，但是本人代码特别注意了，没有使用，还是一样报出这个错误，当我把这类文件删除后，程序就可正常运行。所以本人建议：<code>还是尽量不要使用wxs了</code>，可到小程序完全兼容后再尝试。</p><p><strong>总结</strong> 整个开发过程中还是流畅的，毕竟没有用小程序里面很多的API，所遇到的坑和兼容问题都不是很多，本人把项目主要代码删除了，小程序<a href="https://github.com/imondo/mini-apps" target="_blank" rel="noreferrer">开源地址</a>，里面只有一些程序的结构，和项目的公用代码，欢迎大家交流指点，<a href="https://imondo.cn/blog/article/38" target="_blank" rel="noreferrer">原文地址</a>。</p>`,18),t=[p];function o(c,r,i,d,C,A){return n(),a("div",null,t)}const y=s(l,[["render",o]]);export{_ as __pageData,y as default};
