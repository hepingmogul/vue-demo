// https://blog.csdn.net/harsima/article/details/80819747


const path = require('path'); // 路径，nodejs自带的包
const webpack = require('webpack'); // webpack引入
// const { VueLoaderPlugin } = require('vue-loader'); // 15.2.2 版本才有 VueLoaderPlugin 这个插件，当前使用的是 14.2.2版本
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html插件
// const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 抽离css，webpack v3.0 用法
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css，webpack v4.0 用法
const CleanWebpackPlugin = require("clean-webpack-plugin");
const devServer = require('webpack-dev-server');
const isDev = process.env.NODE_ENV === 'development';

const config = {
	entry: {
		main: path.join(__dirname, 'src/index.js'), // 入口
		commons: ['vue', 'vue-router'],
	},

	output: {
		// filename: '../js/[name].js', // 输出名字 [name] 可以自定义名字，webpack缺省main.js
		path: path.join(__dirname, 'dist') // dist文件夹
	},

	module: {
		rules: [
			{
				test: /\.vue$/, // 以 .vue 结尾的文件 
				loader: "vue-loader" // 处理的规则loader
			},
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader'
			// 	]
			// },

			// {
			// 	test: /\.styl$/,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader',
			// 		{
			// 			loader: 'postcss-loader',
			// 			options: {
			// 				sourceMap: true
			// 			}
			// 		},
			// 		'stylus-loader'
			// 	]
			// },


			// {
			// 	loader: "postcss-loader",
			// 	options: {
			// 		plugins: [
			// 			require("autoprefixer") /*在这里添加*/
			// 		]
			// 	}
			// },

			{
				test: /\.(gif|jpg|jpeg|png|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1024,
							name: '[name].[ext]'
						}
					}
				]
			}
		]
	},

	target: 'web',

	// mode: 'development', // 开发环境
	// mode: 'production', // 生产环境，自动压缩代码

	watch: true, // 监听文件，自动打包

	//optimization与entry/plugins同级
	optimization: {
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
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		// new VueLoaderPlugin(),

		/* new webpack.LoaderOptionsPlugin({
					test: /\.xxx$/, // may apply this only for some modules
					options: {
							// mode: ...
					}
			}) */

		/* new webpack.DefinePlugin({
					'process.env': {
							NODE_ENV: isDev ? '"production"' : '"development"'
					}
			}), */

		new HtmlWebpackPlugin({
			filename: 'index.html',    //生成的html存放路径，相对于 path
			template: 'src/index.html',    //html模板路径
			inject: true,    //允许插件修改哪些内容，true/'head'/'body'/false,
			chunks: ['runtime', 'commons', 'main'],//加载指定模块中的文件，否则页面会加载所有文件
			hash: false,    //为静态资源生成hash值
			minify: {    //压缩HTML文件
				removeComments: false,    //移除HTML中的注释
				collapseWhitespace: false    //删除空白符与换行符
			}
		}),
	]
};

if (isDev) {
	config.devtool = '#cheap-module-eval-source-map';
	config.mode = 'development';
	config.output.filename = './js/[name].[hash:8].js';
	config.devServer = {
		port: 8000,
		// host: '0.0.0.0',
		host: '127.0.0.1',
		overlay: {
			errors: true
		},
		open: true,
		/*   historyFallback: {
 
			} */

		hot: true
	}

	config.module.rules.push({
		test: /\.styl$/,
		use: [
			'style-loader',
			'css-loader',
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true
				}
			},
			'stylus-loader'
		]
	});

	config.plugins.push(
		new webpack.HotModuleReplacementPlugin({
			template: 'index.html',
		}),
		new webpack.NoEmitOnErrorsPlugin()
	)
} else {
	// config.mode = 'production';
	config.mode = 'development';
	config.output.filename = './js/[name].[chunkhash:8].js';

	// loader是由执行顺序的，顺序是从右向左
	config.module.rules.push({
		test: /\.styl$/,
		// loader: 'css-loader?importLoaders=1!postcss-loader',

		use: [
			// 'style-loader', // 这里不需要在指定，因为没有加到html里面
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

	config.plugins.push(
		new MiniCssExtractPlugin({
			filename: './css/styles.[contenthash:8].css',
		})
	)
}

module.exports = config;