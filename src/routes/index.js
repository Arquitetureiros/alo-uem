import { createRouter, createWebHistory } from "vue-router"
import Register from '../views/cadastro/Register.vue'
import RegisterValidade from '../views/cadastro/RegisterValidate.vue'

const routes = [
  { 
    path: '/register',
    name: 'cadastro',
    component: Register 
  },
  { 
    path: '/register-validate',
    name: 'validar-cadastro',
    component: RegisterValidade 
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