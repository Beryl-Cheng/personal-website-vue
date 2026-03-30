import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'  // 后面会放入原 style.css

createApp(App).use(router).mount('#app')
