import{_ as s,o as a,c as n,O as l}from"./chunks/framework.7fa419f1.js";const D=JSON.parse('{"title":"搭建私有 npm 仓库","description":"","frontmatter":{},"headers":[],"relativePath":"guide/11_OPS/20_搭建私有 npm 仓库.md","filePath":"guide/11_OPS/20_搭建私有 npm 仓库.md","lastUpdated":1686534760000}'),o={name:"guide/11_OPS/20_搭建私有 npm 仓库.md"},p=l(`<h1 id="搭建私有-npm-仓库" tabindex="-1">搭建私有 npm 仓库 <a class="header-anchor" href="#搭建私有-npm-仓库" aria-label="Permalink to &quot;搭建私有 npm 仓库&quot;">​</a></h1><p>使用 <a href="https://verdaccio.org/zh-cn/docs/installation/" target="_blank" rel="noreferrer">Verdaccio</a> 开源项目搭建私有 npm 仓库。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verdaccio</span></span></code></pre></div><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">verdaccio</span></span></code></pre></div><p>启动后，访问：<a href="http://localhost:4873/" target="_blank" rel="noreferrer">http://localhost:4873/</a> 地址</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 注册</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adduser</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://localhost:4873/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 发布</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://localhost:4873/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 下载</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verdaccio-test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--registry=http://localhost:4873/</span></span></code></pre></div><h2 id="包设置" tabindex="-1">包设置 <a class="header-anchor" href="#包设置" aria-label="Permalink to &quot;包设置&quot;">​</a></h2><p>可以在 <code>package.json</code> 设置</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">publishConfig</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">registry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:4873/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">, </span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">private</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">//手动添加, 防止将私有模块上传到公网</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>发布包时，名称最好限定。</p></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">package.json#name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">必须限定</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@scope@scope</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">一般为</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GitLab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">group</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">的名字,</span></span>
<span class="line"><span style="color:#FFCB6B;">例如</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@companyfe,</span></span>
<span class="line"><span style="color:#FFCB6B;">那么</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">为:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@companyfe/hello-private</span></span>
<span class="line"><span style="color:#FFCB6B;">package.json#private</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">设置为</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#FFCB6B;">防止你一不小心将私有模块</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">上去就麻烦了</span></span></code></pre></div><h2 id="下载私有库" tabindex="-1">下载私有库 <a class="header-anchor" href="#下载私有库" aria-label="Permalink to &quot;下载私有库&quot;">​</a></h2><p>在项目根目录创建 <code>.npmrc</code> 或者 <code>.yarnrc</code></p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C3E88D;">// .npmrc</span></span>
<span class="line"><span style="color:#A6ACCD;">@</span><span style="color:#C3E88D;">zz:registry=http://localhost:4873/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">// .yarnrc</span></span>
<span class="line"><span style="color:#A6ACCD;">@</span><span style="color:#C3E88D;">zz:registry &quot;http://localhost:4873/&quot;</span></span></code></pre></div><h2 id="使用-pm2-守护-verdaccio-进程" tabindex="-1">使用 pm2 守护 verdaccio 进程 <a class="header-anchor" href="#使用-pm2-守护-verdaccio-进程" aria-label="Permalink to &quot;使用 pm2 守护 verdaccio 进程&quot;">​</a></h2><p><code>PM2</code> 是 <code>node</code> 进程管理工具，可以利用它来简化很多 <code>node</code> 应用管理的繁琐任务，如性能监控、自动重启、负载均衡等。可以用来托管<code>verdaccio</code> 进程，保证其永久存活。</p><ul><li>npm i -g pm2</li><li>pm2 -h</li><li>pm2 start verdaccio</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>找到配置文件，文件路径 <code>/root/.config/verdaccio</code></p><p><code>config.yaml</code>：<a href="https://verdaccio.org/zh-CN/docs/configuration" target="_blank" rel="noreferrer">https://verdaccio.org/zh-CN/docs/configuration</a></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 修改监听的端口</span></span>
<span class="line"><span style="color:#FFCB6B;">listen:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.0</span><span style="color:#C3E88D;">.0.0:4873</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 反向代理前缀</span></span>
<span class="line"><span style="color:#FFCB6B;">url_prefix:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/verdaccio/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># url_prefix: &#39;/my_prefix&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># // url -&gt; https://somedomain.org/my_prefix/</span></span></code></pre></div><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><ul><li>如果账户忘记密码，删除 <code>/root/.config/verdaccio/htpasswd</code> 文件中存储的账户，重启服务。</li></ul><p><strong>Linux 上安装 Node.js 推荐使用 nvm</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-qO-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.bashrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">command</span><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">nvm</span></span></code></pre></div><p><strong>参考：</strong></p><ul><li><strong><strong><a href="http://luchun.github.io/verdaccio/" target="_blank" rel="noreferrer">使用verdaccio部署私有npm服务器</a></strong></strong></li><li><strong><strong><a href="https://zhuanlan.zhihu.com/p/532203499" target="_blank" rel="noreferrer">部署私有npm</a></strong></strong></li><li><strong><strong><a href="https://www.cnblogs.com/Wayou/p/14725375.html" target="_blank" rel="noreferrer">项目中私有 npm 源的设置</a></strong></strong></li><li><strong><strong><a href="https://segmentfault.com/a/1190000039150806" target="_blank" rel="noreferrer">关于npmrc文件的配置详解</a></strong></strong></li></ul>`,30),e=[p];function t(c,r,i,C,y,h){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{D as __pageData,A as default};
