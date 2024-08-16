<template>
  <div class="h-auto w-auto flex flex-col justify-center items-center bg-gray-900 px-4 pb-32 pt-16">
    <form v-if="!additionalInfoVisible" @submit.prevent="handleSubmit" class="flex flex-col gap-4 bg-gray-800 bg-opacity-60 rounded-2xl p-6 sm:p-8 md:p-12 w-full max-w-md sm:max-w-lg lg:max-w-xl">
      <div class="flex items-center justify-center mb-4">
        <img src="../assets/images/LS logo.png" alt="Logo" class="h-24 sm:h-28 md:h-32" />
        <h1 class="text-white text-xl sm:text-2xl md:text-3xl uppercase font-squada pr-4 sm:pr-6">LinksUs</h1>
      </div>
      <input
        v-model="form.username"
        type="text"
        placeholder="Username"
        name="username"
        class="bg-transparent p-3 sm:p-4 border font-squada border-blue1 rounded-md text-white text-sm sm:text-lg focus:border-blue2 focus:outline-none w-full"
      />
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        name="email"
        class="bg-transparent p-3 sm:p-4 border font-squada border-blue1 rounded-md text-white text-sm sm:text-lg focus:border-blue2 focus:outline-none w-full"
      />
      <input
        v-model="form.password"
        type="password"
        placeholder="Password"
        name="password"
        class="bg-transparent p-3 sm:p-4 border font-squada border-blue1 rounded-md text-white text-sm sm:text-lg focus:border-blue2 focus:outline-none w-full"
      />
      <input
        v-model="form.confirmPassword"
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        class="bg-transparent p-3 sm:p-4 border font-squada border-blue1 rounded-md text-white text-sm sm:text-lg focus:border-blue2 focus:outline-none w-full"
      />
      <button
        type="submit"
        class="bg-blue1 text-white p-3 sm:p-4 font-squada rounded-md font-bold cursor-pointer text-sm sm:text-lg uppercase transition-all duration-500 ease-in-out hover:bg-blue2"
      >
        Submit
      </button>
      <span class="text-white font-squada uppercase text-xs sm:text-sm">
        Already have an account?
        <router-link to="/login" class="text-blue2 font-bold">Login</router-link>
      </span>
    </form>

    <!-- Additional Information Form -->
    <div v-if="additionalInfoVisible" @submit.prevent="handleAdditionalInfo" class="h-auto w-auto flex flex-col justify-center items-center bg-gray-900 px-4 pb-32 pt-16">
  <form class="flex flex-col gap-4 bg-gray-800 bg-opacity-60 rounded-2xl p-6 sm:p-8 md:p-12 w-full max-w-md sm:max-w-lg lg:max-w-xl relative pb-20">
    <h2 class="text-white text-lg sm:text-xl md:text-2xl uppercase font-squada mb-4">Additional Information</h2>
    <input
      v-model="additionalForm.address"
      type="text"
      placeholder="Address"
      name="address"
      class="bg-transparent p-3 sm:p-4 border font-squada border-blue1 rounded-md text-gray-100 text-sm sm:text-lg focus:border-blue2 focus:outline-none w-full"
    />
    <input
      v-model="additionalForm.phone"
      type="text"
      placeholder="Phone Number"
      name="phone"
      class="bg-transparent p-3 sm:p-4 border font-squada border-blue1 rounded-md text-gray-100 text-sm sm:text-lg focus:border-blue2 focus:outline-none w-full"
    />
    <!-- Domain Selection Dropdown -->
    <div class="relative">
  <label for="domain" class="text-white bg-transparent font-squada mb-2">Domain</label>
  <select
    id="domain"
    name="domain"
    v-model="additionalForm.domain"
    required
    class="bg-transparent p-3 sm:p-4 border font-squada border-blue1 rounded-md text-white text-sm sm:text-lg focus:border-blue2 focus:outline-none w-full max-h-32 overflow-y-auto custom-dropdown"
  >
    <option value="" disabled selected class="text-gray-800">Select your domain</option>
    <option value="Web Development" class="text-gray-800">Web Development</option>
    <option value="Mobile App Development" class="text-gray-800">Mobile App Development</option>
    <option value="Game Development" class="text-gray-800">Game Development</option>
    <option value="Software Engineering" class="text-gray-800">Software Engineering</option>
    <option value="Data Science" class="text-gray-800">Data Science</option>
    <option value="Machine Learning" class="text-gray-800">Machine Learning</option>
    <option value="Computer Vision" class="text-gray-800">Computer Vision</option>
    <option value="Natural Language Processing" class="text-gray-800">Natural Language Processing</option>
    <option value="Business Intelligence" class="text-gray-800">Business Intelligence</option>
    <option value="Database Management" class="text-gray-800">Database Management</option>
    <option value="Cybersecurity" class="text-gray-800">Cybersecurity</option>
    <option value="Cloud Computing" class="text-gray-800">Cloud Computing</option>
    <option value="DevOps" class="text-gray-800">DevOps</option>
    <option value="Software Testing" class="text-gray-800">Software Testing</option>
    <option value="Blockchain" class="text-gray-800">Blockchain</option>
    <option value="Internet of Things" class="text-gray-800">Internet of Things</option>
    <option value="UI/UX Design" class="text-gray-800">UI/UX Design</option>
    <option value="Graphic Design" class="text-gray-800">Graphic Design</option>
    <option value="Motion Graphic Design" class="text-gray-800">Motion Graphic Design</option>
    <option value="Content Writer" class="text-gray-800">Content Writer</option>
    <option value="Digital Marketing" class="text-gray-800">Digital Marketing</option>
    <option value="Business Development" class="text-gray-800">Business Development</option>
    <option value="Marketing and Advertising" class="text-gray-800">Marketing and Advertising</option>
    <option value="Sales" class="text-gray-800">Sales</option>
    <option value="Human Resources" class="text-gray-800">Human Resources</option>
    <option value="Finance and Accounting" class="text-gray-800">Finance and Accounting</option>
    <option value="Mass Communication" class="text-gray-800">Mass Communication</option>
    <option value="Video Editing" class="text-gray-800">Video Editing</option>
  </select>
