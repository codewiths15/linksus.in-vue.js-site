<script setup>

// Apply zoom-out effect
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(() => {
  // Function to handle animations
  const applyAnimations = () => {
    const h1Element = document.querySelector('.about-h1');
    const h1Element2 = document.querySelector('.about2-h1');

    // Ensure animations are applied only for screens wider than 768px
    if (window.innerWidth >= 768) {
      const scaleValue = window.innerWidth < 768 ? 0.8 : 0.5; // Adjust scale based on screen width

      if (h1Element) {
        gsap.fromTo(h1Element, 
          { scale: scaleValue, opacity: 0, x: '1%' }, // Initial state
          { 
            scale: 1, // End state (normal size)
            opacity: 1, // End state (fully visible)
            x: 0,
            duration: 1, // Animation duration
            ease: "power2.out", // Easing function
            delay: 0.5 // Delay before the animation starts
          }
        );
      }

      if (h1Element2) {
        gsap.fromTo(h1Element2, 
          { opacity: 0, x: '20%' }, // Initial state
          { 
            opacity: 1, // End state (fully visible)
            x: 0,
            duration: 1, // Animation duration
            ease: "power3.out", // Easing function
            delay: 0.5 // Delay before the animation starts
          }
        );
      }
    }
  };

  // Apply animations on mount
  applyAnimations();

  // Optional: Reapply animations on resize if you want to handle window resize events
  window.addEventListener('resize', applyAnimations);
});
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  // Use GSAP's matchMedia to handle different screen sizes
  gsap.matchMedia().add("(min-width: 300px)", () => {
    // This animation will only run if the screen width is 1024px or wider
    gsap.fromTo(
      ".content-y",
      {
        autoAlpha: 0,
        scale: 0.8, // Start scaled up
        x: '5%', // Starting X position
        y: '2%'
      },
      {
        autoAlpha: 1,
        scale: 1, // End at original size
        x: 0, // End at original X position
        y: 0, // Optional: Adjust Y position if needed
        duration: 1.2,
        stagger: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content-y",
          start: "top 50%",
          toggleActions: "play none none none",
        }
      }
    );
  });
});

onMounted(() => {
  // Check if the screen width is above 768px
  if (window.innerWidth >= 300) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#team',
        start: 'top 60%', // Trigger when the top of the element hits 60% of the viewport height
        toggleActions: 'play none none reverse', // Play the animation on scroll, reverse on scroll back up
      },
    });

    tl.fromTo('.content-x', 
      { x: -20, opacity: 0 }, // Start position (translate X left and invisible)
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' } // End position (original position and fully visible)
    ).fromTo('.content2-x', 
      { x: 20, opacity: 0 }, // Start position (translate X right and invisible)
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }, 
      '-=0.5' // Start the second animation 0.5 seconds before the first one ends
    );
  }
});

onMounted(() => {
  // Check if the screen width is above 768px
  if (window.innerWidth >= 300) {
    const cards = document.querySelectorAll('.cards1, .cards2, .cards3');

    cards.forEach((card) => {
      gsap.from(card, {
        scale: 0.8, // Start with a smaller scale
        opacity: 0, // Start with opacity at 0
        duration: 0.8, // Animation duration
        ease: 'power2.out', // Easing function
        scrollTrigger: {
          trigger: card,
          start: 'top 60%', // When the top of the card hits 60% of the viewport height
          toggleActions: 'play none none none', // Only play the animation on scroll
        },
      });
    });
  }
});

onMounted(() => {
  // Check if the screen width is greater than 768px
  if (window.innerWidth > 300) {
    const recogTitle = document.querySelector('.recog-h1');
    const recogParagraph = document.querySelector('.recog-p');
    const logos = document.querySelectorAll('.recog a');

    // Title Translation
    gsap.from(recogTitle, {
      opacity: 0, // Start with opacity at 0
      duration: 1, // Animation duration
      ease: 'power2.out', // Easing function
      scrollTrigger: {
        trigger: recogTitle,
        start: 'top 60%', // Trigger when the top of the title hits 60% of the viewport
        toggleActions: 'play none none none',
      },
    });

    // Paragraph Translation
    gsap.from(recogParagraph, {
      opacity: 0, // Start with opacity at 0
      duration: 1, // Animation duration
      ease: 'power2.out', // Easing function
      scrollTrigger: {
        trigger: recogParagraph,
        start: 'top 60%', // Trigger when the top of the paragraph hits 60% of the viewport
        toggleActions: 'play none none none',
      },
    });

    // Logo Translations
    logos.forEach((logo) => {
      gsap.from(logo, {
        y: 30, // Start with the logo translated down by 50px
        opacity: 0, // Start with opacity at 0
        duration: 0.5, // Animation duration
        ease: 'power2.out', // Easing function
        scrollTrigger: {
          trigger: logo,
          start: 'top 80%', // Trigger when the top of the logo hits 80% of the viewport
          toggleActions: 'play none none none',
        },
      });
    });
  }
});

</script>

