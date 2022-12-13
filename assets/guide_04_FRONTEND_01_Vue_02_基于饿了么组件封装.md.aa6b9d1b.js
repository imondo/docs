import{_ as s,c as a,o as n,a as l}from"./app.39613116.js";const y=JSON.parse('{"title":"【Vue项目总结】基于饿了么组件封装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/01_Vue/02_基于饿了么组件封装.md","lastUpdated":1670913817000}'),e={name:"guide/04_FRONTEND/01_Vue/02_基于饿了么组件封装.md"},p=l(`<h1 id="【vue项目总结】基于饿了么组件封装" tabindex="-1">【Vue项目总结】基于饿了么组件封装 <a class="header-anchor" href="#【vue项目总结】基于饿了么组件封装" aria-hidden="true">#</a></h1><p><code>vue</code>项目中，组件是项目的基石，每个页面都是组件来组装起来，我司没有自己的组件库，选用的是<code>ElementUI</code>组件库，在它的基础上再次封装。</p><h2 id="可编辑表格" tabindex="-1">可编辑表格 <a class="header-anchor" href="#可编辑表格" aria-hidden="true">#</a></h2><p>由于是后台管理项目，各种单据漫天飞，而且单据列表要可编辑，可验证，基于业务所以封装了<a href="https://github.com/imondo/vue-template/blob/master/src/components/page-edit-table/index.vue" target="_blank" rel="noreferrer">可编辑表格组件</a></p><p>业务需求：</p><ol><li><p>每列可以编辑</p></li><li><p>每列输入的值需要被验证</p></li></ol><p>每列可编辑，则需要每列的字段需要一个可编辑的属性<code>edit</code>来确定是否可以编辑，输入的值可以被验证，需要我们传入验证规则。</p><h3 id="确认需要传入的props" tabindex="-1">确认需要传入的<code>props</code> <a class="header-anchor" href="#确认需要传入的props" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 表格数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableData: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: () =&gt; []</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 需要验证的列字段</span></span>
<span class="line"><span style="color:#A6ACCD;">  columns: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: () =&gt; []</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否可编辑</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultEdit: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 验证集合</span></span>
<span class="line"><span style="color:#A6ACCD;">  verifyRules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: Object,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: () =&gt; {}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="表格传入数据后-初始化可编辑状态" tabindex="-1">表格传入数据后，初始化可编辑状态 <a class="header-anchor" href="#表格传入数据后-初始化可编辑状态" aria-hidden="true">#</a></h3><p>阅读<code>el-table</code>源码，可以看到，表格组件拥有自己的<code>store</code>，一些需要通信的状态都是它来维护的，我们也可创建一个自有的<a href="https://github.com/imondo/vue-template/blob/master/src/components/page-edit-table/table-store.js" target="_blank" rel="noreferrer">table-store.js</a>来维护编辑状态</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 初始化数据</span></span>
<span class="line"><span style="color:#A6ACCD;">this.store = new TableStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  list: this.tableData,</span></span>
<span class="line"><span style="color:#A6ACCD;">  columns: this.columns,</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultEdit: this.defaultEdit</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="可编辑列edit-table-cell" tabindex="-1">可编辑列<code>edit-table-cell</code> <a class="header-anchor" href="#可编辑列edit-table-cell" aria-hidden="true">#</a></h3><p>利用<code>slot</code>插槽来传递编辑状态和验证规则</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;slot v-else :cellState=&quot;cellState&quot; :validateCell=&quot;validateCell&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  isInput() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.slotName === &#39;input&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  rowState() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const states = this.editTable.store.states;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const rowState = states.get(this.row);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return rowState;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  cellState() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const cellState = this.rowState.get(this.prop);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return cellState;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 验证</span></span>
<span class="line"><span style="color:#A6ACCD;">  validateCell(cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.editTable</span></span>
<span class="line"><span style="color:#A6ACCD;">      .verifyTableCell(this.row, this.prop, this.cellState)</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(errMsg =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const valid = !errMsg;</span></span>
<span class="line"><span style="color:#A6ACCD;">        typeof cb === &#39;function&#39; &amp;&amp; cb(valid);</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="使用组件" tabindex="-1">使用组件 <a class="header-anchor" href="#使用组件" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// edit-table.vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;page-edit-table</span></span>
<span class="line"><span style="color:#A6ACCD;">  ref=&quot;editTable&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  v-model=&quot;tableData&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :columns=&quot;[&#39;categoryName&#39;, &#39;name&#39;, &#39;purchaseDate&#39;]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :default-edit=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :verify-rules=&quot;verifyRules&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;el-table</span></span>
<span class="line"><span style="color:#A6ACCD;">    ref=&quot;table&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    v-loading=&quot;loading&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :data=&quot;tableData&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    tooltip-effect=&quot;dark&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    highlight-current-row</span></span>
<span class="line"><span style="color:#A6ACCD;">    border</span></span>
<span class="line"><span style="color:#A6ACCD;">    stripe</span></span>
<span class="line"><span style="color:#A6ACCD;">    style=&quot;width: 100%&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-table-column align=&quot;center&quot; label=&quot;序号&quot; width=&quot;50&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template slot-scope=&quot;scope&quot;&gt;{{ scope.$index + 1 }}&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-table-column label=&quot;品目名称&quot; prop=&quot;categoryName&quot; show-overflow-tooltip&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template slot-scope=&quot;{ row }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;edit-table-cell :row=&quot;row&quot; prop=&quot;categoryName&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;template slot-scope=&quot;{ cellState, validateCell }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;el-select</span></span>
<span class="line"><span style="color:#A6ACCD;">              v-if=&quot;cellState.edit&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              v-model=&quot;row.categoryName&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              clearable</span></span>
<span class="line"><span style="color:#A6ACCD;">              placeholder=&quot;请选择品目&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              @change=&quot;validateCell&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;el-option label=&quot;你&quot; value=&quot;1&quot;&gt;&lt;/el-option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;el-option label=&quot;好&quot; value=&quot;2&quot;&gt;&lt;/el-option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;el-option label=&quot;呀&quot; value=&quot;3&quot;&gt;&lt;/el-option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/el-select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span v-if=&quot;!cellState.edit&quot;&gt;{{ row.categoryName }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/edit-table-cell&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">....    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果如下</p><p><img src="https://s2.ax1x.com/2019/12/08/QdSbCt.gif" alt=""></p><p>具体代码可查看<a href="https://github.com/imondo/vue-template/blob/master/src/components/page-edit-table/index.vue" target="_blank" rel="noreferrer">组件</a></p><h2 id="增删改的树组件" tabindex="-1">增删改的树组件 <a class="header-anchor" href="#增删改的树组件" aria-hidden="true">#</a></h2><p><code>el-tree</code>树形组件其实已经支持了<strong>自定义节点内容</strong>，但是我们要在它的基础上改变<strong>节点内容</strong>，这里主要是运用了<code>Vue.set</code>向响应式对象中添加一个属性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 部分代码</span></span>
<span class="line"><span style="color:#A6ACCD;">append(node, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { label } = this.configProps;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const newChild = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: id++,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [label]: \`三级-\${id}\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">    isEdit: false</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!data.children) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$set(data, &#39;children&#39;, []);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  data.children.push(newChild);</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.$emit(&#39;addNode&#39;, node, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">edit(node, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!node.isEdit) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$set(node, &#39;isEdit&#39;, true);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$refs[\`treeInput\${node.id}\`].focus();</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.$emit(&#39;editNode&#39;, node, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果如下：</p><p><img src="https://s2.ax1x.com/2019/12/08/Qdp1xK.gif" alt=""></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>组件是项目的积木条，公用组件的封装成功与否其实是对项目的开发效率有直接影响。具体代码可查看<a href="https://github.com/imondo/vue-template" target="_blank" rel="noreferrer">vue-template</a>，基于<code>vue-cli3.0</code>搭建的后台模版。</p><ul><li><a href="/docs/Note/webpack/webpack">webpack常规打包优化方案</a></li><li><a href="/docs/Note/vue/props">组件通信处理方案</a></li><li><a href="/docs/Note/vue/http">后台管理项目总结</a></li><li><a href="/docs/Note/vue/deploy">项目部署</a></li></ul><ul><li>参考 <a href="https://github.com/ElemeFE/element/blob/dev/packages/table/src/table.vue" target="_blank" rel="noreferrer">ElTable</a><a href="https://github.com/code-farmer-i/el-table-editabled" target="_blank" rel="noreferrer">el-table-editabled</a></li></ul>`,29),t=[p];function o(c,r,i,C,A,d){return n(),a("div",null,t)}const D=s(e,[["render",o]]);export{y as __pageData,D as default};
