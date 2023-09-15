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
        <div class="d-flex justify-content-center">
            <div class="card row col-md-5 col-10 ">
                <div class="row d-flex create-pub ">
                    <h1 style="color: white;">CRIAR UMA PUBLICAÇÃO</h1>
                    <div class=" col-11 my-2">
                        <label for="title" class="font-text" 
                        style="color: white; font-family: 'Red Hat Display', sans-serif;">
                            Escreva um título para publicação
                        </label>
                        <input placeholder="Escreva um título para publicação" 
                        v-model="title" 
                        type="text" 
                        class="form-control w-75">
                    </div>
                    <div class=" col-11 my-2">
                        <label for="title" class="font-text" 
                        style="color: white; font-family: 'Red Hat Display', sans-serif;">
                            Adicionar localização
                        </label>
                        <input placeholder="Adicionar localização" 
                        v-model="localizacao" 
                        type="text" 
                        class="form-control w-75">
                    </div>
                    <div class=" row col-11">
                        
                        <div class="col-8">
                            <div class="mb-3">
                                <label for="formFileMultiple" 
                                    class="form-label"
                                    style="color: white; 
                                    font-family: 'Red Hat Display', sans-serif;">
                                </label>
                                <input 
                                class="form-control"
                                type="file" 
                                id="formFileMultiple"
                                style=" height: 300px; width: 486px;"
                                multiple>
                            </div>
                        </div>
                        <div class="col-4 ">
                            <label for="title" class="font-text " 
                                style="color: white; font-family: 
                                'Red Hat Display', sans-serif;
                                margin-left: 40%;">
                                <i class="bi bi-body-text"></i>  Descrição
                            </label>
                                <input 
                                v-model="descricao" 
                                type="text" 
                                class="form-control  mb-3"
                                style="height: 300px; margin-left: 40%;">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const title = ref("")
const descricao = ref("")
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
    background-color: #F8E2CF;
    border-radius: 0px 0px 5px 5px;
    height: 96vh;
}
.nav-bar {
    background-color: #072231;
    height: 4vh;
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
    margin-left: 2.5%;
}



</style>