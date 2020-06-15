const sidebar = require('./config/sidebar');
const nav = require('./config/nav');

module.exports = {
  base: '/',
  title: 'Mondo',
  description: '记录工作与生活',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0' }],
  ],
  themeConfig: {
    repo: "one-pupil/docs",
    navbar: true,
    editLinks: false,
    smoothScroll: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: '更新于',
    sidebarDepth: 1,
    nav,
    sidebar
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    // '@vuepress/plugin-back-to-top',
    require('./plugins/back-to-top'),
    '@vuepress/plugin-medium-zoom'
  ]
}
