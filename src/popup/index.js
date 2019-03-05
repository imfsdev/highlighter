import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import './fa.js'
import store from './store'
import './custom.scss'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})