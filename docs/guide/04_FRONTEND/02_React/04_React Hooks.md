# React Hooks

**Hook 是什么？**<br />Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。**Hook 只能再 Function Component 里面声明。**

### useState
返回一个状态和一个可以修改状态的函数 `setter`
```javascript
import React, { useState } from 'react';
import { Button } from "antd-mobile";

function User() {
  const [user, setUser] = useState('Mondo')
  return (
    <div>
      <div>{user}</div>
      <Button type="primary" onClick={e => setUser('imondo.cn')}>改变 State</Button>
    </div>
  )
}
```

### useEffect

替代 **Class Component** 中 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount` 等部分生命周期<br />

```javascript
import React, { useState, useEffect } from 'react';

function User() {
  const [user, setUser] = useState('Mondo')
  useEffect(() => {
    setTimeout(() => {
      setUser("js.imondo.cn")
    }, 2000)
  }, [user]) // 仅在 user 更改时更新
  return (
    <div>
      <div>{user}</div>
      <Button type="primary" onClick={e => setUser('imondo.cn')}>改变 State</Button>
    </div>
  )
}
```

### useContext

接收一个 context 对象并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染。<br />
<br />可用于**组件间值传递**
```javascript
import React, { useContext } from 'react';
const theme = {
  color: "red"
}
const UserContext = React.createContext(theme);
function User() {
  ...
  return (
    <UserContext.Provider value={theme}>
      <Child/>
    </UserContext.Provider>
  )
}
function Child() {
  const theme = useContext(UserContext);
  return (
    <div style={{color: theme.color}}>context</div>
  )
}
```

### useMemo

<br />使用格式：`useMemo(() => fn, deps)`<br />
<br />把“创建”函数和依赖项数组作为参数传入 `useMemo`，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。**可以当作 vue 中的计算属性**

```javascript
import React, { useState, useMemo } from 'react';
import { Button  } from "antd-mobile";

function User() {
  const [user, setUser] = useState(1)
  /* 缓存计算属性 */
  const data = useMemo(() => ({
    users: (user + 1)
  }), [user]);
	 const onChangeUser = (e) => {
    setUser(+e.target.value);
  }
  return (
    <UserContext.Provider>
      <input value={user} onChange={onChangeUser}/>
      <div>{data.users}</div>
      <Button type="primary" onClick={e => setUser(user + 1)}>改变 State</Button>
    </UserContext.Provider>
  )
}
```

### useReducer

使用格式：`const [state, dispatch] = useReducer(reducer, initialArg, init)`<br />
<br />它是 useState 的替代方案，在一些场景使用：

- state 逻辑较复杂且包含多个子值
- 下一个 state 依赖于之前的 state 



最重要的其实它的写法和 **redux **差不多

```javascript
import React, { useReducer } from "react";
import { Button  } from "antd-mobile";
let initCount = 0;
function reducer(state = initCount, action) {
  switch (action) {
    case "increment":
      state++
      return state
    case "decrement":
      state--
      return state      
    default:
      throw new Error();
  }
}
function User() {
  const [count, disaptch] = useReducer(reducer, initCount)
  return (
    <UserContext.Provider value={theme}>
      <div>useReducer</div>
      <div>计数器{count}</div>
      <Button type="primary" onClick={e => disaptch("decrement")}>减</Button>
      <Button type="primary" onClick={e => disaptch("increment")}>加</Button>
    </UserContext.Provider>
  )
}
```

### useRef

返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数<br />如果想要**访问子组件内的 ref 对象，子组件需要用 class 声明组件**。
```javascript
import React, { useState, useMemo, useRef } from 'react';

function Parent() {
  let [count, setCount] = useState(0)
  const childRef = useRef(null)
  const childClick = (val) => {
    childRef.current.setState({
      num: 2
    });
  }
  return (
    <div>
      <h4>组件传值</h4>
      <button onClick={childClick}>向子组件传值</button>
      <Child1 ref={childRef} />
    </div>
  );
}

class Child1 extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      num: 1
    }
  }
  render() {
    const { num } = this.state;
    return (
      <div>
        <div>ref 组件</div>
        <div>{num}</div>
      </div>
    )
  }
}
```
