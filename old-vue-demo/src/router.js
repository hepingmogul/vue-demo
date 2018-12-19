/**
 * 路由器使用的问题
 * 1、页面组件打包的两种方式
 * a. component: resolve => require(['./foo.vue'], resolve)，页面打包成单独的js文件，按需加载
 * b. component: Foo，这样的（import Foo from './foo.vue';），打包到主js文件里面一起
 */

import Vue from 'vue';
import Router from 'vue-router';

import App from './app.vue';
import Home from './view/home.vue';
import User from './view/user/user.vue';
import Register from './component/attendance/register.vue';

Vue.use(Router);

export default options => {
  let { redirect } = options || {};

  redirect = '/user';
  console.log('init router options:', { options });

  return new Router({
    routes: [
      {
        path: '/',
        component: App,
        children: [
          {
            path: '/',
            redirect: redirect || '/home'
          },
          {
            path: '/home',
            meta: {
              title: '页脚'
            },
            component: Home
          },
          {
            path: '/register',
            meta: {
              title: '页脚'
            },
            component: Register
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
};

