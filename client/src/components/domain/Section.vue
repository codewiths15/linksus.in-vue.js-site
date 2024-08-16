<template>

<section class="flex justify-center items-center mt-16">
    <h1 class="domain-h1 text-6xl text-center font-Lora font-semibold text-gray-800 max-lg:text-4xl">
        Join Our Pilot Project
    </h1>
  </section>
  <div class="flex justify-center items-center mt-16">
    <h1 class="domain2-h1 text-xl text-center font-Lora font-semibold text-gray-700 max-md:text-lg">
        Are you ready to revolutionize the way undergraduates gain industry <br> experience and get companies find your talent? Join our pilot project <br>
        now!
    </h1>
  </div>
  <div class="flex justify-center items-center mt-10">
  <a href="/signup" class="domain-btn inline-block">
    <button class="hover:brightness-110 hover:animate-pulse font-Lora font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue1 to-blue3 text-white">
      Sign Up
    </button>
  </a>
</div>
<div class="content-y flex justify-center items-center mt-16">
    <iframe
      src="https://www.youtube.com/embed/hGxoQuBTrnU?si=F5WcTjUuuzsMKnbG;controls=0&amp;autoplay=0&amp;mute=0&amp;start=0"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      title="LinksUs Launch"
      class="w-full max-w-4xl h-72 md:h-96 lg:h-[32rem] border-8 border-gray-300 rounded-lg shadow-lg">
    </iframe>
  </div>
  <section class="py-12 mt-32">
    <div class="container mx-auto max-w-5xl">
        <div class="text-center mb-10">
            <h2 class="domain3-h1 lg:text-5xl text-3xl font-Lora font-bold text-gray-800">Benefits for Students</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="carde1 flex items-start p-4 bg-whiteo rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" class="mr-3">
                    <path fill="#5a5858"
                        d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z" />
                </svg>
                <div>
                    <h3 class="text-lg font-Lora font-semibold text-gray-700 mb-2">Real-world Industry Experience</h3>
                    <p class="text-gray-600 font-Lora text-sm">
                        Gain real-world industry experience.<br>
                        Connect with mentors and industry professionals.
                    </p>
                </div>
            </div>
            <div class="carde2 flex items-start p-4 bg-whiteo rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" class="mr-3">
                    <g fill="none" stroke="#5a5858" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
                        <path d="M13 17.5V22l2-1.5l2 1.5v-4.5" />
                        <path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2" />
                    </g>
                </svg>
                <div>
                    <h3 class="text-lg font-semibold font-Lora text-gray-700 mb-2">Certificates & Professional Profile</h3>
                    <p class="text-gray-600 font-Lora text-sm">
                        Earn certificates and build a professional profile.
                    </p>
                </div>
            </div>
            <div class="carde3 flex items-start p-4 bg-whiteo rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" class="mr-3">
                    <path fill="#5a5858"
                        d="M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83z" />
                    <path fill="#5a5858"
                        d="M11.38 17.41c.39.39.9.59 1.41.59c.51 0 1.02-.2 1.41-.59l6.21-6.21c.78-.78.78-2.05 0-2.83L12.62.58C12.25.21 11.74 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41zM5 2h6.21L19 9.79L12.79 16L5 8.21z" />
                    <circle cx="7.25" cy="4.25" r="1.25" fill="#5a5858" />
                </svg>
                <div>
                    <h3 class="text-lg font-semibold font-Lora text-gray-700 mb-2">Post-launch Discount</h3>
                    <p class="text-gray-600 font-Lora text-sm">
                        Avail a 40% discount on platform usage fees post-launch.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="our-team" class="py-6 mt-10">
  <section class="text-center mx-auto px-2 max-w-4xl flex flex-col justify-center items-center">
    <p class="text-3xl lg:text-5xl md:text-4xl font-semibold mb-4 font-Lora">Opportunities Across Various Domains</p>
    
    <div class="flex flex-wrap justify-center mt-6 space-x-2 relative">
      <div
        v-for="cat in categories"
        :key="cat"
        class="py-1 px-2 cursor-pointer font-semibold text-gray-600 text-lg font-Lora transition-all duration-300 hover:text-blue-600"
        @click="filterBlogs(cat)"
      >
        {{ cat }}
      </div>
    </div>
    
    <div class="mt-6 w-full min-h-[900px] flex flex-wrap gap-6 justify-center">
      <div v-if="visibleCards.length > 0">
        <div v-for="card in visibleCards" :key="card.id" class="bg-whiteo shadow-lg hover:shadow-xl rounded-lg font-Lora p-8 m-8 text-left max-w-7xl transition-transform duration-300">
          <img :src="card.image" :alt="card.alt" class="w-24 h-24 object-cover rounded-full mb-4 mx-auto">
          <h2 class="text-2xl font-semibold mb-8 text-center">{{ card.title }}</h2>
          <div v-html="card.content" class="text-gray-700 text-sm leading-relaxed"></div>
        </div>
      </div>
      <div v-else>
        <p class="text-xl text-gray-700">No content available for this category.</p>
      </div>
    </div>
    
    <button
      v-if="visibleCount < filteredCards.length"
      @click="loadMore"
      class="mt-6 px-4 py-2 bg-blue-600 text-whiteo rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700"
    >
      Load More
    </button>
  </section>
