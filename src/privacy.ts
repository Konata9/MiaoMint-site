import { createApp } from 'vue'
import i18n from './i18n'
import '@/styles/main.css'
import Privacy from './pages/Privacy.vue'

const app = createApp(Privacy)
app.use(i18n)
app.mount('#app')
