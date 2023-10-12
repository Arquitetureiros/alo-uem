import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { 
    path: '/register',
    name: 'cadastro',
    component: import('../views/cadastro/Register.vue'),
  },
  { 
    path: '/register-validate', 
    name: 'validar-cadastro',
    component: import('../views/cadastro/RegisterValidate.vue'), 
  },
  {
    path: "/login",
    name: 'login',
    component: import('../views/Login.vue'),
  },
  {
    path: "/",
    // redirect: '/login',
    name: 'home',
    component: import('../views/Principal.vue'),
  },
  {
    path: "/avaliar-publicacao",
    name: "publicacao-mod",
    component: import('../views/moderador/AprovarPublicacao.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;