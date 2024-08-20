<script setup>
import Navbar from '@/components/navigation/Navbar.vue';
import Section from '@/components/companies/Section.vue';
import Section2 from '@/components/companies/Section2.vue';
import Footer from '@/components/navigation/Footer.vue';
</script>

<template>
    <Navbar />
    <div class="background-image -mt-20 pt-48">
        
        <div class="pb-32">
            <Section />
        </div>
        
    </div>
    <div class="pb-32 pt-32 bg-gray-100">
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