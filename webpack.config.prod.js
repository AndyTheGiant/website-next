const Path = require('path');
const Autoprefixer = require('autoprefixer');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'normalize.css',
    Path.resolve(__dirname, 'src/stylus/index.styl'),
    Path.resolve(__dirname, 'src/scripts/index.js')
  ],
  output: {
    path: Path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },

  plugins: [
    new Webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          Autoprefixer
        ]
      }
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: Path.resolve(__dirname, 'src/index.ejs'),
    }),
    new CopyWebpackPlugin([
      { from: 'src/static', to: 'static' },
      { from: 'src/cms', to: 'admin' }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.styl$/i,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
         use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[name].[ext]'
          }
        }
      }
    ]
  }
}