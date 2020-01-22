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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: "one-pupil/docs",
    navbar: true,
    editLinks: false,
    smoothScroll: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: '更新于',
    nav,
    sidebar
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}