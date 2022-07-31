import path from 'path';
import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common.js';

const __dirname = path.resolve();

export default merge(webpackCommon, {
  mode: 'development',
  output: {
    filename: 'buid.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
