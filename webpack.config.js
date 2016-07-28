'use strict'

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

var dirs = {
  src: path.join(__dirname, 'src'),
  dist: __dirname
};

var srcDirs = {
  html: path.join(dirs.src, 'html'),
  js: path.join(dirs.src, 'js'),
  styl: path.join(dirs.src, 'styl')
};

var distDirs = {
  html: dirs.dist,
  js: dirs.dist,
  styl: dirs.dist
}

module.exports = {
  entry: path.join(srcDirs.js, 'main.js'),
  
  output: {
    path: distDirs.js,
    filename: 'app.js',
  },
  
  devtool: env === 'development' ? 'cheap-inline-module-source-map' : null,
  
  debug: true,
  
  devServer: {
    inline: true,
    port: 3333
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        include: srcDirs.js,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, 
      {
        test: /\.styl$/,
        exclude: '/node_modules/',
        include: srcDirs.js,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      }
    ]
  },

  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
    moduleTemplates: ["*-loader", "*"]
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
}

if (env === 'production') {
  module.exports.plugins.push( new webpack.optimize.UglifyJsPlugin(
    {
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}