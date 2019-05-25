const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', path.resolve(`./client/src/index.jsx`)]
  },
  output: {
    path: path.resolve('./client/dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.jsx$/,
        use: 'babel-loader'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['image-webpack-loader']
      },
    ]
  }
};
