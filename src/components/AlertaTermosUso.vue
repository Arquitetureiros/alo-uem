<template>
    <div class="modal-backdrop" v-if="props.alertaVisible">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <slot> Ao clicar no botão abaixo eu declaro que li e concordo com os 
                    <a href="">Termos de Uso</a> e <a href=""> Políticas de Privacidade</a>
                    </slot>
                </div>
                <hr>
                <div class="modal-body ">
                    <h3 class=" text-center">Importante</h3>
                    <slot>
                        <ul>
                            <li> Qualquer ato impróprio e desrespeito será sujeito a banimento da plataforma.</li>
                            <li>Sujeito a advertência diante da Universidade com possibilidade do trancamento da matrícula</li>
                        </ul>
                    </slot>
                </div>
                <div class="modal-footer justify-content-center">
                    <button class="btn-concordo btn btn-primary" @click="emits('fechar')">Concordo</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
    alertaVisible: {
        type: Boolean,
        required: true
    }
})

const emits = defineEmits(['fechar'])
</script>

<style scoped>
/* Estilize o diálogo modal e a camada de fundo escura de acordo com suas preferências */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-dialog {
  width: 80%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px #000;
  z-index: 1000;
}

.modal-content {
  padding: 16px;
}

.btn-concordo {
    background-color: #860000;
}

.btn-concordo:hover {
    background-color: aliceblue;
    color: #860000;
}
.divider {
  width: 2px; /* Largura da linha divisória */
  background-color: #000; /* Cor da linha divisória */
  margin: 0 20px; /* Margem entre as divs divididas */
}
/* Adicione mais estilos conforme necessário */
</style>