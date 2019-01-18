/*eslint-disable*/

const webpack = require('webpack');

// use resolve() to normalize paths between unix/windows environments
var path = require('path');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  entry: {
    // app: './src/App.jsx',
    //app: resolve('pro-mern-stack11/src/App.jsx'),
    app: resolve('pro-mern-stack12/client/Client.jsx'),
    //vendor: ['react', 'react-dom', 'whatwg-fetch', 'babel-polyfill'],
    vendor: ['react', 'react-dom', 'react-bootstrap', 'react-select', 'react-router-bootstrap', 'isomorphic-fetch', '@babel/polyfill', 'react-router']
  },
  output: {
    // path: './static',
    path: resolve('pro-mern-stack12/static'),
    filename: 'app.bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          //presets: ['react', 'es2015'],
          presets: ['@babel/env', '@babel/react'],
        }
      }
    ]
  },
  devServer: {
    port: 8000,
    contentBase: 'static',
    proxy: {
      //'/api/*': {
      '**': {
        target: 'http://localhost:3000'
      },
    },
    historyApiFallback: true,
  },
  devtool: 'source-map'
};
