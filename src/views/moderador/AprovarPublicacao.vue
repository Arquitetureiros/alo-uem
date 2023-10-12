<template>
  <div id="main" class="row">
    actions
    <div class="row justify-content-center">
      <div class="col-5">
        <div id="card">
          <div class="col-" style="height: 52vh">
            teste
          </div>
          <div class="row justify-content-around">
            <div class="col-2 row flex-column justify-content-center">
              <div @click="reprovar()" id="circle" class="d-flex align-items-center justify-content-center bg-danger" role="button">
                <i class="fa-solid fa-arrow-left fa-xl text-black"></i>
              </div>
              <span>Reprovar</span>
            </div>
            <div class="col-2 row flex-column justify-content-center">
              <div @click="alterar()" id="circle" class="d-flex align-items-center justify-content-center bg-warning" role="button">
                <i class="fa-solid fa-exclamation fa-xl text-black"></i>
              </div>
              <span>Alteracao</span>
            </div>
            <div class="col-2 row flex-column justify-content-center">
              <div @click="aprovar()" id="circle" class="d-flex align-items-center justify-content-center bg-success" role="button">
                <i class="fa-solid fa-arrow-right fa-xl text-black"></i>
              </div>
              <span>Aprovar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
export default {
    name: "AprovarPublicacao",
    components: {
      
    },
    setup() {


      function aprovar() {
        console.log('aprovar');
      }
      function reprovar() {
        console.log('reprovar');
      }
      function alterar() {
        console.log('alterar');
      }

      return {
        aprovar,
        reprovar,
        alterar
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
    height: 65vh;
  }
  #circle {
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    border: 4px solid black;
  }
</style>