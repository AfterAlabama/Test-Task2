const path = require('path')
const RefresherPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    port: 3000,
    open:true,
    hot:true,
    historyApiFallback:true
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?(css)$/,
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean:true,
    assetModuleFilename: '[name][ext]'
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new RefresherPlugin()
  ]
}