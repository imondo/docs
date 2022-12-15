# 搭建私有 npm 仓库

使用 [Verdaccio](https://verdaccio.org/zh-cn/docs/installation/) 开源项目搭建私有 npm 仓库。

## 安装

```bash
npm i -g verdaccio
```

## 启动

```bash
verdaccio
```

启动后，访问：http://localhost:4873/ 地址

## 使用

```bash
# 注册
npm adduser --registry http://localhost:4873/
# 发布
npm publish --registry http://localhost:4873/
# 下载
npm install verdaccio-test --registry=http://localhost:4873/
```

## 包设置

可以在 `package.json` 设置

```json
"publishConfig": {    
     "registry": "http://localhost:4873/" 
   }, 
"private": true, //手动添加, 防止将私有模块上传到公网
```

::: tip
发布包时，名称最好限定。
:::

```bash
package.json#name 必须限定 @scope@scope 一般为 GitLab group 的名字,
例如 @companyfe,
那么 name 为: @companyfe/hello-private
package.json#private 设置为 true
防止你一不小心将私有模块 publish 上去就麻烦了
```

## 下载私有库

在项目根目录创建 `.npmrc` 或者 `.yarnrc`

```yaml
// .npmrc
@zz:registry=http://localhost:4873/

// .yarnrc
@zz:registry "http://localhost:4873/"
```

## 使用 pm2 守护 verdaccio 进程

`PM2` 是 `node` 进程管理工具，可以利用它来简化很多 `node` 应用管理的繁琐任务，如性能监控、自动重启、负载均衡等。可以用来托管`verdaccio` 进程，保证其永久存活。

- npm i -g pm2
- pm2 -h
- pm2 start verdaccio

## 配置

`config.yaml`：[https://verdaccio.org/zh-CN/docs/configuration](https://verdaccio.org/zh-CN/docs/configuration)

```bash
# 修改监听的端口
listen: 0.0.0.0:4873
# 反向代理前缀
url_prefix: /verdaccio/
# url_prefix: '/my_prefix'
# // url -> https://somedomain.org/my_prefix/
```

**Linux 上安装 Node.js 推荐使用 nvm**

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

source ~/.bashrc

command-v nvm
```

**参考：**

- ****[使用verdaccio部署私有npm服务器](http://luchun.github.io/verdaccio/)****
- ****[部署私有npm](https://zhuanlan.zhihu.com/p/532203499)****
- ****[项目中私有 npm 源的设置](https://www.cnblogs.com/Wayou/p/14725375.html)****
- ****[关于npmrc文件的配置详解](https://segmentfault.com/a/1190000039150806)****