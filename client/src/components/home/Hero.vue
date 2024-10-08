<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref } from 'vue';

const currentLaptopSrc = ref('');
const currentMobileSrc = ref('');
const selectedImageIndex = ref(0);

const labels = [
  {
    id: 'browse-tab',
    text: 'Undergrads',
    laptopSrc: 'https://res.cloudinary.com/dyghenjwh/image/upload/v1722571831/laptop1-resize_a6p8w5.jpg',
    mobileSrc: 'https://res.cloudinary.com/dyghenjwh/image/upload/v1722310086/LinksUs/mobile1_e6mdh2.jpg',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.9 47.9 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"/></svg>`
  },
  {
    id: 'search-tab',
    text: 'Companies',
    laptopSrc: 'https://res.cloudinary.com/dyghenjwh/image/upload/v1722571829/laptop2-resize_weolco.jpg',
    mobileSrc: 'https://res.cloudinary.com/dyghenjwh/image/upload/v1722310089/LinksUs/mobile2_czas4l.jpg',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"/></svg>`
  },
  {
    id: 'ask-tab',
    text: 'Mentors',
    laptopSrc: 'https://res.cloudinary.com/dyghenjwh/image/upload/v1722573164/laptop3-reresize_abj4ok.jpg',
    mobileSrc: 'https://res.cloudinary.com/dyghenjwh/image/upload/v1722310088/LinksUs/mobile3_bxxnbd.jpg',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8"/></svg>`
  }
];

const selectImages = (index) => {
  selectedImageIndex.value = index;
  currentLaptopSrc.value = labels[index].laptopSrc;
  currentMobileSrc.value = labels[index].mobileSrc;
};
onMounted(() => {
      // Set the initial image to the first label
      selectImages(0);
    });

    const getPaddingClass = (index) => {
  const padding = 'px-5'; // Default padding
  if (index === selectedImageIndex.value) {
    return 'px-7'; // Increase padding when selected
  } else if (index < selectedImageIndex.value) {
    return 'pr-7 pl-3'; // Increase right padding for previous labels
  } else {
    return 'pl-7 pr-3'; // Increase left padding for next labels
  }
  return padding;
};


gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
      document.documentElement.style.overflowX = 'hidden';
      // Use GSAP's matchMedia to handle different screen sizes
      gsap.matchMedia().add("(min-width: 300px)", () => {
        // This animation will only run if the screen width is 300px or wider
        gsap.fromTo(
          ".container",
          {
            autoAlpha: 0,
            scale: 0.75, // Start scaled down
            translateX: '1%', // Start translateX position
          },
          {
            autoAlpha: 1,
            scale: 1, // End at original size
            translateX: 0, // End at original translateX position
            duration: 1,
            stagger: 0.5,
            ease: "Power1.easeOut",
            scrollTrigger: {
              trigger: ".container",
              start: "top 70%",
              end: "bottom top",
              toggleActions: "play none none none",
            }
          }
        );
      });
    });




const headline1 = ref(null);
const headline2 = ref(null);
const headline3 = ref(null);
const subheadline = ref(null);

onMounted(() => {
  gsap.matchMedia().add("(min-width: 300px)", () => {
    // Animate headlines with x and opacity effects
    gsap.from([headline1.value, headline2.value, headline3.value], {
      x: '20%',
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.5, // Adds a staggered effect to animate each element one after the other
    });

    // Animate subheadline with zoom-out effect
    gsap.fromTo(
      subheadline.value,
      {
        scale: 0.3, // Start scaled up
        x: '0%', // Starting X position
        opacity: 0,
      },
      {
        scale: 1, // End at original size
        x: 0, // End at original X position
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
      }
    );
  });
});


</script>


