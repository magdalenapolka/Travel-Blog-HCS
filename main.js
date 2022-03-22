import { createApp } from 'vue'
import '@/assets/css/style.scss'
import router from './router'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)
app.use(router)

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBee9p4q8fD6oiKKhzl5E_Rn8PWDFYEgvQ'
  }
})

app.mount('#app')
