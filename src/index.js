/**
 * Created by xiajun on 2017/4/5.
 */
import Vue from 'Vue';
import App from './app.vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';


import './style/reset.scss';

import Router from 'vue-router';
import Store from './store'
import Vuex from 'vuex';
import storage from  './shared/services/storageService.js';
import routes from './router';
import VueForm from 'vue-form';
import 'babel-polyfill';

Vue.config.debug = true;

Vue.use(Mint);
Vue.use(Router);
Vue.use(Vuex);
Vue.use(VueForm);


const router = new Router({
    routes
});

const store = new Vuex.Store(Store);

router.beforeEach((to, from, next) => {
    var user = storage.get('user');
    store.state.isLogin = false;
    store.state.path = to.path;
    // if(to.path == '/login'){
    //     if(user){
    //         next({ path: '/map' });
    //     }else{
    //         store.state.isLogin = true;
    //     }
    // }else{
    //     if (!user) {
    //         next({ path: '/login' });
    //         store.state.isLogin = true;
    //     }
    // }
    next();
});

export  default new Vue({
    el: '#app',
    template: '<App/>',
    router,
    store,
    render: h => h(App)
}).$mount('#app');