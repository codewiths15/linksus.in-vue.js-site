<template>
  <div class="mt-16 flex flex-col items-center text-center">
      <div class="blog-h1 text-4xl md:text-5xl lg:text-6xl font-semibold font-Lora text-gray-800">
    Welcome to Tech Blogs
  </div>
  <div class="blog-h2 text-xl md:text-2xl lg:text-3xl font-semibold font-Lora text-gray-600 mt-4">
    Explore various technology topics and their Roadmaps
  </div>
    </div>
  <div class="blog-container min-h-[650px]">
    <div
      v-for="(blog, index) in blogs"
      :key="index"
      class="blog-card"
      @click="viewBlog(blog)"
    >
      <img :src="blog.image" :alt="blog.title" />
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.summary }}</p>
    </div>
  </div>
</template>
  
  <script setup>
    import dataScienceLogo from '@/assets/images/data-science-logo.png';
  import aiImage from '@/assets/images/ai-image.png';
  import webDevImage from '@/assets/images/web-dev.png';
  import uiUxImage from '@/assets/images/ui-ux.webp';
  import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'vue-router';

gsap.registerPlugin(ScrollTrigger);
  
  const blogs = [
  {
    "image": dataScienceLogo,
    "title": "Understanding Data Science",
    "summary": "Data Science involves using scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
    "contentIntro": "Becoming a Data Scientist involves learning a combination of programming, statistics, and domain expertise. Here is a roadmap to guide your journey:",
    "roadmap": [
      "Learn Python or R: Start with basic syntax and libraries like pandas, numpy, and matplotlib.",
      "Study Statistics and Probability: Understand fundamental concepts such as mean, median, standard deviation, probability distributions, and hypothesis testing.",
      "Data Wrangling: Learn how to clean and preprocess data using techniques like data imputation, handling missing values, and data normalization.",
      "Exploratory Data Analysis (EDA): Practice data visualization techniques using libraries like seaborn and ggplot2.",
      "Machine Learning Algorithms: Study algorithms like linear regression, logistic regression, decision trees, and clustering methods.",
      "Advanced Topics: Dive into deep learning, natural language processing, and big data technologies like Hadoop and Spark.",
      "Practical Experience: Work on projects and participate in competitions on platforms like Kaggle to apply your knowledge."
    ]
  },
  {
    "image": aiImage,
    "title": "AI and Machine Learning Basics",
    "summary": "Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries by enabling machines to learn from data and make decisions.",
    "contentIntro": "Mastering AI and Machine Learning requires a structured approach. Here is a roadmap to help you get started:",
    "roadmap": [
      "Learn Python: Focus on libraries like numpy, pandas, scikit-learn, and TensorFlow.",
      "Mathematics for ML: Study linear algebra, calculus, and probability theory.",
      "Basic Algorithms: Understand supervised learning algorithms (e.g., regression, classification) and unsupervised learning algorithms (e.g., clustering).",
      "Deep Learning: Learn about neural networks, CNNs, RNNs, and frameworks like Keras and PyTorch.",
      "Natural Language Processing (NLP): Explore text processing, sentiment analysis, and language models.",
      "Computer Vision: Study image processing techniques and tools like OpenCV.",
      "Projects and Research: Implement projects and read research papers to stay updated with the latest advancements."
    ]
  },
  {
    "image": webDevImage,
    "title": "Modern Web Development",
    "summary": "Web development involves creating and maintaining websites.",
    "contentIntro": "Follow this roadmap to build a solid foundation in web development:",
    "roadmap": [
      "HTML and CSS: Start with the basics of building web pages and styling them.",
      "JavaScript: Learn the fundamentals and advanced concepts of JavaScript.",
      "Responsive Design: Understand how to make web pages look good on all devices using CSS frameworks like Bootstrap.",
      "Frontend Frameworks: Explore frameworks like React, Angular, and Vue.js.",
      "Backend Development: Learn about server-side languages like Node.js, Python (Django/Flask), and Ruby on Rails.",
      "Databases: Study SQL and NoSQL databases, such as MySQL and MongoDB.",
      "Version Control: Get familiar with Git and GitHub for source code management.",
      "Web Security: Learn about common security practices and how to protect web applications.",
      "Build Projects: Create your own projects to apply what you've learned and build a portfolio."
    ]
  },
  {
    "image": uiUxImage,
    "title": "Introduction to UI-UX Design",
    "summary": "UI (User Interface) and UX (User Experience) design are critical components in creating digital products that are both functional and enjoyable to use.",
    "contentIntro": "UI (User Interface) and UX (User Experience) design are critical components in creating digital products that are both functional and enjoyable to use. UI design focuses on the look and layout of a product, while UX design is about the overall feel of the experience.",
    "roadmap": [
      "Wireframing and Prototyping",
      "Interaction Design",
      "Usability Testing",
      "Visual Design Principles",
      "User Research and Personas",
      "Information Architecture"
    ]
  }
];


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
const router = useRouter();

