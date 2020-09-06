import Vue from 'vue';
import app from './App.vue';
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';

import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
new Vue({
    el: '#app',
    data:{},
    render: c => c(app),
    router
})

