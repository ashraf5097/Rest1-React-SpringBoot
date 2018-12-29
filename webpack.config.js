// Import webpack moduke
var webpack = require("webpack");
// Import open browser plugin
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
//Import path module
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./src/index.js", //set entry file
    // Resolve to output directory and set file
    output: {
        path: path.resolve("dist/assets"),
        filename: "bundle.js",
        publicPath: "assets"
    },

    // Add Url param to open browser plugin

    // Set dev-server configuration
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000,
        historyApiFallback: true,

    },

    // Add babel-loader to transpile js and jsx files
    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:3000'}),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].scss",
            chunkFilename: "[id].scss",
        }),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
              options: { presets: ["es2015"] }
            }
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: "style-loader" // creates style nodes from JS strings
              },
              {
                loader: "css-loader" // translates CSS into CommonJS
              },
              {
                loader: "sass-loader" // compiles Sass to CSS
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: "style-loader" // creates style nodes from JS strings
              },
              {
                loader: "css-loader" // translates CSS into CommonJS
              }
            ]
          },
          { 
            test: /\.png$/, 
            loader: "url-loader?limit=100000" 
          },
          { 
            test: /\.jpg$/, 
            loader: "file-loader" 
          },
          {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=application/font-woff'
          },
          {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=application/octet-stream'
          },
          {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'file'
          },
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=image/svg+xml'
          }
        ]
      }
}