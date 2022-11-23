import{_ as s,c as n,o as a,a as p}from"./app.d121ef1a.js";const y=JSON.parse('{"title":"\u5982\u4F55\u53D1\u5E03\u81EA\u5DF1\u6A21\u5757\u5305\u5230NPM","description":"","frontmatter":{},"headers":[],"relativePath":"guide/05_TOOLS/03_npm.md","lastUpdated":1669195950000}'),l={name:"guide/05_TOOLS/03_npm.md"},e=p(`<h1 id="\u5982\u4F55\u53D1\u5E03\u81EA\u5DF1\u6A21\u5757\u5305\u5230npm" tabindex="-1">\u5982\u4F55\u53D1\u5E03\u81EA\u5DF1\u6A21\u5757\u5305\u5230NPM <a class="header-anchor" href="#\u5982\u4F55\u53D1\u5E03\u81EA\u5DF1\u6A21\u5757\u5305\u5230npm" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA" tabindex="-1">\u521B\u5EFA <a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm init </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u521B\u5EFA\u65B0\u7684<code>package.json</code>\u6587\u4EF6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: npm,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;keywords&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;mine&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;author&quot;: &quot;Mondo&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;license&quot;: &quot;ISC&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7F16\u5199" tabindex="-1">\u7F16\u5199 <a class="header-anchor" href="#\u7F16\u5199" aria-hidden="true">#</a></h2><p>\u53EF\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\u65B0\u5EFA <code>index.js</code> \u6765\u7F16\u5199\u4EE3\u7801</p><h2 id="\u53D1\u5E03" tabindex="-1">\u53D1\u5E03 <a class="header-anchor" href="#\u53D1\u5E03" aria-hidden="true">#</a></h2><ul><li><a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">\u6CE8\u518C</a></li><li>\u767B\u5F55</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u767B\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">npm login</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u53D1\u5E03</span></span>
<span class="line"><span style="color:#A6ACCD;">npm publish</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FD4\u56DE\u4E0B\u9762\u7684\u4FE1\u606F\u5C31\u662F\u53D1\u5E03\u6210\u529F\u4E86 </span></span>
<span class="line"><span style="color:#A6ACCD;">+ my-npm@1.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u540E\u6211\u4EEC\u53EF\u5728\u9879\u76EE\u4E2D\u76F4\u63A5<code>npm</code>\u81EA\u5DF1\u7684\u6A21\u5757\u5305\u4E86\u3002</p><h2 id="\u66F4\u65B0" tabindex="-1">\u66F4\u65B0 <a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u8981\u4FEE\u6539\u76F4\u63A5\u7684\u6A21\u5757\u5305\uFF0C\u60F3\u8981\u66F4\u65B0\u65F6\uFF0C\u5148\u6267\u884C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u66F4\u65B0 package.json \u4E2D\u7684 version \u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">npm version patch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npm publish</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E00\u4E9B<code>npm</code>\u53E6\u5916\u7684\u64CD\u4F5C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u53EF\u4EE5\u628A\u5F53\u524D\u76EE\u5F55\u4E0Bnode_modules\u5B50\u76EE\u5F55\u91CC\u8FB9\u7684\u5BF9\u5E94\u6A21\u5757\u66F4\u65B0\u81F3\u6700\u65B0\u7248\u672C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">npm update &lt;package&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53EF\u4EE5\u6E05\u7A7ANPM\u672C\u5730\u7F13\u5B58\uFF0C\u7528\u4E8E\u5BF9\u4ED8\u4F7F\u7528\u76F8\u540C\u7248\u672C\u53F7\u53D1\u5E03\u65B0\u7248\u672C\u4EE3\u7801\u7684\u4EBA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">npm cache clear</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53EF\u4EE5\u64A4\u9500\u53D1\u5E03\u81EA\u5DF1\u53D1\u5E03\u8FC7\u7684\u67D0\u4E2A\u7248\u672C\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">npm unpublish &lt;package&gt;@&lt;version&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),o=[e];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};
