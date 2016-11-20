var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCss = new ExtractTextPlugin('./assets/css/[name].css');

var config = {
  srcPath: './app',
  bundlePath: './bundle/',
  publicPath: '/webpack/bundle/',
  jsPath: './js/',
  cssPath: './css/',
}

module.exports = {
  context: path.resolve(config.srcPath),

  entry: {
    bundle: [config.jsPath + 'app.js', config.cssPath + 'app.css'],
  },

  output: {
    path: path.join(config.bundlePath),
    publicPath: config.publicPath,
    filename: "./assets/js/[name].js",
  },

  module: {
    preLoaders: [
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: extractCss.extract('style', ['css', 'postcss']),
      },
    ],

  },

  postcss: function(webpack) {
    return [
      require('postcss-import')({
        plugins: [
          require('stylelint')()
        ],
      }),
      require('postcss-url')(),
      require('postcss-cssnext')({ browsers: ['> 2%'] }),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  },

  plugins: [
    extractCss
  ]

};
