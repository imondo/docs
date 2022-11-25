import{_ as s,c as n,o as a,a as l}from"./app.4cae6a28.js";const d=JSON.parse('{"title":"\u5DE5\u4F5C\u4E2D\u4F7F\u7528\u7684\u547D\u4EE4\u96C6\uFF08\u6301\u7EED\u66F4\u65B0\uFF09","description":"","frontmatter":{},"headers":[],"relativePath":"guide/06_TOOLS/07_xshell\u547D\u4EE4.md","lastUpdated":1669368786000}'),p={name:"guide/06_TOOLS/07_xshell\u547D\u4EE4.md"},e=l(`<h1 id="\u5DE5\u4F5C\u4E2D\u4F7F\u7528\u7684\u547D\u4EE4\u96C6-\u6301\u7EED\u66F4\u65B0" tabindex="-1">\u5DE5\u4F5C\u4E2D\u4F7F\u7528\u7684\u547D\u4EE4\u96C6\uFF08\u6301\u7EED\u66F4\u65B0\uFF09 <a class="header-anchor" href="#\u5DE5\u4F5C\u4E2D\u4F7F\u7528\u7684\u547D\u4EE4\u96C6-\u6301\u7EED\u66F4\u65B0" aria-hidden="true">#</a></h1><h2 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h2><p><a href="https://www.cnblogs.com/hechunhua/p/4860544.html" target="_blank" rel="noreferrer">find\u547D\u4EE4</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u67E5\u627Enginx\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">find / -name nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u627E\u6700\u8FD124\u5C0F\u65F6\u4FEE\u6539\u7684\u5F53\u524D\u76EE\u5F55\u4E0B\u7684.conf\u6587\u4EF6\uFF0C\u5E76\u5217\u51FA\u8BE6\u7EC6\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">find . -name &#39;*.conf&#39; -mtime 0 -ls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u627E\u6700\u8FD130\u5206\u949F\u4FEE\u6539\u7684\u5F53\u524D\u76EE\u5F55\u4E0B\u7684.conf\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">find . -name &#39;*.conf&#39; -mmin -30</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5236\u5B9Anginx\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/sbin/nginx -c /etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u505C\u6B62\u4E0E\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">./nginx -s stop</span></span>
<span class="line"><span style="color:#A6ACCD;">./nginx -s reload</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nginx restart </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u6240\u6709\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -ntlp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7ED9\u811A\u672C\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod a+x test.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="tomcat" tabindex="-1">Tomcat <a class="header-anchor" href="#tomcat" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u8FDB\u5165\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">opt/apache-tomcat-7.0.75/bin/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u505C\u6B62\u7AEF\u53E3\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef|grep java</span></span>
<span class="line"><span style="color:#A6ACCD;">kill -9 \u7AEF\u53E3\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u505C\u6B62\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">./shutdown.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">./startup.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7A0B\u5E8F\u8FD0\u884C\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux|grep redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">../logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -200f catalina.out</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4FEE\u6539Tomcat\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /opt/apache-tomcat-7.0.92/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cd webapps/passport/WEB-INF/classes/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">vim project.properties</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="oracle" tabindex="-1">Oracle <a class="header-anchor" href="#oracle" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">su -oracle</span></span>
<span class="line"><span style="color:#A6ACCD;">sqlplus / as sysdba</span></span>
<span class="line"><span style="color:#A6ACCD;">startup</span></span>
<span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;">lsnrctl start</span></span>
<span class="line"><span style="color:#A6ACCD;">lsnrctl status</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u5220\u9664\u7F13\u5B58\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf /var/run/redis_6379.pid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FDB\u5165\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">opt/redis/bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">./redis-server</span></span>
<span class="line"><span style="color:#A6ACCD;">service redis_6379 start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6E05\u9664\u7F13\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /opt/redis-4.0.12/src/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6307\u5B9A\u8FDB\u5165IP\u7684redis\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">./redis-cli -h 10.2.20.35</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6307\u5B9A\u8FDB\u5165\u7AEF\u53E3\u53F7\u4E3A7901\u7684redis\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">./redis-cli -p 7901</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6E05\u9664\u7F13\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">key *</span></span>
<span class="line"><span style="color:#A6ACCD;">flushall</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="solr" tabindex="-1">Solr <a class="header-anchor" href="#solr" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">opt/solr-6.4.2/bin</span></span>
<span class="line"><span style="color:#A6ACCD;">./solr start -force</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="rabbitmq" tabindex="-1">Rabbitmq <a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">source /etc/profile.d/erlang.sh </span></span>
<span class="line"><span style="color:#A6ACCD;">opt/rabbitmq_server-3.6.6/sbin</span></span>
<span class="line"><span style="color:#A6ACCD;">./rabbitmq-server &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Jenkins</span></span>
<span class="line"><span style="color:#A6ACCD;">service jenkins</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u79C1\u670D</span></span>
<span class="line"><span style="color:#A6ACCD;">service nexus</span></span>
<span class="line"><span style="color:#A6ACCD;">usr/local/nexus/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u9632\u706B\u5899</span></span>
<span class="line"><span style="color:#A6ACCD;">/sbin/iptables -I INPUT -p tcp --dport 6379 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;">service iptables save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u641C\u7D22</span></span>
<span class="line"><span style="color:#A6ACCD;">find / -name &#39;redis-server&#39;\uFF08\u6587\u4EF6\u540D\u6216\u8005\u76EE\u5F55\u540D\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B89\u88C5screen</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install screen</span></span>
<span class="line"><span style="color:#A6ACCD;">jar</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /opt/reader/</span></span>
<span class="line"><span style="color:#A6ACCD;">java -jar reading/reading-authorization-starter-1.1.0-SNAPSHOT.jar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -l \uFF08\u6CA1\u6709\u6307\u5B9A\u76EE\u5F55\u5219\u4E3A\u5F53\u524D\u76EE\u5F55\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FDB\u5165\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">su esearch\uFF08\u7528\u6237\u540D\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u9000\u51FA\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;">elasticsearch</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /opt/elasticsearch-5.6.1/bin/</span></span>
<span class="line"><span style="color:#A6ACCD;">./elasticsearch &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">pwd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u89E3\u538B\uFF0C\u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install lrzsz \u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">rz\u4E0A\u4F20\u6587\u4EF6  \u53EA\u53EF\u5355\u4E2A\u4E0A\u4F20</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u89E3\u538B</span></span>
<span class="line"><span style="color:#A6ACCD;">unzip iportal-fe-1.5.14.zip </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7F51\u7EDC\u6587\u4EF6\u670D\u52A1\u5668\uFF08Network File System\uFF0C\u7B80\u79F0NFS\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nfs</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nfs status</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nfs stop</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nfs start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8C01\u8FDE\u4E86\u6211\u7684NFS\u76EE\u5F55\uFF1A showmount</span></span>
<span class="line"><span style="color:#A6ACCD;">showmount -e 192.168.2.216</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">192.168.2.192</span></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/fstab</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6302\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">mount -t nfs 192.168.2.216:/opt/nginx /opt/nginx2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),c=[e];function o(t,i,r,C,A,y){return a(),n("div",null,c)}const h=s(p,[["render",o]]);export{d as __pageData,h as default};
