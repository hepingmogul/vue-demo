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

	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html'
		})
	]
};
module.exports = config;