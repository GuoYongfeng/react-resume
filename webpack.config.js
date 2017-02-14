var path = require('path'),
  webpack = require('webpack'),
  ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function( env ){
  return {
    entry: path.resolve(__dirname, "src/main.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js"
    },
    devtool: "cheap-eval-source-map",
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ExtractTextWebpackPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
            publicPath: "/dist"
          })
        }
      ]
    },
    plugins: [
      new ExtractTextWebpackPlugin({
        filename: "bundle.css"
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "src/index.html")
      })
    ]
  }
}
