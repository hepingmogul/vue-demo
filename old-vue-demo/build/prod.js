var util = require('util');
var webpack = require('webpack');

var MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css，webpack v4.0 用法
// var CleanWebpackPlugin = require("clean-webpack-plugin");

// process.env.NODE_ENV = JSON.stringify('production');

// var shell = require('shelljs'); // shell.exec()是 shelljs 的本地模式，即通过 exec 方法执行 shell 命令。此外还有全局模式，允许直接在脚本中写 shell 命令。
require('shelljs/global');

var cfg = require('../config');
var webCfg = require('./base');

rm('-rf', cfg.outputPath);
mkdir('-p', cfg.outputPath);

webCfg.mode = 'production'; // 生产环境

webCfg.output.filename = 'js/[name].[chunkhash:8].js'; // 输出文件名、路径、格式

webCfg.watch = true; // 监听文件，自动打包

webCfg.optimization = {
  splitChunks: {
    cacheGroups: {
      commons: {
        name: "commons",
        chunks: "initial",
        minChunks: 2
      }
    }
  },
  runtimeChunk: {
    name: 'runtime'
  }
};

webCfg.module.rules.push({
  test: /\.styl$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: "postcss-loader",
      // 如果没有options这个选项将会报错 No PostCSS Config found
      options: {
        plugins: (loader) => [
          // CSS浏览器兼容
          require('autoprefixer')({
            browsers: ['last 5 versions']
          })
        ]
      }
    },
    'stylus-loader',
  ]
});

// webCfg.plugins.unshift(
//   new CleanWebpackPlugin(['dist'])
// );

webCfg.plugins.push(
  new MiniCssExtractPlugin({
    filename: './css/[name].[contenthash:8].css',
  })
);

console.log(util.inspect(webCfg));

webpack(webCfg, function (err, stats) {
  if (err)
    throw err;

  // console.log(util.inspect(stats));

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');
});