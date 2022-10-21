import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GeneralSection from '../views/GeneralSection.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cultivos/:slug?',
    name: 'crops',
    component: GeneralSection
  },
  {
    path: '/fertilizantes/:slug?',
    name: 'fertilizers',
    component: GeneralSection
  },
  {
    path: '/control-manejo/:slug?',
    name: 'controls',
    component: GeneralSection
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
