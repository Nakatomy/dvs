const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (config) {
  return new UglifyJsPlugin({
    parallel: true,
    cache: true,
    sourceMap: config.sourcemapsInProd,
    extractComments: true,
  });
};
