// import 'swiper/css'
import './assets/css/bootstrap.min.css'
import './assets/css/all.min.css'
import './assets/css/line-awesome.min.css'
import './assets/css/swiper.min.css'
import './assets/css/style.css'
import './assets/css/custom.css'

import './assets/js/jquery.min.js'
import './assets/js/bootstrap.min.js'
import './assets/js/popper.min.js'
import './assets/js/swiper.min.js'
import './assets/js/masonry.min.js'
import './assets/js/theia-sticky-sidebar.min.js'
import './assets/js/ajax-contact.js'
import './assets/js/switch.js'
import './assets/js/main.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
