import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Scores from "../views/Scores.vue";
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/scores",
    name: "Scores",
    component: Scores,
  },
  {
    path: "/game",
    name: "Game",
    component: () => import(/* webpackChunkName: "game" */ "../views/Game.vue"),
  },
  {
    path: "/register",
    name: "Registration",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Registration.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
