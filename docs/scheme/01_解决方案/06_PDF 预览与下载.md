# PDF 预览与下载

## 插件下载

首先下载 PDF.js 插件包，下载地址：[官网](https://mozilla.github.io/pdf.js/getting_started/#download)
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d770454fc8204b7883f440638426e091~tplv-k3u1fbpfcp-zoom-1.image)
解压后出现两个文件目录
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e31ac8edb574183804e3ce5b2741a27~tplv-k3u1fbpfcp-zoom-1.image)
其中 `web` 文件目录里面的 `viewer.html` 就是需要访问的页面
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44fd0517161e47ae924b35dfcef83e01~tplv-k3u1fbpfcp-zoom-1.image)

## 使用

使用时，我们需要将两个目录都部署在自己的服务器中，或者项目里，保证 `viewer.html` 能够正常访问

```bash
https://imondo.cn/files/pdfjs/web/viewer.html
```

项目中访问 PDF 文件时，需要在 `viewer.html` 上添加需要访问的 pdf 文件路径

```bash
https://imondo.cn/files/pdfjs/web/viewer.html?file=/files/mmo.pdf
```

::: tip
**注意：** 这里的 pdf 文件路径需要和 `viewer.html` 同域同源
:::

如果两者存在**跨域现象可能需要修改源码**，具体可以查看下面文章所提供的方法：

[PDF 文件在线预览(pdf.js 使用教程)](https://segmentfault.com/a/1190000038639669)

## 电子签章

当一切做完后我们就可以实现PDF文件页面浏览但还会发现签章问题没有得到解决， 电子生成签章会不显示， 我们可以通过注释 `pdf.worker.js` 源码的方式来解决该问题
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/042eb7997d4841718d9705df56bc110b~tplv-k3u1fbpfcp-zoom-1.image)
一般情况下，注释掉了这三行代码，不显示的签名或者电子签章就该显示了。但是 注释了这三行代码，还是报错误，而且是 util.js 报的
所以第二种方法 我们在 `pdf.worker.js` 中找一下报错位置
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0878be9854144f6387deaa365f675999~tplv-k3u1fbpfcp-zoom-1.image)
与控制台报错警告很像吧，求证后就是他接下来就阻断他 `Perfect`
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cba69e0648ff4ea6840bff8c3f70b2e4~tplv-k3u1fbpfcp-zoom-1.image)

## vue-pdf 查看 pdf 文件

### 引入依赖

```shell
npm install vue-pdf -S
```

需要指定 `pdfjs-dist` 版本

```shell
npm install pdfjs-dist@2.7 -S
```

### 使用

封装 `ViewPDF` 组件

```vue
<template>
  <div>
    <pdf v-for="i in numPages" :key="i" :src="url" :page="i"></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'ViewPDF',
  components: {
    pdf
  },
  props: {
    pdf: String
  },
  data () {
    return {
      numPages: 1,
      url: ''
    }
  },
  watch: {
    pdf (val) {
      this.$nextTick(() => {
        if (val) {
          this.getNumPages(val)
        }
      })
    }
  },
  methods: {
    getNumPages (url) {
      const _url = this.formatUrl(url)
      const loadingTask = pdf.createLoadingTask(_url)
      loadingTask.promise
        .then(pdf => {
          this.url = loadingTask
          this.numPages = pdf.numPages
        })
        .catch(err => {
          console.error('pdf加载失败', err)
        })
    },
    formatUrl (url) {
      const _url = url.match(/\/res\/app\/market\/(\w.+)/)
      return _url[0] ? `/pdf${_url[0]}` : ''
    }
  }
}
</script>

<style lang="less" scoped></style>

```

测试地址：[https://imondo.cn/files/pdfjs/web/viewer.html?file=/files/mmo.pdf](https://imondo.cn/files/pdfjs/web/viewer.html?file=/files/mmo.pdf)

> 积硅步，至千里。
> 
> 公众号[码不停指](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/855e466bedfd48be83a87be744dfec21~tplv-k3u1fbpfcp-watermark.image)，欢迎关注。