</section>



<section class="flex justify-center items-center mt-16 px-4 sm:px-8 lg:px-16">
  <div class="bg-white rounded-3xl shadow-md max-w-3xl w-full text-center p-8 sm:p-16 md:p-20 bg-opacity-60 hover:bg-opacity-80">
    <div class="text-4xl sm:text-5xl md:text-6xl font-Lora font-bold mb-4">Get Started!</div>
    <p class="text-gray-700 text-base sm:text-lg md:text-xl mb-6 font-Lora">
      Jumpstart your career by joining our community and gaining valuable industry experience. Join us today!
    </p>
    <a href="/signup" class="block font-Lora">
    <button class="hover:brightness-110 hover:animate-pulse font-Poppins font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue1 to-blue3 text-white">
      Sign up
    </button>
    </a>
  </div>
</section>

<section class="py-12 mt-24">
  <div class="text-center">
    <h1 class="recog-h1 text-5xl font-Lora font-semibold text-gray-800 mb-4">Recognized By</h1>
    <p class="recog-p text-gray-700 text-xl mb-8 mt-8">Our platform is appreciated and recognized by DPIIT, #startupindia, <br> and MSME.</p>
    <div class="flex lg:flex-wrap justify-center items-center lg:space-x-24 md:space-x-16 space-x-8 mt-16">
      <a href="https://dpiit.gov.in/" target="_blank" class="mb-4 brightness-50 transform transition-transform duration-300 hover:brightness-75 recog-a">
        <img src="../../assets/images/750x450_483231-dpiit-removebg-preview1.png" loading="lazy" width="100" height="53" alt="DPIIT Logo" class="h-auto logos" />
      </a>
      <a href="https://www.startupindia.gov.in/" target="_blank" class="mb-4 brightness-75 transform transition-transform duration-300 hover:brightness-110 recog-a">
        <img src="../../assets/images/images111-removebg-preview.png" loading="lazy" width="223" alt="Startup India Logo" class="h-auto logos" />
      </a>
      <a href="https://msme.gov.in/" target="_blank" class="mb-4 brightness-50 transform transition-transform duration-300 hover:brightness-110 recog-a">
        <img src="../../assets/images/images-removebg-preview.png" loading="lazy" width="120" alt="MSME Logo" class="h-auto logos" />
      </a>
    </div>
  </div>
</section>
</template>

