# WebSocket 使用

![websocket](/imgs/websocket.png)

> 这里的详细使用只针对客户端调用。

客户端原生调用 `WebSocket` 构造函数

```js
const ws = new WebSocket('ws://test.com');
```

`ws` 指 `WebSocket` 协议，`wss` 指定安全协议；默认端口也是 `80` 和 `443`。它们对应的就是 `http` 和 `https`

有哪些优缺点？

优点

- `WebSocket` 是一种双向通讯协议
- 实时应用都在使用 `WebSocket` 在单个通道上接收数据
- 经常更新的应用程序都应该使用 `WebSocket`，比 `HTTP` 更快
- `HTML5` 的技术之一，具有巨大的应用前景


缺点

- 不兼容低版本的 `IE`
- 要获取旧数据，或者只想获取一次数据供应用程序使用，则应该使用 `HTTP` 协议
- 如果仅加载一次数据，则 `RestFul Web` 服务足以从服务器获取数据

## 创建后端服务

简单启动后端服务

```js
const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();

app.get('/', function (req, res) {
  res.sendfile('./index.html');
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
  ws.on('message', function incoming(message) {
    ws.send('received: ' + message + '(From Server)');
  });

  ws.send('Hello Client');
});

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});
```

## 客户端发送信息

- onopen：连接成功回调

- onmessage：接受服务端信息

- onclose：关闭连接，客户端可以主动关闭连接

- onerror：连接错误，当服务连接出错时，会触发回调

```js
const ws = new WebSocket('ws://localhost:8080');

let sendTimmer = null;
let sendCount = 0;

ws.onopen = function () {
  console.log('@open');

  sendCount++;
  ws.send('Hello Server!' + sendCount);

  sendTimmer = setInterval(function () {
    sendCount++;
    ws.send('Hi Server!' + sendCount);

    if (sendCount === 10) {
      ws.close();
    }
  }, 2000);
};
ws.onmessage = function (e) {
  console.log('@message');
  console.log(e.data);
};
ws.onclose = function () {
  console.log('@close');
  sendTimmer && clearInterval(sendTimmer);
};
ws.onerror = function () {
  console.log('@error');
};
```

![scoket](/imgs/scoket.png)

## 封装

客户端封装使用需要考虑到：

- 发送连接

- 发送数据（发送心跳等）

- 接受数据处理

- 关闭连接

- 断线重连

- 异常处理

<details>

<summary>查看代码</summary>

```js
/**
 * WebSocket 工具类
 * @param {string} url 链接地址
 * @param {number} delay 重连时间 默认 1000ms
 * @param {number} maxConnectCount 最大重连次数 默认 5
 * @param {function} onSuccess 连接成功回调函数
 * @param {function} onError 连接错误回调函数
 * @param {function} onClose 连接关闭回调函数
 */
class WebSocketUtil {
  static instance = null

  static sockets = {}

  constructor({ 
    url,
    delay = 1000,
    maxConnectCount = 5,
    onSuccess = () => { },
    onError = () => { },
    onClose = () => { },
  }) {
    if (!WebSocketUtil.instance) {
      this.url = url
      this.reconnectTimer = null // 重连
      this.delay = delay // 重连延迟
      this.reconnectCount = 0; // 重连次数
      this.MAX_CONNECT_COUNT = maxConnectCount // 最大重连次数

      this.onSuccess = onSuccess
      this.onError = onError
      this.onClose = onClose
      WebSocketUtil.instance = this
    }
    return WebSocketUtil.instance
  }

  // 连接
  connect() {
    if (!WebSocket) {
      throw new Error('不支持原生 WebSocket 协议');
    }
    // 当前连接已创建则不再重复创建连接
    if (WebSocketUtil.sockets[this.url]) {
      return WebSocketUtil.sockets[this.url];
    }
    const _this = this;
    // 创建实例
    const ws = new WebSocket(this.url)

    ws.onopen = () => {
      console.log('连接成功');
      clearTimeout(this.reconnectTimer)

      // 心跳检测
      this.heartbeat().reset().start()
    }

    ws.onmessage = (res) => {
      receive(res);
    }

    ws.onclose = (res) => {
      console.log('连接关闭');
      if (this.onClose) {
        this.onClose(res);
      }
    }

    ws.onerror = (res) => {
      console.log('连接出错');
      // 发送错误，尝试重新连接
      this.reconnect();

      if (this.onError) {
        this.onError(res);
      }
    }

    this.ws = ws;

    WebSocketUtil.sockets[this.url] = this.ws;

    // TODO 消息处理
    function receive(res) {
      console.log('服务端消息：', res)
      if (_this.onSuccess) {
        _this.onSuccess(res.data)
      }
    }
  }

  // 发送数据
  send(data) {
    if (!this.ws) {
      throw new Error('ws 实例不存在');
    }

    let _data = data
    if (typeof _data === 'object') {
      _data = JSON.stringify(data)
    }
    this.ws.send(_data);
  }

  // 重连
  reconnect() {
    console.log('准备重连');
    const { reconnectCount, delay, MAX_CONNECT_COUNT } = this
    clearTimeout(this.reconnectTimer)

    // 超过最大重连次数则主动关闭，释放资源
    if (reconnectCount >= MAX_CONNECT_COUNT) {
      this.close();
      return;
    }

    this.reconnectTimer = setTimeout(() => {
      this.reconnectCount++
      console.log(`重连${this.reconnectCount}次`);
      this.connect()
    }, reconnectCount * delay) // 越到后面重新连接次数越长
  }

  // 关闭连接
  close() {
    if (!this.ws) {
      throw new Error('ws 实例不存在');
    }

    this.ws.close()

    WebSocketUtil.sockets[this.url] = null
  }

  // 心跳机制
  heartbeat() {
    // TODO 心跳逻辑自行处理
    const _this = this
    return {
      time: 1000,
      serveTimer: null,
      reset() {
        clearInterval(this.serveTimer)
        this.serveTimer = null
        return this
      },
      start() {
        this.serveTimer = setInterval(() => {
          _this.send({
            type: 'keepalive',
          });
        }, this.time)
      }
    }
  }
}
```

</details>

具体调用

```js
const socket = new WebSocketUtil({
  url: 'ws://localhost:8080',
  onSuccess(res) {
    // 接收消息
    console.log(res)
  },
  onError(res) {
    // 接收连接错误消息
    console.log(res)
  },
  onClose(res) {
    // 接收关闭回调消息
    console.log(res)
  }
})
// 打开连接
socket.connect();

// 发送消息
scoket.send({
  type: '你好'
})

// 关闭
socket.close();

```
