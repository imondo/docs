# Single-spa

<a name="IdlQX"></a>
## 特点


- 同一页面，不同框架，不用刷新页面
- 独立部署每一个单页面应用
- 新功能使用新框架，旧单页应用不用重写可以共存
- 改善初始加载时间，延迟加载代码



<a name="BQEwf"></a>
## 内容


- app：每个应用都是完整的 SPA，可以响应 URL 路由事件，DOM 生命周期：初始化、挂载、卸载。没有各自的 HTML 页面
- config 配置：html 向程序注册
   - A name
   - A function（加载应用程序的代码）
   - A function （确定应用程序何时处于活动状态/非活动状态）



<a name="vkqrs"></a>
## 基本原理


- portal 项目
- app 项目


<br />
<br />

<a name="H98Ky"></a>
## Single-spa-test

<br />jquery或以前老项目逐步迁移迭代方案<br />

<a name="jASZu"></a>
### single-spa

<br />微前端[应用框架](https://zh-hans.single-spa.js.org/docs/getting-started-overview)<br />
<br />使用其简单搭建出一个微前端架构<br />

<a name="sdWxQ"></a>
### 单页应用

<br />随着jquery老项目迁移到单页应用是需要迁移成本，使用微前端来**逐步**迁移是一种择优的方案<br />

<a name="oA6Dr"></a>
### 迁移步骤


- 建立 single-spa-config 配置
- 创建需要迁移单页应用的页面 `spa.html`
- 单页应用的**路由 base**最好是设置成与老项目根目录**同名** `vue-template`



> 项目地址： [single-spa-test](https://github.com/imondo/single-spa-test) 效果地址：[single-spa-test](https://imondo.github.io/single-spa-test/)

