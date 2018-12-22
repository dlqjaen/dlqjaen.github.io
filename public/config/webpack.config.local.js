const path = require('path');
const entryList = require('./entryList');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const bundlePath = path.resolve(__dirname , '../dist/bundle');

module.exports = {
  mode: "development",
  entry: entryList,
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
        use: [
          MiniCssExtractPlugin.loader,
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
          { loader: "html-loader" },
          { loader: "markdown-loader" }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      fileName: `${bundlePath}/manifest.json`
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin('*.*', {
      root: bundlePath,
      verbose: false // Show/Hide logs to console.
    }),
    // new VueLoaderPlugin()
  ]
}