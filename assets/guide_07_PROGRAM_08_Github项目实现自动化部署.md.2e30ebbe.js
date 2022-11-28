import{_ as s,c as n,o as a,a as e}from"./app.93156826.js";const u=JSON.parse('{"title":"Github\u9879\u76EE\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72","description":"","frontmatter":{},"headers":[],"relativePath":"guide/07_PROGRAM/08_Github\u9879\u76EE\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72.md","lastUpdated":1669603444000}'),p={name:"guide/07_PROGRAM/08_Github\u9879\u76EE\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72.md"},l=e(`<h1 id="github\u9879\u76EE\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72" tabindex="-1">Github\u9879\u76EE\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72 <a class="header-anchor" href="#github\u9879\u76EE\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72" aria-hidden="true">#</a></h1><p>\u5F53\u6211\u4EEC\u5229\u7528<code>github</code>\u6765\u6258\u7BA1\u9879\u76EE\u65F6\uFF0C\u6BCF\u6B21\u90E8\u7F72\u9879\u76EE\u90FD\u8981\u8D70\u540C\u6837\u7684\u6D41\u7A0B\uFF0C\u6572\u51FB\u540C\u6837\u7684\u547D\u4EE4\u884C\uFF0C\u5C24\u5176\u7684\u6211\u4EEC\u7684<code>node</code>\u9879\u76EE\u66F4\u662F\u65E0\u6CD5\u5FCD\u53D7\u8FD9\u79CD\u91CD\u590D\u5DE5\u4F5C\u3002</p><p>\u90A3\u5230\u5E95\u6709\u6CA1\u6709\u4E00\u79CD\u53EF\u4EE5\u89E3\u653E\u6211\u4EEC\u53CC\u624B\uFF0C\u5F53\u6211\u4EEC\u63D0\u4EA4\u4EE3\u7801\u540E\uFF0C\u670D\u52A1\u5668\u81EA\u52A8\u6267\u884C\u6211\u4EEC\u5DF2\u7ECF\u5236\u5B9A\u597D\u7684\u547D\u4EE4\u884C\uFF0C\u7B54\u6848\u662F\u6211\u4EEC\u53EF\u4EE5\u5229\u7528<code>Github</code>\u81EA\u6709\u7684<code>Webhooks</code>\u3002</p><h2 id="webhooks" tabindex="-1">Webhooks <a class="header-anchor" href="#webhooks" aria-hidden="true">#</a></h2><p><code>Webhooks</code>\u662F\u6765\u76D1\u6D4B\u4F60\u5728<code>github</code>\u4E0A\u7684\u5404\u79CD\u4E8B\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5B9A\u5236\u5B83\u6765\u76D1\u6D4B\u4E00\u4E2A<code>push</code>\u4E8B\u4EF6\uFF0C\u6BCF\u5F53\u6211\u4EEC\u63D0\u4EA4\u4EE3\u7801\u65F6<code>Webhooks</code>\u4F1A\u88AB\u89E6\u53D1\uFF0C\u8FD9\u662F\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u4E00\u4E2A<code>HOST POST</code>\u8BF7\u6C42\u5230\u4F60\u6240\u9700\u8981\u7684\u5730\u5740\u3002</p><h2 id="\u5982\u4F55\u914D\u7F6E" tabindex="-1">\u5982\u4F55\u914D\u7F6E <a class="header-anchor" href="#\u5982\u4F55\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u627E\u5230\u4F60\u5728<code>Github</code>\u4E0A\u7684\u9879\u76EE\u5730\u5740\u4E0A\u7684<code>Setting</code>\u7684<code>Webhooks</code>\uFF0C\u5982\u4E0B\u56FE\u914D\u7F6E\uFF1A</p><p><a href="https://imgchr.com/i/1h8u6A" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h8u6A.md.png" alt="1h8u6A.md.png"></a></p><h2 id="\u9879\u76EE\u914D\u7F6E" tabindex="-1">\u9879\u76EE\u914D\u7F6E <a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li>\u7F16\u5199\u6267\u884C<code>shell\u547D\u4EE4</code></li></ul><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA<code>deployed.sh</code>\u6587\u4EF6\uFF0C\u8F93\u5165\u4F60\u60F3\u5728\u670D\u52A1\u5668\u4E0A\u6267\u884C\u7684\u547D\u4EE4\u884C\uFF0C\u5982\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cd /front/docs/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git pull origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u7F16\u5199\u6267\u884C\u811A\u672C</li></ul><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA<code>deployed.js</code>\u6587\u4EF6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var http = require(&#39;http&#39;)</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx\u914D\u7F6E" tabindex="-1">nginx\u914D\u7F6E <a class="header-anchor" href="#nginx\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u6267\u884C\u811A\u672C\u8DD1\u5728\u4E863000\u7AEF\u53E3\uFF0C\u6211\u4EEC\u670D\u52A1\u5668\u5BF9\u5E94\u542F\u7528\u5230 3000 \u7AEF\u53E3</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">upstream test {</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u90E8\u7F72\u9879\u76EE" tabindex="-1">\u90E8\u7F72\u9879\u76EE <a class="header-anchor" href="#\u90E8\u7F72\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u9996\u6B21\u90E8\u7F72\u5230\u670D\u52A1\u5668\u65F6\uFF0C\u4ECD\u7136\u662F\u9700\u8981\u6211\u4EEC\u624B\u52A8\u6267\u884C\u547D\u4EE4<code>git pull</code>\u9879\u76EE\uFF0C\u5F53\u6211\u4EEC\u5728\u670D\u52A1\u5668\u4E0A<code>clone</code>\u4E0B\u6211\u4EEC\u7684\u9879\u76EE\u540E\uFF0C\u5728\u672C\u5730\u5C1D\u8BD5\u4FEE\u6539\u4E0B\u4EE3\u7801\uFF0C\u7136\u540E\u518D\u6B21\u63D0\u4EA4\uFF0C\u53EF\u770B\u5230\u540E\u53F0\u7684\u65E5\u5FD7</p><p><a href="https://imgchr.com/i/1h81Tf" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h81Tf.md.png" alt="1h81Tf.md.png"></a></p><p>\u518D\u6B21\u67E5\u770B<code>Webhooks</code></p><p><a href="https://imgchr.com/i/1h88k8" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h88k8.md.png" alt="1h88k8.md.png"></a></p><p>\u8868\u793A\u5DF2\u7ECF\u81EA\u52A8\u89E6\u53D1\u4E86\u63A5\u53E3\uFF0C\u9879\u76EE\u81EA\u52A8\u5316\u90E8\u7F72\u6210\u529F\u3002</p><h2 id="\u7BA1\u7406\u5E94\u7528" tabindex="-1">\u7BA1\u7406\u5E94\u7528 <a class="header-anchor" href="#\u7BA1\u7406\u5E94\u7528" aria-hidden="true">#</a></h2><p>\u5728\u670D\u52A1\u5668\u4E0A\u6267\u884C<code>node</code>\u547D\u4EE4\u540E\uFF0C\u5F53\u6211\u4EEC\u79BB\u5F00\u670D\u52A1\u5668\u540E\uFF0C\u5B9E\u9645\u4E0A\u7A0B\u5E8F\u8FDB\u7A0B\u5173\u95ED\u4E86\uFF0C\u6240\u4EE5\u6211\u4EEC\u5229\u7528<a href="https://github.com/Unitech/pm2" target="_blank" rel="noreferrer">pm2</a>\u6765\u7BA1\u7406\u6211\u4EEC\u7684<code>node</code>\u8FDB\u7A0B\u3002</p><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA<code>pm2.json</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;test&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;script&quot;: &quot;deployed.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;env_dev&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;NODE_ENV&quot;: &quot;development&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;env_production&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;NODE_ENV&quot;: &quot;production&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u628A\u6240\u6709\u7684\u4EE3\u7801\u63A8\u9001\u4E0A\u670D\u52A1\u5668\uFF0C\u8FDB\u5165\u670D\u52A1\u5668\u9879\u76EE\u76EE\u5F55\uFF0C\u6267\u884C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start pm2.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u662F\u5426\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,30),o=[l];function c(t,r,i,C,d,A){return a(),n("div",null,o)}const y=s(p,[["render",c]]);export{u as __pageData,y as default};
