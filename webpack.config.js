var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:4000',
      'webpack/hot/only-dev-server',
      './index'
    ],
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: false
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'react-hot',
      exclude: /node_modules/,
      include: path.resolve(__dirname, 'src')
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: path.resolve(__dirname, 'src'),
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      }
    }]
  }
};
