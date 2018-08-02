# gulp 前端自动化构建工具

- [插件](#插件)
- [运行](#运行)
- [编译ES6](#编译ES6)
- [版本号处理](#版本号处理)

## 插件
* gulp-babel ES6转换成ES5兼容
* gulp-load-plugins 自动加载`package.json`中的 `gulp`插件
* gulp-plumber 一个专门为gulp而生的错误处理库。
* gulp-htmlmin 看到名字就能知道，这个插件是用来压缩 HTML。PS：注释啥的都可以去掉哦，看文档get更多技能哈
* gulp-imagemin 除了能压缩常见的图片格式，还能压缩 SVG，叼叼的~
* gulp-clean-css 压缩 CSS。我原本推荐的是 gulp-minify-css，结果其首页中已建议改用gulp-clean-css...
* gulp-uglify 专业压缩 Javascript
* gulp-concat 上面几个都是压缩，这插件是管合并的...恭喜，“减少网络请求”的成就达成:)
* gulp-autoprefixer 给 CSS 增加前缀。解决某些CSS属性不是标准属性，有各种浏览器前缀的情况，灰常有用
* gulp-rename 修改文件名称。比如有时我们需要把app.js改成app.min.js，瞬间高级了
* gulp-util 最基础的工具，但俺只用来打日志...
* run-sequence 任务按自己顺序执行
* del / gulp-clean 删除。俺的使用场景是：JS/CSS 文件都会在压缩后使用gulp-rev，即文件名被hash，然后再上传到 CDN，最后使用 `删除插件` 把本地压缩后的文件删除。
* gulp-rev 把静态文件名改成hash的形式。
* gulp-rev-replace 配合 gulp-rev 使用，拿到生成的 `manifest.json` 后替换对应的文件名称。
* gulp-rev-collector 到线上环境前，我会用来配合gulp-rev使用，替换 HTML 中的路径
* gulp-connect / gulp-livereload LiveReload 的俩款插件都值得拥有，不过都各稍有学习成本，看看文档就明白鸟
* gulp-sass / gulp-less

## 运行

先建立 `package.json`，在项目根目录下建立 `gulpfile.js`文件

```
const gulp = require('gulp');

gulp.task('dev', () => {
  // 任务处理逻辑
});

gulp.task('default', ['dev']);

```

## 编译ES6

* 安装babel

```
npm install babel-core gulp-babel babel-preset-es2015 --save-dev
```

* 配置

```
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();  

/* es6 */  
gulp.task('es6', function() {    
  return gulp.src('src/**/*.js')  
    .pipe($.plumber())
    .pipe($.babel({  
      presets: ['es2015']  
    }))  
    .pipe(gulp.dest('dist/'));  
}); 

```

## 版本号处理

由于浏览器缓存原因，每次部署可能对于用户来说，程序上线后并没有实时看到程序当前版本响应。

实现方式有两种，第一种，利用`gulp-rev`和`gulp-rev-collector`:

```
const gulp = require('gulp);
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');
const runSequence = require('run-sequence');
const $ = require('gulp-load-plugins')();

gulp.task('build', () => {
  return gulp.src('dist/src/js', {base: 'js'})
    .pipe($.plumber())
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
})

gulp.task('revJs', () => {
  return gulp.src('dist/js/pack/**/**/*.js')
    .pipe(rev())
    .pipe(gulp.dest('dist/js'))
    .pipe(rev.manifest())
    .pipe($.rename('js-manifest.json'))
    .pipe(gulp.dest('dist/rev'));
})

gulp.task('rev', function () {
  log('替换开始');
  return gulp.src([output + '/*.json', distPath + '/**/**/*.html'])
  .pipe(revCollector({
      replaceReved: true
  }))
  .pipe(gulp.dest(distPath));
});

gulp.task('clean:pack', (cb) => {
  log('clean pack')
  del([
    output + '/css/pack',
    output + '/js/pack',
    output + '/rev'
  ], cb);
})

gulp.task('pack', () => {
  // 先清理，再进行生成
  del(distFolder + '/**/*', {force: true}).then(() => {
    log('已清理发布文件夹：' + distFolder);

    // 执行生成
    runSequence('build', ['revJs'], 'rev', 'clean:pack',function() {
      log('任务完成');
    });
  });
});

```
第二种，利用`gulp-rev`，`gulp-replace`，`gulp-rev-replace`，`gulp-rev-format`插件来替换。

```
const gulp = require('gulp);
const $ = require('gulp-load-plugins')();

gulp.task('build', () => {
  return gulp.src('dist/src/js', {base: 'js'})
    .pipe($.plumber())
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
})

gulp.task('revJs', () => {
  return gulp.src('dist/js/**/**/*.js')
    .pipe(rev())
    .pipe(revFormat({
      prefix: '.', // 在版本号前增加字符
      suffix: '.cache', // 在版本号后增加字符
      lastExt: false
    }))
    .pipe(rev.manifest())
    .pipe($.rename('js-manifest.json'))
    .pipe(gulp.dest('dist/rev'));
})

function compRev(output) {  
  log('替换开始');
  var manifest = gulp.src([output + "/rev/*.json"]);
  var nowDate = new Date().getTime();
  function modifyUnreved(filename) {
    return filename;
  }
  function modifyReved(filename) {    
    if (filename.indexOf('.cache') > -1) {
      const _version = filename.match(/\.[\w]*\.cache/)[0].replace(/(\.|cache)*/g,"");
      const _filename = filename.replace(/\.[\w]*\.cache/,"");
      filename = _filename + "?v=" + nowDate + '-' + _version;
      return filename;
    }
    return filename;
  }
  return gulp.src([output + '/**/**.html']) 
    .pipe($.replace(/(\.[a-z]+)\?(v=)?[^\'\"\&]*/g,"$1")) 
    .pipe($.revReplace({
      manifest: manifest,
      modifyUnreved: modifyUnreved,
      modifyReved: modifyReved
    }))  
    .pipe(gulp.dest(output));
}

gulp.task('rev', function () {
  return compRev('dist');
});

gulp.task('clean:pack', (cb) => {
  log('clean pack')
  del([
    output + '/css/pack',
    output + '/js/pack',
    output + '/rev'
  ], cb);
})

gulp.task('pack', () => {
  // 先清理，再进行生成
  del(distFolder + '/**/*', {force: true}).then(() => {
    log('已清理发布文件夹：' + distFolder);

    // 执行生成
    runSequence('build', ['revJs'], 'rev', 'clean:pack',function() {
      log('任务完成');
    });
  });
});

```

