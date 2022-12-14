import{_ as s,c as n,o as a,a as e}from"./app.44061fed.js";const u=JSON.parse('{"title":"Github项目实现自动化部署","description":"","frontmatter":{},"headers":[],"relativePath":"guide/11_OPS/15_Github项目实现自动化部署.md","lastUpdated":1671007742000}'),p={name:"guide/11_OPS/15_Github项目实现自动化部署.md"},l=e(`<h1 id="github项目实现自动化部署" tabindex="-1">Github项目实现自动化部署 <a class="header-anchor" href="#github项目实现自动化部署" aria-hidden="true">#</a></h1><p>当我们利用<code>github</code>来托管项目时，每次部署项目都要走同样的流程，敲击同样的命令行，尤其的我们的<code>node</code>项目更是无法忍受这种重复工作。</p><p>那到底有没有一种可以解放我们双手，当我们提交代码后，服务器自动执行我们已经制定好的命令行，答案是我们可以利用<code>Github</code>自有的<code>Webhooks</code>。</p><h2 id="webhooks" tabindex="-1">Webhooks <a class="header-anchor" href="#webhooks" aria-hidden="true">#</a></h2><p><code>Webhooks</code>是来监测你在<code>github</code>上的各种事件，我们可以通过定制它来监测一个<code>push</code>事件，每当我们提交代码时<code>Webhooks</code>会被触发，这是我们可以通过配置一个<code>HOST POST</code>请求到你所需要的地址。</p><h2 id="如何配置" tabindex="-1">如何配置 <a class="header-anchor" href="#如何配置" aria-hidden="true">#</a></h2><p>找到你在<code>Github</code>上的项目地址上的<code>Setting</code>的<code>Webhooks</code>，如下图配置：</p><p><a href="https://imgchr.com/i/1h8u6A" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h8u6A.md.png" alt="1h8u6A.md.png"></a></p><h2 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-hidden="true">#</a></h2><ul><li>编写执行<code>shell命令</code></li></ul><p>在项目根目录下新建<code>deployed.sh</code>文件，输入你想在服务器上执行的命令行，如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cd /front/docs/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git pull origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>编写执行脚本</li></ul><p>在项目根目录下新建<code>deployed.js</code>文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var http = require(&#39;http&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">var spawn = require(&#39;child_process&#39;).spawn</span></span>
<span class="line"><span style="color:#A6ACCD;">var createHandler = require(&#39;github-webhook-handler&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">var handler = createHandler({</span></span>
<span class="line"><span style="color:#A6ACCD;">  path: &#39;/pushCode&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  secret: &#39;12345678&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">http.createServer(function (req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  handler(req, res, function (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.statusCode = 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.end(&#39;no such location&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}).listen(3000)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">handler.on(&#39;error&#39;, function (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.error(&#39;Error:&#39;, err.message)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">handler.on(&#39;push&#39;, function (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;Received a push event for %s to %s&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    event.payload.repository.name,</span></span>
<span class="line"><span style="color:#A6ACCD;">    event.payload.ref)</span></span>
<span class="line"><span style="color:#A6ACCD;">  rumCommand(&#39;sh&#39;, [&#39;./deployed.sh&#39;], function (txt) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(txt)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function rumCommand(cmd, args, callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var child = spawn(cmd, args)</span></span>
<span class="line"><span style="color:#A6ACCD;">  var response = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  child.stdout.on(&#39;data&#39;, function (buffer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    response += buffer.toString()</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  child.stdout.on(&#39;end&#39;, function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    callback(response)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx配置" tabindex="-1">nginx配置 <a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a></h2><p>执行脚本跑在了3000端口，我们服务器对应启用到 3000 端口</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">upstream test {</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:3000;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  location /pushCode {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://test;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_redirect off;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="部署项目" tabindex="-1">部署项目 <a class="header-anchor" href="#部署项目" aria-hidden="true">#</a></h2><p>首次部署到服务器时，仍然是需要我们手动执行命令<code>git pull</code>项目，当我们在服务器上<code>clone</code>下我们的项目后，在本地尝试修改下代码，然后再次提交，可看到后台的日志</p><p><a href="https://imgchr.com/i/1h81Tf" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h81Tf.md.png" alt="1h81Tf.md.png"></a></p><p>再次查看<code>Webhooks</code></p><p><a href="https://imgchr.com/i/1h88k8" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h88k8.md.png" alt="1h88k8.md.png"></a></p><p>表示已经自动触发了接口，项目自动化部署成功。</p><h2 id="管理应用" tabindex="-1">管理应用 <a class="header-anchor" href="#管理应用" aria-hidden="true">#</a></h2><p>在服务器上执行<code>node</code>命令后，当我们离开服务器后，实际上程序进程关闭了，所以我们利用<a href="https://github.com/Unitech/pm2" target="_blank" rel="noreferrer">pm2</a>来管理我们的<code>node</code>进程。</p><p>在项目根目录下新建<code>pm2.json</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;test&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;script&quot;: &quot;deployed.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;env_dev&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;NODE_ENV&quot;: &quot;development&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;env_production&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;NODE_ENV&quot;: &quot;production&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>把所有的代码推送上服务器，进入服务器项目目录，执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 启动命令</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start pm2.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看是否启动</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看日志</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,30),o=[l];function c(t,r,i,C,d,A){return a(),n("div",null,o)}const y=s(p,[["render",c]]);export{u as __pageData,y as default};
