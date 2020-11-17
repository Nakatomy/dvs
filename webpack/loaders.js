module.exports = function (config) {
  const styleLoader = {
    loader: 'style-loader',
    options: {
      hmr: config.isHMR,
      sourceMap: config.withSourcemaps,
    },
  };

  // const postCSSLoader = {
  //     loader: 'postcss-loader',
  //     options: {
  //         modules: true,
  //         ident: 'postcss',
  //         plugins: [
  //             require('autoprefixer')(),
  //         ],
  //         sourceMap: withSourcemaps,
  //     },
  // };

  const cssLoader = {
    loader: 'css-loader',
    options: {
      url: false,
      importLoaders: 1,
      sourceMap: config.withSourcemaps,
      // alias: buildConfig.cssAliases,
    },
  };

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: config.withSourcemaps,
      outputStyle: config.isProd ? 'compressed' : 'nested',
      data: '@import "project_defaults";',
      includePaths: config.sassIncludePaths,
    },
  };

  const jsLoader = {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false
          },
        ],
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-runtime',
      ],
    },
  };

  const vueLoader = {
    loader: 'vue-loader',
  };

  return {styleLoader, cssLoader, sassLoader, jsLoader, vueLoader};
};
