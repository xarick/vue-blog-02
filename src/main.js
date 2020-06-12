// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'

import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

// Vue.use(Vuelidate)
// Vue.use(Uimini)
Vue.use(
  Vuelidate,
  Uimini
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyBmzbs6yQt2Gszpd2il9SHA6BUHsBlfuJ8',
      authDomain: 'vue03timetable.firebaseapp.com',
      databaseURL: 'https://vue03timetable.firebaseio.com',
      projectId: 'vue03timetable',
      storageBucket: 'vue03timetable.appspot.com',
      messagingSenderId: '851509991333',
      appId: '1:851509991333:web:23685ea1c06b1453463a4c',
      measurementId: 'G-RSJ4VSWQXE'
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  }
})
