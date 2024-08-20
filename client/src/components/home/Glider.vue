<template>
    <section class="nh-wrap testimonialcarousel">
      <div class="nh-social-proof-wrap w-embed">
        <div class="carousel glide">
          <div class="carousel-title">
            <h3 class="nh-sm-headline font-squada flex justify-center items-start text-center">
              Undergrads are linking seamlessly with companies via LinksUs
            </h3>
            <!-- <div class="carousel-controls" data-glide-el="controls">
              <button class="prev" data-glide-dir="<">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z" fill="currentColor"/>
                </svg>
              </button>
              <button class="next" data-glide-dir=">">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentColor"/>
                </svg>
              </button>
            </div> -->
          </div>
  
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides nh-sp-testimonials">
              <li class="glide__slide testimonial">
                <blockquote class="font-Lora">
                  LinksUs has been a game-changer for me! The real-world tasks and industry insights helped me gain practical experience and land my dream internship.
                </blockquote>
                <p class="author">
                  <span class="name font-popins">Michael</span>
                  <span class="company font-popins">Student</span>
                </p>
                <img class="avatar" src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bc4e93fa9c2b4c2d947f0a_elad-av.jpg" />
              </li>
              <li class="glide__slide testimonial">
                <blockquote class="font-Lora">
                  I never thought I could get such valuable exposure while still in university. Thanks to LinksUs, I feel confident stepping into the industry.
                </blockquote>
                <p class="author">
                  <span class="name font-popins">Alexis Ohanian</span>
                </p>
                <img class="avatar" src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bc4e93b9c30f67192c2bf8_alexis-av.jpg" />
              </li>
              <li class="glide__slide testimonial">
                <blockquote class="font-Lora">
                  Working with talented students through LinksUs not only reduced our hiring costs but also brought fresh perspectives and innovative solutions to our projects.
                </blockquote>
                <p class="author">
                  <span class="name font-popins">XYZ Tech</span>
                </p>
                <img class="avatar" src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bde966be4c261139ada397_sama-av.jpg" />
              </li>
              <li class="glide__slide testimonial">
                <blockquote class="font-Lora">
                  LinksUs has been instrumental in connecting us with motivated undergraduates. It's a win-win for us and the students!
                </blockquote>
                <p class="author">
                  <span class="name font-popins">Startup Ventures Inc.</span>
                </p>
                <img class="avatar" src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bedeac310a7840bd2f9cb7_davidlieb-av.jpg" />
              </li>
              <li class="glide__slide testimonial">
                <blockquote class="font-Lora">
                  Working at LinksUs helped me grow in graphic design and corporate culture, supported by a cheerful team and an inspiring founder.
                </blockquote>
                <p class="author">
                  <span class="name font-popins">Nandini</span>
                  <span class="company font-popins">Student</span>
                </p>
                <img class="avatar" src="../../assets/images/glider-student.jpg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue'
import Glide from '@glidejs/glide'

let glide

onMounted(() => {
  const carouselElement = document.querySelector('.glide');
  const glideSlides = carouselElement.querySelector('.glide__slides');
  
  // Clone the first and last slides
  const slidesArray = Array.from(glideSlides.children);
  slidesArray.forEach(slide => {
    const clonedSlide = slide.cloneNode(true);
    glideSlides.appendChild(clonedSlide);
  });

  // Clone slides to the beginning of the list
  slidesArray.reverse().forEach(slide => {
    const clonedSlide = slide.cloneNode(true);
    glideSlides.insertBefore(clonedSlide, glideSlides.firstChild);
  });

  // Initialize Glide carousel with infinite looping
  glide = new Glide(carouselElement, {
    type: 'carousel',
    startAt: slidesArray.length, // Start at the first cloned original slide
    perView: 3,
    focusAt: 'center',
    animationDuration: 1000,
    rewind: true, // Disable the default rewind
    breakpoints: {
      768: {
        perView: 1
      }
    }
  }).mount();

  // Add continuous scroll effect
  glideSlides.classList.add('continuous-scroll');

  // Function to pause the animation
  const pauseAnimation = () => {
    glideSlides.style.animationPlayState = 'paused';
  };

  // Function to resume the animation
  const resumeAnimation = () => {
    glideSlides.style.animationPlayState = 'running';
  };

  // Add event listeners to pause animation on click and hold
  carouselElement.addEventListener('mousedown', pauseAnimation);
  carouselElement.addEventListener('touchstart', pauseAnimation);

  // Resume animation when the user releases the click or touch
  carouselElement.addEventListener('mouseup', resumeAnimation);
  carouselElement.addEventListener('touchend', resumeAnimation);


  // Adjust Glide after transition to maintain the seamless loop
  glide.on('run.after', () => {
    const totalSlides = glideSlides.children.length;
    if (glide.index === totalSlides - slidesArray.length) {
      glide.go(`=${slidesArray.length}`); // Jump to the original start slide
    } else if (glide.index === 0) {
      glide.go(`=${totalSlides - 2 * slidesArray.length}`); // Jump to the original end slide
    }
  });
});

