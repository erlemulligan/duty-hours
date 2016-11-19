var webpack = require('webpack');
var path = require('path');

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
    jsBundle: [config.jsPath + 'app.js'],
  },
  output: {
    path: path.join(config.bundlePath),
    publicPath: config.publicPath,
    filename: "./assets/js/[name].js",
  }

};
