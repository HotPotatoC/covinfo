import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: '404 Not Found',
      component: () => import('../views/Error/NotFound.vue')
    },
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'Home Page',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/countries',
          name: 'Countries',
          component: () => import('../views/Countries.vue'),
        },
        {
          path: '/:country',
          name: 'Country Info',
          props: true,
          component: () => import('../views/Country.vue'),
        }
      ]
    },
  ]
})

export default router
