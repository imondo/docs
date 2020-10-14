# NodeJS 程序中使用 Redis

由于国庆期间老婆大人突然在车上看见前面车牌灵魂发问说 `湘F` 是哪里 😱我哪知道在哪，我只能回了句：我也不晓得😂。为了避免再次发生类似的灵魂发问，我就写了个微信小程序方便查询，机智😜<br />
<br />数据都是在网上爬取，如果有兴趣了解怎么爬可以查看上篇文章 [[**NodeJS 爬新闻**]](https://www.yuque.com/mondo/docs/hxtcy8)；数据爬取下来后，发现可以增加查询地点基本信息的功能，嗯，感谢[百度百科](https://baike.baidu.com/)。<br />
<br />由于考虑到是实时爬取数据，我想这些地点信息可能是万年不变，所以就引入了 [**Redis**](https://www.runoob.com/redis/redis-intro.html) 缓存来处理。<br />

<a name="nXh1M"></a>
## 本地安装
本地使用 win 10 系统。

- 下载对应的[程序](https://github.com/tporadowski/redis/releases)，解压到本地
- 进入目录运行命令 `./redis-server.exe redis.windows.conf`

![image.png](https://cdn.nlark.com/yuque/0/2020/png/124135/1602572103249-a7d19186-1939-40ce-b2a6-e7330bc41561.png#align=left&display=inline&height=421&margin=%5Bobject%20Object%5D&name=image.png&originHeight=421&originWidth=898&size=28790&status=done&style=none&width=898)<br />具体 Redis 的安装可以查看 [菜鸟教程](https://www.runoob.com/redis/redis-install.html)<br />

<a name="ltpUn"></a>
## 程序依赖包
下载 [redis](https://github.com/NodeRedis/node-redis) 安装包
```shell
yarn add redis
```


<a name="4yYnc"></a>
## 开启服务
引用对应的包，连接服务
```javascript
const redis = require('redis');
const redisClient = redis.createClient({
	host: '127.0.0.1', // 默认 host
  port: '6379' // 默认端口
});
```
<a name="8Ht8a"></a>
## 数据操作
可以使用 `promisify` 来包装操作变成异步函数
```javascript
const redis = require('redis');
const { promisify } = require("util");
const config = require('../config');

const redisClient = redis.createClient(config.REDIS_PORT);

redisClient.on("error", function (err) {
  console.log("Error " + err);
});

function Client() {
  this.set = promisify(redisClient.set).bind(redisClient);
  this.get = promisify(redisClient.get).bind(redisClient);
  return this;
}

const client = new Client();

module.exports = client
```
在需要操作数据时引用操作
```javascript
const redisStore = require('../utils/redis');

const getBaike = async (site) => {
  console.log(`site: ${site}`);
  if (!site) {
    return null;
  }
  ...
  const data = {
    introduce,
    basicInfo
  };
  await redisStore.set(site, JSON.stringify(data));
  return data;
};

module.exports = async (ctx, next) => {
  await next();
  const { site } = ctx.query;
  const cacheData = await redisStore.get(site);
  const baike = cacheData ? JSON.parse(cacheData) : await getBaike(site);
  ctx.type = 'json';
  ctx.body = {
    baike
  }
}
```
一个简单的 Redis 服务操作就完成了。<br />

<a name="AYz9P"></a>
## 注意
由于生产环境是 Linux，启动 Redis 服务时不可能还是这种前端启动模式，故我们需要修改 `redis.conf` 配置， `daemonize yes` 以后端模式启动。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/124135/1602573414447-bf947eee-cada-4370-afcd-2ec9e19ef236.png#align=left&display=inline&height=174&margin=%5Bobject%20Object%5D&name=image.png&originHeight=174&originWidth=1199&size=243071&status=done&style=none&width=1199)<br />再次执行启动服务
```powershell
cd /opt/redis
./bin/redis-server ./redis.conf
```
连接 `redis`<br />

```powershell
/opt/redis/bin/redis-cli
```
![image.png](https://cdn.nlark.com/yuque/0/2020/png/124135/1602573712190-964c6788-0a35-4002-8096-f60c55bba654.png#align=left&display=inline&height=68&margin=%5Bobject%20Object%5D&name=image.png&originHeight=68&originWidth=595&size=6251&status=done&style=none&width=595)<br />

<a name="4L2Rs"></a>
## 最后
利用自己掌握的知识来解决生活中碰到的一些问题，感觉还不错，大家可以体验下或者有好的想法，大家一起交流。<br />![扫码_搜索联合传播样式-微信标准绿版.png](https://cdn.nlark.com/yuque/0/2020/png/124135/1602573880195-6e2972cc-9775-4c72-bbcc-a43480aa7f53.png#align=left&display=inline&height=200&margin=%5Bobject%20Object%5D&name=%E6%89%AB%E7%A0%81_%E6%90%9C%E7%B4%A2%E8%81%94%E5%90%88%E4%BC%A0%E6%92%AD%E6%A0%B7%E5%BC%8F-%E5%BE%AE%E4%BF%A1%E6%A0%87%E5%87%86%E7%BB%BF%E7%89%88.png&originHeight=800&originWidth=2172&size=6950538&status=done&style=none&width=543)<br />
<br />**参考：**

- [Linux下redis安装和部署](https://www.jianshu.com/p/bc84b2b71c1c)
- [Redis 教程](https://www.runoob.com/redis/redis-tutorial.html)
