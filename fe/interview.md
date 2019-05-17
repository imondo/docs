# HTML

* HTML整体执行

1. 加载整体HTML文件

2. 至上而下解析html

3. 解析html建立dom树，遇到诸如`<script>`、`<link>`等标签时，就会去下载相应内容，并解析、执行。如果是`<link>`标签，解析css构建CSSOM树

4. DOM和CSSOM结合生成render树

5. 布局render树（Layout/reflow），负责各元素尺寸、位置的计算

6. 绘制render树（paint），绘制页面像素信息

7. 浏览器会将各层的信息发送给GPU，GPU会将各层合成（composite），显示在屏幕上。


* 缓存机制

# CSS

* BFC

块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

* CSS优先级

<img src="_img/editor/css.png">

* 盒子模型

<img src="_img/editor/box-model.png">

* box-sizing

有两个重要的属性：`border-box`，`content-box`；默认值`content-box`。

`content-box`: 在宽度和高度之外绘制元素的内边距和边框；
`border-box`: 在宽度和高度之内绘制元素的内边距和边框；

```
// W = content + 10 * 2 + 5 * 2  H = 10 * 2 + 5 * 2
div {
  // width: 200px;
  padding: 10px;
  border: 5px solid gray;
  margin: 10px;
  // height: 100px;
  box-sizing: border-box;
}

// 200 × 100 
div {
  width: 200px;
  padding: 10px;
  border: 5px solid gray;
  margin: 10px;
  height: 100px;
  box-sizing: border-box;
}
// W = 200 + 5 * 2 + 10 * 2  H = 100 + 5 * 2 + 10 * 2
div {
  width: 200px;
  padding: 10px;
  border: 5px solid gray;
  margin: 10px;
  height: 100px;
  box-sizing: content-box;
}
```

* css选择器

* flex布局

* 三等份布局

* 居中布局

* 预编译Less，Scss

* Block

`div`默认撑满整个body

`float` 脱离文档流，内容占据宽度

`relative` 相对定位的元素并未脱离文档流，而绝对定位`absolute`的元素则脱离了文档流。在布置文档流中其它元素时。
`absolute`元素不占据空间。`absolute`元素相对于最近的非 static 祖先元素定位。当这样的祖先元素不存在时，则相对于ICB（inital container block, 初始包含块）。

```
<div class="box">
  <div style="float: left">浮动</div>
  <div>内容</div>
</div>
```


# JS

* 原生Js的DOM操作

* JQ的DOM操作

* 数组的操作

1. 增 push, unshift, splice, concat
2. 删 pop, shift, splice
3. 改 splice, 下标, map, reduce
4. 查 indexOf(e, formIndex), lastIndexOf, includes, find, findIndex, some, every, filter

* JS的数据类型

基本类型：String, Number, Boolean, Null, Undefined
引用类型：Object

```
typeof 1; // number 有效
typeof ‘ ’;// string 有效
typeof true; // boolean 有效
typeof undefined; // undefined 有效
typeof null; // object 无效
typeof new Function(); // function 有效
typeof [] ; // object 无效
typeof new Date(); // object 无效
typeof new RegExp(); // object 无效

```

`instanceof`运算符只能用于对象，不适用原始类型的值。

```
'hello' instanceof String // false
null instanceof Object // false
undefined instanceof Object // false

```

* ES6的变量声明

* Null和Undefind区别

`null` 对象的引用 没有这个对象
`undefind` 声明变量，未赋值

* Promise的使用

```
const p = Promise.all([p1,p2,p3]);

```
p 的状态由 p1、p2、p3 决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成`fulfilled`，p的状态才会变成`fulfilled`，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
（2）只要p1、p2、p3之中有一个被`rejected`，p的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给p的回调函数。

```
const p = Promise.race([p1,p2,p3]);
```
只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的返回值。

[怎么实现](https://juejin.im/post/5c179aad5188256d9832fb61)

* 对象的深浅复制

复杂的数据类型即是引用类型，它的值是对象，保存在堆内存中，包含引用类型值的变量实际上包含的不是对象本身，而是一个指向该对象的指针。从一个变量向另一个变量复制引用类型的值，复制的其实是指针地址而已，因此两个变量最终都指向同一个对象

浅复制优先考虑`Object.assign`函数;
深复制优先考虑`lodash`中的`_.cloneDeep()`方法;
简单的深复制并符合`JSON`格式可以考虑`JSON.parse(JSON.stringify(obj))`。

* Ajax的重复请求解决方案

* 对象的遍历

for ... in, $.each

* 对象的属性值判断

```
const foo = {goo: undefined};
foo.hasOwnProperty('go'); // false
foo.hasOwnProperty('go'); // true
```

* JS的浮点数计算

# Vue

* 项目的搭建

* 常用指令的使用

* v-for为什么指定key

DOM树的复用，更新
使用v-for更新已渲染的元素列表时,默认用就地复用策略;列表数据修改的时候,他会根据key值去判断某个值是否修改,如果修改,则重新渲染这一项,否则复用之前的元素; 

* 生命周期

created, mounted

* vue-router

* 路由页面的传值问题

* 路由query与params的区别

* 路由模式mode

* 怎么处理hash mode出现404

* 私有样式的处理

* nextTick的作用

* 怎么操作DOM（ref）

* 组件的传值

props/$emit/$on, Bus, $attrs/$listeners, provide/inject, $parent/$children, ref 

* store的作用和属性

* 数据响应

```
Object.defineProperty

get set
```

# HTTP

* 常用请求方法

* GET与POST的区别

`GET`，`POST`，`PUT`，`DELETE`

`GET` 字节大小，可见，请求的 URL 中
`POST` 大小无限制，消息主体中发送的

* 服务器请求代理

# 项目

* 大量数据的处理

* 行业的看法
