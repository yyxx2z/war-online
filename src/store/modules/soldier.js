import { Warrior } from '../../lib/creature'

export default {
  namespaced: true,
  state: {
    soldier2: null
  },
  mutations: {
    SET_SOLDIER: (state, opt) => {
      state.soldier2 = new Warrior(opt)
    }
  },
  actions: {
    setNewSoldier({ commit }, opt) {
      commit('SET_SOLDIER', opt)
    }
  }
}
