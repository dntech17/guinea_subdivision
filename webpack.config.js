const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
// I wa having some trouble with fs module in webpack
// i found a solution in the following links (LSM - 15/7/18)
// https://github.com/webpack-contrib/css-loader/issues/447
// https://stackoverflow.com/questions/41692643/webpack-and-express-critical-dependencies-warning/42425214#42425214


let config = {
     entry: './src/index.js',
     mode: "development",
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'index.js'
     },
     target: 'node',
     externals: [nodeExternals()],
     module: {
        rules: [{
            test: /\.js$/,
            use:[
                'babel-loader',
                {
                loader: 'babel-loader',
                options: {
                    presets: ["es2015"]
                }
            }],
        }]
     },
     plugins: [
         new DashboardPlugin(),
         new CopyWebpackPlugin([
            { from: './src/data',
              to: 'data',
             toType: 'dir'
            }
         ])
     ],
     devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
      },
     stats: {
         colors: true
     },
     // devtool: 'source-map'
 };

module.exports = config;

 if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new MinifyPlugin()
    );
    module.exports.mode = 'production';
  }
