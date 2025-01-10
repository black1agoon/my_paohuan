import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/paohuan',
      name: 'paohuan',
      component: () => import('@/views/paohuan.vue'),
    },
    {
      path: '/watu',
      name: 'watu',
      component: () => import('@/views/Watu.vue')
    },
  ],
})

export default router
