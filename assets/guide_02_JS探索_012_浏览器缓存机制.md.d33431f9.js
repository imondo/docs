import{_ as e,c as t,o as a,a as d}from"./app.90b3aaf2.js";const o="/docs/imgs/hc.png",c="/docs/imgs/expires.png",f=JSON.parse('{"title":"浏览器缓存机制","description":"","frontmatter":{},"headers":[],"relativePath":"guide/02_JS探索/012_浏览器缓存机制.md","lastUpdated":1670822938000}'),i={name:"guide/02_JS探索/012_浏览器缓存机制.md"},l=d('<h1 id="浏览器缓存机制" tabindex="-1">浏览器缓存机制 <a class="header-anchor" href="#浏览器缓存机制" aria-hidden="true">#</a></h1><p><strong>缓存</strong>可以说是<strong>性能优化</strong>中简单高效的一种优化方式了，它可以显著<strong>减少网络传输</strong>所带来的损耗。</p><p>对于一个数据请求，可以分为三个步骤：</p><ul><li><p>网络请求</p></li><li><p>后端处理</p></li><li><p>浏览器响应</p></li></ul><p>浏览器缓存可以帮助我们在第一和第三个步骤中优化性能。比如说直接使用缓存而不发起请求，或者发起了请求但后端存储的数据和前端一致，那么就没有必要再将数据回传回来，这样就减少了响应数据。</p><p>浏览器缓存机制：</p><ul><li><p>缓存位置</p></li><li><p>缓存策略</p></li><li><p>实际场景应用缓存策略</p></li></ul><h2 id="缓存位置" tabindex="-1">缓存位置 <a class="header-anchor" href="#缓存位置" aria-hidden="true">#</a></h2><p>从缓存位置上来说分为四种，并且各有<strong>优先级</strong>，当依次查找缓存且都没有命中的时候，才会请求网络</p><ul><li><p>Service Worker</p></li><li><p>Memory Cache</p></li><li><p>Disk CaChe</p></li><li><p>Push Cache</p></li><li><p>网络请求</p></li></ul><h3 id="memory-cache" tabindex="-1">Memory Cache <a class="header-anchor" href="#memory-cache" aria-hidden="true">#</a></h3><p><code>Memory Cache</code> 是内存缓存，读取内存的中的数据肯定比磁盘快。但是内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。一但我们关闭 Tab 页面，内存中的缓存也就被释放了。</p><p>当我们访问过页面，再次刷新页面</p><p><img src="'+o+`" alt="hc.png"></p><p>既然缓存这么高效，是不是可以让数据都存放在内存中呢？</p><p>当然这是<strong>不可能</strong>的。计算机内存比硬盘容量小的多，系统不可能都把文件存在内存中。存储大部分：JS、CSS、HTML、图片等，但是浏览器会把哪些文件存在内存这个过程很<strong>玄学</strong></p><ul><li><p>对于大文件，大概率不会存在内存，反之</p></li><li><p>当前系统内存使用率高，文件优先存储硬盘</p></li></ul><h3 id="disk-cache" tabindex="-1">Disk Cache <a class="header-anchor" href="#disk-cache" aria-hidden="true">#</a></h3><p><code>Disk Cache</code> 是硬盘缓存，读取速度稍慢，但是什么都能存储。比 <code>Memory Cache</code> 胜在<strong>容量和存储时效性</strong>。</p><p><code>Disk Cache</code> 会根据 <code>HTTP Hearder</code> 中请求头字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据了。</p><h2 id="缓存策略" tabindex="-1">缓存策略 <a class="header-anchor" href="#缓存策略" aria-hidden="true">#</a></h2><p>分为两种：</p><ul><li><p>强缓存</p></li><li><p>协商缓存</p></li></ul><p>通过设置 <code>HTTP Header</code> 实现。</p><h3 id="强缓存" tabindex="-1">强缓存 <a class="header-anchor" href="#强缓存" aria-hidden="true">#</a></h3><p>强缓存表示在缓存期间不需要请求，通过设置请求头参数：</p><ul><li><code>Expires</code></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Expires: Fri, 13 May 2022 09:32:00 GMT</span></span>
<span class="line"></span></code></pre></div><p><code>Expires</code> 表示资源会在 <code>Fri, 13 May 2022 09:32:00 GMT</code> 后过期，需要再次请求。且它受限于<strong>本地时间</strong>，如果本地时间修改，可能会造成缓存失效。</p><ul><li><code>Cache-Control</code></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Cache-control: max-age=30</span></span>
<span class="line"></span></code></pre></div><p><code>Cache-Control</code> 优先级高于 <code>Expires</code> 。表示资源会在 30s 过期，需要再次请求。</p><p>常见指令</p><table><thead><tr><th style="text-align:left;">指令</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">public</td><td style="text-align:center;">表示响应可以被客户端和代理服务器缓存</td></tr><tr><td style="text-align:left;">private</td><td style="text-align:center;">响应只可以被客户端缓存</td></tr><tr><td style="text-align:left;">max-age=30</td><td style="text-align:center;">缓存 30s 后就过期，需要重新请求</td></tr><tr><td style="text-align:left;">s-maxage=30</td><td style="text-align:center;">覆盖 max-age，作用一样，只在代理服务器中生效</td></tr><tr><td style="text-align:left;">no-store</td><td style="text-align:center;">不缓存任何响应</td></tr><tr><td style="text-align:left;">no-cache</td><td style="text-align:center;">资源被缓存，但是会立即失效，下次会发起请求验证资源是否过期</td></tr><tr><td style="text-align:left;">max-stale=30</td><td style="text-align:center;">30s 内，即使缓存过期，也使用该缓存</td></tr><tr><td style="text-align:left;">min-fresh=30</td><td style="text-align:center;">希望在 30s 内获取最新的响应</td></tr></tbody></table><h3 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a></h3><p>如果缓存过期，就需要发起请求验证资源是否有更新。</p><p>设置请求头：</p><ul><li><p><code>Last-Modified</code></p></li><li><p><code>ETag</code></p></li></ul><p>当浏览器发起请求验证资源时，如果资源没有改变，那么服务端返回 <code>304</code> 状态码，并且更新浏览器缓存有效期。</p><ul><li><code>Last-Modified</code></li></ul><p>它表示本地文件最后修改日期，<code>If-Modified-Since</code> 会将 <code>Last-Modufued</code> 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来，否则返回 304 状态码。</p><p>弊端：</p><ul><li><p>如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 <code>Last-Modified</code> 被修改，服务端不能命中缓存导致发送相同的资源</p></li><li><p>因为 <code>Last-Modified</code> 只能以秒计时，如果不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源</p></li></ul><p>因此，在 HTTP / 1.1 出现了 <code>ETag</code></p><ul><li><code>ETag</code></li></ul><p><code>ETag</code> 类似文件指纹，<code>If-None-Match</code> 会将当前 <code>ETag</code> 发送给服务器，询问该资源 <code>ETag</code> 是否变动，存在变化就将新的资源发送回来。</p><p><code>ETag</code> 优先级比 <code>Last-Modified</code> 高。</p><p>如果什么缓存策略都没设置，那么浏览器会怎么处理？</p><p>对于这种情况，浏览器会采用一个启发式的算法，如果请求头存在 <code>Last-Modified</code> 通常会取响应头中的 <code>Date</code> 减去 <code>Last-Modified</code> 值的 <code>10%</code> 做为缓存时间。</p><h2 id="实际场景" tabindex="-1">实际场景 <a class="header-anchor" href="#实际场景" aria-hidden="true">#</a></h2><p>对于频繁变动的资源，首先需要使用 <code>Cache-Control: no-cache</code> 使浏览器每次都请求服务器，然后配合 <code>ETag</code> 或者 <code>Last-Modified</code> 来验证资源是否有效。这样的做法虽然<strong>不能节省请求数量，但是能显著减少响应数据大小</strong>。</p><blockquote><p>为什么减少响应数据大小：文件没有改变，返回304，使用了缓存文件</p></blockquote><p><code>HTML</code> 文件一般<strong>不缓存或者缓存时间很短</strong>。</p><p>其他文件进行哈希处理：</p><p>现在都会使用工具来打包代码，只有当代码修改后才会生成新的文件名。基于此，我们就可以给代码文件设置缓存有效期一年 <code>Cache-Control: max-age=31536000</code>，这样只有当 <code>HTML</code> 文件中引入的文件名发生了改变才会去下载最新的代码文件，否则就一直使用缓存。</p><h2 id="浏览器缓存机制-1" tabindex="-1">浏览器缓存机制 <a class="header-anchor" href="#浏览器缓存机制-1" aria-hidden="true">#</a></h2><p><img src="`+c+'" alt="expires.png"></p>',57),s=[l];function p(r,n,h,g,u,_){return a(),t("div",null,s)}const y=e(i,[["render",p]]);export{f as __pageData,y as default};
