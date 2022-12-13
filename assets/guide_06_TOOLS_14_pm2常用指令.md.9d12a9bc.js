import{_ as s,c as a,o as n,a as p}from"./app.39613116.js";const F=JSON.parse('{"title":"pm2常用指令","description":"","frontmatter":{},"headers":[],"relativePath":"guide/06_TOOLS/14_pm2常用指令.md","lastUpdated":1670913817000}'),l={name:"guide/06_TOOLS/14_pm2常用指令.md"},o=p(`<h1 id="pm2常用指令" tabindex="-1">pm2常用指令 <a class="header-anchor" href="#pm2常用指令" aria-hidden="true">#</a></h1><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pm2 start app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js               # 启动app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js应用程序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  # 启动应用程序并命名为 </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">watch       # 当文件变化时自动重启应用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start script</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sh            # 启动 bash 脚本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 list                       # 列表 PM2 启动的所有的应用程序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 show [app</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name]            # 显示应用程序的所有信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs                       # 显示所有应用程序的日志</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs [app</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name]            # 显示指定应用程序的日志</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all                   # 停止所有的应用程序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">                     # 停止 id为 0的指定应用程序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart all                # 重启所有应用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">                  # 重启id为0 的应用程序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 </span><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> all                 # 关闭并删除所有应用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 </span><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">                   # 删除指定应用 id </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 startup                    # 创建开机自启动命令</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save                       # 保存当前应用列表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart start</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">memory</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">restart 20M # 内存达到20m重启</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,r,C,D,A,y){return n(),a("div",null,e)}const m=s(l,[["render",t]]);export{F as __pageData,m as default};
