import{_ as s,c as n,o as a,a as l}from"./app.11ca58d6.js";const d=JSON.parse('{"title":"工作中使用的命令集（持续更新）","description":"","frontmatter":{},"headers":[],"relativePath":"guide/10_TOOLS/05_xshell命令.md","lastUpdated":1672379633000}'),p={name:"guide/10_TOOLS/05_xshell命令.md"},e=l(`<h1 id="工作中使用的命令集-持续更新" tabindex="-1">工作中使用的命令集（持续更新） <a class="header-anchor" href="#工作中使用的命令集-持续更新" aria-hidden="true">#</a></h1><h2 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h2><p><a href="https://www.cnblogs.com/hechunhua/p/4860544.html" target="_blank" rel="noreferrer">find命令</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 查找nginx配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">find / -name nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查找最近24小时修改的当前目录下的.conf文件，并列出详细信息</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">find . -name &#39;*.conf&#39; -mtime 0 -ls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查找最近30分钟修改的当前目录下的.conf文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">find . -name &#39;*.conf&#39; -mmin -30</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 制定nginx配置</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/sbin/nginx -c /etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 停止与启动</span></span>
<span class="line"><span style="color:#A6ACCD;">./nginx -s stop</span></span>
<span class="line"><span style="color:#A6ACCD;">./nginx -s reload</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nginx restart </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看所有端口</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -ntlp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 给脚本权限</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod a+x test.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="tomcat" tabindex="-1">Tomcat <a class="header-anchor" href="#tomcat" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 进入目录</span></span>
<span class="line"><span style="color:#A6ACCD;">opt/apache-tomcat-7.0.75/bin/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 停止端口服务</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef|grep java</span></span>
<span class="line"><span style="color:#A6ACCD;">kill -9 端口号</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 停止服务</span></span>
<span class="line"><span style="color:#A6ACCD;">./shutdown.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 启动服务</span></span>
<span class="line"><span style="color:#A6ACCD;">./startup.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 程序运行状态</span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux|grep redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看日志</span></span>
<span class="line"><span style="color:#A6ACCD;">../logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -200f catalina.out</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 修改Tomcat配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /opt/apache-tomcat-7.0.92/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cd webapps/passport/WEB-INF/classes/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">vim project.properties</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="oracle" tabindex="-1">Oracle <a class="header-anchor" href="#oracle" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">su -oracle</span></span>
<span class="line"><span style="color:#A6ACCD;">sqlplus / as sysdba</span></span>
<span class="line"><span style="color:#A6ACCD;">startup</span></span>
<span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;">lsnrctl start</span></span>
<span class="line"><span style="color:#A6ACCD;">lsnrctl status</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 删除缓存文件</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf /var/run/redis_6379.pid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 进入文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">opt/redis/bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 启动方式</span></span>
<span class="line"><span style="color:#A6ACCD;">./redis-server</span></span>
<span class="line"><span style="color:#A6ACCD;">service redis_6379 start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 清除缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /opt/redis-4.0.12/src/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 指定进入IP的redis数据库</span></span>
<span class="line"><span style="color:#A6ACCD;">./redis-cli -h 10.2.20.35</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 指定进入端口号为7901的redis数据库</span></span>
<span class="line"><span style="color:#A6ACCD;">./redis-cli -p 7901</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 清除缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">key *</span></span>
<span class="line"><span style="color:#A6ACCD;">flushall</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="solr" tabindex="-1">Solr <a class="header-anchor" href="#solr" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 启动</span></span>
<span class="line"><span style="color:#A6ACCD;">opt/solr-6.4.2/bin</span></span>
<span class="line"><span style="color:#A6ACCD;">./solr start -force</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="rabbitmq" tabindex="-1">Rabbitmq <a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 启动</span></span>
<span class="line"><span style="color:#A6ACCD;">source /etc/profile.d/erlang.sh </span></span>
<span class="line"><span style="color:#A6ACCD;">opt/rabbitmq_server-3.6.6/sbin</span></span>
<span class="line"><span style="color:#A6ACCD;">./rabbitmq-server &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Jenkins</span></span>
<span class="line"><span style="color:#A6ACCD;">service jenkins</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 私服</span></span>
<span class="line"><span style="color:#A6ACCD;">service nexus</span></span>
<span class="line"><span style="color:#A6ACCD;">usr/local/nexus/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 防火墙</span></span>
<span class="line"><span style="color:#A6ACCD;">/sbin/iptables -I INPUT -p tcp --dport 6379 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;">service iptables save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 搜索</span></span>
<span class="line"><span style="color:#A6ACCD;">find / -name &#39;redis-server&#39;（文件名或者目录名）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 安装screen</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install screen</span></span>
<span class="line"><span style="color:#A6ACCD;">jar</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /opt/reader/</span></span>
<span class="line"><span style="color:#A6ACCD;">java -jar reading/reading-authorization-starter-1.1.0-SNAPSHOT.jar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看用户</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -l （没有指定目录则为当前目录）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 进入用户</span></span>
<span class="line"><span style="color:#A6ACCD;">su esearch（用户名）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 退出用户</span></span>
<span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;">elasticsearch</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /opt/elasticsearch-5.6.1/bin/</span></span>
<span class="line"><span style="color:#A6ACCD;">./elasticsearch &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看路径</span></span>
<span class="line"><span style="color:#A6ACCD;">pwd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 解压，压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install lrzsz 安装</span></span>
<span class="line"><span style="color:#A6ACCD;">rz上传文件  只可单个上传</span></span>
<span class="line"><span style="color:#A6ACCD;">// 解压</span></span>
<span class="line"><span style="color:#A6ACCD;">unzip iportal-fe-1.5.14.zip </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 网络文件服务器（Network File System，简称NFS）</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nfs</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nfs status</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nfs stop</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nfs start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">谁连了我的NFS目录： showmount</span></span>
<span class="line"><span style="color:#A6ACCD;">showmount -e 192.168.2.216</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">192.168.2.192</span></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/fstab</span></span>
<span class="line"><span style="color:#A6ACCD;">// 挂载</span></span>
<span class="line"><span style="color:#A6ACCD;">mount -t nfs 192.168.2.216:/opt/nginx /opt/nginx2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),c=[e];function o(t,i,r,C,A,y){return a(),n("div",null,c)}const h=s(p,[["render",o]]);export{d as __pageData,h as default};
