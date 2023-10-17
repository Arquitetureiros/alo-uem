<template>
    <div class="main">
        <div class="d-flex justify-content-center col-md-3 campos-login">
            <div class="row col-10 row flex-column ">
                <div style="margin-top: 40%;">
                    <h1 class="text-decoration-underline font-title">Alô!UEM</h1>
                    <div id="form" class="row justify-content-center">
                        <div class="row justify-content-center mt-5">
                            <div class="col-11">
                                <label for="email" class="font-text">
                                    Email Institucional
                                </label>
                                <input placeholder="ra@uem.br" v-model="dados.email" type="text" class="form-control">
                            </div>
                            <div class="col-11">
                                <label for="senha" class="font-text">
                                    Senha
                                </label>
                                <input v-model="dados.senha" type="password" class="form-control">
                            </div>
                            <button type="button" class="btn col-6 botao-entrar" :onclick="login">
                                <h4 class="mt-1 font-title">ENTRAR</h4>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mt-4">
                        <a id="link-cadastrar" href="/register-validate">Cadastrar-se</a>
                    </div>
                </div>
            </div>

        </div>
        <div class="col">
        </div>
    </div>
</template>

<script setup>
import  http  from '@/services/http.js'
import { onBeforeMount, reactive } from 'vue'
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';

const dados = reactive({
    email: '',
    senha: ''
})

onBeforeMount(()=> {
    localStorage.clear();
})

const route = useRouter();

async function login() {
    await http.post('login', dados)
    .then((response) => {
        toast.success("Login realizado com sucesso.", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT
        });

        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
        localStorage.setItem('tipo', JSON.stringify(response.data.usuario.tipo));

        route.push({name: 'home'})
    })
    .catch(() => {
        toast.error("Erro ao efetuar login.", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT
        });
    })

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Red+Hat+Display:wght@600&display=swap');
.main {
    background-color: #003049;
    background-size: cover;
    margin: 0px;
}

.campos-login {
    background-color: #D9D9D9;
    background-size: cover;
    height: 100vh;
}

#form {
    color: white;
    border-radius: 5px;
    height: 320px;
    background-color: #003049;
}

#link-cadastrar{
    font-family: 'Red Hat Display', sans-serif;
    font-size: x-large;
    color: #585757;
}

.font-text{
    font-family: 'Red Hat Display', sans-serif;
    font-size: 20px;
}

.font-title {
    font-family: 'Red Hat Display', sans-serif;
}

.botao-entrar{
    background-color: #D9D9D9;
    height: 3rem;
}

.botao-entrar:hover{
    background-color: #D9D9D9;
}
</style>