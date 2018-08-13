import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/index',
      name: 'HelloWorld',
      component: () => import('@/views/HelloWorld')
    },
    {
      path: '/info',
      name: '信息列表',
      component: () => import('@/views/Info/index')
    }
  ]
});
