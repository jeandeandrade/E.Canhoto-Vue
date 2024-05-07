import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import SignView from '@/views/SignView.vue'
import NewUserView from '@/views/NewUserView.vue'
import TableView from '@/views/TableView.vue'
import NewCanhotoView from '@/views/NewCanhotoView.vue'
import DetailView from '@/views/DetailView.vue'

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
  {
    path: '/newUser',
    name: 'New User',
    component: NewUserView
  },
  {
    path: '/table',
    name: 'Table',
    component: TableView
  },
  {
    path: '/detail',
    name: 'Details',
    component: DetailView
  },
  {
    path: '/newCanhoto',
    name: 'NewCanhoto',
    component: NewCanhotoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router