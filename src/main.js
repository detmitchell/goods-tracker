import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import AppComponent from './app/index.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

export var router = new VueRouter();


var sharedData = {
    productData: null
}

const vm = new Vue({
    el: '#app',
    components: {
        'app': AppComponent
    },
    data: {
        productData: null
    },
    render: h => h('app')
})