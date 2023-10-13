<template>

  <p>{{ publicacao }}</p>
  
  </template>
  <script setup>
  
  const props = defineProps({
      publicacao: Object,
  })
  
  </script>