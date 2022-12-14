# Gods 自助 Git 服务


> [gogs 官网](https://gogs.io/)

## docker 安装

```shell
# 通过yum源安装docker
yum -y install docker
# 启动docker
systemctl start docker
# 开机自启
sudo systemctl enable docker
```


## Gods 安装


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


## 配置 Gods

<br />通过浏览器访问 ip:10080<br />
<br />![1586785708(1).jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59cf2bd783ec4756bbbe75fc33a685c0~tplv-k3u1fbpfcp-zoom-1.image)

## 注意

- 访问量不大，推荐使用 `SQLite3`  数据库
- 域名都填写自己的**公网 IP**
- 如果是云服务需要在云服务后台新增**安全组**
