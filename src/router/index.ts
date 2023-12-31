import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'main', 
      component: ()=> import('../views/mainPage.vue')
    }
    ,
    { 
      path: '/reviews', 
      name: 'reviews', 
      component: ()=> import('../views/reviewsView.vue')
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: ()=> import('../views/NotFoundPage.vue') 
    }, 
  ]
})

export default router
