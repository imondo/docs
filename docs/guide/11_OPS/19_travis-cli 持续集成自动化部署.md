# travis-cli 持续集成自动化部署

由于前段时间整理了下工作中常用到的命令，想把其做成个文档，以备以后能够方便查阅，想到用`vuepress`来搭建文档。

`vuepress`的搭建完全可参照[官网](https://vuepress.vuejs.org/zh/)，但是在线部署的时候还是碰到了一些需要注意的细节地方。

本文的部署是集成了`travis cli`自动化部署。

## 配置

根目录新建`travis.yml`文件

```
language: node_js # node环境
node_js:
  - lts/*
script:
  - npm run docs:build # 执行命令
deploy:
  provider: pages
  skip-cleanup: true
  local_dir: docs/.vuepress/dist # 部署的文件夹文件
  github-token: $GITHUB_TOKEN # travis服务上的token变量
  target-branch: gh-pages # 集成发布到gh-pages上
  keep-history: true
  on:
    branch: master
```

## 设置github

* 手动创建`gh-pages`

[![1hGicj.jpg](https://s2.ax1x.com/2020/02/09/1hGicj.jpg)](https://imgchr.com/i/1hGicj)

* 创建`github token`


[![1hGFjs.jpg](https://s2.ax1x.com/2020/02/09/1hGFjs.jpg)](https://imgchr.com/i/1hGFjs)
[![1hGC9g.jpg](https://s2.ax1x.com/2020/02/09/1hGC9g.jpg)](https://imgchr.com/i/1hGC9g)

点击`generate new token`，选择部分权限


[![1hGEBq.png](https://s2.ax1x.com/2020/02/09/1hGEBq.png)](https://imgchr.com/i/1hGEBq)

保存后，注意复制`token`串，只有第一次才会显示，以后访问只能更新`token`串。

## 设置travis cli

用`github`账户登录[travis-ci](https://travis-ci.org/)

* 开启自动部署的项目


[![1hGp4S.md.jpg](https://s2.ax1x.com/2020/02/09/1hGp4S.md.jpg)](https://imgchr.com/i/1hGp4S)

* 设置变量`GITHUB_TOKEN`


[![1hGVH0.md.jpg](https://s2.ax1x.com/2020/02/09/1hGVH0.md.jpg)](https://imgchr.com/i/1hGVH0)

`ADD`后可以直接尝试修改项目代码后查看部署信息
[![1hGmNT.md.png](https://s2.ax1x.com/2020/02/09/1hGmNT.md.png)](https://imgchr.com/i/1hGmNT)

## 总结

通过这次项目部署学习到了怎么使用`travis`来持续集成`github`项目，学习阮一峰大神的[持续集成服务 Travis CI 教程](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)了解来部分`travis`配置。

最后推荐下我的这次部署的项目，前端开发工作中遇到的命令：[fe-dev-command](https://github.com/imondo/fe-dev-command)