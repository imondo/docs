import{_ as s,c as n,o as a,a as l}from"./app.a71b2607.js";const D=JSON.parse('{"title":"TypeScript\u4E0Ereact\u7ED3\u5408\u4E00\u4E9B\u6CE8\u610F\u70B9\uFF08\u6301\u7EED\u66F4\u65B0\uFF09","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/02_React/03_TypeScript\u4E0Ereact\u7ED3\u5408\u4E00\u4E9B\u6CE8\u610F\u70B9.md","lastUpdated":1668750885000}'),p={name:"guide/04_FRONTEND/02_React/03_TypeScript\u4E0Ereact\u7ED3\u5408\u4E00\u4E9B\u6CE8\u610F\u70B9.md"},e=l(`<h1 id="typescript\u4E0Ereact\u7ED3\u5408\u4E00\u4E9B\u6CE8\u610F\u70B9-\u6301\u7EED\u66F4\u65B0" tabindex="-1">TypeScript\u4E0Ereact\u7ED3\u5408\u4E00\u4E9B\u6CE8\u610F\u70B9\uFF08\u6301\u7EED\u66F4\u65B0\uFF09 <a class="header-anchor" href="#typescript\u4E0Ereact\u7ED3\u5408\u4E00\u4E9B\u6CE8\u610F\u70B9-\u6301\u7EED\u66F4\u65B0" aria-hidden="true">#</a></h1><h2 id="dom\u5143\u7D20\u7684\u9009\u62E9" tabindex="-1">DOM\u5143\u7D20\u7684\u9009\u62E9 <a class="header-anchor" href="#dom\u5143\u7D20\u7684\u9009\u62E9" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const body: HTMLElement = document.body;</span></span>
<span class="line"><span style="color:#A6ACCD;">if (document.documentElement) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const scrollTop = document.documentElement.scrollTop || body.scrollTop; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="scroll\u6EDA\u52A8\u4E8B\u4EF6\u7684\u7ED1\u5B9A" tabindex="-1">scroll\u6EDA\u52A8\u4E8B\u4EF6\u7684\u7ED1\u5B9A <a class="header-anchor" href="#scroll\u6EDA\u52A8\u4E8B\u4EF6\u7684\u7ED1\u5B9A" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">constructor(props: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.handleScroll = this.handleScroll.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">public componentDidMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.addEventListener(&#39;scroll&#39;, this.handleScroll);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">public componentWillUnmount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.removeEventListener(&#39;scroll&#39;, this.handleScroll);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="withrouter" tabindex="-1">withRouter <a class="header-anchor" href="#withrouter" aria-hidden="true">#</a></h2><p>\u5F53\u4F60\u60F3\u8981\u8BBF\u95EE<code>match</code>\u3001<code>location</code>\u3001<code>history</code>\u8FD9\u4E09\u4E2A\u5BF9\u8C61\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528<code>withRouter</code>\u6765\u5305\u88F9\u7EC4\u4EF6\u6765\u5B9E\u73B0\u9AD8\u9636\u7EC4\u4EF6\uFF08HOC\uFF09</p><p>\u7ED3\u5408<code>TypeScript</code>\u60F3\u8BBF\u95EE<code>match</code>\u3001<code>location</code>\u3001<code>history</code>\u65F6\uFF0C\u9700\u8981\u5F15\u5165<code>RouteComponentProps</code>\u3002</p><p><a href="https://github.com/caistrong/Blog/issues/74" target="_blank" rel="noreferrer">\u4EE5withRouter\u51FA\u53D1\u770BReact\u9AD8\u9636\u7EC4\u4EF6</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import { RouteComponentProps, withRouter } from &#39;react-router-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface IArticleProps extends RouteComponentProps&lt;any&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class ArticleItem extends React.Component&lt;IArticleProps&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  public componentWillMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const id = this.props.match.params.id;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default withRouter&lt;IArticleProps&gt;(ArticleItem);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u8DEF\u7531" tabindex="-1">\u8DEF\u7531 <a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a></h2><ul><li><p>\u5229\u7528<code>props</code>\u4E2D<code>children</code>\u5C5E\u6027\u6765\u5B9E\u73B0\u8DEF\u7531<code>link</code>\u8DF3\u8F6C</p></li><li><p>\u5229\u7528<code>Loadable</code>\u6765\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D\u8DEF\u7531</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// router.tsx</span></span>
<span class="line"><span style="color:#A6ACCD;">import { BrowserRouter as Router, Route, Switch } from &#39;react-router-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import * as Loadable from &#39;react-loadable&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const LoadComponent = (view: string): any =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return () =&gt; import(\`./pages/\${view}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const RouterList: IRouteMap[] = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component: LoadComponent(&#39;Home&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">]  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const RouterMap = () =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Router basename=&quot;/rtblog&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Layout&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {RouterList.map((item, i) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Route</span></span>
<span class="line"><span style="color:#A6ACCD;">            key={i}</span></span>
<span class="line"><span style="color:#A6ACCD;">            exact={true}</span></span>
<span class="line"><span style="color:#A6ACCD;">            path={item.path}</span></span>
<span class="line"><span style="color:#A6ACCD;">            component={Loadable({</span></span>
<span class="line"><span style="color:#A6ACCD;">              loader: item.component,</span></span>
<span class="line"><span style="color:#A6ACCD;">              loading: Loading</span></span>
<span class="line"><span style="color:#A6ACCD;">            })}</span></span>
<span class="line"><span style="color:#A6ACCD;">          /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ))}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Layout&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/Router&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default RouterMap;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// layout.tsx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">public render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { children } = this.props;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div className=&quot;layout-wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Header /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;MainContent children={children} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;BackTop&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div className=&quot;back-top-inner&quot;&gt;UP&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/BackTop&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),o=[e];function t(c,r,i,C,A,d){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{D as __pageData,u as default};
