# Vue使用过程小记（持续更新）

## 指令

* v-bind可以绑定对象

```
<!-- 绑定一个有属性的对象 -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- 通过 prop 修饰符绑定 DOM 属性 -->
<div v-bind:text-content.prop="text"></div>

<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
<my-component :prop="someThing"></my-component>

<!-- 通过 $props 将父组件的 props 一起传给子组件 -->
<child-component v-bind="$props"></child-component>

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
```

## 利用函数来传递数据有奇效

```
// 表格是否可以勾选判断条件
selectable: {
  type: Function,
  default: () => {
    return true;
  }
}
```

## vue的dispatch

* 同级的`actions`可以引入`dispatch`

```
GenerateRoutes({ dispatch, commit }, data) {
  ...
}
```

* `dispatch`最多就只接受两个参数，`type`和`payload`

传递第三个，为`undefined`

```
dispatch('AddRoutesIndex', {
  routes: accessedRouters,
  index: schoolRouterIndex
});
```

