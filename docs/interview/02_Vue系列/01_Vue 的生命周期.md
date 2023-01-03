# Vue 的生命周期

Vue 生命周期总共可以分为 `8` 个阶段：创建(`create`)前后，载入(`mount`)前后，更新(`update`)前后，销毁(`destroy`)前后，以及一些特殊场景的生命周期

|生命周期|	描述|
|---|---|
|beforeCreate|	组件实例创建前|
|created	|组件实例已完全创建|
|beforeMount|	组件挂载前|
|mounted	|组件挂载到实例后|
|beforeUpdate|	组件数据发生变化，更新前|
|updated|	组件数据更新后|
|beforeDestroy|	组件实例销毁前|
|destroyed|	组件实例销毁后|
|activated	|keep-alive 缓存的组件激活时|
|deactivated	|keep-alive 缓存的组件停用时调用|
|errorCaptured	|捕获一个来自子孙组件的错误时被调用|

## 生命周期流程

![vue](/imgs/vue.png)

分析

- beforeCreate -> created 阶段：初始化 `vue` 实例，进行数据观测

- created 阶段

  - 完成数据观测、属性、方法的运算，`watch`、`event` 事件回调的配置

  - 可调用 methods 中的方法，访问和修改 `data` 数据

  - `DOM` 暂未创建

- created -> beforeMount 阶段

  - 判断是否存在 `el` 选项，若不存在则停止编译，直到调用 `vm.$mount(el)` 才会继续编译

  - 优先级：`render` > `template` > `outerHTML`

  - `vm.el` 获取到的是挂载 `DOM` 的

- beforeMount 阶段：`vm.el` 完成 `DOM` 化，但并没有挂载在 `el` 选项上

- beforeMount -> mounted 阶段：`vm.el` 完成挂载，`vm.$el` 生成的 `DOM` 替换了 `el` 选项所对应的 `DOM`

- mounted 阶段：`vm.el` 已完成 `DOM` 的挂载与渲染，此刻打印 `vm.$el`，发现之前的挂载点及内容已被替换成新的 `DOM`

- beforeUpdate 阶段

  - 此时 `view` 还未更新

  - 若在 `beforeUpdate` 中修改数据，不会再次触发更新方法

- updated 阶段

  - 完成 `view` 更新

  - 若在 `updated` 中修改数据，会触发更新方法

- beforeDestroy 阶段

  - 实例被销毁前，还可以访问实例属性和方法

- destroyed 阶段

  - 完全销毁实例，解绑了所有指令和事件监听

  - 不能清除 `DOM`，仅销毁实例

使用场景分析

|生命周期	| 描述|
|---|---|
|beforeCreate	|执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务|
|created	|组件初始化完毕，各种数据可以使用，常用于异步数据获取|
|beforeMount	|未执行渲染、更新，dom 未创建|
|mounted	|初始化结束，dom已创建，可用于获取访问数据和dom元素|
|beforeUpdate	|更新前，可用于获取更新前各种状态|
|updated	|更新后，所有状态已是最新|
|beforeDestroy	|销毁前，可用于一些定时器或订阅的取消|
|destroyed	|组件已销毁，作用同上|


**参考**

https://vue3js.cn/interview/vue/vue.html