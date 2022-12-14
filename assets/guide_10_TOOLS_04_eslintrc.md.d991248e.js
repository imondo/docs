import{_ as s,c as n,o as a,a as l}from"./app.44061fed.js";const u=JSON.parse('{"title":"eslintrc 文件示例和解释","description":"","frontmatter":{},"headers":[],"relativePath":"guide/10_TOOLS/04_eslintrc.md","lastUpdated":1671007742000}'),p={name:"guide/10_TOOLS/04_eslintrc.md"},o=l(`<h1 id="eslintrc-文件示例和解释" tabindex="-1">eslintrc 文件示例和解释 <a class="header-anchor" href="#eslintrc-文件示例和解释" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 环境定义了预定义的全局变量。</span></span>
<span class="line"><span style="color:#A6ACCD;">  env: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //环境定义了预定义的全局变量。更多在官网查看</span></span>
<span class="line"><span style="color:#A6ACCD;">    browser: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    node: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    commonjs: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    amd: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    es6: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    mocha: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // JavaScript 语言选项</span></span>
<span class="line"><span style="color:#A6ACCD;">  parserOptions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ECMAScript 版本</span></span>
<span class="line"><span style="color:#A6ACCD;">    ecmaVersion: 6,</span></span>
<span class="line"><span style="color:#A6ACCD;">    sourceType: &#39;module&#39;, //设置为 &quot;script&quot; (默认) 或 &quot;module&quot;（如果你的代码是 ECMAScript 模块)。</span></span>
<span class="line"><span style="color:#A6ACCD;">    //想使用的额外的语言特性:</span></span>
<span class="line"><span style="color:#A6ACCD;">    ecmaFeatures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 允许在全局作用域下使用 return 语句</span></span>
<span class="line"><span style="color:#A6ACCD;">      globalReturn: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // impliedStric</span></span>
<span class="line"><span style="color:#A6ACCD;">      impliedStrict: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 启用 JSX</span></span>
<span class="line"><span style="color:#A6ACCD;">      jsx: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      modules: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  //-----让eslint支持 JSX start</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [&#39;react&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  extends: [&#39;eslint:recommended&#39;, &#39;plugin:react/recommended&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  //-----让eslint支持 JSX end</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * &quot;off&quot; 或 0 - 关闭规则</span></span>
<span class="line"><span style="color:#A6ACCD;">   * &quot;warn&quot; 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),</span></span>
<span class="line"><span style="color:#A6ACCD;">   * &quot;error&quot; 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  rules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ////////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 可能的错误 //</span></span>
<span class="line"><span style="color:#A6ACCD;">    ////////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止条件表达式中出现赋值操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-cond-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 console</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-console&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在条件中使用常量表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">    // if (false) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // doSomethingUnfinished();</span></span>
<span class="line"><span style="color:#A6ACCD;">    // } //cuowu</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-constant-condition&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在正则表达式中使用控制字符 ：new RegExp(&quot;\\x1f&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-control-regex&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，</span></span>
<span class="line"><span style="color:#A6ACCD;">    // always-multiline：多行模式必须带逗号，单行模式不能带逗号</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;comma-dangle&#39;: [1, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 debugger</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-debugger&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止 function 定义中出现重名参数</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-dupe-args&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止对象字面量中出现重复的 key</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-dupe-keys&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止重复的 case 标签</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-duplicate-case&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止空语句块</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-empty&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在正则表达式中使用空字符集 (/^abc[]/)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-empty-character-class&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止对 catch 子句的参数重新赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-ex-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止不必要的布尔转换</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extra-boolean-cast&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止不必要的括号 //(a * b) + c;//报错</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extra-parens&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止不必要的分号</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extra-semi&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止对 function 声明重新赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-func-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在嵌套的块中出现 function 或 var 声明</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-inner-declarations&#39;: [2, &#39;functions&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止 RegExp 构造函数中无效的正则表达式字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-invalid-regexp&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在字符串和注释之外不规则的空白</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-irregular-whitespace&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在 in 表达式中出现否定的左操作数</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-negated-in-lhs&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止把全局对象 (Math 和 JSON) 作为函数调用 错误：var math = Math();</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-obj-calls&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止直接使用 Object.prototypes 的内置属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-prototype-builtins&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止正则表达式字面量中出现多个空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-regex-spaces&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用稀疏数组</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-sparse-arrays&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止出现令人困惑的多行表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unexpected-multiline&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在return、throw、continue 和 break语句之后出现不可达代码</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unreachable&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求使用 isNaN() 检查 NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;use-isnan&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制使用有效的 JSDoc 注释</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;valid-jsdoc&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制 typeof 表达式与有效的字符串进行比较</span></span>
<span class="line"><span style="color:#A6ACCD;">    // typeof foo === &quot;undefimed&quot; 错误</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;valid-typeof&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 最佳实践 //</span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 定义对象的set存取器属性时，强制定义get</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;accessor-pairs&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制数组方法的回调函数中有 return 语句</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;array-callback-return&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制把变量的使用限制在其定义的作用域范围内</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;block-scoped-var&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 限制圈复杂度，也就是类似if else能连续接多少个</span></span>
<span class="line"><span style="color:#A6ACCD;">    complexity: [2, 9],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求 return 语句要么总是指定返回的值，要么不指定</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;consistent-return&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制所有控制语句使用一致的括号风格</span></span>
<span class="line"><span style="color:#A6ACCD;">    curly: [2, &#39;all&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;default-case&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制object.key 中 . 的位置，参数:</span></span>
<span class="line"><span style="color:#A6ACCD;">    // property，&#39;.&#39;号应与属性在同一行</span></span>
<span class="line"><span style="color:#A6ACCD;">    // object, &#39;.&#39; 号应与对象名在同一行</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;dot-location&#39;: [2, &#39;property&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制使用.号取属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 参数： allowKeywords：true 使用保留字做属性名时，只能使用.方式取属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    // false 使用保留字做属性名时, 只能使用[]方式取属性 e.g [2, {&quot;allowKeywords&quot;: false}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // allowPattern: 当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值 e.g [2, {&quot;allowPattern&quot;: &quot;^[a-z]+(_[a-z]+)+$&quot;}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;dot-notation&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        allowKeywords: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 使用 === 替代 == allow-null允许null和undefined==</span></span>
<span class="line"><span style="color:#A6ACCD;">    eqeqeq: [2, &#39;allow-null&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求 for-in 循环中有一个 if 语句</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;guard-for-in&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 alert、confirm 和 prompt</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-alert&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 arguments.caller 或 arguments.callee</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-caller&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许在 case 子句中使用词法声明</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-case-declarations&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止除法操作符显式的出现在正则表达式开始的位置</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-div-regex&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止 if 语句中有 return 之后有 else</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-else-return&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-empty-function&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用空解构模式no-empty-pattern</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-empty-pattern&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在没有类型检查操作符的情况下与 null 进行比较</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-eq-null&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 eval()</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-eval&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止扩展原生类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extend-native&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止不必要的 .bind() 调用</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extra-bind&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用不必要的标签</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-extra-label:&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止 case 语句落空</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-fallthrough&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止数字字面量中使用前导和末尾小数点</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-floating-decimal&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用短符号进行类型转换(!!fOO)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-implicit-coercion&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在全局范围内使用 var 和命名的 function 声明</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-implicit-globals&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用类似 eval() 的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-implied-eval&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止 this 关键字出现在类和类对象之外</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-invalid-this&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 __iterator__ 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-iterator&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用标签语句</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-labels&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用不必要的嵌套块</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-lone-blocks&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在循环中出现 function 声明和表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-loop-func&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用魔术数字(3.14什么的用常量代替)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-magic-numbers&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ignore: [0, -1, 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用多个空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-multi-spaces&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-multi-str&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止对原生对象赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-native-reassign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在非赋值或条件语句中使用 new 操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止对 Function 对象使用 new 操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new-func&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止对 String，Number 和 Boolean 使用 new 操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new-wrappers&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用八进制字面量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-octal&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在字符串中使用八进制转义序列</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-octal-escape&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许对 function 的参数进行重新赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-param-reassign&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 __proto__ 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-proto&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用 var 多次声明同一变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-redeclare&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用指定的通过 require 加载的模块</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-return-assign&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用 javascript: url</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-script-url&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止自我赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-self-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止自身比较</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-self-compare&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用逗号操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-sequences&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止抛出非异常字面量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-throw-literal&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用一成不变的循环条件</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unmodified-loop-condition&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止出现未使用过的表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unused-expressions&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用未使用过的标签</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unused-labels&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止不必要的 .call() 和 .apply()</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-useless-call&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止不必要的字符串字面量或模板字面量的连接</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-useless-concat&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用不必要的转义字符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-useless-escape&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 void 操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-void&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在注释中使用特定的警告术语</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-warning-comments&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 with 语句</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-with&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在parseInt()使用基数参数</span></span>
<span class="line"><span style="color:#A6ACCD;">    radix: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求所有的 var 声明出现在它们所在的作用域顶部</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;vars-on-top&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求 IIFE 使用括号括起来</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;wrap-iife&#39;: [2, &#39;any&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止 “Yoda” 条件</span></span>
<span class="line"><span style="color:#A6ACCD;">    yoda: [2, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止使用严格模式指令</span></span>
<span class="line"><span style="color:#A6ACCD;">    strict: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 变量声明 //</span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止 var 声明中的初始化(初值)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;init-declarations&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许 catch 子句的参数与外层作用域中的变量同名</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-catch-shadow&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止删除变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-delete-var&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许标签与变量同名</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-label-var&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用特定的全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-restricted-globals&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止 var 声明 与外层作用域的变量同名</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-shadow&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止覆盖受限制的标识符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-shadow-restricted-names&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-undef&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止将变量初始化为 undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-undef-init&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止将 undefined 作为标识符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-undefined&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止出现未使用过的变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unused-vars&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        vars: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        args: &#39;none&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许在变量定义之前使用它们</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-use-before-define&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Node.js and CommonJS //</span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // require return statements after callbacks</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;callback-return&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求 require() 出现在顶层模块作用域中</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;global-require&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求回调函数中有容错处理</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;handle-callback-err&#39;: [2, &#39;^(err|error)$&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止混合常规 var 声明和 require 调用</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-mixed-requires&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止调用 require 时使用 new 操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new-require&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止对 __dirname 和 __filename进行字符串连接</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-path-concat&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 p<wbr>rocess.env</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-process-env&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 process.exit()</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-process-exit&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用同步方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-sync&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 风格指南 //</span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;array-bracket-spacing&#39;: [2, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止或强制在单行代码块中使用空格(禁用)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;block-spacing&#39;: [1, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    //强制使用一致的缩进 第二个参数为 &quot;tab&quot; 时，会使用tab，</span></span>
<span class="line"><span style="color:#A6ACCD;">    // if while function 后面的{必须与if在同一行，java风格。</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;brace-style&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;1tbs&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        allowSingleLine: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 双峰驼命名格式</span></span>
<span class="line"><span style="color:#A6ACCD;">    camelcase: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 控制逗号前后的空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;comma-spacing&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        before: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        after: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 控制逗号在行尾出现还是在行首出现 (默认行尾)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // http://eslint.org/docs/rules/comma-style</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;comma-style&#39;: [2, &#39;last&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    //&quot;SwitchCase&quot; (默认：0) 强制 switch 语句中的 case 子句的缩进水平</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;computed-property-spacing&#39;: [2, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 用于指统一在回调函数中指向this的变量名，箭头函数中的this已经可以指向外层调用者，应该没卵用了</span></span>
<span class="line"><span style="color:#A6ACCD;">    // e.g [0,&quot;that&quot;] 指定只能 var that = this. that不能指向其他任何值，this也不能赋值给that以外的其他值</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;consistent-this&#39;: [1, &#39;that&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制使用命名的 function 表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;func-names&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 文件末尾强制换行</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;eol-last&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    indent: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      4,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        SwitchCase: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在对象字面量的属性中键和值之间使用一致的间距</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;key-spacing&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        beforeColon: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        afterColon: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制使用一致的换行风格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;linebreak-style&#39;: [1, &#39;unix&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求在注释周围有空行 ( 要求在块级注释之前有一空行)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;lines-around-comment&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        beforeBlockComment: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制一致地使用函数声明或函数表达式，方法定义风格，参数：</span></span>
<span class="line"><span style="color:#A6ACCD;">    // declaration: 强制使用方法声明的方式，function f(){} e.g [2, &quot;declaration&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // expression：强制使用方法表达式的方式，var f = function() {} e.g [2, &quot;expression&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // allowArrowFunctions: declaration风格中允许箭头函数。 e.g [2, &quot;declaration&quot;, { &quot;allowArrowFunctions&quot;: true }]</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;func-style&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制回调函数最大嵌套深度 5层</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-nested-callbacks&#39;: [1, 5],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用指定的标识符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;id-blacklist&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制标识符的最新和最大长度</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;id-length&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求标识符匹配一个指定的正则表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;id-match&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在 JSX 属性中一致地使用双引号或单引号</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;jsx-quotes&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在关键字前后使用一致的空格 (前后腰需要)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;keyword-spacing&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制一行的最大长度</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-len&#39;: [1, 200],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制最大行数</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-lines&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制 function 定义中最多允许的参数数量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-params&#39;: [1, 7],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制 function 块最多允许的的语句数量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-statements&#39;: [1, 200],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制每一行中所允许的最大语句数量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;max-statements-per-line&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;new-cap&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        newIsCap: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        capIsNew: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求调用无参构造函数时有圆括号</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;new-parens&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止 var 声明语句后有一行空行</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;newline-after-var&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用 Array 构造函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-array-constructor&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用按位运算符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-bitwise&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求 return 语句之前有一空行</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;newline-before-return&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求方法链中每个调用都有一个换行符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;newline-per-chained-call&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用 continue 语句</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-continue&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在代码行后使用内联注释</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-inline-comments&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止 if 作为唯一的语句出现在 else 语句中</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-lonely-if&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止混合使用不同的操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-mixed-operators&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许空格和 tab 混合缩进</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-mixed-spaces-and-tabs&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许多个空行</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-multiple-empty-lines&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        max: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许否定的表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-negated-condition&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许使用嵌套的三元表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-nested-ternary&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用 Object 的构造函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new-object&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用一元操作符 ++ 和 --</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-plusplus&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止使用特定的语法</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-restricted-syntax&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止 function 标识符和括号之间出现空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-spaced-func&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许使用三元操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-ternary&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁用行尾空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-trailing-spaces&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止标识符中有悬空下划线_bar</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-underscore-dangle&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止可以在有更简单的可替代的表达式时使用三元操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-unneeded-ternary&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止属性前有空白</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-whitespace-before-property&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制花括号内换行符的一致性</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;object-curly-newline&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在花括号中使用一致的空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;object-curly-spacing&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制将对象的属性放在不同的行上</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;object-property-newline&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制函数中的变量要么一起声明要么分开声明</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;one-var&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        initialized: &#39;never&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止在 var 声明周围换行</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;one-var-declaration-per-line&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止在可能的情况下要求使用简化的赋值操作符</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;operator-assignment&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制操作符使用一致的换行符</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止块内填充</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;padded-blocks&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求对象字面量属性名称用引号括起来</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;quote-props&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制使用一致的反勾号、双引号或单引号</span></span>
<span class="line"><span style="color:#A6ACCD;">    quotes: [2, &#39;double&#39;, &#39;avoid-escape&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求使用 JSDoc 注释</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;require-jsdoc&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）</span></span>
<span class="line"><span style="color:#A6ACCD;">    semi: [2, &#39;always&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制分号之前和之后使用一致的空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;semi-spacing&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求同一个声明块中的变量按顺序排列</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;sort-vars&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在块之前使用一致的空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;space-before-blocks&#39;: [2, &#39;always&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在 function的左括号之前使用一致的空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;space-before-function-paren&#39;: [0, &#39;always&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在圆括号内使用一致的空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;space-in-parens&#39;: [2, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求操作符周围有空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;space-infix-ops&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在一元操作符前后使用一致的空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;space-unary-ops&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        words: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        nonwords: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在注释中 // 或 /* 使用一致的空格</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止 Unicode BOM</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;unicode-bom&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求正则表达式被括号括起来</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;wrap-regex&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ES6.相关 //</span></span>
<span class="line"><span style="color:#A6ACCD;">    //////////////</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求箭头函数体使用大括号</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;arrow-body-style&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求箭头函数的参数使用圆括号</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;arrow-parens&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;arrow-spacing&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        before: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        after: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;constructor-super&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制 generator 函数中 * 号周围使用一致的空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;generator-star-spacing&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        before: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        after: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止修改类声明的变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-class-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许箭头功能，在那里他们可以混淆的比较</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-confusing-arrow&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止修改 const 声明的变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-const-assign&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止类成员中出现重复的名称</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-dupe-class-members&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不允许复制模块的进口</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-duplicate-imports&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止 Symbol 的构造函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-new-symbol&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 允许指定模块加载时的进口</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-restricted-imports&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-this-before-super&#39;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 禁止不必要的计算性能键对象的文字</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-useless-computed-key&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求使用 let 或 const 而不是 var</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;no-var&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止对象字面量中方法和属性使用简写语法</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;object-shorthand&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求使用箭头函数作为回调</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-arrow-callback&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求使用 const 声明那些声明后不再被修改的变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-const&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求在合适的地方使用 Reflect 方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-reflect&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求使用扩展运算符而非 .apply()</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-spread&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求使用模板字面量而非字符串连接</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-template&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Suggest using the rest parameters instead of arguments</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;prefer-rest-params&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求generator 函数内有 yield</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;require-yield&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // enforce spacing between rest and spread operators and their expressions</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;rest-spread-spacing&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制模块内的 import 排序</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;sort-imports&#39;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;template-curly-spacing&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 强制在 yield* 表达式中 * 周围使用空格</span></span>
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
<span class="line"><span style="color:#A6ACCD;">      // lambda表达式  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;arrowFunctions&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 解构赋值  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;destructuring&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // class  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;classes&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/function#函数参数的默认值  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;defaultParams&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 块级作用域，允许使用let const  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;blockBindings&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 允许使用模块，模块内默认严格模式  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;modules&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 允许字面量定义对象时，用表达式做属性名  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/object#属性名表达式  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;objectLiteralComputedProperties&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 允许对象字面量方法名简写  </span></span>
<span class="line"><span style="color:#A6ACCD;">      /*var o = {</span></span>
<span class="line"><span style="color:#A6ACCD;">          method() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return &quot;Hello!&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">       };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       等同于</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       var o = {</span></span>
<span class="line"><span style="color:#A6ACCD;">         method: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">           return &quot;Hello!&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       };</span></span>
<span class="line"><span style="color:#A6ACCD;">      */  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;objectLiteralShorthandMethods&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      /*</span></span>
<span class="line"><span style="color:#A6ACCD;">        对象字面量属性名简写</span></span>
<span class="line"><span style="color:#A6ACCD;">        var foo = &#39;bar&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var baz = {foo};</span></span>
<span class="line"><span style="color:#A6ACCD;">        baz // {foo: &quot;bar&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 等同于</span></span>
<span class="line"><span style="color:#A6ACCD;">        var baz = {foo: foo};</span></span>
<span class="line"><span style="color:#A6ACCD;">      */  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;objectLiteralShorthandProperties&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/function#rest参数  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;restParams&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/function#扩展运算符  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;spread&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/iterator#for---of循环  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;forOf&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/generator  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;generators&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/string#模板字符串  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;templateStrings&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;superInFunctions&quot;: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://es6.ruanyifeng.com/#docs/object#对象的扩展运算符  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;experimentalObjectRestSpread&quot;: true  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;rules&quot;: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 定义对象的set存取器属性时，强制定义get  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;accessor-pairs&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;array-bracket-spacing&quot;: [2, &quot;never&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 在块级作用域外访问块内定义的变量是否报错提示  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;block-scoped-var&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // if while function 后面的{必须与if在同一行，java风格。  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;brace-style&quot;: [2, &quot;1tbs&quot;, { &quot;allowSingleLine&quot;: true }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 双峰驼命名格式  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;camelcase&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // always-multiline：多行模式必须带逗号，单行模式不能带逗号  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;comma-dangle&quot;: [2, &quot;never&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 控制逗号前后的空格  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;comma-spacing&quot;: [2, { &quot;before&quot;: false, &quot;after&quot;: true }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 控制逗号在行尾出现还是在行首出现  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // http://eslint.org/docs/rules/comma-style  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;comma-style&quot;: [2, &quot;last&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 圈复杂度  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;complexity&quot;: [2,9],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;computed-property-spacing&quot;: [2,&quot;never&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 强制方法必须返回值，TypeScript强类型，不配置  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;consistent-return&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 用于指统一在回调函数中指向this的变量名，箭头函数中的this已经可以指向外层调用者，应该没卵用了  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // e.g [0,&quot;that&quot;] 指定只能 var that = this. that不能指向其他任何值，this也不能赋值给that以外的其他值  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;consistent-this&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;constructor-super&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // if else while for do后面的代码块是否需要{ }包围，参数：  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    multi  只有块中有多行语句时才需要{ }包围  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    multi-line  只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //                   块中的语句只能跟和if语句在同一行。if (foo) foo++; else doSomething();  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以零另起一行也可以跟在if语句后面  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    [2, &quot;multi&quot;, &quot;consistent&quot;] 保持前后语句的{ }一致  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    default: [2, &quot;all&quot;] 全都需要{ }包围  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;curly&quot;: [2, &quot;all&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // switch语句强制default分支，也可添加 // no default 注释取消此次警告  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;default-case&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 强制object.key 中 . 的位置，参数:  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //      property，&#39;.&#39;号应与属性在同一行  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //      object, &#39;.&#39; 号应与对象名在同一行  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;dot-location&quot;: [2, &quot;property&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 强制使用.号取属性  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    参数： allowKeywords：true 使用保留字做属性名时，只能使用.方式取属性  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //                          false 使用保留字做属性名时, 只能使用[]方式取属性 e.g [2, {&quot;allowKeywords&quot;: false}]  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //           allowPattern:  当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值 e.g [2, {&quot;allowPattern&quot;: &quot;^[a-z]+(_[a-z]+)+$&quot;}]  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;dot-notation&quot;: [2, {&quot;allowKeywords&quot;: true}],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 文件末尾强制换行  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;eol-last&quot;: 2,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 使用 === 替代 ==  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;eqeqeq&quot;: [2, &quot;allow-null&quot;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 方法表达式是否需要命名  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;func-names&quot;: 0,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 方法定义风格，参数：  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    declaration: 强制使用方法声明的方式，function f(){} e.g [2, &quot;declaration&quot;]  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    expression：强制使用方法表达式的方式，var f = function() {}  e.g [2, &quot;expression&quot;]  </span></span>
<span class="line"><span style="color:#A6ACCD;">      //    allowArrowFunctions: declaration风格中允许箭头函数。 e.g [2, &quot;declaration&quot;, { &quot;allowArrowFunctions&quot;: true }]  </span></span>
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
