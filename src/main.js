import { createApp } from 'vue'
import pinia from './plugins/pinia'
import i18n from './plugins/i18n'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.mount('#app')
