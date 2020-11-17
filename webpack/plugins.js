const AfterBuildHookPlugin = require('./AfterBuildHookPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = function (config) {
  const writeFilePlugin = new WriteFilePlugin();

  const afterBuildHookPlugin = new AfterBuildHookPlugin({
    copyPaths: config.assetsToBeCopied,
    movePaths: config.assetsToBeMoved,
  });

  const definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(config.isProd ? 'production' : 'development'),
  });

  const errorsPlugin = new FriendlyErrorsWebpackPlugin({
    clearConsole: true,
    compilationSuccessInfo: {
      // messages: config.isHMR ? [`Proxying ${config.browserSyncHost} to http://localhost:${config.browserSyncPort}`] : [],
      // notes: ['Some additional notes to be displayed upon successful bundling'],
    },
  });

  const extractCSS = new MiniCssExtractPlugin({
    // filename: isProd ? '[name].[hash].css' : '[name].css',
    // chunkFilename: isProd ? '[id].[hash].css' : '[id].css',
    filename: config.assetsOutputName || null ? config.assetsOutputName+'.css' : '[name].css',
    chunkFilename: '[id].css',
  });

  const providePlugin = new webpack.ProvidePlugin(config.providePlugins);

  const vueLoaderPlugin = new VueLoaderPlugin();

  const plugins = [
    writeFilePlugin,
    afterBuildHookPlugin,
    definePlugin,
    providePlugin,
    extractCSS,
    errorsPlugin,
    vueLoaderPlugin,
  ];

  if (config.isWatch || config.isHMR) {
    const browserSyncPlugin = new BrowserSyncPlugin({
      host: 'localhost',
      port: config.browserSyncPort,
      open: false,
      stream: true,
      proxy: {
        target: config.browserSyncHost,
        ws: true,
      },
      files: config.browserSyncWatchedFiles,
    }, {
      reload: false,
      injectCss: true,
    });

    plugins.push(browserSyncPlugin);
  }

  return plugins;
};
