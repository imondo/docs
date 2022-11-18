import{_ as s,c as n,o as a,a as l}from"./app.a71b2607.js";const D=JSON.parse('{"title":"\u5C0F\u7A0B\u5E8F\u7684\u521D\u6B21\u9047\u89C1,\u4F7F\u7528mpvue\u642D\u5EFA\u6A21\u677F","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/03_\u5FAE\u4FE1\u7AEF/02_\u5C0F\u7A0B\u5E8Fmpvue\u642D\u5EFA\u6A21\u677F.md","lastUpdated":1668750885000}'),p={name:"guide/04_FRONTEND/03_\u5FAE\u4FE1\u7AEF/02_\u5C0F\u7A0B\u5E8Fmpvue\u642D\u5EFA\u6A21\u677F.md"},e=l(`<h1 id="\u5C0F\u7A0B\u5E8F\u7684\u521D\u6B21\u9047\u89C1-\u4F7F\u7528mpvue\u642D\u5EFA\u6A21\u677F" tabindex="-1">\u5C0F\u7A0B\u5E8F\u7684\u521D\u6B21\u9047\u89C1,\u4F7F\u7528mpvue\u642D\u5EFA\u6A21\u677F <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u7684\u521D\u6B21\u9047\u89C1-\u4F7F\u7528mpvue\u642D\u5EFA\u6A21\u677F" aria-hidden="true">#</a></h1><p>\u7531\u4E8E\u516C\u53F8\u4E1A\u52A1\u9700\u6C42\u7684\u9700\u8981\uFF0C\u5728\u8FD9\u4E00\u5468\u9700\u8981\u5F00\u53D1\u5C0F\u7A0B\u5E8F\uFF0C\u52A0\u6025\u770B\u4E86\u4E0B\u5C0F\u7A0B\u5E8F\u7684\u6587\u6863\uFF0C\u53D1\u73B0\u7528\u5176\u539F\u751F\u6765\u7F16\u5199\u7A0B\u5E8F\u4E0D\u662F\u5F88\u987A\u624B\uFF0C\u516C\u53F8\u524D\u7AEF\u7528\u7684\u6280\u672F\u6808\u662F<code>vue</code>\uFF0C \u8BE2\u95EE\u4E86\u8C37\u54E5\u548C\u5EA6\u5A18\u53D1\u73B0\u5927\u90E8\u5206\u63A8\u8350\u4E86 <code>wepy</code>\u548C <code>mpvue</code>\uFF0C\u5BF9\u6BD4\u4E86\u4E24\u4E2A\u6846\u67B6\uFF0C\u8FD8\u662F\u9009\u7528\u4E86 <a href="http://mpvue.com/mpvue/#_1?_blank" target="_blank" rel="noreferrer">mpvue</a>, \u56E0\u4E3A <code>mpvue</code> \u7EE7\u627F\u81EA <code>vue.js</code>\uFF0C\u5176\u6280\u672F\u89C4\u8303\u548C\u8BED\u6CD5\u7279\u70B9\u4E0E <em><strong>Vue.js</strong></em> \u4FDD\u6301\u4E00\u81F4\u3002</p><h2 id="\u5FEB\u901F\u642D\u5EFA-mpvue-\u76EE\u5F55" tabindex="-1">\u5FEB\u901F\u642D\u5EFA <em><strong>mpvue</strong></em> \u76EE\u5F55 <a class="header-anchor" href="#\u5FEB\u901F\u642D\u5EFA-mpvue-\u76EE\u5F55" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u5168\u5C40\u5B89\u88C5 vue-cli</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm install --global vue-cli</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u521B\u5EFA\u4E00\u4E2A\u57FA\u4E8E mpvue-quickstart \u6A21\u677F\u7684\u65B0\u9879\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">$ vue init mpvue/mpvue-quickstart wx-mpvue-demo</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B89\u88C5\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">$ cd wx-mpvue-demo</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8\u6784\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm run dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E00\u4E2A\u7B80\u5355\u7684\u5DE5\u7A0B\u76EE\u5F55\u5C31\u642D\u5EFA\u5B8C\u6210\u4E86\u3002</p><h2 id="\u5C01\u88C5\u81EA\u5DF1\u7684\u516C\u7528\u6A21\u5757" tabindex="-1">\u5C01\u88C5\u81EA\u5DF1\u7684\u516C\u7528\u6A21\u5757 <a class="header-anchor" href="#\u5C01\u88C5\u81EA\u5DF1\u7684\u516C\u7528\u6A21\u5757" aria-hidden="true">#</a></h2><h3 id="_1-\u5C01\u88C5totast" tabindex="-1">1.\u5C01\u88C5<code>Totast</code> <a class="header-anchor" href="#_1-\u5C01\u88C5totast" aria-hidden="true">#</a></h3><p>\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u539F\u751F\u7684\u6D88\u606F\u63D0\u793A\u5B9E\u5728\u662F\u8BA9\u4EBA\u5D29\u6E83\uFF0C\u6240\u4EE5\u6211\u4EEC\u5148\u81EA\u5DF1\u6765\u5C01\u88C5\u4E0B <code>totast</code>\uFF0C \u5728 <code>util</code>\u76EE\u5F55\u65B0\u5EFA <code>totast.js</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">class toast {</span></span>
<span class="line"><span style="color:#A6ACCD;">  static msg (title, {icon = 1}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.showToast({</span></span>
<span class="line"><span style="color:#A6ACCD;">      title,</span></span>
<span class="line"><span style="color:#A6ACCD;">      icon: [&#39;success&#39;, &#39;none&#39;][icon]</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  static confirm ({title = &#39;\u63D0\u793A&#39;, content, callback}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.showModal({</span></span>
<span class="line"><span style="color:#A6ACCD;">      title,</span></span>
<span class="line"><span style="color:#A6ACCD;">      content,</span></span>
<span class="line"><span style="color:#A6ACCD;">      success: function (res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (res.confirm) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          callback(res.confirm)</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (res.cancel) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;\u7528\u6237\u70B9\u51FB\u53D6\u6D88&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default toast</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u6302\u8F7D\u5230<em><strong>main.js</strong></em>\u4E2D\uFF0C \u5728\u7EC4\u4EF6\u91CC\u53EF\u4EE5\u65B9\u4FBF\u8C03\u7528</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import toast from &#39;./utils/toast&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.prototype.$totast = toast</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-\u5C01\u88C5-publicrequest" tabindex="-1">2.\u5C01\u88C5 <code>publicRequest</code> <a class="header-anchor" href="#_2-\u5C01\u88C5-publicrequest" aria-hidden="true">#</a></h3><p>\u5C0F\u7A0B\u5E8F\u7684\u7F51\u8DEF\u8BF7\u6C42\u4E0D\u662F\u5F88\u65B9\u4FBF\uFF0C\u6211\u4EEC\u4E5F\u5BF9\u5176\u5C01\u88C5\u4E00\u4E0B\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import totast from &#39;./toast&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Authorization = &#39;Bearer xxx&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">class publicRequest {</span></span>
<span class="line"><span style="color:#A6ACCD;">  static get ({url, data = {}, isJson = false, hasToken = true, header}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let hasNetWork = checkNetWork()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!hasNetWork) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      totast.msg(&#39;\u7F51\u8DEF\u5F02\u5E38&#39;, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let contentType = isJson ? &#39;application/json&#39; : &#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _authorization = hasToken ? {&#39;Authorization&#39;: Authorization} : {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _header = Object.assign({&#39;content-type&#39;: contentType}, _authorization, header)</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.showLoading({title: &#39;\u52A0\u8F7D\u4E2D...&#39;})</span></span>
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
<span class="line"><span style="color:#A6ACCD;">      totast.msg(&#39;\u7F51\u8DEF\u5F02\u5E38&#39;, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    let contentType = isJson ? &#39;application/json&#39; : &#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _authorization = hasToken ? {&#39;Authorization&#39;: Authorization} : {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _header = Object.assign({&#39;content-type&#39;: contentType}, _authorization, header)</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.showLoading({title: &#39;\u52A0\u8F7D\u4E2D...&#39;})</span></span>
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
<span class="line"><span style="color:#A6ACCD;">      totast.msg(&#39;\u670D\u52A1\u5668\u5F02\u5E38&#39;, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">      break</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      totast.msg(message, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">      break</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default publicRequest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u5462\u4E5F\u5BF9\u5176\u6302\u8F7D\u5230 <code>vue</code> \u4E0A\u53BB\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import publicRequest from &#39;./utils/publicRequest&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.prototype.$http = publicRequest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-\u626B\u4E00\u626B\u7684\u8C03\u7528" tabindex="-1">3.\u626B\u4E00\u626B\u7684\u8C03\u7528 <a class="header-anchor" href="#_3-\u626B\u4E00\u626B\u7684\u8C03\u7528" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u5148\u516C\u7528\u51FA\u626B\u4E00\u626B</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const handleScan = function () {</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u516C\u7528\u51FA\u6765\u540E\u6302\u8F7D\u5230\u6211\u4EEC\u7684 <code>vue</code> \u4E0A\u540E\u53EF\u4EE5\u5728\u7EC4\u4EF6\u91CC\u76F4\u63A5\u8C03\u7528 <code>this.$handleScan</code>\uFF0C\u5982</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  async scanCodeInfo () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let goods = await this.$handleScan()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(goods)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.codeInfo = goods.result</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_4-\u5982\u4F55\u5F15\u5165iconfont\u56FE\u6807" tabindex="-1">4.\u5982\u4F55\u5F15\u5165<code>iconfont</code>\u56FE\u6807 <a class="header-anchor" href="#_4-\u5982\u4F55\u5F15\u5165iconfont\u56FE\u6807" aria-hidden="true">#</a></h3><p>\u56E0\u4E3A\u5C0F\u7A0B\u5E8F\u7684wxss\u6587\u4EF6\u7684font-face\u7684url\u4E0D\u63A5\u53D7http\u5730\u5740\u4F5C\u4E3A\u53C2\u6570,\u4F46\u53EF\u4EE5\u63A5\u53D7base64,\u56E0\u6B64\u9700\u5C06\u5B57\u4F53\u6587\u4EF6\u4E0B\u8F7D\u540E,\u8F6C\u6362\u4E3Abase64\uFF0C\u7136\u540E\u5F15\u7528\u3002 \u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5728\u963F\u91CC\u5DF4\u5DF4\u56FE\u6807\u5E93\u4E0B\u8F7D\u4E0B\u6765\uFF0C\u5C06<code>iconfont.ttf</code>\u8F6C\u6362\u3002\u8F6C\u6362\u5730\u5740\uFF1A<a href="https://transfonter.org/" target="_blank" rel="noreferrer">https://transfonter.org/</a></p><p>![\u56FE\u7247\u63CF\u8FF0][1]</p><p>\u4E0B\u8F7D\u6587\u4EF6\u540E\u89E3\u538B\u5F97\u5230<code>stylesheet.css</code>\u6587\u4EF6\uFF0C\u5C06\u6B64\u6587\u4EF6\u5F15\u5165\u5230\u9879\u76EE\u3002\u6700\u540E\u5199\u4E00\u4E2A\u516C\u7528\u7684\u6837\u5F0F:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">.icon:after{</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-family: &#39;iconfont&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-weight: lighter;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-style: normal;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.icon-saoyisao:after { content: &quot;\\e7c7&quot;; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.icon-hebingxingzhuang:after { content: &quot;\\e61a&quot;; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u6109\u5FEB\u7684\u4F7F\u7528\u5176\u5F00\u53D1\u4E86\uFF0C\u5982\u679C\u5BF9 <code>vue</code>\u5F00\u53D1\u6BD4\u8F83\u719F\u6089\u7684\u8BDD\uFF0C\u5B8C\u5168\u8FC1\u79FB\u8FC7\u6765\u662F\u6CA1\u6709\u95EE\u9898\u7684\u3002\u6700\u540E\u9644\u4E0A<a href="https://github.com/imondo/wx-mpvue" target="_blank" rel="noreferrer">\u9879\u76EEdemo</a>\u548C[\u539F\u6587\u5730\u5740][2] \u6BCF\u4E2A\u4EBA\u90FD\u6709\u7B2C\u4E00\u6B21\uFF0C\u54C8\u54C8~\u8FD9\u5C31\u662F\u6211\u7684\u7B2C\u4E00\u6B21\u5199\u6587\u7AE0\uFF0C\u4E0D\u5230\u4E4B\u5904\uFF0C\u671B\u6307\u6B63\u3002</p>`,28),o=[e];function c(t,r,C,i,A,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
