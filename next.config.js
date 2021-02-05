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
        source: '/our-team.html',
        destination: '/our-team',
        permanent: true,
      },
      {
        source: '/legal.html',
        destination: '/legal',
        permanent: true,
      },
      {
        source: '/advisory-board.html',
        destination: '/advisory-board',
        permanent: true,
      },
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/news.html',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/contacts.html',
        destination: '/contacts',
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
      {
        source: '/de/kontakt',
        destination: '/contacts',
        permanent: true,
      },
      {
        source: '/en/imprint',
        destination: '/imprint',
        permanent: true,
      },
      {
        source: '/en/imprint',
        destination: '/imprint',
        permanent: true,
      },
      {
        source: '/de',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/de/impressum',
        destination: '/imprint',
        permanent: true,
      },
      {
        source: '/en/contact',
        destination: '/contacts',
        permanent: true,
      },
      {
        source: '/switch_language/322/338',
        destination: '/',
        permanent: true,
      },
      {
        source: '/application/files/8416/0553/3474/Datenschutz.pdf',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/de/datenschutz',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/login/concrete/forgot_password',
        destination: '/',
        permanent: true,
      },
      {
        source: '/de/unsere-partner',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/private-pages/en/our-solution',
        destination: '/solution',
        permanent: true,
      },
      {
        source: '/private-pages/en/testimonials',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/private-pages/en/about-us',
        destination: '/',
        permanent: true,
      },
      {
        source: '/private-pages/en/under-construction',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/videos',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/de/videos',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/application/files/8516/0683/7489/Data_Privacy_Policy_ENG.pdf',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/en/advisory-board',
        destination: '/advisory-board',
        permanent: true,
      },
      {
        source: '/en/under-construction',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/terms-of-use',
        destination: '/terms-of-use',
        permanent: true,
      },
      {
        source: '/en/our-partners',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/en/testimonials',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/en/our-team',
        destination: '/our-team',
        permanent: true,
      },
      {
        source: '/en/about-us',
        destination: '/',
        permanent: true,
      },

    ]
  },

})



















