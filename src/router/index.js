import { createRouter, createWebHashHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LandingView from "../views/LandingView";
import destinationPage from "../views/destinationPage.vue";
import ActivityList_arquitectura from "../views/ActivityList_arquitectura.vue";
import ActivityList_naturaleza from "../views/ActivityList_naturaleza.vue";
import ActivityList_arte from "../views/ActivityList_arte.vue";
import ActivityList_familia from "../views/ActivityList_familia.vue";
import ActivityList_general from "../views/ActivityList_general.vue";
import ActivityList_gastronomia from "../views/ActivityList_gastronomia.vue";
import ActivityList_ocio from "../views/ActivityList_ocio.vue";
import BlogView from "../views/BlogView.vue";
import BlogView2 from "../views/BlogView2.vue";
import BlogView3 from "../views/BlogView3.vue";
import destinationBlogs from "../views/destinationBlogs.vue";
import destinationBlogs2 from "../views/destinationBlogs2.vue";
import BookActivity from "../views/BookActivity.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
    path: "/arquitectura",
    name: "arquitectura",
    component: ActivityList_arquitectura,
  },
  {
    path: "/naturaleza",
    name: "naturaleza",
    component: ActivityList_naturaleza,
  },
  {
    path: "/arte_cultura",
    name: "arte_cultura",
    component: ActivityList_arte,
  },
  {
    path: "/gastronomia",
    name: "gastronomia",
    component: ActivityList_gastronomia,
  },
  {
    path: "/ocio_nocturno",
    name: "ocio_nocturno",
    component: ActivityList_ocio,
  },
  {
    path: "/familia",
    name: "familia",
    component: ActivityList_familia,
  },
  {
    path: "/general",
    name: "general",
    component: ActivityList_general,
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
    path: "/destiBlogs",
    name: "destiBlogs",
    component: destinationBlogs,
  },
  {
    path: "/destiBlogs2",
    name: "destiBlogs2",
    component: destinationBlogs2,
  },
  {
    path: "/book_activity",
    name: "book_activity",
    component: BookActivity,
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
