# 安装Jenkins入门

## 安装

执行以下命令

```nginx
# 相关依赖
$ sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
  
# 设置稳定仓库
  
$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
    
# 安装docker

sudo yum install docker-ce docker-ce-cli containerd.io

# 版本

docker -v

```

## 安装Jenkins

`jenkins`的容器启动后，重要的文件保存在当前电脑，否则容器被损坏或者删除后就找不回这些文件了，准备一个目录作为文件映射，注意文件夹权限问题，本机目录是`/usr/local/work/jenkins`，并且执行了`chmod 777 /usr/local/work/jenkins`以确保`docker`进程有权限读写此目录

```nginx
# 查看是否占用端口8080

netstat -anp | grep 8080

# 安装jenkins

docker run -p 8080:8080 -p 50000:50000 -v /usr/local/work/jenkins:/var/jenkins_home --name my-jenkins -idt jenkins
```

> 出现`Cannot connect to the Docker daemon.`问题尝试`service docker start`重启

访问`8080`端口

[!如图](https://s2.ax1x.com/2020/01/15/lXEqg0.md.png)

* 页面提示密码文件的位置：`/var/jenkins_home/secrets/initialAdminPassword`，由于已经将`/var/jenkins_home`目录映射到`/usr/local/work/jenkins`目录，所以密码文件位置是：`/usr/local/work/jenkins/secrets/initialAdminPassword`

* 安装推荐的插件

![配置](https://s2.ax1x.com/2020/01/15/lXVeVe.png)

## docker指令

```nginx
service docker start // 启动docker

docker run // 启动容器

docker stop <image id> // 停止容器运行

docker rmi <image id> // 通过镜像的id来删除指定镜像

docker pull jenkins/jenkins // 更新容器

docker ps -a // 查看容器状态

docker inspect CONTAINER ID // 查看容器详情

```