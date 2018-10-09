import Vue from 'vue'
import router from './router'
import App from './App'

// CSS
import 'src/css/main.scss'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
