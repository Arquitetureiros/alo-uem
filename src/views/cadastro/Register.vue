<template>
  <div id="main">
    <div class="d-flex justify-content-center">
      <div
        id="card"
        class="row col-md-3 col-10 justify-content-center"
      >
        <div class="col-md-4 col-4 mt-3">
          <span class="h1">
            Alô!UEM
          </span>
        </div>
        <div class="col-10">
          <div
            id="form"
            class="d-flex px-3"
          >
            <div class="d-flex flex-column align-items-center gap-4">
              <div class="col-5 pt-4 py-2">
                <span class="h2"> Cadastro </span>
              </div>
              <div class="col-11">
                <label
                  for="email"
                >
                  Email institucional
                </label>
                <input
                  id="email"
                  v-model="pessoa.email"
                  type="text"
                  class="form-control"
                >
              </div>
              <div class="row justify-content-between col-12">
                <div class="col-8">
                  <label
                    for="name"
                  >
                    Nome do usuário
                  </label>
                  <input
                    id="name"
                    v-model="pessoa.user"
                    type="text"
                    class="form-control"
                  >
                </div>
                <div class="col-4">
                  <label
                    for="ra"
                  >
                    RA
                  </label>
                  <input
                    id="ra"
                    v-model="pessoa.ra"
                    type="text"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="col-11">
                <label
                  for="password"
                >
                  Senha
                </label>
                <input
                  id="password"
                  v-model="pessoa.password"
                  type="password"
                  class="form-control"
                >
              </div>
              <div class="col-11">
                <label
                  for="confirmation"
                >
                  Confirmar senha
                </label>
                <input
                  id="confirmation"
                  v-model="pessoa.passwordC"
                  type="password"
                  class="form-control border"
                  :class="!passValid? 'border-1 border-danger' : ''"
                >
                <div
                  v-if="!passValid"
                  class="text-danger"
                >
                  Senhas devem ser iguais
                </div>
              </div>
              <div class="col-11 my-1">
                <input
                  v-model="terms"
                  class="form-check-input"
                  type="checkbox"
                >
                <span>
                  Aceito que li e concordo com os <a
                    style="color: white;"
                    href="#"
                  >termos de uso</a> e <a
                    style="color: white;"
                    href="#"
                  >politicas de privacidade</a> 
                </span>
              </div>
              <button
                id="button"
                type="button"
                class="btn col-6"
                @click="save"
              >
                <h4>CADASTRAR</h4>
              </button>
              <a href="/login">
                  <h4 id="link-cadastrar">Voltar</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch, reactive, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useRouter } from 'vue-router';
import http from '@/services/http.js'

export default {
  name: "TelaCadastro",
  components: {},
  setup(){
    const terms = ref(false);
    const passValid = ref(true);
    const route = useRouter();
    const pessoa = reactive({
      email: '',
      user: '',
      password: '',
      passwordC: '',
      ra: ''
    });

    async function save(){

      if(!passValid.value){
        toast.error("As senhas devem ser iguais", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT
        })
        return;
      }

      if(!pessoa.email || !pessoa.user || !pessoa.password || !pessoa.passwordC || !pessoa.ra){
        toast.error("Preencha todos os campos", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT
        })
        return;
      }

      if(!terms.value){
        toast.error("Aceite os termos de uso e politicas de privacidade", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT
        })
        return;
      }

      const user = {
        Email: pessoa.email,
        Senha: pessoa.password,
        RA: pessoa.ra,
        Nome: pessoa.user
      }

      await http.post('/usuario', user)
      .then(() => {
        
        toast.success("Cadsatro realizado com sucesso.", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT
        });
        
        setInterval(() => {
            window.location.replace('/login');
          }, 3000);
        
      })
      .catch(() => {
        toast.error("Ouve um erro ao realizar o cadastro.", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
    }

    watch(() => pessoa.passwordC, (p) => { 
      if(p != pessoa.password) {
        passValid.value = false;
      } else {
        passValid.value = true;
      }
    })

    onMounted(() => {
      pessoa.email = route.currentRoute.value.params.email;
    });

    return {
      pessoa,
      terms,
      save,
      passValid
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
    height: 100vh;
  }
  #form {
    color: white;
    border-radius: 5px;
    height: 74vh;
    background-color: #003049;
  }
  #button {
    background-color: #D9D9D9;
    height: 3rem;
  }
  #link-cadastrar{
    font-family: 'Red Hat Display', sans-serif;
    font-size: x-large;
    color: #D9D9D9;
    text-decoration: underline;
}
</style>