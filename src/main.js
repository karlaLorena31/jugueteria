import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'
// bootstrap-vue
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

// configuracion Firebase

const firebaseConfig = {
    apiKey: "AIzaSyD5Z70nADCHBQrVuSb0oESmwsCAeb11xYg",
    authDomain: "otto-985ea.firebaseapp.com",
    projectId: "otto-985ea",
    storageBucket: "otto-985ea.appspot.com",
    messagingSenderId: "1099485981095",
    appId: "1:1099485981095:web:994d530de13aa8200d2e82"
  };
  // Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
