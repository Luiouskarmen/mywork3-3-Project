import { createRouter, createWebHistory } from 'vue-router'
import IntroductionPage from '../views/mainu/index.vue'
import order from '../views/mainu/order.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'face',
      component: () => import('../pages/face.vue'),
    },
    {
      path: '/loginu',
      name: 'loginu',
      component: () => import('../pages/loginu.vue'),
    },
    {
      path: '/logins',
      name: 'logins',
      component: () => import('../pages/logins.vue'),
    },
    {
      path: '/our',
      name: 'our',
      component: () => import('../pages/our.vue'),
    },
    {
      path: '/regs',
      name: 'regs',
      component: () => import('../pages/regs.vue'),
    },
    {
      path: '/regu',
      name: 'regu',
      component: () => import('../pages/regu.vue'),
    },
    {
      path: '/regm',
      name: 'regm',
      component: () => import('../pages/regm.vue'),
    },
    {
      path: '/worku',
      name: 'worku',
      component: () => import('../pages/worku.vue'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: IntroductionPage,
        },
        {
          path: 'indexu',
          name: 'indexu',
          component: () => import('../views/mainu/indexu.vue'),
        },
        {
          path: 'order',
          name: 'orderu',
          component: order,
        },
        {
          path: 'car',
          name: 'caru',
          component: () => import('../views/mainu/car.vue'),
        },
      ],
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../pages/works.vue'),
      children: [
        {
          path: 'index',
          name: 'indexs',
          component: () => import('../views/mains/index.vue'),
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/mains/shop.vue'),
        },
        {
          path: 'order',
          name: 'orders',
          component: () => import('../views/mains/order.vue'),
        },
      ],
    },
  ],
})

export default router
