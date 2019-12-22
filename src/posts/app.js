require('./style.css');

import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './app.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/r/:regionKey/p/:postKey', component: app }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    router,
    render: h => h(app),
}).$mount('#app');
