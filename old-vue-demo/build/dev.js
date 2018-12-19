var util = require('util');
var webpack = require('webpack');

process.env.NODE_ENV = 'development';

// var shell = require('shelljs'); // shell.exec()是 shelljs 的本地模式，即通过 exec 方法执行 shell 命令。此外还有全局模式，允许直接在脚本中写 shell 命令。
require('shelljs/global');

var cfg = require('../config');
var webCfg = require('./base');

rm('-rf', cfg.outputPath);
mkdir('-p', cfg.outputPath);

webCfg.mode = "development"; // 生产环境

webCfg.output.filename = 'js/[name].js'; // 输出文件名、路径、格式

webCfg.watch = true; // 监听文件，自动打包

webCfg.devtool = '#cheap-module-eval-source-map';

webCfg.devServer = {
  port: 8000,
  host: '127.0.0.1',
  overlay: {
    errors: true
  },
  open: true,
  // historyFallback: {},
  hot: true
};

webCfg.module.rules.push({
  test: /\.styl$/,
  use: [
    'style-loader',
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

webCfg.plugins.push(
  new webpack.HotModuleReplacementPlugin({
    template: 'index.html',
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify('development')
  }),
)

console.log(util.inspect(webCfg));

module.exports = webCfg;