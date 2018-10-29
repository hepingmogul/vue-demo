import Vue from 'vue';
import App from './app.vue';

console.warn('start test...');

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
    el: root,
    render: (h) => h(App)
});