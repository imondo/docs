import{_ as a,c as s,o as n,a as e}from"./app.0561f98a.js";const g=JSON.parse('{"title":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8F6C\u9489\u9489\u5C0F\u7A0B\u5E8F","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/03_\u5FAE\u4FE1\u7AEF/08_\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8F6C\u9489\u9489\u5C0F\u7A0B\u5E8F.md","lastUpdated":1668749260000}'),t={name:"guide/04_FRONTEND/03_\u5FAE\u4FE1\u7AEF/08_\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8F6C\u9489\u9489\u5C0F\u7A0B\u5E8F.md"},r=e(`<h1 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8F6C\u9489\u9489\u5C0F\u7A0B\u5E8F" tabindex="-1">\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8F6C\u9489\u9489\u5C0F\u7A0B\u5E8F <a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8F6C\u9489\u9489\u5C0F\u7A0B\u5E8F" aria-hidden="true">#</a></h1><blockquote><p><a href="https://ding-doc.dingtalk.com/doc#/personnal/fdzxvg" target="_blank" rel="noreferrer">\u7B2C\u4E09\u65B9\u4E2A\u4EBA\u5E94\u7528\u5F00\u53D1\u6587\u6863</a></p></blockquote><p><a name="zZyUq"></a></p><h2 id="\u4F7F\u7528\u5DE5\u5177\u8F6C\u6362" tabindex="-1">\u4F7F\u7528\u5DE5\u5177\u8F6C\u6362 <a class="header-anchor" href="#\u4F7F\u7528\u5DE5\u5177\u8F6C\u6362" aria-hidden="true">#</a></h2><p><br>\u7531\u4E8E\u5E73\u53F0\u5DEE\u5F02\uFF0C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0D\u80FD\u5728\u9489\u9489\u5E73\u53F0\u76F4\u63A5\u4F7F\u7528\uFF0C\u9009\u62E9\xA0<a href="https://github.com/ant-move/Antmove" target="_blank" rel="noreferrer">Antmove</a>\xA0\u8F6C\u6362<br></p><ul><li>\u5B89\u88C5\u8F6C\u6362\u5DE5\u5177</li><li>\u5F00\u59CB\u8F6C\u6362\uFF08\u63A8\u8350\u4F7F\u7528 vscode \u63D2\u4EF6 Antmove\uFF09</li><li>\u62B9\u5E73\u5E73\u53F0\u5DEE\u5F02 <ul><li>\u524D\u7AEF\u67D0\u4E9B api \u5DEE\u5F02</li><li>\u540E\u7AEF\u901A\u77E5\u670D\u52A1 api \u5DEE\u5F02</li></ul></li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install antmove -g</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5728\u9700\u8981\u8F6C\u6362\u9879\u76EE\u4E0B\u65B0\u5EFA antmove.config.js \u6587\u4EF6</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">..</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">etms-dd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">platform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">component2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">scope</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wx-alipay</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">hooks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">plugin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">plugin</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">appJson</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">appJson</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><ul><li>\u7EC8\u7AEF\u6267\u884C\u547D\u4EE4\xA0antmove\xA0 <a name="8bjkM"></a></li></ul><h2 id="\u5E73\u53F0\u5DEE\u5F02" tabindex="-1">\u5E73\u53F0\u5DEE\u5F02 <a class="header-anchor" href="#\u5E73\u53F0\u5DEE\u5F02" aria-hidden="true">#</a></h2><ul><li>\u8F6C\u6362\u5B8C\u6210\u540E\uFF0C\u4F7F\u7528<a href="https://ding-doc.dingtalk.com/doc#/kn6zg7/zunrdk" target="_blank" rel="noreferrer">\u5F00\u53D1\u5DE5\u5177</a>\u6253\u5F00\u7A0B\u5E8F\uFF0C</li><li>\u770B\u5230\u8C03\u8BD5\u5668\u9519\u8BEF\u4FE1\u606F\uFF0C\u6839\u636E\u63D0\u793A\u548C<a href="https://ding-doc.dingtalk.com/doc#/dev/ed25rr" target="_blank" rel="noreferrer">\u5F00\u53D1\u6587\u6863</a>\u6765\u4FEE\u6539\u5E73\u53F0\u5DEE\u5F02</li></ul><p><a name="ysosa"></a></p><h3 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1">\u5168\u5C40\u53D8\u91CF <a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5FAE\u4FE1</th><th>wx</th></tr></thead><tbody><tr><td>\u9489\u9489</td><td>dd</td></tr></tbody></table><p><a name="SBLK9"></a></p><h3 id="\u52A8\u6001\u8BBE\u7F6E\u5BFC\u822A\u680F\u989C\u8272" tabindex="-1">\u52A8\u6001\u8BBE\u7F6E\u5BFC\u822A\u680F\u989C\u8272 <a class="header-anchor" href="#\u52A8\u6001\u8BBE\u7F6E\u5BFC\u822A\u680F\u989C\u8272" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5FAE\u4FE1</th><th>setNavigationBarColor</th><th></th></tr></thead><tbody><tr><td>\u9489\u9489</td><td><a href="https://ding-doc.dingtalk.com/doc#/dev/ui-navigate/dd.setNavigationBar" target="_blank" rel="noreferrer">setNavigationBar</a></td><td>\u6CA1\u6709hideTabBar\u63A5\u53E3</td></tr></tbody></table><p><a name="aPesd"></a></p><h3 id="\u97F3\u9891\u5DEE\u5F02" tabindex="-1">\u97F3\u9891\u5DEE\u5F02 <a class="header-anchor" href="#\u97F3\u9891\u5DEE\u5F02" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5FAE\u4FE1</th><th><a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html" target="_blank" rel="noreferrer">stopRecord</a></th></tr></thead><tbody><tr><td>\u9489\u9489</td><td><a href="https://ding-doc.dingtalk.com/doc#/dev/vw45p8" target="_blank" rel="noreferrer">getRecorderManager</a></td></tr></tbody></table><p><a name="StdSk"></a></p><h3 id="\u5F00\u653E\u80FD\u529B" tabindex="-1">\u5F00\u653E\u80FD\u529B <a class="header-anchor" href="#\u5F00\u653E\u80FD\u529B" aria-hidden="true">#</a></h3><p><br>\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<a href="https://developers.weixin.qq.com/miniprogram/dev/component/button.html" target="_blank" rel="noreferrer">button\u5F00\u653E\u80FD\u529B</a>\u660E\u663E\u8981\u5F3A\u4E8E\u9489\u9489\u5C0F\u7A0B\u5E8F<a href="https://ding-doc.dingtalk.com/doc#/dev/button-component" target="_blank" rel="noreferrer">\u5F00\u653E\u80FD\u529B</a><br><br><strong>\u5FAE\u4FE1\u7AEF\u7684\u6388\u6743\u6216\u7740\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5728\u9489\u9489\u7AEF\u9700\u8981\u6539\u53D8\u4EA4\u4E92\u6216\u8005\u5B9E\u73B0\u65B9\u5F0F</strong><br>** <a name="k2OUi"></a></p><h3 id="\u56FE\u8868\u5F00\u53D1" tabindex="-1">\u56FE\u8868\u5F00\u53D1 <a class="header-anchor" href="#\u56FE\u8868\u5F00\u53D1" aria-hidden="true">#</a></h3><p><br>\u9009\u53D6\xA0<a href="https://github.com/one-pupil/wx-charts" target="_blank" rel="noreferrer">wx-charts</a>\xA0\u5F00\u6E90\u9879\u76EE\uFF0C\u6587\u6863<a href="https://github.com/xiaolin3303/wx-charts/issues/56" target="_blank" rel="noreferrer">\u53C2\u8003</a>\u3002<br><br><strong>\u5907\u9009\u65B9\u6848\uFF1A</strong><a href="https://gitee.com/uCharts/uCharts" target="_blank" rel="noreferrer">uCharts</a><br></p><p><a name="6437aa0f"></a></p><h3 id="request-\u8BF7\u6C42" tabindex="-1">request \u8BF7\u6C42 <a class="header-anchor" href="#request-\u8BF7\u6C42" aria-hidden="true">#</a></h3><p><br>\u9489\u9489\u8BF7\u6C42\u7F51\u7EDC<strong>\u6CE8\u610F\uFF1A</strong><br></p><ul><li>\u5934\u90E8\u4FE1\u606F\u662F headers\uFF0C\u4E0D\u662F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F header</li><li>\u65B0\u589E\u5934\u90E8\u4FE1\u606F\u65F6\uFF0C\u53C2\u6570\u90FD\u5E94\u8BE5\u4E3A<strong>\u5B57\u7B26\u4E32</strong></li></ul><p>** <a name="L1zMT"></a></p><h3 id="tabbar" tabindex="-1">tabBar <a class="header-anchor" href="#tabbar" aria-hidden="true">#</a></h3><ul><li>\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\xA0TabBar\xA0\u63D0\u4F9B\u8BBE\u7F6E\u7684 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html" target="_blank" rel="noreferrer">API</a>\xA0\u76F8\u5BF9\u9F50\u5168</li><li>\u9489\u9489\u5C0F\u7A0B\u5E8F \u63D0\u4F9B\u7684\xA0<a href="https://ding-doc.dingtalk.com/doc#/dev/ms4gid" target="_blank" rel="noreferrer">TabBar</a>\xA0\u4FEE\u6539\u5219\u6CA1\u90A3\u4E48\u4E30\u5BCC</li><li>\u5C24\u5176\u662F\u9700\u8981**\u9690\u85CFtabBar\uFF1A**\u662F\u5426\u4FEE\u6539\u9489\u9489\u5C0F\u7A0B\u5E8F\u4EA4\u4E92\uFF0C\u91C7\u7528\u4E3B\u9875\u5206\u5757\u8BBF\u95EE\u6A21\u5757\uFF1F</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2020/png/124135/1585617065462-d016b107-9701-4771-a32c-9e897d9b4db4.png#align=left&amp;display=inline&amp;height=413&amp;name=%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_15856170498763.png&amp;originHeight=568&amp;originWidth=333&amp;size=6486&amp;status=done&amp;style=none&amp;width=243" alt="\u4F01\u4E1A\u5FAE\u4FE1\u622A\u56FE_15856170498763.png"><br></p><p><a name="c42e96e1"></a></p><h2 id="\u771F\u673A\u8C03\u8BD5" tabindex="-1">\u771F\u673A\u8C03\u8BD5 <a class="header-anchor" href="#\u771F\u673A\u8C03\u8BD5" aria-hidden="true">#</a></h2><p><br>\u771F\u673A\u9884\u89C8\u65F6\uFF0C\u9700\u8981\u5728<a href="https://open-dev.dingtalk.com/#/userSuite/setting/dingoagbigcsptkcbblwpm?tab=1" target="_blank" rel="noreferrer">\u9489\u9489\u5F00\u53D1\u8005\u5E73\u53F0</a>\u8BBE\u7F6E\u5B89\u5168\u57DF\u540D<br><img src="https://cdn.nlark.com/yuque/0/2020/jpeg/124135/1585546741155-072d1ac8-3846-4355-8f83-b25cd7e791bb.jpeg#align=left&amp;display=inline&amp;height=712&amp;name=1585546726%281%29.jpg&amp;originHeight=712&amp;originWidth=1363&amp;size=24598&amp;status=done&amp;style=none&amp;width=1363" alt="1585546726(1).jpg"><br></p><p><a name="Otp2M"></a></p><h3 id="\u5E73\u53F0\u53D1\u5E03" tabindex="-1">\u5E73\u53F0\u53D1\u5E03 <a class="header-anchor" href="#\u5E73\u53F0\u53D1\u5E03" aria-hidden="true">#</a></h3><ul><li><a href="https://open-dev.dingtalk.com/#/index" target="_blank" rel="noreferrer">\u6CE8\u518C\u5730\u5740</a></li><li><a href="https://ding-doc.dingtalk.com/doc#/isv/yeun2g" target="_blank" rel="noreferrer">\u5F00\u53D1\u4E0E\u53D1\u5E03</a></li></ul><p><a name="EbCKp"></a></p><h2 id="\u4E00\u4E9B\u8003\u8651" tabindex="-1">\u4E00\u4E9B\u8003\u8651 <a class="header-anchor" href="#\u4E00\u4E9B\u8003\u8651" aria-hidden="true">#</a></h2><p><br>\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u662F\u5426\u6709\u5FC5\u8981\u8F6C\u6362\uFF0C\u7531\u4E8E<strong>\u4E24\u4E2A\u5E73\u53F0\u9020\u6210\u7684\u5DEE\u5F02</strong>\u53EF\u80FD\u9700\u8981\u8003\u8651\u7684\u7EC6\u8282\uFF1A</p><ul><li>\u540E\u671F\u4EE3\u7801\u7EF4\u62A4\uFF1B\u7531\u4E8E\u5DEE\u5F02\u5E26\u6765\u7684\u7EF4\u62A4\u6210\u672C</li><li>\u4E24\u7AEF\u4EA4\u4E92\u7684\u4E0D\u540C\uFF1B\u5E26\u6765\u7684\u5F00\u53D1\u6210\u672C</li><li>\u53D1\u5E03\u5E73\u53F0\u7684\u4E0D\u540C\uFF1B\u5BA1\u6838\u65F6\u95F4\u5E26\u6765\u53D1\u5E03\u65F6\u95F4\u7684\u8003\u8651</li><li>\u56FE\u8868\u5F00\u53D1\uFF1B\u5E73\u53F0\u65B9\u6848\u7684\u9009\u53D6\u53EF\u80FD\u5E26\u6765\u4E24\u7AEF\u5B9E\u73B0\u7684\u5DEE\u5F02\u5316\u4E0E\u65F6\u95F4\u7684\u540E\u5EF6</li></ul><p><br><strong>\u603B\u7ED3</strong>\uFF1A\u662F\u5426\u9700\u8981\u91CD\u65B0\u89C4\u5212\uFF0C\u4F7F\u7528\u591A\u7AEF\u7EDF\u4E00\u5F00\u53D1\u65B9\u6848\uFF1A<a href="https://uniapp.dcloud.io/?id=uni-app" target="_blank" rel="noreferrer">uni-app</a><br><br><strong>\u591A\u7AEF\u5F00\u53D1\u8003\u8651\uFF1A</strong><br>**</p><ul><li>\u5BF9\u6BD4\u591A\u7AEF\u5DEE\u5F02\uFF0C\u662F\u5426\u9700\u8981\u7EFC\u5408\u8003\u8651<strong>\u8BA4\u8BC1\u4EA4\u4E92</strong>\uFF0C\u51CF\u5C11\u4E00\u4E9B\u5F00\u53D1\u7EF4\u62A4\u6210\u672C</li><li><strong>\u56FE\u8868</strong>\u5982\u679C\u4F7F\u7528\u4F7F\u7528<a href="https://www.echartsjs.com/zh/tutorial.html#%E5%9C%A8%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts" target="_blank" rel="noreferrer">Echarts\u5FAE\u4FE1\u7248\u672C</a>\uFF0C\u5728\u591A\u7AEF\u8F6C\u6362\u4F1A\u51FA\u73B0**\u53EA\u652F\u6301\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF0C**\u662F\u5426\u8003\u8651\u591A\u7AEF\u7EDF\u4E00\u4F7F\u7528\xA0<a href="https://f2.antv.vision/zh" target="_blank" rel="noreferrer">Antv F2</a>\xA0\uFF1F</li></ul>`,46),l=[r];function o(p,i,c,d,h,D){return n(),s("div",null,l)}const F=a(t,[["render",o]]);export{g as __pageData,F as default};
