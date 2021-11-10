import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import { Request } from './api/request'
import 'normalize.css'

// axios.defaults.baseURL='http://127.0.0.1:8082/blog/api'
const app = createApp(App)
Request.init()
app.use(router)
app.mount('#app')


console.log(`欢迎来到我的博客
本博客前端技术栈：vite+vue3+typescript+scss
后端技术栈：Nodejs+Express+MySQL`)
