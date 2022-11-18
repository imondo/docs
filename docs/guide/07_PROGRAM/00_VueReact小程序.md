# Vue，React, 微信小程序对比 

> 无特殊说明这里的小程序都是微信小程序

## 模板语法
vue 模板语法
```js
<h1>{{ msg }}</h1>
```
react jsx 模板语法
```javascript
<h1>{ state.msg }</h1>
```
小程序模板语法
```html
<view> {{ message }} </view>
```

## 数据绑定
vue
```js
export default {
	data() {
		return {
			msg: 'vue 数据绑定'
		}
	}
}
```
react
```javascript
class App extends React.Component {
	constructor() {
  	super()
    this.state = {
    	msg: 'react 数据绑定'
    }
  }
}
```
小程序和 vue 类似 不过 vue 是在 data 函数中返回
```javascript
Page({
	data: {
  	msg: '小程序 数据绑定'
  }
})
```

## class 与 style 绑定
vue 绑定
```js
<span :class={'hide': hide}></span>
data: {
  hide: true
}
```
react 绑定
```javascript
const Item = () => {
  const [ red, setRed ] = useState('red')
	return <span className={red} style={{color: red}}></span>
}
```
小程序 绑定 和 vue 类似
```js
<view class="{{ fixed ? 'sticky-fixed' : ''}}" style="{{ wrapStyle }}">
```

## 列表渲染
vue 列表
```js
// Array 渲染 (数组元素，数组下标)
<p v-for="(item, index) in list" :key="index">{{index}} : {{ item }}</p>
// Object 渲染 (属性值, 属性, 下标)
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
```
react 列表

使用 map 函数循环

```javascript
const List = () => {
	return (
    <ul>
      {
        list.map((item, index) => {
          return <li key={index}> { item } </li>
        })
      }
    </ul>
  )
}
```
小程序 列表

* wx:for-item 指定数组当前元素名称
* wx:for-item 指定数组下标名称

```js
<view wx:for="list" wx:for-index="idx" wx:for-item="row" wx:key="idx">{{ row }}</view>
```

## 条件渲染
vue 条件

* v-if DOM 元素没有渲染
* v-show DOM 元素渲染

```js
// v-if
<h1 v-if="isTrue">你看见了吗</h1>
<h1 v-else-if="isShow">我看见了</h1>
<h1 v-else>我看见了</h1>

// v-show
<h1 v-show="isTrue">你看见了吗</h1>
```
react 条件

利用 JavaScript 三目运算

```javascript
const List = () => {
	return (
  	<div>
    {
    	isTrue ? <h1>渲染了</h1> : null
    }
    </div>
  )
}
```
小程序 条件渲染

```js
<h1 wx:if="isTrue">你看见了吗</h1>
<h1 wx:elif="isShow">我看见了</h1>
<h1 wx:else>我看见了</h1>
```

## 事件处理
vue 事件绑定

事件处理方法 在methods上定义

```js
<button @click="handleClick">btn</button>

methods: {
  handleClick() {
		console.log('按钮绑定')
	}
}
```
react 事件

通过 bind 改变 this 的指向

```javascript
// 继承
class App extends React.Component {
  handleClick(e) {
  	console.log(e) // 事件
  }
	render() {
  	return <button onClick={this.handleClick.bind(this, '事件')}></button>
  }
}
// Hooks
const React, { useState } from 'react'
const Hook = (props) => {
  const [value, setVale] = useState('state')
	return (
  	<button onClick={e => {
    	setValue('改变State')
    }}></button>
  )
}
```
小程序
```js
<view bind:tap="handleClick"></view>
// 方法定义在对象中
Page({
	handleClick(e) {
		console.log(e) // 元素的属性
	}
})
```

## 表单处理
vue 表单处理

 v-model 指令在表单元素上创建双向数据绑定，同时可以在元素上绑定对应的事件

```js
<input v-model="msg" @change="onChange">

...
data() {
	return {
		msg: ''
	}
},
methods: {
	onChange() {
		console.log(this.msg) // 输入对应的input value
	}
}
```

react 表单处理

```javascript
class Page extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
          name: ''
        }
    }
    handleChange(event) {
      this.setState({
        name: event.target.value // 通过表单元素中的 event 属性访问
      })
    }
    render() {
        return (
          <div>
            <input value={this.state.name} onChange={this.handleChange.bind(this)}></input>
          </div>
        );
    }
}
```

小程序 表单处理

小程序 拥有自己的表单组件

```js
<input value="{{ msg }}" bind:change="onChange" />

Page({
	data: {
		msg: ''
	},
	onChange(event) {
    const { detail: { value } } = event
    this.setData({
      msg: value
    })
	}
})
```

