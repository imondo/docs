import{_ as s,c as n,o as a,a as l}from"./app.4cae6a28.js";const u=JSON.parse('{"title":"TypeScript\u57FA\u7840\u7C7B\u578B\u4E0E\u8054\u5408\u7C7B\u578B","description":"","frontmatter":{},"headers":[],"relativePath":"guide/03_TS\u63A2\u7D22/01_\u57FA\u7840\u7C7B\u578B\u4E0E\u8054\u5408\u7C7B\u578B.md","lastUpdated":1669368786000}'),p={name:"guide/03_TS\u63A2\u7D22/01_\u57FA\u7840\u7C7B\u578B\u4E0E\u8054\u5408\u7C7B\u578B.md"},e=l(`<h1 id="typescript\u57FA\u7840\u7C7B\u578B\u4E0E\u8054\u5408\u7C7B\u578B" tabindex="-1">TypeScript\u57FA\u7840\u7C7B\u578B\u4E0E\u8054\u5408\u7C7B\u578B <a class="header-anchor" href="#typescript\u57FA\u7840\u7C7B\u578B\u4E0E\u8054\u5408\u7C7B\u578B" aria-hidden="true">#</a></h1><p><code>TypeScript</code>\u5BF9\u5B83\u7684\u5B66\u4E60\u5176\u5B9E\u662F\u5728\u524D\u5E74\u5C31\u5F00\u59CB\u4E86\uFF0C\u540E\u9762\u4E00\u76F4\u6CA1\u6709\u673A\u4F1A\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\uFF0C\u76F4\u5230\u6700\u8FD1\u6211\u53F8\u5F00\u53D1\u5C0F\u7A0B\u5E8F\uFF0C\u4F7F\u7528\u4EAC\u4E1C\u7684<code>taro</code>\u624D \u4F7F\u7528\u4E86\u3002\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53D1\u73B0\u5BF9\u5176\u57FA\u672C\u77E5\u8BC6\u70B9\u5E76\u6CA1\u6709\u901A\u900F\uFF0C\u6240\u4EE5\u624D\u60F3\u5230\u8981\u8BB0\u5F55\u5B66\u4E60\u7684\u8FC7\u7A0B\u3002</p><p>\u5728\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5B83\u6700\u5927\u7684\u7279\u70B9\u5176\u5B9E\u5C31\u662F<strong>\u6570\u636E\u7C7B\u578B\u7684\u5B9A\u4E49</strong>\u3002</p><h2 id="\u57FA\u7840\u7C7B\u578B\u7684\u5B9A\u4E49" tabindex="-1">\u57FA\u7840\u7C7B\u578B\u7684\u5B9A\u4E49 <a class="header-anchor" href="#\u57FA\u7840\u7C7B\u578B\u7684\u5B9A\u4E49" aria-hidden="true">#</a></h2><ul><li>\u5B57\u7B26\u4E32\u7C7B\u578B</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let name: string = &#39;Mondo&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u5E03\u5C14\u7C7B\u578B</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let isDone: boolean = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u6570\u5B57\u7C7B\u578B</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let dec: number = 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u6570\u7EC4</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let list: number[] = [1, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">or</span></span>
<span class="line"><span style="color:#A6ACCD;">let list: Array&lt;number&gt; = [1, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u5143\u7EC4Tuple</li></ul><p>\u5B9A\u4E49\u4E00\u4E2A\u5DF2\u77E5\u5143\u7D20\u6570\u91CF\u548C\u7C7B\u578B\u7684\u6570\u7EC4\uFF0C\u5404\u5143\u7D20\u7684\u7C7B\u578B\u4E0D\u5FC5\u76F8\u540C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let list: [string, number]</span></span>
<span class="line"><span style="color:#A6ACCD;">list = [&#39;1&#39;, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u679A\u4E3E</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">enum Animal { dog = &#39;hei&#39;, cat, pig }</span></span>
<span class="line"><span style="color:#A6ACCD;">let dor: Animal = Animal.dog</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>Any</li></ul><p>\u5B9A\u4E49\u4E00\u4E2A\u672A\u77E5\u6570\u636E\u7C7B\u578B\u7684\u53D8\u91CF</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let nothing: any = 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>Void</li></ul><p>\u8868\u793A\u6CA1\u6709\u7C7B\u578B\uFF0C\u901A\u5E38\u7528\u4E8E\u4E00\u4E2A\u51FD\u6570\u6CA1\u6709\u4EFB\u4F55\u8FD4\u56DE\u503C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function warnUser(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;This is void&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>Null \u548C Undefined</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0Bnull\u548Cundefined\u662F\u6240\u6709\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u628A\u4ED6\u4EEC\u8D4B\u503C\u7ED9\u4EFB\u4F55\u7C7B\u578B\u7684\u53D8\u91CF</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let u: undefined = undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">let n: null = null</span></span>
<span class="line"><span style="color:#A6ACCD;">let dec: string = null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u7C7B\u578B\u65AD\u8A00</li></ul><p>\u7C7B\u578B\u65AD\u8A00\u597D\u6BD4\u8BED\u8A00\u91CC\u7684\u7C7B\u578B\u8F6C\u6362\uFF0C\u4F46\u662F\u4E0D\u8FDB\u884C\u7279\u6B8A\u7684\u6570\u636E\u68C0\u67E5\u548C\u89E3\u6784</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let dec: string = &#39;Mondo&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let len: number = (&lt;string&gt;dec).length</span></span>
<span class="line"><span style="color:#A6ACCD;">or </span></span>
<span class="line"><span style="color:#A6ACCD;">let len: number = (dec as string).length</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u662F\u6211\u4EEC\u5728\u5B9E\u9645\u8FD0\u7528\u4E2D\u5E38\u89C1\u7684\u51E0\u79CD\u57FA\u672C\u7C7B\u578B\uFF0C\u5F53\u7136\u8FD8\u6709\u5176\u4ED6\u7C7B\u578B\uFF0C\u6BD4\u5982<code>Never</code>\uFF0C<code>Object</code>\u3002</p><h2 id="\u8054\u5408\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u8054\u5408\u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u8054\u5408\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u6570\u636E\u7C7B\u578B\u80AF\u5B9A\u662F\u5404\u79CD\u5404\u6837\u7684\uFF0C<code>TypeScript</code>\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u5404\u79CD\u7EC4\u5408\u7C7B\u578B\u7684\u5B9A\u4E49\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let list = [</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Mondo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: 29</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u662F\u6211\u4EEC\u5E38\u89C1\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u4E0A\u9762\u8BF4\u4E86\u5B9A\u4E49\u6570\u7EC4<code>let list: number[]</code>\uFF0C\u53EF\u662F\u5728\u8FD9\u6761\u6570\u636E\u4E2D\u6570\u7EC4\u91CC\u9762\u5143\u7D20\u662F<code>Object</code>\uFF0C\u8FD9\u91CC\u8981\u4F7F\u7528<code>TypeScript</code>\u7684<code>\u63A5\u53E3</code>\u6765\u5B9A\u4E49</p><h3 id="\u63A5\u53E3" tabindex="-1">\u63A5\u53E3 <a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a></h3><p>\u5173\u952E\u8BCD<code>interface</code>\u6765\u5B9A\u4E49\u4E00\u4E2A<strong>\u63A5\u53E3</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">interface IPerson {</span></span>
<span class="line"><span style="color:#A6ACCD;">    label: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function getPerson(person:IPerson): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(person.label);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = { size: 10, label: &#39;mondo&#39; };</span></span>
<span class="line"><span style="color:#A6ACCD;">getPerson(obj); // mondo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u53EF\u9009\u5C5E\u6027</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">interface Iperson {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cap?: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function getPerson(person:IPerson): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(person.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = { name: &#39;mondo&#39; };</span></span>
<span class="line"><span style="color:#A6ACCD;">getPerson(obj); // mondo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u53EA\u8BFB\u5C5E\u6027</li></ul><p>\u62E5\u6709\u53EA\u8BFB\u5C5E\u6027\u4E0D\u53EF\u6539\u53D8\u5B83\u7684\u503C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">interface Iperson {</span></span>
<span class="line"><span style="color:#A6ACCD;">    readonly name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj: Iperson = { name: &#39;mondo&#39;, age: 29 };</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.name = &#39;Imondo&#39; // error</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u51FD\u6570\u7C7B\u578B</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">interface Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">    (name: string, age: number): boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let getPerson:Person = (name, age) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return age &gt; 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">getPerson(&#39;Mondo&#39;, 29)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u63A5\u53E3\u7684\u65B9\u6CD5\u662F\u5728\u9879\u76EE\u4E2D\u5E38\u7528\u7684<code>Object</code>\u5B9A\u4E49\u3002</p><p>\u56DE\u5230\u6700\u521D\u7684\u5B9A\u4E49<strong>\u6570\u7EC4</strong>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u5B9A\u4E49</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">interface Iperson {</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p><code>TypeScript</code>\u53EA\u662F\u7C97\u6D45\u7684\u4E86\u89E3\u5B83\u7684\u4E00\u4E9B\u7528\u6CD5\uFF0C\u8FD8\u6709\u5F88\u591A\u9AD8\u7EA7\u7684\u7528\u6CD5\u6682\u65F6\u8FD8\u6CA1\u6709\u63A5\u89E6\u5230\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u4E5F\u662F\u672C\u4EBA\u7ED3\u5408\u9879\u76EE\u4E2D\u7528\u5230\u7684\u4E00\u4E9B\u5E38\u89C4\u7528\u6CD5\u800C\u5199\u7684\u603B\u7ED3\u6587\u7AE0\u800C\u5DF2\uFF0C\u611F\u8C22\u5404\u4F4D\u6307\u6B63\u3002</p>`,49),o=[e];function c(t,i,r,C,A,d){return a(),n("div",null,o)}const g=s(p,[["render",c]]);export{u as __pageData,g as default};
