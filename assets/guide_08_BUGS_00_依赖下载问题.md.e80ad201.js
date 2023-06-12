import{_ as s,o as a,c as e,O as o}from"./chunks/framework.7fa419f1.js";const D=JSON.parse('{"title":"依赖下载问题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/08_BUGS/00_依赖下载问题.md","filePath":"guide/08_BUGS/00_依赖下载问题.md","lastUpdated":1686534760000}'),n={name:"guide/08_BUGS/00_依赖下载问题.md"},l=o(`<h1 id="依赖下载问题" tabindex="-1">依赖下载问题 <a class="header-anchor" href="#依赖下载问题" aria-label="Permalink to &quot;依赖下载问题&quot;">​</a></h1><h2 id="node-sass-安装不上" tabindex="-1">node-sass 安装不上 <a class="header-anchor" href="#node-sass-安装不上" aria-label="Permalink to &quot;node-sass 安装不上&quot;">​</a></h2><p>两种方案：</p><ul><li><p>使用 <code>dart-sass</code> 替换 <code>node-sass</code></p></li><li><p>使用 <code>taobao.org</code> 镜像</p></li></ul><p>根目录创建 <code>.npmrc</code> 文件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sass_binary_site</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://npm.taobao.org/mirrors/node-sass/</span></span></code></pre></div><h2 id="项目锁定-node-版本" tabindex="-1">项目锁定 Node 版本 <a class="header-anchor" href="#项目锁定-node-版本" aria-label="Permalink to &quot;项目锁定 Node 版本&quot;">​</a></h2><ul><li>package.json</li></ul><p>在 <code>package.json</code> 文件中新增 <code>engines</code> 配置</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">engines</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;=14.16.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>npmrc</li></ul><p>根目录创建 <code>.npmrc</code> 文件，锁定版本</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">engine-strict</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span></code></pre></div>`,13),t=[l];function p(c,r,i,d,_,u){return a(),e("div",null,t)}const y=s(n,[["render",p]]);export{D as __pageData,y as default};
