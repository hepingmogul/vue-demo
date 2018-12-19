const rem = require('../lib/js/rem');

import Vue from 'vue';
import Router from './router';
import App from './app.vue';
import './assets/styles/styles.styl';

import { login } from './ajax';


const cfg = require('../config/config');

console.log('start test...');

/* 获取组件 */
import Components from './component';

/* 全局注册组件 */
Object.keys(Components).forEach(k => {
    Vue.component(k, Components[k]);
});

/* 初始化Vue */
new Vue({
    el: '#app',
    router: Router(),
    render: (h) => {
        h(App);
        login({
            sid: 4
        });
    }
});