onUnmounted(() => {
  if (glide) glide.destroy();
});


  </script>
  
  <style scoped>
  @import '@glidejs/glide/dist/css/glide.core.min.css';
  @import '@glidejs/glide/dist/css/glide.theme.min.css';

  body {
            overflow-x: hidden;
          }
    
          .glide {
            position: relative;
            width: 100%;
            box-sizing: border-box;
            
          }
    
          .glide * {
            box-sizing: inherit;
          }
    
          .glide__slides--dragging {
            user-select: none;
          }
    
          .glide__slide {
            width: 100%;
            height: 100%;
            flex-shrink: 0;
            white-space: initial;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
          }
    
          .glide__slide a {
            user-select: none;
            -webkit-user-drag: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }
    
          .glide--swipeable {
            cursor: grab;
            cursor: -moz-grab;
            cursor: -webkit-grab;
          }
    
          .glide--dragging {
            cursor: grabbing;
            cursor: -moz-grabbing;
            cursor: -webkit-grabbing;
          }
    
          .nh-sp-testimonials {
            position: relative;
            width: 100%;
            list-style: none;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            touch-action: pan-Y;
            overflow: hidden;
            white-space: nowrap;
            display: flex;
            flex-wrap: nowrap;
            will-change: transform;
            padding: 2.5rem 0;
          }
    
          .carousel-title {
            display: grid;
            grid-template-columns: 1fr 100px;
          }
    
          .nh-sm-headline {
            padding: 2rem;
            font-size: 2.2rem;
            padding-left: 9rem;
            font-weight: 500;
            line-height: 1.2;
            color: #898476;
            letter-spacing: -0.5px;
          }
    
          .carousel-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 26px;
  line-height: 0;
  transform: translate(-250%, 80%);
  

}
@media (min-width: 935px) and (max-width: 1200px) {
  .carousel-controls {
    /* Adjust the transform property for smaller screens */
    transform: translate(-30%, 80%);
  }
}
@media (min-width: 100px) and (max-width: 935px) {
  .carousel-controls {
    /* Adjust the transform property for smaller screens */
    display: inline;
    justify-content: center;
    align-items: center;

  }
}
    
          @media (hover: none) {
            .carousel {
              overflow: hidden;
            }
          }
    
          @media (min-width: 935.1px) and (max-width: 1100px) {
            .nh-wrap.testimonialcarousel {
              padding: 0 2rem;
            }
          }
    
          @media (max-width: 935px) {
            .carousel {
              transform: none;
            }
    
            .carousel-title h3.nh-sm-headline {
              font-size: 2rem;
              text-align: center;
              padding-left: 2rem;
            }
    
            .carousel-title {
              display: block;
              transform: none;
              text-align: center;
              max-width: 85%;
              margin: 0 auto;
            }
          }
    
          @media (min-width: 550px) and (max-width: 735px) {
            .carousel-title h3.nh-sm-headline {
              font-size: 1.9rem;
            }
          }
    
          @media (max-width: 550px) {
            .carousel-title h3.nh-sm-headline {
              font-size: 1.75rem;
            }
          }
    
          
    
          .carousel-controls button:hover {
            transform: scale(1.075);
            box-shadow: 0 2px 8px rgba(208, 200, 187, 0.4);
          }
    
          .carousel-controls button:hover svg path {
            fill: #7a7363;
          }
    
          .carousel-controls button svg {
            width: 2rem;
            height: 2rem;
          }
    
          .carousel-controls button svg path {
            fill: #a59c89;
          }
    
          .testimonial {
            user-select: none;
            -moz-user-select: none;
            flex-shrink: 0;
            line-height: 1;
            margin: 0 1rem;
            min-height: 200px;
            border-radius: 20px;
            background: white;
            border: 1px solid rgba(194, 184, 169, 0.5);
            box-shadow: 0 4px 11px rgba(208, 200, 187, 0.33);
            position: relative;
            padding: 1.5rem 3.25rem 3rem 3.5rem;
            line-height: 1.25;
            white-space: normal;
            transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
            max-width: calc(100% - 6rem); /* Ensure it fits within the screen */
          }
    
          .testimonial blockquote {
            margin: 0;
            font-size: 1.4rem;
            position: relative;
            border-left: none;
            padding: 0;
            line-height: 1.15;
            color: #595653;
            letter-spacing: -0.25px;
            font-weight: 500;
          }
    
          .testimonial blockquote:after {
            position: absolute;
            content: "“";
            display: block;
            top: -0.6rem;
            left: -2.1rem;
            line-height: 1;
            font-size: 3.5rem;
            font-weight: 600;
            color: #b1a2945e;
          }
    
          .testimonial p.author {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.1;
  position: absolute;
  bottom: 0.5rem;
  left: 4rem;
}
    
          .testimonial p.author .name {

            font-weight: 600;
            margin-right: 0.3rem;
            color: #595653;
          }
    
          .testimonial p.author .company {

            font-weight: 600;
            color: rgba(92, 84, 76, 0.54);
            font-size: 1rem;
          }
    
          .testimonial .avatar {
  position: absolute;
  bottom: -0.75rem;
  left: -0.75rem;
  border-radius: 100px;
  width: 60px;
  height: 60px;
  background: white;
  border: 4px solid white;
  box-shadow: 0 4px 11px rgba(208, 200, 187, 0.33);
}
    
          .testimonial:hover {
            box-shadow: 0 4px 11px rgba(208, 200, 187, 0.5);
          }
          
    
          @media (max-width: 450px) {
            .testimonial {
              padding: 1.5rem 2.25rem 4.5rem 3.25rem;
              min-height: 200px; /* Adjust min-height for smaller screens */
              max-height: 200px; /* Adjust max-height for smaller screens */
            }
    
            .testimonial .avatar {
              width: 50px;
              height: 50px;
            }
    
            .testimonial p.author .company {
              display: block;
              margin-top: 0.2rem;
            }
    
            .nh-sp-testimonials {
              margin-left: 10px;
            }
          }

          @media (min-width:965px) and (max-width: 1391px) {
  .testimonial {
    padding: 1.5rem 2.25rem 4.5rem 3.25rem;
    min-height: 310px; /* Adjust min-height for smaller screens */
    max-height: 310px; /* Adjust max-height for smaller screens */
  }

  .testimonial .avatar {
    width: 50px;
    height: 50px;
  }
}
.glide__slides {
  display: flex;
  overflow: hidden;
}

