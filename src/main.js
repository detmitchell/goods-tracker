import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import AppComponent from './app/index.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

export var router = new VueRouter();

const vm = new Vue({
    el: '#app',
    components: {
        'app': AppComponent
    },
    render: h => h('app')
})