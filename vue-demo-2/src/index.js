import Vue from 'vue';
import App from './app.vue';

import router from './router';

console.warn('start test...');

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
    el: root,
    router,
    render: (h) => h(App)
});