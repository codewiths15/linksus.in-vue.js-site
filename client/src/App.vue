<template>
  <div id="app">
    <Home />
  </div>
</template>

<script setup>
  import Home from './views/Home.vue'
  import {gsap} from 'gsap';
  import { onMounted } from 'vue';

onMounted(() => {
  gsap.from('.app', {
    opacity: 0,
    y: 1,
  });
});
</script>