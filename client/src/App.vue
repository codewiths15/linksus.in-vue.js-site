<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
  import gsap from 'gsap';
  import { onMounted } from 'vue';

onMounted(() => {
  gsap.from('.app', {
    opacity: 0,
    y: 1,
  });
});
</script>