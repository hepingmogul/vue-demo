## vue + webpack 实践 手动搭建环境 基础环境(一)

###### 为什么使用vue？
vue以数据驱动的 web 界面的渐进式框架[点这里了解什么是pwa](https://lavas.baidu.com/doc/)，vue的目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件。MVVM的开发模式，可以拆分成：View - ViewModel - Model（视图模型 - 控制器 - 数据模型）三部分。vue特性：轻量、数据双向绑定、指令、插件化。

###### 手动搭建基础开发环境
- 第一步：创建文件
1、创建文件夹 VueCase
2、进入dos窗口，进入VueCase文件
3、初始化项目，新建package.json配置文件
```
npm init
```

- 第二步：安装基础npm包
1、根目录打开dos窗口输入以下指令安装
```
npm i vue --save-dev
npm i vue-loader --save-dev
npm i vue-template-compiler --save-dev
npm i webpack --save-dev
npm i webpack-cli --save-dev
npm i html-webpack-plugin --save-dev
```

- 第三步：基础配置
1、根目录创建webpack.config.js文件
```js
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
```

2、根目录创建src文件夹，并在src下创建index.js
```js
// 内容如下，初始化vue，传入根元素root，和app页面
import Vue from 'vue'; // 导入vue模块
import App from './app.vue'; // 导入app页面模块
const root = document.createElement('div'); // 创建容器
document.body.appendChild(root); // 添加容器至文档中
new Vue({
    el: root,
    render: (h) => h(App)
});
```

3、在src下创建app.vue文件
```js
// 内容如下，template是vue指定的模板标签
// {{text}} 这种写法是现在比较流行的数据双向绑定
<template>
	<h3>{{text}}</h3>
</template>
<script>
	// 导出模块，data为数据部分
	export default {
		data(){
			return {
				text: 'Hello World!'
			}
		}
	}
</script>
```

- 第四步：配置babel
1、根目录创建.babelrc文件
2、Windows下使用命令行创建
```
type NUL>.babelrc // 创建.babelrc文件
```
3、安装babel相关的包
```
// 这里babel 更新到7.x了
npm i @babel/core 
// https://babeljs.io/docs/en/babel-preset-env#docsNav
npm i @babel/preset-env 
npm i @babel/runtime 
npm i @babel/plugin-syntax-jsx
// http://npm.taobao.org/package/babel-plugin-transform-vue-jsx
npm i babel-plugin-transform-vue-jsx
```
```js
// .babelrc 内容如下
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
          ]
        }
      }
    ]
  ],
  "plugins": [
    "transform-vue-jsx"
  ]
}
```

- 第五步：运行
```js
// dos 窗口中运行 以下指令，这里指定webpack的运行配置文件为webpack.config.js的原因，是因为直接运行“webpack”，调用的是全局的webpack，并不是项目中的webpack
webpack --config webpack.config.js
/* 
运行时出如下内容，需要全局安装webpack-cli【npm i -g webpack-cli】
One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
 - webpack-cli (https://github.com/webpack/webpack-cli)
   The original webpack full-featured CLI.
We will use "npm" to install the CLI via "npm install -D".
Do you want to install 'webpack-cli' (yes/no):
*/
```

- 第六步：打包完成
1、根目录生成的dist文件
2、打开dist/index.html，页面上出现“Hello World！”字样说明此次手动搭建环境成功。

- 文件目录结构
```
vue-demo-1/
  ├─ dist
  ├─ node_modules
  ├─ src/
  │   ├─ app.vue
  │   └─ index.js
  ├─ .babelrc
  ├─ webpack.config.js
  ├─ README.md
  ├─ package.json
  └─ package-lock.json
```

###### 项目地址
- github项目地址：[https://github.com/hepingmogul/vue-demo/tree/master/vue-demo-1](https://github.com/hepingmogul/vue-demo/tree/master/vue-demo-1)

###### 文档地址
- vue2.0 文档地址：[https://cn.vuejs.org/v2/guide/](https://cn.vuejs.org/v2/guide/)
- vue-router 文档地址：[https://router.vuejs.org/zh/](https://router.vuejs.org/zh/)
-  webpack 文档地址：[https://webpack.github.io/](https://webpack.github.io/)，中文文档问度娘即可