const withImages = require('next-images')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },

})


