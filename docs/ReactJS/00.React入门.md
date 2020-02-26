# React 入门

## 什么是虚拟DOM

用**JS对象**的形式，来表示 DOM 和 DOM 之间的嵌套关系

## 项目构建

* `package.json` 文件基本依赖

  ```js
  {
    "dependencies": {
      "react": "^16.12.0",
      "react-dom": "^16.12.0"
    },
    "devDependencies": {
      "@babel/core": "^7.8.4",
      "@babel/plugin-proposal-class-properties": "^7.8.3",
      "@babel/plugin-transform-runtime": "^7.8.3",
      "@babel/preset-env": "^7.8.4",
      "@babel/preset-react": "^7.8.3",
      "@babel/runtime": "^7.8.4",
      "babel-loader": "^8.0.6",
      "webpack": "^4.41.6",
      "webpack-cli": "^3.3.11",
      "webpack-dev-server": "^3.10.3"
    }
  }  
  ```

* `babel.config.js ` 配置

  ```js
  module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-class-properties"
    ]
  };
  ```

  

* `webpack.config.js` 基础

  ```js
  const path = require('path')
  
  module.exports = {
    mode: "none",
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "./dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude: /node_modules/
        }
      ]
    },
    devServer: {
      contentBase: "./dist",
      hot: true,
      open: true
    }
  };
  ```

## Hello World

```js
import React from 'react'
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
```

## 组件

* 组件可以是一个函数

  ```js
  import React from "react" // 必须引入react
  
  const List = (props) => {
    return (
      <h2>这是标题</h2>
    )
  }
  
  export default List;
  ```

  

* 可以是继承 `React.Component` 的类

  ```js
  import React, { Component } from 'react'
  
  class ListC extends Component {
    render() {
      return (
        <h2>这是conponent标题</h2>
      )
    }
  }
  
  export default ListC
  ```

## State

组件内的数据定义在 `state` 上，如果需要改变 `state` 数据时，需要通过 **setState** 函数来改变

```js
// setState 函数参数
void setState (
    function|object nextState,
    [function callback]
)
```

`setState` 函数是个异步函数，修改后的 `state`  可以在它的回调函数中访问。

```js
// ListC.js
constructor() {
  super(...arguments)
  this.state = {
    h1: "这是conponent标题"
  };
}

handleClick() {
  this.setState({
    h1: '修改的state'
  }, () => {
    console.log(this.state.h1) // 修改的state
  })
  console.log(this.state.h1) // 这是conponent标题
}
// 或者
handleClick() {
  this.setState(
    (prevState, props) => { // 修改前回调
      console.log(prevState, props); // 可以访问修改前state和props
      return {
        h1: "修改的state"
      }
    },
    () => {
      console.log(this.state.h1);
    }
  );
  console.log(this.state.h1)
}
```

## Props

父组件与子组件通信

* 通过在 `props`传入消息给子组件

  ```js
  // List.js
  const List = (props) => {
    return (
      <h2>{ props.name }</h2>
    )
  }
  // index.js
  render() {
    return (
      <div>
        <List name="这是函数组件" />
      </div>
    );
  }
  ```

* 通过子组件 `props` 挂载函数通信

  ```js
  // ListC.js
  handleClick() {
    console.log(this)
    this.props.myClick('这是子组件的消息') // 挂载在子组件上的事件
  }
  // index.js
  myClick(val) { // 可以通过子组件上函数访问子组件中的内容
    console.log(`父组件：` + val);
  }
  
  render() {
    return (
      <div>
        <ListC myClick={this.myClick.bind(this)} />
      </div>
    );
  }
  ```

## 生命周期

### componentWillMount 

* 组件即将被渲染到页面之前
* 这个时期可以开启定时器，发送请求等操作

### componentDidMount

* 组件已被渲染，此时可以访问 **DOM** 元素，进行相关的 DOM 操作

### componentWillUpdate

* 组件被更新前触发

### componentDidUpdate

* 组件被更新完后触发
* 页面产生新的 DOM 元素

### componentWillUnmount

* 组件被销毁时触发

