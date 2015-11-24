var path = require('path');
var webpack = require('webpack');
var config = {
  entry: {
    src: ['./src/app/app.jsx']
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader!babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};

module.exports = config;