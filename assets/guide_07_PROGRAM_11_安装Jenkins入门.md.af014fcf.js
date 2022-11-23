import{_ as s,c as n,o as a,a as e}from"./app.d121ef1a.js";const A=JSON.parse('{"title":"\u5B89\u88C5Jenkins\u5165\u95E8","description":"","frontmatter":{},"headers":[],"relativePath":"guide/07_PROGRAM/11_\u5B89\u88C5Jenkins\u5165\u95E8.md","lastUpdated":1669172880000}'),l={name:"guide/07_PROGRAM/11_\u5B89\u88C5Jenkins\u5165\u95E8.md"},p=e(`<h1 id="\u5B89\u88C5jenkins\u5165\u95E8" tabindex="-1">\u5B89\u88C5Jenkins\u5165\u95E8 <a class="header-anchor" href="#\u5B89\u88C5jenkins\u5165\u95E8" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u76F8\u5173\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#89DDFF;">sudo</span><span style="color:#A6ACCD;"> yum install -y yum-utils \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  device-mapper-persistent-</span><span style="color:#89DDFF;">data</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">lvm2</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\u7A33\u5B9A\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#89DDFF;">sudo</span><span style="color:#A6ACCD;"> yum-config-manager \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --add-</span><span style="color:#89DDFF;">repo</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;"># \u5B89\u88C5docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo yum install docker-ce docker-ce-cli containerd.io</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u7248\u672C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">docker -v</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u5B89\u88C5jenkins" tabindex="-1">\u5B89\u88C5Jenkins <a class="header-anchor" href="#\u5B89\u88C5jenkins" aria-hidden="true">#</a></h2><p><code>jenkins</code>\u7684\u5BB9\u5668\u542F\u52A8\u540E\uFF0C\u91CD\u8981\u7684\u6587\u4EF6\u4FDD\u5B58\u5728\u5F53\u524D\u7535\u8111\uFF0C\u5426\u5219\u5BB9\u5668\u88AB\u635F\u574F\u6216\u8005\u5220\u9664\u540E\u5C31\u627E\u4E0D\u56DE\u8FD9\u4E9B\u6587\u4EF6\u4E86\uFF0C\u51C6\u5907\u4E00\u4E2A\u76EE\u5F55\u4F5C\u4E3A\u6587\u4EF6\u6620\u5C04\uFF0C\u6CE8\u610F\u6587\u4EF6\u5939\u6743\u9650\u95EE\u9898\uFF0C\u672C\u673A\u76EE\u5F55\u662F<code>/usr/local/work/jenkins</code>\uFF0C\u5E76\u4E14\u6267\u884C\u4E86<code>chmod 777 /usr/local/work/jenkins</code>\u4EE5\u786E\u4FDD<code>docker</code>\u8FDB\u7A0B\u6709\u6743\u9650\u8BFB\u5199\u6B64\u76EE\u5F55</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u67E5\u770B\u662F\u5426\u5360\u7528\u7AEF\u53E38080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">netstat</span><span style="color:#A6ACCD;"> -anp | grep 8080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5B89\u88C5jenkins</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> run -p 8080:8080 -p 50000:50000 -v /usr/local/work/jenkins:/var/jenkins_home --name my-jenkins -idt jenkins</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u51FA\u73B0<code>Cannot connect to the Docker daemon.</code>\u95EE\u9898\u5C1D\u8BD5<code>service docker start</code>\u91CD\u542F</p></blockquote><p>\u8BBF\u95EE<code>8080</code>\u7AEF\u53E3</p><p><a href="https://s2.ax1x.com/2020/01/15/lXEqg0.md.png" target="_blank" rel="noreferrer">!\u5982\u56FE</a></p><ul><li><p>\u9875\u9762\u63D0\u793A\u5BC6\u7801\u6587\u4EF6\u7684\u4F4D\u7F6E\uFF1A<code>/var/jenkins_home/secrets/initialAdminPassword</code>\uFF0C\u7531\u4E8E\u5DF2\u7ECF\u5C06<code>/var/jenkins_home</code>\u76EE\u5F55\u6620\u5C04\u5230<code>/usr/local/work/jenkins</code>\u76EE\u5F55\uFF0C\u6240\u4EE5\u5BC6\u7801\u6587\u4EF6\u4F4D\u7F6E\u662F\uFF1A<code>/usr/local/work/jenkins/secrets/initialAdminPassword</code></p></li><li><p>\u5B89\u88C5\u63A8\u8350\u7684\u63D2\u4EF6</p></li></ul><p><img src="https://s2.ax1x.com/2020/01/15/lXVeVe.png" alt="\u914D\u7F6E"></p><h2 id="docker\u6307\u4EE4" tabindex="-1">docker\u6307\u4EE4 <a class="header-anchor" href="#docker\u6307\u4EE4" aria-hidden="true">#</a></h2><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">service</span><span style="color:#A6ACCD;"> docker start // \u542F\u52A8docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> run // \u542F\u52A8\u5BB9\u5668</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> stop &lt;image id&gt; // \u505C\u6B62\u5BB9\u5668\u8FD0\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> rmi &lt;image id&gt; // \u901A\u8FC7\u955C\u50CF\u7684id\u6765\u5220\u9664\u6307\u5B9A\u955C\u50CF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> pull jenkins/jenkins // \u66F4\u65B0\u5BB9\u5668</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> ps -a // \u67E5\u770B\u5BB9\u5668\u72B6\u6001</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">docker</span><span style="color:#A6ACCD;"> inspect CONTAINER ID // \u67E5\u770B\u5BB9\u5668\u8BE6\u60C5</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,14),o=[p];function c(i,r,t,d,k,C){return a(),n("div",null,o)}const D=s(l,[["render",c]]);export{A as __pageData,D as default};
