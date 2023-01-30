import{_ as s,c as n,o as a,a as e}from"./app.a57aac40.js";const y=JSON.parse('{"title":"【Vue项目总结】项目nginx部署","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/1111_Vue/05_项目nginx部署.md","lastUpdated":1675070703000}'),l={name:"guide/04_FRONTEND/1111_Vue/05_项目nginx部署.md"},o=e(`<h1 id="【vue项目总结】项目nginx部署" tabindex="-1">【Vue项目总结】项目nginx部署 <a class="header-anchor" href="#【vue项目总结】项目nginx部署" aria-hidden="true">#</a></h1><p>项目开发完成，接下来是上线，关于<code>vue</code>项目的部署，我司前端是部署在<code>nginx</code>服务器上，关于<code>nginx</code>的相关文档，请自行查阅；本文只记录部署时碰到的一些问题。</p><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-hidden="true">#</a></h2><p><code>vue</code>项目打包后，是生成一系列的静态文件，包括项目的请求<code>IP</code>都打入包内，如果后台服务改动，这时你的前端文件，又要重新编译打包，这里采用的是<a href="https://juejin.im/post/5cedfea96fb9a07ef06f761e#heading-0" target="_blank" rel="noreferrer">后台管理项目总结</a>提到的前端自行请求一个配置文件，动态修改你的相关配置。</p><ul><li>静态文件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// config.json</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;api&quot;: &quot;test.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>请求文件</li></ul><p>在项目<code>store</code>中请求你的配置文件，写入<code>state</code>中，在调用的时候可以全局访问到你的配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// api.js</span></span>
<span class="line"><span style="color:#A6ACCD;">GetConfigApi() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    axios</span></span>
<span class="line"><span style="color:#A6ACCD;">      .get(\`/config.json?v=\${new Date().getTime()}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(result =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const configApi = {</span></span>
<span class="line"><span style="color:#A6ACCD;">          API: result.data[&#39;api&#39;], // 统一接口</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(configApi);</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      .catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx部署" tabindex="-1">nginx部署 <a class="header-anchor" href="#nginx部署" aria-hidden="true">#</a></h2><p>因为<code>vue-router</code>有<code>hash</code>和<code>history</code>不同的两种模式，使用不同的模式，<code>nginx</code>的配置不同，<code>hash</code>模式下，不需要改动，只需要部署你的前端文件就可以了，所以这里只讨论<code>history</code>模式下<code>.conf</code>文件的修改</p><p>访问修改<code>nginx</code>配置文件<code>nginx.conf</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen  80;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name  test.com;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root  /front; // 前端文件路径</span></span>
<span class="line"><span style="color:#A6ACCD;">    index  index.html; // hash模式只配置访问html就可以了</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /index.html; // history模式下</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>修改完成，重启服务访问<code>test.com</code></p><h2 id="部署到子级目录" tabindex="-1">部署到子级目录 <a class="header-anchor" href="#部署到子级目录" aria-hidden="true">#</a></h2><p>当我们需要把项目部署到子级目录下时，则需要修改项目的<code>BASE_URL</code>，生成一个子级目录下的绝对访问路径。修改对应的<code>.conf</code>配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen  80;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name  test.com;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  location /demo { // 子级目录</span></span>
<span class="line"><span style="color:#A6ACCD;">    alias  /front/demo;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index  index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /demo/index.html; </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>修改完成，重启服务访问<code>test.com/demo</code></p><h2 id="缓存处理" tabindex="-1">缓存处理 <a class="header-anchor" href="#缓存处理" aria-hidden="true">#</a></h2><p>前端项目的静态文件常常会被浏览器缓存，而项目编译后，<code>js</code>，<code>css</code>，图片等实际上是已经有<code>hash</code>值来去除了缓存，但是项目更新后，仍然会出现缓存问题，这是由于我们的项目整个入口都是在<code>index.html</code>文件上，浏览器实际是缓存了我们的<code>html</code>页面，所以我们要在<code>nginx</code>中告诉浏览器，<code>html</code>文件不被缓存。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  location /demo {</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Cache-Control &#39;private, no-store, max-age=0&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>这里只讨论了<code>nginx</code>相关的部署，实际上<code>vue-router</code><a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">文档</a>上是有相关的配置例子的。</p><p>其他总结文章：</p><ul><li><a href="/docs/Note/webpack/webpack">webpack常规打包优化方案</a></li><li><a href="/docs/Note/vue/props">组件通信处理方案</a></li><li><a href="/docs/Note/vue/http">后台管理项目总结</a></li></ul>`,25),p=[o];function c(t,i,r,d,C,A){return a(),n("div",null,p)}const u=s(l,[["render",c]]);export{y as __pageData,u as default};
