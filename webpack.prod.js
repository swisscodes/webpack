import path from 'path';
import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const __dirname = path.resolve();

export default merge(webpackCommon, {
  mode: 'production',
  output: {
    filename: 'js/[name].bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, //to clean/delete the dist folder everytime we build
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/assets/css/[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()], // use spread operator like this to pass the previous minimizers
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(sc|c)ss$/i,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
});
