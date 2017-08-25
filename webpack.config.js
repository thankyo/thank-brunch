const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: "./index.js",
    vendor: [
      'offline-plugin/runtime',
      'react',
      'react-dom',
      'react-router',
      'prop-types',
      'react-redux',
      'redux',
      'redux-thunk',
      'redux-form'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[hash].[ext]' },
        },
      },
    ]
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: '[name].bundle.js',
    publicPath: "/"
  },
  plugins: [
    new CopyWebpackPlugin([ { from: '../assets' } ]),
    new webpack.optimize.ModuleConcatenationPlugin(),
    //new webpack.optimize.UglifyJsPlugin({ /* options here */ }),
    new webpack.HotModuleReplacementPlugin(),
    /* Uncomment to enable automatic HTML generation */
    new HtmlWebpackPlugin({
      appMountId: 'app-root',
      inlineManifestWebpackName: 'webpackManifest',
      template: './index.ejs',
      title: 'LoveIt',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new OfflinePlugin({
      AppCache: false,
      ServiceWorker: { events: true },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "assets"),
    historyApiFallback: true,
    hot: true,
    lazy: false,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:9000/',
        secure: false,
      },
    }
  },
};

/* Production */

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  const CompressionPlugin = require("compression-webpack-plugin");

  config.output.filename = '[name].[chunkhash].js';
  config.plugins = [
    ...config.plugins, // ES6 array destructuring, available in Node 5+
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ];
}

/*
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  config.plugins = [
    ...config.plugins,
    new BundleAnalyzerPlugin(),
  ];
}
*/

module.exports = config;