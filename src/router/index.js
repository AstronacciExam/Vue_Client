import { createRouter, createWebHistory } from 'vue-router'

import LoginRegister from '@/views/LoginRegister.vue'
import HomePage from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },

    {
      path: '/login',
      name: 'LoginRegister',
      component: LoginRegister,
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    },
  ],
})

export default router
