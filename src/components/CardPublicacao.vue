<template>
    <div class="card-publicacao">
        <div class="publicacoes" style="box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);">
            <div class="row">
                <div class="col-9 d-flex justify-content-start">
                    <p class="titulo-pub">
                        <span > {{ publi.Titulo }}</span>
                    </p>
                </div>
                <div class="col-3 d-flex justify-content-end">
                    <i class="bi bi-check-circle"></i> {{ Funcoes.statusPublicacao(publicacao.fk_IdEstado) }}
                </div>
            </div>
            <div>
                <p class="localizao-pub">
                    <span><i class="bi bi-geo-alt"></i>{{  publi.Endereco }}</span>
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
                     v-model="publi.descricao" 
                     class="form-control mb-3 text-area" 
                    style="min-height: 300px; max-height:300px ; margin-left: 40%; font-size: 13px;">
                        
                    </textarea>
                </div>
            </div>
            <div class="row" style="margin-top: 10px;">
                <div class="col-4" >
                    <p style="font-family: 'Red Hat Display', sans-serif;">
                        <i @click="aumentarVotacao" class="btn bi bi-caret-up-square botao-positivo"></i>
                        {{ upVote }} votos positivos
                    </p>
                </div>
                <div class="col-4">
                    <p style="font-family: 'Red Hat Display', sans-serif;">
                        <i @click="diminuirVotacao" class=" btn bi bi-caret-down-square botao-negativo"></i>
                        {{ downVote }} votos negativos
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 10px;">
                <div class="col-4" >
                    <p style="font-family: 'Red Hat Display', sans-serif;" class="text-decoration-underline">
                       <span @click="comentarioVisible = !comentarioVisible" role="button">
                        {{ !comentarioVisible ? 'Fazer comentário' : 'Esconder comentário' }}
                       </span>
                    </p>
                </div>
            </div>
            <div v-if="comentarioVisible" class="row" style="margin-top: 10px;">
                <div class="col-8" >
                    <textarea  
                    v-model="comentarioPublicao" 
                    class="form-control" 
                    placeholder="Comentário" 
                    id="floatingTextarea" style="min-height: 71px; max-height: 71px;"></textarea>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-start ms-5 mb-3 mt-3">
                        <button type="button" 
                        class="btn btn-outline-light" 
                        @click="enviarComentario(publi.IdPublicacao)">Criar Publicação</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="comentarios.length > 0" class="comentario row " style="box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);">
            <div class="col-md-12">
                <div class="bloco-menor row">
                    <p style="padding-top: 5%; font-style: underline;" class="font-text text-decoration-underline">Comentários: </p>
                    <div v-if="!verMaisVisible">
                        <p>
                            <span class="autor">{{ comentarios[0].NomeUsuario }}: </span>
                            <span class="comment">{{ comentarios[0].Descricao }}</span>
                        </p>
                    </div>
                    <div v-else>
                        <div v-for="(comentario, index) in comentarios" :key="index" class="row">
                            <p class="">
                                <span class="autor">{{ comentario.NomeUsuario }}: </span>
                                <span class="comment">{{ comentario.Descricao }}</span>
                            </p>
                        </div>
                    </div>
                    <div v-if="comentarios.length > 1">
                        <p class="text-decoration-underline">
                            <span @click="verMaisComentario()" role="button">{{ !verMaisVisible ? 'Ver mais' : 'Ver menos' }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import * as Funcoes from '../utils/Funcoes'
import http from '../services/http.js'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


const verMaisVisible = ref(false)
const comentarioVisible = ref(false)
const comentarios = ref(null)
const fotos = ref(null)
const publi = ref([])

const props = defineProps({
    publicacao: {
       type: Object
    },
    idUsuario: {
        type: Number
    },
    nomeUsuario: {
        type: String
    }

})

onBeforeMount(() => {
    carregarPublicacao(props.publicacao)
});

function carregarPublicacao(publicacao) {
    if (!Funcoes.campoVazio(publicacao)) {
        publi.value = (JSON.parse(JSON.stringify(props.publicacao)));
        comentarios.value = (JSON.parse(JSON.stringify(props.publicacao.comentarios)));
        fotos.value = (JSON.parse(JSON.stringify(props.publicacao.fotos)));
        if(fotos.value.length > 0){
            formatarImagensBase64()
        }
    }
}

function formatarImagensBase64(){
    for (let i = 0; i < fotos.value.length; i++) {
        var foto = fotos.value[i];
        var tipoMIME = detectarTipoMIME(foto.nome);
        if (foto.nome.startsWith("data:image")) {
            fotos.value[i].nome = foto.nome
        } else if (tipoMIME) {
            fotos.value[i].nome = `data:${tipoMIME};base64,${foto.nome}`;
        } else {
            console.error("Tipo de imagem desconhecido para a imagem " + i);
        }
    }
}

function detectarTipoMIME(base64String) {
    if (base64String.startsWith("/9j/")) {
        return "image/jpeg";
    } else if (base64String.startsWith("iVBORw0KGg")) {
        return "image/png";
    } 
    return null; 
}


function verMaisComentario() {
    verMaisVisible.value = !verMaisVisible.value
}

const upVote = ref(props.publicacao.VotosPositivos)
const votoPositivo = ref(0)
function aumentarVotacao() {
    if (votoPositivo.value === 0) {
        votoPositivo.value = 1
        upVote.value += 1
        const maisVoto = {
            VotosPositivos: upVote.value
        }
        http.put(`/publicacao/${publi.value.IdPublicacao}`, maisVoto)
        .then(response => {
        })
        .catch(error => {
            console.error(error);
        })
    } else {
        votoPositivo.value = 0
        upVote.value -= 1
        const maisVoto = {
            VotosPositivos: upVote.value
        }
        http.put(`/publicacao/${publi.value.IdPublicacao}`, maisVoto)
        .then(response => {
        })
        .catch(error => {
            console.error(error);
        })
    }
}
const downVote = ref(props.publicacao.VotosNegativos)
const votoNegativo = ref(0)
function diminuirVotacao() {
    if (votoNegativo.value === 0) {
        votoNegativo.value = 1
        downVote.value += 1
        const menosVoto = {
            VotosNegativos: downVote.value
        }
        http.put(`/publicacao/${publi.value.IdPublicacao}`, menosVoto)
        .then(response => {
        })
        .catch(error => {
            console.error(error);
        })
    } else {
        votoNegativo.value = 0
        downVote.value -= 1
        const menosVoto = {
            VotosNegativos: downVote.value
        }
        http.put(`/publicacao/${publi.value.IdPublicacao}`, menosVoto)
        .then(response => {
        })
        .catch(error => {
            console.error(error);
        })
    }
}
const comentarioPublicao = ref('')
async function enviarComentario(idPublicacao) {
    console.log(idPublicacao + " - " + comentarioPublicao.value + props.idUsuario +  props.nomeUsuario);
    var comentarioRequest = {
        fk_IdPublicacao: idPublicacao,
        fk_IdUsuario: props.idUsuario,
        NomeUsuario: props.nomeUsuario,
        Descricao: comentarioPublicao.value
    }
    await http.post('/comentario', comentarioRequest)
    .then(response => {
        toast.success("Comentário criado com sucesso.", {
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
    .catch(error => {
        toast.error("Erro ao fazer comentário.", {
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT
        })
        console.error(error);
    })
    .finally(() => {
        comentarioPublicao.value = ''
        comentarioVisible.value = false  
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

.comentario {
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
