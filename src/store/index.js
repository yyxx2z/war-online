import Vue from 'vue'
import Vuex from 'vuex'
import source from './modules/source'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    source
  }
})

export default store
