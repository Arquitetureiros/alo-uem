<template>
  <div
    id="main"
    class="row justify-content-center"
  >
    <div
      id="card"
      class="col-md-3 col-10 align-self-center text-white"
    >
      <div class="d-flex flex-column">
        <div class="d-flex flex-column p-4">
          <span class="h1 text-dark fw-light text-decoration-underline">
            Alô!UEM
          </span>
          <span class="h2 text-dark pt-2">
            Cadastrar
          </span>
        </div>
        <div
          id="form"
          class="d-flex flex-column col-12 gap-4 justify-content-center align-content-center p-4"
        >
          <span>
            Insira seu email da UEM para a validacao
          </span>
          <input
            v-model="email"
            class="form-control"
            type="text"
            placeholder="ra123456@uem.br"
          >
          <div class="col align-self-center">
            <button
              class="btn button"
              @click="validar"
            >
              VALIDAR
            </button>
          </div>
        </div>
      </div>
      <a href="../login">
        <h4 id="link-cadastrar">Voltar</h4>
      </a>
    </div>
  </div> 
</template>
<script>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useRouter } from 'vue-router';
import http from '@/services/http';

export default {
  name: "ValidarCadastro",
  components: {},
  setup(){
    const email = ref();
    const route = useRouter();

    async function validar(){
      if(!email.value){
        toast.error("Digite um email", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT
        })
        return;
      }

      const emailRequest = {
        email: email.value
      }

      await http.post('/validaremail', emailRequest)
      .then(() => {
          toast.success("Email validado com sucesso.", {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_RIGHT
          });
          
          setInterval(() => {
            route.push({ name: 'cadastro' , params: { email: email.value }});
          }, 3000);

        })
        .catch(() => {
          toast.error("Ouve um erro ao validar seu email.", {
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    }
    
    return {
      email,
      validar
    }
  }
}

</script>
<style scoped>
  #main {
    background-color: #003049;
    background-size: cover;
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
  #card {
    background-color: #D9D9D9;
    border-radius: 5px;
    height: 50vh;
  }
  #form {
    border-radius: 5px;
    height: 25vh;
    background-color: #003049;
  }
  .button {
    background-color: #D9D9D9;
    height: 2.6rem;
  }
  .button:hover{
    background-color: #003049;
    border-color: #D9D9D9;
  }
  #link-cadastrar{
    font-family: 'Red Hat Display', sans-serif;
    font-size: x-large;
    color: #003049;
    text-decoration: underline;
  }
  a {
    text-decoration: none;
  }
</style>