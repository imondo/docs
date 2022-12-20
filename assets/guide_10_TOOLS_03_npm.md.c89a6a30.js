import{_ as s,c as n,o as a,a as p}from"./app.eb88d1d6.js";const y=JSON.parse('{"title":"如何发布自己模块包到NPM","description":"","frontmatter":{},"headers":[],"relativePath":"guide/10_TOOLS/03_npm.md","lastUpdated":1671517348000}'),l={name:"guide/10_TOOLS/03_npm.md"},e=p(`<h1 id="如何发布自己模块包到npm" tabindex="-1">如何发布自己模块包到NPM <a class="header-anchor" href="#如何发布自己模块包到npm" aria-hidden="true">#</a></h1><h2 id="创建" tabindex="-1">创建 <a class="header-anchor" href="#创建" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm init </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>创建新的<code>package.json</code>文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="编写" tabindex="-1">编写 <a class="header-anchor" href="#编写" aria-hidden="true">#</a></h2><p>可在项目目录下新建 <code>index.js</code> 来编写代码</p><h2 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-hidden="true">#</a></h2><ul><li><a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">注册</a></li><li>登录</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 登录</span></span>
<span class="line"><span style="color:#A6ACCD;">npm login</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 发布</span></span>
<span class="line"><span style="color:#A6ACCD;">npm publish</span></span>
<span class="line"><span style="color:#A6ACCD;">// 返回下面的信息就是发布成功了 </span></span>
<span class="line"><span style="color:#A6ACCD;">+ my-npm@1.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上后我们可在项目中直接<code>npm</code>自己的模块包了。</p><h2 id="更新" tabindex="-1">更新 <a class="header-anchor" href="#更新" aria-hidden="true">#</a></h2><p>当我们要修改直接的模块包，想要更新时，先执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 更新 package.json 中的 version 版本</span></span>
<span class="line"><span style="color:#A6ACCD;">npm version patch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npm publish</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>一些<code>npm</code>另外的操作</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。</span></span>
<span class="line"><span style="color:#A6ACCD;">npm update &lt;package&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。</span></span>
<span class="line"><span style="color:#A6ACCD;">npm cache clear</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//可以撤销发布自己发布过的某个版本代码</span></span>
<span class="line"><span style="color:#A6ACCD;">npm unpublish &lt;package&gt;@&lt;version&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),o=[e];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};
