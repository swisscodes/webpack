import path from 'path';
import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common.js';

const __dirname = path.resolve();

export default merge(webpackCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
