import Vue from 'vue';
import Router from 'vue-router';
// import Guard from '../services/middleware';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout'),
      children: [
        {
          path: '',
          name: 'landing-page',
          component: () => import('@/views/Landing'),
        },
        {
          path: 'dashboard',
          name: 'user-dashboard',
          component: () => import('@/views/Dashboard'),
          // beforeEnter: Guard.auth,
          props: true,
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/Login'),
    },
  ],
});