</div>
    <button
      type="submit"
      class="bg-purple-400 text-white p-3 sm:p-4 font-squada rounded-md font-bold cursor-pointer text-sm sm:text-lg uppercase transition-all duration-500 ease-in-out hover:bg-purple-600"
    >
      Submit Additional Info
    </button>
  </form>
</div>
    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const additionalForm = ref({
  address: '',
  phone: '',
  domain: ''
})

const errorMessage = ref('')
const additionalInfoVisible = ref(false)

const handleSubmit = () => {
  // Reset error message
  errorMessage.value = ''

  // Basic validation
  if (!form.value.username || !form.value.email || !form.value.password || !form.value.confirmPassword) {
    errorMessage.value = 'All fields are required.'
    toast.error('All fields are required.')
    return
  }
  
  if (form.value.password !== form.value.confirmPassword) {
    errorMessage.value = 'Passwords do not match.'
    toast.error('Passwords do not match.')
    return
  }

  // Form submission logic
  toast.success('User created successfully!')

  // Show the additional information form
  additionalInfoVisible.value = true
}

const handleAdditionalInfo = () => {
  // Basic validation for additional info
  if (!additionalForm.value.address || !additionalForm.value.phone || !additionalForm.value.domain) {
    errorMessage.value = 'All fields are required.'
    toast.error('All fields are required.')
    return
  }

  // Additional form submission logic
  toast.success('Additional fields submitted successfully!')
  
  // After submission, clear the additional form
  additionalForm.value.address = ''
  additionalForm.value.phone = ''
  additionalForm.value.domain = ''
}
</script>


<style scoped>
/* No additional scoped styles needed */
.custom-dropdown {
  position: relative;
}

.custom-dropdown::-ms-expand {
  display: none; /* Hide the default dropdown arrow in IE */
  
}

/* Adjust the dropdown height */
.custom-dropdown option {
  background-color: #1f2937; /* Match the background color if needed */
}

/* Ensure the dropdown content height is constrained */
.custom-dropdown option {
  max-height: 100px; /* Set desired height */
  overflow-y: hidden; /* Enable vertical scroll if needed */
}

/* For better visibility */
.custom-dropdown option {
  color: #e5e7eb; /* Text color */
  background-color: #374151; /* Background color for options */
}

/* You can also use this to add custom styling for the selected item */
.custom-dropdown option:checked {
  background-color: #4f46e5; /* Background color for selected item */
  color: #ffffff; /* Text color for selected item */
}
</style>
