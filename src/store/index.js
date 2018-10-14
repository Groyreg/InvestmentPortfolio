// Vue
import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import Positions from './modules/positions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Positions
  }
})
