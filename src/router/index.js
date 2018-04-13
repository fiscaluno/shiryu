import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home'),
      children: [
        {
          path: 'dashboard',
          name: 'user-dashboard',
          component: () => import('@/views/Dashboard'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/Login'),
    },
  ],
});
