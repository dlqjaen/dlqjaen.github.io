const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bundlePath = path.resolve(__dirname , './dist/bundle');

module.exports = {
  mode: "development",
  entry: {
    app: [
      './js/app.js',
      './js/posting.js',
      './css/init.css',
      './css/util.css',
      './css/header.css'
    ],
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
  ]
}