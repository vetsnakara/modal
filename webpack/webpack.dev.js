const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new Dotenv({
      path: './.env.development'
    })
  ],

  devServer: {
    hot: true,
    open: true,
    overlay: true,
    historyApiFallback: true
  },

  devtool: 'eval-source-map'
}
