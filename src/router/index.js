import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',component: () => import('../views/AboutMe.vue')
    },
    {
      path: '/MySkill',
      name: 'MySkill',component: () => import('../views/MySkill.vue')
    },
    {
      path: '/WorkExperience',
      name: 'WorkExperience',component: () => import('../views/WorkExperience.vue')
    },    
    {
      path: '/Project',
      name: 'Project',component: () => import('../views/Project.vue')
    },
  ]
})

export default router
