import{_ as e,c as d,o,a}from"./app.0561f98a.js";const _=JSON.parse('{"title":"VSCode \u540C\u6B65\u914D\u7F6E","description":"","frontmatter":{},"headers":[],"relativePath":"guide/05_TOOLS/06_vscode\u540C\u6B65.md","lastUpdated":1668749260000}'),t={name:"guide/05_TOOLS/06_vscode\u540C\u6B65.md"},c=a('<h1 id="vscode-\u540C\u6B65\u914D\u7F6E" tabindex="-1">VSCode \u540C\u6B65\u914D\u7F6E <a class="header-anchor" href="#vscode-\u540C\u6B65\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u7531\u4E8E\u4F7F\u7528<code>VSCode</code>\u6765\u7F16\u8F91\u4EE3\u7801\uFF0C\u6BCF\u6B21\u6362\u53D6\u7535\u8111\u90FD\u8981\u91CD\u65B0\u6765\u914D\u7F6E\u81EA\u5DF1\u7684\u7F16\u8F91\u5668\uFF0C\u6240\u4EE5\u4F7F\u7528<code>Settings Sync</code>\u63D2\u4EF6\u6765\u540C\u6B65\u6211\u4EEC\u7684\u7F16\u8F91\u5668\u914D\u7F6E\u3002</p><h2 id="vscode-\u540C\u6B65\u65B9\u6848" tabindex="-1">VSCode \u540C\u6B65\u65B9\u6848 <a class="header-anchor" href="#vscode-\u540C\u6B65\u65B9\u6848" aria-hidden="true">#</a></h2><p>VSCode \u7684\u63D2\u4EF6 Setting Sync \u63D0\u4F9B\u4E86\u901A\u8FC7 github \u7684 Gist \u5B8C\u6210\u914D\u7F6E\u540C\u6B65\u7684\u529F\u80FD\u3002\u4F46\u662F\u7531\u4E8E\u5B83\u7684\u6559\u7A0B\u4E0D\u5B8C\u6574\uFF0C\u5BFC\u81F4\u540C\u6B65\u8D77\u6765\u4F1A\u4EA7\u751F\u7701\u95EE\u9898\u3002\u6700\u5E38\u89C1\u7684\u95EE\u9898\u662F\u65E0\u6CD5\u4E0B\u8F7D\u914D\u7F6E\uFF0C\u63D0\u793A\u4FE1\u606F\u4E3A\uFF1A</p><p>Sync : Invalid / Expired GitHub Token. Please generate new token with scopes mentioned in readme. Exception Logged in Console.</p><p>Gist \u53EF\u4EE5\u4FDD\u5B58\u4E0A\u4F20\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u62C9\u53D6\u914D\u7F6E\u6587\u4EF6\u9700\u8981\u914D\u7F6E\u4E24\u4E2A id\uFF0C\u4E00\u4E2A\u662F Gist Id\uFF0C\u4E00\u4E2A\u662F Token Id\u3002\u8FD9\u4E24\u4E2A Id \u524D\u8005\u6807\u8BC6\u914D\u7F6E\u6587\u4EF6\uFF0C\u540E\u8005\u7528\u4E8E\u8EAB\u4EFD\u9A8C\u8BC1\u3002\u6211\u4EEC\u65E0\u6CD5\u4E0B\u8F7D\u7684\u539F\u56E0\u5C31\u662F\u6211\u4EEC\u4F7F\u7528\u5355\u5355\u5728 Sync:Download Settings \u547D\u4EE4\u4E2D\u4F7F\u7528\u4E86 Gist id\uFF0C\u6240\u4EE5\u9519\u8BEF\u63D0\u793A\u624D\u662F\u65E0\u6548\u7684 token\u3002</p><p>\u6240\u4EE5\uFF0C\u5176\u5B9E\u5173\u952E\u70B9\u5C31\u662F\u4E24\u4E2A\uFF1A</p><ul><li><p>\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1,\u8BBE\u7F6E\uFF08\u65B0\u5EFA\uFF09token\uFF08\u91CD\u70B9\uFF09</p></li><li><p>\u8BBE\u7F6Egist id\uFF08\u8FD9\u4E2A\u57FA\u672C\u4E0D\u7528\u6539\uFF0C\u5C31\u662F\u7528\u4E4B\u524D\u7684\u90A3\u4E2Agist id\u5C31\u884C\uFF09</p></li></ul><blockquote><p>\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1,\u8BBE\u7F6E\uFF08\u65B0\u5EFA\uFF09token</p></blockquote><p>\u8FD8\u662F\u5728 VSCode \u4E2D\u8F93\u5165\u547D\u4EE4\uFF1A<code>Sync:Advanced Options</code>\uFF0C\u7136\u540E\u9009\u62E9 <code>Sync:Edit Extension Local Settings</code>\uFF0C\u7F16\u8F91 <code>syncLocalSettings.json</code> \u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u3002\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u6709\u4E00\u9879 token \u6CA1\u6709\u8BBE\u7F6E\uFF08\u6216\u8005\u662F\u914D\u7F6E\u7684\u5C31\u662F\u4EE5\u524D\u7684\u8FC7\u671F\u7684token\uFF09\uFF0C\u8FD9\u91CC\u5C31\u9700\u8981\u8BBE\u7F6E\u4E3A Token Id\u3002\u4F60\u53EF\u4EE5\u7528\u4E4B\u524D\u4E0A\u4F20\u914D\u7F6E\u6587\u4EF6\u65F6\u8BBE\u7F6E\u7684 Token\uFF0C\u4E5F\u53EF\u4EE5\u518D\u65B0\u5EFA\u4E00\u4E2A Token\u3002\u521B\u5EFA\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><p>**<a href="./github.com/settings/tokens">GitHub</a>**\u91CD\u65B0\u521B\u5EFA\u4E00\u4E2A <code>Token</code></p><p><a href="https://imgchr.com/i/1h3adK" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h3adK.md.png" alt="1h3adK.md.png"></a><a href="https://imgchr.com/i/1h3dIO" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h3dIO.md.png" alt="1h3dIO.md.png"></a><a href="https://imgchr.com/i/1h3UZ6" target="_blank" rel="noreferrer"><img src="https://s2.ax1x.com/2020/02/09/1h3UZ6.md.png" alt="1h3UZ6.md.png"></a></p><p>**\u6CE8\u610F\uFF1A**\u8FD9\u91CC\u91CD\u65B0\u751F\u6210\u4E4B\u540E\uFF0C\u6709\u5173\u6B64gist id\u5F15\u7528\u5230\u7684\u5730\u65B9\u7684token\u4E5F\u9700\u8981\u540C\u6B65\u66F4\u65B0\uFF0C\u5426\u5219\u6CA1\u529E\u6CD5\u4F7F\u7528\u3002</p><h2 id="\u5FEB\u6377\u952E" tabindex="-1">\u5FEB\u6377\u952E <a class="header-anchor" href="#\u5FEB\u6377\u952E" aria-hidden="true">#</a></h2><ol><li><h3 id="\u91CD\u590D\u7684\u884C" tabindex="-1">\u91CD\u590D\u7684\u884C <a class="header-anchor" href="#\u91CD\u590D\u7684\u884C" aria-hidden="true">#</a></h3></li></ol><p><code>Shift + Alt + \u5411\u4E0B\u7BAD\u5934</code> (<code>Mac: command + Shift + \u5411\u4E0B\u7BAD\u5934</code>)</p><ol start="2"><li><h3 id="\u79FB\u81F3\u6587\u4EF6\u7684\u5F00\u5934-\u7ED3\u5C3E" tabindex="-1">\u79FB\u81F3\u6587\u4EF6\u7684\u5F00\u5934/\u7ED3\u5C3E <a class="header-anchor" href="#\u79FB\u81F3\u6587\u4EF6\u7684\u5F00\u5934-\u7ED3\u5C3E" aria-hidden="true">#</a></h3></li></ol><p>\u8981\u4F7F\u5149\u6807\u79FB\u5230\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u6216\u6700\u540E\u4E00\u884C\uFF0C\u6700\u5FEB\u7684\u65B9\u6CD5\u662F\u6309<code>Ctrl + Home</code> (<code>Mac: command + Home</code>)\u952E\u5F00\u5934\uFF0C\u7136\u540E\u6309<code>Ctrl + End</code> (<code>Mac: command + End</code>)\u952E\u7ED3\u5C3E\u3002</p><ol start="3"><li><h3 id="\u6279\u91CF\u66FF\u6362\u5F53\u524D\u6587\u4EF6\u4E2D\u6240\u6709\u5339\u914D\u7684\u6587\u672C" tabindex="-1">\u6279\u91CF\u66FF\u6362\u5F53\u524D\u6587\u4EF6\u4E2D\u6240\u6709\u5339\u914D\u7684\u6587\u672C <a class="header-anchor" href="#\u6279\u91CF\u66FF\u6362\u5F53\u524D\u6587\u4EF6\u4E2D\u6240\u6709\u5339\u914D\u7684\u6587\u672C" aria-hidden="true">#</a></h3></li></ol><p><code>Ctrl + F2</code> (<code>Mac: command + F2</code>)</p><ol start="4"><li><h3 id="\u5411\u4E0A-\u5411\u4E0B\u79FB\u52A8\u4E00\u884C" tabindex="-1">\u5411\u4E0A/\u5411\u4E0B\u79FB\u52A8\u4E00\u884C <a class="header-anchor" href="#\u5411\u4E0A-\u5411\u4E0B\u79FB\u52A8\u4E00\u884C" aria-hidden="true">#</a></h3></li></ol><p>\u6309<code>Alt + \u5411\u4E0A\u7BAD\u5934</code>(<code>Mac: option+ \u5411\u4E0A\u7BAD\u5934</code>)\u5F53\u524D\u884C\u5411\u4E0A\u79FB\u52A8\uFF0C\u6309<code>Alt + \u5411\u4E0B\u7BAD\u5934</code>(<code>Mac: option+ \u5411\u4E0B\u7BAD\u5934</code>))\u5F53\u524D\u884C\u5411\u4E0B\u79FB\u52A8\u3002</p><ol start="5"><li><h3 id="\u5220\u9664\u4E00\u884C" tabindex="-1">\u5220\u9664\u4E00\u884C <a class="header-anchor" href="#\u5220\u9664\u4E00\u884C" aria-hidden="true">#</a></h3></li></ol><p>\u4F7F\u7528<code>Ctrl + X</code>\u526A\u5207\u547D\u4EE4(<code>Mac\uFF1Acommand + X</code>)\u6765\u5220\u9664\u4E00\u884C</p><p>\u6216\u8005\u4F7F\u7528 <code>Ctrl + Shift + K</code> (<code>Mac: command + Shift + K</code>)\u547D\u4EE4\u3002</p><ol start="6"><li><h3 id="\u5C06\u7F16\u8F91\u5668\u5411\u5DE6\u6216\u5411\u53F3\u79FB\u52A8" tabindex="-1">\u5C06\u7F16\u8F91\u5668\u5411\u5DE6\u6216\u5411\u53F3\u79FB\u52A8 <a class="header-anchor" href="#\u5C06\u7F16\u8F91\u5668\u5411\u5DE6\u6216\u5411\u53F3\u79FB\u52A8" aria-hidden="true">#</a></h3></li></ol><p><code>Ctrl + Shift + PgUp/PgDown</code>(<code>command + Shift + PgUp/PgDown</code>)\u5411\u5DE6/\u5411\u53F3\u79FB\u52A8\u7F16\u8F91\u5668</p><ol start="7"><li><h3 id="\u590D\u5236\u5149\u6807\u5411\u4E0A\u6216\u8005\u5411\u4E0A\u6279\u91CF\u6DFB\u52A0\u5185\u5BB9" tabindex="-1">\u590D\u5236\u5149\u6807\u5411\u4E0A\u6216\u8005\u5411\u4E0A\u6279\u91CF\u6DFB\u52A0\u5185\u5BB9 <a class="header-anchor" href="#\u590D\u5236\u5149\u6807\u5411\u4E0A\u6216\u8005\u5411\u4E0A\u6279\u91CF\u6DFB\u52A0\u5185\u5BB9" aria-hidden="true">#</a></h3></li></ol><p>\u6309<code>Ctrl + Alt +\u5411\u4E0A\u7BAD\u5934</code>(<code>Mac: command + Option +\u5411\u4E0A\u7BAD\u5934</code>)\u5C06\u5149\u6807\u6DFB\u52A0\u5230\u4E0A\u9762\uFF0C\u6309<code>Ctrl + Alt +\u5411\u4E0B\u7BAD\u5934</code>(<code>Mac: command + Option + \u5411\u4E0B\u7BAD\u5934</code>)\u5C06\u5149\u6807\u6DFB\u52A0\u5230\u4E0B\u9762\u3002</p><ol start="8"><li><h3 id="\u4E00\u6B21\u641C\u7D22\u6240\u6709\u6587\u4EF6\u7684\u6587\u672C" tabindex="-1">\u4E00\u6B21\u641C\u7D22\u6240\u6709\u6587\u4EF6\u7684\u6587\u672C <a class="header-anchor" href="#\u4E00\u6B21\u641C\u7D22\u6240\u6709\u6587\u4EF6\u7684\u6587\u672C" aria-hidden="true">#</a></h3></li></ol><p><code>Ctrl + Shift + F</code>\u6253\u5F00\u89C6\u56FE</p><ol start="9"><li><h3 id="\u5168\u90E8\u6298\u53E0-\u6253\u5F00\u4EE3\u7801" tabindex="-1">\u5168\u90E8\u6298\u53E0/\u6253\u5F00\u4EE3\u7801 <a class="header-anchor" href="#\u5168\u90E8\u6298\u53E0-\u6253\u5F00\u4EE3\u7801" aria-hidden="true">#</a></h3></li></ol><p><code>Ctrl + Shift + Alt + [</code>\u6298\u53E0\u4EE3\u7801\uFF0C<code>Ctrl + Shift + Alt + ]</code>\u6253\u5F00\u4EE3\u7801</p><ol start="10"><li><h3 id="\u5207\u6362\u7F16\u8F91\u5668tab" tabindex="-1">\u5207\u6362\u7F16\u8F91\u5668Tab <a class="header-anchor" href="#\u5207\u6362\u7F16\u8F91\u5668tab" aria-hidden="true">#</a></h3></li></ol><p><code>Ctrl + PgUp/PgDown</code>\u5207\u6362\u4E0A\u4E0B\u7F16\u8F91\u5668</p>',35),i=[c];function r(n,h,l,s,p,m){return o(),d("div",null,i)}const f=e(t,[["render",r]]);export{_ as __pageData,f as default};
