import _ from 'lodash'

export default {
  namespaced: true,
  state: {
    building: null,
    creature: null,
    operating: null,
    resources: null
  },
  mutations: {
    RESET_USER_DATA: (state, { stateKey, value }) => {
      state[stateKey] = _.cloneDeep(value)
    },
    SET_USER_DATA: (state, { stateKey, itemKey, operate, value }) => {
      switch (operate) {
        case 'add':
          break
        case 'remove':
          break
        case 'update':
          break
      }
      // state[stateKey][itemKey] = doOperating(operate, value)
    }
  },
  actions: {
    resetUserData({ commit }, { stateKey, value }) {
      commit('RESET_USER_DATA', { stateKey, value })
    },
    setUserData({ commit }, { stateKey, itemKey, operate, value }) {
      commit('SET_USER_DATA', {
        stateKey,
        itemKey,
        operate,
        value
      })
    },
    upgrade({ commit }, { stateKey, itemKey, value }) {
      this.actions.setUserData({ stateKey, itemKey, operate: 'update', value })
    }
  }
}
