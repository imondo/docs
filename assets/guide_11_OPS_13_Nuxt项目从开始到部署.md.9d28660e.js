import{_ as s,c as n,o as a,a as p}from"./app.72bf9abe.js";const y=JSON.parse('{"title":"Nuxt项目从开始到部署","description":"","frontmatter":{},"headers":[],"relativePath":"guide/11_OPS/13_Nuxt项目从开始到部署.md","lastUpdated":1671534361000}'),l={name:"guide/11_OPS/13_Nuxt项目从开始到部署.md"},o=p(`<h1 id="nuxt项目从开始到部署" tabindex="-1">Nuxt项目从开始到部署 <a class="header-anchor" href="#nuxt项目从开始到部署" aria-hidden="true">#</a></h1><p>前期接了个私人项目，做个官网，想到在公司都是使用<code>vue</code>技术栈，而官网刚好可以使用<a href="https://zh.nuxtjs.org/guide/installation" target="_blank" rel="noreferrer">nuxt</a>来做。</p><h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-hidden="true">#</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p><code>nuxt</code>安装可以按照官网的步骤来</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 默认安装 create-nuxt-app</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn create nuxt-app &lt;project-name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">cd &lt;project-name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="使用预处理器" tabindex="-1">使用预处理器 <a class="header-anchor" href="#使用预处理器" aria-hidden="true">#</a></h2><p>项目下直接安装对应的预处理器</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn add less less-loader</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="全局组件" tabindex="-1">全局组件 <a class="header-anchor" href="#全局组件" aria-hidden="true">#</a></h2><p>在<code>plugins</code>文件夹下创建<code>lib-components.js</code>文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import LoadImage from &quot;../components/LoadImage&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const components = { LoadImage };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.entries(components).forEach(([name, component]) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Vue.component(name, component)</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在<code>nuxt.config.js</code>文件中配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;@/plugins/lib-components&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="挂载全局http请求" tabindex="-1">挂载全局http请求 <a class="header-anchor" href="#挂载全局http请求" aria-hidden="true">#</a></h2><p>如果我们想在全局来做请求，在传统的<code>vue</code>项目中，我们可以在<code>main.js</code>中挂载到原型上，而在<code>nuxt</code>项目上还是通过<code>plugins</code>目录。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 在plugins目录中建立request.js</span></span>
<span class="line"><span style="color:#A6ACCD;">// axios 配置可自定义</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.use({</span></span>
<span class="line"><span style="color:#A6ACCD;">  install: function(Vue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Vue.prototype.$http = http;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在<code>nuxt.config.js</code>文件中配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;@/plugins/request&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>其他的配置与问题其实都可以在<a href="https://zh.nuxtjs.org/faq" target="_blank" rel="noreferrer">官网</a>中查到，语法与<code>vue</code>完全无缝对接。</p><h1 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-hidden="true">#</a></h1><p>项目编写完成后要部署到线上，因为这个项目还是一个前后端分离的项目，且前端还是使用<code>nginx</code>来做代理。</p><h2 id="安装node" tabindex="-1">安装node <a class="header-anchor" href="#安装node" aria-hidden="true">#</a></h2><p>服务器使用的是<code>centos</code>系统，可以使用<code>yum</code>安装</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">curl</span><span style="color:#A6ACCD;"> -sL https://rpm.nodesource.com/setup_10.x | bash -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">yum</span><span style="color:#A6ACCD;"> install -y nodejs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">node</span><span style="color:#A6ACCD;"> -v</span></span>
<span class="line"></span></code></pre></div><h2 id="拷贝文件" tabindex="-1">拷贝文件 <a class="header-anchor" href="#拷贝文件" aria-hidden="true">#</a></h2><ul><li>先本地执行 <code>yarn build</code>命令</li><li>拷贝下面标记的文件至服务器部署目录<code>/opt/deploy/front</code></li></ul><p><a href="https://imgchr.com/i/1h8h0x" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h8h0x.png" alt="1h8h0x.png"></a></p><p>进入目录执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cd /opt/deploy/front</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -production</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npm run start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx配置" tabindex="-1">nginx配置 <a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a></h2><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">www.test.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">/opt/deploy/front</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># 前端文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://127.0.0.1:3000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>启动<code>nginx</code>后可以访问域名看到项目。</p><h2 id="pm2守护进程" tabindex="-1">pm2守护进程 <a class="header-anchor" href="#pm2守护进程" aria-hidden="true">#</a></h2><p>对于线上项目，如果直接通过 <code>node app</code>来启动，如果报错了可能直接停止导致整个服务崩溃，我们可以使用<code>pm2</code>对<code>node</code>进程管理</p><ul><li>安装</li></ul><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">npm</span><span style="color:#A6ACCD;"> install pm2 -g</span></span>
<span class="line"></span></code></pre></div><ul><li>项目根目录创建<code>pm2.json</code></li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">npm run start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">env_dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">NODE_ENV</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">env_production</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">NODE_ENV</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><ul><li>启动<code>pm2</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cd /opt/deploy/front</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start pm2.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://user-gold-cdn.xitu.io/2019/9/20/16d4d97a605d4973?w=814&amp;h=77&amp;f=png&amp;s=6230" alt=""></p><ul><li>常用<code>pm2</code>指令</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pm2 start app.js               # 启动app.js应用程序</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start app.js --name=&quot;demo&quot;  # 启动应用程序并命名为 &quot;demo&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start app.js --watch       # 当文件变化时自动重启应用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start script.sh            # 启动 bash 脚本</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 list                       # 列表 PM2 启动的所有的应用程序</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 show [app-name]            # 显示应用程序的所有信息</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs                       # 显示所有应用程序的日志</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs [app-name]            # 显示指定应用程序的日志</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all                   # 停止所有的应用程序</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop 0                     # 停止 id为 0的指定应用程序</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart all                # 重启所有应用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart 0                  # 重启id为0 的应用程序</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 delete all                 # 关闭并删除所有应用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 delete 0                   # 删除指定应用 id 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 startup                    # 创建开机自启动命令</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save                       # 保存当前应用列表</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h1><p>整个项目从开始安装到部署上线还是很平滑的，毕竟都是使用的<code>vue</code>技术栈；但是还是有可以优化的空间，该项目不是一个完整的<code>ssr</code>项目，没有很好的运用<code>nuxt</code>特性。</p>`,46),e=[o];function c(t,r,i,C,A,d){return a(),n("div",null,e)}const u=s(l,[["render",c]]);export{y as __pageData,u as default};
