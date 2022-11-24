import{_ as s,c as n,o as a,a as l}from"./app.d121ef1a.js";const u=JSON.parse('{"title":"eslintrc \u6587\u4EF6\u793A\u4F8B\u548C\u89E3\u91CA","description":"","frontmatter":{},"headers":[],"relativePath":"guide/05_TOOLS/05_eslintrc.md","lastUpdated":1669257902000}'),p={name:"guide/05_TOOLS/05_eslintrc.md"},o=l(`<h1 id="eslintrc-\u6587\u4EF6\u793A\u4F8B\u548C\u89E3\u91CA" tabindex="-1">eslintrc \u6587\u4EF6\u793A\u4F8B\u548C\u89E3\u91CA <a class="header-anchor" href="#eslintrc-\u6587\u4EF6\u793A\u4F8B\u548C\u89E3\u91CA" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u73AF\u5883\u5B9A\u4E49\u4E86\u9884\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">  env: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u73AF\u5883\u5B9A\u4E49\u4E86\u9884\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF\u3002\u66F4\u591A\u5728\u5B98\u7F51\u67E5\u770B</span></span>
<span class="line"><span style="color:#A6ACCD;">    browser: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    node: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    commonjs: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    amd: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    es6: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    mocha: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // JavaScript \u8BED\u8A00\u9009\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">  parserOptions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ECMAScript \u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">    ecmaVersion: 6,</span></span>
<span class="line"><span style="color:#A6ACCD;">    sourceType: &#39;module&#39;, //\u8BBE\u7F6E\u4E3A &quot;script&quot; (\u9ED8\u8BA4) \u6216 &quot;module&quot;\uFF08\u5982\u679C\u4F60\u7684\u4EE3\u7801\u662F ECMAScript \u6A21\u5757)\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u60F3\u4F7F\u7528\u7684\u989D\u5916\u7684\u8BED\u8A00\u7279\u6027:</span></span>
<span class="line"><span style="color:#A6ACCD;">    ecmaFeatures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5141\u8BB8\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u4F7F\u7528 return \u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">      globalReturn: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // impliedStric</span></span>
<span class="line"><span style="color:#A6ACCD;">      impliedStrict: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u542F\u7528 JSX</span></span>
<span class="line"><span style="color:#A6ACCD;">      jsx: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      modules: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  //-----\u8BA9eslint\u652F\u6301 JSX start</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [&#39;react&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  extends: [&#39;eslint:recommended&#39;, &#39;plugin:react/recommended&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  //-----\u8BA9eslint\u652F\u6301 JSX end</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * &quot;off&quot; \u6216 0 - \u5173\u95ED\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">   * &quot;warn&quot; \u6216 1 - \u5F00\u542F\u89C4\u5219\uFF0C\u4F7F\u7528\u8B66\u544A\u7EA7\u522B\u7684\u9519\u8BEF\uFF1Awarn (\u4E0D\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u9000\u51FA),</span></span>
<span class="line"><span style="color:#A6ACCD;">   * &quot;error&quot; \u6216 2 - \u5F00\u542F\u89C4\u5219\uFF0C\u4F7F\u7528\u9519\u8BEF\u7EA7\u522B\u7684\u9519\u8BEF\uFF1Aerror (\u5F53\u88AB\u89E6\u53D1\u7684\u65F6\u5019\uFF0C\u7A0B\u5E8F\u4F1A\u9000\u51FA)</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  rules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ////////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53EF\u80FD\u7684\u9519\u8BEF //</span></span>
<span class="line"><span style="color:#A6ACCD;">    ////////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u6761\u4EF6\u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0\u8D4B\u503C\u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-cond-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 console</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-console&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u6761\u4EF6\u4E2D\u4F7F\u7528\u5E38\u91CF\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    // if (false) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // doSomethingUnfinished();</span></span>
<span class="line"><span style="color:#A6ACCD;">    // } //cuowu</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-constant-condition&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u63A7\u5236\u5B57\u7B26 \uFF1Anew RegExp(&quot;\\x1f&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-control-regex&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6570\u7EC4\u548C\u5BF9\u8C61\u952E\u503C\u5BF9\u6700\u540E\u4E00\u4E2A\u9017\u53F7\uFF0C never\u53C2\u6570\uFF1A\u4E0D\u80FD\u5E26\u672B\u5C3E\u7684\u9017\u53F7, always\u53C2\u6570\uFF1A\u5FC5\u987B\u5E26\u672B\u5C3E\u7684\u9017\u53F7\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    // always-multiline\uFF1A\u591A\u884C\u6A21\u5F0F\u5FC5\u987B\u5E26\u9017\u53F7\uFF0C\u5355\u884C\u6A21\u5F0F\u4E0D\u80FD\u5E26\u9017\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;comma-dangle&#39;: [1, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 debugger</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-debugger&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62 function \u5B9A\u4E49\u4E2D\u51FA\u73B0\u91CD\u540D\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-dupe-args&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u51FA\u73B0\u91CD\u590D\u7684 key</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-dupe-keys&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u91CD\u590D\u7684 case \u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-duplicate-case&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u7A7A\u8BED\u53E5\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-empty&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u7A7A\u5B57\u7B26\u96C6 (/^abc[]/)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-empty-character-class&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5BF9 catch \u5B50\u53E5\u7684\u53C2\u6570\u91CD\u65B0\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-ex-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5E03\u5C14\u8F6C\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extra-boolean-cast&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u62EC\u53F7 //(a * b) + c;//\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extra-parens&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5206\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extra-semi&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5BF9 function \u58F0\u660E\u91CD\u65B0\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-func-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u5D4C\u5957\u7684\u5757\u4E2D\u51FA\u73B0 function \u6216 var \u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-inner-declarations&#39;: [2, &#39;functions&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62 RegExp \u6784\u9020\u51FD\u6570\u4E2D\u65E0\u6548\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-invalid-regexp&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u5B57\u7B26\u4E32\u548C\u6CE8\u91CA\u4E4B\u5916\u4E0D\u89C4\u5219\u7684\u7A7A\u767D</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-irregular-whitespace&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728 in \u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0\u5426\u5B9A\u7684\u5DE6\u64CD\u4F5C\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-negated-in-lhs&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u628A\u5168\u5C40\u5BF9\u8C61 (Math \u548C JSON) \u4F5C\u4E3A\u51FD\u6570\u8C03\u7528 \u9519\u8BEF\uFF1Avar math = Math();</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-obj-calls&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u76F4\u63A5\u4F7F\u7528 Object.prototypes \u7684\u5185\u7F6E\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-prototype-builtins&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u9762\u91CF\u4E2D\u51FA\u73B0\u591A\u4E2A\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-regex-spaces&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u7A00\u758F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-sparse-arrays&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u51FA\u73B0\u4EE4\u4EBA\u56F0\u60D1\u7684\u591A\u884C\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unexpected-multiline&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728return\u3001throw\u3001continue \u548C break\u8BED\u53E5\u4E4B\u540E\u51FA\u73B0\u4E0D\u53EF\u8FBE\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unreachable&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u4F7F\u7528 isNaN() \u68C0\u67E5 NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;use-isnan&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u4F7F\u7528\u6709\u6548\u7684 JSDoc \u6CE8\u91CA</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;valid-jsdoc&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236 typeof \u8868\u8FBE\u5F0F\u4E0E\u6709\u6548\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u6BD4\u8F83</span></span>
<span class="line"><span style="color:#A6ACCD;">    // typeof foo === &quot;undefimed&quot; \u9519\u8BEF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;valid-typeof&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6700\u4F73\u5B9E\u8DF5 //</span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5B9A\u4E49\u5BF9\u8C61\u7684set\u5B58\u53D6\u5668\u5C5E\u6027\u65F6\uFF0C\u5F3A\u5236\u5B9A\u4E49get</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;accessor-pairs&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u6570\u7EC4\u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u6709 return \u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;array-callback-return&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u628A\u53D8\u91CF\u7684\u4F7F\u7528\u9650\u5236\u5728\u5176\u5B9A\u4E49\u7684\u4F5C\u7528\u57DF\u8303\u56F4\u5185</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;block-scoped-var&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u9650\u5236\u5708\u590D\u6742\u5EA6\uFF0C\u4E5F\u5C31\u662F\u7C7B\u4F3Cif else\u80FD\u8FDE\u7EED\u63A5\u591A\u5C11\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">    complexity: [2, 9],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42 return \u8BED\u53E5\u8981\u4E48\u603B\u662F\u6307\u5B9A\u8FD4\u56DE\u7684\u503C\uFF0C\u8981\u4E48\u4E0D\u6307\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;consistent-return&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u6240\u6709\u63A7\u5236\u8BED\u53E5\u4F7F\u7528\u4E00\u81F4\u7684\u62EC\u53F7\u98CE\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    curly: [2, &#39;all&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // switch \u8BED\u53E5\u5F3A\u5236 default \u5206\u652F\uFF0C\u4E5F\u53EF\u6DFB\u52A0 // no default \u6CE8\u91CA\u53D6\u6D88\u6B64\u6B21\u8B66\u544A</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;default-case&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236object.key \u4E2D . \u7684\u4F4D\u7F6E\uFF0C\u53C2\u6570:</span></span>
<span class="line"><span style="color:#A6ACCD;">    // property\uFF0C&#39;.&#39;\u53F7\u5E94\u4E0E\u5C5E\u6027\u5728\u540C\u4E00\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">    // object, &#39;.&#39; \u53F7\u5E94\u4E0E\u5BF9\u8C61\u540D\u5728\u540C\u4E00\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;dot-location&#39;: [2, &#39;property&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u4F7F\u7528.\u53F7\u53D6\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53C2\u6570\uFF1A allowKeywords\uFF1Atrue \u4F7F\u7528\u4FDD\u7559\u5B57\u505A\u5C5E\u6027\u540D\u65F6\uFF0C\u53EA\u80FD\u4F7F\u7528.\u65B9\u5F0F\u53D6\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    // false \u4F7F\u7528\u4FDD\u7559\u5B57\u505A\u5C5E\u6027\u540D\u65F6, \u53EA\u80FD\u4F7F\u7528[]\u65B9\u5F0F\u53D6\u5C5E\u6027 e.g [2, {&quot;allowKeywords&quot;: false}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // allowPattern: \u5F53\u5C5E\u6027\u540D\u5339\u914D\u63D0\u4F9B\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u65F6\uFF0C\u5141\u8BB8\u4F7F\u7528[]\u65B9\u5F0F\u53D6\u503C,\u5426\u5219\u53EA\u80FD\u7528.\u53F7\u53D6\u503C e.g [2, {&quot;allowPattern&quot;: &quot;^[a-z]+(_[a-z]+)+$&quot;}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;dot-notation&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        allowKeywords: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4F7F\u7528 === \u66FF\u4EE3 == allow-null\u5141\u8BB8null\u548Cundefined==</span></span>
<span class="line"><span style="color:#A6ACCD;">    eqeqeq: [2, &#39;allow-null&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42 for-in \u5FAA\u73AF\u4E2D\u6709\u4E00\u4E2A if \u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;guard-for-in&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 alert\u3001confirm \u548C prompt</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-alert&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 arguments.caller \u6216 arguments.callee</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-caller&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u5728 case \u5B50\u53E5\u4E2D\u4F7F\u7528\u8BCD\u6CD5\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-case-declarations&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u9664\u6CD5\u64CD\u4F5C\u7B26\u663E\u5F0F\u7684\u51FA\u73B0\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u5F00\u59CB\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-div-regex&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62 if \u8BED\u53E5\u4E2D\u6709 return \u4E4B\u540E\u6709 else</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-else-return&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u51FA\u73B0\u7A7A\u51FD\u6570.\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u5305\u542B\u4E86\u4E00\u6761\u6CE8\u91CA\uFF0C\u5B83\u5C06\u4E0D\u4F1A\u88AB\u8BA4\u4E3A\u6709\u95EE\u9898\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-empty-function&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528\u7A7A\u89E3\u6784\u6A21\u5F0Fno-empty-pattern</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-empty-pattern&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u6CA1\u6709\u7C7B\u578B\u68C0\u67E5\u64CD\u4F5C\u7B26\u7684\u60C5\u51B5\u4E0B\u4E0E null \u8FDB\u884C\u6BD4\u8F83</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-eq-null&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 eval()</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-eval&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u6269\u5C55\u539F\u751F\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extend-native&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4E0D\u5FC5\u8981\u7684 .bind() \u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extra-bind&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u4E0D\u5FC5\u8981\u7684\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extra-label:&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62 case \u8BED\u53E5\u843D\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-fallthrough&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u6570\u5B57\u5B57\u9762\u91CF\u4E2D\u4F7F\u7528\u524D\u5BFC\u548C\u672B\u5C3E\u5C0F\u6570\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-floating-decimal&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528\u77ED\u7B26\u53F7\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362(!!fOO)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-implicit-coercion&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u5168\u5C40\u8303\u56F4\u5185\u4F7F\u7528 var \u548C\u547D\u540D\u7684 function \u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-implicit-globals&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528\u7C7B\u4F3C eval() \u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-implied-eval&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62 this \u5173\u952E\u5B57\u51FA\u73B0\u5728\u7C7B\u548C\u7C7B\u5BF9\u8C61\u4E4B\u5916</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-invalid-this&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 __iterator__ \u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-iterator&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u6807\u7B7E\u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-labels&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u4E0D\u5FC5\u8981\u7684\u5D4C\u5957\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-lone-blocks&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u5FAA\u73AF\u4E2D\u51FA\u73B0 function \u58F0\u660E\u548C\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-loop-func&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u9B54\u672F\u6570\u5B57(3.14\u4EC0\u4E48\u7684\u7528\u5E38\u91CF\u4EE3\u66FF)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-magic-numbers&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ignore: [0, -1, 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528\u591A\u4E2A\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-multi-spaces&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528\u591A\u884C\u5B57\u7B26\u4E32\uFF0C\u5728 JavaScript \u4E2D\uFF0C\u53EF\u4EE5\u5728\u65B0\u884C\u4E4B\u524D\u4F7F\u7528\u659C\u7EBF\u521B\u5EFA\u591A\u884C\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-multi-str&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5BF9\u539F\u751F\u5BF9\u8C61\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-native-reassign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u975E\u8D4B\u503C\u6216\u6761\u4EF6\u8BED\u53E5\u4E2D\u4F7F\u7528 new \u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5BF9 Function \u5BF9\u8C61\u4F7F\u7528 new \u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new-func&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5BF9 String\uFF0CNumber \u548C Boolean \u4F7F\u7528 new \u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new-wrappers&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u516B\u8FDB\u5236\u5B57\u9762\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-octal&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528\u516B\u8FDB\u5236\u8F6C\u4E49\u5E8F\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-octal-escape&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u5BF9 function \u7684\u53C2\u6570\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-param-reassign&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 __proto__ \u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-proto&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528 var \u591A\u6B21\u58F0\u660E\u540C\u4E00\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-redeclare&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u6307\u5B9A\u7684\u901A\u8FC7 require \u52A0\u8F7D\u7684\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-return-assign&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528 javascript: url</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-script-url&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u81EA\u6211\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-self-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u81EA\u8EAB\u6BD4\u8F83</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-self-compare&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u9017\u53F7\u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-sequences&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u629B\u51FA\u975E\u5F02\u5E38\u5B57\u9762\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-throw-literal&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u4E00\u6210\u4E0D\u53D8\u7684\u5FAA\u73AF\u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unmodified-loop-condition&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u51FA\u73B0\u672A\u4F7F\u7528\u8FC7\u7684\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unused-expressions&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u672A\u4F7F\u7528\u8FC7\u7684\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unused-labels&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4E0D\u5FC5\u8981\u7684 .call() \u548C .apply()</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-useless-call&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u6216\u6A21\u677F\u5B57\u9762\u91CF\u7684\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-useless-concat&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u4E0D\u5FC5\u8981\u7684\u8F6C\u4E49\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-useless-escape&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 void \u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-void&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u6CE8\u91CA\u4E2D\u4F7F\u7528\u7279\u5B9A\u7684\u8B66\u544A\u672F\u8BED</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-warning-comments&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 with \u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-with&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728parseInt()\u4F7F\u7528\u57FA\u6570\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    radix: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6240\u6709\u7684 var \u58F0\u660E\u51FA\u73B0\u5728\u5B83\u4EEC\u6240\u5728\u7684\u4F5C\u7528\u57DF\u9876\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;vars-on-top&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42 IIFE \u4F7F\u7528\u62EC\u53F7\u62EC\u8D77\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;wrap-iife&#39;: [2, &#39;any&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62 \u201CYoda\u201D \u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    yoda: [2, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\u6307\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">    strict: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53D8\u91CF\u58F0\u660E //</span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62 var \u58F0\u660E\u4E2D\u7684\u521D\u59CB\u5316(\u521D\u503C)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;init-declarations&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8 catch \u5B50\u53E5\u7684\u53C2\u6570\u4E0E\u5916\u5C42\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u540C\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-catch-shadow&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5220\u9664\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-delete-var&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u6807\u7B7E\u4E0E\u53D8\u91CF\u540C\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-label-var&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u7279\u5B9A\u7684\u5168\u5C40\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-restricted-globals&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62 var \u58F0\u660E \u4E0E\u5916\u5C42\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u540C\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-shadow&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u8986\u76D6\u53D7\u9650\u5236\u7684\u6807\u8BC6\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-shadow-restricted-names&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u672A\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u9664\u975E\u5B83\u4EEC\u5728 /*global */ \u6CE8\u91CA\u4E2D\u88AB\u63D0\u5230</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-undef&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5C06\u53D8\u91CF\u521D\u59CB\u5316\u4E3A undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-undef-init&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5C06 undefined \u4F5C\u4E3A\u6807\u8BC6\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-undefined&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u51FA\u73B0\u672A\u4F7F\u7528\u8FC7\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unused-vars&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        vars: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        args: &#39;none&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u5728\u53D8\u91CF\u5B9A\u4E49\u4E4B\u524D\u4F7F\u7528\u5B83\u4EEC</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-use-before-define&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Node.js and CommonJS //</span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // require return statements after callbacks</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;callback-return&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42 require() \u51FA\u73B0\u5728\u9876\u5C42\u6A21\u5757\u4F5C\u7528\u57DF\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;global-require&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u56DE\u8C03\u51FD\u6570\u4E2D\u6709\u5BB9\u9519\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;handle-callback-err&#39;: [2, &#39;^(err|error)$&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u6DF7\u5408\u5E38\u89C4 var \u58F0\u660E\u548C require \u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-mixed-requires&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u8C03\u7528 require \u65F6\u4F7F\u7528 new \u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new-require&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5BF9 __dirname \u548C __filename\u8FDB\u884C\u5B57\u7B26\u4E32\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-path-concat&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 p<wbr>rocess.env</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-process-env&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 process.exit()</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-process-exit&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u540C\u6B65\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-sync&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u98CE\u683C\u6307\u5357 //</span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6307\u5B9A\u6570\u7EC4\u7684\u5143\u7D20\u4E4B\u95F4\u8981\u4EE5\u7A7A\u683C\u9694\u5F00(, \u540E\u9762)\uFF0C never\u53C2\u6570\uFF1A[ \u4E4B\u524D\u548C ] \u4E4B\u540E\u4E0D\u80FD\u5E26\u7A7A\u683C\uFF0Calways\u53C2\u6570\uFF1A[ \u4E4B\u524D\u548C ] \u4E4B\u540E\u5FC5\u987B\u5E26\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;array-bracket-spacing&#39;: [2, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u6216\u5F3A\u5236\u5728\u5355\u884C\u4EE3\u7801\u5757\u4E2D\u4F7F\u7528\u7A7A\u683C(\u7981\u7528)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;block-spacing&#39;: [1, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5F3A\u5236\u4F7F\u7528\u4E00\u81F4\u7684\u7F29\u8FDB \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A &quot;tab&quot; \u65F6\uFF0C\u4F1A\u4F7F\u7528tab\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    // if while function \u540E\u9762\u7684{\u5FC5\u987B\u4E0Eif\u5728\u540C\u4E00\u884C\uFF0Cjava\u98CE\u683C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;brace-style&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;1tbs&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        allowSingleLine: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53CC\u5CF0\u9A7C\u547D\u540D\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    camelcase: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u63A7\u5236\u9017\u53F7\u524D\u540E\u7684\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;comma-spacing&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        before: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        after: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u63A7\u5236\u9017\u53F7\u5728\u884C\u5C3E\u51FA\u73B0\u8FD8\u662F\u5728\u884C\u9996\u51FA\u73B0 (\u9ED8\u8BA4\u884C\u5C3E)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // http://eslint.org/docs/rules/comma-style</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;comma-style&#39;: [2, &#39;last&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    //&quot;SwitchCase&quot; (\u9ED8\u8BA4\uFF1A0) \u5F3A\u5236 switch \u8BED\u53E5\u4E2D\u7684 case \u5B50\u53E5\u7684\u7F29\u8FDB\u6C34\u5E73</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4EE5\u65B9\u62EC\u53F7\u53D6\u5BF9\u8C61\u5C5E\u6027\u65F6\uFF0C[ \u540E\u9762\u548C ] \u524D\u9762\u662F\u5426\u9700\u8981\u7A7A\u683C, \u53EF\u9009\u53C2\u6570 never, always</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;computed-property-spacing&#39;: [2, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7528\u4E8E\u6307\u7EDF\u4E00\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u6307\u5411this\u7684\u53D8\u91CF\u540D\uFF0C\u7BAD\u5934\u51FD\u6570\u4E2D\u7684this\u5DF2\u7ECF\u53EF\u4EE5\u6307\u5411\u5916\u5C42\u8C03\u7528\u8005\uFF0C\u5E94\u8BE5\u6CA1\u5375\u7528\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">    // e.g [0,&quot;that&quot;] \u6307\u5B9A\u53EA\u80FD var that = this. that\u4E0D\u80FD\u6307\u5411\u5176\u4ED6\u4EFB\u4F55\u503C\uFF0Cthis\u4E5F\u4E0D\u80FD\u8D4B\u503C\u7ED9that\u4EE5\u5916\u7684\u5176\u4ED6\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;consistent-this&#39;: [1, &#39;that&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u4F7F\u7528\u547D\u540D\u7684 function \u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;func-names&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6587\u4EF6\u672B\u5C3E\u5F3A\u5236\u6362\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;eol-last&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    indent: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      4,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        SwitchCase: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u5C5E\u6027\u4E2D\u952E\u548C\u503C\u4E4B\u95F4\u4F7F\u7528\u4E00\u81F4\u7684\u95F4\u8DDD</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;key-spacing&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        beforeColon: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        afterColon: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u4F7F\u7528\u4E00\u81F4\u7684\u6362\u884C\u98CE\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;linebreak-style&#39;: [1, &#39;unix&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u5728\u6CE8\u91CA\u5468\u56F4\u6709\u7A7A\u884C ( \u8981\u6C42\u5728\u5757\u7EA7\u6CE8\u91CA\u4E4B\u524D\u6709\u4E00\u7A7A\u884C)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;lines-around-comment&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        beforeBlockComment: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u4E00\u81F4\u5730\u4F7F\u7528\u51FD\u6570\u58F0\u660E\u6216\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u65B9\u6CD5\u5B9A\u4E49\u98CE\u683C\uFF0C\u53C2\u6570\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    // declaration: \u5F3A\u5236\u4F7F\u7528\u65B9\u6CD5\u58F0\u660E\u7684\u65B9\u5F0F\uFF0Cfunction f(){} e.g [2, &quot;declaration&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // expression\uFF1A\u5F3A\u5236\u4F7F\u7528\u65B9\u6CD5\u8868\u8FBE\u5F0F\u7684\u65B9\u5F0F\uFF0Cvar f = function() {} e.g [2, &quot;expression&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // allowArrowFunctions: declaration\u98CE\u683C\u4E2D\u5141\u8BB8\u7BAD\u5934\u51FD\u6570\u3002 e.g [2, &quot;declaration&quot;, { &quot;allowArrowFunctions&quot;: true }]</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;func-style&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u56DE\u8C03\u51FD\u6570\u6700\u5927\u5D4C\u5957\u6DF1\u5EA6 5\u5C42</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-nested-callbacks&#39;: [1, 5],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684\u6807\u8BC6\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;id-blacklist&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u6807\u8BC6\u7B26\u7684\u6700\u65B0\u548C\u6700\u5927\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;id-length&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6807\u8BC6\u7B26\u5339\u914D\u4E00\u4E2A\u6307\u5B9A\u7684\u6B63\u5219\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;id-match&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728 JSX \u5C5E\u6027\u4E2D\u4E00\u81F4\u5730\u4F7F\u7528\u53CC\u5F15\u53F7\u6216\u5355\u5F15\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;jsx-quotes&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728\u5173\u952E\u5B57\u524D\u540E\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C (\u524D\u540E\u8170\u9700\u8981)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;keyword-spacing&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u4E00\u884C\u7684\u6700\u5927\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-len&#39;: [1, 200],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u6700\u5927\u884C\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-lines&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236 function \u5B9A\u4E49\u4E2D\u6700\u591A\u5141\u8BB8\u7684\u53C2\u6570\u6570\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-params&#39;: [1, 7],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236 function \u5757\u6700\u591A\u5141\u8BB8\u7684\u7684\u8BED\u53E5\u6570\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-statements&#39;: [1, 200],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u6BCF\u4E00\u884C\u4E2D\u6240\u5141\u8BB8\u7684\u6700\u5927\u8BED\u53E5\u6570\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-statements-per-line&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6784\u9020\u51FD\u6570\u9996\u5B57\u6BCD\u5927\u5199 \uFF08\u8981\u6C42\u8C03\u7528 new \u64CD\u4F5C\u7B26\u65F6\u6709\u9996\u5B57\u6BCD\u5927\u5C0F\u7684\u51FD\u6570\uFF0C\u5141\u8BB8\u8C03\u7528\u9996\u5B57\u6BCD\u5927\u5199\u7684\u51FD\u6570\u65F6\u6CA1\u6709 new \u64CD\u4F5C\u7B26\u3002\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;new-cap&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        newIsCap: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        capIsNew: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u8C03\u7528\u65E0\u53C2\u6784\u9020\u51FD\u6570\u65F6\u6709\u5706\u62EC\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;new-parens&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62 var \u58F0\u660E\u8BED\u53E5\u540E\u6709\u4E00\u884C\u7A7A\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;newline-after-var&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528 Array \u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-array-constructor&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u6309\u4F4D\u8FD0\u7B97\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-bitwise&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42 return \u8BED\u53E5\u4E4B\u524D\u6709\u4E00\u7A7A\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;newline-before-return&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u65B9\u6CD5\u94FE\u4E2D\u6BCF\u4E2A\u8C03\u7528\u90FD\u6709\u4E00\u4E2A\u6362\u884C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;newline-per-chained-call&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528 continue \u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-continue&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u4EE3\u7801\u884C\u540E\u4F7F\u7528\u5185\u8054\u6CE8\u91CA</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-inline-comments&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62 if \u4F5C\u4E3A\u552F\u4E00\u7684\u8BED\u53E5\u51FA\u73B0\u5728 else \u8BED\u53E5\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-lonely-if&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u6DF7\u5408\u4F7F\u7528\u4E0D\u540C\u7684\u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-mixed-operators&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u7A7A\u683C\u548C tab \u6DF7\u5408\u7F29\u8FDB</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-mixed-spaces-and-tabs&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u591A\u4E2A\u7A7A\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-multiple-empty-lines&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        max: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u5426\u5B9A\u7684\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-negated-condition&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u4F7F\u7528\u5D4C\u5957\u7684\u4E09\u5143\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-nested-ternary&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528 Object \u7684\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new-object&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528\u4E00\u5143\u64CD\u4F5C\u7B26 ++ \u548C --</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-plusplus&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4F7F\u7528\u7279\u5B9A\u7684\u8BED\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-restricted-syntax&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62 function \u6807\u8BC6\u7B26\u548C\u62EC\u53F7\u4E4B\u95F4\u51FA\u73B0\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-spaced-func&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u4F7F\u7528\u4E09\u5143\u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-ternary&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u7528\u884C\u5C3E\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-trailing-spaces&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u6807\u8BC6\u7B26\u4E2D\u6709\u60AC\u7A7A\u4E0B\u5212\u7EBF_bar</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-underscore-dangle&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u53EF\u4EE5\u5728\u6709\u66F4\u7B80\u5355\u7684\u53EF\u66FF\u4EE3\u7684\u8868\u8FBE\u5F0F\u65F6\u4F7F\u7528\u4E09\u5143\u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unneeded-ternary&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5C5E\u6027\u524D\u6709\u7A7A\u767D</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-whitespace-before-property&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u82B1\u62EC\u53F7\u5185\u6362\u884C\u7B26\u7684\u4E00\u81F4\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;object-curly-newline&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728\u82B1\u62EC\u53F7\u4E2D\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;object-curly-spacing&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5C06\u5BF9\u8C61\u7684\u5C5E\u6027\u653E\u5728\u4E0D\u540C\u7684\u884C\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;object-property-newline&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u51FD\u6570\u4E2D\u7684\u53D8\u91CF\u8981\u4E48\u4E00\u8D77\u58F0\u660E\u8981\u4E48\u5206\u5F00\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;one-var&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        initialized: &#39;never&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62\u5728 var \u58F0\u660E\u5468\u56F4\u6362\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;one-var-declaration-per-line&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62\u5728\u53EF\u80FD\u7684\u60C5\u51B5\u4E0B\u8981\u6C42\u4F7F\u7528\u7B80\u5316\u7684\u8D4B\u503C\u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;operator-assignment&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u64CD\u4F5C\u7B26\u4F7F\u7528\u4E00\u81F4\u7684\u6362\u884C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;operator-linebreak&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;after&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        overrides: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;?&#39;: &#39;before&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;:&#39;: &#39;before&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62\u5757\u5185\u586B\u5145</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;padded-blocks&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u5BF9\u8C61\u5B57\u9762\u91CF\u5C5E\u6027\u540D\u79F0\u7528\u5F15\u53F7\u62EC\u8D77\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;quote-props&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u4F7F\u7528\u4E00\u81F4\u7684\u53CD\u52FE\u53F7\u3001\u53CC\u5F15\u53F7\u6216\u5355\u5F15\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">    quotes: [2, &#39;double&#39;, &#39;avoid-escape&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u4F7F\u7528 JSDoc \u6CE8\u91CA</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;require-jsdoc&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62\u4F7F\u7528\u5206\u53F7\u800C\u4E0D\u662F ASI\uFF08\u8FD9\u4E2A\u624D\u662F\u63A7\u5236\u884C\u5C3E\u90E8\u5206\u53F7\u7684\uFF0C\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    semi: [2, &#39;always&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5206\u53F7\u4E4B\u524D\u548C\u4E4B\u540E\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;semi-spacing&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u540C\u4E00\u4E2A\u58F0\u660E\u5757\u4E2D\u7684\u53D8\u91CF\u6309\u987A\u5E8F\u6392\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;sort-vars&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728\u5757\u4E4B\u524D\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;space-before-blocks&#39;: [2, &#39;always&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728 function\u7684\u5DE6\u62EC\u53F7\u4E4B\u524D\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;space-before-function-paren&#39;: [0, &#39;always&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728\u5706\u62EC\u53F7\u5185\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;space-in-parens&#39;: [2, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u64CD\u4F5C\u7B26\u5468\u56F4\u6709\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;space-infix-ops&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728\u4E00\u5143\u64CD\u4F5C\u7B26\u524D\u540E\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;space-unary-ops&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        words: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        nonwords: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728\u6CE8\u91CA\u4E2D // \u6216 /* \u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;spaced-comment&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;always&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        markers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;global&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;globals&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;eslint&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;eslint-disable&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;*package&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62 Unicode BOM</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;unicode-bom&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6B63\u5219\u8868\u8FBE\u5F0F\u88AB\u62EC\u53F7\u62EC\u8D77\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;wrap-regex&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ES6.\u76F8\u5173 //</span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u7BAD\u5934\u51FD\u6570\u4F53\u4F7F\u7528\u5927\u62EC\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;arrow-body-style&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u7BAD\u5934\u51FD\u6570\u7684\u53C2\u6570\u4F7F\u7528\u5706\u62EC\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;arrow-parens&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;arrow-spacing&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        before: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        after: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728\u5B50\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u7528super()\u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570\uFF0CTypeScrip\u7684\u7F16\u8BD1\u5668\u4E5F\u4F1A\u63D0\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;constructor-super&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236 generator \u51FD\u6570\u4E2D * \u53F7\u5468\u56F4\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;generator-star-spacing&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        before: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        after: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4FEE\u6539\u7C7B\u58F0\u660E\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-class-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u7BAD\u5934\u529F\u80FD\uFF0C\u5728\u90A3\u91CC\u4ED6\u4EEC\u53EF\u4EE5\u6DF7\u6DC6\u7684\u6BD4\u8F83</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-confusing-arrow&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4FEE\u6539 const \u58F0\u660E\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-const-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u7C7B\u6210\u5458\u4E2D\u51FA\u73B0\u91CD\u590D\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-dupe-class-members&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u5141\u8BB8\u590D\u5236\u6A21\u5757\u7684\u8FDB\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-duplicate-imports&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62 Symbol \u7684\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new-symbol&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5141\u8BB8\u6307\u5B9A\u6A21\u5757\u52A0\u8F7D\u65F6\u7684\u8FDB\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-restricted-imports&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u5728\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u5728\u8C03\u7528 super() \u4E4B\u524D\u4F7F\u7528 this \u6216 super</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-this-before-super&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u8BA1\u7B97\u6027\u80FD\u952E\u5BF9\u8C61\u7684\u6587\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-useless-computed-key&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u4F7F\u7528 let \u6216 const \u800C\u4E0D\u662F var</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-var&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u65B9\u6CD5\u548C\u5C5E\u6027\u4F7F\u7528\u7B80\u5199\u8BED\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;object-shorthand&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u4F5C\u4E3A\u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-arrow-callback&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u4F7F\u7528 const \u58F0\u660E\u90A3\u4E9B\u58F0\u660E\u540E\u4E0D\u518D\u88AB\u4FEE\u6539\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-const&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u5728\u5408\u9002\u7684\u5730\u65B9\u4F7F\u7528 Reflect \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-reflect&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u800C\u975E .apply()</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-spread&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u4F7F\u7528\u6A21\u677F\u5B57\u9762\u91CF\u800C\u975E\u5B57\u7B26\u4E32\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-template&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Suggest using the rest parameters instead of arguments</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-rest-params&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42generator \u51FD\u6570\u5185\u6709 yield</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;require-yield&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // enforce spacing between rest and spread operators and their expressions</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;rest-spread-spacing&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u6A21\u5757\u5185\u7684 import \u6392\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;sort-imports&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8981\u6C42\u6216\u7981\u6B62\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u7684\u5D4C\u5165\u8868\u8FBE\u5F0F\u5468\u56F4\u7A7A\u683C\u7684\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;template-curly-spacing&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F3A\u5236\u5728 yield* \u8868\u8FBE\u5F0F\u4E2D * \u5468\u56F4\u4F7F\u7528\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;yield-star-spacing&#39;: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{  </span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;env&quot;: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;browser&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;node&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;commonjs&quot;: true  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;ecmaFeatures&quot;: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // lambda\u8868\u8FBE\u5F0F  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;arrowFunctions&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u89E3\u6784\u8D4B\u503C  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;destructuring&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // class  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;classes&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/function#\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;defaultParams&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5141\u8BB8\u4F7F\u7528let const  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;blockBindings&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5141\u8BB8\u4F7F\u7528\u6A21\u5757\uFF0C\u6A21\u5757\u5185\u9ED8\u8BA4\u4E25\u683C\u6A21\u5F0F  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;modules&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5141\u8BB8\u5B57\u9762\u91CF\u5B9A\u4E49\u5BF9\u8C61\u65F6\uFF0C\u7528\u8868\u8FBE\u5F0F\u505A\u5C5E\u6027\u540D  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/object#\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;objectLiteralComputedProperties&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5141\u8BB8\u5BF9\u8C61\u5B57\u9762\u91CF\u65B9\u6CD5\u540D\u7B80\u5199  </span></span>
<span class="line"><span style="color:#A6ACCD;">      /*var o = {</span></span>
<span class="line"><span style="color:#A6ACCD;">          method() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return &quot;Hello!&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">       };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       \u7B49\u540C\u4E8E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       var o = {</span></span>
<span class="line"><span style="color:#A6ACCD;">         method: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">           return &quot;Hello!&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       };</span></span>
<span class="line"><span style="color:#A6ACCD;">      */  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;objectLiteralShorthandMethods&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      /*</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u5BF9\u8C61\u5B57\u9762\u91CF\u5C5E\u6027\u540D\u7B80\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">        var foo = &#39;bar&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var baz = {foo};</span></span>
<span class="line"><span style="color:#A6ACCD;">        baz // {foo: &quot;bar&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u7B49\u540C\u4E8E</span></span>
<span class="line"><span style="color:#A6ACCD;">        var baz = {foo: foo};</span></span>
<span class="line"><span style="color:#A6ACCD;">      */  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;objectLiteralShorthandProperties&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/function#rest\u53C2\u6570  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;restParams&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/function#\u6269\u5C55\u8FD0\u7B97\u7B26  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;spread&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/iterator#for---of\u5FAA\u73AF  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;forOf&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/generator  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;generators&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/string#\u6A21\u677F\u5B57\u7B26\u4E32  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;templateStrings&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;superInFunctions&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/object#\u5BF9\u8C61\u7684\u6269\u5C55\u8FD0\u7B97\u7B26  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;experimentalObjectRestSpread&quot;: true  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;rules&quot;: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5B9A\u4E49\u5BF9\u8C61\u7684set\u5B58\u53D6\u5668\u5C5E\u6027\u65F6\uFF0C\u5F3A\u5236\u5B9A\u4E49get  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;accessor-pairs&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u6307\u5B9A\u6570\u7EC4\u7684\u5143\u7D20\u4E4B\u95F4\u8981\u4EE5\u7A7A\u683C\u9694\u5F00(,\u540E\u9762)\uFF0C never\u53C2\u6570\uFF1A[ \u4E4B\u524D\u548C ] \u4E4B\u540E\u4E0D\u80FD\u5E26\u7A7A\u683C\uFF0Calways\u53C2\u6570\uFF1A[ \u4E4B\u524D\u548C ] \u4E4B\u540E\u5FC5\u987B\u5E26\u7A7A\u683C  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;array-bracket-spacing&quot;: [2, &quot;never&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u5916\u8BBF\u95EE\u5757\u5185\u5B9A\u4E49\u7684\u53D8\u91CF\u662F\u5426\u62A5\u9519\u63D0\u793A  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;block-scoped-var&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // if while function \u540E\u9762\u7684{\u5FC5\u987B\u4E0Eif\u5728\u540C\u4E00\u884C\uFF0Cjava\u98CE\u683C\u3002  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;brace-style&quot;: [2, &quot;1tbs&quot;, { &quot;allowSingleLine&quot;: true }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u53CC\u5CF0\u9A7C\u547D\u540D\u683C\u5F0F  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;camelcase&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u6570\u7EC4\u548C\u5BF9\u8C61\u952E\u503C\u5BF9\u6700\u540E\u4E00\u4E2A\u9017\u53F7\uFF0C never\u53C2\u6570\uFF1A\u4E0D\u80FD\u5E26\u672B\u5C3E\u7684\u9017\u53F7, always\u53C2\u6570\uFF1A\u5FC5\u987B\u5E26\u672B\u5C3E\u7684\u9017\u53F7\uFF0C  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // always-multiline\uFF1A\u591A\u884C\u6A21\u5F0F\u5FC5\u987B\u5E26\u9017\u53F7\uFF0C\u5355\u884C\u6A21\u5F0F\u4E0D\u80FD\u5E26\u9017\u53F7  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;comma-dangle&quot;: [2, &quot;never&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u63A7\u5236\u9017\u53F7\u524D\u540E\u7684\u7A7A\u683C  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;comma-spacing&quot;: [2, { &quot;before&quot;: false, &quot;after&quot;: true }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u63A7\u5236\u9017\u53F7\u5728\u884C\u5C3E\u51FA\u73B0\u8FD8\u662F\u5728\u884C\u9996\u51FA\u73B0  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://eslint.org/docs/rules/comma-style  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;comma-style&quot;: [2, &quot;last&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5708\u590D\u6742\u5EA6  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;complexity&quot;: [2,9],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u4EE5\u65B9\u62EC\u53F7\u53D6\u5BF9\u8C61\u5C5E\u6027\u65F6\uFF0C[ \u540E\u9762\u548C ] \u524D\u9762\u662F\u5426\u9700\u8981\u7A7A\u683C, \u53EF\u9009\u53C2\u6570 never, always  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;computed-property-spacing&quot;: [2,&quot;never&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5F3A\u5236\u65B9\u6CD5\u5FC5\u987B\u8FD4\u56DE\u503C\uFF0CTypeScript\u5F3A\u7C7B\u578B\uFF0C\u4E0D\u914D\u7F6E  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;consistent-return&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u7528\u4E8E\u6307\u7EDF\u4E00\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u6307\u5411this\u7684\u53D8\u91CF\u540D\uFF0C\u7BAD\u5934\u51FD\u6570\u4E2D\u7684this\u5DF2\u7ECF\u53EF\u4EE5\u6307\u5411\u5916\u5C42\u8C03\u7528\u8005\uFF0C\u5E94\u8BE5\u6CA1\u5375\u7528\u4E86  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // e.g [0,&quot;that&quot;] \u6307\u5B9A\u53EA\u80FD var that = this. that\u4E0D\u80FD\u6307\u5411\u5176\u4ED6\u4EFB\u4F55\u503C\uFF0Cthis\u4E5F\u4E0D\u80FD\u8D4B\u503C\u7ED9that\u4EE5\u5916\u7684\u5176\u4ED6\u503C  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;consistent-this&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5F3A\u5236\u5728\u5B50\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u7528super()\u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570\uFF0CTypeScrip\u7684\u7F16\u8BD1\u5668\u4E5F\u4F1A\u63D0\u793A  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;constructor-super&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // if else while for do\u540E\u9762\u7684\u4EE3\u7801\u5757\u662F\u5426\u9700\u8981{ }\u5305\u56F4\uFF0C\u53C2\u6570\uFF1A  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    multi  \u53EA\u6709\u5757\u4E2D\u6709\u591A\u884C\u8BED\u53E5\u65F6\u624D\u9700\u8981{ }\u5305\u56F4  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    multi-line  \u53EA\u6709\u5757\u4E2D\u6709\u591A\u884C\u8BED\u53E5\u65F6\u624D\u9700\u8981{ }\u5305\u56F4, \u4F46\u662F\u5757\u4E2D\u7684\u6267\u884C\u8BED\u53E5\u53EA\u6709\u4E00\u884C\u65F6\uFF0C  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //                   \u5757\u4E2D\u7684\u8BED\u53E5\u53EA\u80FD\u8DDF\u548Cif\u8BED\u53E5\u5728\u540C\u4E00\u884C\u3002if (foo) foo++; else doSomething();  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    multi-or-nest \u53EA\u6709\u5757\u4E2D\u6709\u591A\u884C\u8BED\u53E5\u65F6\u624D\u9700\u8981{ }\u5305\u56F4, \u5982\u679C\u5757\u4E2D\u7684\u6267\u884C\u8BED\u53E5\u53EA\u6709\u4E00\u884C\uFF0C\u6267\u884C\u8BED\u53E5\u53EF\u4EE5\u96F6\u53E6\u8D77\u4E00\u884C\u4E5F\u53EF\u4EE5\u8DDF\u5728if\u8BED\u53E5\u540E\u9762  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    [2, &quot;multi&quot;, &quot;consistent&quot;] \u4FDD\u6301\u524D\u540E\u8BED\u53E5\u7684{ }\u4E00\u81F4  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    default: [2, &quot;all&quot;] \u5168\u90FD\u9700\u8981{ }\u5305\u56F4  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;curly&quot;: [2, &quot;all&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // switch\u8BED\u53E5\u5F3A\u5236default\u5206\u652F\uFF0C\u4E5F\u53EF\u6DFB\u52A0 // no default \u6CE8\u91CA\u53D6\u6D88\u6B64\u6B21\u8B66\u544A  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;default-case&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5F3A\u5236object.key \u4E2D . \u7684\u4F4D\u7F6E\uFF0C\u53C2\u6570:  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //      property\uFF0C&#39;.&#39;\u53F7\u5E94\u4E0E\u5C5E\u6027\u5728\u540C\u4E00\u884C  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //      object, &#39;.&#39; \u53F7\u5E94\u4E0E\u5BF9\u8C61\u540D\u5728\u540C\u4E00\u884C  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;dot-location&quot;: [2, &quot;property&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5F3A\u5236\u4F7F\u7528.\u53F7\u53D6\u5C5E\u6027  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    \u53C2\u6570\uFF1A allowKeywords\uFF1Atrue \u4F7F\u7528\u4FDD\u7559\u5B57\u505A\u5C5E\u6027\u540D\u65F6\uFF0C\u53EA\u80FD\u4F7F\u7528.\u65B9\u5F0F\u53D6\u5C5E\u6027  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //                          false \u4F7F\u7528\u4FDD\u7559\u5B57\u505A\u5C5E\u6027\u540D\u65F6, \u53EA\u80FD\u4F7F\u7528[]\u65B9\u5F0F\u53D6\u5C5E\u6027 e.g [2, {&quot;allowKeywords&quot;: false}]  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //           allowPattern:  \u5F53\u5C5E\u6027\u540D\u5339\u914D\u63D0\u4F9B\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u65F6\uFF0C\u5141\u8BB8\u4F7F\u7528[]\u65B9\u5F0F\u53D6\u503C,\u5426\u5219\u53EA\u80FD\u7528.\u53F7\u53D6\u503C e.g [2, {&quot;allowPattern&quot;: &quot;^[a-z]+(_[a-z]+)+$&quot;}]  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;dot-notation&quot;: [2, {&quot;allowKeywords&quot;: true}],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u6587\u4EF6\u672B\u5C3E\u5F3A\u5236\u6362\u884C  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;eol-last&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u4F7F\u7528 === \u66FF\u4EE3 ==  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;eqeqeq&quot;: [2, &quot;allow-null&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u65B9\u6CD5\u8868\u8FBE\u5F0F\u662F\u5426\u9700\u8981\u547D\u540D  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;func-names&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u65B9\u6CD5\u5B9A\u4E49\u98CE\u683C\uFF0C\u53C2\u6570\uFF1A  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    declaration: \u5F3A\u5236\u4F7F\u7528\u65B9\u6CD5\u58F0\u660E\u7684\u65B9\u5F0F\uFF0Cfunction f(){} e.g [2, &quot;declaration&quot;]  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    expression\uFF1A\u5F3A\u5236\u4F7F\u7528\u65B9\u6CD5\u8868\u8FBE\u5F0F\u7684\u65B9\u5F0F\uFF0Cvar f = function() {}  e.g [2, &quot;expression&quot;]  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    allowArrowFunctions: declaration\u98CE\u683C\u4E2D\u5141\u8BB8\u7BAD\u5934\u51FD\u6570\u3002 e.g [2, &quot;declaration&quot;, { &quot;allowArrowFunctions&quot;: true }]  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;func-style&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;generator-star-spacing&quot;: [2, { &quot;before&quot;: true, &quot;after&quot;: true }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;guard-for-in&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;handle-callback-err&quot;: [2, &quot;^(err|error)$&quot; ],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;indent&quot;: [2, 2, { &quot;SwitchCase&quot;: 1 }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;key-spacing&quot;: [2, { &quot;beforeColon&quot;: false, &quot;afterColon&quot;: true }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;linebreak-style&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;lines-around-comment&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;max-nested-callbacks&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;new-cap&quot;: [2, { &quot;newIsCap&quot;: true, &quot;capIsNew&quot;: false }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;new-parens&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;newline-after-var&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-alert&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-array-constructor&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-caller&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-catch-shadow&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-cond-assign&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-console&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-constant-condition&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-continue&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-control-regex&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-debugger&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-delete-var&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-div-regex&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-dupe-args&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-dupe-keys&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-duplicate-case&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-else-return&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-empty&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-empty-character-class&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-empty-label&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-eq-null&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-eval&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-ex-assign&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-extend-native&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-extra-bind&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-extra-boolean-cast&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-extra-parens&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-extra-semi&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-fallthrough&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-floating-decimal&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-func-assign&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-implied-eval&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-inline-comments&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-inner-declarations&quot;: [2, &quot;functions&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-invalid-regexp&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-irregular-whitespace&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-iterator&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-label-var&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-labels&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-lone-blocks&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-lonely-if&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-loop-func&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-mixed-requires&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-mixed-spaces-and-tabs&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-multi-spaces&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-multi-str&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-multiple-empty-lines&quot;: [2, { &quot;max&quot;: 1 }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-native-reassign&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-negated-in-lhs&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-nested-ternary&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-new&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-new-func&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-new-object&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-new-require&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-new-wrappers&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-obj-calls&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-octal&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-octal-escape&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-param-reassign&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-path-concat&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-process-env&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-process-exit&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-proto&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-redeclare&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-regex-spaces&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-restricted-modules&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-return-assign&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-script-url&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-self-compare&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-sequences&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-shadow&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-shadow-restricted-names&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-spaced-func&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-sparse-arrays&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-sync&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-ternary&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-this-before-super&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-throw-literal&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-trailing-spaces&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-undef&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-undef-init&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-undefined&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-underscore-dangle&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-unexpected-multiline&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-unneeded-ternary&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-unreachable&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-unused-expressions&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-unused-vars&quot;: [2, { &quot;vars&quot;: &quot;all&quot;, &quot;args&quot;: &quot;none&quot; }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-use-before-define&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-var&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-void&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-warning-comments&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;no-with&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;object-curly-spacing&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;object-shorthand&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;one-var&quot;: [2, { &quot;initialized&quot;: &quot;never&quot; }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;operator-assignment&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;operator-linebreak&quot;: [2, &quot;after&quot;, { &quot;overrides&quot;: { &quot;?&quot;: &quot;before&quot;, &quot;:&quot;: &quot;before&quot; } }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;padded-blocks&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;prefer-const&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;quote-props&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;quotes&quot;: [2, &quot;single&quot;, &quot;avoid-escape&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;radix&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;semi&quot;: [2, &quot;never&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;semi-spacing&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;sort-vars&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;space-after-keywords&quot;: [2, &quot;always&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;space-before-blocks&quot;: [2, &quot;always&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;space-before-function-paren&quot;: [2, &quot;always&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;space-in-parens&quot;: [2, &quot;never&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;space-infix-ops&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;space-return-throw-case&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;space-unary-ops&quot;: [2, { &quot;words&quot;: true, &quot;nonwords&quot;: false }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;spaced-comment&quot;: [2, &quot;always&quot;, { &quot;markers&quot;: [&quot;global&quot;, &quot;globals&quot;, &quot;eslint&quot;, &quot;eslint-disable&quot;, &quot;*package&quot;, &quot;!&quot;] }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;strict&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;use-isnan&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;valid-jsdoc&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;valid-typeof&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;vars-on-top&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;wrap-iife&quot;: [2, &quot;any&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;wrap-regex&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;yoda&quot;: [2, &quot;never&quot;]  </span></span>
<span class="line"><span style="color:#A6ACCD;">    }  </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),e=[o];function c(t,C,A,r,i,y){return a(),n("div",null,e)}const q=s(p,[["render",c]]);export{u as __pageData,q as default};