<script setup>
import { ref, computed } from 'vue';
import webdev from '../../assets/images/web-dev.png';
import mobiledev from '../../assets/images/mobile-development.png';
import datasci from '../../assets/images/data-science-logo.png';
import machinelearning from '../../assets/images/machinelearning.png'
import compvision from '../../assets/images/comp-vision.png';
import nlp from '../../assets/images/nlp.png';
import cyber from '../../assets/images/cybersecurity-icon-img-1.png';
import cloud from '../../assets/images/cloud.png';
import blockchain from '../../assets/images/block-chain.png';
import iot from '../../assets/images/iot.webp';
import devops from '../../assets/images/devops.webp';
import bussiness_intelli from '../../assets/images/bussiness_intelli.png';
import game from '../../assets/images/game-dev.jpeg';
import software from '../../assets/images/soft-engi.png';
import dbms from '../../assets/images/dbms.png';
import softtest from '../../assets/images/soft-test.png';
import ui from '../../assets/images/ui-ux.webp';
import digital from '../../assets/images/digital-market.png';
import business from '../../assets/images/bussiness-dev.png';
import market from '../../assets/images/marketing.jpg';
import sales from '../../assets/images/sales.webp';
import hr from '../../assets/images/hr.webp';
import accounting from '../../assets/images/accounting-icon.jpg';
import content from '../../assets/images/content-write.png';
import mass from '../../assets/images/mass-communication.png';
import design from '../../assets/images/graphic-design-icon.png';
import motion from '../../assets/images/motion-design.png';
import video from '../../assets/images/video-edit.png';

