const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  mode: "production",
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/index.js"),
        use: "imports-loader?this=>window"
      },
      {
        test: require.resolve("./src/global.js"),
        use: "exports-loader?file,parse=helpers.parse"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "catching"
    }),

    new webpack.ProvidePlugin({
      join: ["lodash", "join"]
    })

    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].[content].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  optimization: {
    runtimeChunk: "single"
  }
};
