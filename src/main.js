// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import base from './assets/js/function';
import component from './assets/js/component';
import axios from 'axios';
import storage from 'good-storage';
import '../src/assets/js/flex';
import fastclick from 'fastclick';
import filters from './assets/js/filters';
axios.defaults.baseURL = process.env.API_ROOT;
axios.defaults.timeout = 5000;

Vue.prototype.$http = axios;
Vue.prototype.$storage = storage;
Vue.config.productionTip = false;
Vue.use(base);
Vue.use(component);
/**
 * 解决移动端点击事件延迟
 */
fastclick.attach(document.body);
/**
 * 过滤器
 */
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
