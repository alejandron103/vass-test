import { createApp } from 'vue'
import store from './store'

import './styles/general.scss'
import App from './App.vue'

const app = createApp(App)

app.use(store)

app.mount('#app')