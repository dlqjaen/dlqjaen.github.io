const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const bundlePath = path.resolve('./../app/public/bundle');

module.exports = {
  mode: "development",
  entry: {
    app: [
      './js/app.js',
      './css/init.css',
      './css/util.css',
      './css/header.css',
      './css/posting.css',
      './css/contact.css'
    ]
  },
  output: {
    path: bundlePath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CleanWebpackPlugin('*.*', {
      root: bundlePath,
      verbose: false // Show/Hide logs to console.
    }),
  ]
}