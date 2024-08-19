<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.matchMedia().add("(min-width: 200px)", () => {
    gsap.from('.footer-element', {
      x: '50%', // Translate from right to original position
      opacity: 0,
      duration: 0.6,
      stagger: 0.2, // Adds delay between the animations of each element
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.footer-section', // The section to trigger the animation
        start: 'top 75%', // Start the animation when the top of the section is at the bottom of the viewport
        toggleActions: 'play none none none', // Play the animation once
      },
    });
  });
});

</script>

<template>
  <hr class="ml-48 mr-48 max-md:hidden">
  <section class="footer-section animated-gradient2 text-gray-800 py-12 px-4 md:px-8 lg:px-44 flex flex-col overflow-x-hidden">
  <div class="container mx-auto flex flex-col md:flex-row max-md:px-8 px-8">
    <!-- Logo and Call to Action -->
    <div class="footer-element w-full flex flex-col items-start md:items-start mb-6 md:mb-0 text-left md:text-left mr-32">
      <a href="#" class="mb-4">
        <img
          src="../../assets/images/LinksUs Logo.png"
          alt="Rewind logo"
          width="123"
          height="140"
          class="footer-rewind-logo"
        />
      </a>
      <p class="font-squada text-md md:text-lg mb-4">
        Your only AI driven pre-industry experience platform
      </p>
      <a
        href="/domain"
        class="hover:brightness-110 hover:animate-pulse font-popins font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue1 to-blue3 text-white text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis"
      >
        Get LinksUs
      </a>
    </div>
    <!-- Links Sections -->
    <div class="w-full md:w-auto flex md:flex-row flex-col pl-4 gap-6 max-md:gap-1 justify-center md:justify-start md:-mr-14">
      <div class="footer-element mb-4 md:mb-0">
        <h3 class="text-lg font-squada font-[600] mb-2 text-gray-800">COMPANY</h3>
        <ul class="text-sm font-Lora text-gray-800">
          <li class="mb-1"><a href="/about" class="">About</a></li>
          <li class="mb-1"><a href="/blog" class="">Blog</a></li>
          <li class="mb-1"><a href="https://www.instagram.com/_linksus.in?igsh=MTY5cXJma3ZnZjQ2dg==" class="">Instagram</a></li>
          <li class="mb-1"><a href="https://in.linkedin.com/company/linksus" class="">LinkedIn</a></li>
        </ul>
      </div>
      <hr />
      <div class="footer-element mb-4 md:mb-0">
        <h3 class="text-lg font-squada font-[600] mb-2">USE CASES</h3>
        <ul class="text-sm font-Lora flex flex-col text-gray-800">
          <li class="mb-1"><a href="/uni" class=" whitespace-nowrap">Clubs and Universities</a></li>
          <li class="mb-1"><a href="/com" class=" whitespace-nowrap">Companies and Startups</a></li>
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
