React只是简单地渲染组件，单独从两个地方获取数据：props 和 state。

## 创建组件

```
import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <div className="main">
        Main
      </div>
    );
  }
}

export default Main;

```

## 路由配置

`Link`只配置路由，`NavLink`可做导航路由，可配置`activeClassName`和`activeStyle`。

```
import { NavLink, Link } from 'react-router-dom';

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