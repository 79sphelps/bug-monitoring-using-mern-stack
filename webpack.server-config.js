const webpack = require('webpack');

var path = require('path');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  target: 'node',
  entry: ['./server/index.js', './node_modules/webpack/hot/poll?1000'],
  output: {
    //path: './dist',
    path: resolve('pro-mern-stack11/dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: [/^[a-z]/],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env']
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'source-map'
};
