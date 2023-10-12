import { createRouter, createWebHistory } from "vue-router"

import Register from '../views/cadastro/Register.vue'
import RegisterValidade from '../views/cadastro/RegisterValidate.vue'
import Login from '../views/Login.vue'
import Principal from '../views/Principal.vue'
import CardPublicacao from '../components/CardPublicacao.vue';

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
    path: "/login",
    name: 'login',
    component: Login
  },
  {
    path: "/",
    // redirect: '/login',
    name: 'home',
    component: Principal, 
    children: [
      {
        path: '',
        name: 'card-publicacao',
        component: CardPublicacao
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;