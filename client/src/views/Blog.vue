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
    background: rgb(168,235,236);
background: -moz-linear-gradient(90deg, rgba(168,235,236,1) 0%, rgba(209,232,238,1) 50%, rgba(197,206,244,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(168,235,236,1) 0%, rgba(209,232,238,1) 50%, rgba(197,206,244,1) 100%);
background: linear-gradient(90deg, rgba(168,235,236,1) 0%, rgba(209,232,238,1) 50%, rgba(197,206,244,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a8ebec",endColorstr="#c5cef4",GradientType=1);
}

</style>