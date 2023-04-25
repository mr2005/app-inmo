import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

//import * as Vue from 'vue' // in Vue 3

import axios from 'axios'
import VueAxios from 'vue-axios'



// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api/';


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VueAxios, axios)
  .mount('#app')
