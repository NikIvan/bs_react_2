'use strict'

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

var dirs = {
  src: path.join(__dirname, 'src'),
  dist: __dirname
};

module.exports = {
  entry: path.join(dirs.src, 'index.js'),
  
  output: {
    path: dirs.dist,
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
        include: dirs.src,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, 
      {
        test: /\.styl$/,
        exclude: '/node_modules/',
        include: dirs.src,
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