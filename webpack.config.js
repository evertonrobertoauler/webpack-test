var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './main',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts', exclude: /node_modules/}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  debug: true,
  devtool: '#source-maps',
  watchOptions: {
    aggregateTimeout: 200
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true, comments: false, compress: {warnings: false}})
  ]
};
