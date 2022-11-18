import{_ as s,c as n,o as a,a as p}from"./app.a71b2607.js";const y=JSON.parse('{"title":"Nuxt\u9879\u76EE\u4ECE\u5F00\u59CB\u5230\u90E8\u7F72","description":"","frontmatter":{},"headers":[],"relativePath":"guide/07_PROGRAM/09_Nuxt\u9879\u76EE\u4ECE\u5F00\u59CB\u5230\u90E8\u7F72.md","lastUpdated":1668750885000}'),l={name:"guide/07_PROGRAM/09_Nuxt\u9879\u76EE\u4ECE\u5F00\u59CB\u5230\u90E8\u7F72.md"},o=p(`<h1 id="nuxt\u9879\u76EE\u4ECE\u5F00\u59CB\u5230\u90E8\u7F72" tabindex="-1">Nuxt\u9879\u76EE\u4ECE\u5F00\u59CB\u5230\u90E8\u7F72 <a class="header-anchor" href="#nuxt\u9879\u76EE\u4ECE\u5F00\u59CB\u5230\u90E8\u7F72" aria-hidden="true">#</a></h1><p>\u524D\u671F\u63A5\u4E86\u4E2A\u79C1\u4EBA\u9879\u76EE\uFF0C\u505A\u4E2A\u5B98\u7F51\uFF0C\u60F3\u5230\u5728\u516C\u53F8\u90FD\u662F\u4F7F\u7528<code>vue</code>\u6280\u672F\u6808\uFF0C\u800C\u5B98\u7F51\u521A\u597D\u53EF\u4EE5\u4F7F\u7528<a href="https://zh.nuxtjs.org/guide/installation" target="_blank" rel="noreferrer">nuxt</a>\u6765\u505A\u3002</p><h1 id="\u5F00\u59CB" tabindex="-1">\u5F00\u59CB <a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p><code>nuxt</code>\u5B89\u88C5\u53EF\u4EE5\u6309\u7167\u5B98\u7F51\u7684\u6B65\u9AA4\u6765</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u9ED8\u8BA4\u5B89\u88C5 create-nuxt-app</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn create nuxt-app &lt;project-name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">cd &lt;project-name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4F7F\u7528\u9884\u5904\u7406\u5668" tabindex="-1">\u4F7F\u7528\u9884\u5904\u7406\u5668 <a class="header-anchor" href="#\u4F7F\u7528\u9884\u5904\u7406\u5668" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u4E0B\u76F4\u63A5\u5B89\u88C5\u5BF9\u5E94\u7684\u9884\u5904\u7406\u5668</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn add less less-loader</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5168\u5C40\u7EC4\u4EF6" tabindex="-1">\u5168\u5C40\u7EC4\u4EF6 <a class="header-anchor" href="#\u5168\u5C40\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u5728<code>plugins</code>\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA<code>lib-components.js</code>\u6587\u4EF6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import LoadImage from &quot;../components/LoadImage&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const components = { LoadImage };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.entries(components).forEach(([name, component]) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Vue.component(name, component)</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728<code>nuxt.config.js</code>\u6587\u4EF6\u4E2D\u914D\u7F6E</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;@/plugins/lib-components&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6302\u8F7D\u5168\u5C40http\u8BF7\u6C42" tabindex="-1">\u6302\u8F7D\u5168\u5C40http\u8BF7\u6C42 <a class="header-anchor" href="#\u6302\u8F7D\u5168\u5C40http\u8BF7\u6C42" aria-hidden="true">#</a></h2><p>\u5982\u679C\u6211\u4EEC\u60F3\u5728\u5168\u5C40\u6765\u505A\u8BF7\u6C42\uFF0C\u5728\u4F20\u7EDF\u7684<code>vue</code>\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728<code>main.js</code>\u4E2D\u6302\u8F7D\u5230\u539F\u578B\u4E0A\uFF0C\u800C\u5728<code>nuxt</code>\u9879\u76EE\u4E0A\u8FD8\u662F\u901A\u8FC7<code>plugins</code>\u76EE\u5F55\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u5728plugins\u76EE\u5F55\u4E2D\u5EFA\u7ACBrequest.js</span></span>
<span class="line"><span style="color:#A6ACCD;">// axios \u914D\u7F6E\u53EF\u81EA\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.use({</span></span>
<span class="line"><span style="color:#A6ACCD;">  install: function(Vue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Vue.prototype.$http = http;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728<code>nuxt.config.js</code>\u6587\u4EF6\u4E2D\u914D\u7F6E</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;@/plugins/request&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u4ED6\u7684\u914D\u7F6E\u4E0E\u95EE\u9898\u5176\u5B9E\u90FD\u53EF\u4EE5\u5728<a href="https://zh.nuxtjs.org/faq" target="_blank" rel="noreferrer">\u5B98\u7F51</a>\u4E2D\u67E5\u5230\uFF0C\u8BED\u6CD5\u4E0E<code>vue</code>\u5B8C\u5168\u65E0\u7F1D\u5BF9\u63A5\u3002</p><h1 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h1><p>\u9879\u76EE\u7F16\u5199\u5B8C\u6210\u540E\u8981\u90E8\u7F72\u5230\u7EBF\u4E0A\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u9879\u76EE\u8FD8\u662F\u4E00\u4E2A\u524D\u540E\u7AEF\u5206\u79BB\u7684\u9879\u76EE\uFF0C\u4E14\u524D\u7AEF\u8FD8\u662F\u4F7F\u7528<code>nginx</code>\u6765\u505A\u4EE3\u7406\u3002</p><h2 id="\u5B89\u88C5node" tabindex="-1">\u5B89\u88C5node <a class="header-anchor" href="#\u5B89\u88C5node" aria-hidden="true">#</a></h2><p>\u670D\u52A1\u5668\u4F7F\u7528\u7684\u662F<code>centos</code>\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>yum</code>\u5B89\u88C5</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">curl</span><span style="color:#A6ACCD;"> -sL https://rpm.nodesource.com/setup_10.x | bash -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">yum</span><span style="color:#A6ACCD;"> install -y nodejs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">node</span><span style="color:#A6ACCD;"> -v</span></span>
<span class="line"></span></code></pre></div><h2 id="\u62F7\u8D1D\u6587\u4EF6" tabindex="-1">\u62F7\u8D1D\u6587\u4EF6 <a class="header-anchor" href="#\u62F7\u8D1D\u6587\u4EF6" aria-hidden="true">#</a></h2><ul><li>\u5148\u672C\u5730\u6267\u884C <code>yarn build</code>\u547D\u4EE4</li><li>\u62F7\u8D1D\u4E0B\u9762\u6807\u8BB0\u7684\u6587\u4EF6\u81F3\u670D\u52A1\u5668\u90E8\u7F72\u76EE\u5F55<code>/opt/deploy/front</code></li></ul><p><a href="https://imgchr.com/i/1h8h0x" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h8h0x.png" alt="1h8h0x.png"></a></p><p>\u8FDB\u5165\u76EE\u5F55\u6267\u884C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cd /opt/deploy/front</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -production</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npm run start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx\u914D\u7F6E" tabindex="-1">nginx\u914D\u7F6E <a class="header-anchor" href="#nginx\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">www.test.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">/opt/deploy/front</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u524D\u7AEF\u6587\u4EF6\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://127.0.0.1:3000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8<code>nginx</code>\u540E\u53EF\u4EE5\u8BBF\u95EE\u57DF\u540D\u770B\u5230\u9879\u76EE\u3002</p><h2 id="pm2\u5B88\u62A4\u8FDB\u7A0B" tabindex="-1">pm2\u5B88\u62A4\u8FDB\u7A0B <a class="header-anchor" href="#pm2\u5B88\u62A4\u8FDB\u7A0B" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E\u7EBF\u4E0A\u9879\u76EE\uFF0C\u5982\u679C\u76F4\u63A5\u901A\u8FC7 <code>node app</code>\u6765\u542F\u52A8\uFF0C\u5982\u679C\u62A5\u9519\u4E86\u53EF\u80FD\u76F4\u63A5\u505C\u6B62\u5BFC\u81F4\u6574\u4E2A\u670D\u52A1\u5D29\u6E83\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>pm2</code>\u5BF9<code>node</code>\u8FDB\u7A0B\u7BA1\u7406</p><ul><li>\u5B89\u88C5</li></ul><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">npm</span><span style="color:#A6ACCD;"> install pm2 -g</span></span>
<span class="line"></span></code></pre></div><ul><li>\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA<code>pm2.json</code></li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
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
<span class="line"></span></code></pre></div><ul><li>\u542F\u52A8<code>pm2</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cd /opt/deploy/front</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start pm2.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://user-gold-cdn.xitu.io/2019/9/20/16d4d97a605d4973?w=814&amp;h=77&amp;f=png&amp;s=6230" alt=""></p><ul><li>\u5E38\u7528<code>pm2</code>\u6307\u4EE4</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pm2 start app.js               # \u542F\u52A8app.js\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start app.js --name=&quot;demo&quot;  # \u542F\u52A8\u5E94\u7528\u7A0B\u5E8F\u5E76\u547D\u540D\u4E3A &quot;demo&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start app.js --watch       # \u5F53\u6587\u4EF6\u53D8\u5316\u65F6\u81EA\u52A8\u91CD\u542F\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start script.sh            # \u542F\u52A8 bash \u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 list                       # \u5217\u8868 PM2 \u542F\u52A8\u7684\u6240\u6709\u7684\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 show [app-name]            # \u663E\u793A\u5E94\u7528\u7A0B\u5E8F\u7684\u6240\u6709\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs                       # \u663E\u793A\u6240\u6709\u5E94\u7528\u7A0B\u5E8F\u7684\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs [app-name]            # \u663E\u793A\u6307\u5B9A\u5E94\u7528\u7A0B\u5E8F\u7684\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all                   # \u505C\u6B62\u6240\u6709\u7684\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop 0                     # \u505C\u6B62 id\u4E3A 0\u7684\u6307\u5B9A\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart all                # \u91CD\u542F\u6240\u6709\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart 0                  # \u91CD\u542Fid\u4E3A0 \u7684\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 delete all                 # \u5173\u95ED\u5E76\u5220\u9664\u6240\u6709\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 delete 0                   # \u5220\u9664\u6307\u5B9A\u5E94\u7528 id 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 startup                    # \u521B\u5EFA\u5F00\u673A\u81EA\u542F\u52A8\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save                       # \u4FDD\u5B58\u5F53\u524D\u5E94\u7528\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h1><p>\u6574\u4E2A\u9879\u76EE\u4ECE\u5F00\u59CB\u5B89\u88C5\u5230\u90E8\u7F72\u4E0A\u7EBF\u8FD8\u662F\u5F88\u5E73\u6ED1\u7684\uFF0C\u6BD5\u7ADF\u90FD\u662F\u4F7F\u7528\u7684<code>vue</code>\u6280\u672F\u6808\uFF1B\u4F46\u662F\u8FD8\u662F\u6709\u53EF\u4EE5\u4F18\u5316\u7684\u7A7A\u95F4\uFF0C\u8BE5\u9879\u76EE\u4E0D\u662F\u4E00\u4E2A\u5B8C\u6574\u7684<code>ssr</code>\u9879\u76EE\uFF0C\u6CA1\u6709\u5F88\u597D\u7684\u8FD0\u7528<code>nuxt</code>\u7279\u6027\u3002</p>`,46),e=[o];function c(t,r,i,C,A,d){return a(),n("div",null,e)}const u=s(l,[["render",c]]);export{y as __pageData,u as default};