## 自定义组件
vue 组件

通常说的 vue 组件

- .vue 文件就是一个组件
- 通过 Vue.component() 挂载的组件
- 组件通过 props 通信
- 组件通过 $emit 通知父组件

详细的组件方法可以查考[官网](https://cn.vuejs.org/v2/guide/components-registration.html)

```js
Vue.component('Item', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```

react 组件

react 中每个函数都可以成为一个组件

- 通信都是通过 props 

```javascript
const Item = props => {
	return <h3>{ props.title }</h3>
}
```

小程序 组件

小程序需要通过 [Component](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html) 构造器来定义组件

```javascript
Component({
  behaviors: [],
  properties: {
    myProperty: { // 属性名
      type: String,
      value: ''
    },
    myProperty2: String // 简化的定义方式
  },
  data: {},
  methods: {}
})
```

## 生命周期

|                   Vue                   |                          React                          |                          小程序                           |
| :-------------------------------------: | :-----------------------------------------------------: | :-------------------------------------------------------: |
|       beforeCreate（初始化之前）        |  componentWillMount<br />（组件即将被渲染到页面之前）   |                 onLoad（页面开始创建时）                  |
|          created（完成初始化）          |                                                         |                                                           |
|        beforeMount（挂在$el前）         |                                                         |                                                           |
|          mounted（挂在dom后）           | componentDidMount<br />（组件已被渲染;可以操作dom元素） | onShow（页面出现在前台）<br />onReady（页面首次渲染完成） |
| beforeUpdate（更新已完成，但未更新dom） |      componentWillUpdate<br />（组件被更新前触发）      |                                                           |
|        updated（dom元素已更新）         | componentDidUpdate<br />（更新完后触发;产生新dom元素）  |                                                           |
| beforeDestory<br />（组件被销毁前触发） |   componentWillUnmount<br />（组件被销毁完毕后触发）    |                onHide（页面从前台到后台）                 |
| destoryed<br />（组件被销毁完毕后触发） |                                                         |                  onUnload（页面销毁时）                   |

## 路由

- vue 路由管理 [Vue Router](https://router.vuejs.org/zh/)，具体用法[参考](https://github.com/one-pupil/vue-template/blob/master/src/router/index.js)
- React 路由 [react-router](https://reacttraining.com/react-router/web/guides/philosophy)，但是它由衍生出了 react-router-dom 和 react-router-native 两个路由管理库，具体用法[参考](https://github.com/one-pupil/study/blob/master/react-demo/react-test/src/App.js)
- 小程序拥有自己的[路由管理](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html)

```javascript
wx.switchTab // 只能跳转到tab页面，并关闭其他所有非 tabBar 页面
wx.reLaunch // 关闭所有页面，打开到应用内的某个页面
wx.redirectTo // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
wx.navigateTo // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
wx.navigateBack // 关闭当前页面，返回上一页面或多级页面
```

## 状态管理
vue 状态管理 [Vuex](https://vuex.vuejs.org/zh/)

```javascript
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    num: 0
  },
  mutations: {
    increment (state) {
      state.num++
    }
  }
})

store.commit('increment')

console.log(store.state.num) // 1
```

React 状态管理

React 中的状态管理工具有 [Redux](https://www.redux.org.cn/)，Mobx 等，这里用 react-redux 来示范；文中代码具体可见 [react-test](https://github.com/one-pupil/study/blob/master/react-demo/react-test/src/store/index.js)

- 创建 action

```javascript
export const insert = (id) => ({
  type: 'INSERT',
  payload: {
    id
  }
})
```

- 创建 reducers

```javascript
const initState = [
  {
    id: 1,
    title: "西游记",
    author: "吴承恩",
    star: 55
  }
]

export default (state = initState, action) => {
  switch (action.type) {
    case 'INSERT':
      return state.map(v => {
        if (v.id === action.payload.id) {
          v.star++
        }
        return v
      });
    default:
      return state;
  }
}
```

创建 store

```javascript
import { createStore } from 'redux'
import rootReducer from './reducers'

export default createStore(rootReducer)
```

- 视图更新

```javascript
// views/Redux.js
import React, { useState } from 'react'
import { insert } from './../store/actions/books'

const ReduxPage = props => {
    const state = props.getState().books
    const [books, setBooks] = useState(state)
    const add = (id) => {
        props.dispatch(insert(id))
        setBooks(props.getState().books)
    }
    return (
      <div>
        ...
					<button onClick={add.bind(this, book.id)}>+</button>
      	...
      </div>
    );
};

export default ReduxPage
```

小程序状态管理

小程序能使用 App 挂在全局对象来做状态管理，以及可以使用小程序自有的 [Storage](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) 本地客服端缓存来对全局的状态进行管理