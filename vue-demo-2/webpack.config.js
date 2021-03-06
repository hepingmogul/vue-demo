// webpack.config.js 内容如下
const path = require('path'); // 路径，nodejs自带的包
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
	entry: {
		main: path.join(__dirname, 'src/index.js'), // 入口文件
	},
	output: {
		filename: '[name].js', // 输出名字 [name]，输出源文件名，webpack缺省main.js
		path: path.join(__dirname, 'dist') // dist文件夹
	},
	module: {
		rules: [
			{
				test: /\.vue$/, // 以 .vue 结尾的文件 
				loader: "vue-loader" // 处理的规则loader
			}
		]
	},
	mode: 'development',
	// mode: 'production',

	watch: true,

	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html', // 生成的html存放路径，相对于path
			template: "E:\\HpGithub\\vue-demo\\vue-demo-2\\src\\index.html", // html模板路径
			// chunks: loadModule, // 加载指定模块中的文件，否则页面缺省加载所有文件

			inject: true, // 允许插件修改哪些内容，true/false、'head'、'body'
			hash: false, // 为静态资源生成hash值
			// 压缩HTML文件
			minify: {
				removeComments: false, // 移除HTML中的注释
				collapseWhitespace: false // 删除空白符与换行符
			}
		})
	]
};
module.exports = config;