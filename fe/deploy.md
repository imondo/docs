# Github项目实现自动化部署

当我们利用`github`来托管项目时，每次部署项目都要走同样的流程，敲击同样的命令行，尤其的我们的`node`项目更是无法忍受这种重复工作。

那到底有没有一种可以解放我们双手，当我们提交代码后，服务器自动执行我们已经制定好的命令行，答案是我们可以利用`Github`自有的`Webhooks`。

## Webhooks

`Webhooks`是来监测你在`github`上的各种事件，我们可以通过定制它来监测一个`push`事件，每当我们提交代码时`Webhooks`会被触发，这是我们可以通过配置一个`HOST POST`请求到你所需要的地址。

## 如何配置

找到你在`Github`上的项目地址上的`Setting`的`Webhooks`，如下图配置：

<img src="_img/deploy.png">

## 项目配置

* 编写执行`shell命令`

在项目根目录下新建`deployed.sh`文件，输入你想在服务器上执行的命令行，如：

```
cd /front/docs/

git pull origin master

```

* 编写执行脚本

在项目根目录下新建`deployed.js`文件

```
var http = require('http')
var spawn = require('child_process').spawn
var createHandler = require('github-webhook-handler')
var handler = createHandler({
  path: '/pushCode',
  secret: '12345678'
})
http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404;
    res.end('no such location')
  })
}).listen(3000)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
  rumCommand('sh', ['./deployed.sh'], function (txt) {
    console.log(txt)
  })
})

function rumCommand(cmd, args, callback) {
  var child = spawn(cmd, args)
  var response = ''
  child.stdout.on('data', function (buffer) {
    response += buffer.toString()
  })
  child.stdout.on('end', function () {
    callback(response)
  })
}

```

## nginx配置

执行脚本跑在了3000端口，我们服务器对应启用到 3000 端口

```
upstream test {
    server 127.0.0.1:3000;
}

server {

  location /pushCode {
    proxy_pass http://test;
    proxy_redirect off;
  }

}

```

## 部署项目

首次部署到服务器时，仍然是需要我们手动执行命令`git pull`项目，当我们在服务器上`clone`下我们的项目后，在本地尝试修改下代码，然后再次提交，可看到后台的日志







