import { createRouter, createWebHashHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LandingView from "../views/LandingView";
import destinationPage from "../views/destinationPage.vue";
import ActivityList from "../views/ActivityList.vue";
import BlogView from "../views/BlogView.vue";
import BlogView2 from "../views/BlogView2.vue";
import BlogView3 from "../views/BlogView3.vue";
import BookActivity from "../views/BookActivity";
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
    path: "/activitat",
    name: "activitat",
    component: ActivityList,
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
