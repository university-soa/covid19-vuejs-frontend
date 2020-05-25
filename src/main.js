import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Hub from './hub'

Vue.config.productionTip = false

// Setup axios as the Vue default $http library
axios.defaults.baseURL = 'https://localhost:5001' // same as the Url the server listens to
Vue.prototype.$http = axios;

// Install Vue extensions
Vue.use(BootstrapVue);
Vue.use(Hub);
Vue.use(require('vue-moment'));

new Vue({
  render: h => h(App),
}).$mount('#app')
