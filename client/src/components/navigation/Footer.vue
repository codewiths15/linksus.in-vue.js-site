<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.footer-element', {
    x: '15%', // Translate from right to original position
    opacity: 0,
    duration: 0.6,
    stagger: 0.2, // Adds delay between the animations of each element
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.footer-section', // The section to trigger the animation
      start: 'top 66%', // Start the animation when the top of the section is at the bottom of the viewport
      toggleActions: 'play none none none', // Play the animation once
    },
  });
});
</script>

<template>
  <section class="footer-section bg-white text-gray-800 py-12 px-4 md:px-8 lg:px-60">
    <div class="container mx-auto flex max-md:px-2">
      <!-- Logo and Call to Action -->
      <div class="footer-element w-full flex flex-col items-center md:items-start mb-6 md:mb-0">
        <a href="#" class="mb-4">
          <img
            src="../../assets/images/LinksUs Logo.png"
            alt="Rewind logo"
            width="123"
            height="140"
            class="footer-rewind-logo"
          />
        </a>
        <p class="text-center md:text-left text-md mb-4">Your only AI driven pre-industry experience platform</p>
        <a href="#" class="bg-blue1 text-white p-3 rounded-xl shadow-md hover:shadow-2xl text-sm">Get LinksUs</a>
      </div>
      <!-- Links Sections -->
      <div class="w-auto flex flex-row gap-10 max-md:gap-2">
        <div class="footer-element w-full mb-4">
          <h3 class="text-md font-semibold mb-2 max-md:text-sm">COMPANY</h3>
          <ul class="text-sm">
            <li class="mb-1"><a href="#" class="hover:text-gray-800">About</a></li>
            <li class="mb-1"><a href="#" class="hover:text-gray-800">Blog</a></li>
            <li class="mb-1"><a href="https://www.instagram.com/_linksus.in?igsh=MTY5cXJma3ZnZjQ2dg==" class="hover:text-gray-800">Instagram</a></li>
            <li class="mb-1"><a href="https://in.linkedin.com/company/linksus" class="hover:text-gray-800">LinkedIn</a></li>
          </ul>
        </div>
        <div class="footer-element w-full mb-4">
          <h3 class="text-md font-semibold mb-2 max-md:text-sm">USE CASES</h3>
          <ul class="text-sm">
            <li class="mb-1"><a href="#" class="hover:text-gray-800">Clubs and Universities</a></li>
            <li class="mb-1"><a href="#" class="hover:text-gray-800">Companies and Startups</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Footer Text -->
    <div class="footer-element bg-white py-4 px-8">
      <p class="text-xs">©2024 Talentronaut technologies pvt ltd.</p>
    </div>
  </section>
</template>

<style scoped>
.footer-rewind-logo {
  object-fit: contain;
}
</style>
