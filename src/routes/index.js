import { createRouter, createWebHistory } from "vue-router"
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Principal from '../views/Principal.vue'
import Perfil from '../views/Perfil.vue'

const routes = [
  { 
    path: '/register',
    name: 'cadastro',
    component: Register 
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  },
  {
    path: "/perfil",
    name: 'perfil',
    component: Perfil
  },
  {
    path: "/",
    // redirect: '/login',
    name: 'home',
    component: Principal
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;