<template>
  <section class="flex justify-center items-center mt-6">
    <h1 class="about-h1 text-6xl text-center font-squada max-lg:text-5xl max-md:text-3xl text-gray-800">
      Linking with industry <br> "sus" but gets seamlessly <br> with Links-Us!
    </h1>
  </section>
  <div class="flex justify-center items-center mt-16">
    <h1 class="about2-h1 text-5xl text-center font-Lora text-gray-700 max-lg:text-4xl max-md:text-3xl">
      Our founding story
    </h1>
  </div>
  <div class="content-y flex justify-center items-center mt-16">
    <iframe
      src="https://www.youtube.com/embed/hGxoQuBTrnU?si=F5WcTjUuuzsMKnbG;controls=0&amp;autoplay=0&amp;mute=0&amp;start=0"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen=""
      title="LinksUs Launch"
      class="w-full max-w-4xl h-72 md:h-96 lg:h-[32rem] border-8 border-gray-300 rounded-lg shadow-lg">
    </iframe>
  </div>

  <section id="team" class="con-sec py-12 mt-16 max-sm:py-8">
  <div class="text-center mb-8">
    <h1 class="content-x lg:text-5xl text-4xl font-squada text-gray-800">Our team</h1>
    <p class="content2-x lg:text-xl text-lg font-Lora text-gray-700 mt-4 max-w-xl mx-auto max-sm:px-3">
      Our team is small but mighty. We work collaboratively with an emphasis
      on belonging, zest, and candor. We work remotely from Chennai, Pune, and Aurangabad.
    </p>
  </div>
  <div class="flex flex-col items-center space-y-8 mt-8">
        <div class="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
  <!-- Rushikesh Joshi -->
  <div class="cards1 flex bg-whiteo shadow-md rounded-3xl py-4 px-8 md:px-10 w-[100%] max-w-lg h-auto transform transition-transform duration-300">
    <img src="../../assets/images/rushikesh.jpeg" loading="lazy" width="78" alt="Rushikesh Joshi" class="rounded-full" />
    <div class="ml-4">
      <div class="text-lg font-medium text-gray-800 whitespace-nowrap font-squada pl-1">Rushikesh Joshi</div>
      <p class="text-gray-600 font-Lora pl-1">Founder &amp; CEO</p>
      <div class="mt-2">
        <a href="https://www.linkedin.com/in/rjventurepreneur" target="_blank" class="inline-block pl-1">
          <img src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/635ed52cc7a1a7366e7a93d8_linkedin.svg"
               loading="lazy" width="20" height="20" alt="LinkedIn" class="image-7" />
        </a>
      </div>
    </div>
  </div>

  <!-- Sahil Vichare -->
  <div class="cards2 flex bg-whiteo shadow-md rounded-3xl py-4 px-8 md:px-10 w-[100%] max-w-lg h-auto transform transition-transform duration-300">
    <img src="../../assets/images/sahil.jpeg" loading="lazy" width="78" alt="Sahil Vichare" class="rounded-full" />
    <div class="ml-4">
      <div class="text-lg font-medium text-gray-800 whitespace-nowrap font-squada pl-1">Sahil Vichare</div>
      <p class="text-gray-600 font-Lora pl-1">Product Head</p>
      <div class="mt-2">
        <a href="https://www.linkedin.com/in/sahil-vichare-b787a4231" target="_blank" class="inline-block pl-1">
          <img src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/635ed52cc7a1a7366e7a93d8_linkedin.svg"
               loading="lazy" width="20" height="20" alt="LinkedIn" class="image-7" />
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Om Dahale -->
<div class="cards3 flex justify-center mt-8">
  <div class="flex bg-whiteo shadow-md rounded-3xl py-4 px-8 md:px-10 w-[100%] max-w-lg h-auto transform transition-transform duration-300">
    <img src="../../assets/images/om.jpeg" loading="lazy" width="78" alt="Om Dahale" class="rounded-full" />
    <div class="ml-4">
      <div class="text-lg font-medium text-gray-800 whitespace-nowrap font-squada pl-1">Om Dahale</div>
      <p class="text-gray-600 font-Lora pl-1">Software Developer</p>
      <div class="mt-2">
        <a href="https://www.linkedin.com/in/om-dahale/" target="_blank" class="inline-block pl-1">
          <img src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/635ed52cc7a1a7366e7a93d8_linkedin.svg"
               loading="lazy" width="20" height="20" alt="LinkedIn" class="image-7" />
        </a>
      </div>
    </div>
  </div>
</div>
</div>
</section>

<section class="recog py-12 mt-24">
  <div class="text-center">
    <h1 class="recog-h1 text-5xl max-md:text-3xl font-squada text-gray-800 mb-4">Recognized By</h1>
    <p class="recog-p text-gray-700 text-xl max-md:text-lg font-Lora mb-8 mt-8 p-3">Our platform is appreciated and recognized by DPIIT, #startupindia, <br> and MSME.</p>
    <div class="flex lg:flex-wrap justify-center items-center lg:space-x-24 md:space-x-16 space-x-8 mt-16 p-4">
      <a href="https://dpiit.gov.in/" target="_blank" class="mb-4 opacity-75 transform transition-transform duration-300 hover:opacity-100">
        <img src="../../assets/images/750x450_483231-dpiit-removebg-preview1.png" loading="lazy" width="100" height="53" alt="DPIIT Logo" class="h-auto" />
      </a>
      <a href="https://www.startupindia.gov.in/" target="_blank" class="mb-4 brightness-75 transform transition-transform duration-300 hover:brightness-110">
        <img src="../../assets/images/images111-removebg-preview.png" loading="lazy" width="223" alt="Startup India Logo" class="h-auto" />
      </a>
      <a href="https://msme.gov.in/" target="_blank" class="mb-4 brightness-20 transform transition-transform duration-300 hover:brightness-110">
        <img src="../../assets/images/images-removebg-preview.png" loading="lazy" width="120" alt="MSME Logo" class="h-auto" />
      </a>
    </div>
  </div>
</section>







</template>
