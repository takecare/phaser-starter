const path = require('path')
const copyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
    'production-dependencies': ['phaser']
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'build')
  },

  plugins: [
    new copyPlugin([{
      from: path.resolve(__dirname, 'index.html'),
      to: path.resolve(__dirname, 'build')
    }]),
    new copyPlugin([{
      from: path.resolve(__dirname, 'assets', '**', '*'),
      to: path.resolve(__dirname, 'build')
    }]),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'production-dependencies',
      filename: 'prod-deps.bundle.js'
    })
  ]
}
