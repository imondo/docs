import{_ as s,c as a,o as n,a as l}from"./app.0628abc2.js";const y=JSON.parse('{"title":"\u3010Vue\u9879\u76EE\u603B\u7ED3\u3011\u57FA\u4E8E\u997F\u4E86\u4E48\u7EC4\u4EF6\u5C01\u88C5","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04_FRONTEND/01_Vue/02_\u57FA\u4E8E\u997F\u4E86\u4E48\u7EC4\u4EF6\u5C01\u88C5.md","lastUpdated":1669604167000}'),e={name:"guide/04_FRONTEND/01_Vue/02_\u57FA\u4E8E\u997F\u4E86\u4E48\u7EC4\u4EF6\u5C01\u88C5.md"},p=l(`<h1 id="\u3010vue\u9879\u76EE\u603B\u7ED3\u3011\u57FA\u4E8E\u997F\u4E86\u4E48\u7EC4\u4EF6\u5C01\u88C5" tabindex="-1">\u3010Vue\u9879\u76EE\u603B\u7ED3\u3011\u57FA\u4E8E\u997F\u4E86\u4E48\u7EC4\u4EF6\u5C01\u88C5 <a class="header-anchor" href="#\u3010vue\u9879\u76EE\u603B\u7ED3\u3011\u57FA\u4E8E\u997F\u4E86\u4E48\u7EC4\u4EF6\u5C01\u88C5" aria-hidden="true">#</a></h1><p><code>vue</code>\u9879\u76EE\u4E2D\uFF0C\u7EC4\u4EF6\u662F\u9879\u76EE\u7684\u57FA\u77F3\uFF0C\u6BCF\u4E2A\u9875\u9762\u90FD\u662F\u7EC4\u4EF6\u6765\u7EC4\u88C5\u8D77\u6765\uFF0C\u6211\u53F8\u6CA1\u6709\u81EA\u5DF1\u7684\u7EC4\u4EF6\u5E93\uFF0C\u9009\u7528\u7684\u662F<code>ElementUI</code>\u7EC4\u4EF6\u5E93\uFF0C\u5728\u5B83\u7684\u57FA\u7840\u4E0A\u518D\u6B21\u5C01\u88C5\u3002</p><h2 id="\u53EF\u7F16\u8F91\u8868\u683C" tabindex="-1">\u53EF\u7F16\u8F91\u8868\u683C <a class="header-anchor" href="#\u53EF\u7F16\u8F91\u8868\u683C" aria-hidden="true">#</a></h2><p>\u7531\u4E8E\u662F\u540E\u53F0\u7BA1\u7406\u9879\u76EE\uFF0C\u5404\u79CD\u5355\u636E\u6F2B\u5929\u98DE\uFF0C\u800C\u4E14\u5355\u636E\u5217\u8868\u8981\u53EF\u7F16\u8F91\uFF0C\u53EF\u9A8C\u8BC1\uFF0C\u57FA\u4E8E\u4E1A\u52A1\u6240\u4EE5\u5C01\u88C5\u4E86<a href="https://github.com/imondo/vue-template/blob/master/src/components/page-edit-table/index.vue" target="_blank" rel="noreferrer">\u53EF\u7F16\u8F91\u8868\u683C\u7EC4\u4EF6</a></p><p>\u4E1A\u52A1\u9700\u6C42\uFF1A</p><ol><li><p>\u6BCF\u5217\u53EF\u4EE5\u7F16\u8F91</p></li><li><p>\u6BCF\u5217\u8F93\u5165\u7684\u503C\u9700\u8981\u88AB\u9A8C\u8BC1</p></li></ol><p>\u6BCF\u5217\u53EF\u7F16\u8F91\uFF0C\u5219\u9700\u8981\u6BCF\u5217\u7684\u5B57\u6BB5\u9700\u8981\u4E00\u4E2A\u53EF\u7F16\u8F91\u7684\u5C5E\u6027<code>edit</code>\u6765\u786E\u5B9A\u662F\u5426\u53EF\u4EE5\u7F16\u8F91\uFF0C\u8F93\u5165\u7684\u503C\u53EF\u4EE5\u88AB\u9A8C\u8BC1\uFF0C\u9700\u8981\u6211\u4EEC\u4F20\u5165\u9A8C\u8BC1\u89C4\u5219\u3002</p><h3 id="\u786E\u8BA4\u9700\u8981\u4F20\u5165\u7684props" tabindex="-1">\u786E\u8BA4\u9700\u8981\u4F20\u5165\u7684<code>props</code> <a class="header-anchor" href="#\u786E\u8BA4\u9700\u8981\u4F20\u5165\u7684props" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8868\u683C\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableData: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: () =&gt; []</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u9700\u8981\u9A8C\u8BC1\u7684\u5217\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#A6ACCD;">  columns: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: () =&gt; []</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u662F\u5426\u53EF\u7F16\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultEdit: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u9A8C\u8BC1\u96C6\u5408</span></span>
<span class="line"><span style="color:#A6ACCD;">  verifyRules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: Object,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: () =&gt; {}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u8868\u683C\u4F20\u5165\u6570\u636E\u540E-\u521D\u59CB\u5316\u53EF\u7F16\u8F91\u72B6\u6001" tabindex="-1">\u8868\u683C\u4F20\u5165\u6570\u636E\u540E\uFF0C\u521D\u59CB\u5316\u53EF\u7F16\u8F91\u72B6\u6001 <a class="header-anchor" href="#\u8868\u683C\u4F20\u5165\u6570\u636E\u540E-\u521D\u59CB\u5316\u53EF\u7F16\u8F91\u72B6\u6001" aria-hidden="true">#</a></h3><p>\u9605\u8BFB<code>el-table</code>\u6E90\u7801\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u8868\u683C\u7EC4\u4EF6\u62E5\u6709\u81EA\u5DF1\u7684<code>store</code>\uFF0C\u4E00\u4E9B\u9700\u8981\u901A\u4FE1\u7684\u72B6\u6001\u90FD\u662F\u5B83\u6765\u7EF4\u62A4\u7684\uFF0C\u6211\u4EEC\u4E5F\u53EF\u521B\u5EFA\u4E00\u4E2A\u81EA\u6709\u7684<a href="https://github.com/imondo/vue-template/blob/master/src/components/page-edit-table/table-store.js" target="_blank" rel="noreferrer">table-store.js</a>\u6765\u7EF4\u62A4\u7F16\u8F91\u72B6\u6001</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u521D\u59CB\u5316\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">this.store = new TableStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  list: this.tableData,</span></span>
<span class="line"><span style="color:#A6ACCD;">  columns: this.columns,</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultEdit: this.defaultEdit</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u53EF\u7F16\u8F91\u5217edit-table-cell" tabindex="-1">\u53EF\u7F16\u8F91\u5217<code>edit-table-cell</code> <a class="header-anchor" href="#\u53EF\u7F16\u8F91\u5217edit-table-cell" aria-hidden="true">#</a></h3><p>\u5229\u7528<code>slot</code>\u63D2\u69FD\u6765\u4F20\u9012\u7F16\u8F91\u72B6\u6001\u548C\u9A8C\u8BC1\u89C4\u5219</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;slot v-else :cellState=&quot;cellState&quot; :validateCell=&quot;validateCell&quot;&gt;&lt;/slot&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  // \u9A8C\u8BC1</span></span>
<span class="line"><span style="color:#A6ACCD;">  validateCell(cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.editTable</span></span>
<span class="line"><span style="color:#A6ACCD;">      .verifyTableCell(this.row, this.prop, this.cellState)</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(errMsg =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const valid = !errMsg;</span></span>
<span class="line"><span style="color:#A6ACCD;">        typeof cb === &#39;function&#39; &amp;&amp; cb(valid);</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u4F7F\u7528\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528\u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528\u7EC4\u4EF6" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// edit-table.vue</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    &lt;el-table-column align=&quot;center&quot; label=&quot;\u5E8F\u53F7&quot; width=&quot;50&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template slot-scope=&quot;scope&quot;&gt;{{ scope.$index + 1 }}&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-table-column label=&quot;\u54C1\u76EE\u540D\u79F0&quot; prop=&quot;categoryName&quot; show-overflow-tooltip&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template slot-scope=&quot;{ row }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;edit-table-cell :row=&quot;row&quot; prop=&quot;categoryName&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;template slot-scope=&quot;{ cellState, validateCell }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;el-select</span></span>
<span class="line"><span style="color:#A6ACCD;">              v-if=&quot;cellState.edit&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              v-model=&quot;row.categoryName&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              clearable</span></span>
<span class="line"><span style="color:#A6ACCD;">              placeholder=&quot;\u8BF7\u9009\u62E9\u54C1\u76EE&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              @change=&quot;validateCell&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;el-option label=&quot;\u4F60&quot; value=&quot;1&quot;&gt;&lt;/el-option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;el-option label=&quot;\u597D&quot; value=&quot;2&quot;&gt;&lt;/el-option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;el-option label=&quot;\u5440&quot; value=&quot;3&quot;&gt;&lt;/el-option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/el-select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span v-if=&quot;!cellState.edit&quot;&gt;{{ row.categoryName }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/edit-table-cell&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">....    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6548\u679C\u5982\u4E0B</p><p><img src="https://s2.ax1x.com/2019/12/08/QdSbCt.gif" alt=""></p><p>\u5177\u4F53\u4EE3\u7801\u53EF\u67E5\u770B<a href="https://github.com/imondo/vue-template/blob/master/src/components/page-edit-table/index.vue" target="_blank" rel="noreferrer">\u7EC4\u4EF6</a></p><h2 id="\u589E\u5220\u6539\u7684\u6811\u7EC4\u4EF6" tabindex="-1">\u589E\u5220\u6539\u7684\u6811\u7EC4\u4EF6 <a class="header-anchor" href="#\u589E\u5220\u6539\u7684\u6811\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p><code>el-tree</code>\u6811\u5F62\u7EC4\u4EF6\u5176\u5B9E\u5DF2\u7ECF\u652F\u6301\u4E86<strong>\u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9</strong>\uFF0C\u4F46\u662F\u6211\u4EEC\u8981\u5728\u5B83\u7684\u57FA\u7840\u4E0A\u6539\u53D8<strong>\u8282\u70B9\u5185\u5BB9</strong>\uFF0C\u8FD9\u91CC\u4E3B\u8981\u662F\u8FD0\u7528\u4E86<code>Vue.set</code>\u5411\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u90E8\u5206\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">append(node, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { label } = this.configProps;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const newChild = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: id++,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [label]: \`\u4E09\u7EA7-\${id}\`,</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://s2.ax1x.com/2019/12/08/Qdp1xK.gif" alt=""></p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u662F\u9879\u76EE\u7684\u79EF\u6728\u6761\uFF0C\u516C\u7528\u7EC4\u4EF6\u7684\u5C01\u88C5\u6210\u529F\u4E0E\u5426\u5176\u5B9E\u662F\u5BF9\u9879\u76EE\u7684\u5F00\u53D1\u6548\u7387\u6709\u76F4\u63A5\u5F71\u54CD\u3002\u5177\u4F53\u4EE3\u7801\u53EF\u67E5\u770B<a href="https://github.com/imondo/vue-template" target="_blank" rel="noreferrer">vue-template</a>\uFF0C\u57FA\u4E8E<code>vue-cli3.0</code>\u642D\u5EFA\u7684\u540E\u53F0\u6A21\u7248\u3002</p><ul><li><a href="/docs/Note/webpack/webpack">webpack\u5E38\u89C4\u6253\u5305\u4F18\u5316\u65B9\u6848</a></li><li><a href="/docs/Note/vue/props">\u7EC4\u4EF6\u901A\u4FE1\u5904\u7406\u65B9\u6848</a></li><li><a href="/docs/Note/vue/http">\u540E\u53F0\u7BA1\u7406\u9879\u76EE\u603B\u7ED3</a></li><li><a href="/docs/Note/vue/deploy">\u9879\u76EE\u90E8\u7F72</a></li></ul><ul><li>\u53C2\u8003 <a href="https://github.com/ElemeFE/element/blob/dev/packages/table/src/table.vue" target="_blank" rel="noreferrer">ElTable</a><a href="https://github.com/code-farmer-i/el-table-editabled" target="_blank" rel="noreferrer">el-table-editabled</a></li></ul>`,29),t=[p];function o(c,r,i,C,A,d){return n(),a("div",null,t)}const D=s(e,[["render",o]]);export{y as __pageData,D as default};
