# React 状态管理

> 由于应用需要管理更多的状态，如何让状态更清晰，可预测，是我们在项目中需要考虑的，由此 `React` 引入了 `Redux`。[源码study](https://github.com/imondo/study/tree/master/react-demo/react-test)


## Redux

### 三大原则

- 单一数据源
- State 是只读的
- 使用纯函数来执行修改

### 基础

#### 数据流

**严格的单向数据流**是 Redux 架构的设计核心，所有数据的生命周期都有**4**个步骤

- 调用 `store.dispatch(action)` ；action 是描述事件发生情况的对象
- Redux store 调用传入的 reducer 函数，当前 `reducer` 传入 `state` 和 `action` 两个参数
  - reducer 应该是个纯函数，完全可预测
  - API 调用或路由跳转，应该在  disaptch action 前
- 根 reducer 应该合并多个子 reducer 形成一个单一的 state 树
  - 使用 `combineReducers()` 函数合并
- Redux store 保存了根 reducer 返回完整的树
  - 手动更新订阅 `store.subscribe(listener)`
  - `store.getState()` 获取当前最新 state

#### Action

Action 是数据从应用传到 store 的有效载荷

- store 数据唯一的来源
- 通过调用 `store.dispatch()` 将 action 传到 store

#### Reducer

指定应用状态的变化如何响应 `actions` 并发送到 store

- 是一个纯函数
- 接受旧的 `state`和 `action`，返回新的 state
- 只描述**有事情发生**，并不描述应用如何更新 state

#### Store

一个维持所有 state 树的对象，改变 store 中 state 唯一的方法是对它 **dispatch 一个 action**

- **Redux 应用只有一个单一的 store**，需要拆分数据处理逻辑时，使用 **reducer 组合**
- getState 获取 state
- dispatch(action) 更新 state
- subscribe(Function) 变化监听器

### 简单的示例

- 创建 book 模块 reducer

```javascript
import actionTypes from "./../actions/actionTypes";
const initState = [] // 初始状态
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INSERT:
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

- 合并所有子 reducer 模块

```javascript
// store/recuders/index.js
import { combineReducers } from 'redux'
import books from './books'

// 合并redux
export default combineReducers({
  books
})
```

- 创建 store

```javascript
// store/index.js
import { createStore } from 'redux'
import rootReducer from './reducers'

export default createStore(rootReducer)
```

- 创建描述 action

```javascript
// actionTypes.js
export default {
  INSERT: 'INSERT'
}

// action/books.js
import actionTypes from "./actionTypes";
// 优先使用函数
export const insert = (id) => ({
  type: actionTypes.INSERT,
  payload: {
    id
  }
})
```

- 更新视图

```javascript
// views/Redux.js
import React, { useState } from 'react'
import { insert } from './../store/actions/books'

/**
 * 触发一个action，所有的redux都会收到
 */

const ReduxPage = props => {
    console.log(props)
    const state = props.getState().books
    const [books, setBooks] = useState(state)
    const add = (id) => {
        props.dispatch(insert(id))
        setBooks(props.getState().books)
    }
    return (
      <div>
        <table border="1" cellSpacing="0">
          ...
          <tbody>
            {books.map(book => {
              return (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    {book.star}
                    <button onClick={add.bind(this, book.id)}>+</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
};

export default ReduxPage
```

## react-redux

Redux 和 React 之间没有关系。Redux 支持 React、Angular、Ember、jQuery 甚至纯 JavaScript。`react-redux` 则是搭配 react 状态管理利器。

### Provider 
通过 `<Provider>`高阶组件来让所有容器组件都可以访问 store，而不必显示地传递它。只需要在渲染根组件时使用即可
```javascript
import { Provider } from 'react-redux'

import App from './App'
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route render={() => <App /> }/>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
```

### connect
通过 connect()() 方法来链接组件，这个方法做了性能优化来避免很多不必要的重复渲染

- 可以使用 mapStateToProps 重新定义数据挂在到当前组件 props 上
- 可以使用 mapDispatchToProps 重新定义方法注入到当前组件 props 上

```javascript
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { insert } from './../store/actions/books'

const ReduxPage = props => {
    console.log(props)
    const [books] = useState(props.books)
     return (
      <div>
        <table border="1" cellSpacing="0">
          ...
          <tbody>
            {books.map(book => {
              return (
                <tr key={book.id}>
                  ...
                  <td>
                    {book.star}
                    <button onClick={props.add.bind(this, book.id)}>+</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
}

// 重新定义数据挂在到当前组件props上
const mapStateToProps = state => {
  console.log(state)
  return {
    books: state.books
  }
}

// 重新定义方法注入到当前组件props上 
const mapDispatchToProps = dispatch => {
  return {
    add: id => dispatch(insert(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage)
```