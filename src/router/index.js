import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LandingView from "../views/LandingView";
import destinationPage from "../views/destinationPage.vue";
import BlogView from "../views/BlogView.vue";
import BlogView2 from "../views/BlogView2.vue";
import BlogView3 from "../views/BlogView3.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
    path: "/arquitectura",
    name: "arquitectura",
    component: HomeView,
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
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/blog2",
    name: "blog2",
    component: BlogView2,
  },
  {
    path: "/blog3",
    name: "blog3",
    component: BlogView3,
  },
  {
    path: "/desti",
    name: "desti",
    component: destinationPage,
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
