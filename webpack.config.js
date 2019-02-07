/* 
    ./webpack.config.js
*/
const webpack = require('webpack');
const path = require('path');
require('@babel/polyfill');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const assetsPath = path.resolve('assets');
const includePaths = [
  assetsPath
];

const CompressionPlugin = require('compression-webpack-plugin');
const ProductionModePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});
const HotModuleReplacement = new webpack.HotModuleReplacementPlugin();

module.exports = {
  mode: 'development',
  /* entry: {
    //vendor: ['react', 'lodash/core'],
    index: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      'babel-polyfill',
      './src/index.js'
    ],
  }, */
  entry: ['@babel/polyfill', './src/client.js'],

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'sass-loader' // compiles SCSS to CSS
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.(jpg|png|svg|ico)$/,
        include: includePaths,
        //exclude: 
        exclude: [
          /node_modules/,
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.scss$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.ejs$/,
        ],
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), 
    ProductionModePlugin, 
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.IgnorePlugin(/^\.\/locale$/, /lodash\/core$/),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    //HtmlWebpackPluginConfig, 
    HotModuleReplacement
  ]
};
