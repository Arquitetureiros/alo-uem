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
    path: "/mod/publicacoes",
    name: 'modPublicacoes',
    component: import('../views/moderador/AprovarPublicacao.vue')
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
      },
      {
        path: '',
        name: 'alerta-termos',
        component: import('../components/AlertaTermosUso.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  
  const token = localStorage.getItem('token');
  if(!token && to.name != 'login' && to.name !='validar-cadastro' && to.name != 'cadastro'){
    return { name: 'login' }
  }

  const tipo = localStorage.getItem('tipo');

  if(tipo == '"moderador"' && to.name != 'modPublicacoes' && to.name != 'login'){
    return { name: 'modPublicacoes' }
  }

})

export default router;