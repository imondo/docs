# 自建私有 Git 服务

原有使用 [gogs](https://gogs.io/) 项目自建服务，后续升级成 [gitea](https://gitea.io/zh-cn/)，它是从 `Gogs` 源码的基础上开发的。

## gitea

### 安装

[二进制安装](https://docs.gitea.io/zh-cn/install-from-binary/)最快

```bash
wget -O gitea https://dl.gitea.io/gitea/1.17.3/gitea-1.17.3-linux-amd64
chmod +x gitea
```

### 启动

```bash
# 前台启动
./gitea web

# 后台启动挂起
nohup ./gitea web &
```

启动后，填写相关配置即可，和 Gogs 配置差不多；整体安装简单快捷。

这是本人启动的服务：https://git.imondo.cn

## gogs 服务

### docker 安装

```shell
# 通过yum源安装docker
yum -y install docker
# 启动docker
systemctl start docker
# 开机自启
sudo systemctl enable docker
```


### Gods 安装


- 下载 docker 镜像

```shell
docker pull gogs/gogs
```


- 创建 Gods 存储目录

```shell
mkdir -p /opt/gogs
```


- 运行镜像，产生容器

```shell
docker run --name=gogs -p 10022:22 -p 10080:3000 -v /opt/gogs:/data gogs/gogs
```


### 配置 Gods

<br />通过浏览器访问 ip:10080<br />
<br />![1586785708(1).jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59cf2bd783ec4756bbbe75fc33a685c0~tplv-k3u1fbpfcp-zoom-1.image)

### 注意

- 访问量不大，推荐使用 `SQLite3`  数据库
- 域名都填写自己的**公网 IP**
- 如果是云服务需要在云服务后台新增**安全组**
