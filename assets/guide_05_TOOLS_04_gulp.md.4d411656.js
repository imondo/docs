import{_ as s,c as n,o as a,a as l}from"./app.d121ef1a.js";const D=JSON.parse('{"title":"gulp \u524D\u7AEF\u81EA\u52A8\u5316\u6784\u5EFA\u5DE5\u5177","description":"","frontmatter":{},"headers":[],"relativePath":"guide/05_TOOLS/04_gulp.md","lastUpdated":1669257902000}'),p={name:"guide/05_TOOLS/04_gulp.md"},e=l(`<h1 id="gulp-\u524D\u7AEF\u81EA\u52A8\u5316\u6784\u5EFA\u5DE5\u5177" tabindex="-1">gulp \u524D\u7AEF\u81EA\u52A8\u5316\u6784\u5EFA\u5DE5\u5177 <a class="header-anchor" href="#gulp-\u524D\u7AEF\u81EA\u52A8\u5316\u6784\u5EFA\u5DE5\u5177" aria-hidden="true">#</a></h1><h2 id="\u63D2\u4EF6" tabindex="-1">\u63D2\u4EF6 <a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a></h2><ul><li>gulp-babel ES6\u8F6C\u6362\u6210ES5\u517C\u5BB9</li><li>gulp-load-plugins \u81EA\u52A8\u52A0\u8F7D<code>package.json</code>\u4E2D\u7684 <code>gulp</code>\u63D2\u4EF6</li><li>gulp-plumber \u4E00\u4E2A\u4E13\u95E8\u4E3Agulp\u800C\u751F\u7684\u9519\u8BEF\u5904\u7406\u5E93\u3002</li><li>gulp-htmlmin \u770B\u5230\u540D\u5B57\u5C31\u80FD\u77E5\u9053\uFF0C\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7528\u6765\u538B\u7F29 HTML\u3002PS\uFF1A\u6CE8\u91CA\u5565\u7684\u90FD\u53EF\u4EE5\u53BB\u6389\u54E6\uFF0C\u770B\u6587\u6863get\u66F4\u591A\u6280\u80FD\u54C8</li><li>gulp-imagemin \u9664\u4E86\u80FD\u538B\u7F29\u5E38\u89C1\u7684\u56FE\u7247\u683C\u5F0F\uFF0C\u8FD8\u80FD\u538B\u7F29 SVG\uFF0C\u53FC\u53FC\u7684~</li><li>gulp-clean-css \u538B\u7F29 CSS\u3002\u6211\u539F\u672C\u63A8\u8350\u7684\u662F gulp-minify-css\uFF0C\u7ED3\u679C\u5176\u9996\u9875\u4E2D\u5DF2\u5EFA\u8BAE\u6539\u7528gulp-clean-css...</li><li>gulp-uglify \u4E13\u4E1A\u538B\u7F29 Javascript</li><li>gulp-concat \u4E0A\u9762\u51E0\u4E2A\u90FD\u662F\u538B\u7F29\uFF0C\u8FD9\u63D2\u4EF6\u662F\u7BA1\u5408\u5E76\u7684...\u606D\u559C\uFF0C\u201C\u51CF\u5C11\u7F51\u7EDC\u8BF7\u6C42\u201D\u7684\u6210\u5C31\u8FBE\u6210:)</li><li>gulp-autoprefixer \u7ED9 CSS \u589E\u52A0\u524D\u7F00\u3002\u89E3\u51B3\u67D0\u4E9BCSS\u5C5E\u6027\u4E0D\u662F\u6807\u51C6\u5C5E\u6027\uFF0C\u6709\u5404\u79CD\u6D4F\u89C8\u5668\u524D\u7F00\u7684\u60C5\u51B5\uFF0C\u7070\u5E38\u6709\u7528</li><li>gulp-rename \u4FEE\u6539\u6587\u4EF6\u540D\u79F0\u3002\u6BD4\u5982\u6709\u65F6\u6211\u4EEC\u9700\u8981\u628Aapp.js\u6539\u6210app.min.js\uFF0C\u77AC\u95F4\u9AD8\u7EA7\u4E86</li><li>gulp-util \u6700\u57FA\u7840\u7684\u5DE5\u5177\uFF0C\u4F46\u4FFA\u53EA\u7528\u6765\u6253\u65E5\u5FD7...</li><li>run-sequence \u4EFB\u52A1\u6309\u81EA\u5DF1\u987A\u5E8F\u6267\u884C</li><li>del / gulp-clean \u5220\u9664\u3002\u4FFA\u7684\u4F7F\u7528\u573A\u666F\u662F\uFF1AJS/CSS \u6587\u4EF6\u90FD\u4F1A\u5728\u538B\u7F29\u540E\u4F7F\u7528gulp-rev\uFF0C\u5373\u6587\u4EF6\u540D\u88ABhash\uFF0C\u7136\u540E\u518D\u4E0A\u4F20\u5230 CDN\uFF0C\u6700\u540E\u4F7F\u7528 <code>\u5220\u9664\u63D2\u4EF6</code> \u628A\u672C\u5730\u538B\u7F29\u540E\u7684\u6587\u4EF6\u5220\u9664\u3002</li><li>gulp-rev \u628A\u9759\u6001\u6587\u4EF6\u540D\u6539\u6210hash\u7684\u5F62\u5F0F\u3002</li><li>gulp-rev-replace \u914D\u5408 gulp-rev \u4F7F\u7528\uFF0C\u62FF\u5230\u751F\u6210\u7684 <code>manifest.json</code> \u540E\u66FF\u6362\u5BF9\u5E94\u7684\u6587\u4EF6\u540D\u79F0\u3002</li><li>gulp-rev-collector \u5230\u7EBF\u4E0A\u73AF\u5883\u524D\uFF0C\u6211\u4F1A\u7528\u6765\u914D\u5408gulp-rev\u4F7F\u7528\uFF0C\u66FF\u6362 HTML \u4E2D\u7684\u8DEF\u5F84</li><li>gulp-connect / gulp-livereload LiveReload \u7684\u4FE9\u6B3E\u63D2\u4EF6\u90FD\u503C\u5F97\u62E5\u6709\uFF0C\u4E0D\u8FC7\u90FD\u5404\u7A0D\u6709\u5B66\u4E60\u6210\u672C\uFF0C\u770B\u770B\u6587\u6863\u5C31\u660E\u767D\u9E1F</li><li>gulp-sass / gulp-less</li></ul><h2 id="\u8FD0\u884C" tabindex="-1">\u8FD0\u884C <a class="header-anchor" href="#\u8FD0\u884C" aria-hidden="true">#</a></h2><p>\u5148\u5EFA\u7ACB <code>package.json</code>\uFF0C\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u5EFA\u7ACB <code>gulpfile.js</code>\u6587\u4EF6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const gulp = require(&#39;gulp&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;dev&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4EFB\u52A1\u5904\u7406\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;default&#39;, [&#39;dev&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7F16\u8BD1es6" tabindex="-1">\u7F16\u8BD1ES6 <a class="header-anchor" href="#\u7F16\u8BD1es6" aria-hidden="true">#</a></h2><ul><li>\u5B89\u88C5babel</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install babel-core@7.0.0 gulp-babel babel-preset-es2015 --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u914D\u7F6E</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const gulp = require(&#39;gulp&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const $ = require(&#39;gulp-load-plugins&#39;)();  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* es6 */  </span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;es6&#39;, function() {    </span></span>
<span class="line"><span style="color:#A6ACCD;">  return gulp.src(&#39;src/**/*.js&#39;)  </span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.plumber())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.babel({  </span></span>
<span class="line"><span style="color:#A6ACCD;">      presets: [&#39;es2015&#39;]  </span></span>
<span class="line"><span style="color:#A6ACCD;">    }))  </span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(gulp.dest(&#39;dist/&#39;));  </span></span>
<span class="line"><span style="color:#A6ACCD;">}); </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7248\u672C\u53F7\u5904\u7406" tabindex="-1">\u7248\u672C\u53F7\u5904\u7406 <a class="header-anchor" href="#\u7248\u672C\u53F7\u5904\u7406" aria-hidden="true">#</a></h2><p>\u7531\u4E8E\u6D4F\u89C8\u5668\u7F13\u5B58\u539F\u56E0\uFF0C\u6BCF\u6B21\u90E8\u7F72\u53EF\u80FD\u5BF9\u4E8E\u7528\u6237\u6765\u8BF4\uFF0C\u7A0B\u5E8F\u4E0A\u7EBF\u540E\u5E76\u6CA1\u6709\u5B9E\u65F6\u770B\u5230\u7A0B\u5E8F\u5F53\u524D\u7248\u672C\u54CD\u5E94\u3002</p><p>\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF0C\u7B2C\u4E00\u79CD\uFF0C\u5229\u7528<code>gulp-rev</code>\u548C<code>gulp-rev-collector</code>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const gulp = require(&#39;gulp);</span></span>
<span class="line"><span style="color:#A6ACCD;">const rev = require(&#39;gulp-rev&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const revCollector = require(&#39;gulp-rev-collector&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const runSequence = require(&#39;run-sequence&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const $ = require(&#39;gulp-load-plugins&#39;)();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;build&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return gulp.src(&#39;dist/src/js&#39;, {base: &#39;js&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.plumber())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.babel({</span></span>
<span class="line"><span style="color:#A6ACCD;">      presets: [&#39;es2015&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(gulp.dest(&#39;dist&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;revJs&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return gulp.src(&#39;dist/js/pack/**/**/*.js&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(rev())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(gulp.dest(&#39;dist/js&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(rev.manifest())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.rename(&#39;js-manifest.json&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(gulp.dest(&#39;dist/rev&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;rev&#39;, function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  log(&#39;\u66FF\u6362\u5F00\u59CB&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return gulp.src([output + &#39;/*.json&#39;, distPath + &#39;/**/**/*.html&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">  .pipe(revCollector({</span></span>
<span class="line"><span style="color:#A6ACCD;">      replaceReved: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }))</span></span>
<span class="line"><span style="color:#A6ACCD;">  .pipe(gulp.dest(distPath));</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;clean:pack&#39;, (cb) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  log(&#39;clean pack&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  del([</span></span>
<span class="line"><span style="color:#A6ACCD;">    output + &#39;/css/pack&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    output + &#39;/js/pack&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    output + &#39;/rev&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ], cb);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;pack&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5148\u6E05\u7406\uFF0C\u518D\u8FDB\u884C\u751F\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">  del(distFolder + &#39;/**/*&#39;, {force: true}).then(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    log(&#39;\u5DF2\u6E05\u7406\u53D1\u5E03\u6587\u4EF6\u5939\uFF1A&#39; + distFolder);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6267\u884C\u751F\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">    runSequence(&#39;build&#39;, [&#39;revJs&#39;], &#39;rev&#39;, &#39;clean:pack&#39;,function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      log(&#39;\u4EFB\u52A1\u5B8C\u6210&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7B2C\u4E8C\u79CD\uFF0C\u5229\u7528<code>gulp-rev</code>\uFF0C<code>gulp-replace</code>\uFF0C<code>gulp-rev-replace</code>\uFF0C<code>gulp-rev-format</code>\u63D2\u4EF6\u6765\u66FF\u6362\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const gulp = require(&#39;gulp);</span></span>
<span class="line"><span style="color:#A6ACCD;">const $ = require(&#39;gulp-load-plugins&#39;)();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;build&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return gulp.src(&#39;dist/src/js&#39;, {base: &#39;js&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.plumber())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.babel({</span></span>
<span class="line"><span style="color:#A6ACCD;">      presets: [&#39;es2015&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(gulp.dest(&#39;dist&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;revJs&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return gulp.src(&#39;dist/js/**/**/*.js&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(rev())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(revFormat({</span></span>
<span class="line"><span style="color:#A6ACCD;">      prefix: &#39;.&#39;, // \u5728\u7248\u672C\u53F7\u524D\u589E\u52A0\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">      suffix: &#39;.cache&#39;, // \u5728\u7248\u672C\u53F7\u540E\u589E\u52A0\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">      lastExt: false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(rev.manifest())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.rename(&#39;js-manifest.json&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(gulp.dest(&#39;dist/rev&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function compRev(output) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  log(&#39;\u66FF\u6362\u5F00\u59CB&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  var manifest = gulp.src([output + &quot;/rev/*.json&quot;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  var nowDate = new Date().getTime();</span></span>
<span class="line"><span style="color:#A6ACCD;">  function modifyUnreved(filename) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return filename;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  function modifyReved(filename) {    </span></span>
<span class="line"><span style="color:#A6ACCD;">    if (filename.indexOf(&#39;.cache&#39;) &gt; -1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const _version = filename.match(/\\.[\\w]*\\.cache/)[0].replace(/(\\.|cache)*/g,&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      const _filename = filename.replace(/\\.[\\w]*\\.cache/,&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      filename = _filename + &quot;?v=&quot; + nowDate + &#39;-&#39; + _version;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return filename;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return filename;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return gulp.src([output + &#39;/**/**.html&#39;]) </span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.replace(/(\\.[a-z]+)\\?(v=)?[^\\&#39;\\&quot;\\&amp;]*/g,&quot;$1&quot;)) </span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.revReplace({</span></span>
<span class="line"><span style="color:#A6ACCD;">      manifest: manifest,</span></span>
<span class="line"><span style="color:#A6ACCD;">      modifyUnreved: modifyUnreved,</span></span>
<span class="line"><span style="color:#A6ACCD;">      modifyReved: modifyReved</span></span>
<span class="line"><span style="color:#A6ACCD;">    }))  </span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(gulp.dest(output));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;rev&#39;, function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return compRev(&#39;dist&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;clean:pack&#39;, (cb) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  log(&#39;clean pack&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  del([</span></span>
<span class="line"><span style="color:#A6ACCD;">    output + &#39;/css/pack&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    output + &#39;/js/pack&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    output + &#39;/rev&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ], cb);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;pack&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5148\u6E05\u7406\uFF0C\u518D\u8FDB\u884C\u751F\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">  del(distFolder + &#39;/**/*&#39;, {force: true}).then(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    log(&#39;\u5DF2\u6E05\u7406\u53D1\u5E03\u6587\u4EF6\u5939\uFF1A&#39; + distFolder);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6267\u884C\u751F\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">    runSequence(&#39;build&#39;, [&#39;revJs&#39;], &#39;rev&#39;, &#39;clean:pack&#39;,function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      log(&#39;\u4EFB\u52A1\u5B8C\u6210&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),c=[e];function o(t,i,r,C,A,u){return a(),n("div",null,c)}const d=s(p,[["render",o]]);export{D as __pageData,d as default};
