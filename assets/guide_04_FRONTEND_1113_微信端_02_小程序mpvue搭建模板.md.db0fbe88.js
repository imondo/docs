import{_ as s,c as n,o as a,a as l}from"./app.c1f8735d.js";const D=JSON.parse('{"title":"小程序的初次遇见,使用mpvue搭建模板","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/1113_微信端/02_小程序mpvue搭建模板.md","lastUpdated":1675251687000}'),e={name:"guide/04_FRONTEND/1113_微信端/02_小程序mpvue搭建模板.md"},p=l(`<h1 id="小程序的初次遇见-使用mpvue搭建模板" tabindex="-1">小程序的初次遇见,使用mpvue搭建模板 <a class="header-anchor" href="#小程序的初次遇见-使用mpvue搭建模板" aria-hidden="true">#</a></h1><p>由于公司业务需求的需要，在这一周需要开发小程序，加急看了下小程序的文档，发现用其原生来编写程序不是很顺手，公司前端用的技术栈是<code>vue</code>， 询问了谷哥和度娘发现大部分推荐了 <code>wepy</code>和 <code>mpvue</code>，对比了两个框架，还是选用了 <a href="http://mpvue.com/mpvue/#_1?_blank" target="_blank" rel="noreferrer">mpvue</a>, 因为 <code>mpvue</code> 继承自 <code>vue.js</code>，其技术规范和语法特点与 <em><strong>Vue.js</strong></em> 保持一致。</p><h2 id="快速搭建-mpvue-目录" tabindex="-1">快速搭建 <em><strong>mpvue</strong></em> 目录 <a class="header-anchor" href="#快速搭建-mpvue-目录" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 全局安装 vue-cli</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm install --global vue-cli</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建一个基于 mpvue-quickstart 模板的新项目</span></span>
<span class="line"><span style="color:#A6ACCD;">$ vue init mpvue/mpvue-quickstart wx-mpvue-demo</span></span>
<span class="line"><span style="color:#A6ACCD;">// 安装依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">$ cd wx-mpvue-demo</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">// 启动构建</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm run dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>一个简单的工程目录就搭建完成了。</p><h2 id="封装自己的公用模块" tabindex="-1">封装自己的公用模块 <a class="header-anchor" href="#封装自己的公用模块" aria-hidden="true">#</a></h2><h3 id="_1-封装totast" tabindex="-1">1.封装<code>Totast</code> <a class="header-anchor" href="#_1-封装totast" aria-hidden="true">#</a></h3><p>由于小程序原生的消息提示实在是让人崩溃，所以我们先自己来封装下 <code>totast</code>， 在 <code>util</code>目录新建 <code>totast.js</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class toast {</span></span>
<span class="line"><span style="color:#A6ACCD;">  static msg (title, {icon = 1}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.showToast({</span></span>
<span class="line"><span style="color:#A6ACCD;">      title,</span></span>
<span class="line"><span style="color:#A6ACCD;">      icon: [&#39;success&#39;, &#39;none&#39;][icon]</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  static confirm ({title = &#39;提示&#39;, content, callback}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.showModal({</span></span>
<span class="line"><span style="color:#A6ACCD;">      title,</span></span>
<span class="line"><span style="color:#A6ACCD;">      content,</span></span>
<span class="line"><span style="color:#A6ACCD;">      success: function (res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (res.confirm) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          callback(res.confirm)</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (res.cancel) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;用户点击取消&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default toast</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>我们挂载到<em><strong>main.js</strong></em>中， 在组件里可以方便调用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import toast from &#39;./utils/toast&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.prototype.$totast = toast</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-封装-publicrequest" tabindex="-1">2.封装 <code>publicRequest</code> <a class="header-anchor" href="#_2-封装-publicrequest" aria-hidden="true">#</a></h3><p>小程序的网路请求不是很方便，我们也对其封装一下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import totast from &#39;./toast&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Authorization = &#39;Bearer xxx&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">class publicRequest {</span></span>
<span class="line"><span style="color:#A6ACCD;">  static get ({url, data = {}, isJson = false, hasToken = true, header}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let hasNetWork = checkNetWork()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!hasNetWork) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      totast.msg(&#39;网路异常&#39;, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let contentType = isJson ? &#39;application/json&#39; : &#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _authorization = hasToken ? {&#39;Authorization&#39;: Authorization} : {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _header = Object.assign({&#39;content-type&#39;: contentType}, _authorization, header)</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.showLoading({title: &#39;加载中...&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      wx.request({</span></span>
<span class="line"><span style="color:#A6ACCD;">        url,</span></span>
<span class="line"><span style="color:#A6ACCD;">        header: _header,</span></span>
<span class="line"><span style="color:#A6ACCD;">        dataType: &#39;json&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        method: &#39;GET&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        data,</span></span>
<span class="line"><span style="color:#A6ACCD;">        success: (res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (res.statusCode === 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            resolve(res.data)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        fail: (error) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          totast.msg(error.errMsg, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        complete: res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (res.statusCode !== 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            totastMessage({</span></span>
<span class="line"><span style="color:#A6ACCD;">              statusCode: res.statusCode,</span></span>
<span class="line"><span style="color:#A6ACCD;">              message: res.data.msg</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          wx.hideLoading()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  static post ({url, data = {}, isJson = false, hasToken = true, header}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let hasNetWork = checkNetWork()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!hasNetWork) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      totast.msg(&#39;网路异常&#39;, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    let contentType = isJson ? &#39;application/json&#39; : &#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _authorization = hasToken ? {&#39;Authorization&#39;: Authorization} : {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _header = Object.assign({&#39;content-type&#39;: contentType}, _authorization, header)</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.showLoading({title: &#39;加载中...&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      wx.request({</span></span>
<span class="line"><span style="color:#A6ACCD;">        url,</span></span>
<span class="line"><span style="color:#A6ACCD;">        header: _header,</span></span>
<span class="line"><span style="color:#A6ACCD;">        method: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        data,</span></span>
<span class="line"><span style="color:#A6ACCD;">        dataType: &#39;json&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        success: (res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(res.data)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        fail: (error) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          totast.msg(error.errMsg, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        complete: res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (res.statusCode !== 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            totastMessage({</span></span>
<span class="line"><span style="color:#A6ACCD;">              statusCode: res.statusCode,</span></span>
<span class="line"><span style="color:#A6ACCD;">              message: res.data.msg</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          wx.hideLoading()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const checkNetWork = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise(resolve =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.getNetworkType({</span></span>
<span class="line"><span style="color:#A6ACCD;">      success: res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let networkType = res.networkType;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (networkType === &#39;none&#39; || networkType === &#39;unknown&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(false)</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      fail: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(false)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const totastMessage = function ({statusCode, message}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (statusCode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case 502:</span></span>
<span class="line"><span style="color:#A6ACCD;">      totast.msg(&#39;服务器异常&#39;, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">      break</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      totast.msg(message, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">      break</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default publicRequest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>我们呢也对其挂载到 <code>vue</code> 上去。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import publicRequest from &#39;./utils/publicRequest&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.prototype.$http = publicRequest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-扫一扫的调用" tabindex="-1">3.扫一扫的调用 <a class="header-anchor" href="#_3-扫一扫的调用" aria-hidden="true">#</a></h3><p>我们先公用出扫一扫</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const handleScan = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.scanCode({</span></span>
<span class="line"><span style="color:#A6ACCD;">      success: (res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      fail: error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        reject(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default handleScan</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>公用出来后挂载到我们的 <code>vue</code> 上后可以在组件里直接调用 <code>this.$handleScan</code>，如</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  async scanCodeInfo () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let goods = await this.$handleScan()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(goods)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.codeInfo = goods.result</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_4-如何引入iconfont图标" tabindex="-1">4.如何引入<code>iconfont</code>图标 <a class="header-anchor" href="#_4-如何引入iconfont图标" aria-hidden="true">#</a></h3><p>因为小程序的wxss文件的font-face的url不接受http地址作为参数,但可以接受base64,因此需将字体文件下载后,转换为base64，然后引用。 所以我们可以在阿里巴巴图标库下载下来，将<code>iconfont.ttf</code>转换。转换地址：<a href="https://transfonter.org/" target="_blank" rel="noreferrer">https://transfonter.org/</a></p><p>![图片描述][1]</p><p>下载文件后解压得到<code>stylesheet.css</code>文件，将此文件引入到项目。最后写一个公用的样式:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.icon:after{</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-family: &#39;iconfont&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-weight: lighter;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-style: normal;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.icon-saoyisao:after { content: &quot;\\e7c7&quot;; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.icon-hebingxingzhuang:after { content: &quot;\\e61a&quot;; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>就可以使用了。</p><p>现在我们可以愉快的使用其开发了，如果对 <code>vue</code>开发比较熟悉的话，完全迁移过来是没有问题的。最后附上<a href="https://github.com/imondo/wx-mpvue" target="_blank" rel="noreferrer">项目demo</a>和[原文地址][2] 每个人都有第一次，哈哈~这就是我的第一次写文章，不到之处，望指正。</p>`,28),o=[p];function t(c,r,i,C,A,y){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{D as __pageData,u as default};
