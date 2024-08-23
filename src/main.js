import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyD82fhD2ps4LWQVy4aVqm5oBv-AInFP6uU",
  authDomain: "sallysweet.firebaseapp.com",
  projectId: "sallysweet",
  storageBucket: "sallysweet.appspot.com",
  messagingSenderId: "702286638574",
  appId: "1:702286638574:web:27bc9f23dce495e0dcf2ff"
};


initializeApp(firebaseConfig);

library.add(faUserSecret, faFacebook, faInstagram, faTwitter)

const vueApp = createApp(App)

vueApp.component('font-awesome-icon', FontAwesomeIcon)

vueApp.use(router)

vueApp.mount('#app')