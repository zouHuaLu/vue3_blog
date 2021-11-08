import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'normalize.css'

// axios.defaults.baseURL='http://127.0.0.1:8082/blog/api'

const app = createApp(App)
app.use(router)
app.mount('#app')
