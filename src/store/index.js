import Vue from 'vue'
import Vuex from 'vuex'
import source from './modules/source'
import food from './modules/food'
import soldier from './modules/soldier'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    source,
    food,
    soldier
  }
})

export default store
