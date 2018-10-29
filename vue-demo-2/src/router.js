/**
 * 路由器使用的问题
 * 1、页面组件打包的两种方式
 * a. component: resolve => require(['./foo.vue'], resolve)，页面打包成单独的js文件，按需加载
 * b. component: Foo，这样的（import Foo from './foo.vue';），打包到主js文件里面一起
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './app.vue';
import Home from './view/home.vue';
import User from './view/user.vue';

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: App,
            children: [
                { path: '/', redirect: '/home' },
                {
                    path: '/home',
                    meta: {
                        title: '首页'
                    },
                    component: Home
                },
                {
                    path: '/user',
                    meta: {
                        title: '我的'
                    },
                    component: User
                }
            ]
        }
    ]
});