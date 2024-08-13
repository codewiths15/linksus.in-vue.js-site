<script setup>
import Navbar from '@/components/navigation/Navbar.vue';
import Card from '@/components/blog/Card.vue';
import Footer from '@/components/navigation/Footer.vue';
</script>

<template>
    <div class="bg-gradient pb-32 pt-16">
        <Navbar />
        <div>
            <Card />
        </div>
        
    </div>
    <Footer />
</template>

<style scoped>
.bg-gradient{
    background: rgb(178,230,159);
background: -moz-linear-gradient(90deg, rgba(178,230,159,1) 0%, rgba(222,241,220,1) 50%, rgba(137,242,152,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(178,230,159,1) 0%, rgba(222,241,220,1) 50%, rgba(137,242,152,1) 100%);
background: linear-gradient(90deg, rgba(178,230,159,1) 0%, rgba(222,241,220,1) 50%, rgba(137,242,152,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#b2e69f",endColorstr="#89f298",GradientType=1);
}

</style>