var webpack = require('webpack'),
    path = require("path"),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
      index: path.resolve(__dirname, "./src/main.js"),
      react_vendor: ["react", "react-dom", "react-router"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkhash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?limit=819200"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader",
                  publicPath: "/dist/assets/styles"
                })
                // loader: "style-loader!css-loader?sourceMap"
            },
            // {
            //     test: /\.scss$/,
            //     loader: "style-loader!css-loader!sass-loader?sourceMap"
            // },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader?limit=50000&name=[path][name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx" ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     "process.env": { NODE_ENV: process.env.NODE_ENV ? JSON.stringify("production") : JSON.stringify("development") }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: path.resolve(__dirname, "./src/index.html")
        }),
        new CopyWebpackPlugin([
          { from: 'src/assets', to: 'assets' }
        ]),
        new ExtractTextWebpackPlugin({
          filename: "bundle.css"
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: "common"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        stats: {
          colors: true
        },
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}
