import{_ as s,c as n,o as a,a as l}from"./app.72bf9abe.js";const D=JSON.parse('{"title":"gulp 前端自动化构建工具","description":"","frontmatter":{},"headers":[],"relativePath":"guide/06_构建工具/04_gulp.md","lastUpdated":1671535994000}'),p={name:"guide/06_构建工具/04_gulp.md"},e=l(`<h1 id="gulp-前端自动化构建工具" tabindex="-1">gulp 前端自动化构建工具 <a class="header-anchor" href="#gulp-前端自动化构建工具" aria-hidden="true">#</a></h1><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-hidden="true">#</a></h2><ul><li>gulp-babel ES6转换成ES5兼容</li><li>gulp-load-plugins 自动加载<code>package.json</code>中的 <code>gulp</code>插件</li><li>gulp-plumber 一个专门为gulp而生的错误处理库。</li><li>gulp-htmlmin 看到名字就能知道，这个插件是用来压缩 HTML。PS：注释啥的都可以去掉哦，看文档get更多技能哈</li><li>gulp-imagemin 除了能压缩常见的图片格式，还能压缩 SVG，叼叼的~</li><li>gulp-clean-css 压缩 CSS。我原本推荐的是 gulp-minify-css，结果其首页中已建议改用gulp-clean-css...</li><li>gulp-uglify 专业压缩 Javascript</li><li>gulp-concat 上面几个都是压缩，这插件是管合并的...恭喜，“减少网络请求”的成就达成:)</li><li>gulp-autoprefixer 给 CSS 增加前缀。解决某些CSS属性不是标准属性，有各种浏览器前缀的情况，灰常有用</li><li>gulp-rename 修改文件名称。比如有时我们需要把app.js改成app.min.js，瞬间高级了</li><li>gulp-util 最基础的工具，但俺只用来打日志...</li><li>run-sequence 任务按自己顺序执行</li><li>del / gulp-clean 删除。俺的使用场景是：JS/CSS 文件都会在压缩后使用gulp-rev，即文件名被hash，然后再上传到 CDN，最后使用 <code>删除插件</code> 把本地压缩后的文件删除。</li><li>gulp-rev 把静态文件名改成hash的形式。</li><li>gulp-rev-replace 配合 gulp-rev 使用，拿到生成的 <code>manifest.json</code> 后替换对应的文件名称。</li><li>gulp-rev-collector 到线上环境前，我会用来配合gulp-rev使用，替换 HTML 中的路径</li><li>gulp-connect / gulp-livereload LiveReload 的俩款插件都值得拥有，不过都各稍有学习成本，看看文档就明白鸟</li><li>gulp-sass / gulp-less</li></ul><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-hidden="true">#</a></h2><p>先建立 <code>package.json</code>，在项目根目录下建立 <code>gulpfile.js</code>文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const gulp = require(&#39;gulp&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;dev&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 任务处理逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;default&#39;, [&#39;dev&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="编译es6" tabindex="-1">编译ES6 <a class="header-anchor" href="#编译es6" aria-hidden="true">#</a></h2><ul><li>安装babel</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install babel-core@7.0.0 gulp-babel babel-preset-es2015 --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>配置</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const gulp = require(&#39;gulp&#39;);</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="版本号处理" tabindex="-1">版本号处理 <a class="header-anchor" href="#版本号处理" aria-hidden="true">#</a></h2><p>由于浏览器缓存原因，每次部署可能对于用户来说，程序上线后并没有实时看到程序当前版本响应。</p><p>实现方式有两种，第一种，利用<code>gulp-rev</code>和<code>gulp-rev-collector</code>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const gulp = require(&#39;gulp);</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  log(&#39;替换开始&#39;);</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  // 先清理，再进行生成</span></span>
<span class="line"><span style="color:#A6ACCD;">  del(distFolder + &#39;/**/*&#39;, {force: true}).then(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    log(&#39;已清理发布文件夹：&#39; + distFolder);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 执行生成</span></span>
<span class="line"><span style="color:#A6ACCD;">    runSequence(&#39;build&#39;, [&#39;revJs&#39;], &#39;rev&#39;, &#39;clean:pack&#39;,function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      log(&#39;任务完成&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>第二种，利用<code>gulp-rev</code>，<code>gulp-replace</code>，<code>gulp-rev-replace</code>，<code>gulp-rev-format</code>插件来替换。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const gulp = require(&#39;gulp);</span></span>
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
<span class="line"><span style="color:#A6ACCD;">      prefix: &#39;.&#39;, // 在版本号前增加字符</span></span>
<span class="line"><span style="color:#A6ACCD;">      suffix: &#39;.cache&#39;, // 在版本号后增加字符</span></span>
<span class="line"><span style="color:#A6ACCD;">      lastExt: false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(rev.manifest())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe($.rename(&#39;js-manifest.json&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(gulp.dest(&#39;dist/rev&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function compRev(output) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  log(&#39;替换开始&#39;);</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  // 先清理，再进行生成</span></span>
<span class="line"><span style="color:#A6ACCD;">  del(distFolder + &#39;/**/*&#39;, {force: true}).then(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    log(&#39;已清理发布文件夹：&#39; + distFolder);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 执行生成</span></span>
<span class="line"><span style="color:#A6ACCD;">    runSequence(&#39;build&#39;, [&#39;revJs&#39;], &#39;rev&#39;, &#39;clean:pack&#39;,function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      log(&#39;任务完成&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),c=[e];function o(t,i,r,C,A,u){return a(),n("div",null,c)}const d=s(p,[["render",o]]);export{D as __pageData,d as default};
