import { createRouter,createWebHashHistory} from 'vue-router'
import Layout from '../components/Layout.vue'
import Home from '../components/Home.vue'
import Archive from '../components/Archive.vue'
import Aboutme from '@/components/Aboutme.vue'

const routes = [
    { path: '/', component: Layout, redirect:{name: '/home'}, children:[
        {
            path: 'home',
            name: '/home',
            components:  {
                main: Home
            }
        },
        {
            path: 'archive',
            name: '/archive',
            components:  {
                main: Archive
            }
        },
        {
            path: 'aboutme',
            name: '/aboutme',
            components:  {
                main: Aboutme
            }
        }
    ] },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router