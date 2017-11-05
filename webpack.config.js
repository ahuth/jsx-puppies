module.exports = {
  entry: "src/index.js",
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
}
