import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/arquitectura",
    name: "arquitectura",
    component: AboutView,
  },
  {
    path: "/naturaleza",
    name: "naturaleza",
    component: AboutView,
  },
  {
    path: "/arte_cultura",
    name: "arte_cultura",
    component: AboutView,
  },
  {
    path: "/gastronomia",
    name: "gastronomia",
    component: AboutView,
  },
  {
    path: "/ocio_nocturno",
    name: "ocio_nocturno",
    component: AboutView,
  },
  {
    path: "/familia",
    name: "familia",
    component: AboutView,
  },
  {
    path: "/user_blogs",
    name: "user_blogs",
    component: AboutView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
