import Vue from 'vue'
import Vuex from 'vuex'
import resources from './modules/resources'
import food from './modules/food'
import soldier from './modules/soldier'
import controller from './modules/controller'
import operating from './modules/operating'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    resources,
    food,
    soldier,
    controller,
    operating,
    user
  }
})

export default store
