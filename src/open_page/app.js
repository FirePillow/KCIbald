require('./style.css');

import Vue from 'vue';
import app from './app.vue';

// Have to initialize vue this way,
// since we're using single file synatx
new Vue({
    render: h => h(app),
}).$mount('#app');
