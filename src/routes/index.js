import { createRouter, createWebHistory } from "vue-router"
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

const routes = [
  { 
    path: '/register',
    name: 'cadastro',
    component: Register 
  },
  {
    path: "/",
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;