(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{236:function(e,n,t){"use strict";t.r(n);var s=t(0),r=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"【vue项目总结】后台管理项目总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【vue项目总结】后台管理项目总结"}},[e._v("#")]),e._v(" 【Vue项目总结】后台管理项目总结")]),e._v(" "),t("p",[e._v("公司做的大部分都是后台管理项目，剔除每个项目的业务逻辑，其实都可以用通用的一套模版来做。")]),e._v(" "),t("h2",{attrs:{id:"登录逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录逻辑"}},[e._v("#")]),e._v(" 登录逻辑")]),e._v(" "),t("p",[e._v("每个系统都有自己的登录登出逻辑，而我们前端所要做的其实是请求后台，拿到登录权限，带上登录权限，获取用户信息和菜单信息。\n在"),t("code",[e._v("vue")]),e._v("项目开发当中，我们一般都是在全局路由钩子做这一系列判断。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("router.beforeEach(async(to, from, next) => {\n  NProgress.start();\n  await store.dispatch('SetConfigApi'); // 获取配置\n  await store.dispatch('SetApi'); // 设置基本配置\n  const token = await store.dispatch('getToken'); // 获取token\n  if (token) {\n    // 用户信息不存在\n    if (!store.getters.userInfo) {\n      await store.dispatch('GetUser'); // 获取用户信息\n      const menuList = await store.dispatch('GetMenu', localRoute); // 获取菜单\n      await store.dispatch('GenerateRoutes', localRoute);\n      router.addRoutes(store.getters.addRoutes);\n      ...\n    } else {\n      next();\n    }\n  } else {\n    if (whiteList.includes(to.path)) {\n      // 在免登录白名单，直接进入\n      next();\n    } else {\n      window.location.href = store.getters.api.IPORTAL_LOCAL_API;\n      NProgress.done();\n    }\n  }\n});\n")])])]),t("p",[e._v("当用户进入系统的时候，先获取系统的配置信息，这个配置信息可以是前端"),t("code",[e._v("json")]),e._v("文件，或者是后台接口；用这种方式可以灵活的修改项目中的配置，而不用每次都打包死进入项目，直接可以要运维童靴修改对应的配置信息，就可以了。")]),e._v(" "),t("h2",{attrs:{id:"菜单权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#菜单权限"}},[e._v("#")]),e._v(" 菜单权限")]),e._v(" "),t("p",[e._v("以前的菜单路由是直接写死在前端，但是当我们直接访问这个路由时，用户还是可以进入到这个功能页面；后来直接改成动态添加路由的方式"),t("code",[e._v("router.addRoutes")]),e._v("。")]),e._v(" "),t("ol",[t("li",[e._v("前端先获取菜单列表")]),e._v(" "),t("li",[e._v("根据获取的菜单列表循环添加用户菜单路由集合")]),e._v(" "),t("li",[e._v("动态添加路由")])]),e._v(" "),t("p",[e._v("具体可"),t("a",{attrs:{href:"https://github.com/one-pupil/vue-template/blob/master/src/store/modules/permission.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"请求方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求方案"}},[e._v("#")]),e._v(" 请求方案")]),e._v(" "),t("p",[e._v("项目请求是使用的"),t("code",[e._v("axios")]),e._v("，可以对它添加拦截器来处理我们的请求，也可以处理通过"),t("code",[e._v("axios.CancelToken")]),e._v("重复请求，具体可看代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 设置请求统一信息\nimport axios from 'axios';\nimport store from '@/store/index.js';\nimport qs from 'qs';\nimport { messages } from './msg-box.js';\n\nconst service = axios.create({\n  timeout: 300000, // 超时设置\n  withCredentials: true // 跨域请求\n});\n\nlet hasLogoutStatus = false; // 是否某个请求存在需要退出的状态\n\nconst queue = []; // 请求队列\n\nconst CancelToken = axios.CancelToken; // axios内置的中断方法\n\n/**\n * 拼接请求的url和方法；\n * 同样的`url + method` 可以视为相同的请求\n * @param {Object} config 请求头对象\n */\nconst token = config => {\n  return `${config.url}_${config.method}`;\n};\n\n/**\n * 中断重复的请求，并从队列中移除\n * @param {Object} config 请求头对象\n */\nconst removeQueue = config => {\n  for (let i = 0, size = queue.length; i < size; i++) {\n    const task = queue[i];\n    if (!task) return;\n    // 出现401，403状态码中断后续请求\n    const isLogout = token(config).includes('logout');\n    // 退出接口跳过中断逻辑\n    if (!isLogout && hasLogoutStatus) {\n      task.token();\n      queue.splice(i, 1);\n    } else {\n      const cancelMethods = ['post', 'put', 'delete']; // 需要中断的请求方式\n      const { method } = config;\n      if (cancelMethods.includes(method)) {\n        if (task.token === token(config)) {\n          task.cancel();\n          queue.splice(i, 1);\n        }\n      }\n    }\n  }\n};\n\n/**\n * 请求错误统一处理\n * @param {Object} response 错误对象\n */\nconst errorHandle = response => {\n  // eslint-disable-next-line prettier/prettier\n  const { status, data: { message = '' }} = response;\n  let msg = message;\n  if (!message) {\n    switch (status) {\n      case 401:\n        msg = '您没有权限访问此操作！';\n        break;\n      case 403:\n        msg = '您的登录状态已失效，请重新登录。';\n        break;\n      case 424:\n        msg = response.data.error;\n        break;\n      default:\n        msg = '服务请求异常，请刷新重试。';\n    }\n  }\n  hasLogoutStatus = status === 401 || status === 403;\n  if (hasLogoutStatus) {\n    messages('error', msg, () => {\n      store.dispatch('Logout');\n    });\n  }\n  messages('error', msg);\n};\n\n// 请求拦截器\nservice.interceptors.request.use(\n  config => {\n    // 中断之前的同名请求\n    removeQueue(config);\n    // 添加cancelToken\n    config.cancelToken = new CancelToken(c => {\n      queue.push({ token: token(config), cancel: c });\n    });\n    // 登录后添加token\n    if (store.getters.token) {\n      config.headers['Authorization'] =\n        store.getters.token.token_type + ' ' + store.getters.token.access_token;\n    }\n    return config;\n  },\n  error => {\n    return Promise.reject(error);\n  }\n);\n\n// 响应拦截器\nservice.interceptors.response.use(\n  response => {\n    // 在请求完成后，自动移出队列\n    removeQueue(response.config);\n    // 关闭全局按钮Loading响应\n    store.dispatch('CancalLoading');\n    // 错误码处理\n    if (response.status !== 200) {\n      return Promise.reject(response);\n    }\n    return response;\n  },\n  error => {\n    const { response } = error;\n    if (response) {\n      // 错误处理\n      errorHandle(response);\n      return Promise.reject(response);\n    } else {\n      // 请求超时\n      if (error.message.includes('timeout')) {\n        console.log('超时了');\n        messages('error', '请求已超时，请刷新或检查互联网连接');\n      } else {\n        // 断网，可以展示断网组件\n        console.log('断网了');\n        messages('error', '请检查网络是否已连接');\n      }\n    }\n  }\n);\n\nexport default {\n  get: (url, data = {}) => {\n    return new Promise((resolve, reject) => {\n      service\n        .get(store.getters.api.API + url, { params: data })\n        .then(response => {\n          resolve(response.data);\n        })\n        .catch(error => {\n          reject(error);\n        });\n    }).catch(error => {\n      throw new Error(error);\n    });\n  },\n  post: (url, data = {}) => {\n    return new Promise((resolve, reject) => {\n      service\n        .post(store.getters.api.API + url, data, {\n          headers: {\n            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'\n          },\n          withCredentials: true,\n          transformRequest: [\n            data => {\n              return qs.stringify(data);\n            }\n          ]\n        })\n        .then(response => {\n          resolve(response.data);\n        })\n        .catch(error => {\n          reject(error);\n        });\n    }).catch(error => {\n      return Promise.reject(error);\n    });\n  },\n  ...\n  /**\n   * blob下载\n   * @param {String} url 请求地址\n   * @param {String} method 请求方式 默认`get`\n   * @param {Object} data 请求数据\n   */\n  exportFile({ url = '', data = {}, method = 'get' }) {\n    return new Promise((resolve, reject) => {\n      const isPost =\n        method.toLocaleUpperCase() === 'POST'\n          ? {\n            headers: { 'Content-Type': 'application/json' },\n            data\n          }\n          : {\n            params: data\n          };\n      const downConfig = {\n        withCredentials: true,\n        responseType: 'blob',\n        ...isPost\n      };\n      service\n        // eslint-disable-next-line no-unexpected-multiline\n        [method](store.getters.api.API + url, downConfig)\n        .then(response => {\n          resolve(response);\n        })\n        .catch(error => {\n          reject(error);\n        });\n    }).catch(error => {\n      return Promise.reject(error);\n    });\n  }\n};\n\n")])])]),t("p",[e._v("当需要使用请求时，可以引用文件"),t("code",[e._v("http.js")]),e._v("，也可以挂在到"),t("code",[e._v("vue")]),e._v("原型上，在组件内使用"),t("code",[e._v("this.$http")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// user.js\nimport http from '@/utils/http.js';\n\nexport function getUser() {\n  return http.get('/user');\n}\n\n// main.js\nVue.prototype.$http = http;\n")])])]),t("h2",{attrs:{id:"按钮loading处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按钮loading处理"}},[e._v("#")]),e._v(" 按钮Loading处理")]),e._v(" "),t("p",[e._v("按钮的"),t("code",[e._v("loading")]),e._v("效果可以处理后台响应时间有点长场景，这里使用"),t("code",[e._v("store")]),e._v("封装了下处理方式。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// loading.js\nimport Vue from 'vue';\n\nconst loading = {\n  state: {},\n  mutations: {\n    SET_LOADING: (state, data) => {\n      const isObject =\n        Object.prototype.toString.call(data) === '[object Object]';\n      if (!isObject) return;\n      Object.keys(data).forEach(key => {\n        Vue.set(state, key, data[key]);\n      });\n    },\n    CANCAL_LOADING: state => {\n      Object.keys(state).forEach(key => {\n        Vue.delete(state, key);\n      });\n    }\n  },\n  actions: {\n    SetLoading({ commit }, data) {\n      commit('SET_LOADING', data);\n    },\n    CancalLoading({ commit }, data) {\n      commit('CANCAL_LOADING', data);\n    }\n  }\n};\n\nexport default loading;\n\n// http.js\nservice.interceptors.response.use(\n  response => {\n    // 关闭全局按钮Loading响应\n    store.dispatch('CancalLoading');\n    ...\n})    \n")])])]),t("p",[e._v("在组件内定义")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<el-button :loading="btn.save" @click="handleClick">保存</el-button>\n\ncomputed: {\n    btn() {\n        return this.$store.state.loading;\n    }\n}\nmethods: {\n    handleClick() {\n        this.$store.dispatch(\'SetLoading\', { save: true });    \n    }\n}\n')])])]),t("p",[e._v("以上就可以完美的使用"),t("code",[e._v("loading")]),e._v("，而不用每个都在"),t("code",[e._v("data")]),e._v("中定义了。")]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("以上都是后台系统中可以用到的一些处理方式，具体代码可"),t("a",{attrs:{href:"https://github.com/one-pupil/vue-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("其他总结文章：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5cf7807d51882519371f2467",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack常规打包优化方案"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5ce3c9fce51d454d56535754",target:"_blank",rel:"noopener noreferrer"}},[e._v("组件通信处理方案"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=r.exports}}]);