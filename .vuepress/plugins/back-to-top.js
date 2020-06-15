const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  define () {
    const { customStyle, visibilityHeight } = options
    return {
      CUSTOM_STYLE: customStyle || {
        right: '1rem',
        bottom: '6rem',
        width: '2.5rem',
        height: '2.5rem',
        'border-radius': '.25rem',
        'line-height': '2.5rem'
      },
      VISIBILITY_HEIGHT: visibilityHeight || 400
    }
  },
  name: 'back-to-top',
  enhanceAppFiles: [
    path.resolve(__dirname, './../components/index.js')
  ],
  globalUIComponents: 'BackToTop'
})