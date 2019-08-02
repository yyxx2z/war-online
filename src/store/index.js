import Vue from 'vue'
import Vuex from 'vuex'
import source from './modules/source'
import food from './modules/food'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    source,
    food
  }
})

export default store