@media (min-width:769px) and (max-width: 965px) {
  .testimonial {
    padding: 1.5rem 2.25rem 4.5rem 3.25rem;
    min-height: 400px; /* Adjust min-height for smaller screens */
    max-height: 400px; /* Adjust max-height for smaller screens */
  }

  .testimonial .avatar {
    width: 50px;
    height: 50px;
  }
}

@media (min-width:445px) and (max-width: 769px) {
  .testimonial {
    padding: 1.5rem 2.25rem 4.5rem 3.25rem;
    min-height: 210px; /* Adjust min-height for smaller screens */
    max-height: 210px; /* Adjust max-height for smaller screens */
  }

  .testimonial .avatar {
    width: 50px;
    height: 50px;
  }
}
@media (min-width:285px) and (max-width: 445px) {
  .testimonial {
    padding: 1.5rem 2.25rem 4.5rem 3.25rem;
    min-height: 290px; /* Adjust min-height for smaller screens */
    max-height: 290px; /* Adjust max-height for smaller screens */
  }

  .testimonial .avatar {
    width: 50px;
    height: 50px;
  }
}

.glide__slides {
  display: flex;
  overflow: hidden;
}


@keyframes continuous-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.continuous-scroll {
  animation: continuous-scroll 80s linear infinite;
}
  </style>
  