// Example categories and card data
const categories = ['Development', 'Data and AI', 'Cybersecurity and IT', 'Emerging Technologies', 'Design and UX', 'Marketing and Management'];
const cards = ref([
  {
    id: 'blog1',
    title: 'Web Development',
    image: webdev,
    alt: 'Web Development',
    content: `
      <h2 class="text-xl font-bold text-gray-900 mb-2">Front-end Development</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> HTML/CSS basics, JavaScript fundamentals</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Responsive design, JavaScript frameworks (React, Angular)</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Progressive Web Apps (PWA), performance optimization, advanced animations</li>
</ol>

<h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Back-end Development</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Server basics, basic CRUD operations</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> RESTful APIs, authentication and authorization</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Microservices architecture, real-time applications, scalability</li>
</ol>

<h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Full-stack Development</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Simple full-stack applications using MERN or MEAN stack</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Integrating third-party services, state management</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> DevOps practices for deployment, serverless architecture</li>
</ol>
    `,
    category: 'Development'
  },
 
  // New cards
  {
    id: 'blog2',
    title: 'Mobile App Development',
    image: mobiledev,
    alt: 'Mobile App Development',
    content: `
      <h2 class="text-xl font-bold text-gray-900 mb-2">iOS Development</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Swift basics, simple UI with Storyboard</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Networking with URLSession, CoreData</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced animations, ARKit</li>
</ol>

<h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Android Development</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Java/Kotlin basics, simple UI with XML</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> RecyclerView, Room database</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Jetpack Compose, advanced concurrency (Coroutines)</li>
</ol>

<h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Cross-Platform Development</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Basic Flutter/Dart, simple cross-platform app</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> State management (Provider, Bloc)</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Integrating native modules, performance optimization</li>
</ol>
    `,
    category: 'Development'
  },
  {
    id: 'blog3',
    title: 'Data Science',
    image: datasci,
    alt: 'Data Science',
    content: `
      <h2 class="text-xl font-bold text-gray-900 mb-2">Data Analysis</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Python/R basics, data manipulation with pandas</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Data visualization with matplotlib/seaborn</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Statistical analysis, time series analysis</li>
</ol>

<h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Data Engineering</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> ETL basics, SQL fundamentals</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Data pipeline development, working with big data tools (Hadoop, Spark)</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Data warehousing, real-time data processing</li>
</ol>

<h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Data Visualization</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Basic plots in matplotlib, introductory Tableau</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Interactive visualizations with Plotly, advanced Tableau</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Custom dashboards, storytelling with data</li>
</ol>
    `,
    category: 'Data and AI'
  },
  {
    id: 'blog4',
    title: 'Machine Learning',
    image: machinelearning,
    alt: 'Machine Learning',
    content: `
      <h2 class="text-xl font-bold text-gray-900 mb-2">Supervised Learning</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Linear regression, classification with decision trees</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Support vector machines, ensemble methods</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Hyperparameter tuning, model interpretability</li>
</ol>

<h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Unsupervised Learning</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> K-means clustering, PCA</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Hierarchical clustering, t-SNE</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Anomaly detection, advanced clustering techniques</li>
</ol>

<h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Deep Learning</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of neural networks, simple feedforward networks</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs)</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Generative Adversarial Networks (GANs), transformer models</li>
</ol>
    `,
    category: 'Data and AI'
  },
  {
    id: 'blog5',
    title: 'Computer Vision',
    image: compvision,
    alt: 'Computer Vision',
    content: `
      <h2 class="text-xl font-bold text-gray-900 mb-2">Image Processing</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of OpenCV, image transformations</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Feature detection, image filtering</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Image stitching, 3D reconstruction</li>
</ol>

<h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Object Detection and Recognition</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Simple object detection (Haar cascades)</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> YOLO, SSD implementations</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced models like Faster R-CNN, Mask R-CNN</li>
</ol>

<h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Image Generation</h2>
<ol class="text-left list-decimal list-inside space-y-1">
  <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of GANs</li>
  <li><span class="font-semibold text-gray-800">Intermediate:</span> Implementing DCGAN</li>
  <li><span class="font-semibold text-gray-800">Advanced:</span> StyleGAN, image-to-image translation</li>
</ol>
    `,
    category: 'Data and AI'
  },
  {
  id: 'blog6',
  title: 'Natural Language Processing',
  image: nlp,
  alt: 'Natural Language Processing',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Text Processing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Tokenization, basic text preprocessing</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Named Entity Recognition (NER), sentiment analysis</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced text embeddings, transformers (BERT, GPT)</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Machine Translation</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basic seq2seq models</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Attention mechanisms</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Transformer models for translation</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Speech Recognition</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of ASR, simple models</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Improving accuracy with larger datasets</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced ASR systems like DeepSpeech</li>
    </ol>
  `,
  category: 'Data and AI'
},
{
  id: 'blog7',
  title: 'Cybersecurity',
  image: cyber,
  alt: 'Cybersecurity',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Network Security</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basic networking concepts, firewalls</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Network intrusion detection, VPNs</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced threat protection, network forensics</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Application Security</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> OWASP top 10, secure coding practices</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Static and dynamic analysis, penetration testing</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced code review, application security architecture</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Cloud Security</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of cloud services, cloud security fundamentals</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Cloud access security brokers (CASB), cloud security best practices</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced cloud security architecture, securing multi-cloud environments</li>
    </ol>
  `,
  category: 'Cybersecurity and IT'
},
{
  id: 'blog8',
  title: 'Cloud Computing',
  image: cloud,
  alt: 'Cloud Computing',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Cloud Infrastructure</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of AWS/Azure/GCP, setting up virtual machines</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Networking in the cloud, storage solutions</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Infrastructure as Code (Terraform), hybrid cloud solutions</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Cloud Services</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Using basic cloud services (Lambda, Cloud Functions)</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Managed databases, container orchestration (Kubernetes)</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Serverless architecture, cloud-native application development</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Cloud Security</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of cloud security, shared responsibility model</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Cloud security best practices, compliance</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced threat detection in the cloud, cloud security posture management</li>
    </ol>
  `,
  category: 'Cybersecurity and IT'
},
{
  id: 'blog9',
  title: 'Blockchain',
  image: blockchain,
  alt: 'Blockchain',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Blockchain Basics</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Understanding blockchain technology, simple transactions</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Smart contract development (Solidity)</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Building decentralized applications (DApps), scaling solutions</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Cryptocurrencies</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basic concepts of Bitcoin/Ethereum, wallets</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Implementing transactions, understanding mining</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Creating a custom cryptocurrency, advanced consensus algorithms</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Enterprise Blockchain</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of Hyperledger, simple blockchain networks</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Chaincode development, integrating blockchain with enterprise systems</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced use cases (supply chain, finance), blockchain interoperability</li>
    </ol>
  `,
  category: 'Emerging Technologies'
},
{
  id: 'blog10',
  title: 'Internet of Things',
  image: iot,
  alt: 'Internet of Things',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">IoT Devices</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of sensors and actuators, simple Arduino projects</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Raspberry Pi projects, basic IoT protocols (MQTT, CoAP)</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Custom hardware development, advanced protocol implementations</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">IoT Networking</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of IoT networking, simple LAN setups</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> IoT cloud platforms, network security for IoT</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Edge computing, advanced IoT network architectures</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">IoT Data</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Collecting data from IoT devices, basic data storage</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Real-time data processing, data analytics for IoT</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Integrating IoT data with big data platforms, predictive analytics</li>
    </ol>
  `,
  category: 'Emerging Technologies'
},
{
  id: 'blog11',
  title: 'DevOps',
  image: devops,
  alt: 'DevOps',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Continuous Integration (CI)</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of CI, setting up a CI pipeline</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Automated testing, integrating CI with version control</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced CI tools (Jenkins, GitLab CI), CI for microservices</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Continuous Deployment (CD)</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of CD, simple deployment pipelines</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Blue-green deployments, rolling updates</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced CD practices, CD for complex environments</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Infrastructure as Code (IaC)</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of IaC, simple scripts</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Using Terraform/CloudFormation</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced IaC practices, policy as code</li>
    </ol>
  `,
  category: 'Cybersecurity and IT'
},
{
  id: 'blog12',
  title: 'Business Intelligence',
  image: bussiness_intelli,
  alt: 'Business Intelligence',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Data Warehousing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of data warehousing, ETL processes</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Data warehouse design, data modeling</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced ETL processes, data warehouse optimization</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Data Reporting</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of reporting, creating simple reports</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced reporting tools (Tableau, Power BI)</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Custom report development, automated reporting</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Data Analysis</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of data analysis, simple analytics</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced analytics techniques, data mining</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Predictive analytics, big data analytics</li>
    </ol>
  `,
  category: 'Data and AI'
},
{
  id: 'blog13',
  title: 'Game Development',
  image: game,
  alt: 'Game Development',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Game Design</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of game mechanics, simple game concepts</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Level design, character development</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced game mechanics, storytelling in games</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Game Programming</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of game engines (Unity, Unreal), simple game logic</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Physics and collision detection, scripting</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced AI for games, optimization techniques</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Game Art and Animation</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of 2D/3D art, simple animations</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced 3D modeling, character rigging</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced animation techniques, visual effects</li>
    </ol>
  `,
  category: 'Development'
},
{
  id: 'blog14',
  title: 'Software Engineering',
  image: software,
  alt: 'Software Engineering',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Software Development</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basic programming concepts, simple projects</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Design patterns, code reviews</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Large-scale system design, advanced algorithms</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Software Testing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Unit testing basics, test-driven development (TDD)</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Integration testing, test automation</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Performance testing, security testing</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Software Maintenance</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Bug fixing, simple refactoring</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Code optimization, legacy system integration</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> System re-engineering, technical debt management</li>
    </ol>
  `,
  category: 'Development'
},
{
  id: 'blog15',
  title: 'Database Management',
  image: dbms,
  alt: 'Database Management',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Relational Databases</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> SQL basics, simple queries</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced SQL queries, database normalization</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Database optimization, stored procedures and triggers</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">NoSQL Databases</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of NoSQL, simple CRUD operations</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced queries in NoSQL databases (MongoDB, Cassandra)</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> NoSQL database optimization, data modeling</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Database Administration</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of database administration, backup and restore</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Performance tuning, security management</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> High availability, disaster recovery</li>
    </ol>
  `,
  category: 'Data and AI'
},
{
  id: 'blog16',
  title: 'Software Testing',
  image: softtest,
  alt: 'Software Testing',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Manual Testing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of manual testing, simple test cases</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Test planning, defect reporting</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced manual testing techniques, exploratory testing</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Automated Testing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of automated testing, simple scripts</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Using frameworks (Selenium, Appium)</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Continuous testing, performance testing automation</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Performance Testing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of performance testing, simple load tests</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Stress testing, using tools (JMeter, LoadRunner)</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced performance tuning, scalability testing</li>
    </ol>
  `,
  category: 'Cybersecurity and IT'
},
{
  id: 'blog17',
  title: 'UI/UX Design',
  image: ui,
  alt: 'UI/UX Design',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">User Interface Design</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of UI design, simple mockups</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced wireframing, design systems</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Interactive prototypes, design handoff</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">User Experience Design</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of UX, user research</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Usability testing, user journey mapping</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced UX strategies, accessibility design</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Interaction Design</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of interaction design, simple animations</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced interaction patterns, prototyping interactions</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced animation techniques, user flow optimization</li>
    </ol>
  `,
  category: 'Design and UX'
},
{
  id: 'blog18',
  title: 'Digital Marketing',
  image: digital,
  alt: 'Digital Marketing',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">SEO (Search Engine Optimization)</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of SEO, keyword research</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> On-page and off-page SEO, technical SEO</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced SEO strategies, SEO analytics</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">SEM (Search Engine Marketing)</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of SEM, simple campaigns</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced PPC strategies, conversion tracking</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced SEM analytics, optimizing ad spend</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Content Marketing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of content marketing, creating content</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Content strategy, content promotion</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced content analytics, content automation</li>
    </ol>
  `,
  category: 'Marketing and Management'
},
{
  id: 'blog19',
  title: 'Business Development',
  image: business,
  alt: 'Business Development',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Market Research</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basic market research techniques, competitor analysis</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Market segmentation, SWOT analysis</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced market analytics, predictive market trends</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Strategic Planning</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of strategic planning, simple business plans</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Strategic goal setting, resource allocation</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Long-term strategy development, risk management</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Partnerships and Alliances</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Identifying potential partners, basic negotiation skills</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Partnership agreements, managing collaborations</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Strategic alliances, international partnerships</li>
    </ol>
  `,
  category: 'Marketing and Management'
},
{
  id: 'blog20',
  title: 'Marketing and Advertising',
  image: market,
  alt: 'Marketing and Advertising',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Digital Marketing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of digital marketing, social media marketing</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Email marketing campaigns, influencer marketing</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced digital marketing strategies, marketing automation</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Brand Management</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of brand building, brand identity creation</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Brand positioning, brand communication strategies</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Global brand management, brand equity measurement</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Advertising</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of advertising, creating simple ads</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advertising campaign planning, media buying</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Integrated marketing communications, ad performance analysis</li>
    </ol>
  `,
  category: 'Marketing and Management'
},
{
  id: 'blog21',
  title: 'Sales',
  image: sales,
  alt: 'Sales & Management',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Sales Techniques</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of sales, understanding customer needs</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced sales techniques, objection handling</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Strategic selling, complex sales negotiations</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Customer Relationship Management (CRM)</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of CRM, simple CRM tools</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced CRM strategies, CRM analytics</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Custom CRM solutions, CRM integration with other systems</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Sales Management</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of sales management, setting sales goals</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Sales team development, performance monitoring</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Sales strategy development, sales forecasting</li>
    </ol>
  `,
  category: 'Marketing and Management'
},
{
  id: 'blog22',
  title: 'Human Resources',
  image: hr,
  alt: 'Human Resources',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Recruitment and Selection</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of recruitment, writing job descriptions</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced interviewing techniques, using recruitment software</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Strategic talent acquisition, employer branding</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Employee Relations</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of employee relations, conflict resolution</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Employee engagement strategies, performance management</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced conflict management, organizational culture development</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Training and Development</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of employee training, onboarding programs</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Developing training materials, implementing training programs</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Leadership development, training program evaluation</li>
    </ol>
  `,
  category: 'Marketing and Management'
},
{
  id: 'blog23',
  title: 'Finance and Accounting',
  image: accounting,
  alt: 'Finance and Accounting',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Financial Accounting</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of financial accounting, preparing financial statements</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Financial statement analysis, intermediate accounting principles</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced financial reporting, consolidations</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Management Accounting</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of management accounting, budgeting</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Cost analysis, performance measurement</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Strategic management accounting, advanced budgeting techniques</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Financial Planning and Analysis (FP&A)</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of financial planning, simple financial models</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced financial modeling, scenario analysis</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Strategic financial planning, financial risk management</li>
    </ol>
  `,
  category: 'Marketing and Management'
},
{
  id: 'blog24',
  title: 'Content Writing',
  image: content,
  alt: 'Content Writing',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">SEO Writing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of SEO writing, keyword research</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> On-page SEO, writing for different platforms</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced SEO strategies, SEO content audits</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Copywriting</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of copywriting, writing compelling headlines</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Writing persuasive copy, advanced editing techniques</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Conversion rate optimization, copywriting for different media</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Technical Writing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of technical writing, writing user manuals</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced technical documentation, content structuring</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Creating complex technical documents, technical content strategy</li>
    </ol>
  `,
  category: 'Marketing and Management'
},
{
  id: 'blog25',
  title: 'Mass Communication',
  image: mass,
  alt: 'Mass Communication',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Journalism</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of journalism, news writing</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Investigative journalism, multimedia journalism</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced reporting techniques, journalistic ethics</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Public Relations</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of public relations, writing press releases</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Media relations, crisis communication</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Strategic PR planning, advanced PR analytics</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Broadcasting</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of broadcasting, script writing</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> On-air presentation skills, production techniques</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Broadcast management, advanced production skills</li>
    </ol>
  `,
  category: 'Marketing and Management'
},
{
  id: 'blog26',
  title: 'Graphic Design',
  image: design,
  alt: 'Graphic Design',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Visual Design</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of visual design, using design software (Photoshop, Illustrator)</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced design techniques, branding</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Designing for different media, advanced typography</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Illustration</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of illustration, digital illustration tools</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced illustration techniques, creating complex illustrations</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Storyboarding, character design</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">User Interface (UI) Design</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of UI design, creating simple mockups</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced wireframing, UI prototyping</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Interaction design, designing complex interfaces</li>
    </ol>
  `,
  category: 'Design and UX'
},
{
  id: 'blog27',
  title: 'Motion Graphic Design',
  image: motion,
  alt: 'Motion Graphic Design',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Animation Basics</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of animation, using animation software (After Effects)</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Creating animated sequences, motion paths</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced animation techniques, 3D animation</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Video Effects</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of video effects, simple transitions</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Compositing, keying and tracking</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced visual effects, integrating CGI</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">3D Motion Graphics</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of 3D design, using 3D software (Cinema 4D)</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced 3D modeling, texturing and lighting</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Complex 3D animations, integrating 3D with live footage</li>
    </ol>
  `,
  category: 'Design and UX'
},
{
  id: 'blog28',
  title: 'Video Editing',
  image: video,
  alt: 'Video Editing',
  content: `
    <h2 class="text-xl font-bold text-gray-900 mb-2">Editing Basics</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of video editing, using editing software (Premiere Pro, Final Cut Pro)</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced editing techniques, color correction</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Storytelling through editing, advanced post-production</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Sound Editing</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of sound editing, syncing audio with video</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced sound editing techniques, sound design</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Mixing and mastering audio, creating soundtracks</li>
    </ol>

    <h2 class="text-xl font-bold text-gray-900 mt-4 mb-2">Post-Production</h2>
    <ol class="text-left list-decimal list-inside space-y-1">
      <li><span class="font-semibold text-gray-800">Beginner:</span> Basics of post-production, simple effects</li>
      <li><span class="font-semibold text-gray-800">Intermediate:</span> Advanced effects and transitions, motion graphics integration</li>
      <li><span class="font-semibold text-gray-800">Advanced:</span> Advanced post-production workflows, multi-camera editing</li>
    </ol>
  `,
  category: 'Design and UX'
}



  // Add more card objects here...
]);

