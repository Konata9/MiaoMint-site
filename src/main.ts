import { createApp } from 'vue'
import i18n from './i18n'
import '@/styles/main.css'
import Home from './pages/Home.vue'

const app = createApp(Home)
app.use(i18n)
app.mount('#app')
