<script setup>
import { NConfigProvider } from 'naive-ui'
import { RouterView } from 'vue-router'
</script>

<template>
  <NConfigProvider class="h-full w-full">
    <RouterView />
  </NConfigProvider>
</template>

<style scoped>

</style>
