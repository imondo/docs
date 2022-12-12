import{_ as s,c as n,o as a,a as e}from"./app.90b3aaf2.js";const y=JSON.parse('{"title":"Vue使用过程小记（持续更新）","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/01_Vue/04_使用过程小记.md","lastUpdated":1670824057000}'),l={name:"guide/04_FRONTEND/01_Vue/04_使用过程小记.md"},p=e(`<h1 id="vue使用过程小记-持续更新" tabindex="-1">Vue使用过程小记（持续更新） <a class="header-anchor" href="#vue使用过程小记-持续更新" aria-hidden="true">#</a></h1><h2 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-hidden="true">#</a></h2><ul><li>v-bind可以绑定对象</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 绑定一个有属性的对象 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div v-bind=&quot;{ id: someProp, &#39;other-attr&#39;: otherProp }&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 通过 prop 修饰符绑定 DOM 属性 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div v-bind:text-content.prop=&quot;text&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- prop 绑定。“prop”必须在 my-component 中声明。--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;my-component :prop=&quot;someThing&quot;&gt;&lt;/my-component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 通过 $props 将父组件的 props 一起传给子组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;child-component v-bind=&quot;$props&quot;&gt;&lt;/child-component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- XLink --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;svg&gt;&lt;a :xlink:special=&quot;foo&quot;&gt;&lt;/a&gt;&lt;/svg&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="利用函数来传递数据有奇效" tabindex="-1">利用函数来传递数据有奇效 <a class="header-anchor" href="#利用函数来传递数据有奇效" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 表格是否可以勾选判断条件</span></span>
<span class="line"><span style="color:#A6ACCD;">selectable: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: Function,</span></span>
<span class="line"><span style="color:#A6ACCD;">  default: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="vue的dispatch" tabindex="-1">vue的dispatch <a class="header-anchor" href="#vue的dispatch" aria-hidden="true">#</a></h2><ul><li>同级的<code>actions</code>可以引入<code>dispatch</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">GenerateRoutes({ dispatch, commit }, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><code>dispatch</code>最多就只接受两个参数，<code>type</code>和<code>payload</code></li></ul><p>传递第三个，为<code>undefined</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">dispatch(&#39;AddRoutesIndex&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: accessedRouters,</span></span>
<span class="line"><span style="color:#A6ACCD;">  index: schoolRouterIndex</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="elementui中el-tabs组件中el-table的宽度问题" tabindex="-1">ElementUI中el-tabs组件中el-table的宽度问题 <a class="header-anchor" href="#elementui中el-tabs组件中el-table的宽度问题" aria-hidden="true">#</a></h2><p>在tabs使用table会出现滚动条遮住内容可以使用<code>v-if</code>控制<code>el-tab-pane</code>里的内容 例如<code>v-if=&quot;activeName === &#39;second&#39;&quot;</code></p><h2 id="通过跨域方式获取信息" tabindex="-1">通过跨域方式获取信息 <a class="header-anchor" href="#通过跨域方式获取信息" aria-hidden="true">#</a></h2><p>项目<code>token.html</code>引入<a href="https://github.com/zendesk/cross-storage" target="_blank" rel="noreferrer">cross-storage</a>可以跨域获取信息</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// utils/auth.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var iportal = new CrossStorageClient(&#39;token.html&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">iportal.onConnect().then(() =&gt; iportal.get(accessToken)).then(token_list =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const tokenObj = JSON.parse(token_list); // { &quot;access_token&quot;:&quot;4bd53dcc-2e94-4652-9463-d4495c2509ad&quot;, &quot;token_type&quot;:&quot;bearer&quot;, ... }</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve(tokenObj);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="refreshtoken获取方案" tabindex="-1">RefreshToken获取方案 <a class="header-anchor" href="#refreshtoken获取方案" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// /config/fetch.js</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">let isRefreshing = false; // refresh_token是否刷新成功</span></span>
<span class="line"><span style="color:#A6ACCD;">let queueRequests = []; // refresh_token刷新并行接口集合队列</span></span>
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
<span class="line"><span style="color:#A6ACCD;">          // 重试完清空这个队列</span></span>
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
<span class="line"><span style="color:#A6ACCD;">        // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行</span></span>
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
