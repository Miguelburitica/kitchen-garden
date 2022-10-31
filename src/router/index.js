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
    name: 'cultivos',
    component: GeneralSection
  },
  {
    path: '/fertilizantes/:slug?',
    name: 'fertilizantes',
    component: GeneralSection
  },
  {
    path: '/control-manejo/:slug?',
    name: 'control-manejo',
    component: GeneralSection
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
