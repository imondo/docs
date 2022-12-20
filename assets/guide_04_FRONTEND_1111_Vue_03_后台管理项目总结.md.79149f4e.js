import{_ as s,c as n,o as a,a as l}from"./app.72bf9abe.js";const d=JSON.parse('{"title":"【Vue项目总结】后台管理项目总结","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/1111_Vue/03_后台管理项目总结.md","lastUpdated":1671517796000}'),p={name:"guide/04_FRONTEND/1111_Vue/03_后台管理项目总结.md"},e=l(`<h1 id="【vue项目总结】后台管理项目总结" tabindex="-1">【Vue项目总结】后台管理项目总结 <a class="header-anchor" href="#【vue项目总结】后台管理项目总结" aria-hidden="true">#</a></h1><p>公司做的大部分都是后台管理项目，剔除每个项目的业务逻辑，其实都可以用通用的一套模版来做。</p><h2 id="登录逻辑" tabindex="-1">登录逻辑 <a class="header-anchor" href="#登录逻辑" aria-hidden="true">#</a></h2><p>每个系统都有自己的登录登出逻辑，而我们前端所要做的其实是请求后台，拿到登录权限，带上登录权限，获取用户信息和菜单信息。 在<code>vue</code>项目开发当中，我们一般都是在全局路由钩子做这一系列判断。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">router.beforeEach(async(to, from, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  NProgress.start();</span></span>
<span class="line"><span style="color:#A6ACCD;">  await store.dispatch(&#39;SetConfigApi&#39;); // 获取配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  await store.dispatch(&#39;SetApi&#39;); // 设置基本配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  const token = await store.dispatch(&#39;getToken&#39;); // 获取token</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (token) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 用户信息不存在</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!store.getters.userInfo) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      await store.dispatch(&#39;GetUser&#39;); // 获取用户信息</span></span>
<span class="line"><span style="color:#A6ACCD;">      const menuList = await store.dispatch(&#39;GetMenu&#39;, localRoute); // 获取菜单</span></span>
<span class="line"><span style="color:#A6ACCD;">      await store.dispatch(&#39;GenerateRoutes&#39;, localRoute);</span></span>
<span class="line"><span style="color:#A6ACCD;">      router.addRoutes(store.getters.addRoutes);</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      next();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (whiteList.includes(to.path)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 在免登录白名单，直接进入</span></span>
<span class="line"><span style="color:#A6ACCD;">      next();</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      window.location.href = store.getters.api.IPORTAL_LOCAL_API;</span></span>
<span class="line"><span style="color:#A6ACCD;">      NProgress.done();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>当用户进入系统的时候，先获取系统的配置信息，这个配置信息可以是前端<code>json</code>文件，或者是后台接口；用这种方式可以灵活的修改项目中的配置，而不用每次都打包死进入项目，直接可以要运维童靴修改对应的配置信息，就可以了。</p><h2 id="菜单权限" tabindex="-1">菜单权限 <a class="header-anchor" href="#菜单权限" aria-hidden="true">#</a></h2><p>以前的菜单路由是直接写死在前端，但是当我们直接访问这个路由时，用户还是可以进入到这个功能页面；后来直接改成动态添加路由的方式<code>router.addRoutes</code>。</p><ol><li>前端先获取菜单列表</li><li>根据获取的菜单列表循环添加用户菜单路由集合</li><li>动态添加路由</li></ol><p>具体可<a href="https://github.com/imondo/vue-template/blob/master/src/store/modules/permission.js" target="_blank" rel="noreferrer">查看</a></p><h2 id="请求方案" tabindex="-1">请求方案 <a class="header-anchor" href="#请求方案" aria-hidden="true">#</a></h2><p>项目请求是使用的<code>axios</code>，可以对它添加拦截器来处理我们的请求，也可以处理通过<code>axios.CancelToken</code>重复请求，具体可看代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 设置请求统一信息</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import store from &#39;@/store/index.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import qs from &#39;qs&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { messages } from &#39;./msg-box.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const service = axios.create({</span></span>
<span class="line"><span style="color:#A6ACCD;">  timeout: 300000, // 超时设置</span></span>
<span class="line"><span style="color:#A6ACCD;">  withCredentials: true // 跨域请求</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let hasLogoutStatus = false; // 是否某个请求存在需要退出的状态</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const queue = []; // 请求队列</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const CancelToken = axios.CancelToken; // axios内置的中断方法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * 拼接请求的url和方法；</span></span>
<span class="line"><span style="color:#A6ACCD;"> * 同样的\`url + method\` 可以视为相同的请求</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Object} config 请求头对象</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const token = config =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return \`\${config.url}_\${config.method}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * 中断重复的请求，并从队列中移除</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Object} config 请求头对象</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const removeQueue = config =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0, size = queue.length; i &lt; size; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const task = queue[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!task) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 出现401，403状态码中断后续请求</span></span>
<span class="line"><span style="color:#A6ACCD;">    const isLogout = token(config).includes(&#39;logout&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 退出接口跳过中断逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!isLogout &amp;&amp; hasLogoutStatus) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      task.token();</span></span>
<span class="line"><span style="color:#A6ACCD;">      queue.splice(i, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const cancelMethods = [&#39;post&#39;, &#39;put&#39;, &#39;delete&#39;]; // 需要中断的请求方式</span></span>
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
<span class="line"><span style="color:#A6ACCD;"> * 请求错误统一处理</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Object} response 错误对象</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const errorHandle = response =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // eslint-disable-next-line prettier/prettier</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { status, data: { message = &#39;&#39; }} = response;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let msg = message;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!message) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch (status) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      case 401:</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg = &#39;您没有权限访问此操作！&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      case 403:</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg = &#39;您的登录状态已失效，请重新登录。&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      case 424:</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg = response.data.error;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      default:</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg = &#39;服务请求异常，请刷新重试。&#39;;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">// 请求拦截器</span></span>
<span class="line"><span style="color:#A6ACCD;">service.interceptors.request.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">  config =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 中断之前的同名请求</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeQueue(config);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 添加cancelToken</span></span>
<span class="line"><span style="color:#A6ACCD;">    config.cancelToken = new CancelToken(c =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      queue.push({ token: token(config), cancel: c });</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 登录后添加token</span></span>
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
<span class="line"><span style="color:#A6ACCD;">// 响应拦截器</span></span>
<span class="line"><span style="color:#A6ACCD;">service.interceptors.response.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">  response =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 在请求完成后，自动移出队列</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeQueue(response.config);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 关闭全局按钮Loading响应</span></span>
<span class="line"><span style="color:#A6ACCD;">    store.dispatch(&#39;CancalLoading&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 错误码处理</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (response.status !== 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Promise.reject(response);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return response;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { response } = error;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (response) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 错误处理</span></span>
<span class="line"><span style="color:#A6ACCD;">      errorHandle(response);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Promise.reject(response);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 请求超时</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (error.message.includes(&#39;timeout&#39;)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;超时了&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        messages(&#39;error&#39;, &#39;请求已超时，请刷新或检查互联网连接&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 断网，可以展示断网组件</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;断网了&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        messages(&#39;error&#39;, &#39;请检查网络是否已连接&#39;);</span></span>
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
<span class="line"><span style="color:#A6ACCD;">   * blob下载</span></span>
<span class="line"><span style="color:#A6ACCD;">   * @param {String} url 请求地址</span></span>
<span class="line"><span style="color:#A6ACCD;">   * @param {String} method 请求方式 默认\`get\`</span></span>
<span class="line"><span style="color:#A6ACCD;">   * @param {Object} data 请求数据</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>当需要使用请求时，可以引用文件<code>http.js</code>，也可以挂在到<code>vue</code>原型上，在组件内使用<code>this.$http</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// user.js</span></span>
<span class="line"><span style="color:#A6ACCD;">import http from &#39;@/utils/http.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function getUser() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return http.get(&#39;/user&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// main.js</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.prototype.$http = http;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="按钮loading处理" tabindex="-1">按钮Loading处理 <a class="header-anchor" href="#按钮loading处理" aria-hidden="true">#</a></h2><p>按钮的<code>loading</code>效果可以处理后台响应时间有点长场景，这里使用<code>store</code>封装了下处理方式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// loading.js</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    // 关闭全局按钮Loading响应</span></span>
<span class="line"><span style="color:#A6ACCD;">    store.dispatch(&#39;CancalLoading&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">})    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在组件内定义</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;el-button :loading=&quot;btn.save&quot; @click=&quot;handleClick&quot;&gt;保存&lt;/el-button&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上就可以完美的使用<code>loading</code>，而不用每个都在<code>data</code>中定义了。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>以上都是后台系统中可以用到的一些处理方式，具体代码可<a href="https://github.com/imondo/vue-template" target="_blank" rel="noreferrer">查看</a>。</p><p>其他总结文章：</p><ul><li><a href="https://juejin.im/post/5cf7807d51882519371f2467" target="_blank" rel="noreferrer">webpack常规打包优化方案</a></li><li><a href="https://juejin.im/post/5ce3c9fce51d454d56535754" target="_blank" rel="noreferrer">组件通信处理方案</a></li></ul>`,25),o=[e];function c(t,r,C,A,i,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
