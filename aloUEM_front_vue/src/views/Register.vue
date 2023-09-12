<template>
  <div id="main">
    <div class="d-flex justify-content-center">
      <div
        id="card"
        class="row col-md-3 col-10 justify-content-center"
      >
        <div class="col-10 row flex-column mt-4">
          <h1>Alô!UEM</h1>
          <h1>Cadastro</h1>
        </div>
        <div class="col-10">
          <div
            id="form"
            class="row justify-content-center"
          >
            <div class="row justify-content-center mt-5">
              <div class="col-11">
                <label
                  for="email"
                >
                  Email institucional
                </label>
                <input
                  id="email"
                  type="text"
                  class="form-control"
                >
              </div>
              <div class="col-11">
                <label
                  for="name"
                >
                  Nome do usuário
                </label>
                <input
                  id="name"
                  type="text"
                  class="form-control"
                >
              </div>
              <div class="col-11">
                <label
                  for="password"
                >
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  class="form-control"
                >
              </div>
              <div class="col-11">
                <label
                  for="confirmation"
                >
                  Confirmar senha
                </label>
                <input
                  id="confirmation"
                  type="password"
                  class="form-control"
                >
              </div>
              <div class="col-11 my-1">
                <input
                  class="form-check-input"
                  type="checkbox"
                >
                <span>
                  Aceito que li e concordo com os <a
                    style="color: white;"
                    href="#"
                  >termos de uso</a> e <a
                    style="color: white;"
                    href="#"
                  >politicas de privacidade</a> 
                </span>
              </div>
              <button
                id="button"
                type="button"
                class="btn col-6"
              >
                <h4>CADASTRAR</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="css">
  #main {
    background-color: #003049;
    background-size: cover;
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
  #card {
    background-color: #D9D9D9;
    height: 100vh;
  }
  #form {
    color: white;
    border-radius: 5px;
    height: 74vh;
    background-color: #003049;
  }
  #button {
    background-color: #D9D9D9;
    height: 3rem;
  }
</style>