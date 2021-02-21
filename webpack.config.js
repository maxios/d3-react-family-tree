const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: path.resolve(__dirname, 'src/react-client/app.js'),
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, './src/www/index.html')
      })
    ],
    externals: {
      'react': 'React'
    },
    resolve: {
      extensions: ['.js']
    },
    devServer: {
      port: 5000,
      hot: argv.mode === 'development',
      inline: argv.mode === 'development',
      historyApiFallback: {
        index: '/'
      },
      publicPath: '/'
    }
  }
}
