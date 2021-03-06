import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import AlternativeLayout from "../layouts/AlternativeLayout.vue";

import About from "../views/About.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "*",
      name: "404 Not Found",
      component: () => import("../views/Error/NotFound.vue"),
    },
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "Home Page",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "/about",
          name: "About Page",
          component: About,
        },
        {
          path: "/countries",
          name: "Countries",
          component: () => import("../views/Countries.vue"),
        },
        {
          path: "/country/:country",
          name: "Country Info",
          props: true,
          component: () => import("../views/Country.vue"),
        },
      ],
    },
    {
      path: "/",
      component: AlternativeLayout,
      children: [
        {
          path: "/newnormal",
          name: "New Normal",
          component: () => import("../views/NewNormal.vue"),
        },
      ],
    },
  ],
});

export default router;
