const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babelLoader = {
  loader: "babel-loader",
  options: {
    cacheDirectory: true,
    presets: ["@babel/preset-env"],
  },
};

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "catch-the-cat.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [babelLoader],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "node_modules/phaser/dist/phaser.min.js",
      },
    ]),
    new HtmlWebpackPlugin({
      title: "Catch The Cat",
      template: "public/index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
