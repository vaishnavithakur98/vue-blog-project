<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/layouts/TheHeader.vue'
import TheFooter from './components/layouts/TheFooter.vue'
import TheNewsletter from './components/TheNewsletter.vue'
</script>

<template>
  <div id="wrapper" class="wrapper">
    <TheHeader />
    <main class="main">
      <RouterView />
      <TheNewsletter />
    </main>
    <TheFooter />
  </div>
</template>

<!-- <style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style> -->
