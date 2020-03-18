const Dotenv = require('dotenv-webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  plugins: [
    new Dotenv({
      path: './.env.production'
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'main.[hash].css'
    })
  ],

  devtool: 'source-map'
}