const selectedCategory = ref('All');
const visibleCount = ref(2);

const filterBlogs = (category) => {
  selectedCategory.value = category;
  visibleCount.value = 2; // Reset the visible count when the category changes
};

const filteredCards = computed(() => {
  if (selectedCategory.value === 'All') {
    return cards.value;
  } else {
    return cards.value.filter(card => card.category === selectedCategory.value);
  }
});

const visibleCards = computed(() => {
  return filteredCards.value.slice(0, visibleCount.value);
});

const loadMore = () => {
  if (visibleCount.value < filteredCards.value.length) {
    visibleCount.value += 2; // Increase the visible count by 4
  }
};


import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(() => {
  // Function to handle animations
  const applyAnimations = () => {
    const h1Element = document.querySelector('.domain-h1');
    const h1Element2 = document.querySelector('.domain2-h1');
    const btn = document.querySelector('.domain-btn');

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
            delay: 0.6 // Delay before the animation starts
          }
        );
      }
      if (btn) {
        gsap.fromTo(btn, 
          { scale: scaleValue, opacity: 0, x: '1%' }, // Initial state
          { 
            scale: 1, // End state (normal size)
            opacity: 1, // End state (fully visible)
            x: 0,
            duration: 1, // Animation duration
            ease: "power2.out", // Easing function
            delay: 0.8 // Delay before the animation starts
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
        x: '1%', // Starting X position
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
  // Define elements
  const domain3H1 = document.querySelector('.domain3-h1');
  const cards = document.querySelectorAll('.carde1, .carde2, .carde3');

  // Ensure responsiveness across smaller devices
  const screenWidth = window.innerWidth;
  
  if (screenWidth >= 768) {
    // Animate the domain3-h1
    gsap.fromTo(domain3H1,
      { opacity: 0, scale:0.7 }, // Initial state
      { opacity: 1, scale:1, duration: 0.5, ease: 'power3.out' } // End state
    );

    // Animate cards with a staggered effect
    gsap.fromTo(cards,
      { opacity: 0, scale:0.7 }, // Initial state
      { 
        opacity: 1, 
        scale:1,
        duration: 0.5, 
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.domain3-h1', // Start animation based on domain3-h1 element
          start: 'top 60%', // When the top of domain3-h1 hits 80% of the viewport height
          toggleActions: 'play none none none' // Play animation on scroll down
        }
      }
    );
  }
});

