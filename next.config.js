const withImages = require('next-images')

const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}
module.exports = withImages({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf|zip)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    })

    return config
  },

  
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  async redirects() {
    return [
      {
        source: '/solution.html',
        destination: '/solution',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/api.html',
        destination: '/rest-api',
        permanent: true,
      },
      {
        source: '/partners.html',
        destination: '/partners',
        permanent: true,
      },
    ]
  },

})
