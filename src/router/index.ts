import { createRouter,createWebHistory} from 'vue-router'
import Layout from '../components/Layout.vue'
import Home from '../components/Home.vue'
import AllArticles from '../components/AllArticles.vue'
import AllShuoShuo from '../components/AllShuoShuo.vue'
import Amazing from '@/components/Amazing.vue'
import BigScreen from '@/components/BigScreen.vue'

const routes = [
    { path: '/', component: BigScreen},
    {path:'/home',component:Layout, children:[
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
    ] }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router