<template>
  <div class="bg-gradient-to-b from-teal-200 via-sky-100 to-whiteo to-90% pb-10 -mt-20 pt-16">
    <div class="nh-hero relative isolate px-6 pt-14 lg:px-8 ">
      <!-- Announcement Section -->
      <div class="nh-hero-header-wrap mx-auto max-w-2xl text-center ">
        <div class="w-layout-blockcontainer nh-hero-header w-container mb-8 flex justify-center">
          <a href="/domain" class="announcementmodule w-inline-block flex items-center rounded-3xl p-3 bg-whiteo gradient-animation brightness-110 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src="https://res.cloudinary.com/dyghenjwh/image/upload/v1722573404/human-people-logo-design-vector_wzfisc.png"
              alt="human-people-logo"
              class="rewind-windows-icon h-14 w-12 rotate-scale-animation"
              loading="lazy"
            />
            <div class="div-block-38 ml-4 pl-4 max-xsm:ml-0 h-auto pr-8 max-mmsm:pl-1  max-ssm:pr-1">
              <div class="announcementtext font-squada text-left text-gray-600 text-[1.2rem] max-smd:text-sm max-msmsm:text-[1rem]">Introducing Community</div>
              <div class="announcementsubtext text-left font-Lora text-[0.9rem] max-mmsm:text-[0.7rem] max-smd:text-[0.7rem] text-gray-600 max-ssm:text-[0.7rem] max-msmsm:text-[0.7rem] max-sm:leading-[1.5]">
                For Undergraduates with early access to the <br class="max-sm:hidden"> Platform
              </div>
            </div>
            <svg 
              class="ml-2 w-5 h-5 text-gray-600" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="1.5" 
              d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
        <!-- Main Headline -->
         <div class="flex justify-center items-center">
        <h1
      class=" text-6xl font-Lora font-semibold leading-[4.3rem] text-[#544350] max-smd:text-5xl max-sm:text-3xl max-msm:text-[1.75rem]"
      >
      <p class="w-full"ref="headline1">Your only AI driven</p><p ref="headline2">pre-industry</p><p ref="headline3">experience platform</p> 
    </h1>
  </div>
    <div class="flex justify-center text-center py-2 px-10 max-sm:px-8 max-mmsm:px-6">
    <h2
      class="nh-hero-sub mt-6 text-2xl font-Lora text-[#544350] max-smd:text-md max-sm:text-sm max-msm:text-xs"
      ref="subheadline"
    >
      LinksUs is a cutting edge platform with AI powered 
      highly data-driven systems to Connect, Link, build 
      and explore the industry. Your colleagues will 
      wonder how did you Links it all.
    </h2>
  </div>
      </div>
    </div>

<div class="container max-sm:mt-5">
  <!-- Laptop Frame -->
  <div class="frame laptop-frame">
    <img
      src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame-p-500.webp"
      srcset="
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame-p-500.webp 500w,
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame-p-800.webp 800w,
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame-p-1080.webp 1080w,
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame-p-1600.webp 1600w,
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame-p-2000.webp 2000w,
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame-p-2600.webp 2600w,
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame-p-3200.webp 3200w,
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame.webp 3220w
      "
      alt="Laptop Frame"
      class="frame-img"
    />
    <img :src="currentLaptopSrc" alt="Laptop Image" class="content-img laptop-img rounded-lg" />
  </div>

  <!-- Mobile Frame -->
  <div class="frame mobile-frame">
    <img
      src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdff2f7b1cd77bf80cb89b_hero-iphone-frame-p-500.webp"
      srcset="
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdff2f7b1cd77bf80cb89b_hero-iphone-frame-p-500.webp 500w,
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdff2f7b1cd77bf80cb89b_hero-iphone-frame-p-800.webp 800w,
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdff2f7b1cd77bf80cb89b_hero-iphone-frame-p-1080.webp 1080w,
        https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdff2f7b1cd77bf80cb89b_hero-iphone-frame.webp 1339w
      "
      alt="Mobile Frame"
      class="frame-img"
    />
    <img :src="currentMobileSrc" alt="Mobile Image" class="content-img mobile-content-img rounded-3xl" />
  </div>
</div>



 
<div class="mt-10 mx-auto max-w-lg justify-evenly space-y-0 max-sm:space-x-0 flex flex-row max-sm:py-2 py-1 rounded-3xl bg-[#EEF7FF]">
    <label
      v-for="(label, index) in labels"
      :key="label.id"
      @click="selectImages(index)"
      :class="{
        'selected bg-white': selectedImageIndex === index, 
        'hover:text-gray-600 font-Lora text-lg cursor-pointer rounded-3xl flex items-center justify-center max-sm:text-xs max-smd:text-sm max-msm:text-[0.55rem] p-3 max-sm:py-1 px-5 max-sm:px-2': true
      }"
      :id="label.id"
    >
      <!-- Render the SVG icon dynamically -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 256 256"
        class="mr-2"
        v-html="label.icon"
      ></svg>
      {{ label.text }}
    </label>
  </div>
