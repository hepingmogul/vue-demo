var HtmlWebpackPlugin = require('html-webpack-plugin'); // 处理html插件

var cfg = require('../config');


module.exports = {
  entry: {
    index: cfg.index,
    commons: cfg.commonModule,
  },

  output: {
    path: cfg.outputPath
  },

  module: {
    rules: [
      {
        test: /\.vue$/, // 以 .vue 结尾的文件 
        loader: "vue-loader" // 处理的规则loader
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: /* cfg.outputPath + */ 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name:/*  cfg.outputPath + */ 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成的html存放路径，相对于path
      template: cfg.html, // html模板路径
      chunks: cfg.loadModule, // 加载指定模块中的文件，否则页面缺省加载所有文件

      inject: true, // 允许插件修改哪些内容，true/false、'head'、'body'
      hash: false, // 为静态资源生成hash值
      // 压缩HTML文件
      minify: {
        removeComments: false, // 移除HTML中的注释
        collapseWhitespace: false // 删除空白符与换行符
      }
    }),

  ]
};