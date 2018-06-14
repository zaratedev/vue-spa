import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DateFilter from './filters/date'
import VeeValidate from 'vee-validate'

Vue.use(Vuetify)
Vue.use(VeeValidate)

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCxYFprapj2aG4y1qXRmdx83-rRt0sI40g',
      authDomain: 'vue-wpa.firebaseapp.com',
      databaseURL: 'https://vue-wpa.firebaseio.com',
      projectId: 'vue-wpa',
      storageBucket: 'vue-wpa.appspot.com',
      messagingSenderId: '32732976934'
    })
  }
})
