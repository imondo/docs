import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import sidebar from './config/sidebar';

export default defineConfig({
  base: '/docs/',
  ignoreDeadLinks: true,
  lang: 'en-US',
  title: '前端小册',
  description: '整理记录开发遇到过、实践过的技术。',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    logo: '/imgs/logo-prve.png',
    // outline: 3,
    nav: nav(),
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/imondo/docs" }],
  },
  

})

function nav() {
  return [
    { text: '首页', link: '/guide/02_JS探索/01_基础数据', activeMatch: '/guide/' },
    { text: '系列', activeMatch: '/series/', items: navItems()},
    { text: '方案', link: '/scheme/01_解决方案/01_前言', activeMatch: '/scheme/'},
    { text: '关于', link: 'https://imondo.cn' },
  ]
}



function navItems() {
  return [
    { text: '设计模式', link: '/series/04_DesignMode/00_设计原则', activeMatch: '/04_DesignMode/' },
    { text: 'MySQL 小册', link: '/series/05_MySQL/01_MySQL 基本操作', activeMatch: '/05_MySQL/' },
    { text: 'SVG 小册', link: '/series/01_SVG小册/01_基础知识', activeMatch: '/01_svg/' },
    { text: 'React Native 小册', link: '/series/02_ReactNative/01_错误异常', activeMatch: '/02_React Native/' },
    { text: 'Swift 小册', link: '/series/03_Swift/00_基本语法', activeMatch: '/03_Swift/' },
  ]
}