import Vue from 'vue'
import Router from 'vue-router'

import Index from 'pages/layout/Index'

Vue.use(Router)

const routes = [
  {
    path: '*',
    component: Index
  }
]

export default new Router({
  routes
})