onMounted(() => {
  // Define elements
  const recogH1 = document.querySelector('.recog-h1');
  const recogP = document.querySelector('.recog-p');
  const logos = document.querySelectorAll('.recog-a');

  // Ensure responsiveness across smaller devices
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    // Animate the recog-h1
    gsap.fromTo(recogH1,
      { opacity: 0, x: 0 }, // Initial state
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: recogH1, // Trigger the animation based on recogH1
          start: 'top 60%', // When the top of recogH1 hits 80% of the viewport height
          toggleActions: 'play none none none' // Play animation on scroll down
        }
      }
    );

    // Animate the recog-p with ScrollTrigger
    gsap.fromTo(recogP,
      { opacity: 0, x: 0 }, // Initial state
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: 'power2.out',
        delay: 0.2, // Delay before animation starts
        scrollTrigger: {
          trigger: recogP, // Trigger the animation based on recogP
          start: 'top 60%', // When the top of recogP hits 80% of the viewport height
          toggleActions: 'play none none none' // Play animation on scroll down
        }
      }
    );

    // Animate logos with a staggered effect
    gsap.fromTo(logos,
      { opacity: 0, x: 20 }, // Initial state
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        stagger: 0.25, // Stagger delay between animations
        scrollTrigger: {
          trigger: '.recog-a', // Start animation based on recog-h1 element
          start: 'top 65%', // When the top of recog-h1 hits 80% of the viewport height
          toggleActions: 'play none none none' // Play animation on scroll down
        }
      }
    );
  }
});
</script>

<style scoped>

</style>