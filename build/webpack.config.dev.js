const path = require('path');

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    background: './src/background/index.js',
    popup: './src/popup/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/js')
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, 
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
