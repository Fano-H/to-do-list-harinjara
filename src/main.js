import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)

app.mount('#app')
