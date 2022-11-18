import{_ as s,c as n,o as a,a as l}from"./app.a71b2607.js";const d=JSON.parse('{"title":"\u3010Vue\u9879\u76EE\u603B\u7ED3\u3011\u540E\u53F0\u7BA1\u7406\u9879\u76EE\u603B\u7ED3","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/01_Vue/03_\u540E\u53F0\u7BA1\u7406\u9879\u76EE\u603B\u7ED3.md","lastUpdated":1668750885000}'),p={name:"guide/04_FRONTEND/01_Vue/03_\u540E\u53F0\u7BA1\u7406\u9879\u76EE\u603B\u7ED3.md"},e=l(`<h1 id="\u3010vue\u9879\u76EE\u603B\u7ED3\u3011\u540E\u53F0\u7BA1\u7406\u9879\u76EE\u603B\u7ED3" tabindex="-1">\u3010Vue\u9879\u76EE\u603B\u7ED3\u3011\u540E\u53F0\u7BA1\u7406\u9879\u76EE\u603B\u7ED3 <a class="header-anchor" href="#\u3010vue\u9879\u76EE\u603B\u7ED3\u3011\u540E\u53F0\u7BA1\u7406\u9879\u76EE\u603B\u7ED3" aria-hidden="true">#</a></h1><p>\u516C\u53F8\u505A\u7684\u5927\u90E8\u5206\u90FD\u662F\u540E\u53F0\u7BA1\u7406\u9879\u76EE\uFF0C\u5254\u9664\u6BCF\u4E2A\u9879\u76EE\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u5176\u5B9E\u90FD\u53EF\u4EE5\u7528\u901A\u7528\u7684\u4E00\u5957\u6A21\u7248\u6765\u505A\u3002</p><h2 id="\u767B\u5F55\u903B\u8F91" tabindex="-1">\u767B\u5F55\u903B\u8F91 <a class="header-anchor" href="#\u767B\u5F55\u903B\u8F91" aria-hidden="true">#</a></h2><p>\u6BCF\u4E2A\u7CFB\u7EDF\u90FD\u6709\u81EA\u5DF1\u7684\u767B\u5F55\u767B\u51FA\u903B\u8F91\uFF0C\u800C\u6211\u4EEC\u524D\u7AEF\u6240\u8981\u505A\u7684\u5176\u5B9E\u662F\u8BF7\u6C42\u540E\u53F0\uFF0C\u62FF\u5230\u767B\u5F55\u6743\u9650\uFF0C\u5E26\u4E0A\u767B\u5F55\u6743\u9650\uFF0C\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u548C\u83DC\u5355\u4FE1\u606F\u3002 \u5728<code>vue</code>\u9879\u76EE\u5F00\u53D1\u5F53\u4E2D\uFF0C\u6211\u4EEC\u4E00\u822C\u90FD\u662F\u5728\u5168\u5C40\u8DEF\u7531\u94A9\u5B50\u505A\u8FD9\u4E00\u7CFB\u5217\u5224\u65AD\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">router.beforeEach(async(to, from, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  NProgress.start();</span></span>
<span class="line"><span style="color:#A6ACCD;">  await store.dispatch(&#39;SetConfigApi&#39;); // \u83B7\u53D6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  await store.dispatch(&#39;SetApi&#39;); // \u8BBE\u7F6E\u57FA\u672C\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  const token = await store.dispatch(&#39;getToken&#39;); // \u83B7\u53D6token</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (token) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7528\u6237\u4FE1\u606F\u4E0D\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!store.getters.userInfo) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      await store.dispatch(&#39;GetUser&#39;); // \u83B7\u53D6\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">      const menuList = await store.dispatch(&#39;GetMenu&#39;, localRoute); // \u83B7\u53D6\u83DC\u5355</span></span>
<span class="line"><span style="color:#A6ACCD;">      await store.dispatch(&#39;GenerateRoutes&#39;, localRoute);</span></span>
<span class="line"><span style="color:#A6ACCD;">      router.addRoutes(store.getters.addRoutes);</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      next();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (whiteList.includes(to.path)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5728\u514D\u767B\u5F55\u767D\u540D\u5355\uFF0C\u76F4\u63A5\u8FDB\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">      next();</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      window.location.href = store.getters.api.IPORTAL_LOCAL_API;</span></span>
<span class="line"><span style="color:#A6ACCD;">      NProgress.done();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u7528\u6237\u8FDB\u5165\u7CFB\u7EDF\u7684\u65F6\u5019\uFF0C\u5148\u83B7\u53D6\u7CFB\u7EDF\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u4FE1\u606F\u53EF\u4EE5\u662F\u524D\u7AEF<code>json</code>\u6587\u4EF6\uFF0C\u6216\u8005\u662F\u540E\u53F0\u63A5\u53E3\uFF1B\u7528\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u7075\u6D3B\u7684\u4FEE\u6539\u9879\u76EE\u4E2D\u7684\u914D\u7F6E\uFF0C\u800C\u4E0D\u7528\u6BCF\u6B21\u90FD\u6253\u5305\u6B7B\u8FDB\u5165\u9879\u76EE\uFF0C\u76F4\u63A5\u53EF\u4EE5\u8981\u8FD0\u7EF4\u7AE5\u9774\u4FEE\u6539\u5BF9\u5E94\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u5C31\u53EF\u4EE5\u4E86\u3002</p><h2 id="\u83DC\u5355\u6743\u9650" tabindex="-1">\u83DC\u5355\u6743\u9650 <a class="header-anchor" href="#\u83DC\u5355\u6743\u9650" aria-hidden="true">#</a></h2><p>\u4EE5\u524D\u7684\u83DC\u5355\u8DEF\u7531\u662F\u76F4\u63A5\u5199\u6B7B\u5728\u524D\u7AEF\uFF0C\u4F46\u662F\u5F53\u6211\u4EEC\u76F4\u63A5\u8BBF\u95EE\u8FD9\u4E2A\u8DEF\u7531\u65F6\uFF0C\u7528\u6237\u8FD8\u662F\u53EF\u4EE5\u8FDB\u5165\u5230\u8FD9\u4E2A\u529F\u80FD\u9875\u9762\uFF1B\u540E\u6765\u76F4\u63A5\u6539\u6210\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531\u7684\u65B9\u5F0F<code>router.addRoutes</code>\u3002</p><ol><li>\u524D\u7AEF\u5148\u83B7\u53D6\u83DC\u5355\u5217\u8868</li><li>\u6839\u636E\u83B7\u53D6\u7684\u83DC\u5355\u5217\u8868\u5FAA\u73AF\u6DFB\u52A0\u7528\u6237\u83DC\u5355\u8DEF\u7531\u96C6\u5408</li><li>\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531</li></ol><p>\u5177\u4F53\u53EF<a href="https://github.com/imondo/vue-template/blob/master/src/store/modules/permission.js" target="_blank" rel="noreferrer">\u67E5\u770B</a></p><h2 id="\u8BF7\u6C42\u65B9\u6848" tabindex="-1">\u8BF7\u6C42\u65B9\u6848 <a class="header-anchor" href="#\u8BF7\u6C42\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u8BF7\u6C42\u662F\u4F7F\u7528\u7684<code>axios</code>\uFF0C\u53EF\u4EE5\u5BF9\u5B83\u6DFB\u52A0\u62E6\u622A\u5668\u6765\u5904\u7406\u6211\u4EEC\u7684\u8BF7\u6C42\uFF0C\u4E5F\u53EF\u4EE5\u5904\u7406\u901A\u8FC7<code>axios.CancelToken</code>\u91CD\u590D\u8BF7\u6C42\uFF0C\u5177\u4F53\u53EF\u770B\u4EE3\u7801\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u8BBE\u7F6E\u8BF7\u6C42\u7EDF\u4E00\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import store from &#39;@/store/index.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import qs from &#39;qs&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { messages } from &#39;./msg-box.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const service = axios.create({</span></span>
<span class="line"><span style="color:#A6ACCD;">  timeout: 300000, // \u8D85\u65F6\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  withCredentials: true // \u8DE8\u57DF\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let hasLogoutStatus = false; // \u662F\u5426\u67D0\u4E2A\u8BF7\u6C42\u5B58\u5728\u9700\u8981\u9000\u51FA\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const queue = []; // \u8BF7\u6C42\u961F\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const CancelToken = axios.CancelToken; // axios\u5185\u7F6E\u7684\u4E2D\u65AD\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u62FC\u63A5\u8BF7\u6C42\u7684url\u548C\u65B9\u6CD5\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u540C\u6837\u7684\`url + method\` \u53EF\u4EE5\u89C6\u4E3A\u76F8\u540C\u7684\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Object} config \u8BF7\u6C42\u5934\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const token = config =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return \`\${config.url}_\${config.method}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u4E2D\u65AD\u91CD\u590D\u7684\u8BF7\u6C42\uFF0C\u5E76\u4ECE\u961F\u5217\u4E2D\u79FB\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Object} config \u8BF7\u6C42\u5934\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const removeQueue = config =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0, size = queue.length; i &lt; size; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const task = queue[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!task) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u51FA\u73B0401\uFF0C403\u72B6\u6001\u7801\u4E2D\u65AD\u540E\u7EED\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">    const isLogout = token(config).includes(&#39;logout&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u9000\u51FA\u63A5\u53E3\u8DF3\u8FC7\u4E2D\u65AD\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!isLogout &amp;&amp; hasLogoutStatus) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      task.token();</span></span>
<span class="line"><span style="color:#A6ACCD;">      queue.splice(i, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const cancelMethods = [&#39;post&#39;, &#39;put&#39;, &#39;delete&#39;]; // \u9700\u8981\u4E2D\u65AD\u7684\u8BF7\u6C42\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">      const { method } = config;</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (cancelMethods.includes(method)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (task.token === token(config)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          task.cancel();</span></span>
<span class="line"><span style="color:#A6ACCD;">          queue.splice(i, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u8BF7\u6C42\u9519\u8BEF\u7EDF\u4E00\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Object} response \u9519\u8BEF\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const errorHandle = response =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // eslint-disable-next-line prettier/prettier</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { status, data: { message = &#39;&#39; }} = response;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let msg = message;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!message) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch (status) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      case 401:</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg = &#39;\u60A8\u6CA1\u6709\u6743\u9650\u8BBF\u95EE\u6B64\u64CD\u4F5C\uFF01&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      case 403:</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg = &#39;\u60A8\u7684\u767B\u5F55\u72B6\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      case 424:</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg = response.data.error;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      default:</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg = &#39;\u670D\u52A1\u8BF7\u6C42\u5F02\u5E38\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5\u3002&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  hasLogoutStatus = status === 401 || status === 403;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (hasLogoutStatus) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    messages(&#39;error&#39;, msg, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      store.dispatch(&#39;Logout&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  messages(&#39;error&#39;, msg);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8BF7\u6C42\u62E6\u622A\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">service.interceptors.request.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">  config =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E2D\u65AD\u4E4B\u524D\u7684\u540C\u540D\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeQueue(config);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6DFB\u52A0cancelToken</span></span>
<span class="line"><span style="color:#A6ACCD;">    config.cancelToken = new CancelToken(c =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      queue.push({ token: token(config), cancel: c });</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u767B\u5F55\u540E\u6DFB\u52A0token</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (store.getters.token) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      config.headers[&#39;Authorization&#39;] =</span></span>
<span class="line"><span style="color:#A6ACCD;">        store.getters.token.token_type + &#39; &#39; + store.getters.token.access_token;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return config;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Promise.reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u54CD\u5E94\u62E6\u622A\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">service.interceptors.response.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">  response =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5728\u8BF7\u6C42\u5B8C\u6210\u540E\uFF0C\u81EA\u52A8\u79FB\u51FA\u961F\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeQueue(response.config);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5173\u95ED\u5168\u5C40\u6309\u94AELoading\u54CD\u5E94</span></span>
<span class="line"><span style="color:#A6ACCD;">    store.dispatch(&#39;CancalLoading&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u9519\u8BEF\u7801\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (response.status !== 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Promise.reject(response);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return response;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { response } = error;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (response) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u9519\u8BEF\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">      errorHandle(response);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Promise.reject(response);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8BF7\u6C42\u8D85\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (error.message.includes(&#39;timeout&#39;)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;\u8D85\u65F6\u4E86&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        messages(&#39;error&#39;, &#39;\u8BF7\u6C42\u5DF2\u8D85\u65F6\uFF0C\u8BF7\u5237\u65B0\u6216\u68C0\u67E5\u4E92\u8054\u7F51\u8FDE\u63A5&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u65AD\u7F51\uFF0C\u53EF\u4EE5\u5C55\u793A\u65AD\u7F51\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;\u65AD\u7F51\u4E86&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        messages(&#39;error&#39;, &#39;\u8BF7\u68C0\u67E5\u7F51\u7EDC\u662F\u5426\u5DF2\u8FDE\u63A5&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  get: (url, data = {}) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      service</span></span>
<span class="line"><span style="color:#A6ACCD;">        .get(store.getters.api.API + url, { params: data })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .then(response =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(response.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }).catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new Error(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  post: (url, data = {}) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      service</span></span>
<span class="line"><span style="color:#A6ACCD;">        .post(store.getters.api.API + url, data, {</span></span>
<span class="line"><span style="color:#A6ACCD;">          headers: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded;charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          withCredentials: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">          transformRequest: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">              return qs.stringify(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .then(response =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(response.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }).catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Promise.reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * blob\u4E0B\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">   * @param {String} url \u8BF7\u6C42\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">   * @param {String} method \u8BF7\u6C42\u65B9\u5F0F \u9ED8\u8BA4\`get\`</span></span>
<span class="line"><span style="color:#A6ACCD;">   * @param {Object} data \u8BF7\u6C42\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  exportFile({ url = &#39;&#39;, data = {}, method = &#39;get&#39; }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const isPost =</span></span>
<span class="line"><span style="color:#A6ACCD;">        method.toLocaleUpperCase() === &#39;POST&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          ? {</span></span>
<span class="line"><span style="color:#A6ACCD;">            headers: { &#39;Content-Type&#39;: &#39;application/json&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">            data</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          : {</span></span>
<span class="line"><span style="color:#A6ACCD;">            params: data</span></span>
<span class="line"><span style="color:#A6ACCD;">          };</span></span>
<span class="line"><span style="color:#A6ACCD;">      const downConfig = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        withCredentials: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        responseType: &#39;blob&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...isPost</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">      service</span></span>
<span class="line"><span style="color:#A6ACCD;">        // eslint-disable-next-line no-unexpected-multiline</span></span>
<span class="line"><span style="color:#A6ACCD;">        [method](store.getters.api.API + url, downConfig)</span></span>
<span class="line"><span style="color:#A6ACCD;">        .then(response =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(response);</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }).catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Promise.reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u9700\u8981\u4F7F\u7528\u8BF7\u6C42\u65F6\uFF0C\u53EF\u4EE5\u5F15\u7528\u6587\u4EF6<code>http.js</code>\uFF0C\u4E5F\u53EF\u4EE5\u6302\u5728\u5230<code>vue</code>\u539F\u578B\u4E0A\uFF0C\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528<code>this.$http</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// user.js</span></span>
<span class="line"><span style="color:#A6ACCD;">import http from &#39;@/utils/http.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function getUser() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return http.get(&#39;/user&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// main.js</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.prototype.$http = http;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6309\u94AEloading\u5904\u7406" tabindex="-1">\u6309\u94AELoading\u5904\u7406 <a class="header-anchor" href="#\u6309\u94AEloading\u5904\u7406" aria-hidden="true">#</a></h2><p>\u6309\u94AE\u7684<code>loading</code>\u6548\u679C\u53EF\u4EE5\u5904\u7406\u540E\u53F0\u54CD\u5E94\u65F6\u95F4\u6709\u70B9\u957F\u573A\u666F\uFF0C\u8FD9\u91CC\u4F7F\u7528<code>store</code>\u5C01\u88C5\u4E86\u4E0B\u5904\u7406\u65B9\u5F0F\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// loading.js</span></span>
<span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const loading = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    SET_LOADING: (state, data) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const isObject =</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.prototype.toString.call(data) === &#39;[object Object]&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (!isObject) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">      Object.keys(data).forEach(key =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Vue.set(state, key, data[key]);</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    CANCAL_LOADING: state =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Object.keys(state).forEach(key =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Vue.delete(state, key);</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    SetLoading({ commit }, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      commit(&#39;SET_LOADING&#39;, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    CancalLoading({ commit }, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      commit(&#39;CANCAL_LOADING&#39;, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default loading;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// http.js</span></span>
<span class="line"><span style="color:#A6ACCD;">service.interceptors.response.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">  response =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5173\u95ED\u5168\u5C40\u6309\u94AELoading\u54CD\u5E94</span></span>
<span class="line"><span style="color:#A6ACCD;">    store.dispatch(&#39;CancalLoading&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">})    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u7EC4\u4EF6\u5185\u5B9A\u4E49</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;el-button :loading=&quot;btn.save&quot; @click=&quot;handleClick&quot;&gt;\u4FDD\u5B58&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    btn() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.$store.state.loading;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$store.dispatch(&#39;SetLoading&#39;, { save: true });    </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u5C31\u53EF\u4EE5\u5B8C\u7F8E\u7684\u4F7F\u7528<code>loading</code>\uFF0C\u800C\u4E0D\u7528\u6BCF\u4E2A\u90FD\u5728<code>data</code>\u4E2D\u5B9A\u4E49\u4E86\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0A\u90FD\u662F\u540E\u53F0\u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u7528\u5230\u7684\u4E00\u4E9B\u5904\u7406\u65B9\u5F0F\uFF0C\u5177\u4F53\u4EE3\u7801\u53EF<a href="https://github.com/imondo/vue-template" target="_blank" rel="noreferrer">\u67E5\u770B</a>\u3002</p><p>\u5176\u4ED6\u603B\u7ED3\u6587\u7AE0\uFF1A</p><ul><li><a href="https://juejin.im/post/5cf7807d51882519371f2467" target="_blank" rel="noreferrer">webpack\u5E38\u89C4\u6253\u5305\u4F18\u5316\u65B9\u6848</a></li><li><a href="https://juejin.im/post/5ce3c9fce51d454d56535754" target="_blank" rel="noreferrer">\u7EC4\u4EF6\u901A\u4FE1\u5904\u7406\u65B9\u6848</a></li></ul>`,25),o=[e];function c(t,r,C,A,i,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
