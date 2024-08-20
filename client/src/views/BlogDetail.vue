<script>
import Navbar from '@/components/navigation/Navbar.vue';
import Footer from '@/components/navigation/Footer.vue';
import HeadSection from '@/components/blog/HeadSection.vue';
</script>

<template>
  <Navbar />
  <div class="bg-gradient -mt-20 pt-48 pb-32">
  <HeadSection />
  <div class="mt-16 xsm:max-w-[80%] max-w-[80%] sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto p-6 bg-blue1 bg-opacity-20 shadow-xl rounded-xl blog-card">
  <div class="flex justify-center items-center">
    <img class="w-[25%] sm:w-[20%] md:w-[21%] lg:w-[23%] h-auto rounded-t-lg" :src="blog.image" :alt="blog.title" />
  </div>
  <div class="p-4 md:p-6">
    <h1 class="text-lg sm:text-xl font-bold mb-2 text-center">{{ blog.title }}</h1>
    <p class="text-sm sm:text-md mb-4 text-center">{{ blog.summary }}</p>
    <h2 class="text-md sm:text-lg font-semibold mb-2">Roadmap</h2>
    <p class="text-xs sm:text-sm mb-4">{{ blog.contentIntro }}</p>
    <ol class="list-decimal pl-5 space-y-2">
      <li v-for="(step, index) in blog.roadmap" :key="index" class="text-xs sm:text-sm">{{ step }}</li>
    </ol>
    <router-link to="/blog" class="mt-6 inline-block hover:brightness-110 hover:animate-pulse font-Poppins font-bold text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 ml-6 rounded-2xl bg-gradient-to-r from-blue1 to-blue3 text-white">
      Back to Blog List
    </router-link>
  </div>
</div>

</div>
<Footer />
</template>

  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const blog = ref({});
  
  onMounted(() => {
    const blogData = JSON.parse(localStorage.getItem('blogs'));
    const blogId = route.params.id;
    blog.value = blogData.find(b => b.title === blogId);
  });
  </script>
  
  <style scoped>

.blog-card img {
  height: auto;
  border-radius: 50%;
}

.blog-card h2 {
  font-size: 1.5em;
  margin: 15px;
  font-family: "Quincy", serif !important;
}

.blog-card p {
  font-size: 1em;
  line-height: 1.5;
  margin: 15px;
}




  
  /* Responsive typography */
  @media (max-width: 1200px) {
    .header h1 {
      font-size: 3.5rem;
    }
  
    .header p {
      font-size: 1.4rem;
    }
  
    .blog-card h2 {
      font-size: 1.4rem;
    }
  
    .blog-card p {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 992px) {
    .header h1 {
      font-size: 3rem;
    }
  
    .header p {
      font-size: 1.3rem;
    }
  
    .blog-card h2 {
      font-size: 1.3rem;
    }
  
    .blog-card p {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
    .header h1 {
      font-size: 2.5rem;
    }
  
    .header p {
      font-size: 1.2rem;
    }
  
    .blog-card h2 {
      font-size: 1.2rem;
    }
  
    .blog-card p {
      font-size: 0.9rem;
    }
  
    .blog-content li {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 576px) {
    .header h1 {
      font-size: 2rem;
    }
  
    .header p {
      font-size: 1rem;
    }
  
    .blog-card h2 {
      font-size: 1rem;
    }
  
    .blog-card p {
      font-size: 0.8rem;
    }
  }

  .bg-gradient{
    background: rgb(168,235,236);
background: -moz-linear-gradient(90deg, rgba(168,235,236,1) 0%, rgba(209,232,238,1) 50%, rgba(197,206,244,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(168,235,236,1) 0%, rgba(209,232,238,1) 50%, rgba(197,206,244,1) 100%);
background: linear-gradient(90deg, rgba(168,235,236,1) 0%, rgba(209,232,238,1) 50%, rgba(197,206,244,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a8ebec",endColorstr="#c5cef4",GradientType=1);
}
  </style>
  