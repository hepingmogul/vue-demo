import Vue from 'vue';
import App from './app.vue';

import router from './router';

import './index.less';

console.log('start...');

/* 获取组件 */
import Components from './component';

/* 全局注册组件 */
Object.keys(Components).forEach(k => {
    Vue.component(k, Components[k]);
});

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    el: root,
    router,
    render: (h) => h(App)
});