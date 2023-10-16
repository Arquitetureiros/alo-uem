<template>
<div id="pub" class="text-black p-3" v-if="publicacao">
    <div class="row flex-column px-4 py-2">
       <span class="h1">
           {{ publicacao.Titulo }}
       </span>
       <span class="h3">
            {{ publicacao.Endereco }}
       </span>
    </div>
    <div class="row justify-content-between px-4">
        <div id="fotos" class="flex col-8">
            <vueper-slides
            fixed-height="18rem"
            :bullets="true"
            >
                <vueper-slide v-for="(f, index) in publicacao.fotos"
                    :key="index"
                    :image="'data:image/jpeg;base64,'+f.nome"
                    >
                </vueper-slide>
            </vueper-slides>
        </div>
        <div id="desc" class="col-3 bg-white">
            {{ publicacao.descricao }}
        </div>
    </div>
</div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { VueperSlides, VueperSlide  } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import http from '@/services/http'

export default {
    name: "Publicacao",
    components: {
        VueperSlides, VueperSlide
    },
    props: {
        idPublicacao: Number
    },
    setup(props){
        const publicacao = ref(null)

        async function getPublicacao(){
            await http.get(`/publicacao/${props.idPublicacao}`)
            .then((response) => {
                publicacao.value = response.data
            })
        }
        
        onMounted(() => {
            getPublicacao()
        })

        return {
            publicacao
        }
    }
}
</script>
<style scoped>
#fotos {
    height: 18rem;
    border-radius: 8px;
}
#desc {
    height: 18rem;
    border-radius: 8px;
}
#pub {
    background-color: #669BBC;
    border-radius: 8px;
    height: 30rem;
}
</style>