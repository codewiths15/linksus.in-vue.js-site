<script setup>
  import Navbar from '@/components/navigation/Navbar.vue';
  import Hero from '@/components/home/Hero.vue';
  import Glider from '@/components/home/Glider.vue';
import Sections from '@/components/home/Sections.vue';
import Footer from '@/components/navigation/Footer.vue';
</script>



<template>

    <Navbar />
    
    <Hero />

    <Glider />

    <Sections />

  <Footer />
  

</template>


<style scoped>
@keyframes gradientAnimation {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.animated-gradient {
  background: linear-gradient(115deg, #11A5BA, #9fe6ef, #0074C3);
  background-size: 100% 100%; /* Ensures the gradient covers the animation area */
  animation: gradientAnimation 10s linear infinite; /* Continuous and stable animation */
}





</style>
