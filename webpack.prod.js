import path from 'path';
import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common.js';

const __dirname = path.resolve();

export default merge(webpackCommon, {
  mode: 'production',
  output: {
    filename: 'js/[name].bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, //to clean/delete the dist folder everytime we build
  },
});