```js
// ListC.js
import React, { Component } from 'react'
import Item from './Item'

class ListC extends Component {
  constructor() {
    super(...arguments);
  }
  
  // 生命周期
  componentWillMount() {
    console.log(`willMount`);
  }

  componentDidMount() {
    console.log(`didMount`);
  }

  componentWillUpdate() {
    console.log(`willUpdate`);
  }

  componentDidUpdate() {
    console.log(`didUpdate`);
  }

  componentWillUnmount() {
    console.log(`unmount`);
  }

  handleClick() {
    this.setState(
      (prevState, props) => {
        console.log(prevState, props);
        return {
          h1: "修改的state"
        };
      },
      () => {
        console.log(this.state.h1);
      }
    );
    console.log(this.state.h1);
  }

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick.bind(this)}>{this.state.h1}</h2>
        <Item/>
      </div>
    );
  }
}

// Item.js
import React, { Component } from "react";

class Item extends Component {
  constructor() {
    super(...arguments);
  }

  // 生命周期
  componentWillMount() {
    console.log(`这是item willMount`);
  }


  componentDidMount() {
    console.log(`这是item didMount`);
  }

  componentWillUpdate() {
    console.log(`这是item willUpdate`);
  }

  componentDidUpdate() {
    console.log(`这是item didUpdate`);
  }

  componentWillUnmount() {
    console.log(`unmount`);
  }

  render() {
    return <h3>这是item</h3>;
  }
}

export default Item;

```

初始化组件依次打印

```js
// willMount
// 这是item willMount
// 这是item didMount
// didMount
```

组件更新时打印

```js
// willUpdate
// 这是item willUpdate
// 这是item didUpdate
// didUpdate
```

>  先触发父组件 `wiiMount` 后**先渲染完子组件，才渲染父组件**

## 事件处理

* 直接在DOM元素上写小驼峰事件名称
* 注意使用**bind**来改变 `this` 的指定

```js
// ListC.js
handleClick() {
  console.log(`事件处理`);
}

render() {
  return (
    <div>
      <h2 onClick={this.handleClick.bind(this)}>{this.state.h1}</h2>
      <Item/>
    </div>
  );
}
```

怎么向事件传值

```js
<h2 onClick={this.handleClick.bind(this, '传值')}>{this.state.h1}</h2>
<h2 onClick={e => this.handleClick("呵呵")}></h2>
```

## 渲染

### 条件渲染

可以像 JavaScript 一样来做**条件渲染**或者**三目运算**

```js
const ItemShow = (props) => {
  if (props.isShow) {
    return <p>这是条件渲染</p>
  }
  return null
}
```

### 列表渲染

使用`map`函数渲染

```js
render() {
  return (
    <h3>
      这是Item{" "}
      {
        [1, 2, 3].map(item => {
          return <ItemShow key={item} isShow={true} value={item} />;
        })
      }
    </h3>
  );
}
```

### 类 slot

```js
const List = (props) => {
  return (
    <h2>{ props.children }</h2> // 通过 props.children 来做占位符
  )
}
```

## Refs 操作 DOM

通过 `React.createRef` 来创建 ref

```js
class Test extends React.Component {
  constructor(props) {
      super(props);
      // 创建
      this.listC = React.createRef();
  }
  componentDidMount(){
  	// 获取
      console.log(this.listC);
  }
  render() {
  	 // 赋值
      return <ListC ref={this.listC}/>
  }
}
```

## 上下文Context
 
### React.createContext

- 创建一个 context 对象

```javascript
const MyContext = React.createContext(defaultValue);
```
### Context.Provider

- 每个 Context 对象都附带一个 Provider React 组件
- value 属性值可以传递其后代所有组件
- 当 value 属性发生变化，后代组件都将重新渲染

```javascript
<MyContext.Provider value={/* some value */}>
```
### Class.contextType

- 可以给 class 组件分配上 contextType 属性
- 使用 this.context 访问
- 在任何生命周期方法中引用

```javascript
import { AppContext } from './../store/common-context'

class Item extends Component {

  constructor() {
    super(...arguments);
    console.log(this.context)
  }
  ...
}

Item.contextType = AppContext

export default Item;

```