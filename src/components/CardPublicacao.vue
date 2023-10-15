<template>
    <div class="card-publicacao">
        <div class="publicacoes" style="box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);">
            <div class="row">
                <div class="col-9 d-flex justify-content-start">
                    <p class="titulo-pub">
                        <span > {{ publicacao.tituloPublicacao }}</span>
                    </p>
                </div>
                <div class="col-3 d-flex justify-content-end">
                    <i class="bi bi-check-circle"></i> Aprovado
                </div>
            </div>
            <div>
                <p class="localizao-pub">
                    <span><i class="bi bi-geo-alt"></i>{{  publicacao.localizacaoPublicacao }}</span>
                </p>
            </div>
            <div class=" row col-11">
                <!-- quando tiver 1 imagem -->
                <!-- <div class="col-md-7 d-flex justify-content-center file-imagens">
                    <div class="teste-borda" style="max-width: 100%; max-height: 98%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                        <img src="../assets/img/imagem6.jpg" alt="" style="height: 100%; width: 100%; object-fit: cover; border-radius: 9px;">
                    </div>
                </div> -->
                <!-- quando tiver 2 imagens -->
                <!-- <div class="col-8 d-flex justify-content-center file-imagens">
                                <div class="row " style="max-width: 100%;">
                                    <div class="col-5 teste-borda" style="max-width: 100%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                                        <img src="../assets/img/imagem2.jpg" alt="" style="height: 100%; width: 100%; object-fit: cover; border-radius: 9px;">
                                    </div>
                                    <div class="col-5 teste-borda" style="max-width: 100%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                                        <img src="../assets/img/imagem3.jpg" alt="" style="height: 100%; width: 100%; object-fit: cover; border-radius: 9px;">
                                    </div>
                                </div>
                            </div> -->

                <!-- quando eu tiver 3 imagens -->
                <div class="col-8 d-flex justify-content-center file-imagens">
                    <div class="col-5 teste-borda" style="max-width: 100%;">
                        <img src="../assets/img/imagem4.jpg" alt="" style="height: 100%; width: 100%; object-fit: cover; border-radius: 9px;">
                    </div>
                    <div class="row col-5 mx-0">
                        <div class="row teste-borda mx-0" style="max-width: 100%;">
                            <img src="../assets/img/imagem5.jpg" alt="" style="height: 100%; width: 100%; object-fit: fill; border-radius: 9px;">
                        </div>
                        <div class="row teste-borda  mx-0 " style="max-width: 100%;">
                            <img src="../assets/img/imagem6.jpg" alt="" style="height: 100%; width: 100%; object-fit: fill; border-radius: 9px; margin-bottom: -4px;">
                        </div>
                    </div>
                </div>


                <div class="col-4 ">
                    <label for="descricao" class="font-text" style="color: rgb(0, 0, 0); font-family: 
                                    'Red Hat Display', sans-serif;
                                    margin-left: 40%;">
                        <i class="bi bi-body-text"></i> Descrição
                    </label>
                    <textarea v-model="publicacao.descricaoPubli" class="form-control mb-3 text-area" 
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
                    <textarea v-model="comentarioPublicao" class="form-control" placeholder="Comentário" id="floatingTextarea" style="min-height: 71px; max-height: 71px;"></textarea>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-start ms-5 mb-3 mt-3">
                        <button type="button" 
                        class="btn btn-outline-light" 
                        @click="enviarComentario(publicacao.idPublicacao)">Criar Publicação</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="comentarios.length > 0" class="comentarios row " style="box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);">
            <div class="col-md-12">
                <div class="bloco-menor row">
                    <p style="padding-top: 5%; font-style: underline;" class="font-text text-decoration-underline">Comentários: </p>
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
