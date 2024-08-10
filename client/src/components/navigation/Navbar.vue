<script setup>
import { ref, onMounted } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { gsap } from 'gsap'
import logoSrc from '@/assets/images/LS logo.png'
import textSrc from '@/assets/images/LinksUs Text.png'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'TaskHub', href: '#' },
  { name: 'Blog', href: '/blog' },
]

const dropdowns = [
  {
    name: 'Use Cases',
    items: [
      { name: 'Clubs & Universities', href: '/uni' },
      { name: 'Companies & Startup', href: '/com' },
    ],
  },
  {
    name: 'Tools',
    items: [
      { name: 'Quick CV', href: '#' },
    ],
  },
]

const mobileMenuOpen = ref(false)
const openDropdown = ref(null)
const isHovered = ref(false)

const toggleDropdown = (dropdownName) => {
  openDropdown.value = openDropdown.value === dropdownName ? null : dropdownName
}

const closeDropdown = () => {
  openDropdown.value = null
}

// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
  const target = event.target
  if (!target.closest('.dropdown') && !target.closest('.dropdown-menu')) {
    closeDropdown()
  }
})

onMounted(() => {
  gsap.from('.nav-item, .dropdown-item, .cta-button', {
    x: '30%',
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    ease: 'power3.out'
  })
})
</script>

<template>
  <header class="bg-gradient-to-r from-white from-10% via-white via-30% to-white h-20 sticky top-0 left-0 right-0 z-50 inset-x-0 opacity-85" @mouseleave="closeDropdown">
    <nav class="nav flex items-center justify-between p-6 h-20 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a 
          href="/" 
          aria-current="page" 
          class="nav-item rewindlogolink inline-flex items-center relative w-inline-block w--current"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <img 
            :src="logoSrc" 
            loading="eager" 
            alt="Rewind Logo" 
            height="95" 
            width="85" 
            class="nh-icon transition-transform duration-300 transform"
            :class="isHovered ? 'scale-105 -translate-x-14' : ''"
          />
          <img 
            :src="textSrc" 
            loading="eager" 
            height="75" 
            width="75" 
            alt="Rewind" 
            id="rewind-logotype" 
            class="nh-logotype transition-transform duration-100 ease-out transform absolute opacity-0 scale-100 left-8"
            :class="isHovered ? 'opacity-100 [transform:scale(1.6)]' : 'translate-x-4'"
          />
        </a>
      </div>
      <div class="flex xlg:hidden">
        <button 
          type="button" 
          class="-m-2.5 nav-item inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" 
          @click="mobileMenuOpen = true"
          :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden xlg:flex xlg:gap-x-12 ">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="nav-item text-lg font-Poppins font-bold leading-6 text-slate-600 hover:text-slate-900 custom-hover" @mouseover="closeDropdown">{{ item.name }}</a>
        <div v-for="dropdown in dropdowns" :key="dropdown.name" class="relative dropdown w-15 h-25 font-Poppins font-bold text-slate-600 hover:text-slate-900 font-Poppins">
          <button 
            class="nav-item text-lg font-Poppins font-bold leading-6 custom-hover" 
            @mouseover="toggleDropdown(dropdown.name)" 
            @click="toggleDropdown(dropdown.name)" 
            :aria-expanded="openDropdown === dropdown.name ? 'true' : 'false'"
          >
            {{ dropdown.name }}
            <svg class="inline h-4 w-4 ml-1" :class="openDropdown === dropdown.name ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-if="openDropdown === dropdown.name" class="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg dropdown-menu">
            <div v-for="item in dropdown.items" :key="item.name" class="dropdown-item">
              <a :href="item.href" class="block px-4 py-2 text-gray-600 font-Poppins hover:bg-gray-300">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden xlg:flex xlg:flex-1 xlg:justify-end">
        <button class="cta-button hover:brightness-110 hover:animate-pulse font-Poppins font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue1 to-blue3 text-white">Get LinksUs</button>
      </div>
    </nav>
    <Dialog class="xlg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50 "  />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://res.cloudinary.com/dyghenjwh/image/upload/v1722310082/LinksUs/LS_logo1_gpohpf.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 font-popins" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6 right-8" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="nav-item -mx-3 block rounded-lg px-3 py-2 text-base font-Poppins leading-7 text-slate-600 hover:text-slate-800 hover:bg-gray-300 overflow-auto">{{ item.name }}</a>
              <div v-for="dropdown in dropdowns" :key="dropdown.name" class="relative">
                <button class="nav-item -mx-3 block rounded-lg px-3 py-2 text-base font-Poppins leading-7 text-slate-700 hover:text-slate-500" @click="toggleDropdown(dropdown.name)">
                  {{ dropdown.name }}
                </button>
                <div v-if="openDropdown === dropdown.name" class="absolute inset-x-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg dropdown-menu z-10">
                  <div v-for="item in dropdown.items" :key="item.name" class="dropdown-item">
                    <a :href="item.href" class="block px-4 py-2 text-gray-600 hover:bg-gray-300">{{ item.name }}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-6">
              <a href="#" class="cta-button -mx-3 block rounded-lg px-3 py-2.5 text-base font-Poppins leading-7 text-gray-900 hover:bg-gray-100">Get LinksUs</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style>
.nh-icon {
  transition: transform 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
}

.nh-logotype {
  transition: opacity 0.3s ease-out,
              transform 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
}

@media (min-width: 1015px) {
  .nav {
    padding-left: 120px;
    padding-right: 120px;
  }
}

.nav {
  -webkit-font-smoothing: antialiased;
}

.custom-hover {
  transition: font-size 0.3s ease, color 0.3s ease;
}

.custom-hover:hover {
  font-size: 1.25rem; /* Hover font size (text-xl equivalent) */
  color: #1f2937; /* Equivalent to text-slate-900 */
}

</style>
