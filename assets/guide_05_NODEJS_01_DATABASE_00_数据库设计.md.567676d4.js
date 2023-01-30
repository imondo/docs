import{_ as s,c as a,o as n,a as p}from"./app.a57aac40.js";const e="/docs/imgs/TIME.png",h=JSON.parse('{"title":"数据库设计","description":"","frontmatter":{},"headers":[],"relativePath":"guide/05_NODEJS/01_DATABASE/00_数据库设计.md","lastUpdated":1675070703000}'),l={name:"guide/05_NODEJS/01_DATABASE/00_数据库设计.md"},o=p('<h1 id="数据库设计" tabindex="-1">数据库设计 <a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a></h1><h2 id="原则" tabindex="-1">原则 <a class="header-anchor" href="#原则" aria-hidden="true">#</a></h2><h3 id="设计数据库的时间要充沛" tabindex="-1">设计数据库的时间要充沛 <a class="header-anchor" href="#设计数据库的时间要充沛" aria-hidden="true">#</a></h3><p>数据库是用户需求的映射，设计的初衷要以用户需求为中心，尽量和用户（产品经理或提出需求的人）保持沟通；如果遇到需求不明确，设计表时要事先预留出可变通的字段；未雨绸缪。</p><h3 id="多考虑一些性能和优化" tabindex="-1">多考虑一些性能和优化 <a class="header-anchor" href="#多考虑一些性能和优化" aria-hidden="true">#</a></h3><p>提前判断哪些数据将会比较大，对于这类数据的表结构，设计的时候往往是粗粒度的，以达到用最少的表，最弱的关系去存储大量数据。</p><h3 id="添加必要的-冗余-字段" tabindex="-1">添加必要的（冗余）字段 <a class="header-anchor" href="#添加必要的-冗余-字段" aria-hidden="true">#</a></h3><p>像“创建时间”、“修改时间”、“备注”、“操作用户IP”和一些用于其他需求（如统计）的字段等，在每张表中必须都要有，不是说只有系统中用到的数据才会存到数据库中，<strong>一些冗余字段是为了便于日后维护、分析、拓展而添加</strong>，这点是非常重要的，比如黑客攻击，篡改了数据，我们便就可以根据修改时间和操作用户 IP 来查找定位。</p><h3 id="设计合理的表关联" tabindex="-1">设计合理的表关联 <a class="header-anchor" href="#设计合理的表关联" aria-hidden="true">#</a></h3><p>表与表之间的关系复杂的情况下，建议<strong>采用第三张映射表</strong>来维系两张张复杂表之间的关系，达到降低表之间的直接耦合度。</p><p>若多张表涉及到大数据量的问题，表结构尽量简单，关联也要尽可能避免。</p><h3 id="mysql-设置时间自动生成" tabindex="-1">MySQL 设置时间自动生成 <a class="header-anchor" href="#mysql-设置时间自动生成" aria-hidden="true">#</a></h3><p>字段 <code>ctime</code> 设置默认 <code>CURRENT_TIMESTAMP</code>。</p><p><img src="'+e+'" alt="TIME.png"></p><p>或者直接使用语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IF</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">EXISTS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">CONTENT</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> `</span><span style="color:#82AAFF;">CONTENT</span><span style="color:#A6ACCD;">` (</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">ID</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">CURRENT_TIME</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">timestamp</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">default</span><span style="color:#A6ACCD;"> current_timestamp,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">ID</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">) ENGINE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">InnoDB </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> CHARSET</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">utf8;</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div>',16),t=[o];function r(c,C,A,i,d,D){return n(),a("div",null,t)}const _=s(l,[["render",r]]);export{h as __pageData,_ as default};
