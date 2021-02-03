const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index'),
  watch: false,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "index.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'index')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.json', '.js']
  },
  target: "node",
  // externals: [/node_modules/, 'bufferutil', 'utf-8-validate']
};