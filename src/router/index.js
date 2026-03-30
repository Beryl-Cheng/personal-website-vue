import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: () => import('../views/HomeView.vue') },
      { path: 'about', component: () => import('../views/AboutView.vue') },
      { path: 'portfolio', component: () => import('../views/PortfolioView.vue') },
      { path: 'blog', component: () => import('../views/BlogView.vue') },
      { path: 'interests', component: () => import('../views/InterestsView.vue') },
      { path: 'contact', component: () => import('../views/ContactView.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router