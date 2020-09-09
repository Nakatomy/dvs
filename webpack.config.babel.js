const path = require('path');
const fs = require('fs');
const glob = require('glob');

module.exports = function (env, argv) {
  const config = {
    /********************
     *
     * PROJECT CONFIG
     *
     */

    theme: argv.theme || 'base',
    package: argv.package || '',
    outputDir: 'application/files/cache/webpack',
    withSourcemaps: true,
    sourcemapsInProd: false,
    browserSyncHost: (argv && argv.proxy) || 'http://localhost:8080',
    browserSyncPort: '3000',
    additionalAssets: [
      './index.js',
    ],
    providePlugins: {
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.fetch': 'fetch',
      'Popper': 'popper.js',
      Vue: 'vue',
    },
    externals: {
      // 'jquery': 'jQuery',
      // 'vue': 'Vue',
    },

    /********************
     *
     * COMPUTED CONFIG
     *
     */

    rootDir: path.resolve(__dirname),
    isProd: argv.mode === 'production',
    isDashboard: argv.dashboard === 'true',
    isHMR: argv.hot || false,
    isWatch: argv.watch || false,
    assetsOutputPath: argv.assetsOutputPath || null,
    assetsOutputName: argv.assetsOutputName || null,
    themePath: null,
    themeDefaultsPaths: [],
    packagePath: null,
    packageDefaultsPath: null,
    sassIncludePaths: [],
    sassExcludes: [],
    assetsToBeCopied: {},
    assetsToBeMoved: {},
    browserSyncWatchedFiles: [],
  };

  config.themePath = `${config.rootDir}/application/themes/${config.theme}`;
  config.themeDefaultsPaths.push(`${config.themePath}/assets/stylesheets/_project_defaults`);
  config.themeDefaultsPaths.push(`${config.themePath}/assets/stylesheets/_defaults`);

  if (config.package) {
    config.packagePath = `${config.rootDir}/packages/${config.package}/themes/${config.theme}`;
    config.packageDefaultsPath = `${config.packagePath}/assets/stylesheets/_project_defaults`;
  }

  config.assetsToBeCopied[`./${config.outputDir}/${config.theme}.js`] = `./application/js/dist/${config.theme}.js`;
  config.assetsToBeCopied[`./${config.outputDir}/${config.theme}.css`] = `./application/css/dist/${config.theme}.css`;

  /********************
   *
   * HMR CSS FIX
   *
   */

  if (config.isHMR) {
    fs.unlink(`./${config.outputDir}/${config.theme}.css`, () => null);
    fs.unlink(`./application/css/dist/${config.theme}.css`, () => null);
  }

  /********************
   *
   * LOAD DEPENDENCIES
   *
   */

  let entries = require('./webpack/entries')(config);
  entries[config.theme].unshift('@babel/polyfill');

  const loaders = require('./webpack/loaders')(config);
  const plugins = require('./webpack/plugins')(config);
  const rules = require('./webpack/rules')(config, loaders);
  const minimizer = require('./webpack/minimizer')(config);

  /********************
   *
   * EXPORT CONFIG
   *
   */

  return {
    entry: entries,
    output: {
      path: `${config.rootDir}/${config.outputDir}`,
      filename: argv.assetsOutputName || null ? argv.assetsOutputName+'.js' : '[name].js',
      chunkFilename: argv.assetsOutputName || null ? argv.assetsOutputName+'.js' : '[name].js',
      publicPath: 'http://localhost:9002/',
    },
    devtool: false,
    module: {
      rules: rules,
    },
    plugins: plugins,
    externals: config.externals,
    optimization: {
      minimizer: [minimizer],
    },
    performance: {
      hints: false,
    },
    stats: {
      hash: false,
      version: false,
      timings: false,
      children: false,
      errorDetails: false,
      chunks: false,
      modules: false,
      reasons: false,
      source: false,
      publicPath: false,
    },
    devServer: {
      port: 9002,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      contentBase: config.outputDir,
      historyApiFallback: true,
      noInfo: true,
      compress: true,
      quiet: true,
      hot: config.isHMR,
      open: false,
      overlay: true,
    },
    resolve: {
      extensions: ['*', '.js', '.json', '.vue'],
    },
    resolveLoader: {
      // modules: ['node_modules'],
    },
  };
};
