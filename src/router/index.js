import Vue from "vue";
import VueRouter from "vue-router";
import HeadshotView from "../views/HeadshotView.vue";
import ACOM from "../views/ACOM.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "headshot",
    component: HeadshotView,
  },
  {
    path: "/acom",
    name: "acom",
    component: ACOM,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
