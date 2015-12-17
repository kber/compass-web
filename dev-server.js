'use strict';

const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const connectHistoryApiFallback = require('connect-history-api-fallback');

let webpackConfig = require('./webpack.config');

webpackConfig.entry.app = [
  'webpack/hot/dev-server',
  'webpack-hot-middleware/client',
  webpackConfig.entry.app
];
webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

let babelLoader = webpackConfig.module.loaders.find((loader) => loader.loader === 'babel-loader');
babelLoader.query = {
  // Wraps all React components into arbitrary transforms
  // https://github.com/gaearon/babel-plugin-react-transform
  plugins: ['react-transform'],
  extra: {
    'react-transform': {
      transforms: [
        {
          transform: 'react-transform-hmr',
          imports: ['react'],
          locals: ['module']
        }, {
          transform: 'react-transform-catch-errors',
          imports: ['react', 'redbox-react']
        }
      ]
    }
  }
};

const compiler = webpack(webpackConfig);

browserSync({
  server: {
    baseDir: 'public',
    middleware: [
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: webpackConfig.stats
      }),
      webpackHotMiddleware(compiler),
      connectHistoryApiFallback()
    ]
  }
});
