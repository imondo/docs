import{_ as s,c as a,o as n,a as p}from"./app.c07b7be5.js";const y=JSON.parse('{"title":"安装 nginx","description":"","frontmatter":{},"headers":[],"relativePath":"guide/11_OPS/07_安装 nginx.md","lastUpdated":1670995541000}'),l={name:"guide/11_OPS/07_安装 nginx.md"},e=p(`<h1 id="安装-nginx" tabindex="-1">安装 nginx <a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a></h1><h2 id="下载安装文件" tabindex="-1">下载安装文件 <a class="header-anchor" href="#下载安装文件" aria-hidden="true">#</a></h2><p><br>到<a href="https://www.cnblogs.com/qfb620/p/5508468.html" target="_blank" rel="noreferrer"> nginx 官网</a>上下载相应的安装包<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9138589f47f74e8e9a7dd81d167773fa~tplv-k3u1fbpfcp-zoom-1.image" alt="1591066180(1).jpg"></p><h2 id="解压" tabindex="-1">解压 <a class="header-anchor" href="#解压" aria-hidden="true">#</a></h2><p><br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16a428a12b2f40aabf45ad701d060ba3~tplv-k3u1fbpfcp-zoom-1.image" alt="1591066266(1).jpg"><br>进入 conf ，找到 nginx.conf，可以修改监听端口，新增而外配置文件夹</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6fbcfcac12c420aa41841d6f8a38cc5~tplv-k3u1fbpfcp-zoom-1.image" alt="1591081461(1).png"><a name="LLMmt"></a></p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h2><p>在 nginx 当前目录下执行命令<br></p><ul><li>start nginx.exe 启动</li><li>nginx.exe -s stop 结束</li><li>nginx.exe -s reload 重启</li></ul><p><a name="7bAuG"></a></p><h2 id="反向代理本地静态文件" tabindex="-1">反向代理本地静态文件 <a class="header-anchor" href="#反向代理本地静态文件" aria-hidden="true">#</a></h2><p><br>spa 项目本地打包后可以利用 nginx 反向代理，做成本地访问服务<br><br>在 vhost 文件夹下新建 dh.conf 文件<br></p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">	listen </span><span style="color:#A6ACCD;">9527</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">	server_name </span><span style="color:#A6ACCD;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	root </span><span style="color:#A6ACCD;">/nginx/dh</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># 打包后的静态文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	index </span><span style="color:#A6ACCD;">index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	try_files </span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/api </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	proxy_pass </span><span style="color:#A6ACCD;">http://www.dherp.com/index.php/api</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># 反向代理到后端服务</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	proxy_redirect </span><span style="color:#A6ACCD;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,13),o=[e];function t(c,r,i,C,A,d){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};
