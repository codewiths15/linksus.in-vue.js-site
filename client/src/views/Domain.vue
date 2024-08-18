<script setup>
    import Navbar from '@/components/navigation/Navbar.vue';
    import Section from '@/components/domain/Section.vue';
    import Footer from '@/components/navigation/Footer.vue';
</script>


<template>
    <div class="background-gradient pt-32">
        <Navbar />
        <div>
            <Section />
        </div>
    </div>
    <Footer />
</template>

<style scoped>
.background-gradient{
    background: rgb(115,219,221);
background: -moz-linear-gradient(90deg, rgba(115,219,221,1) 0%, rgba(209,232,238,1) 50%, rgba(182,194,241,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(115,219,221,1) 0%, rgba(209,232,238,1) 50%, rgba(182,194,241,1) 100%);
background: linear-gradient(90deg, rgba(115,219,221,1) 0%, rgba(209,232,238,1) 50%, rgba(182,194,241,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#73dbdd",endColorstr="#b6c2f1",GradientType=1);
}

</style>