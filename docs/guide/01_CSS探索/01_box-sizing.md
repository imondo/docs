# box-sizing

我们都知道`CSS`盒模型分为**IE盒模型**和**W3C标准盒模型**，它们的计算方式和一个`CSS`属性有关`box-sizing`。

[![1hYvH1.gif](https://s2.ax1x.com/2020/02/09/1hYvH1.gif)](https://imgchr.com/i/1hYvH1)

### box-sizing属性值

> content-box | border-box 默认值：content-box

### content-box

当我们对元素设置`content-box`

```css
.demo1 {
  box-sizing: content-box;
  width: 200px;
  height: 200px;
  padding: 20px;
  margin: 10px;
  border: 5px solid #333;
}
```

在浏览器具体表现为
[![1hYXu9.png](https://s2.ax1x.com/2020/02/09/1hYXu9.png)](https://imgchr.com/i/1hYXu9)

### border-box

当我们设置成`border-box`

```css
.demo2 {
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  padding: 20px;
  margin: 10px;
  border: 5px solid #ccc;
}
```

在浏览器具体表现为
[![1hYjBR.png](https://s2.ax1x.com/2020/02/09/1hYjBR.png)](https://imgchr.com/i/1hYjBR)

### 元素宽高计算

当我们去掉元素的宽高度时

[![1htDKJ.gif](https://s2.ax1x.com/2020/02/09/1htDKJ.gif)](https://imgchr.com/i/1htDKJ)

去掉元素的内外边距时

[![1htw2F.gif](https://s2.ax1x.com/2020/02/09/1htw2F.gif)](https://imgchr.com/i/1htw2F)

当我们去掉元素`padding`，`border`时可以看出元素的宽高度是在变化的，而去掉`margin`值时，元素的宽高没有变化。

所以我们的元素的宽高度值计算只和`padding`，`border`，元素的`content`有关

```
width = padding + border + content
height = padding + border + content
```
具体[demo](https://codepen.io/imondo/pen/VqZdOm)请查看

### 总结

* `content-box`在宽度和高度之外绘制元素的内边距和边框

* `border-box`在宽度和高度之内绘制元素的内边距和边框

* 元素的宽高和`margin`无关，与`padding`，`border`，元素的`content`有关