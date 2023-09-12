import { createRouter, createWebHistory } from "vue-router"
import Register from '../views/Register.vue'

const routes = [
  { 
    path: '/register',
    name: 'cadastro',
    component: Register 
  },
  {
    path: "/",
    redirect: "/home",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;