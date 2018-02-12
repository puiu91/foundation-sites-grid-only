const { resolve } = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const extractCss = new ExtractTextPlugin({
  filename: "foundation-sites-grid-only.css"
});

module.exports = {
  devtool: "none",
  entry: [
    resolve("src", "setup.scss")
  ],
  output: {
    filename: "foundation-sites-grid-only.css",
    path: resolve("build")
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: extractCss.extract({
              fallback: "style-loader",
              use: [
                {
                  loader: "css-loader",
                  options: {
                    minimize: false,
                    importLoaders: 1
                  }
                },
                {
                  loader: "postcss-loader",
                  options: {
                    plugins: () => [autoprefixer]
                  }
                }
              ]
            })
          },
          {
            test: /\.scss$/,
            use: extractCss.extract({
              fallback: "style-loader",
              use: [
                {
                  loader: "css-loader",
                  options: {
                    minimize: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: "postcss-loader",
                  options: {
                    plugins: () => [autoprefixer]
                  }
                },
                { loader: "sass-loader" }
              ]
            })
          }
        ]
      }
    ]
  },
  plugins: [extractCss]
};
