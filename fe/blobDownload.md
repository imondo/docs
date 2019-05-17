# Blob流下载

前端可以使用`Blob`来下载文件

具体代码如下

```
const blob = res.response;
const reader = new FileReader();
reader.readAsDataURL(blob); // 转换为base64，可以直接放入a表情href
const disposition = decodeURI(xhr.getResponseHeader('Content-Disposition'));
const dispositionArray = disposition.split('filename=');
const name = dispositionArray[dispositionArray.length - 1];
reader.onload = function(e) {
  // 转换完成，创建一个a标签用于下载
  const a = document.createElement('a');
  a.download = name;
  a.href = e.target.result;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
```

还可以通过后台返回的数据来判断错误提示

```
const reader = new FileReader();
reader.onload = e => {
  if (!e.target.result.includes('%PDF')) {
    const result = JSON.parse(e.target.result);
    Message({
      message: result.msg,
      type: 'warning'
    });
  }
};
reader.readAsText(res.response);
```

