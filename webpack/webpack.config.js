var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


var options = {
  entry: {
    'app': './js/main.js',
    'styles': './scss/main.scss'
  },
  output: {
    path: path.dirname(__dirname) + '/assets/static/gen',
    filename: '[name].js'
  },
  devtool: 'cheap-module-source-map',
  mode: 'production',
  resolve: {
    modules: ['node_modules'],
    extensions: ['', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g\|\.gif$/,
        use: ['file']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'styles.css'})
  ]
};

module.exports = options;