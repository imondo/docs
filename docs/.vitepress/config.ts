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
    logo: 'static/imgs/logo-prve.png',

    nav: nav(),
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/imondo/docs" }],
  },
  

})

function nav() {
  return [
    { text: 'Guide', link: '/', activeMatch: '/guide/' },
    { text: 'About', link: 'https://imondo.cn' },
  ]
}



function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}