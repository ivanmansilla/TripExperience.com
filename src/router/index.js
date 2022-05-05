import { createRouter, createWebHashHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LandingView from "../views/LandingView";
import destinationPage from "../views/destinationPage.vue";
import ActivityList from "../views/ActivityList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
    path: "/arquitectura",
    name: "arquitectura",
    component: ActivityList,
  },
  {
    path: "/naturaleza",
    name: "naturaleza",
    component: ActivityList,
  },
  {
    path: "/arte_cultura",
    name: "arte_cultura",
    component: ActivityList,
  },
  {
    path: "/gastronomia",
    name: "gastronomia",
    component: ActivityList,
  },
  {
    path: "/ocio_nocturno",
    name: "ocio_nocturno",
    component: ActivityList,
  },
  {
    path: "/familia",
    name: "familia",
    component: ActivityList,
  },
  {
    path: "/user_blogs",
    name: "user_blogs",
    component: AboutView,
  },
  {
    path: "/desti",
    name: "desti",
    component: destinationPage,
  },
  {
    path: "/activitat",
    name: "activitat",
    component: ActivityList,
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
