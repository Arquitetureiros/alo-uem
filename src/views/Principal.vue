<template>
    <div class="main ">
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
        <div class="d-flex justify-content-center" >
            <div class="card d-flex flex-column align-items-center col-md-5 col-10 ">
                <div class="row d-flex create-pub"  style="box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);">
                    <h1 style="color: white;">CRIAR UMA PUBLICAÇÃO</h1>
                    <div class=" col-11 my-2">
                        <label for="title" class="font-text" 
                        style="color: white; font-family: 'Red Hat Display', sans-serif;">
                            Escreva um título para publicação
                        </label>
                        <input  
                        v-model="title" 
                        type="text" 
                        class="form-control w-75">
                    </div>
                    <div class=" col-11 my-2">
                        <label for="title" class="font-text" 
                        style="color: white; font-family: 'Red Hat Display', sans-serif;">
                            Adicionar localização
                        </label>
                        <input
                        v-model="localizacao" 
                        type="text" 
                        class="form-control w-75">
                    </div>
                    <div class=" row col-11">
                        
                        <div class="col-8">
                            <div class="file-imagens">
                                <div class="mt-5 text-center">
                                    <i class="bi bi-file-earmark-image-fill d-block" style="font-size: 50px;"></i>
                                <label for="fileInput" class="btn btn-custom">
                                    <i class="bi bi-upload pe-2"></i>Enviar Arquivos
                                    <input
                                    id="fileInput"
                                    class="file-upload-contain"
                                    type="file"
                                    accept=".jpg,.gif,.png"
                                    multiple
                                    style="display: none; border-radius:50px"
                                    @change="handleFileUpload"
                                    >
                                </label>
                                
                                <h4 class="text-file">Selecionar até 3 imagens<br> para publicação</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 ">
                            <label for="descricao" class="font-text " 
                                style="color: white; font-family: 
                                'Red Hat Display', sans-serif;
                                margin-left: 40%;">
                                <i class="bi bi-body-text"></i>  Descrição
                            </label>
                            <textarea 
                            v-model="descricao" 
                            class="form-control mb-3" placeholder="Escreva uma pequena descrição sobre o ocorrido"
                            style="min-height: 300px; max-height:300px ; margin-left: 40%;">
                            </textarea>
                        </div>
                    </div>

                    <div class="row col-11">
                        <div class="d-flex justify-content-end ms-5 mb-3 mt-n6">
                            <button type="button" 
                            class="btn btn-outline-light" 
                            @click="criarPublicacao()">Criar Publicação</button>
                        </div>
                    </div>
                </div>
                <div>
                    <CardPublicacao
                        v-model="publicacaoVisible"
                        v-for="(publicacao, index) in publicacoes"
                        :key="index"
                        :publicacao="publicacao"
                        :id-usuario="idUsuario"
                        :nome-usuario="nomeUsuario"
                        />
                </div>
                
            </div>
        </div>

        <div v-if="alertaCamposVisible" class="alerta-falha alert alert-danger d-flex " role="alert" style="margin-left: 45%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>           
             <div class="mt-n4">
                Falha ao criar publicação: {{ mensagemFalha }}
            </div>
        </div>

        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
          <div id="toastCriado" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="true" data-delay="5000">
            <div class="toast-header">
              <strong class="me-auto">Publicado</strong>
              <small>agora</small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              Sua publicação foi criada com sucesso 
            </div>
          </div>
        </div>

        <button @click="scrollToTop" v-if="showButton" class="go-top-btn btn btn-primary go-top-btn ">
            <i class="bi bi-house"></i>
        </button>    
    </div>

    <AlertaTermosUso :alerta-visible="alertaVisible" @fechar="fecharAlerta" ></AlertaTermosUso>

</template>
<script setup>
import CardPublicacao from '../components/CardPublicacao.vue';
import AlertaTermosUso from '../components/AlertaTermosUso.vue';
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from 'vue';
import * as Funcoes from '../utils/Funcoes'
import bootstrap  from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import http from '../services/http.js'
const title = ref("")
const descricao = ref("")
const publicacoes = ref([])
const localizacao = ref("")
const images = ref([]);
const MAX_IMAGES = 3;
const alertaCamposVisible = ref(false)
const mensagemFalha = ref('')
const alertaVisible = ref(true)
const userLogado = ref(null)
const idUsuario = ref(null)
const nomeUsuario = ref(null)
const publicacaoVisible = ref(false)


onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
    verificarAlertaTermosUso()
    await carregarPublicacoes()
    carregarUsuarioLogado()
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  
});

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 50; 
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function carregarUsuarioLogado(){
    const jsonString = localStorage.getItem('usuario');
    const objeto = JSON.parse(jsonString);
    userLogado.value = objeto
    idUsuario.value = userLogado.value.IdUsuario
    nomeUsuario.value = userLogado.value.Nome
}

async function carregarPublicacoes() {
    await http.get('/aprovadas/publicacao')
        .then(response => {
            publicacoes.value = response.data.data
            publicacaoVisible.value = true
        })
        .catch(error => {
            console.error("Erro ao carregar publicações: " + error);
        })

}



async function criarPublicacao() {
    if(!verificarCamposVazios()){
        var publicacao = {
            Titulo: title.value,
            descricao: localizacao.value,
            Endereco: descricao.value,
            fk_IdEstado: 3,
            VotosPositivos: 0,
            VotosNegativos: 0,
            fk_IdUsuario: idUsuario.value
        }

        await http.post('/publicacao', publicacao)
        .then(async response => {
            await salvarImagensPublicacao(response.data.id)
            toast.success("Publicação criada com sucesso.", {
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT
            })
        }).catch(error => {
            console.error("Erro ao criar publicacao" +error);
        })
        title.value = ''
        descricao.value = ''
        localizacao.value = '' 
        images.value = ''
    } else {
        alertaCamposVisible.value = true 
        setTimeout(function () {
            alertaCamposVisible.value = false 
            mensagemFalha.value = ''
        }, 4000);
    }
}

async function salvarImagensPublicacao(id){
    if (images.value.length > 0){
        for (const foto of images.value){
                var fotosRequest = {
                    nome: foto,
                    fk_IdPublicacao: id
                }
                await http.post('/foto', fotosRequest)
                .then(response => {
                })
                .catch(error => {
                    console.error("Erro ao salvar imagens: " + error);

                })
        }
        
    } else {
        return
    }
}

function verificarCamposVazios() {
    if (Funcoes.campoVazio(title.value)) {
        mensagemFalha.value =('Necessário informar um título')
        return true
    }
    if (Funcoes.campoVazio(descricao.value)) {
        mensagemFalha.value = ('Necessário informar uma descrição')
        return true
    }
    if (Funcoes.campoVazio(localizacao.value)) {
        mensagemFalha.value = ('Necessário informar a localização do problema')
        return true
    }
    return false
}


const handleFileUpload = (event) => {
    const files = event.target.files;
    if (!files) return;

    if (files.length > MAX_IMAGES) {
        alert(`Você só pode inserir no máximo ${MAX_IMAGES} imagens.`);
        return
    } else {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (e) => {
                images.value.push(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
}

function verificarAlertaTermosUso(){
    const fecharAlerta = localStorage.getItem('fecharAlerta');
    if (!Funcoes.campoVazio(fecharAlerta)) {
        alertaVisible.value = false
    }
}

function fecharAlerta() {
    alertaVisible.value = false
    localStorage.setItem('fecharAlerta', 'true');
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Red+Hat+Display:wght@600&display=swap');
@import "bootstrap-icons/font/bootstrap-icons.css";
.main {
    background-color: #003049;
    background-size: cover;
    margin: 0px;
    height: 100%;
}
.card {
    background-color: #F8E2CF;
    border-radius: 0px 0px 5px 5px;
    height: 96%;
    margin-bottom: 3px;
}
.nav-bar {
    background-color: #072231;
    height: 4%;
}
.font-text{
    font-family: 'Red Hat Display', sans-serif;
    font-size: 17px;
}

.link-perfil{
    display: flex;
    color: bisque;
}

.create-pub{
    background-color: #303030;
    border-radius: 0px 0px 5px 5px;
    margin-top: -0.1rem !important;
    width: 95%;
    padding-left: 3px;
    margin-bottom: 10px;

}

.file-imagens{
    margin-top: 15px;
    height: 320px;
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

.alerta-falha {
    position: fixed;
    bottom: 0;
    left: 0; 
    z-index: 999;
    max-height: 70px;
    max-width: 300px;
}

.go-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20%;
  display: flex;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: opacity 0.1s, visibility 0.1s;

}

.go-top-btn:hover {
  background-color: #0056b3;
}

</style>