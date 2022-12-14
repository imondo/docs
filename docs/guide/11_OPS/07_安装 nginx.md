# 安装 nginx

## 下载安装文件

<br />到[ nginx 官网](https://www.cnblogs.com/qfb620/p/5508468.html)上下载相应的安装包<br />![1591066180(1).jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9138589f47f74e8e9a7dd81d167773fa~tplv-k3u1fbpfcp-zoom-1.image)

## 解压

<br />![1591066266(1).jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16a428a12b2f40aabf45ad701d060ba3~tplv-k3u1fbpfcp-zoom-1.image)<br />进入 conf ，找到 nginx.conf，可以修改监听端口，新增而外配置文件夹

![1591081461(1).png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6fbcfcac12c420aa41841d6f8a38cc5~tplv-k3u1fbpfcp-zoom-1.image)
<a name="LLMmt"></a>
## 常用命令
在 nginx 当前目录下执行命令<br />

- start nginx.exe 启动
- nginx.exe -s stop 结束
- nginx.exe -s reload 重启



<a name="7bAuG"></a>
## 反向代理本地静态文件

<br />spa 项目本地打包后可以利用 nginx 反向代理，做成本地访问服务<br />
<br />在 vhost 文件夹下新建 dh.conf 文件<br />

```nginx
server {
	listen 9527;
	server_name localhost;
	
	location / {
		root /nginx/dh; # 打包后的静态文件目录
		index index.html index.htm;
		try_files   $uri $uri/ /index.html;
	}
	
	location /api {
		proxy_pass http://www.dherp.com/index.php/api; # 反向代理到后端服务
		proxy_redirect off;
	}
}
```
