/* 这是一个入口文件 */
import Vue from 'vue'
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';
require('normalize.css');
import { createRouter } from './router';
import createStore from './store/store';
import App from './App';
Vue.use(Vuex);

const store = createStore();
const router = createRouter();

sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
