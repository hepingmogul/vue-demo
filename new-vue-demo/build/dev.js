require('shelljs/global');

const util = require('util');
const webpack = require('webpack');

process.env.NODE_ENV = 'development';

// shell.exec()是 shelljs 的本地模式，即通过 exec 方法执行 shell 命令。此外还有全局模式，允许直接在脚本中写 shell 命令。
// const shell = require('shelljs'); 

const conf = require('../config/conf');
const webCfg = require('./base');

const {
  index: entryIndex,
  commonModule,
  outputPath,
  outputHtmlFileName,
  entryHtmlFile,
  loadModule
} = conf;

rm('-rf', outputPath);
mkdir('-p', outputPath);

webCfg.mode = process.env.NODE_ENV; // 生产环境

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

/* styl */
/* webCfg.module.rules.push({
  test: /\.styl$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: "postcss-loader",
      // 如果没有options这个选项将会报错 No PostCSS conf found
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
}); */

/* less */
webCfg.module.rules.push({
  test: /\.less$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: "postcss-loader",
      // 如果没有options这个选项将会报错 No PostCSS conf found
      options: {
        plugins: (loader) => [
          // CSS浏览器兼容
          require('autoprefixer')({
            browsers: ['last 5 versions']
          })
        ]
      }
    },
    'less-loader',
  ]
});

webCfg.plugins.push(
  new webpack.HotModuleReplacementPlugin({
    template: 'index.html',
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env.NODE_ENV)
  }),
)

console.log(util.inspect(webCfg));

module.exports = webCfg;