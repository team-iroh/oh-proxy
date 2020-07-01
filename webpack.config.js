const path = require('path')

module.exports = {
  entry: "./public/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "./public/lib"),
    filename:"bundle.js"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude:/node_modules/,
      loader: "babel-loader"
    }]
  }
}