function viewBlog(blog) {
  localStorage.setItem('blogs', JSON.stringify(blogs));
  router.push({ path: `/blog/${blog.title}` });
}
  </script>
  
  <style scoped>
  .header {
    text-align: center;
    margin-top: 120px;
  }
  
  .header h1 {
    font-size: 3.7em;
    margin: 0;
    font-family: "Quincy", serif !important;
  }
  
  .header p {
    font-size: 1.5em;
    color: #666;
    margin-top: 16px;
    font-family: "Greycliff", sans-serif !important;
  }
  
  .blog-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 60px 10px 5px 5px;
}

.blog-card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s, max-height 0.5s;
  cursor: pointer;
  max-height: 400px;
  padding: 10px;
  padding-bottom: 75px;
  background: linear-gradient(to bottom, #7fb9fb9c, #57d6f6a3);

}

.blog-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.blog-card.expanded {
  /* Styles for active card */
  max-height: 600px;
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.blog-card img {
  width: 27%;
  height: auto;
  border-radius: 50%;
}

.blog-card h2 {
  font-size: 1.5em;
  margin: 15px;
  font-family: "Quincy", serif !important;
}

.blog-card p {
  font-size: 1em;
  line-height: 1.5;
  margin: 15px;
}

.blog-content {
  display: none;
  padding: 15px;
  border-top: 1px solid #a6a6a6;
  max-height: 250px;
  overflow-y: auto;
}

.blog-content.active {
    display: block;
}
  
  .back-button {
    display: block;
    text-align: center;
    background-color: #007BFF;
    color: white;
    padding: 10px;
    margin: 15px;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .back-button:hover {
    background-color: #0056b3;
  }
  
  /* Responsive typography */
  @media (max-width: 1200px) {
    .header h1 {
      font-size: 3.5rem;
    }
  
    .header p {
      font-size: 1.4rem;
    }
  
    .blog-card h2 {
      font-size: 1.4rem;
    }
  
    .blog-card p {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 992px) {
    .header h1 {
      font-size: 3rem;
    }
  
    .header p {
      font-size: 1.3rem;
    }
  
    .blog-card h2 {
      font-size: 1.3rem;
    }
  
    .blog-card p {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
    .header h1 {
      font-size: 2.5rem;
    }
  
    .header p {
      font-size: 1.2rem;
    }
  
    .blog-card h2 {
      font-size: 1.2rem;
    }
  
    .blog-card p {
      font-size: 0.9rem;
    }
  
    .blog-content li {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 576px) {
    .header h1 {
      font-size: 2rem;
    }
  
    .header p {
      font-size: 1rem;
    }
  
    .blog-card h2 {
      font-size: 1rem;
    }
  
    .blog-card p {
      font-size: 0.8rem;
    }
  }
  </style>