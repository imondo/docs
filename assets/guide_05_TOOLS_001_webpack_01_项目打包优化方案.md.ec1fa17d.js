import{_ as s,c as n,o as a,a as l}from"./app.0561f98a.js";const i=JSON.parse('{"title":"webpack\u6253\u5305\u4F18\u5316\u65B9\u6848","description":"","frontmatter":{},"headers":[],"relativePath":"guide/05_TOOLS/001_webpack/01_\u9879\u76EE\u6253\u5305\u4F18\u5316\u65B9\u6848.md","lastUpdated":1668749260000}'),p={name:"guide/05_TOOLS/001_webpack/01_\u9879\u76EE\u6253\u5305\u4F18\u5316\u65B9\u6848.md"},o=l(`<h1 id="webpack\u6253\u5305\u4F18\u5316\u65B9\u6848" tabindex="-1">webpack\u6253\u5305\u4F18\u5316\u65B9\u6848 <a class="header-anchor" href="#webpack\u6253\u5305\u4F18\u5316\u65B9\u6848" aria-hidden="true">#</a></h1><p>\u7531\u4E8E\u65B0\u5EFA\u9879\u76EE\u53D1\u7248\u6253\u5305\u65F6\u95F4\u5927\u6982\u9700\u8981<strong>30\u5206\u949F</strong>\uFF0C\u53D1\u7248\u65F6<strong>\u4E25\u91CD</strong>\u62D6\u6162<strong>\u4E0B\u73ED</strong>\u65F6\u95F4\uFF0C\u6240\u4EE5\u7279\u610F\u67E5\u770B\u4E86\u76F8\u5173\u6587\u6863\u6765\u4F18\u5316\u6253\u5305\u901F\u5EA6\uFF0C\u4E89\u53D6\u65E9\u70B9\u4E0B\u73ED\uFF0C^_^\u3002</p><h2 id="\u5206\u6790\u6253\u5305\u6587\u4EF6" tabindex="-1">\u5206\u6790\u6253\u5305\u6587\u4EF6 <a class="header-anchor" href="#\u5206\u6790\u6253\u5305\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u8981\u4F18\u5316\uFF0C\u5148\u5206\u6790\u3002\u6211\u4EEC\u5148\u8981\u77E5\u9053\u5230\u5E95\u662F\u54EA\u91CC\u62D6\u6162\u6211\u4EEC\u7684\u6253\u5305\u901F\u5EA6\u5462\uFF1F</p><h3 id="\u6253\u5305\u540E\u751F\u6210\u6587\u4EF6\u5206\u6790" tabindex="-1">\u6253\u5305\u540E\u751F\u6210\u6587\u4EF6\u5206\u6790 <a class="header-anchor" href="#\u6253\u5305\u540E\u751F\u6210\u6587\u4EF6\u5206\u6790" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u5229\u7528<code>webpack-bundle-analyzer</code>\u63D2\u4EF6\u6765\u5206\u6790\u6211\u4EEC\u6253\u5305\u540E\u751F\u6210\u7684\u6587\u4EF6</p><ul><li>\u5B89\u88C5</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm i webpack-bundle-analyzer -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u4F7F\u7528</li></ul><p>\u4FEE\u6539<code>webpack.prod.conf.js</code>\u6587\u4EF6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const BundleAnalyzerPlugin = require(&#39;webpack-bundle-analyzer&#39;).BundleAnalyzerPlugin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u6253\u5F00localhost:8080</span></span>
<span class="line"><span style="color:#A6ACCD;">webpackConfig.plugins.push(</span></span>
<span class="line"><span style="color:#A6ACCD;">  new BundleAnalyzerPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">    analyzerPort: 8080,</span></span>
<span class="line"><span style="color:#A6ACCD;">    generateStatsFile: false</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><a href="https://imgchr.com/i/1hGIrn" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1hGIrn.md.png" alt="1hGIrn.md.png"></a></p><p>\u901A\u8FC7\u56FE\u7247\u53EF\u4EE5\u770B\u5230\u6253\u5305\u540E\u6587\u4EF6\u7684\u5177\u4F53\u4FE1\u606F</p><h3 id="\u6253\u5305\u8FDB\u5EA6\u6761\u663E\u793A-\u53EF\u4EE5\u67E5\u770B\u5230\u6253\u5305\u8FDB\u5EA6\u767E\u5206\u6BD4" tabindex="-1">\u6253\u5305\u8FDB\u5EA6\u6761\u663E\u793A\uFF0C\u53EF\u4EE5\u67E5\u770B\u5230\u6253\u5305\u8FDB\u5EA6\u767E\u5206\u6BD4 <a class="header-anchor" href="#\u6253\u5305\u8FDB\u5EA6\u6761\u663E\u793A-\u53EF\u4EE5\u67E5\u770B\u5230\u6253\u5305\u8FDB\u5EA6\u767E\u5206\u6BD4" aria-hidden="true">#</a></h3><p><code>simple-progress-webpack-plugin</code>\u53EF\u4EE5\u663E\u793A\u6253\u5305\u767E\u5206\u6BD4</p><ul><li>\u5B89\u88C5</li></ul><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">npm</span><span style="color:#A6ACCD;"> i simple-progress-webpack-plugin -D</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4F7F\u7528</li></ul><p>\u4FEE\u6539<code>webpack.prod.conf.js</code>\u6587\u4EF6</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> SimpleProgressWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">simple-progress-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> )</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SimpleProgressWebpackPlugin</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre></div><p>\u6548\u679C\u5982\u4E0B\uFF1A</p><p><a href="https://imgchr.com/i/1hG5Ks" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1hG5Ks.md.png" alt="1hG5Ks.md.png"></a></p><h2 id="\u8D44\u6E90\u4E0E\u4F9D\u8D56\u5305\u7684\u63A7\u5236" tabindex="-1">\u8D44\u6E90\u4E0E\u4F9D\u8D56\u5305\u7684\u63A7\u5236 <a class="header-anchor" href="#\u8D44\u6E90\u4E0E\u4F9D\u8D56\u5305\u7684\u63A7\u5236" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E0A\u9762\u8FDB\u5EA6\u53EF\u4EE5\u770B\u5230\uFF0C\u6253\u5305\u8FC7\u7A0B\u4E2D\uFF0C\u5361\u987F\u5728\u538B\u7F29\u7684\u5730\u65B9\u8FC7\u957F\uFF0C\u5F53\u9879\u76EE\u8D8A\u6765\u8D8A\u81C3\u80BF\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u8981\u9700\u8981\u5BF9\u9879\u76EE\u9759\u6001\u8D44\u6E90\u4EE5\u53CA\u4F9D\u8D56\u5305\u8FDB\u884C\u6574\u7406\uFF0C</p><ul><li><p>\u56FE\u7247\u8FC7\u5927\u7684\u53EF\u4EE5\u538B\u7F29\uFF0C\u8FD9\u91CC\u63A8\u8350\u4E00\u4E2A\u8FD8\u4E0D\u9519\u7684\u538B\u7F29<a href="https://www.yasuotu.com/" target="_blank" rel="noreferrer">\u94FE\u63A5</a></p></li><li><p>\u9879\u76EE\u4E2D\u6CA1\u6709\u4F7F\u7528\u7684\u4F9D\u8D56\u53EF\u4EE5\u5220\u9664\uFF0C\u53EF\u4EE5\u6309\u9700\u5F15\u7528\u7684\u4F9D\u8D56\uFF0C\u6309\u9700\u5F15\u7528</p></li></ul><p>\u9879\u76EE\u91CC\u9762\u4F7F\u7528<code>ElementUI</code>\u548C<code>Echarts</code>\u90FD\u662F\u5168\u90E8\u5F15\u7528\u6302\u5728<code>Vue.prototype</code>\u4E0A\uFF0C\u73B0\u90FD\u6539\u4E3A\u6309\u9700\u5F15\u7528\u3002</p><h2 id="\u51CF\u5C11\u6587\u4EF6\u641C\u7D22\u8303\u56F4" tabindex="-1">\u51CF\u5C11\u6587\u4EF6\u641C\u7D22\u8303\u56F4 <a class="header-anchor" href="#\u51CF\u5C11\u6587\u4EF6\u641C\u7D22\u8303\u56F4" aria-hidden="true">#</a></h2><ul><li>\u8BBE\u7F6E<code>resolve.alias</code>\u5B57\u6BB5\uFF0C\u907F\u514D\u6253\u5305\u65F6\u5982\u679C\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u8BBF\u95EE\u6216\u7740<code>import</code>\u6587\u4EF6\u65F6\u4F1A\u5C42\u5C42\u53BB\u67E5\u627E\u89E3\u6790\u6587\u4EF6</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">alias</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5408\u7406\u914D\u7F6E<code>extensions</code>\u6269\u5C55\u540D</li></ul><p><code>resolve.extensions</code>\u80FD\u591F\u81EA\u52A8\u89E3\u6790\u786E\u5B9A\u7684\u6269\u5C55\uFF0C\u4F46\u662F\u5982\u679C<code>extensions</code>\u6269\u5C55\u540D\u8FC7\u591A\uFF0C\u4F1A\u5BFC\u81F4\u89E3\u6790\u8FC7\u7A0B\u8FC7\u591A\uFF0C\u6240\u4EE5\u6211\u4EEC\u8981\u5408\u7406\u914D\u7F6E\u6269\u5C55\u540D\uFF0C\u4E0D\u8981\u8FC7\u591A\u914D\u7F6E\u6269\u5C55\u540D\uFF0C\u9879\u76EE\u5F15\u7528\u591A\u7684\u6587\u4EF6\uFF0C\u6269\u5C55\u540D\u653E\u5728\u524D\u9762\uFF0C\u6211\u53F8\u9879\u76EE\u4E2D\u591A\u7684\u662F<code>vue</code>\uFF0C<code>js</code>\u6587\u4EF6\uFF0C\u53EF\u4EE5\u53EA\u5F15\u7528\u8FD9\u4E24\u79CD\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">extensions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li><code>loader</code>\u9884\u5904\u7406\u6587\u4EF6\u589E\u52A0<code>include</code>\u5339\u914D\u7279\u5B9A\u6761\u4EF6</li></ul><p>\u9884\u5904\u7406\u5404\u79CD\u6587\u4EF6\u65F6\u6307\u5B9A\u5339\u914D\u76EE\u5F55\u540E\uFF0C<code>webpack</code>\u89E3\u6790\u6587\u4EF6\u65F6\u5C31\u4E0D\u4F1A\u5FAA\u73AF\u67E5\u627E\u5176\u4ED6\u76EE\u5F55\uFF0C\u52A0\u5FEB\u89E3\u6790\u901F\u5EA6\u3002</p><h2 id="happypack\u591A\u7EBF\u7A0B\u6267\u884C" tabindex="-1"><code>happypack</code>\u591A\u7EBF\u7A0B\u6267\u884C <a class="header-anchor" href="#happypack\u591A\u7EBF\u7A0B\u6267\u884C" aria-hidden="true">#</a></h2><p><code>webpack</code>\u6267\u884C\u9884\u5904\u7406\u6587\u4EF6\u65F6\u5355\u7EBF\u7A0B\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<a href="https://github.com/amireh/happypack" target="_blank" rel="noreferrer">happypack</a>\u6765\u591A\u7EBF\u7A0B\u5904\u7406\u6587\u4EF6\u3002</p><ul><li>\u5B89\u88C5</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm i happypack  -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u4F7F\u7528</li></ul><p>\u4FEE\u6539<code>webpack.base.js</code>\u6587\u4EF6</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> happyThreadPool </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> HappyPack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ThreadPool</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cpus</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      loader</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">happypack/loader?id=babel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u539F\u59CBloader\u66FF\u6362\u6210\`happypack/loader\`</span></span>
<span class="line"><span style="color:#F07178;">      include</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#FFCB6B;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HappyPack</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// id\u6807\u8BC6 \u9700\u8981\u5904\u7406\u7684loader</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">babel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// loader\u914D\u7F6E\u548C\u539F\u59CB\u914D\u7F6E\u4E00\u6837</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loaders</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">babel-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">presets</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">es2015</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">cacheDirectory</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">threadPool</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> happyThreadPool</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="babel-plugin-dynamic-import-node\u5F02\u6B65\u52A0\u8F7D" tabindex="-1"><code>babel-plugin-dynamic-import-node</code>\u5F02\u6B65\u52A0\u8F7D <a class="header-anchor" href="#babel-plugin-dynamic-import-node\u5F02\u6B65\u52A0\u8F7D" aria-hidden="true">#</a></h2><p><code>babel-plugin-dynamic-import-node</code>\u63D2\u4EF6\u662F\u4F7F<code>import()</code> \u66FF\u6362\u6210 <code>require</code> \u7F16\u8BD1</p><ul><li>\u5B89\u88C5</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm i babel-plugin-dynamic-import-node -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u4F7F\u7528</li></ul><p>\u4FEE\u6539<code>.babelrc</code> \u6587\u4EF6</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">env</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">development</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">plugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dynamic-import-node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">production</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">plugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dynamic-import-node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u6CE8\u610F</strong>\uFF1A\u4F7F\u7528\u63D2\u4EF6<code>build</code>\u540E\u6CA1\u6709<code>chunk files</code>\u6587\u4EF6\u3002</p><h2 id="dllplugin\u5206\u5305" tabindex="-1"><code>DllPlugin</code>\u5206\u5305 <a class="header-anchor" href="#dllplugin\u5206\u5305" aria-hidden="true">#</a></h2><p>\u901A\u8FC7<code>DllPlugin</code>\u63D2\u4EF6\u5206\u79BB\u51FA\u7B2C\u4E09\u65B9\u5305</p><ul><li>\u65B0\u5EFA<code>webpack.dll.conf.js</code></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> webpack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CleanWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">clean-webpack-plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">vendor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vuex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">axios</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-ui</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">echarts</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[name]_dll_[hash:6].js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u4EA7\u751F\u7684\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../static/dll</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">library</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[name]_dll_[hash:6]</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CleanWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../static/dll</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">dry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u542F\u7528\u5220\u9664\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> webpack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DllPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[name]_dll_[hash:6]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../static/dll</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[name].dll.manifest.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4FEE\u6539<code>webpack.prod.conf.js</code></li></ul><p>\u4F7F\u7528<code>add-asset-html-webpack-plugin</code>\u52A8\u6001\u6DFB\u52A0<code>dll.js</code>\u5230<code>html</code>\u3002</p><p><strong>\u9700\u8981\u6CE8\u610F</strong></p><ol><li><p><code>add-asset-html-webpack-plugin</code>\u8981\u5728<code>HtmlWebpackPlugin</code>\u540E\u5F15\u5165\uFF1B</p></li><li><p><code>html-webpack-plugin</code>\u4F9D\u8D56\u5305\u7248\u672C<code>4.0.0-alpha</code>\u4F1A\u51FA\u4E2A\u95EE\u9898\uFF0C\u6DFB\u52A0\u4E0A\u53BB\u7684\u8DEF\u5F84\u4F1A\u53D8\u6210<code>undefined</code>\u9700\u8981\u662F<strong>3.2.0</strong>\u7248\u672C</p></li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> AddAssetHtmlPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">add-asset-html-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u63D2\u5165dll json</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> webpack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DllReferencePlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">context</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(__dirname)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">manifest</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../static/dll/vendor.dll.manifest.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HtmlWebpackPlugin</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u63D2\u5165 dll js</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AddAssetHtmlPlugin</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">publicPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">build</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">assetsPublicPath </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">static/dll/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u6CE8\u5165\u5230html\u4E2D\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">outputPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">static/dll/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u8F93\u51FA\u6587\u4EF6\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filepath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">static/dll/*.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u6587\u4EF6\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">includeSourcemap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">typeOfAsset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u7ECF\u8FC7\u4EE5\u4E0A\u4F18\u5316\uFF0C\u6253\u5305\u4ECE<strong>30</strong>\u5206\u949F\uFF0C\u5230<strong>2</strong>\u5206\u949F\u4E0D\u5230\uFF0C\u6574\u4F53\u8FD8\u6709\u4F18\u5316\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6<code>cdn</code>\u7B49\u4F18\u5316\u65B9\u5F0F\u3002</p>`,60),e=[o];function c(t,r,D,y,F,C){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
