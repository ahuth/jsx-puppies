const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    pathinfo: true,
    filename: "static/js/bundle.js",
  },
  module: {
    rules: [
      {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
      {test: /\.css$/, use: ["style-loader", "css-loader"]},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
    }),
  ],
}
