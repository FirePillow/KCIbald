//require('./style.css');
import Vue from 'vue';
import VueRouter from 'vue-router';
import open_page from '../components/open_page.vue';

Vue.use(VueRouter);

const routes = [
    { path: '', component: open_page }
//    { path: '/posts/r/:regionKey/p/:postKey', component: posts }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

// Have to initialize vue this way,
// since we're using single file syntax
new Vue({
    router,
    render: h => h(app),
}).$mount('#app');
