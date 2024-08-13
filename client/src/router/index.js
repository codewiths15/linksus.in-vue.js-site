import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import University from "@/views/University.vue";
import Companies from "@/views/Companies.vue";
import Blog from "@/views/Blog.vue";
import Domain from "@/views/Domain.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/uni",
    name: "University",
    component: University,
  },
  {
    path: "/com",
    name: "Companies",
    component: Companies,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/domain",
    name: "Domain",
    component: Domain,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
