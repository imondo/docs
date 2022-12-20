import{_ as s,c as n,o as a,a as l}from"./app.eb88d1d6.js";const i=JSON.parse('{"title":"子查询","description":"","frontmatter":{},"headers":[],"relativePath":"series/05_MySQL/08_子查询.md","lastUpdated":1671517348000}'),p={name:"series/05_MySQL/08_子查询.md"},o=l(`<h1 id="子查询" tabindex="-1">子查询 <a class="header-anchor" href="#子查询" aria-hidden="true">#</a></h1><p>多表查询，多个表查询语句</p><h2 id="标量子查询" tabindex="-1">标量子查询 <a class="header-anchor" href="#标量子查询" aria-hidden="true">#</a></h2><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">杜琦燕</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">                     | score |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 母猪的产后护理              |   </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">98</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>()</code> 保住的语句就是子查询或者说是内层查询，外面的叫外层查询；</li><li>在一个查询语句中需要用到更多的表的话，那么在一个子查询中可以继续嵌套另一个子查询</li><li>在执行查询语句时，将按照<strong>从内到外的顺序</strong>依次执行这些查询</li><li>子查询结果只有一个值，叫标量子查询</li></ul><p>可以使用类名</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">范剑</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">学号</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| 学号     |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180105</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">row</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>也可以使用表达式；学号大于杜琦燕的学生成绩</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">杜琦燕</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">                     | score |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180103</span><span style="color:#A6ACCD;"> | 母猪的产后护理              |    </span><span style="color:#F78C6C;">59</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180103</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">61</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;"> | 母猪的产后护理              |    </span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">46</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="列子查询" tabindex="-1">列子查询 <a class="header-anchor" href="#列子查询" aria-hidden="true">#</a></h2><p>查询计算机工程专业的学生成绩，需要从 <code>stundent_info</code> 表中查询到学生 <code>number</code>，再在 <code>student_score</code>表中查询中成绩</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;">  major </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">计算机%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">                     | score |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180101</span><span style="color:#A6ACCD;"> | 母猪的产后护理              |    </span><span style="color:#F78C6C;">78</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180101</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">88</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 母猪的产后护理              |   </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">98</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>子查询结果集包含多个列结果，这个叫做列子查询，使用 <code>in</code> 操作符匹配列表</p><h2 id="行子查询" tabindex="-1">行子查询 <a class="header-anchor" href="#行子查询" aria-hidden="true">#</a></h2><p>只要子查询的结果集中最多<strong>只包含一条记录</strong>，而且这条记录中有超过一个列的数据（如果该条记录只包含一个列的话，该子查询就成了标量子查询），那么这个子查询就可以被称之为行子查询</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">母猪的产后护理</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">limit</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">               | score |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;"> | 母猪的产后护理        |    </span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">row</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="表子查询" tabindex="-1">表子查询 <a class="header-anchor" href="#表子查询" aria-hidden="true">#</a></h2><p>如果子查询结果集中包含多行多列，那么这个子查询也可以被称之为表子查询</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">母猪的产后护理</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> major </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">计算机%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">               | score |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180101</span><span style="color:#A6ACCD;"> | 母猪的产后护理        |    </span><span style="color:#F78C6C;">78</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 母猪的产后护理        |   </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="exists-和-not-exists-查询" tabindex="-1">EXISTS 和 NOT EXISTS 查询 <a class="header-anchor" href="#exists-和-not-exists-查询" aria-hidden="true">#</a></h2><p>有时候外层查询并不关心子查询中的结果是什么，而只关心子查询的结果集是不是为空集，这时可以用到下边这两个操作符：</p><table><thead><tr><th>操作符</th><th>示例</th><th>描述</th></tr></thead><tbody><tr><td>EXISTS</td><td>EXISTS (SELECT ...)</td><td>当子查询结果集不是空集时表达式为真</td></tr><tr><td>NOT EXISTS</td><td>NOT EXISTS (SELECT ...)</td><td>当子查询结果集是空集时表达式为真</td></tr></tbody></table><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">exists</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2018659</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#F78C6C;">Empty</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>子查询查询不到，所以外查询是不用再次去查询了，直接返回空</p><h2 id="不相关和相关子查询" tabindex="-1">不相关和相关子查询 <a class="header-anchor" href="#不相关和相关子查询" aria-hidden="true">#</a></h2><p>上面的子查询都可以单独执行，和外层查询没有关联，这种叫做不相关子查询；而有时候子查询中用到了外查询的值，这种就不能单独执行的语句，就是相关子查询。</p><p>查询学生的基本信息，但是必须是在 student_score 表中存在成绩的</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, major </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">exists</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> student_score.number </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> student_info.number);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------+--------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">      | major                    |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------+--------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180101</span><span style="color:#A6ACCD;"> | 杜子腾    | 计算机科学与工程         |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 杜琦燕    | 计算机科学与工程         |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180103</span><span style="color:#A6ACCD;"> | 范统      | 软件工程                 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;"> | 史珍香    | 软件工程                 |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------+--------------------------+</span></span>
<span class="line"><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="对同一个表的子查询" tabindex="-1">对同一个表的子查询 <a class="header-anchor" href="#对同一个表的子查询" aria-hidden="true">#</a></h2><p>在 <code>student_score</code>表的母猪的产后护理这门课的成绩中，有哪些超过了平均分的记录</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%护理</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">and</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">avg</span><span style="color:#A6ACCD;">(score);</span></span>
<span class="line"><span style="color:#A6ACCD;">ERROR </span><span style="color:#F78C6C;">1111</span><span style="color:#A6ACCD;"> (HY000): Invalid </span><span style="color:#F78C6C;">use</span><span style="color:#A6ACCD;"> of group </span><span style="color:#F78C6C;">function</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>我们可以看到报错了~因为聚集函数是用来对分组做数据统计的（如果没有 GROUP BY 语句那么意味着只有一个分组），而 WHERE 子句是以记录为单位来执行过滤操作的，在 WHERE 子句执行完成之后才会得到分组，也就是说：<strong>聚集函数不能放到WHERE子句中</strong>！！！</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%护理%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">and</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">avg</span><span style="color:#A6ACCD;">(score) </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%护理</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">               | score |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180101</span><span style="color:#A6ACCD;"> | 母猪的产后护理        |    </span><span style="color:#F78C6C;">78</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 母猪的产后护理        |   </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>我们使用子查询先统计出了母猪的产后护理这门课的平均分，然后再到外层查询中使用这个平均分组成的表达式来作为搜索条件去查找大于平均分的记录。</p>`,34),e=[o];function C(t,c,r,y,A,D){return a(),n("div",null,e)}const d=s(p,[["render",C]]);export{i as __pageData,d as default};
