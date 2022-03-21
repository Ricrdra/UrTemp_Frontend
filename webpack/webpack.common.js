const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", path.resolve(__dirname, "..", "./src/index.tsx")],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "..", "src", "components"),
      "@pages": path.resolve(__dirname, "..", "src", "pages"),
      "@hooks": path.resolve(__dirname, "..", "src", "hooks"),
      "@utils": path.resolve(__dirname, "..", "src", "utils"),
      "config": path.resolve(__dirname, "..", "src", "config"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "public", "index.html"),
    }),
    new Dotenv({
      path: path.resolve(__dirname, "..", ".env"),
    }),
  ],
};
