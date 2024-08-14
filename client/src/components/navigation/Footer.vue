<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.matchMedia().add("(min-width: 768px)", () => {
    gsap.from('.footer-element', {
      x: '5%', // Translate from right to original position
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
});

</script>

<template>
  <section class="footer-section animated-gradient2 text-gray-800 py-12 px-4 md:px-8 lg:px-60">
  <div class="container mx-auto flex flex-col md:flex-row md:justify-between max-md:px-8">
    <!-- Logo and Call to Action -->
    <div class="footer-element w-full flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left">
      <a href="#" class="mb-4">
        <img
          src="../../assets/images/LinksUs Logo.png"
          alt="Rewind logo"
          width="123"
          height="140"
          class="footer-rewind-logo"
        />
      </a>
      <p class="font-popins text-md md:text-lg mb-4">
        Your only AI driven pre-industry experience platform
      </p>
      <a
        href="/domain"
        class="hover:brightness-110 hover:animate-pulse font-Poppins font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue1 to-blue3 text-white text-xs md:text-sm"
      >
        Get LinksUs
      </a>
    </div>
    <!-- Links Sections -->
    <div class="w-full md:w-auto flex md:flex-row flex-col gap-10 max-md:gap-2 justify-center md:justify-start">
      <div class="footer-element mb-4 md:mb-0">
        <h3 class="text-lg font-semibold font-popins mb-2">COMPANY</h3>
        <ul class="text-sm font-popins">
          <li class="mb-1"><a href="/about" class="hover:text-gray-900">About</a></li>
          <li class="mb-1"><a href="/blog" class="hover:text-gray-900">Blog</a></li>
          <li class="mb-1"><a href="https://www.instagram.com/_linksus.in?igsh=MTY5cXJma3ZnZjQ2dg==" class="hover:text-gray-800">Instagram</a></li>
          <li class="mb-1"><a href="https://in.linkedin.com/company/linksus" class="hover:text-gray-800">LinkedIn</a></li>
        </ul>
      </div>
      <hr />
      <div class="footer-element mb-4 md:mb-0">
        <h3 class="text-lg font-semibold font-popins mb-2">USE CASES</h3>
        <ul class="text-sm font-popins flex flex-col">
          <li class="mb-1"><a href="/uni" class="hover:text-gray-900 whitespace-nowrap">Clubs and Universities</a></li>
          <li class="mb-1"><a href="/com" class="hover:text-gray-900 whitespace-nowrap">Companies and Startups</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Footer Text -->
  <div class="footer-element text-center md:text-left font-popins py-4 px-8">
    <p class="md:text-md text-xs">©2024 Talentronaut technologies pvt ltd.</p>
  </div>
</section>

</template>

<style scoped>
.footer-rewind-logo {
  object-fit: contain;
}
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

.animated-gradient2 {
  background: linear-gradient(135deg, #FAFFFC, #FAFFFC, #FAFFFC);
  background-size: 100% 100%; /* Ensures the gradient covers the animation area */
  animation: gradientAnimation 10s linear infinite; /* Continuous and stable animation */
}
</style>
