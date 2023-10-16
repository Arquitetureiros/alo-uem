<template>
  <div id="main" class="row align-content-center justify-content-center">
      <div class="col-6">
        <div v-if="publicacoes" v-for="(pub, index) in publicacoes" :key="index">
          <div v-if="active[index]"  id="card">
            <div class="col-12 p-4" style="height: 60vh">
              <Publicacao :idPublicacao="pub.IdPublicacao"/>
            </div>
            <div class="row col-12 justify-content-around">
              <div class="col-2 row flex-column justify-content-center">
                <div @click="reprovar(index)" id="circle" class="d-flex align-items-center justify-content-center bg-danger" role="button">
                  <i class="fa-solid fa-arrow-left fa-xl text-black"></i>
                </div>
                <span>Reprovar</span>
              </div>
              <div class="col-2 row flex-column justify-content-center">
                <div @click="iniciarAlteracao(index)" id="circle" class="d-flex align-items-center justify-content-center bg-warning" role="button">
                  <i class="fa-solid fa-exclamation fa-xl text-black"></i>
                </div>
                <span>Alteracao</span>
              </div>
              <div class="col-2 row flex-column justify-content-center">
                <div @click="aprovar(index)" id="circle" class="d-flex align-items-center justify-content-center bg-success" role="button">
                  <i class="fa-solid fa-arrow-right fa-xl text-black"></i>
                </div>
                <span>Aprovar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        <vue-final-modal v-model="showModal">
          <div class="row justify-content-center">
            <div id="modal" class="bg-white col-3 p-3 g-2 mt-5">
              <div>
                <span class="h4">
                  Solicitar alteração
                </span>
                <textarea v-model="alteracao.alteracao" class="form-control" type="textarea"></textarea>
                <div class="row justify-content-around pt-4">
                  <div class="col-3">
                    <button class="btn btn-danger" @click="cancelarAlteracao()">Cancelar</button>
                  </div>
                  <div class="col-3">
                    <button class="btn btn-success" @click="alterar()">Enviar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </vue-final-modal>
      </div>
</template>
<script>
import Publicacao from '@/views/moderador/Publicacao.vue'
import { ref, onMounted, reactive } from 'vue'
import  http  from '@/services/http.js'

export default {
    name: "AprovarPublicacao",
    components: {
      Publicacao
    },
    setup() {
      const publicacoes = ref();
      const active = ref([true]);
      const showModal = ref(false);
      const alteracao = reactive({
        idPublicacao: null,
        status: 6,
        alteracao: ''
      });
      
      async function getPublicacoes(){
        await http.get('revisao/publicacao')
        .then((response) => { 
          publicacoes.value = response.data.data
          publicacoes.value.forEach((pub, index) => {
            if(index > 0) {
              active.value.push(false)
            }
          });
        });
      }

      async function aprovar(index) {
        await http.post('revisao/publicacao', {
          idPublicacao: publicacoes.value[index].IdPublicacao,
          status: 4
        }).then(() => {
          active.value[index] = false
          if(index < publicacoes.value.length - 1) {
            active.value[index + 1] = true
          }
        })
        
      }
      async function reprovar(index) {
        await http.post('revisao/publicacao', {
          idPublicacao: publicacoes.value[index].IdPublicacao,
          status: 5
        }).then(() => {
          active.value[index] = false
          if(index < publicacoes.value.length - 1) {
            active.value[index + 1] = true
          }
        })
        active.value[index] = false
        if(index < publicacoes.value.length - 1) {
          active.value[index + 1] = true
        }
      }
      async function alterar() {
        await http.post('revisao/publicacao', alteracao)
        .then(() => {
          cancelarAlteracao()
          getPublicacoes()
        });
      }

      function cancelarAlteracao(){
        alteracao.value = {
          idPublicacao: null,
          status: 6,
          alteracao: ''
        }
        showModal.value = false
      }

      function iniciarAlteracao(index){
        alteracao.idPublicacao = publicacoes.value[index].IdPublicacao
        showModal.value = true
      }

      onMounted(() => {
        getPublicacoes()
      })

      return {
        aprovar,
        reprovar,
        alterar,
        publicacoes,
        active,
        showModal,
        cancelarAlteracao,
        iniciarAlteracao,
        alteracao
      }
    }
}
</script>
<style scoped>
  #main {
    background-color: #003049;
    overflow: hidden;
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
  #card {
    background-color: #D9D9D9;
    border-radius: 5px;
    height: 70vh;
  }
  #circle {
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    border: 4px solid black;
  }
  #modal {
    border-radius: 8px;
  }
</style>