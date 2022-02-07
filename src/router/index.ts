import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Skills from "../views/Skills.vue";
import Works from "../views/Works.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/works",
    name: "Works",
    component: Works
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
