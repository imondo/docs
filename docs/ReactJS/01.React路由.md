# React  路由


> 路由的基础用法回顾，[源码study](https://github.com/one-pupil/study/tree/master/react-demo/react-test)


## 依赖

路由依赖于 `react-router` ，但是一般 pc 路由使用 `react-router-dom` ，它依赖于 `react-router`

```javascript
npm i react-router-dom -S
```

## 基本路由

- Link 组件渲染路径，形式 `a` 标签
- Route 组件渲染组件，匹配路由
- HashRouter 是 `hash` 路由，BrowserRouter 是 `history` 路由
- component 和 render 都可以渲染组件，component 优先级匹配高于 render；render 为一个函数，可以做逻辑渲染，给组件传递参数

```javascript
import { HashRouter, Route, Link } from 'react-router-dom'
class App extends Component {
  ...
  render() {
    return (
      <div>
        <Link to="/" >首页</Link>
        <Link to="/page">Page</Link>
   {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
        <Route path="/" exact component={Home}></Route>
        <Route path="/page" component={Page}></Route>
        <Route
          path={`/user/login`}
          render={routeProps => {
            return (
              <List name="这是render渲染" user="mondo" {...routeProps} />
            );
          }}
        ></Route>
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>, 
  document.getElementById('root')
)
```

- `Link` 只配置路由，`NavLink` 可做导航路由，可配置`activeClassName` 和 `activeStyle`

```javascript
import { NavLink as Link } from 'react-router-dom';

class Nav extends Component {
  render () {
    return (
      <ul className="nav">
        <li className="list"><NavLink to="/archive" activeClassName='active'>归档</NavLink></li>
        <li className="list"><NavLink to="/about" activeClassName='active'>关于</NavLink></li>
      </ul>
    );
  };
}

export default Nav;
```

## 嵌套路由

在想要嵌套的组件里再次配置路由

```javascript
// User.js
import React from 'react'
import { Route, Link } from 'react-router-dom'

const User = (props) => {
  	// match 可以读取上层路由
    const { match } = props
    return (
       <div>
            <Link to={`${match.path}/login`}>登录</Link>
            <Link to="/user/reg">注册</Link>
            <Route path={`${match.path}/login`}>login</Route>
            <Route path="/user/reg">reg</Route>
       </div>
    )
}

export default User

// App.js
<Route path="/user" component={User}></Route>
```

## 路由传值

- params 动态路由传参，通过组件内 `props.match.params` 访问

```javascript
// App.js
<Link to="/list/1/4">列表</Link>
{/* 必须使用 component 来指定组件，不然访问不到match */}
<Route path="/list/:id/:user" component={List}/>

// List.js
const List = (props) => {
  console.log(props.match.params) // { id: 1, user: 4 } 
  return (
    <h2>
      { props.name }{ props.children }
    </h2>
  )
}
```

- query 传值直接取 `?` 后面的值，但是 `router` 没提供相应的方法，需要自己写一个函数来提取参数
- **隐式传参**，使用 `to` 传递对象 state

## 编程式路由

利用 `props.history` 来跳转路由

```javascript
// List.js
const { history } = props

const goRoute = () => {
  if (history) {
    history..push('/user')
  }
}
// 可以使用对象传值
const goRoute = () => {
  if (history) {
    history..push({
        pathname: '/user',
        state: {
            id: 2
        }
    })
  }
}
```

## 重定向

重定向使用 `Switch` 组件

```javascript
// ErrorPage.js
import React from 'react'

class Error extends React.Component{
    render(){
        return(
            <h1>页面404</h1>
        )
    }
}
export default Error

// App.js
import ErrorPage from './components/ErrorPage'

class App extends React.Component {
  ...
  render() {
    ...
    {/* Switch表示如果匹配到了路由，就不再往下面匹配了，如果不写Switch，则一直会匹配到404页面 */}
    <Switch>
      {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
      <Route path="/home" exact>Home</Route>
      <Route path="/page" component={Page}></Route>
      <Route path="/user" component={User}></Route>
      {/* 必须使用 component 来指定组件，不然访问不到match */}
      <Route path="/list/:id/:user" component={List}></Route>
      <Redirect from="/" to="/home" exact></Redirect>
      {/* 没有写path表示匹配到所有的路径 */}
      <Route component={ErrorPage} />
    </Switch>
  }
}
```

## withRouter

由于只有 `Route` 包裹的组件才可以访问到 `props` 内部的路由信息，可以引入  `withRouter` 高阶组件来使内部组件也可以访问路由信息

```javascript
import React from 'react'

import { withRouter } from 'react-router-dom'


const GoBack = props => {
  console.log(props)
  const goBack = () => {
    props.history.go(-1)
  }
  return <button onClick={goBack}>返回</button>
}

export default withRouter(GoBack)
```
## 路由的代码分割
使用 `React.lazy` 来配置基于路由的代码分割

```javascript
import { lazy } from 'react'
export const Page = lazy(() => import('./Page'))
export const List = lazy(() => import('./List'))
export const ListC = lazy(() => import('./ListC'))
export const User = lazy(() => import('./User'))
export const Hooks = lazy(() => import('./Hooks'))

// index.js
import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import {
  HashRouter as Router,
  Route
} from "react-router-dom"
import { Provider } from 'react-redux'

import App from './App'
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route render={() => <App /> }/>
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById("root")
);
```