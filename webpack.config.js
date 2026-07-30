const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ThemeWatcher = require('@salla.sa/twilight/watcher.js');

const asset = (file = '') => path.resolve(__dirname, 'src/assets', file);
const output = (file = '') => path.resolve(__dirname, 'public', file);

module.exports = {
  entry: {
    app: [asset('styles/app.scss'), asset('js/app.js')],
    home: asset('js/home.js'),
    product: asset('js/product.js'),
    checkout: asset('js/checkout.js'),
  },
  output: {
    filename: '[name].js',
    path: output(),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: [['autoprefixer']] } },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ThemeWatcher(),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new CopyPlugin({
      patterns: [{ from: asset('images'), to: output('images') }],
    }),
  ],
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
};
