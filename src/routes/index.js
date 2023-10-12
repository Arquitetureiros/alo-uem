import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { 
    path: '/register/:email',
    name: 'cadastro',
    component: import('../views/cadastro/Register.vue') 
  },
  { 
    path: '/register-validate',
    name: 'validar-cadastro',
    component: import('../views/cadastro/RegisterValidate.vue') 
  },
  {
    path: "/login",
    name: 'login',
    component: import('../views/Login.vue')
  },
  {
    path: "/",
    // redirect: '/login',
    name: 'home',
    component: import('../views/Principal.vue'), 
    children: [
      {
        path: '',
        name: 'card-publicacao',
        component: import('../components/CardPublicacao.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;