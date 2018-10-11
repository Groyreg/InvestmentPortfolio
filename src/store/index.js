
// Vue
import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import productAddition from './modules/productAddition'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    productAddition
  },
  mutations
})
