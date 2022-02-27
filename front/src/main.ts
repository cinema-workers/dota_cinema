import { createApp } from 'vue'
import VueTailWind from 'vue-tailwind'
import App from './App.vue'
import router from './router'
import '@/assets/styles/main.scss'

const app = createApp(App)

app.use(router);

app.mount('#app')
