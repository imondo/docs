# Vue 3 中 jsx 语法尝试

[Vue 3.0](https://github.com/vuejs/vue-next) 正式发布了，喜大普奔😁。新的语法又要学习一阵阵，不过需要在生产环境下大面积使用，可能需要等到它的周边工具：vuex，vue-router 等等全部升级完毕。

Vue 3.0 中尤大使用的了新的编译工具 [vite](https://github.com/vitejs/vite)，革了 webpack 的命😂。尝试看了下文档，发现支持 jsx 语法，由于这段时间都是在使用 react 来开发项目，jsx 完全不同的体验，更加的纯粹与灵活。

<a name="ZdQ2K"></a>
## 项目创建


```shell
npm init vite-app vite-vue
cd vite-vue
npm install
npm run dev
```
我们发现创建的目录解构很简单<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/124135/1600656795264-5d006cd1-640f-4f7f-a1c2-59dcc9c21ab4.png#align=left&display=inline&height=341&margin=%5Bobject%20Object%5D&name=image.png&originHeight=341&originWidth=221&size=13583&status=done&style=none&width=221)
<a name="oogSt"></a>
## 使用 JSX

<br />Vue 3.0 直接支持 jsx 语法，新建 demo.jsx
```javascript
export default function JsxTemp() {
  return <div>
    <h3>jsx</h3>
  </div>
}
```
引入到 App.vue 中可以完整显示

![image.png](https://cdn.nlark.com/yuque/0/2020/png/124135/1600656894136-348038d3-83ec-44c7-b277-50160d0bb9c9.png#align=left&display=inline&height=241&margin=%5Bobject%20Object%5D&name=image.png&originHeight=241&originWidth=548&size=10853&status=done&style=none&width=548)<br />
<br />再尝试绑定数据
```jsx
import { ref } from 'vue'

export default function JsxTemp() {
  const state = ref(0)
  const onClick = () => {
    state.value++;
    console.log(state.value)
  }
  return <div>
    <h3>state: {state.value}</h3>
    <button onClick={onClick}>点击</button>
  </div>
}
```
我们发现没有像我们想的那样 state 数一直自增😅<br />![vue3.gif](https://cdn.nlark.com/yuque/0/2020/gif/124135/1600657132947-213941b3-3bf5-4ff4-9430-42a9ba76c041.gif#align=left&display=inline&height=298&margin=%5Bobject%20Object%5D&name=vue3.gif&originHeight=298&originWidth=546&size=33274&status=done&style=none&width=546)<br />这是因为我们在 Vue 3.0 中需要使用 `defineComponent` 包裹来使其变成一个双向绑定数据的组件<br />参数 为 `setup function | object`
```jsx
import { defineComponent, ref } from 'vue'

export default defineComponent(() => {
  const state = ref(0)
  const onClick = () => {
    state.value++;
    console.log(state.value)
  }
  return () => (
    <div>
      <h3>state: {state.value}</h3>
      <button onClick={onClick}>点击</button>
    </div>
  )
})
```
可以看到现在是实时点击实现自增效果<br />![vue3.gif](https://cdn.nlark.com/yuque/0/2020/gif/124135/1600657427295-227aa2b2-d24b-494c-9eeb-674c32de9784.gif#align=left&display=inline&height=298&margin=%5Bobject%20Object%5D&name=vue3.gif&originHeight=298&originWidth=546&size=31211&status=done&style=none&width=546)
<a name="hTGAJ"></a>
## 组件通信

<br />组件间传值通信该怎么来实现呢😮

我们需要改用对象的方式来传入通信数据
```jsx
App.vue
<JsxTemp site="imondo.cn"  @onGet="onGet" />
export default {
	...
  methods: {
    onGet(e) {
      console.log('emit:', e)
    }
  }
}
...
export default defineComponent({
  props: {
    site: String
  },
  setup({ site }) {
    const state = ref(0)
    const onClick = () => {
      state.value++;
      console.log(state.value)
      context.emit('onGet', 'Mondo');
    }
    return () => (
      <div>
        <h1>props: {site}</h1>
        <h3>state: {state.value}</h3>
        <button onClick={onClick}>点击</button>
      </div>
    )
  }
})
```
实现效果

![vue3.gif](https://cdn.nlark.com/yuque/0/2020/gif/124135/1600660622082-39825938-4446-4d06-a0ea-e9457ab72ecc.gif#align=left&display=inline&height=329&margin=%5Bobject%20Object%5D&name=vue3.gif&originHeight=329&originWidth=815&size=31901&status=done&style=none&width=815)
<a name="b6E0l"></a>
## 总结
我们尝试了在 Vue 3.0 中如何使用 jsx ，这有助于我们在项目中更灵活的公用我们组件，由此也可以区分我们在项目中使用的方式<br />

- 无状态组件  我们完全可以使用纯函数来展示
- 有状态组件  存在逻辑与数据绑定的组件则需要使用 Vue 3.0 提供的一系列组件 API


<br />**参考**：

- [vue global api](https://v3.vuejs.org/api/global-api.html#createapp)
