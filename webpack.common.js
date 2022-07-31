import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: {
    /*the key here is what is used to get the name on the filename
    e.g filename: '[name].bundle.[contenthash].js',
    the name gets the index here for example
    */
    index: './src/index.js',
    vendor: './src/vendorjs/vendor.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'public/index.html',
      template: './public/index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
    ],
  },
};
