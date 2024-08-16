<script>
import Navbar from '@/components/navigation/Navbar.vue';
import Footer from '@/components/navigation/Footer.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  // Elements to animate
  const blogH1 = document.querySelector('.blog-h1');
  const blogH2 = document.querySelector('.blog-h2');

  // GSAP timeline for the zoom-out effect
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.blog-h1', // Start the animation based on the blog-h1 element
      start: 'top 75%', // Trigger when the top of the element hits 75% of the viewport height
      toggleActions: 'play none none reverse', // Play the animation on scroll down, reverse on scroll up
    },
  });

  // Add animations to the timeline
  tl.fromTo(blogH1,
    { scale: 0.7, opacity: 0 }, // Initial state (zoomed in and invisible)
    { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' } // End state (normal size and fully visible)
  ).fromTo(blogH2,
    { scale: 0.7, opacity: 0 }, // Initial state (zoomed in and invisible)
    { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }, 
    '-=0.5' // Start the second animation 0.5 seconds before the first one ends
  );
});
</script>

<template>
  <Navbar />
  <div class="bg-gradient pt-32 pb-32">
  <div class=" flex flex-col items-center text-center">
      <div class="blog-h1 text-4xl md:text-5xl lg:text-6xl font-semibold font-Lora text-gray-800">
    Welcome to Tech Blogs
  </div>
  <div class="blog-h2 text-xl md:text-2xl lg:text-3xl font-semibold font-Lora text-gray-600 mt-4">
    Explore various technology topics and their Roadmaps
  </div>
    </div>
  <div class="mt-16 max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <div class="flex justify-center items-center">
      <img class="w-[15%] h-auto rounded-t-lg" :src="blog.image" :alt="blog.title" />
    </div>
    <div class="p-6">
      <h1 class="text-xl font-bold mb-2 text-center">{{ blog.title }}</h1>
      <p class="text-md mb-4 text-center">{{ blog.summary }}</p>
      <h2 class="text-lg font-semibold mb-2">Roadmap</h2>
      <p class="text-sm mb-4">{{ blog.contentIntro }}</p>
      <ol class="list-decimal pl-5 space-y-2">
        <li v-for="(step, index) in blog.roadmap" :key="index" class="text-sm">{{ step }}</li>
      </ol>
      <router-link to="/blog" class="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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
  .header {
    text-align: center;
    margin-top: 120px;
  }
  
  .header h1 {
    font-size: 3.7em;
    margin: 0;
    font-family: "Quincy", serif !important;
  }
  
  .header p {
    font-size: 1.5em;
    color: #666;
    margin-top: 16px;
    font-family: "Greycliff", sans-serif !important;
  }
  
  .blog-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 60px 10px 5px 5px;
}

.blog-card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s, max-height 0.5s;
  cursor: pointer;
  max-height: 400px;
  padding: 10px;
  padding-bottom: 75px;
  background: linear-gradient(to bottom, #7fb9fb9c, #57d6f6a3);

}

.blog-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.blog-card.expanded {
  /* Styles for active card */
  max-height: 600px;
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.blog-card img {
  width: 27%;
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

.blog-content {
  display: none;
  padding: 15px;
  border-top: 1px solid #a6a6a6;
  max-height: 250px;
  overflow-y: auto;
}

.blog-content.active {
    display: block;
}
  
  .back-button {
    display: block;
    text-align: center;
    background-color: #007BFF;
    color: white;
    padding: 10px;
    margin: 15px;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .back-button:hover {
    background-color: #0056b3;
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
  