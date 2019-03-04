const path = require("path");

const devMode = process.env.NODE_ENV === 'development';

// Plugins ----------------------------------
const CleanWebpackPlugin = (CleanWebpackPlugin =>
  new CleanWebpackPlugin(["build"]))(require("clean-webpack-plugin"));

const CopyPlugin = (CopyPlugin =>
  new CopyPlugin([
    {
      context: "./public",
      from: "**/*",
      to: ".",
      ignore: ["index.html", "favicon.ico"]
    }
  ])
)(require("copy-webpack-plugin"));

const HtmlWebpackPlugin = (HtmlWebpackPlugin =>
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    favicon: "./public/favicon.ico",
    minify: false
  })
)(require("html-webpack-plugin"));

const MiniCssExtractPlugin = (MiniCssExtractPlugin => 
  new MiniCssExtractPlugin({
    filename: 'styles.css'
  })
)(require('mini-css-extract-plugin'));

const OptimizeCSSAssets = (OptimizeCSSAssets =>
  new OptimizeCSSAssets()
)(require('optimize-css-assets-webpack-plugin'));

const DashboardPlugin = (DashboardPlugin =>
  new DashboardPlugin()
)(require('webpack-dashboard/plugin'));

// Webpack config -------------------------------------
const config = {
  mode: devMode ? "development" : "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, devMode ? ".test-dev" : "build")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(m?)js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnWarning: false
        }
      },
      {
        test: /\.(m?)js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // devMode ? 'style-loader' : require('mini-css-extract-plugin').loader,
          // 'css-loader',
          'raw-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [{
          loader: 'file-loader',
          options: {
            name: 'assets/images/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    open: true
  },
  plugins: [
    CleanWebpackPlugin,
    CopyPlugin,
    HtmlWebpackPlugin,
    MiniCssExtractPlugin,

    // Dev
    DashboardPlugin,

    // Production
    !devMode && OptimizeCSSAssets
  ]
};

module.exports = config; 