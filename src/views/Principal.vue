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
                            class="form-control mb-3" 
                            style="min-height: 300px; max-height:300px ; margin-left: 40%;">
                            </textarea>
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
const localizacao = ref("")
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