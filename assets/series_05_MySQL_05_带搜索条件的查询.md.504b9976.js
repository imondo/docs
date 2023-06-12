import{_ as s,o as a,c as n,O as l}from"./chunks/framework.7fa419f1.js";const F=JSON.parse('{"title":"带搜索条件的查询","description":"","frontmatter":{},"headers":[],"relativePath":"series/05_MySQL/05_带搜索条件的查询.md","filePath":"series/05_MySQL/05_带搜索条件的查询.md","lastUpdated":1686534760000}'),p={name:"series/05_MySQL/05_带搜索条件的查询.md"},o=l(`<h1 id="带搜索条件的查询" tabindex="-1">带搜索条件的查询 <a class="header-anchor" href="#带搜索条件的查询" aria-label="Permalink to &quot;带搜索条件的查询&quot;">​</a></h1><h2 id="简单的搜素条件" tabindex="-1">简单的搜素条件 <a class="header-anchor" href="#简单的搜素条件" aria-label="Permalink to &quot;简单的搜素条件&quot;">​</a></h2><p>带上 <code>where</code> 语句</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">,major </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">范剑</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+--------+-----------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">   | major           |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+--------+-----------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180105</span><span style="color:#A6ACCD;"> | 范剑   | 飞行器设计      |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+--------+-----------------+</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">row</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>搜索条件 <code>name=</code>中的 <code>=</code> 称为比较操作符</p><table><thead><tr><th>操作符</th><th>示例</th><th>描述</th></tr></thead><tbody><tr><td>=</td><td>a = b</td><td>a等于b</td></tr><tr><td>&lt;&gt;或者!=</td><td>a &lt;&gt; b</td><td>a不等于b</td></tr><tr><td>&lt;</td><td>a &lt; b</td><td>a小于b</td></tr><tr><td>&lt;=</td><td>a &lt;= b</td><td>a小于或等于b</td></tr><tr><td>&gt;</td><td>a &gt; b</td><td>a大于b</td></tr><tr><td>&gt;=</td><td>a &gt;= b</td><td>a大于或等于b</td></tr><tr><td>BETWEEN</td><td>a BETWEEN b AND c</td><td>满足 b &lt;= a &lt;= c</td></tr><tr><td>NOT BETWEEN</td><td>a NOT BETWEEN b AND c</td><td>不满足 b &lt;= a &lt;= c</td></tr></tbody></table><p>查询格式</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> 列名 操作符 条件</span></span></code></pre></div><p>查询学号在 20180102~20180104 间的学生信息</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">,major </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">between</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+--------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">      | major                    |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+--------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 杜琦燕    | 计算机科学与工程         |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180103</span><span style="color:#A6ACCD;"> | 范统      | 软件工程                 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;"> | 史珍香    | 软件工程                 |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+--------------------------+</span></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="匹配列表中的元素" tabindex="-1">匹配列表中的元素 <a class="header-anchor" href="#匹配列表中的元素" aria-label="Permalink to &quot;匹配列表中的元素&quot;">​</a></h2><p>有时候搜索条件中指定的匹配值并不是单个值，而是一个列表，只要匹配到列表中的某一项就算匹配成功，这种情况可以使用 <code>IN</code> 操作符</p><table><thead><tr><th>操作符</th><th>示例</th><th>描述</th></tr></thead><tbody><tr><td>IN</td><td>a IN (b1, b2, ...)</td><td>a是b1, b2, ... 中的某一个</td></tr><tr><td>NOT IN</td><td>a NOT IN (b1, b2, ...)</td><td>a不是b1, b2, ... 中的任意一个</td></tr></tbody></table><p>查询格式</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> 列名 </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> (条件，条件 ...)</span></span></code></pre></div><p>想查询软件工程和飞行器设计两个课程的学生</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">,major </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;">  major </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">软件工程</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">飞行器设计</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+-----------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">      | major           |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+-----------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180103</span><span style="color:#A6ACCD;"> | 范统      | 软件工程        |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;"> | 史珍香    | 软件工程        |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180105</span><span style="color:#A6ACCD;"> | 范剑      | 飞行器设计      |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+-----------------+</span></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="匹配-null-值" tabindex="-1">匹配 null 值 <a class="header-anchor" href="#匹配-null-值" aria-label="Permalink to &quot;匹配 null 值&quot;">​</a></h2><table><thead><tr><th>操作符</th><th>示例</th><th>描述</th></tr></thead><tbody><tr><td>IS NULL</td><td>a IS NULL</td><td>a的值是NULL</td></tr><tr><td>IS NOT NULL</td><td>a IS NOT NULL</td><td>a的值不是NULL</td></tr></tbody></table><p>查询格式</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">列名 </span><span style="color:#F78C6C;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">,major </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;">  major </span><span style="color:#F78C6C;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">Empty</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="多个查询条件组合" tabindex="-1">多个查询条件组合 <a class="header-anchor" href="#多个查询条件组合" aria-label="Permalink to &quot;多个查询条件组合&quot;">​</a></h2><h3 id="and" tabindex="-1">AND <a class="header-anchor" href="#and" aria-label="Permalink to &quot;AND&quot;">​</a></h3><p>通过 and 操作符连接多个查询条件，从student_score表中找出科目为&#39;母猪的产后护理&#39;并且成绩大于75分的记录</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">母猪的产后护理</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">and</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">75</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">               | score |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180101</span><span style="color:#A6ACCD;"> | 母猪的产后护理        |    </span><span style="color:#F78C6C;">78</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 母猪的产后护理        |   </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------+-------+</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="or" tabindex="-1">OR <a class="header-anchor" href="#or" aria-label="Permalink to &quot;OR&quot;">​</a></h3><p>查询分数大于95 或者 小于55 的科目</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">,score </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;">95</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">or</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">                     | score |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 母猪的产后护理              |   </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">98</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">46</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="更复杂的搜索条件" tabindex="-1">更复杂的搜索条件 <a class="header-anchor" href="#更复杂的搜索条件" aria-label="Permalink to &quot;更复杂的搜索条件&quot;">​</a></h3><p>如果我们需要在某个查询中指定很多的搜索条件，比方说我们想从student_score表中找出课程为&#39;论萨达姆的战争准备&#39;，并且成绩大于95分或者小于55分的记录</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">, score </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;">95</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">or</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">论萨达姆的战争准备</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">                     | score |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 母猪的产后护理              |   </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">98</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">46</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>虽然指定了科目，但还是在结果集中看到了母猪的产后处理，这是因为 <strong>and 操作符优先级高于 or 操作符</strong>，也就是说在判断某条记录是否符合条件时会先检测AND操作符两边的搜索条件</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">score </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">95</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">OR</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">论萨达姆的战争准备</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>上面这条语句被看作是</p><ul><li>score &gt; 95</li><li>score &lt; 55 AND subject = &#39;论萨达姆的战争准备&#39;</li></ul><p>为了避免这种问题，可以在条件中加入 <code>()</code></p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">, score </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_score </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> (score</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;">95</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">or</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">论萨达姆的战争准备</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">                     | score |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">98</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;"> | 论萨达姆的战争准备          |    </span><span style="color:#F78C6C;">46</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------------------------+-------+</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="通配符" tabindex="-1">通配符 <a class="header-anchor" href="#通配符" aria-label="Permalink to &quot;通配符&quot;">​</a></h2><p>也可以叫做模糊查询</p><table><thead><tr><th>操作符</th><th>示例</th><th>描述</th></tr></thead><tbody><tr><td>LIKE</td><td>a LIKE b</td><td>a匹配b</td></tr><tr><td>NOT LIKE</td><td>a NOT LIKE b</td><td>a不匹配b</td></tr></tbody></table><p>支持的通配符</p><ul><li>% 代表任意一个字符串</li></ul><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">,major </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">杜%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+--------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">      | major                    |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+--------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180101</span><span style="color:#A6ACCD;"> | 杜子腾    | 计算机科学与工程         |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180102</span><span style="color:#A6ACCD;"> | 杜琦燕    | 计算机科学与工程         |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+--------------------------+</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">,major </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%香%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+--------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">      | major        |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+--------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180104</span><span style="color:#A6ACCD;"> | 史珍香    | 软件工程     |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+-----------+--------------+</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">row</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ul><li>_ 代表任意一个字符，有时知道查询的条件名长度</li></ul><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">,major </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">范_</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+--------+-----------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">   | </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">   | major           |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+--------+-----------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180103</span><span style="color:#A6ACCD;"> | 范统   | 软件工程        |</span></span>
<span class="line"><span style="color:#A6ACCD;">| </span><span style="color:#F78C6C;">20180105</span><span style="color:#A6ACCD;"> | 范剑   | 飞行器设计      |</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">----------+--------+-----------------+</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><strong>注意：</strong></p><ul><li>LIKE 或者 NOT LIKE 操作符只用于字符串匹配</li><li>通配符不能代表NULL，如果需要匹配NULL的话，需要使用 IS NULL 或者 IS NOT NULL。</li></ul><h3 id="转义通配符" tabindex="-1">转义通配符 <a class="header-anchor" href="#转义通配符" aria-label="Permalink to &quot;转义通配符&quot;">​</a></h3><p>如果待匹配的条件中本身包含了 <code>%</code> 和 <code>_</code> 字符，可以在前面加上 <code>\\</code> 来转义</p><ul><li>&#39;%&#39; 代表普通字符 &#39;%&#39;</li><li>&#39;_&#39; 代表普通字符 &#39;_&#39;</li></ul><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, id_number, major </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student_info </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">LIKE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">范\\_</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">Empty</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> sec)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,53),e=[o];function t(C,c,r,y,A,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
