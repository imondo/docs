import{_ as s,c as a,o as n,a as e}from"./app.ddfa0823.js";const h=JSON.parse('{"title":"前端常见下载处理方案","description":"","frontmatter":{},"headers":[],"relativePath":"scheme/01_解决方案/03_前端常见下载处理方案.md","lastUpdated":1673339072000}'),o={name:"scheme/01_解决方案/03_前端常见下载处理方案.md"},l=e(`<h1 id="前端常见下载处理方案" tabindex="-1">前端常见下载处理方案 <a class="header-anchor" href="#前端常见下载处理方案" aria-hidden="true">#</a></h1><p>下载是我们项目中常常会遇到的需求，不同的下载方案能呈现不同的效果，近期归纳下作者系统中用到常见几种下载处理方案</p><h2 id="a标签下载" tabindex="-1">a标签下载 <a class="header-anchor" href="#a标签下载" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;a href=&quot;test.xlsx&quot; download=&quot;test.txt&quot;&gt;下载&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这种是我们常见的下载静态文件的处理方式，这种适用于项目文件是<strong>静态</strong>的以及<strong>存放地点不变动</strong>的。<code>download</code>属性还可以对文件命名处理</p><h2 id="form表单下载" tabindex="-1">Form表单下载 <a class="header-anchor" href="#form表单下载" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;form method=&quot;get&quot; target=&quot;name&quot; action=&quot;test.com&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input type=&quot;hidden&quot; name=&quot;token&quot; value=&quot;token&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input type=&quot;hidden&quot; name=&quot;url&quot; value=&quot;/api/download&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>表单的下载可以做特殊的<code>传值</code>处理，也可以传入更多的参数；请求方式也多种多样。</p><h2 id="blob流下载" tabindex="-1">Blob流下载 <a class="header-anchor" href="#blob流下载" aria-hidden="true">#</a></h2><p>用上面方式下载处理，当用户点击下载时，前端不能够很好的捕捉到请求的状态，而用<code>Blob</code>我们可以更灵活的来处理不同状态。</p><blockquote><p>Blob 对象表示一个不可变、原始数据的类文件对象。</p></blockquote><p>简单的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const disposition = decodeURI(xhr.getResponseHeader(&#39;Content-Disposition&#39;)); // 文件名处理</span></span>
<span class="line"><span style="color:#A6ACCD;">const dispositionArray = disposition.split(&#39;filename=&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const name = dispositionArray[dispositionArray.length - 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">const disposition = decodeURI(xhr.getResponseHeader(&#39;Content-Disposition&#39;)); // 文件名处理</span></span>
<span class="line"><span style="color:#A6ACCD;">const dispositionArray = disposition.split(&#39;filename=&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const name = dispositionArray[dispositionArray.length - 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">const blob = window.URL.createObjectURL(res.data); // 创建对象URL </span></span>
<span class="line"><span style="color:#A6ACCD;">reader.onload = function(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const link = document.createElement(&#39;a&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  link.style.display = &#39;none&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  link.href = blob;</span></span>
<span class="line"><span style="color:#A6ACCD;">  link.setAttribute(&#39;download&#39;, decodeURI(fileName));</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.body.appendChild(link);</span></span>
<span class="line"><span style="color:#A6ACCD;">  link.click();</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.body.removeChild(link);</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.URL.revokeObjectURL(blob);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>后端需要设置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Access-Control-Expose-Headers: Content-Disposition</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>通过后台返回的数据来判断是否显示错误提示，也可以根据接口不同状态值来显示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const reader = new FileReader();</span></span>
<span class="line"><span style="color:#A6ACCD;">reader.onload = e =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (e.target.result.includes(&#39;&quot;data&quot;:&quot;&quot;&#39;)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const result = JSON.parse(e.target.result);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(result.msg);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">reader.readAsText(response); // 读取指定的Blob中的内容，result属性中将包含一个字符串以表示所读取的文件内容。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>以上的三种处理方案是我们常见的前端下载简单汇总，方案不同，效果不同，不过还是推荐<code>Blob</code>方式下载，这种处理方式，可以更加灵活的捕捉到不同状态，前端可以更加方便的处理。</p><blockquote><p>积硅步，至千里。</p><p>公众号<a href="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/855e466bedfd48be83a87be744dfec21~tplv-k3u1fbpfcp-watermark.image" target="_blank" rel="noreferrer">码不停指</a>，欢迎关注。</p></blockquote>`,20),t=[l];function p(c,i,r,d,C,A){return n(),a("div",null,t)}const y=s(o,[["render",p]]);export{h as __pageData,y as default};
