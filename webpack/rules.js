const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (config, loaders) {
  return [
    {
      test: /\.css$/i,
      use: [
        config.isHMR ? loaders.styleLoader : MiniCssExtractPlugin.loader,
        loaders.cssLoader,
      ],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        config.isHMR ? loaders.styleLoader : MiniCssExtractPlugin.loader,
        loaders.cssLoader,
        loaders.sassLoader,
      ],
      exclude: config.sassExcludes,
    },
    {
      test: /\.js$/i,
      use: loaders.jsLoader,
      exclude: file => (/node_modules/.test(file) && !/\.vue\.js/i.test(file)),
    },
    /*
    {
      test: /\.(jpe?g|png|woff2?|eot|ttf|svg)($|\?)/i,
      loader: 'url-loader?limit=100000',
    },
    */
    /*
    {
      test: /\.(woff|eot|ttf|svg)$/i,
      use: 'file-loader',
      options: {},
    },
    */
    {
      test: /\.vue$/i,
      loader: loaders.vueLoader,
      // exclude: /node_modules/,
    },
  ];
};
