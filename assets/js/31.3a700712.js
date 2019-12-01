(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{247:function(e,n,l){"use strict";l.r(n);var s=l(0),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"gulp-前端自动化构建工具"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#gulp-前端自动化构建工具"}},[e._v("#")]),e._v(" gulp 前端自动化构建工具")]),e._v(" "),l("h2",{attrs:{id:"插件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[e._v("#")]),e._v(" 插件")]),e._v(" "),l("ul",[l("li",[e._v("gulp-babel ES6转换成ES5兼容")]),e._v(" "),l("li",[e._v("gulp-load-plugins 自动加载"),l("code",[e._v("package.json")]),e._v("中的 "),l("code",[e._v("gulp")]),e._v("插件")]),e._v(" "),l("li",[e._v("gulp-plumber 一个专门为gulp而生的错误处理库。")]),e._v(" "),l("li",[e._v("gulp-htmlmin 看到名字就能知道，这个插件是用来压缩 HTML。PS：注释啥的都可以去掉哦，看文档get更多技能哈")]),e._v(" "),l("li",[e._v("gulp-imagemin 除了能压缩常见的图片格式，还能压缩 SVG，叼叼的~")]),e._v(" "),l("li",[e._v("gulp-clean-css 压缩 CSS。我原本推荐的是 gulp-minify-css，结果其首页中已建议改用gulp-clean-css...")]),e._v(" "),l("li",[e._v("gulp-uglify 专业压缩 Javascript")]),e._v(" "),l("li",[e._v("gulp-concat 上面几个都是压缩，这插件是管合并的...恭喜，“减少网络请求”的成就达成:)")]),e._v(" "),l("li",[e._v("gulp-autoprefixer 给 CSS 增加前缀。解决某些CSS属性不是标准属性，有各种浏览器前缀的情况，灰常有用")]),e._v(" "),l("li",[e._v("gulp-rename 修改文件名称。比如有时我们需要把app.js改成app.min.js，瞬间高级了")]),e._v(" "),l("li",[e._v("gulp-util 最基础的工具，但俺只用来打日志...")]),e._v(" "),l("li",[e._v("run-sequence 任务按自己顺序执行")]),e._v(" "),l("li",[e._v("del / gulp-clean 删除。俺的使用场景是：JS/CSS 文件都会在压缩后使用gulp-rev，即文件名被hash，然后再上传到 CDN，最后使用 "),l("code",[e._v("删除插件")]),e._v(" 把本地压缩后的文件删除。")]),e._v(" "),l("li",[e._v("gulp-rev 把静态文件名改成hash的形式。")]),e._v(" "),l("li",[e._v("gulp-rev-replace 配合 gulp-rev 使用，拿到生成的 "),l("code",[e._v("manifest.json")]),e._v(" 后替换对应的文件名称。")]),e._v(" "),l("li",[e._v("gulp-rev-collector 到线上环境前，我会用来配合gulp-rev使用，替换 HTML 中的路径")]),e._v(" "),l("li",[e._v("gulp-connect / gulp-livereload LiveReload 的俩款插件都值得拥有，不过都各稍有学习成本，看看文档就明白鸟")]),e._v(" "),l("li",[e._v("gulp-sass / gulp-less")])]),e._v(" "),l("h2",{attrs:{id:"运行"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[e._v("#")]),e._v(" 运行")]),e._v(" "),l("p",[e._v("先建立 "),l("code",[e._v("package.json")]),e._v("，在项目根目录下建立 "),l("code",[e._v("gulpfile.js")]),e._v("文件")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("const gulp = require('gulp');\n\ngulp.task('dev', () => {\n  // 任务处理逻辑\n});\n\ngulp.task('default', ['dev']);\n\n")])])]),l("h2",{attrs:{id:"编译es6"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#编译es6"}},[e._v("#")]),e._v(" 编译ES6")]),e._v(" "),l("ul",[l("li",[e._v("安装babel")])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("npm install babel-core@7.0.0 gulp-babel babel-preset-es2015 --save-dev\n")])])]),l("ul",[l("li",[e._v("配置")])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("const gulp = require('gulp');\nconst $ = require('gulp-load-plugins')();  \n\n/* es6 */  \ngulp.task('es6', function() {    \n  return gulp.src('src/**/*.js')  \n    .pipe($.plumber())\n    .pipe($.babel({  \n      presets: ['es2015']  \n    }))  \n    .pipe(gulp.dest('dist/'));  \n}); \n\n")])])]),l("h2",{attrs:{id:"版本号处理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#版本号处理"}},[e._v("#")]),e._v(" 版本号处理")]),e._v(" "),l("p",[e._v("由于浏览器缓存原因，每次部署可能对于用户来说，程序上线后并没有实时看到程序当前版本响应。")]),e._v(" "),l("p",[e._v("实现方式有两种，第一种，利用"),l("code",[e._v("gulp-rev")]),e._v("和"),l("code",[e._v("gulp-rev-collector")]),e._v(":")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("const gulp = require('gulp);\nconst rev = require('gulp-rev');\nconst revCollector = require('gulp-rev-collector');\nconst runSequence = require('run-sequence');\nconst $ = require('gulp-load-plugins')();\n\ngulp.task('build', () => {\n  return gulp.src('dist/src/js', {base: 'js'})\n    .pipe($.plumber())\n    .pipe($.babel({\n      presets: ['es2015']\n    }))\n    .pipe(gulp.dest('dist'));\n})\n\ngulp.task('revJs', () => {\n  return gulp.src('dist/js/pack/**/**/*.js')\n    .pipe(rev())\n    .pipe(gulp.dest('dist/js'))\n    .pipe(rev.manifest())\n    .pipe($.rename('js-manifest.json'))\n    .pipe(gulp.dest('dist/rev'));\n})\n\ngulp.task('rev', function () {\n  log('替换开始');\n  return gulp.src([output + '/*.json', distPath + '/**/**/*.html'])\n  .pipe(revCollector({\n      replaceReved: true\n  }))\n  .pipe(gulp.dest(distPath));\n});\n\ngulp.task('clean:pack', (cb) => {\n  log('clean pack')\n  del([\n    output + '/css/pack',\n    output + '/js/pack',\n    output + '/rev'\n  ], cb);\n})\n\ngulp.task('pack', () => {\n  // 先清理，再进行生成\n  del(distFolder + '/**/*', {force: true}).then(() => {\n    log('已清理发布文件夹：' + distFolder);\n\n    // 执行生成\n    runSequence('build', ['revJs'], 'rev', 'clean:pack',function() {\n      log('任务完成');\n    });\n  });\n});\n\n")])])]),l("p",[e._v("第二种，利用"),l("code",[e._v("gulp-rev")]),e._v("，"),l("code",[e._v("gulp-replace")]),e._v("，"),l("code",[e._v("gulp-rev-replace")]),e._v("，"),l("code",[e._v("gulp-rev-format")]),e._v("插件来替换。")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("const gulp = require('gulp);\nconst $ = require('gulp-load-plugins')();\n\ngulp.task('build', () => {\n  return gulp.src('dist/src/js', {base: 'js'})\n    .pipe($.plumber())\n    .pipe($.babel({\n      presets: ['es2015']\n    }))\n    .pipe(gulp.dest('dist'));\n})\n\ngulp.task('revJs', () => {\n  return gulp.src('dist/js/**/**/*.js')\n    .pipe(rev())\n    .pipe(revFormat({\n      prefix: '.', // 在版本号前增加字符\n      suffix: '.cache', // 在版本号后增加字符\n      lastExt: false\n    }))\n    .pipe(rev.manifest())\n    .pipe($.rename('js-manifest.json'))\n    .pipe(gulp.dest('dist/rev'));\n})\n\nfunction compRev(output) {  \n  log('替换开始');\n  var manifest = gulp.src([output + \"/rev/*.json\"]);\n  var nowDate = new Date().getTime();\n  function modifyUnreved(filename) {\n    return filename;\n  }\n  function modifyReved(filename) {    \n    if (filename.indexOf('.cache') > -1) {\n      const _version = filename.match(/\\.[\\w]*\\.cache/)[0].replace(/(\\.|cache)*/g,\"\");\n      const _filename = filename.replace(/\\.[\\w]*\\.cache/,\"\");\n      filename = _filename + \"?v=\" + nowDate + '-' + _version;\n      return filename;\n    }\n    return filename;\n  }\n  return gulp.src([output + '/**/**.html']) \n    .pipe($.replace(/(\\.[a-z]+)\\?(v=)?[^\\'\\\"\\&]*/g,\"$1\")) \n    .pipe($.revReplace({\n      manifest: manifest,\n      modifyUnreved: modifyUnreved,\n      modifyReved: modifyReved\n    }))  \n    .pipe(gulp.dest(output));\n}\n\ngulp.task('rev', function () {\n  return compRev('dist');\n});\n\ngulp.task('clean:pack', (cb) => {\n  log('clean pack')\n  del([\n    output + '/css/pack',\n    output + '/js/pack',\n    output + '/rev'\n  ], cb);\n})\n\ngulp.task('pack', () => {\n  // 先清理，再进行生成\n  del(distFolder + '/**/*', {force: true}).then(() => {\n    log('已清理发布文件夹：' + distFolder);\n\n    // 执行生成\n    runSequence('build', ['revJs'], 'rev', 'clean:pack',function() {\n      log('任务完成');\n    });\n  });\n});\n\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);