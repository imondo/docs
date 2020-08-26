# Gods 自助 Git 服务


> [gogs 官网](https://gogs.io/)

<a name="lfXHa"></a>
## docker 安装
```shell
# 通过yum源安装docker
yum -y install docker
# 启动docker
systemctl start docker
# 开机自启
sudo systemctl enable docker
```


<a name="5GQPq"></a>
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


<a name="cOka6"></a>
## 配置 Gods

<br />通过浏览器访问 ip:10080<br />
<br />![1586785708(1).jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/124135/1586785727286-8665746a-757c-4cfa-982f-cefeff0ef1c6.jpeg#align=left&display=inline&height=910&margin=%5Bobject%20Object%5D&name=1586785708%281%29.jpg&originHeight=910&originWidth=1062&size=45980&status=done&style=none&width=1062)
<a name="bJ0Y2"></a>
## 注意

- 访问量不大，推荐使用 `SQLite3`  数据库
- 域名都填写自己的**公网 IP**
- 如果是云服务需要在云服务后台新增**安全组**
