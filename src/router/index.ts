import { createRouter,createWebHashHistory} from 'vue-router'
import Layout from '../components/Layout.vue'
import Home from '../components/Home.vue'
import AllArticles from '../components/AllArticles.vue'
import AllShuoShuo from '../components/AllShuoShuo.vue'
import Amazing from '@/components/Amazing.vue'

const routes = [
    { path: '/', component: Layout, redirect:{name: 'home'}, children:[
        {
            path: '/home',
            name: 'home',
            components:  {
                main: Home
            }
        },
        {
            path: '/allArticles',
            name: 'allArticles',
            components:  {
                main: AllArticles
            }
        },
        {
            path: '/allShuoShuo',
            name: 'allShuoShuo',
            components:  {
                main: AllShuoShuo
            }
        },
        {
            path: '/amazing',
            name: 'amazing',
            components:  {
                main: Amazing
            }
        }
    ] },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router