# v-if与v-if不一起使用

`v-if` 是条件渲染指令

`v-for` 指令作用于列表渲染，建议使用 `key`，且保证每个 `key` 值的唯一性，便于 `diff` 算法进行优化。

查看渲染逻辑 `/src/compiler/codegen/index.ts`

```js
export function genElement(el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) { // v-for 优先判断
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    let code
    if (el.component) {
      code = genComponent(el.component, el, state)
    } else {
      let data
      const maybeComponent = state.maybeComponent(el)
      if (!el.plain || (el.pre && maybeComponent)) {
        data = genData(el, state)
      }

      let tag: string | undefined
      // check if this is a component in <script setup>
      const bindings = state.options.bindings
      if (maybeComponent && bindings && bindings.__isScriptSetup !== false) {
        tag = checkBindingType(bindings, el.tag)
      }
      if (!tag) tag = `'${el.tag}'`

      const children = el.inlineTemplate ? null : genChildren(el, state, true)
      code = `_c(${tag}${
        data ? `,${data}` : '' // data
      }${
        children ? `,${children}` : '' // children
      })`
    }
    // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code)
    }
    return code
  }
}
```

`Vue` 在进行 `if` 判断的时候，`v-for` 是比 `v-if` 先进行判断；所以 `v-for` 优先级比 `v-if` 高。


如果把 `v-if` 和 `v-for` 同时用在同一个元素上时，会带来性能方面的浪费，由于优先级问题，每次渲染都会**先循环再进行条件判断**

避免：

- 外层嵌套 `template`，在这一层进行 v-if 判断

```html
<template v-if="isShow">
    <p v-for="item in items">
</template>
```

- 如果条件出现在循环内部，可通过计算属性 `computed` 过滤

```js
computed: {
    items: function() {
      return this.list.filter(function (item) {
        return item.isShow
      })
    }
}
```

**参考**

https://vue3js.cn/interview/vue/vue.html