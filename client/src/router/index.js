import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import University from "@/views/University.vue";
import Companies from "@/views/Companies.vue";
import Blog from "@/views/Blog.vue";
import Domain from "@/views/Domain.vue";
import SignUp from "@/views/SignUp.vue";
import BlogDetail from "@/views/BlogDetail.vue";

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
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/blog/:id",
    name: "BlogDetail",
    component: BlogDetail,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