</div>


  </template>
  
  <style scoped>

  @keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-animation {
  background: linear-gradient(200deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  background-size: 200% 200%;
  animation: gradient-move 2s ease infinite;
}

@keyframes rotate-scale {
  0% {
    transform: rotateY(0deg) scale(0.8);
    animation-timing-function: ease-in;
  }
  25% {
    transform: rotateY(180deg) scale(1);
    animation-timing-function: ease-out;
  }
  50% {
    transform: rotateY(360deg) scale(1.3);
    animation-timing-function: ease-in;
  }
  75% {
    transform: rotateY(540deg) scale(1);
    animation-timing-function: ease-out;
  }
  100% {
    transform: rotateY(720deg) scale(0.8);
    animation-timing-function: ease-in;
  }
}

.rotate-scale-animation {
  animation: rotate-scale 3s cubic-bezier(0.4, 0.8, 0.1, 1) infinite;
  transform-origin: center;
  backface-visibility: visible;
}


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Adjust spacing between frames */
  position: relative;
}

.frame {
  position: relative;
}

.laptop-frame {
  width: 70%; /* Adjust width for laptop frame */
  z-index: 1; /* Ensure laptop is on top */
}

.mobile-frame {
  width: 15%; /* Adjust width for mobile frame */
  position: absolute; /* Make mobile frame overlap */
  top: 50%; /* Adjust top position */
  left: 72%; /* Adjust left position */
  transform: translate(-35%, -30%); /* Center mobile frame */
  z-index: 2; /* Ensure mobile is on top */
}

.frame-img {
  width: 100%;
  height: auto;
  display: block;
  z-index: 2; /* Ensure frame image is on top */
  position: relative; /* Ensure z-index is applied */
}

.content-img {
  position: absolute;
  top: 10%; /* Adjust based on your frame's structure */
  left: 10%; /* Adjust based on your frame's structure */
  width: 80%; /* Adjust based on your frame's structure */
  height: 80%; /* Adjust based on your frame's structure */
  object-fit: fill;
  z-index: 1; /* Ensure content image is below the frame image */
}

.mobile-content-img {
  top: 2.6%; /* Adjust based on your frame's structure */
  left: 5.1%; /* Adjust based on your frame's structure */
  width: 90%; /* Adjust based on your frame's structure */
  height: 94%; /* Adjust based on your frame's structure */
  z-index: 1; /* Ensure content image is below the frame image */
}

@media (min-width: 913px) and (max-width: 1015px) {
  .mobile-content-img {
    top: 2.6%; 
    left: 5.1%; 
    width: 90%; 
    height: 94%; 
    border-radius: 12%;
  }
}

@media (min-width: 768px) and (max-width: 913px) {
  .mobile-content-img {
    top: 2.7%; 
    left: 5.1%; 
    width: 90%; 
    height: 94%; 
    border-radius: 10%;
  }
}

@media (min-width: 150px) and (max-width: 768px) {
  .mobile-content-img {
    top: 2.7%; 
    left: 5.1%; 
    width: 90%; 
    height: 94%; 
    border-radius: 10%;
  }
  .laptop-img {
    border-radius: 2%;
  }
  .laptop-frame {
  width: 100%; /* Adjust width for laptop frame */
  z-index: 1; /* Ensure laptop is on top */
}

.mobile-frame {
  width: 20%; /* Adjust width for mobile frame */
  position: absolute; /* Make mobile frame overlap */
  top: 50%; /* Adjust top position */
  left: 72%; /* Adjust left position */
  transform: translate(-35%, -30%); /* Center mobile frame */
  z-index: 2; /* Ensure mobile is on top */
}

}
.custom-hover {
  transition: font-size 0.3s ease, color 0.3s ease;
}

.custom-hover:hover {
  font-size: 1.05rem; /* Hover font size (text-xl equivalent) */
  color: #1f2937; /* Equivalent to text-slate-900 */
}

.label-transition {
  transition: all 0.3s ease-in-out;
}

@media (min-width:480px) and (max-width:548px){
  .nh-hero-sub{
    font-size: 1rem;
    line-height: 1.3rem;
  }
}
label {
  transition: background-color 0.3s ease-in-out;
}

/* The selected label will have a different background color */
.selected {
  background-color: #ffffff; /* White background for selected label */
}

@media (min-width:669px) and (max-width:708px){
  .nh-hero-sub{
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
@media (min-width:494px) and (max-width:669px){
  .nh-hero-sub{
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width:430px) and (max-width:494px){
  .nh-hero-sub{
    padding-left: 0rem;
    padding-right: 0rem;
  }
}

@media (min-width:300px) and (max-width:430px){
  .nh-hero-sub{
    padding-left: 0rem;
    padding-right: 0rem;
    margin-left: -2rem;
    margin-right: -2rem;
  }
}

  </style>
  