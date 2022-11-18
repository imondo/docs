# win10 上 安装 nginx

<a name="ksfty"></a>
## 下载安装文件

<br />到[ nginx 官网](https://www.cnblogs.com/qfb620/p/5508468.html)上下载相应的安装包<br />![1591066180(1).jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/124135/1591066193664-099159ae-80f2-4f03-b5fd-1e87ad310695.jpeg#align=left&display=inline&height=321&margin=%5Bobject%20Object%5D&name=1591066180%281%29.jpg&originHeight=641&originWidth=753&size=43021&status=done&style=none&width=377)

<a name="Dw7in"></a>
## 解压

<br />![1591066266(1).jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/124135/1591066289526-f4504762-294a-4e1f-887d-fa5556d8f94f.jpeg#align=left&display=inline&height=247&margin=%5Bobject%20Object%5D&name=1591066266%281%29.jpg&originHeight=247&originWidth=649&size=11659&status=done&style=none&width=649)<br />进入 conf ，找到 nginx.conf，可以修改监听端口，新增而外配置文件夹

![1591081461(1).png](https://cdn.nlark.com/yuque/0/2020/png/124135/1591081474421-bb89a20d-1c48-4069-aebe-81c788e830cc.png#align=left&display=inline&height=567&margin=%5Bobject%20Object%5D&name=1591081461%281%29.png&originHeight=567&originWidth=628&size=20788&status=done&style=none&width=628)
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
