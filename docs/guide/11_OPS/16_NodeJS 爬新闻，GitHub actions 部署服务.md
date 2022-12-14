# NodeJS 爬新闻，GitHub actions 部署服务

由于最近看本地新闻时，总是这个新闻网看到那个新闻网，感觉实在是麻烦，兴起想自己写个小爬虫来爬取一些新闻组合成自己的一个新闻列表。选取 Node 来实现。源码：[news-crawler](https://github.com/imondo/news-crawler) 效果：[news.imondo.cn](http://news.imondo.cn)<br />

<a name="wVVji"></a>
## 思路
爬取网页涉及到几个使用的插件库：

- [request](https://github.com/request/request) 一个 node 请求库
- [cheerio](https://github.com/cheeriojs/cheerio) 一个类似于 jQuery 的 DOM 解析库
- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) 由于 Node.js 只有 utf8 编码规则，那么如果处理 gbk 编码规则的文件就会出现乱码情况，所以使用其转码
- [node-schedule](https://github.com/node-schedule/node-schedule) Node 的定时任务处理
- [ejs](https://ejs.bootcss.com/) 一个模板引擎



程序实现的一个简单的流程

- 通过 request 获取网页信息
- cheerio 分析网页结构，获取新闻关键信息
- 写入 json 文件存取
- 通过 ejs 模板展示新闻列表



<a name="nJANf"></a>
## 获取数据


- 通过 request 来获取需要爬取的新闻页



```javascript
  getList(url) {
    return new Promise(resolve => {
      request.get({url, encoding : null}, function(err, res, body) {
        if (err) {
          console.log(err);
        }
        let html =  iconv.decode(body, 'gbk');
        let $ = cheerio.load(html, {decodeEntities: false});
        resolve($);
      });
    })
  }
```

- 分析页面机构获取关键信息
```javascript
  async get163List(ctx) {
    const newsList = [];
    const url = 'https://hunan.news.163.com/';
    const $ = await this.getList(url);
    // 热门新闻
    $('.news-feature').each(function(index, elem) {
      let $elem = $(elem);
      $elem.find('a').each(function(index, e) {
        const $e = $(e);
        const title = $e.text();
        const href = $e.attr('href');
        const hot = $e.parents('h5').length > 0;
        newsList.push({
          title,
          href,
          hot, 
          tag: '网易新闻'
        });
      })
    });
    return newsList;
  }
```
<a name="7eUr2"></a>
## 写入数据文件
通过 node 的 fs 模块来写入我们获取得到的新闻关键信息，我选择已每天日期来命名写入的文件<br />

```javascript
fs.writeFile( path.resolve(__dirname, `../database/${dir}.json`), JSON.stringify({
  data
}), function (err) {
  console.log(err);
  if (err) throw err;
  console.log('写入完成');
});
```
<a name="qKlJR"></a>
## 模板渲染
程序使用 ejs 来渲染，由于程序主要是使用 koa 来搭建，所以需要用到 `koa-static` ，`koa-views` 中间件。<br />
<br />先读取 json 数据文件
```javascript
fs.readFile(path.join( __dirname,  `../database/${date}.json`), (err, data) => {
  if (err) {
    reject(null);
  } else {
    resolve(JSON.parse(data.toString()).data);
  }
})
```

<br />通过读取的数据渲染
```javascript
const static = require('koa-static');
const views = require('koa-views');

// 静态文件
app.use(static(
  path.join( __dirname,  './static')
));

// 加载模板引擎
app.use(views(
  path.join(__dirname, './views'), {
    extension: 'ejs'
  }
));

app.use(async ctx => {
  let list = await crawler.getNews();
  await ctx.render('index', {
    list,
    time: utils.getNowDate()
  })
});
```
这时小爬虫其实已经写完了，但是由于新闻是有时效性的，我们需要做个定时任务，来时时爬取新闻<br />

<a name="DOTLQ"></a>
## 定时任务
node-schedule 的基本用法可参考[文档](https://github.com/node-schedule/node-schedule)，程序采用的是每隔 4 小时爬取一次<br />

```javascript
const schedule = require('node-schedule');
const config = require('./../config');

const rule = new schedule.RecurrenceRule();

rule.hour = config.timeJob;
rule.minute = 0;

/* 定时任务 */
function timeJob (cb) {
  schedule.scheduleJob(rule, function () {
      console.log('定时任务执行一次');
      cb && cb();
  });
}
```
<a name="tLyXW"></a>
## GitHub actions 部署
程序采用的是 github action 自动部署到自己的服务器。部署私服，首先需要解决登录服务器校验的问题，要么输入密码，要么使用 ssh 密钥登录，这里程序使用的是第二种

<a name="sYXnT"></a>
### SSH 私钥连接


- 登录自己的服务器，生成私钥
```javascript
$ mkdir -p ~/.ssh && cd ~/.ssh
$ ssh-keygen -t rsa -f mysite
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```
一路回车，会在 `~/.ssh` 下生成两个文件：`mysite`（私钥）和`mysite.pub`（公钥）。其中私钥是你的个人登录凭证，**不要分享给他人**。公钥则需要放到登录的目标服务器上。

- 将公钥 `mysite.pub` 的内容贴到目标服务器的 `~/.ssh/authorized_keys` 中
- 确保服务器 `~/.ssh` 文件夹的权限低于 711，我这里直接用 600（仅本用户可读写）
```javascript
chmod 600 -R ~/.ssh
```
<a name="IVghA"></a>
### 自动化配置
找到 GitHub 上仓库设置，新增 Secrets 设置，添加 `SSH_PRIVATE_KEY` 配置，这个就是复制我们在上一步中`mysite`<br />中的私钥内容，可以参考图中添加需要的私密信息<br />![企业微信截图_1593330308842.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42c000c85f6048f0af0d24163384d4c9~tplv-k3u1fbpfcp-zoom-1.image)
<a name="VhbH9"></a>
### 配置文件
GitHub actions 主要是自动读取仓库下 `.github/workflows` 文件夹下的 yml 配置。具体的一些配置含义已写在配置文件中
```yaml
name: Mondo News action # 名称
on:
  push:
    branches:
      - master # 只在 master 上 push 操作触发部署
    paths-ignore:  # 下列文件的变更不触发部署，可以自行添加
      - README.md      
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest # 使用 ubuntu 系统镜像运行自动化脚本
    steps: # 自动化步骤
    - name: Checkout  # 步骤名称
      uses: actions/checkout@master # 使用别人包装好的步骤镜像
    - name: Deploy file to Server
      uses: wlixcc/SFTP-Deploy-Action@v1.0
      with:  
        username: ${{ secrets.USERNAME }} # 引用配置，用户名称
        server: ${{ secrets.SERVER_IP }} # 引用配置，服务器 IP
        ssh_private_key: ${{ secrets.SSH_PRIVATE_KEY }} # 引用配置，SSH 私钥
        local_path: './*' 
        remote_path: '/front/news'
    - name: Server Start    
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.SERVER_IP }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_PRIVATE_KEY }}
        port: ${{ secrets.PORT }}
        script: sh /front/news/deploy.sh # 执行脚本命令
```
可以看到 GitHub actions 最大的好处的是利用第三方已经写好的镜像来做部署，我们只需要写下配置就可以运行，有很大的扩展性。<br />把配置文件提交至远程仓库，可以在仓库 Actions 项中看到启动状态<br />![企业微信截图_15933318302537.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb7437e545214e3ca17098ba14a57498~tplv-k3u1fbpfcp-zoom-1.image)

## 总结
这次使用代码来小试牛刀解决自己生活中的一些问题，也尝试了 GitHub actions 简化了一些重复性的部署操作。
