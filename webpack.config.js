'use strict';

const path = require('path');
const webpack = require('webpack');
const config = require('config');

const DEBUG = process.env.NODE_ENV !== 'production';
const VERBOSE = false;

let plugins = [
  new webpack.DefinePlugin({
    __DEVELOPMENT__: DEBUG,
    API_BASE_URL: JSON.stringify(config.API_BASE_URL)
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].js'),
  new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1
  })
];

if (!DEBUG) {
  plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: VERBOSE
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  );
}

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-router',
      'redux-thunk',
      'whatwg-fetch'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'public/__built__'),
    publicPath: '/__built__/',
    filename: '[name].js'
  },

  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,

  resolve: {
    extensions: ['', '.js', '.scss']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]' + (DEBUG ? '&sourceMap' : ''),
        'sass'
      ]
    }]
  },

  plugins,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE
  }
};
