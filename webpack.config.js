const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/assets/styles/app.scss', './src/assets/js/app.js'],
    home: './src/assets/js/home.js',
    product: './src/assets/js/product.js',
    checkout: './src/assets/js/checkout.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    clean: false
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader', options: { postcssOptions: { plugins: [['autoprefixer']] } } },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ],
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()]
  }
};
