<template>
  <div class="card-publicacao">
      <div class="publicacoes" style="box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);">
          <div class="row">
              <div class="col-9 d-flex justify-content-start">
                  <p class="titulo-pub">
                      <span > {{ publicacao.Titulo }}</span>
                  </p>
              </div>
              <div class="col-3 d-flex justify-content-end">
                 <i class="bi bi-check-circle"></i> {{ Funcoes.statusPublicacao(publicacao.fk_IdEstado) }}
              </div>
          </div>
          <div>
              <p class="localizao-pub">
                  <span><i class="bi bi-geo-alt"></i>{{  publicacao.Endereco }}</span>
              </p>
          </div>
          <div class=" row col-11">
                <!-- quando tiver 1 imagem -->
                <div v-if="fotos.length == 1" class="col-md-7 d-flex justify-content-center file-imagens">
                    <div class="teste-borda" style="max-width: 100%; max-height: 98%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                        <img :src="fotos[0].nome" alt="" style="height: 100%; width: 100%; object-fit: cover; border-radius: 9px;">
                    </div>
                </div>
                <!-- quando tiver 2 imagens -->
                <div v-if="fotos.length == 2" class="col-8 d-flex justify-content-center file-imagens">
                    <div class="row " style="max-width: 100%;">
                        <div class="col-5 teste-borda" style="max-width: 100%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                            <img :src="fotos[0].nome" alt="" style="height: 100%; width: 100%; object-fit: cover; border-radius: 9px;">
                        </div>
                        <div class="col-5 teste-borda" style="max-width: 100%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                            <img :src="fotos[1].nome" alt="" style="height: 100%; width: 100%; object-fit: cover; border-radius: 9px;">
                        </div>
                    </div>
                </div>

                <!-- quando eu tiver 3 imagens -->
                <div v-if="fotos.length == 3" class="col-8 d-flex justify-content-center file-imagens">
                    <div class="col-5 teste-borda" style="max-width: 100%;">
                        <img :src="fotos[0].nome" alt="" style="height: 100%; width: 100%; object-fit: cover; border-radius: 9px;">
                    </div>
                    <div class="row col-5 mx-0">
                        <div class="row teste-borda mx-0" style="max-width: 100%;">
                            <img :src="fotos[1].nome" alt="" style="height: 100%; width: 100%; object-fit: fill; border-radius: 9px;">
                        </div>
                        <div class="row teste-borda  mx-0 " style="max-width: 100%;">
                            <img :src="fotos[2].nome" alt="" style="height: 100%; width: 100%; object-fit: fill; border-radius: 9px; margin-bottom: -4px;">
                        </div>
                    </div>
                </div>


                <div class="col-4 ">
                    <label for="descricao" class="font-text" style="color: rgb(0, 0, 0); font-family: 
                                    'Red Hat Display', sans-serif;
                                    margin-left: 40%;">
                        <i class="bi bi-body-text"></i> Descrição
                    </label>
                    <textarea readonly
                     v-model="publicacao.descricao" 
                     class="form-control mb-3 text-area" 
                    style="min-height: 300px; max-height:300px ; margin-left: 40%; font-size: 13px;">
                        
                    </textarea>
                </div>
            </div>
          <div class="row" style="margin-top: 10px;">
              <div class="col-4" >
                  <p style="font-family: 'Red Hat Display', sans-serif;">
                      <i class="btn bi bi-caret-up-square botao-positivo"></i>
                      {{ upVote }} votos positivos
                  </p>
              </div>
              <div class="col-4">
                  <p style="font-family: 'Red Hat Display', sans-serif;">
                      <i class=" btn bi bi-caret-down-square botao-negativo"></i>
                      {{ downVote }} votos negativos
                  </p>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import * as Funcoes from '../utils/Funcoes'
import http from '../services/http.js'

const fotos = ref([]);

const props = defineProps({
  publicacao: Object,

})


onBeforeMount(() => {
    carregarPublicacao(props.publicacao)
});

function carregarPublicacao(publicacao) {
  http.get(`foto/publicacao/${publicacao.IdPublicacao}`)
          .then(response => {
            fotos.value = response.data
          })
    // if (!Funcoes.campoVazio(publicacao)) {
    //     publi.value = (JSON.parse(JSON.stringify(props.publicacao)));
    //     fotos.value = (JSON.parse(JSON.stringify(props.publicacao.fotos)));
    //     if(fotos.value.length > 0){
    //         formatarImagensBase64()
    //     }
    // }
}

const upVote = ref(props.publicacao.upVote)
const downVote = ref(props.publicacao.downVote)


</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Red+Hat+Display:wght@600&display=swap');
@import "bootstrap-icons/font/bootstrap-icons.css";

.publicacoes {
  background-color: #669BBC;
  border-radius: 5px;
  margin-top: 20px;
  width: 95%;
  padding: 10px;
  padding-left: 15px;
  padding-right: 12px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;
  /* margin-left: 2.5%; */
}

.card-publicacao {
  border-radius: 5px;
  width: 100%;
  margin-left: 3%;
}

.comentarios {
  display: flex;
  justify-items: center;
  background-color: #8EC3E4;
  border-radius: 0px 0px 5px 5px;
  margin-left: 7%;
  margin-top: -4%;
  margin-bottom: 10px;
  width: 80%;
  max-width: 633.39px;
}

.text-area {
  background-color: #f8e2cf5b;
  border: 1px none #e2e2e2;
}

.teste-borda {
  border-radius: 9px;
  border: 1px solid rgba(49, 49, 49, 0.418);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-right: 2px;
}

.botao-positivo {
  color: #00600A;
  background-color: #CCDFCC;
  margin: 0px;
  padding: 0px;
  margin-right: 5px;
}

.botao-positivo:hover {
  color: #00600A;
}

.botao-negativo {
  color: #901A1A;
  background-color: #DFCCCC;
  margin: 0px;
  padding: 0px;
  margin-right: 5px;
}

.botao-negativo:hover {
  color: #901A1A;
}

.autor {
  font-family: 'Red Hat Display', sans-serif;

}

.comment {
  font-family: 'Red Hat Display', sans-serif;
  font-size: small;
}

.titulo-pub{
  font-family: 'Red Hat Display', sans-serif;
  font-size: xx-large;
}

.localizao-pub{
  font-family: 'Red Hat Display', sans-serif;
  font-size: x-large;
}
</style>
