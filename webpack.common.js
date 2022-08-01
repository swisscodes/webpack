import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

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
      filename: 'index.html',
      template: 'src/index.html',
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
        type: 'asset/resource',
      },
      {
        test: /\.json$/,
        type: 'json',
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    modules: [`...`, path.resolve(__dirname, 'src')],
  },
};
