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
        test: /\.css$/,
        exclude: /node_modules/,
        loader: extractCss.extract('style', 'css'),
      },
    ],

  },

  plugins: [
    extractCss
  ]


};
