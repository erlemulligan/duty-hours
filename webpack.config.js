var webpack = require('webpack');
var path = require('path');

var config = {
  buildDir: 'dist',
  jsDir: '/assets/js',
  cssDir: '/assets/css',
}

module.exports = {
  context: __dirname,
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, config.buildDir + config.jsDir),
    publicPath: 'assets/',
    filename: "main.js",
  }

};
