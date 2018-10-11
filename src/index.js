import Vue from 'vue'
import store from './store/index'
import Vuex from 'vuex'
import router from './router'
import App from './App'
import vSelect from 'vue-select'
import 'es6-promise/auto'

// CSS
import 'src/css/main.scss'

Vue.use(Vuex)
Vue.component('v-select', vSelect)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
