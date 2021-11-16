import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Main from "../components/Home.vue";
import AllArticles from "../components/AllArticles.vue";
import AllShuoShuo from "../components/AllShuoShuo.vue";
import Amazing from "@/components/Amazing.vue";
import BigScreen from "@/components/BigScreen.vue";

const routes = [
    { path: "/", component: BigScreen },
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

export default router;
