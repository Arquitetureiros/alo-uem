<template>

<a class="text-decoration-none text-black" href="/publicacao/{{ publicacao.idPublicacao }}">{{ publicacao.tituloPublicacao }}</a>

</template>
<script setup>

const props = defineProps({
    publicacao: Object,
})

</script>