<template>
  <router-view />
</template>

<script setup>
import { useSEO } from './composables/useSEO'
useSEO()
</script>
