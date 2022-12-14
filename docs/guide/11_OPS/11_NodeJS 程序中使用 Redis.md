# NodeJS 程序中使用 Redis

由于国庆期间老婆大人突然在车上看见前面车牌灵魂发问说 `湘F` 是哪里 😱我哪知道在哪，我只能回了句：我也不晓得😂。为了避免再次发生类似的灵魂发问，我就写了个微信小程序方便查询，机智😜<br />
<br />数据都是在网上爬取，如果有兴趣了解怎么爬可以查看上篇文章 [[**NodeJS 爬新闻**]](https://www.yuque.com/mondo/docs/hxtcy8)；数据爬取下来后，发现可以增加查询地点基本信息的功能，嗯，感谢[百度百科](https://baike.baidu.com/)。<br />
<br />由于考虑到是实时爬取数据，我想这些地点信息可能是万年不变，所以就引入了 [**Redis**](https://www.runoob.com/redis/redis-intro.html) 缓存来处理。<br />

<a name="nXh1M"></a>
## 本地安装
本地使用 win 10 系统。

- 下载对应的[程序](https://github.com/tporadowski/redis/releases)，解压到本地
- 进入目录运行命令 `./redis-server.exe redis.windows.conf`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0a8acb5b13b4a24b43b58836eba6a90~tplv-k3u1fbpfcp-zoom-1.image)<br />具体 Redis 的安装可以查看 [菜鸟教程](https://www.runoob.com/redis/redis-install.html)<br />

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
由于生产环境是 Linux，启动 Redis 服务时不可能还是这种前端启动模式，故我们需要修改 `redis.conf` 配置， `daemonize yes` 以后端模式启动。<br />![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2592ff48d8cb4e94ae26901ee13df72e~tplv-k3u1fbpfcp-zoom-1.image)<br />再次执行启动服务
```powershell
cd /opt/redis
./bin/redis-server ./redis.conf
```
连接 `redis`<br />

```powershell
/opt/redis/bin/redis-cli
```
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3decbccb7f04272b83e4b48bfbdf9ac~tplv-k3u1fbpfcp-zoom-1.image)<br />

<a name="4L2Rs"></a>
## 最后
利用自己掌握的知识来解决生活中碰到的一些问题，感觉还不错，大家可以体验下或者有好的想法，大家一起交流。<br />![扫码_搜索联合传播样式-微信标准绿版.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76f23f41aa3043b39f33df6f5d738a63~tplv-k3u1fbpfcp-zoom-1.image)<br />
<br />**参考：**

- [Linux下redis安装和部署](https://www.jianshu.com/p/bc84b2b71c1c)
- [Redis 教程](https://www.runoob.com/redis/redis-tutorial.html)
