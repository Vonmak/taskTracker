import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About2 from '../views/About2'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About2,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router