# 前端常见下载处理方案 

下载是我们项目中常常会遇到的需求，不同的下载方案能呈现不同的效果，近期归纳下作者系统中用到常见几种下载处理方案

### a标签下载

```
<a href="test.xlsx" download="test.txt">下载</a>
```

这种是我们常见的下载静态文件的处理方式，这种适用于项目文件是**静态**的以及**存放地点不变动**的。`download`属性还可以对文件命名处理

### Form表单下载

```
<form method="get" target="name" action="test.com">
    <input type="hidden" name="token" value="token">
    <input type="hidden" name="url" value="/api/download">
</form>
```
表单的下载可以做特殊的`传值`处理，也可以传入更多的参数；请求方式也多种多样。

### Blob流下载

用上面方式下载处理，当用户点击下载时，前端不能够很好的捕捉到请求的状态，而用`Blob`我们可以更灵活的来处理不同状态。

> Blob 对象表示一个不可变、原始数据的类文件对象。

简单的示例：

```
const blob = response;
const reader = new FileReader();
reader.readAsDataURL(blob); // 转换为base64，可以直接放入a表情href
const disposition = decodeURI(xhr.getResponseHeader('Content-Disposition')); // 文件名处理
const dispositionArray = disposition.split('filename=');
const name = dispositionArray[dispositionArray.length - 1];
reader.onload = function(e) {
  // 转换完成，创建一个a标签用于下载
  const a = document.createElement('a');
  a.download = name;
  a.href = e.target.result;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
  }, 100);
};
```

通过后台返回的数据来判断是否显示错误提示，也可以根据接口不同状态值来显示。

```
const reader = new FileReader();
reader.onload = e => {
  if (e.target.result.includes('"data":""')) {
    const result = JSON.parse(e.target.result);
    console.log(result.msg);
  }
};
reader.readAsText(response); // 读取指定的Blob中的内容，result属性中将包含一个字符串以表示所读取的文件内容。
```

### 总结

以上的三种处理方案是我们常见的前端下载简单汇总，方案不同，效果不同，不过还是推荐`Blob`方式下载，这种处理方式，可以更加灵活的捕捉到不同状态，前端可以更加方便的处理。