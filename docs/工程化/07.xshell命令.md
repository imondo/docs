# 工作中使用的命令集（持续更新）

## nginx

[find命令](https://www.cnblogs.com/hechunhua/p/4860544.html)

```
// 查找nginx配置文件

find / -name nginx.conf

// 查找最近24小时修改的当前目录下的.conf文件，并列出详细信息

find . -name '*.conf' -mtime 0 -ls

// 查找最近30分钟修改的当前目录下的.conf文件

find . -name '*.conf' -mmin -30

// 制定nginx配置

/usr/sbin/nginx -c /etc/nginx/nginx.conf

// 停止与启动
./nginx -s stop
./nginx -s reload
/etc/init.d/nginx restart 
```



## Tomcat

```
// 进入目录
opt/apache-tomcat-7.0.75/bin/

// 停止端口服务
ps -ef|grep java
kill -9 端口号

// 停止服务
./shutdown.sh

// 启动服务
./startup.sh 

// 程序运行状态
ps aux|grep redis

// 查看日志
../logs
tail -200f catalina.out

// 修改Tomcat配置文件
cd /opt/apache-tomcat-7.0.92/

cd webapps/passport/WEB-INF/classes/

vim project.properties
```

## Oracle

```
su -oracle
sqlplus / as sysdba
startup
exit
lsnrctl start
lsnrctl status
```


## Redis

```
// 删除缓存文件
rm -rf /var/run/redis_6379.pid

// 进入文件夹
opt/redis/bin

// 启动方式
./redis-server
service redis_6379 start

// 清除缓存
cd /opt/redis-4.0.12/src/

// 指定进入IP的redis数据库
./redis-cli -h 10.2.20.35

// 指定进入端口号为7901的redis数据库
./redis-cli -p 7901

// 清除缓存
key *
flushall

```


## Solr

```
// 启动
opt/solr-6.4.2/bin
./solr start -force
```

## Rabbitmq

```
// 启动
source /etc/profile.d/erlang.sh 
opt/rabbitmq_server-3.6.6/sbin
./rabbitmq-server &
```

## 其他

```
Jenkins
service jenkins

// 私服
service nexus
usr/local/nexus/

// 防火墙
/sbin/iptables -I INPUT -p tcp --dport 6379 -j ACCEPT
service iptables save

// 搜索
find / -name 'redis-server'（文件名或者目录名）

// 安装screen
yum install screen
jar
cd /opt/reader/
java -jar reading/reading-authorization-starter-1.1.0-SNAPSHOT.jar

// 查看用户
ls -l （没有指定目录则为当前目录）

// 进入用户
su esearch（用户名）

// 退出用户
exit
elasticsearch
cd /opt/elasticsearch-5.6.1/bin/
./elasticsearch &

// 查看路径
pwd

// 解压，压缩
yum install lrzsz 安装
rz上传文件  只可单个上传
// 解压
unzip iportal-fe-1.5.14.zip 

// 网络文件服务器（Network File System，简称NFS）
/etc/init.d/nfs
/etc/init.d/nfs status
/etc/init.d/nfs stop
/etc/init.d/nfs start

谁连了我的NFS目录： showmount
showmount -e 192.168.2.216

192.168.2.192
vim /etc/fstab
// 挂载
mount -t nfs 192.168.2.216:/opt/nginx /opt/nginx2
```