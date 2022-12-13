import{_ as s,c as n,o as a,a as l}from"./app.7a5de996.js";const D=JSON.parse('{"title":"TypeScript与react结合一些注意点（持续更新）","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/02_React/03_TypeScript与react结合一些注意点.md","lastUpdated":1670917237000}'),p={name:"guide/04_FRONTEND/02_React/03_TypeScript与react结合一些注意点.md"},e=l(`<h1 id="typescript与react结合一些注意点-持续更新" tabindex="-1">TypeScript与react结合一些注意点（持续更新） <a class="header-anchor" href="#typescript与react结合一些注意点-持续更新" aria-hidden="true">#</a></h1><h2 id="dom元素的选择" tabindex="-1">DOM元素的选择 <a class="header-anchor" href="#dom元素的选择" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const body: HTMLElement = document.body;</span></span>
<span class="line"><span style="color:#A6ACCD;">if (document.documentElement) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const scrollTop = document.documentElement.scrollTop || body.scrollTop; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="scroll滚动事件的绑定" tabindex="-1">scroll滚动事件的绑定 <a class="header-anchor" href="#scroll滚动事件的绑定" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">constructor(props: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.handleScroll = this.handleScroll.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">public componentDidMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.addEventListener(&#39;scroll&#39;, this.handleScroll);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">public componentWillUnmount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.removeEventListener(&#39;scroll&#39;, this.handleScroll);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="withrouter" tabindex="-1">withRouter <a class="header-anchor" href="#withrouter" aria-hidden="true">#</a></h2><p>当你想要访问<code>match</code>、<code>location</code>、<code>history</code>这三个对象的时候可以使用<code>withRouter</code>来包裹组件来实现高阶组件（HOC）</p><p>结合<code>TypeScript</code>想访问<code>match</code>、<code>location</code>、<code>history</code>时，需要引入<code>RouteComponentProps</code>。</p><p><a href="https://github.com/caistrong/Blog/issues/74" target="_blank" rel="noreferrer">以withRouter出发看React高阶组件</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import { RouteComponentProps, withRouter } from &#39;react-router-dom&#39;;</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-hidden="true">#</a></h2><ul><li><p>利用<code>props</code>中<code>children</code>属性来实现路由<code>link</code>跳转</p></li><li><p>利用<code>Loadable</code>来实现按需加载路由</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// router.tsx</span></span>
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
