<template>
  <div class="main">
      <ul class="nav justify-content-end nav-bar ">
          <li class="nav-item ">
              <div class="">
                  <a 
                  class="nav-link active me-4 link-perfil" 
                  aria-current="page" 
                  href="#">
                      <i class="bi bi-person"></i> Perfil
                  </a>
              </div>
          </li>
      </ul>
      <div class="d-flex">      
        <div class="card row col-md-12 col-10 ">
              <div class="perfil row">

                <div class="col-2">
                  <i class="bi bi-person-circle"></i>
                </div>

                <div class="dados col">

                  <div class="col-md-10 col-6">
                    <label for="title" class="font-text" 
                    style="color: black; font-family: 'Red Hat Display', sans-serif;">
                    Nome de Usuário:
                    </label>
                    <input  
                    v-model="nome" 
                    type="text" 
                    class="form-control w-65">
                  </div>

                  <div class="col-md-10 col-6">
                    <label for="title" class="font-text" 
                    style="color: black; font-family: 'Red Hat Display', sans-serif;">
                    Email educacional:
                    </label>
                    <input  
                    v-model="email" 
                    type="text" 
                    class="form-control w-65">
                  </div>
                </div>     
              </div>

              <div class="row">

                <div class="publi">
                  <label for="title" class="font-text" 
                  style="color: black; font-family: 'Red Hat Display', sans-serif; background-color: white; width: 100%;">
                  
                  Publicações feitas:
                  </label>
                  <div class="d-flex flex-column mb-4">
                    <CardPublicacaoPerfil
                        v-for="(publicacao, index) in publicacoes"
                        :key="index"
                        :publicacao="publicacao"
                        />
                  </div>


                </div>

                <div class="coment">
                  <label for="title" class="font-text" 
                  style="color: black; font-family: 'Red Hat Display', sans-serif; background-color: white; width: 100%;">
                  Comentarios feitos:
                  </label>
                  <div class="d-flex flex-column mb-4">
                    <CardComentario
                        v-for="(publicacao, index) in publicacoes"
                        :key="index"
                        :publicacao="publicacao"
                        />
                  </div>
                  
                </div>
              </div>

            </div>
      </div>
  </div>
</template>
<script setup>
import CardPublicacaoPerfil from '../components/CardPublicacaoperfil.vue';
import CardComentario from '../components/CardComentario.vue';
import { ref, onBeforeMount} from 'vue';

const publicacoes = ref([])

onBeforeMount(()=> {
  carregarPublicacoes()
  })

    function carregarPublicacoes() {
      publicacoes.value = [
      {
        idPublicacao: 1,
        tituloPublicacao: 'Título 1',
        localizacaoPublicacao: 'Localização 1',
        descricaoPubli: 'Descrição 1',
        upVote: 10,
        downVote: 5,
        comentarios:[
            {
            comentarioId: 1,
            usuarioId: 1,
            usuario: "Leo",
            mensagem: "Nada"
            },
            {
            comentarioId: 2,
            usuarioId: 2,
            usuario: "Giovanni",
            mensagem: "loren Ipsum"
            },

        ]
      },
      {
        idPublicacao: 2,
        tituloPublicacao: 'Título 2',
        localizacaoPublicacao: 'Localização 2',
        descricaoPubli: 'Descrição 2',
        upVote: 7,
        downVote: 2,
        comentarios:[]
      },
    ]
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Red+Hat+Display:wght@600&display=swap');
@import "bootstrap-icons/font/bootstrap-icons.css";
.main {
  background-color: #003049;
  background-size: cover;
  margin: 0px;
}
.card {
  background-color: #003049;
  border-radius: 0px 0px 5px 5px;
  height: 96vh;
}
.nav-bar {
  background-color: #072231;
  height: 4vh;
}
.bi-person-circle{
  font-size: 80px;
}

.link-perfil{
  display: flex;
  color: bisque;

}

.perfil.row{
  background-color: #F8E2CF;
  border-radius: 0px 0px 5px 5px;
  max-width: 650px;
  max-height: 550px;
  padding: 24px;
  margin-top: 44px;
  margin-left: 44px;
}

.publi{
  overflow-y: scroll;
  background-color: #F8E2CF;
  border-radius: 0px 0px 5px 5px;
  width: 650px;
  height: 440px;
  margin-top: 44px;
  margin-left: 44px;
}
.file-imagens{
    display: flex;
    position: relative;
    border: 2px none #e2e2e2;
    transition: 0.3s;
    margin-top: 24px;
    padding: 0;
    border-radius: 5px;
    background-color: var(--bs-body-bg);
    width: 486px;
    min-height: 300px;
    justify-content: center;
    
}
.coment{
  overflow-y: scroll;
  background-color: #F8E2CF;
  border-radius: 0px 0px 5px 5px;
  width: 650px;
  height: 440px;
  margin-top: 44px;
  margin-left: 44px;
}
.dados {
  margin-left: 44px;
}

.create-pub{
  background-color: #303030;
  border-radius: 0px 0px 5px 5px;
  margin-top: -0.1rem !important;
  width: 95%;
  margin-left: 2.5%;
}

.file-imagens{
  display: flex;
  position: relative;
  border: 2px none #e2e2e2;
  transition: 0.3s;
  margin-top: 24px;
  padding: 0;
  border-radius: 5px;
  background-color: var(--bs-body-bg);
  width: 486px;
  min-height: 300px;
  justify-content: center;
  
}

.btn-custom {
background-color: #B0B0B0; 
color: #000000; 
border-radius: 15px;
font-family: 'Red Hat Display', sans-serif;
}

.btn-custom:hover {
background-color: #303030; 
color: #ffffff; 
border-radius: 15px;
border: 1px none #e2e2e2;
}

.text-file{
  margin-top: 4px;
  font-size: 13px;
  font-family: 'Red Hat Display', sans-serif;
  color: #B0B0B0;
}

</style>