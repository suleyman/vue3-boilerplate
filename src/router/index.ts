import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Contact from "@/views/contact.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

export const router = createRouter({
  history: createWebHistory("/"),
  routes
});