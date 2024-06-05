import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import SignView from '@/views/SignView.vue'

const routes = [
  {
    path: '/',
    redirect: './sign'
  },
  {
    path: '/sign',
    name: 'Sign',
    component: SignView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;