<template>
  <div class="main">
      <ul class="nav justify-content-end nav-bar ">
          <li class="nav-item ">
              <div class="">
                  <a 
                  class="nav-link active me-4 link-perfil" 
                  aria-current="page" 
                  href="#">
                      <i class="bi bi-person"></i> Início
                  </a>
              </div>
          </li>
      </ul>
      <div class="d-flex justify-content-center">
          <div class="card row col-md-12 col-10 ">
              <div class="perfil row">

                <div class="col-2">
                  <i class="bi bi-person-circle"></i>
                </div>

                <div class="col">

                  <div class="col-md-7 col-6">
                    <label for="title" class="font-text" 
                    style="color: black; font-family: 'Red Hat Display', sans-serif;">
                    Nome de Usuário:
                    </label>
                    <input  
                    v-model="nome" 
                    type="text" 
                    class="form-control w-65">
                  </div>

                  <div class="col-md-7 col-6">
                    <label for="title" class="font-text" 
                    style="color: black; font-family: 'Red Hat Display', sans-serif;">
                    Email educacional:
                    </label>
                    <input  
                    v-model="email" 
                    type="text" 
                    class="form-control w-65">
                  </div>

                </div>
                
              </div>

              <div class="row col-md-10 col-6">
                <div class="publi col-md-5 col-6 " style="padding-left: 0px; padding-right: 0px;">
                  <label for="title" class="font-text" 
                    style="color: black; font-family: 'Red Hat Display', sans-serif; background-color: aliceblue; width: 100%; padding-left: 5px;">
                    Publicações feitas
                  </label>
                </div>

                <div class="comentario col-md-5 col-6 " style="padding-left: 0px; padding-right: 0px;">
                  <label for="title" class="font-text" 
                    style="color: black; font-family: 'Red Hat Display', sans-serif; background-color: aliceblue; width: 100%; padding-left: 5px;">
                    Comentarios feitos
                    </label>
                </div>

              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Red+Hat+Display:wght@600&display=swap');
@import "bootstrap-icons/font/bootstrap-icons.css";
.main {
  background-color: #003049;
  background-size: cover;
  margin: 0px;
}
.bi-person-circle{
  font-size: 100px;
}
.card {
  background-color: #003049;
  border-radius: 0px 0px 5px 5px;
  height: 96vh;
}
.perfil {
  background-color: #F8E2CF;
  border-radius: 0px 0px 5px 5px;
  height: 30vh;
  width: 850px;
  margin-left: 55px;
  margin-top: 45px;
}
.publi {
  background-color: #F8E2CF;
  border-radius: 0px 0px 5px 5px;
  height: 55vh;
  margin-left: 55px;
  margin-top: 45px;
}.comentario {
  background-color: #F8E2CF;
  border-radius: 0px 0px 5px 5px;
  height: 55vh;
  margin-left: 155px;
  margin-top: 45px;
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