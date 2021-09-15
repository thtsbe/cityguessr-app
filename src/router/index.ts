import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Scores from "../views/Scores.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/game",
  },
  {
    path: "/scores",
    name: "Scores",
    component: Scores,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import(/* webpackChunkName: "game" */ "../views/Game.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
