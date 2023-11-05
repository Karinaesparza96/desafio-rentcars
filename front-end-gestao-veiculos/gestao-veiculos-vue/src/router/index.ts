import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'veiculos',
      component: () => import('../views/Veiculo.vue')
    },
  ]
})

export default router
