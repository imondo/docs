import{_ as s,c as n,o as a,a as p}from"./app.0561f98a.js";const i=JSON.parse('{"title":"\u7B80\u5355\u7684\u4E00\u4E2AVueStore","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/01_Vue/07_\u7B80\u5355\u7684\u4E00\u4E2AStore.md","lastUpdated":1668749260000}'),l={name:"guide/04_FRONTEND/01_Vue/07_\u7B80\u5355\u7684\u4E00\u4E2AStore.md"},o=p(`<h1 id="\u7B80\u5355\u7684\u4E00\u4E2Avuestore" tabindex="-1">\u7B80\u5355\u7684\u4E00\u4E2AVueStore <a class="header-anchor" href="#\u7B80\u5355\u7684\u4E00\u4E2Avuestore" aria-hidden="true">#</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;">// this.$store.dispatch</span></span>
<span class="line"><span style="color:#676E95;">// this.$store.commit(&#39;fn&#39;, &#39;&#39;)</span></span>
<span class="line"><span style="color:#676E95;">// this.$store.state</span></span>
<span class="line"><span style="color:#676E95;">// const num = {</span></span>
<span class="line"><span style="color:#676E95;">//   state: {},</span></span>
<span class="line"><span style="color:#676E95;">//   mutations: {</span></span>
<span class="line"><span style="color:#676E95;">//     add: (state, num) =&gt; {</span></span>
<span class="line"><span style="color:#676E95;">//       state.num = num</span></span>
<span class="line"><span style="color:#676E95;">//     }</span></span>
<span class="line"><span style="color:#676E95;">//   },</span></span>
<span class="line"><span style="color:#676E95;">//   actions: {</span></span>
<span class="line"><span style="color:#676E95;">//     add({ commit, state }, a) {}</span></span>
<span class="line"><span style="color:#676E95;">//   }</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// new Vuex.Store({</span></span>
<span class="line"><span style="color:#676E95;">//   state: {}</span></span>
<span class="line"><span style="color:#676E95;">// })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> Vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Store</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">state</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">mutations</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mutations</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">actions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">actions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">mutations</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">](</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dispatch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">actions</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">](</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      commit</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      state</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_Vue</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Vue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_Vue</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6267\u884Cinstall\u65F6\u6DF7\u5165mixin</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mixin</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    beforeCreate </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">store</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$store</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">store</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Store</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> install </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,r,y,F,D,A){return a(),n("div",null,e)}const _=s(l,[["render",t]]);export{i as __pageData,_ as default};
