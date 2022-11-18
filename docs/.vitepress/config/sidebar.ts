function sidebarGuide() {
  return [
    {
      text: 'CSS系列',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/guide/01_CSS探索/00_垂直居中布局' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'JS系列',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    },
    {
      text: 'TS系列',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'FRONTEND',
      collapsible: true,
      items: [
        {
          text: 'Vue',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/guide/theme-introduction' },
            { text: 'Nav', link: '/guide/theme-nav' },
          ]
        },
        {
          text: 'React',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/guide/theme-introduction' },
            { text: 'Nav', link: '/guide/theme-nav' },
          ]
        },
        {
          text: '小程序',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/guide/theme-introduction' },
            { text: 'Nav', link: '/guide/theme-nav' },
          ]
        },
      ]
    },
    
    {
      text: 'TOOLS',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    }
  ]
}

const sidebar = sidebarGuide();

export default sidebar;