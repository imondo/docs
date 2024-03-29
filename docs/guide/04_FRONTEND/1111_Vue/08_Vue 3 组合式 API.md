# Vue 3 组合式 API

Vue 3.x 完全不同于 Vue 2.x，使用函数式 API 构建程序，更灵活的组合组件逻辑<br />
<br />具体代码请查看 [地址](https://github.com/imondo/study/tree/master/vue_3.x)<br />

<a name="65a0ea9a"></a>
## 快速创建项目


```javascript

yarn create vite-app vue_3.x

cd vue_3.x

yarn

yarn dev
```


<a name="setup"></a>
## setup

<br />`setup` 函数是组件内使用 component API 的入口<br />

- 创建组件实例 => 初始化 `props` => 调用 `setup` 函数；在 `beforeCreate` 钩子之前调用
- 模板中使用



```
<template>
  <div>{{ count }}</div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const count = ref(0)
      return {
        count
      }
    }
  }
</script>
```


- 在渲染函数 / JSX 中使用



```javascript
import { h, ref, reactive } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const object = reactive({ foo: 'bar' })

    return () => h('div', [count.value, object.foo])
  },
}
```


- 参数


<br />传入 `props`<br />

```javascript
export default {
  props: {
    msg: String
  },
  setup(props) {
    return { privateMsg: props.msg };
  }
};
```

<br />**注意**<br />

- props 对象是响应式
- **不能解构** props 对象，会使其**失去响应性**
- 不可直接修改 props，会触发警告


<br />第二个参数提供**上下文对象**，只暴露了 `attrs`，`slots`，`emit` 对象<br />

```javascript
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup(props, context) {
    console.log(context); // { attrs, slots, emit }
  }
};
```


- `this` 使用


<br />**this 在 setup 函数中不可用**，`setup` 函数中的 `this` 与 2.x 中含义完全不同，避免混淆与 vue 2.x<br />

<a name="b42f7466"></a>
## 响应式 API


<a name="reactive"></a>
### reactive

<br />接收一个普通对象然后返回对象的响应式代理，同 `Vue.observable`<br />

```javascript
export default {
  name: "HelloWorld",
  setup(props, { attrs }) {
    const name = reactive({
      forwards: `Mondo`
    })
    return { name }; // 响应式
  }
};
```


<a name="ref"></a>
### ref

<br />接收一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 `.value`<br />

```javascript
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```


- 模板中访问，自动解套，无需在模板内额外书写 `.value` 属性



```javascript
<template>
  <div>{{ count }}</div>
</template>

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup() {
    return {
      count: ref(0)
    }
  }
};
```


- 作为响应式对象的属性访问



```javascript
const count = ref(1);
const state = reactive({
  count
})
console.log(state.count) // 1
state.count = 222;
console.log(count.value) // 222
```

<br />如果分配一个新的 ref 给现有的 ref，则替换旧的 ref<br />

```javascript
const otherCount = ref(10);
state.count = otherCount;
console.log(state.count) // 10
console.log(count.value) // 1
```


<a name="computed"></a>
### computed

<br />传入一个 getter 函数，返回一个默认不可修改的 ref 对象，同 vue 2.x 中的计算属性 `computed`<br />

```javascript
const count = ref(0)

const sum = computed(() => count.value + 1)

console.log(sum.value) // 1

sum.value = 3 // 错误
```

<br />也可传入一个 `get` 和 `set` 函数对象，创建一个可修改的计算状态<br />

```javascript
const count = ref(0)

const sum = computed({
  get: () => count.value + 1,
  set: (value) => {
    count.vlaue = value - 1
  }
})

sum.value = 55

console.log(sum, count) // 1, 54
```


<a name="watchEffect"></a>
### watchEffect

<br />立即执行传入的一个函数，并响应式追踪其依赖，并在依赖更新时重新运行该函数，类似 vue 2.x 中 `watch`<br />

```javascript
const name = reactive({
  forwards: `Mondo`
})
watchEffect(() => {
  console.log(name.forwards) // Mondo
})

setTimeout(() => {
  name.forwards = `imondo.cn`;
  // imondo.cn
}, 1500)
```


<a name="watch"></a>
### watch

<br />完全等效于 2.x 中 `watch` 选项<br />

- 对比 `watchEffect`，`watch` 允许我们：
   - 懒执行副作用；
   - 更明确哪些状态的改变会触发侦听器重新运行副作用；
   - 访问侦听状态变化前后的值。
- 监听数据源



```javascript

// 监听一个 getter
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    console.log(count, prevCount)
  }
)

// 直接监听一个 ref
const count = ref(0)
watch(count, (count, prevCount) => {
  console.log(count, prevCount)
}, {
  deep: true, // 深度监听
  immediate: true // 初始化执行一次
})

// 监听多个数据
watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  console.log([foo, bar], [prevFoo, prevBar])
})
```


<a name="readonly"></a>
### readonly

<br />传入一个对象，不关是响应式或者普通对象，返回原始对象的只读代理，代理是深层次的，对象内部任何嵌套属性也都是只读的<br />

```javascript
const original = reactive({ count: 0 })

const copy = readonly(original)

copy.count++ // warning!
```


<a name="4d2e51ea"></a>
## LifeCycle Hooks

<br />![171d4c3053a4c00b.png](https://cdn.nlark.com/yuque/0/2020/png/124135/1592815174627-123d8961-f677-4c2a-bb11-8e122298d734.png#align=left&display=inline&height=693&margin=%5Bobject%20Object%5D&name=171d4c3053a4c00b.png&originHeight=798&originWidth=510&size=22481&status=done&style=none&width=443)<br />

```javascript
import { onMounted, onUpdated, onUnmounted } from 'vue'

const MyComponent = {
  setup() {
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  },
}
```

<br />生命周期注册函数只能在 `setup` 期间同步使用<br />

- 与 2.x 版本生命周期相对应的组合式 API
   - ~~`beforeCreate`~~ -> 使用 `setup()`
   - ~~`created`~~ -> 使用 `setup()`
   - `beforeMount` -> `onBeforeMount`
   - `mounted` -> `onMounted`
   - `beforeUpdate` -> `onBeforeUpdate`
   - `updated` -> `onUpdated`
   - `beforeDestroy` -> `onBeforeUnmount`
   - `destroyed` -> `onUnmounted`
   - `errorCaptured` -> `onErrorCaptured`



<a name="0ead3a73"></a>
## 依赖注入

<br />`provide` 和 `inject` 提供依赖注入，类似 2.x 中 `provide/inject`，它们只能在当前组件 `setup` 中调用<br />

```javascript
// App.vue
setup(props, context) {
  provide('textColor', 'red')
}

// HelloWorld.vue
<span :style="{color: theme}">字体</span>

export default {
  name: "HelloWorld",
  setup(props, { attrs }) {
    const theme = inject('textColor')
    return { theme };
  }
};
```

<br />可以使用 `ref` 来保证 `provide` 和 `inject` 之间值的响应<br />

<a name="41f90994"></a>
## 模板 Refs

<br />通过创建 `ref()` 获取页面上的元素和组件实例引用<br />

```javascript
<h1 ref="color">refs color: {{ name.forwards }}</h1>

const color = ref(null);

onMounted(() => {
  color.value.style.color = 'red';
})
```


<a name="b4ce6fa9"></a>
## 响应式系统工具


<a name="toRef"></a>
### toRef

<br />为 `reactive` 对象属性创建一个 `ref`，这个 ref 可以被传递且保持响应性<br />

```javascript
const state = reactive({
  foo: 1,
  bar: 2,
})

const fooRef = toRef(state, 'foo')

fooRef.value++
console.log(state.foo) // 2

state.foo++
console.log(fooRef.value) // 3
```


<a name="toRefs"></a>
### toRefs

<br />把一个响应式对象转换成普通对象，该普通对象的每个 `property` 都是一个 `ref`，可以被解构且保持响应性<br />

```javascript
setup() {
  const state = reactive({
    count,
    name: 'Mondo',
    obj: {
      a: 1
    }
  });
  return { ...toRefs(state) }
}
```


<a name="unref"></a>
### unref

<br />如果参数是一个 ref 则返回它的 value，否则返回参数本身。它是 `val = isRef(val) ? val.value : val` 的语法糖。<br />

```javascript
const count = ref(12)
const a = 1;
console.log(unref(a), unref(count)) // 1, 12
```


<a name="0d98c747"></a>
### 其他
| API | 描述 |
| --- | --- |
| isRef | 检查一个值是否为一个 ref 对象 |
| isProxy | 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理 |
| isReactive | 检查一个对象是否是由 reactive 创建的响应式代理 |
| isReadonly | 检查一个对象是否是由 readonly 创建的只读代理 |



<a name="customRef"></a>
## customRef

<br />用于自定义一个 `ref`，可以控制依赖追踪和触发响应。接受一个工厂函数，两个参数分别是用于追踪的 `track` 与用于触发响应的 `trigger`，并返回一个一个带有 `get` 和 `set` 属性的对象<br />

```javascript
import { customRef } from 'vue'

function cusTheme(value) {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value + 1
      },
      set(newValue) {
        value = newValue
        trigger()
      }
    }
  })
}

setup() {
  const cusThemes = cusTheme(1) // 具有 ref 同样的特性
  return {
    cusThemes
  }
}
```


