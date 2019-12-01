# 【Vue项目总结】项目nginx部署

项目开发完成，接下来是上线，关于`vue`项目的部署，我司前端是部署在`nginx`服务器上，关于`nginx`的相关文档，请自行查阅；本文只记录部署时碰到的一些问题。

## 打包

`vue`项目打包后，是生成一系列的静态文件，包括项目的请求`IP`都打入包内，如果后台服务改动，这时你的前端文件，又要重新编译打包，这里采用的是[后台管理项目总结](https://juejin.im/post/5cedfea96fb9a07ef06f761e#heading-0)提到的前端自行请求一个配置文件，动态修改你的相关配置。

* 静态文件

```
// config.json
{
  "api": "test.com"
}
```

* 请求文件

在项目`store`中请求你的配置文件，写入`state`中，在调用的时候可以全局访问到你的配置

```
// api.js
GetConfigApi() {
  return new Promise((resolve, reject) => {
    axios
      .get(`/config.json?v=${new Date().getTime()}`)
      .then(result => {
        const configApi = {
          API: result.data['api'], // 统一接口
        };
        resolve(configApi);
      })
      .catch(error => {
        reject(error);
      });
  });
}
```

## nginx部署

因为`vue-router`有`hash`和`history`不同的两种模式，使用不同的模式，`nginx`的配置不同，`hash`模式下，不需要改动，只需要部署你的前端文件就可以了，所以这里只讨论`history`模式下`.conf`文件的修改

访问修改`nginx`配置文件`nginx.conf`

```
server {
  listen  80;
  server_name  test.com;

  location / {
    root  /front; // 前端文件路径
    index  index.html; // hash模式只配置访问html就可以了
    try_files $uri $uri/ /index.html; // history模式下
  }
}
```

修改完成，重启服务访问`test.com`

## 部署到子级目录

当我们需要把项目部署到子级目录下时，则需要修改项目的`BASE_URL`，生成一个子级目录下的绝对访问路径。修改对应的`.conf`配置文件

```
server {
  listen  80;
  server_name  test.com;

  location /demo { // 子级目录
    alias  /front/demo;
    index  index.html;
    try_files $uri $uri/ /demo/index.html; 
  }
}
```

修改完成，重启服务访问`test.com/demo`

## 缓存处理

前端项目的静态文件常常会被浏览器缓存，而项目编译后，`js`，`css`，图片等实际上是已经有`hash`值来去除了缓存，但是项目更新后，仍然会出现缓存问题，这是由于我们的项目整个入口都是在`index.html`文件上，浏览器实际是缓存了我们的`html`页面，所以我们要在`nginx`中告诉浏览器，`html`文件不被缓存。

```
  location /demo {
    add_header Cache-Control 'private, no-store, max-age=0';
    ...
  }
```

## 总结

这里只讨论了`nginx`相关的部署，实际上`vue-router`[文档](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)上是有相关的配置例子的。

其他总结文章：

- [webpack常规打包优化方案](/Note/webpack/webpack.md)
- [组件通信处理方案](/Note/vue/props.md)
- [后台管理项目总结](/Note/vue/http.md)



