// require('babel-register')({
require('@babel/register')({
  // presets: ['es2015-node4'],
  presets: ['@babel/env', '@babel/react'],
});

require('./index.js');
