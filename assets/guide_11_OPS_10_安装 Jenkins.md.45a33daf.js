import{_ as s,c as n,o as a,a as e}from"./app.44061fed.js";const D=JSON.parse('{"title":"安装 Jenkins","description":"","frontmatter":{},"headers":[],"relativePath":"guide/11_OPS/10_安装 Jenkins.md","lastUpdated":1671003865000}'),l={name:"guide/11_OPS/10_安装 Jenkins.md"},p=e(`<h1 id="安装-jenkins" tabindex="-1">安装 Jenkins <a class="header-anchor" href="#安装-jenkins" aria-hidden="true">#</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p>执行以下命令</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 相关依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#89DDFF;">sudo</span><span style="color:#A6ACCD;"> yum install -y yum-utils \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  device-mapper-persistent-</span><span style="color:#89DDFF;">data</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">lvm2</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;"># 设置稳定仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#89DDFF;">sudo</span><span style="color:#A6ACCD;"> yum-config-manager \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --add-</span><span style="color:#89DDFF;">repo</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;"># 安装docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo yum install docker-ce docker-ce-cli containerd.io</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">docker -v</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="安装jenkins" tabindex="-1">安装Jenkins <a class="header-anchor" href="#安装jenkins" aria-hidden="true">#</a></h2><p><code>jenkins</code>的容器启动后，重要的文件保存在当前电脑，否则容器被损坏或者删除后就找不回这些文件了，准备一个目录作为文件映射，注意文件夹权限问题，本机目录是<code>/usr/local/work/jenkins</code>，并且执行了<code>chmod 777 /usr/local/work/jenkins</code>以确保<code>docker</code>进程有权限读写此目录</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 查看是否占用端口8080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">netstat</span><span style="color:#A6ACCD;"> -anp | grep 8080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 安装jenkins</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> run -p 8080:8080 -p 50000:50000 -v /usr/local/work/jenkins:/var/jenkins_home --name my-jenkins -idt jenkins</span></span>
<span class="line"></span></code></pre></div><blockquote><p>出现<code>Cannot connect to the Docker daemon.</code>问题尝试<code>service docker start</code>重启</p></blockquote><p>访问<code>8080</code>端口</p><p><a href="https://s2.ax1x.com/2020/01/15/lXEqg0.md.png" target="_blank" rel="noreferrer">!如图</a></p><ul><li><p>页面提示密码文件的位置：<code>/var/jenkins_home/secrets/initialAdminPassword</code>，由于已经将<code>/var/jenkins_home</code>目录映射到<code>/usr/local/work/jenkins</code>目录，所以密码文件位置是：<code>/usr/local/work/jenkins/secrets/initialAdminPassword</code></p></li><li><p>安装推荐的插件</p></li></ul><p><img src="https://s2.ax1x.com/2020/01/15/lXVeVe.png" alt="配置"></p><h2 id="docker指令" tabindex="-1">docker指令 <a class="header-anchor" href="#docker指令" aria-hidden="true">#</a></h2><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">service</span><span style="color:#A6ACCD;"> docker start // 启动docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> run // 启动容器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> stop &lt;image id&gt; // 停止容器运行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> rmi &lt;image id&gt; // 通过镜像的id来删除指定镜像</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> pull jenkins/jenkins // 更新容器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> ps -a // 查看容器状态</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> inspect CONTAINER ID // 查看容器详情</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,14),o=[p];function c(i,r,t,d,k,C){return a(),n("div",null,o)}const A=s(l,[["render",c]]);export{D as __pageData,A as default};
