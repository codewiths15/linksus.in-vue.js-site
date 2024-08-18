<script setup>
import Section from '@/components/university/Section.vue'
import Navbar from '@/components/navigation/Navbar.vue';
import Section2 from '@/components/university/Section2.vue';
import Footer from '@/components/navigation/Footer.vue';
</script>

<template>
    <div class="background-image pt-32">
        <Navbar />
        <div class="pb-32">
            <Section />
        </div>
    </div>
    <div class="pb-32 pt-32 bg-[#f5f5f5]">
    <Section2 />
    </div>
    <Footer />
</template>

<style scoped>
.background-image {
  background-image: url('../assets/images/background-wave-gradient-minimalist-style_483537-5207.jpg');
  background-size: cover;
  background-position: center;
}
</style>