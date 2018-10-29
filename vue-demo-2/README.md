## vue + vue-router + webpack 实践 手动搭建环境 进阶篇(二)

### 基础篇在这儿！
- github地址：[https://github.com/hepingmogul/vue-demo/tree/master/vue-demo-1](https://github.com/hepingmogul/vue-demo/tree/master/vue-demo-1)

- 博客地址：[https://blog.csdn.net/weixin_40415614/article/details/81240222](https://blog.csdn.net/weixin_40415614/article/details/81240222)

### 什么是前端路由器？
- 查看地址：[https://blog.csdn.net/weixin_40415614/article/details/83505153](https://blog.csdn.net/weixin_40415614/article/details/83505153)

### 为何要是使用vue-router？vue-router是什么？
vue-router是vue的一个模块，我们称之为路由器，路由器是控制网页的页面切换，从而实现单页应用的模式。

基于前篇（基础篇），我们开始新增路由器功能。

### 如何使用vue-router

#### 第1步：首先安装模块
```
npm i vue-router --save
```

#### 第2步：配置路由器文件
###### 1. 在src文件夹下创建view文件夹
- 创建home.vue文件，内容如下：
```
<template>
 <div>
     <h3>我是首页</h3>
     <div><button @click="jump">跳转user页面</button></div>
 </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    jump() {
      this.$router.push("/user");
    }
  }
};
</script>
```

- 创建user.vue文件，内容如下：
```
<template>
    <div>
        <h3>我是我的页面</h3>
        <div><button @click="jump">跳转home页面</button></div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    jump() {
      this.$router.push("/home");
    }
  }
};
</script>
```
###### 2. 在src文件夹下创建router.js文件，内容如下：
> 注释：路由器使用的问题
> 1、页面组件打包的两种方式
> a. component: resolve => require(['./foo.vue'], resolve)，页面打包成单独的js文件，按需加载
> b. component: Foo，这样的（import Foo from './foo.vue';），打包到主js文件里面一起

```js
// router 内容
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './app.vue';
import Home from './view/home.vue';
import User from './view/user.vue';
export default new VueRouter({
    routes: [{
        path: '/',
        component: App,
        children: [
            { path: '/', redirect: '/home' },
            { path: '/home', meta: { title: '首页' }, component: Home },
            { path: '/user', meta: { title: '我的' }, component: User }
        ]
    }]
});
```

- 修改index.js文件
```js
// 增加路由器
import Vue from 'vue';
import App from './app.vue';
import router from './router';
const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
    el: root,
    router,
    render: (h) => h(App)
});
```

- 修改app.vue文件
```js
// 增加路由器模板
<template>
	<router-view></router-view>
</template>
```

###### 编译，在浏览器中访问dist下index文件：
> 例如：file:///E:/Demo/vue-demo/vue-demo-2/dist/index.html

点击button按钮相互跳转路由。


###### 文件目录结构
```
vue-demo-2/
  ├─ dist
  ├─ node_modules
  ├─ src/
  │   ├─view/
  │   │   ├─ home.vue
  │   │   └─ user.vue
  │   ├─ app.vue
  │   ├─ router.js
  │   └─ index.js
  ├─ .babelrc
  ├─ webpack.config.js
  ├─ README.md
  ├─ package.json
  └─ package-lock.json
```

###### 项目地址
- github项目地址：[https://github.com/hepingmogul/vue-demo/tree/master/vue-demo-2](https://github.com/hepingmogul/vue-demo/tree/master/vue-demo-2)

###### 文档地址
- vue2.0 文档地址：[https://cn.vuejs.org/v2/guide/](https://cn.vuejs.org/v2/guide/)
- vue-router 文档地址：[https://router.vuejs.org/zh/](https://router.vuejs.org/zh/)
-  webpack 文档地址：[https://webpack.github.io/](https://webpack.github.io/)，中文文档问度娘即可