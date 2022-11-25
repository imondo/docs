import{_ as s,c as n,o as a,a as e}from"./app.4cae6a28.js";const y=JSON.parse('{"title":"Vue\u4F7F\u7528\u8FC7\u7A0B\u5C0F\u8BB0\uFF08\u6301\u7EED\u66F4\u65B0\uFF09","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/01_Vue/04_\u4F7F\u7528\u8FC7\u7A0B\u5C0F\u8BB0.md","lastUpdated":1669368786000}'),l={name:"guide/04_FRONTEND/01_Vue/04_\u4F7F\u7528\u8FC7\u7A0B\u5C0F\u8BB0.md"},p=e(`<h1 id="vue\u4F7F\u7528\u8FC7\u7A0B\u5C0F\u8BB0-\u6301\u7EED\u66F4\u65B0" tabindex="-1">Vue\u4F7F\u7528\u8FC7\u7A0B\u5C0F\u8BB0\uFF08\u6301\u7EED\u66F4\u65B0\uFF09 <a class="header-anchor" href="#vue\u4F7F\u7528\u8FC7\u7A0B\u5C0F\u8BB0-\u6301\u7EED\u66F4\u65B0" aria-hidden="true">#</a></h1><h2 id="\u6307\u4EE4" tabindex="-1">\u6307\u4EE4 <a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a></h2><ul><li>v-bind\u53EF\u4EE5\u7ED1\u5B9A\u5BF9\u8C61</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- \u7ED1\u5B9A\u4E00\u4E2A\u6709\u5C5E\u6027\u7684\u5BF9\u8C61 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div v-bind=&quot;{ id: someProp, &#39;other-attr&#39;: otherProp }&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- \u901A\u8FC7 prop \u4FEE\u9970\u7B26\u7ED1\u5B9A DOM \u5C5E\u6027 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div v-bind:text-content.prop=&quot;text&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- prop \u7ED1\u5B9A\u3002\u201Cprop\u201D\u5FC5\u987B\u5728 my-component \u4E2D\u58F0\u660E\u3002--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;my-component :prop=&quot;someThing&quot;&gt;&lt;/my-component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- \u901A\u8FC7 $props \u5C06\u7236\u7EC4\u4EF6\u7684 props \u4E00\u8D77\u4F20\u7ED9\u5B50\u7EC4\u4EF6 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;child-component v-bind=&quot;$props&quot;&gt;&lt;/child-component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- XLink --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;svg&gt;&lt;a :xlink:special=&quot;foo&quot;&gt;&lt;/a&gt;&lt;/svg&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5229\u7528\u51FD\u6570\u6765\u4F20\u9012\u6570\u636E\u6709\u5947\u6548" tabindex="-1">\u5229\u7528\u51FD\u6570\u6765\u4F20\u9012\u6570\u636E\u6709\u5947\u6548 <a class="header-anchor" href="#\u5229\u7528\u51FD\u6570\u6765\u4F20\u9012\u6570\u636E\u6709\u5947\u6548" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u8868\u683C\u662F\u5426\u53EF\u4EE5\u52FE\u9009\u5224\u65AD\u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">selectable: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: Function,</span></span>
<span class="line"><span style="color:#A6ACCD;">  default: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="vue\u7684dispatch" tabindex="-1">vue\u7684dispatch <a class="header-anchor" href="#vue\u7684dispatch" aria-hidden="true">#</a></h2><ul><li>\u540C\u7EA7\u7684<code>actions</code>\u53EF\u4EE5\u5F15\u5165<code>dispatch</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">GenerateRoutes({ dispatch, commit }, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><code>dispatch</code>\u6700\u591A\u5C31\u53EA\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C<code>type</code>\u548C<code>payload</code></li></ul><p>\u4F20\u9012\u7B2C\u4E09\u4E2A\uFF0C\u4E3A<code>undefined</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">dispatch(&#39;AddRoutesIndex&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: accessedRouters,</span></span>
<span class="line"><span style="color:#A6ACCD;">  index: schoolRouterIndex</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="elementui\u4E2Del-tabs\u7EC4\u4EF6\u4E2Del-table\u7684\u5BBD\u5EA6\u95EE\u9898" tabindex="-1">ElementUI\u4E2Del-tabs\u7EC4\u4EF6\u4E2Del-table\u7684\u5BBD\u5EA6\u95EE\u9898 <a class="header-anchor" href="#elementui\u4E2Del-tabs\u7EC4\u4EF6\u4E2Del-table\u7684\u5BBD\u5EA6\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u5728tabs\u4F7F\u7528table\u4F1A\u51FA\u73B0\u6EDA\u52A8\u6761\u906E\u4F4F\u5185\u5BB9\u53EF\u4EE5\u4F7F\u7528<code>v-if</code>\u63A7\u5236<code>el-tab-pane</code>\u91CC\u7684\u5185\u5BB9 \u4F8B\u5982<code>v-if=&quot;activeName === &#39;second&#39;&quot;</code></p><h2 id="\u901A\u8FC7\u8DE8\u57DF\u65B9\u5F0F\u83B7\u53D6\u4FE1\u606F" tabindex="-1">\u901A\u8FC7\u8DE8\u57DF\u65B9\u5F0F\u83B7\u53D6\u4FE1\u606F <a class="header-anchor" href="#\u901A\u8FC7\u8DE8\u57DF\u65B9\u5F0F\u83B7\u53D6\u4FE1\u606F" aria-hidden="true">#</a></h2><p>\u9879\u76EE<code>token.html</code>\u5F15\u5165<a href="https://github.com/zendesk/cross-storage" target="_blank" rel="noreferrer">cross-storage</a>\u53EF\u4EE5\u8DE8\u57DF\u83B7\u53D6\u4FE1\u606F</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// utils/auth.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var iportal = new CrossStorageClient(&#39;token.html&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">iportal.onConnect().then(() =&gt; iportal.get(accessToken)).then(token_list =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const tokenObj = JSON.parse(token_list); // { &quot;access_token&quot;:&quot;4bd53dcc-2e94-4652-9463-d4495c2509ad&quot;, &quot;token_type&quot;:&quot;bearer&quot;, ... }</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve(tokenObj);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="refreshtoken\u83B7\u53D6\u65B9\u6848" tabindex="-1">RefreshToken\u83B7\u53D6\u65B9\u6848 <a class="header-anchor" href="#refreshtoken\u83B7\u53D6\u65B9\u6848" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// /config/fetch.js</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">let isRefreshing = false; // refresh_token\u662F\u5426\u5237\u65B0\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">let queueRequests = []; // refresh_token\u5237\u65B0\u5E76\u884C\u63A5\u53E3\u96C6\u5408\u961F\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">switch (status) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  case 401:</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { config } = error.response;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!isRefreshing) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      isRefreshing = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">      const refreshToken = RefreshToken.getInstance(store.state.config.webIportalURL);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return refreshToken.init().then(token =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (token &amp;&amp; token.refresh_token &amp;&amp; token.isPastDue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          config.headers.Authorization = token.token_type + &#39; &#39; + token.access_token;</span></span>
<span class="line"><span style="color:#A6ACCD;">          config.url = config.url.substr(config.url.indexOf(&#39;api/&#39;) + 4);</span></span>
<span class="line"><span style="color:#A6ACCD;">          queueRequests.forEach((cb) =&gt; cb(token))</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u91CD\u8BD5\u5B8C\u6E05\u7A7A\u8FD9\u4E2A\u961F\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">          queueRequests = []</span></span>
<span class="line"><span style="color:#A6ACCD;">          return axios(config);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }).finally(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        isRefreshing = false</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5C06resolve\u653E\u8FDB\u961F\u5217\uFF0C\u7528\u4E00\u4E2A\u51FD\u6570\u5F62\u5F0F\u6765\u4FDD\u5B58\uFF0C\u7B49token\u5237\u65B0\u540E\u76F4\u63A5\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">        queueRequests.push((token) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          config.headers.Authorization = token.token_type + &#39; &#39; + token.access_token;</span></span>
<span class="line"><span style="color:#A6ACCD;">          config.url = config.url.substr(config.url.indexOf(&#39;api/&#39;) + 4);</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(axios(config));</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }      </span></span>
<span class="line"><span style="color:#A6ACCD;">    break;</span></span>
<span class="line"><span style="color:#A6ACCD;">  case 403:</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),o=[p];function t(c,r,i,C,A,d){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};
