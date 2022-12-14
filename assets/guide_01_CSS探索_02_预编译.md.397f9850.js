import{_ as s,c as a,o as n,a as e}from"./app.44061fed.js";const A=JSON.parse('{"title":"预编译器","description":"","frontmatter":{},"headers":[],"relativePath":"guide/01_CSS探索/02_预编译.md","lastUpdated":1671003865000}'),l={name:"guide/01_CSS探索/02_预编译.md"},c=e(`<h1 id="预编译器" tabindex="-1">预编译器 <a class="header-anchor" href="#预编译器" aria-hidden="true">#</a></h1><h2 id="scss" tabindex="-1">Scss <a class="header-anchor" href="#scss" aria-hidden="true">#</a></h2><h3 id="定义变量" tabindex="-1">定义变量 <a class="header-anchor" href="#定义变量" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$color: #333;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="混入" tabindex="-1">混入 <a class="header-anchor" href="#混入" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">@mixin icon() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	display: inline-block;</span></span>
<span class="line"><span style="color:#A6ACCD;">	width: 40upx;</span></span>
<span class="line"><span style="color:#A6ACCD;">	height: 40upx;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.icon-tuyere {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @include icon;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),p=[c];function t(o,i,r,d,_,h){return n(),a("div",null,p)}const u=s(l,[["render",t]]);export{A as __pageData,u as default};
