<script setup>
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
<div class=" flex flex-col items-center text-center">
      <div class="blog-h1 text-4xl md:text-5xl lg:text-6xl font-semibold font-Lora text-gray-800">
    Welcome to Tech Blogs
  </div>
  <div class="blog-h2 text-xl md:text-2xl lg:text-3xl font-semibold font-Lora text-gray-600 mt-4">
    Explore various technology topics and their Roadmaps
  </div>
    </div>


</template>