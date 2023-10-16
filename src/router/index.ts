import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/reviews', 
      name: 'reviews', 
      component: ()=> import('../views/reviewsView.vue')
    },
  ]
})

export default router
