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
                </div>

                <div class="publicacoes"  style="box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);">
                    <div>
                        <h2 style="color: black;">TÍTULO PUBLICAÇÃO</h2>
                    </div>
                    <div>
                        <h3><i class="bi bi-geo-alt"></i>Localização do problema</h3>
                    </div>
                    <div class=" row col-11">
                        <!-- quando tiver 1 imagem -->
                        <div class="col-md-7 d-flex justify-content-center file-imagens">
                            <div class="teste-borda" style="max-width: 100%; max-height: 98%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
                            <img src="../assets/img/imagem6.jpg" alt="" style="height: 100%; width: 100%; object-fit: cover; border-radius: 9px;">
                            </div>
                        </div>
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
                        <!-- <div class="col-8 d-flex justify-content-center file-imagens">
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
                        </div> -->
                        
                        
                        <div class="col-4 ">
                            <label for="descricao" class="font-text " 
                                style="color: rgb(0, 0, 0); font-family: 
                                'Red Hat Display', sans-serif;
                                margin-left: 40%;">
                                <i class="bi bi-body-text"></i>  Descrição
                            </label>
                            <textarea 
                            v-model="descricaoPubli" 
                            class="form-control mb-3 text-area" 
                            style="min-height: 300px; max-height:300px ; margin-left: 40%; font-size: 13px;">
                            </textarea>
                        </div>
                    </div>
                    <div class="votacao">
                        <h3>Votacao</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const title = ref("")
const descricao = ref("")
const localizacao = ref("")
const descricaoPubli = ref("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .")

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
    height: 96%;
}
.nav-bar {
    background-color: #072231;
    height: 4%;
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
    /* margin-left: 2.5%; */
}

.publicacoes{
    background-color: #669BBC;
    border-radius: 5px;
    margin-top: 20px;
    width: 95%;
    padding: 10px;
    padding-left: 15px;
    padding-right: 12px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    /* margin-left: 2.5%; */
}

.text-area{
    background-color: #f8e2cf5b;
    border: 1px none #e2e2e2;
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

.teste-borda{
    border-radius: 9px;
    border: 1px solid rgba(49, 49, 49, 0.418);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin-right: 2px;
}

</style>