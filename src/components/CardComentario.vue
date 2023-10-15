<template>
  <div class="card-publicacao">
      <div v-if="comentarios.length > 0" class="comentarios row " style="box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);">
          <div class="col-md-12">
              <div class="bloco-menor row">
                  <div v-if="!verMaisVisible">
                      <p>
                          <span class="autor">{{ comentarios[0].usuario }}: </span>
                          <span class="comment">{{ comentarios[0].mensagem }}</span>
                      </p>
                  </div>
                  <div v-else>
                      <div v-for="(comentario, index) in comentarios" :key="index" class="row">
                          <p class="">
                              <span class="autor">{{ comentario.usuario }}: </span>
                              <span class="comment">{{ comentario.mensagem }}</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  publicacao: Object,
})

const tituloPublicacao = ref('Título Publicação')
const localizacaoPublicacao = ref('Fruta que fariu')
const descricaoPubli = ref("")
const comentarios = ref(props.publicacao.comentarios)
const verMaisVisible = ref(false)
const comentarioVisible = ref(false)



function verMaisComentario() {
  verMaisVisible.value = !verMaisVisible.value
}
// comentarios.value = [
//     {
//         autorComentario: "Gabriel Valentim",
//         comment: "BABBABABBABABBABAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
//     },
//     {
//         autorComentario: "Danilo",
//         comment: "loren Ipsum"
//     },
//     {
//         autorComentario: "Giovanni GUILHOTINAS",
//         comment: "BABBABABBABABBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
//     },
//     {
//         autorComentario: "leozin_muito_forte",
//         comment: "BABBABABBABABBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABBABABBABABBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABBABABBABABBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABBABABBABABBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABBABABBABABBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABBABABBABABBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
//     },
// 
// ]

const upVote = ref(props.publicacao.upVote)
const votoPositivo = ref(0)
function aumentarVotacao() {
  if (votoPositivo.value === 0) {
      votoPositivo.value = 1
      upVote.value += 1
  } else {
      votoPositivo.value = 0
      upVote.value -= 1
  }
}
const downVote = ref(props.publicacao.downVote)
const votoNegativo = ref(0)
function diminuirVotacao() {
  if (votoNegativo.value === 0) {
      votoNegativo.value = 1
      downVote.value += 1
  } else {
      votoNegativo.value = 0
      downVote.value -= 1
  }
}
const comentarioPublicao = ref('')
function enviarComentario(idPublicacao) {
  console.log(idPublicacao + " - " + comentarioPublicao.value);
  comentarioPublicao.value = ''
  comentarioVisible.value = false  
}
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
  background-color: #8EC3E4;
  border-radius: 5px;
  margin-top: 20px;
  width: 95%;
  padding: 10px;
  padding-left: 15px;
  padding-right: 12px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;
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
