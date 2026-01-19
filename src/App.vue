<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useSEO } from './composables/useSEO'

useSEO()

// Signal to prerenderer that the page is ready
onMounted(() => {
  document.dispatchEvent(new Event('render-complete'))
})
</script>
