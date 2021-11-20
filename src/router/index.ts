import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Main from "../components/Home.vue";
import AllArticles from "../components/AllArticles.vue";
import AllShuoShuo from "../components/AllShuoShuo.vue";
import Amazing from "@/components/Amazing.vue";
import BigScreen from "@/components/BigScreen.vue";
import NotFound from "@/components/404.vue";
import Login from "@/components/release/Login.vue";
import Release from "@/components/release/Release.vue";

import { getItem } from "../utils/sessionStorage";

const routes = [
  { path: "/:w+", component: NotFound },
  { path: "/", component: BigScreen },
  { path: "/login", name: "login", component: Login },
  { path: "/release", component: Release },
  {
    path: "/home",
    component: Layout,
    redirect: { name: "main" },
    children: [
      {
        path: "main",
        name: "main",
        component: Main,
      },
      {
        path: "allArticles",
        name: "allArticles",
        component: AllArticles,
      },
      {
        path: "allShuoShuo",
        name: "allShuoShuo",
        component: AllShuoShuo,
      },
      {
        path: "amazing",
        name: "amazing",
        component: Amazing,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const token = getItem("token");
  if (!token && to.name !== "login") {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
