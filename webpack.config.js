var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/OrganGrinder.jsx",
  output: {
    path: "./",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["react"]
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
