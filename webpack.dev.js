import path from 'path';
import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

export default merge(webpackCommon, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    hot: false, // optional, but you must not set both hot and liveReload to true
    liveReload: true,
    port: 3100,
  },
});
