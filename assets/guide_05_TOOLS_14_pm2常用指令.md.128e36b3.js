import{_ as s,c as a,o as n,a as p}from"./app.d121ef1a.js";const F=JSON.parse('{"title":"pm2\u5E38\u7528\u6307\u4EE4","description":"","frontmatter":{},"headers":[],"relativePath":"guide/05_TOOLS/14_pm2\u5E38\u7528\u6307\u4EE4.md","lastUpdated":1669257902000}'),l={name:"guide/05_TOOLS/14_pm2\u5E38\u7528\u6307\u4EE4.md"},o=p(`<h1 id="pm2\u5E38\u7528\u6307\u4EE4" tabindex="-1">pm2\u5E38\u7528\u6307\u4EE4 <a class="header-anchor" href="#pm2\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a></h1><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pm2 start app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js               # \u542F\u52A8app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  # \u542F\u52A8\u5E94\u7528\u7A0B\u5E8F\u5E76\u547D\u540D\u4E3A </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">watch       # \u5F53\u6587\u4EF6\u53D8\u5316\u65F6\u81EA\u52A8\u91CD\u542F\u5E94\u7528</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start script</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sh            # \u542F\u52A8 bash \u811A\u672C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 list                       # \u5217\u8868 PM2 \u542F\u52A8\u7684\u6240\u6709\u7684\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 show [app</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name]            # \u663E\u793A\u5E94\u7528\u7A0B\u5E8F\u7684\u6240\u6709\u4FE1\u606F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs                       # \u663E\u793A\u6240\u6709\u5E94\u7528\u7A0B\u5E8F\u7684\u65E5\u5FD7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs [app</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name]            # \u663E\u793A\u6307\u5B9A\u5E94\u7528\u7A0B\u5E8F\u7684\u65E5\u5FD7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all                   # \u505C\u6B62\u6240\u6709\u7684\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">                     # \u505C\u6B62 id\u4E3A 0\u7684\u6307\u5B9A\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart all                # \u91CD\u542F\u6240\u6709\u5E94\u7528</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">                  # \u91CD\u542Fid\u4E3A0 \u7684\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 </span><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> all                 # \u5173\u95ED\u5E76\u5220\u9664\u6240\u6709\u5E94\u7528</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 </span><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">                   # \u5220\u9664\u6307\u5B9A\u5E94\u7528 id </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 startup                    # \u521B\u5EFA\u5F00\u673A\u81EA\u542F\u52A8\u547D\u4EE4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save                       # \u4FDD\u5B58\u5F53\u524D\u5E94\u7528\u5217\u8868</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart start</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">memory</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">restart 20M # \u5185\u5B58\u8FBE\u523020m\u91CD\u542F</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,r,C,D,A,y){return n(),a("div",null,e)}const m=s(l,[["render",t]]);export{F as __pageData,m as default};
