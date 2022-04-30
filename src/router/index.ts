import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: import("@/views/home.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: import("@/views/contact.vue")
  }
];

export const router = createRouter({
  history: createWebHistory("/"),
  routes
});