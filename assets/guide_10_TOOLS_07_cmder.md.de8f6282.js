import{_ as e,c as r,o as a,a as t}from"./app.1805c7d6.js";const u=JSON.parse('{"title":"cmder","description":"","frontmatter":{},"headers":[],"relativePath":"guide/10_TOOLS/07_cmder.md","lastUpdated":1675155362000}'),l={name:"guide/10_TOOLS/07_cmder.md"},c=t(`<h1 id="cmder" tabindex="-1">cmder <a class="header-anchor" href="#cmder" aria-hidden="true">#</a></h1><p><code>cmder</code>是<strong>windows环境</strong>下cmd的利器，比cmd更好的界面操作。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p>cmder官网： <a href="http://cmder.net/" target="_blank" rel="noreferrer">http://cmder.net/</a> Github：<a href="https://github.com/cmderdev/cmder" target="_blank" rel="noreferrer">https://github.com/cmderdev/cmder</a></p><p>直接下载mini版本。</p><ul><li>将下载的压缩包解压到你想放置的目录。</li><li>点击Cmder.exe即可运行。</li></ul><h2 id="添加右键启动" tabindex="-1">添加右键启动 <a class="header-anchor" href="#添加右键启动" aria-hidden="true">#</a></h2><ul><li>为cmder.exe添加环境变量</li></ul><p>将<code>cmder.exe</code>所在的目录添加系统环境变量。完成后可以使用<code>win + R</code>输入<code>cmder</code>即可运行<code>Cmder</code>。</p><p>打开<code>我的电脑--&gt;属性</code>后，照图片配置：</p><p><a href="https://imgchr.com/i/1h3yQA" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h3yQA.md.png" alt="1h3yQA.md.png"></a></p><ul><li>添加Cmder右键菜单启动</li></ul><p>以系统管理员权限打开<code>cmd</code>后，输入下面指令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Cmder.exe /REGISTER ALL</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>尝试在<strong>任意目录</strong>下右键鼠标，可看到cmder启动命令。</p><h2 id="常用快捷键" tabindex="-1">常用快捷键 <a class="header-anchor" href="#常用快捷键" aria-hidden="true">#</a></h2><ul><li><p>Tab：自动路径补全</p></li><li><p>ctrl + T: 建立新页签</p></li><li><p>ctrl + W：关闭页签</p></li><li><p>ctrl + tab：切换页签</p></li><li><p>ctrl + 1: 快速切换到第一个页签</p></li><li><p>ctrl + N: 快速切换到第n个页签</p></li><li><p>ctrl + R: 历史命令搜索</p></li><li><p>alt + F4: 关闭所有页签</p></li><li><p>alt + shift + 1: 开启cmd.exe</p></li><li><p>alt + shift + 2: 开启powershell.exe</p></li><li><p>alt + shift + 3: 开启powershell.exe（系统管理员权限）</p></li><li><p>alt + enter: 切换到全屏状态</p></li></ul>`,17),d=[c];function i(p,s,n,o,h,m){return a(),r("div",null,d)}const g=e(l,[["render",i]]);export{u as __pageData,g as default};