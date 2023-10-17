<template>
  <div class="card-publicacao">
      <div class="comentarios row " v-for="(comentario, index) in comentarios" :key="index" style="box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);">
        <!-- <div class="row">
              <div class="col-9 d-flex justify-content-start">
                  <p class="titulo-pub">
                      <span > {{ publicacao.Titulo }}</span>
                  </p>
              </div>
        </div> -->
        <div class="col-md-12">
          <div class="row">
            <p class="">
                <span class="autor">{{ comentario.NomeUsuario }}: </span>
                <span class="comment">{{ comentario.Descricao }}</span>
            </p>
          </div>
        </div>
      </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import http from '../services/http.js'


const props = defineProps({
  idUsuario: Number,
})

onBeforeMount(() => {
   carregarComentarios()
});



const comentarios = ref([])
const publicacao = ref(props.publicacao)

async function carregarComentarios() {
    await http.get(`comentario/usuario/${props.idUsuario}`)
        .then(response => {
            comentarios.value = response.data
            console.log(comentarios.value)
        })
        .catch(error => {
            console.error("Erro ao carregar comentarios: " + error);
        })
    
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
