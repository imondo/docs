import{_ as s,c as n,o as a,a as l}from"./app.3f44cf72.js";const g=JSON.parse('{"title":"TypeScript基础类型与联合类型","description":"","frontmatter":{},"headers":[],"relativePath":"guide/03_TS探索/01_基础类型与联合类型.md","lastUpdated":1676614967000}'),e={name:"guide/03_TS探索/01_基础类型与联合类型.md"},p=l(`<h1 id="typescript基础类型与联合类型" tabindex="-1">TypeScript基础类型与联合类型 <a class="header-anchor" href="#typescript基础类型与联合类型" aria-hidden="true">#</a></h1><p><code>TypeScript</code>对它的学习其实是在前年就开始了，后面一直没有机会在项目中使用，直到最近我司开发小程序，使用京东的<code>taro</code>才 使用了。使用的过程中，发现对其基本知识点并没有通透，所以才想到要记录学习的过程。</p><p>在使用的过程中，它最大的特点其实就是<strong>数据类型的定义</strong>。</p><h2 id="基础类型的定义" tabindex="-1">基础类型的定义 <a class="header-anchor" href="#基础类型的定义" aria-hidden="true">#</a></h2><ul><li>字符串类型</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let name: string = &#39;Mondo&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>布尔类型</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let isDone: boolean = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>数字类型</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let dec: number = 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>数组</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let list: number[] = [1, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">or</span></span>
<span class="line"><span style="color:#A6ACCD;">let list: Array&lt;number&gt; = [1, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>元组Tuple</li></ul><p>定义一个已知元素数量和类型的数组，各元素的类型不必相同</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let list: [string, number]</span></span>
<span class="line"><span style="color:#A6ACCD;">list = [&#39;1&#39;, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>枚举</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">enum Animal { dog = &#39;hei&#39;, cat, pig }</span></span>
<span class="line"><span style="color:#A6ACCD;">let dor: Animal = Animal.dog</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>Any</li></ul><p>定义一个未知数据类型的变量</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let nothing: any = 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>Void</li></ul><p>表示没有类型，通常用于一个函数没有任何返回值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function warnUser(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;This is void&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>Null 和 Undefined</li></ul><p>默认情况下null和undefined是所有类型的子类型，你可以把他们赋值给任何类型的变量</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let u: undefined = undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">let n: null = null</span></span>
<span class="line"><span style="color:#A6ACCD;">let dec: string = null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>类型断言</li></ul><p>类型断言好比语言里的类型转换，但是不进行特殊的数据检查和解构</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let dec: string = &#39;Mondo&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let len: number = (&lt;string&gt;dec).length</span></span>
<span class="line"><span style="color:#A6ACCD;">or </span></span>
<span class="line"><span style="color:#A6ACCD;">let len: number = (dec as string).length</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上是我们在实际运用中常见的几种基本类型，当然还有其他类型，比如<code>Never</code>，<code>Object</code>。</p><h2 id="联合类型定义" tabindex="-1">联合类型定义 <a class="header-anchor" href="#联合类型定义" aria-hidden="true">#</a></h2><p>实际项目中，数据类型肯定是各种各样的，<code>TypeScript</code>为我们提供了各种组合类型的定义。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let list = [</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Mondo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: 29</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上是我们常见的数据格式，上面说了定义数组<code>let list: number[]</code>，可是在这条数据中数组里面元素是<code>Object</code>，这里要使用<code>TypeScript</code>的<code>接口</code>来定义</p><h3 id="接口" tabindex="-1">接口 <a class="header-anchor" href="#接口" aria-hidden="true">#</a></h3><p>关键词<code>interface</code>来定义一个<strong>接口</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">interface IPerson {</span></span>
<span class="line"><span style="color:#A6ACCD;">    label: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function getPerson(person:IPerson): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(person.label);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = { size: 10, label: &#39;mondo&#39; };</span></span>
<span class="line"><span style="color:#A6ACCD;">getPerson(obj); // mondo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>可选属性</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">interface Iperson {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cap?: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function getPerson(person:IPerson): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(person.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = { name: &#39;mondo&#39; };</span></span>
<span class="line"><span style="color:#A6ACCD;">getPerson(obj); // mondo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>只读属性</li></ul><p>拥有只读属性不可改变它的值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">interface Iperson {</span></span>
<span class="line"><span style="color:#A6ACCD;">    readonly name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj: Iperson = { name: &#39;mondo&#39;, age: 29 };</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.name = &#39;Imondo&#39; // error</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>函数类型</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">interface Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">    (name: string, age: number): boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let getPerson:Person = (name, age) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return age &gt; 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">getPerson(&#39;Mondo&#39;, 29)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上接口的方法是在项目中常用的<code>Object</code>定义。</p><p>回到最初的定义<strong>数组</strong>，我们可以这么定义</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">interface Iperson {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    age?: number|string;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let list: Iperson[] = [</span></span>
<span class="line"><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Mondo&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;"> },</span></span>
<span class="line"><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Imondo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: 29</span></span>
<span class="line"><span style="color:#A6ACCD;"> },</span></span>
<span class="line"><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;IMondo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: &#39;29&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p><code>TypeScript</code>只是粗浅的了解它的一些用法，还有很多高级的用法暂时还没有接触到，这篇文章也是本人结合项目中用到的一些常规用法而写的总结文章而已，感谢各位指正。</p>`,49),o=[p];function t(c,i,r,C,d,A){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{g as __pageData,u as default};
