export default {
  namespaced: true,
  state: {
    resource: []
  },
  mutations: {
    ADD_RESOURCE: (state, payload) => {
      const keyIndex = state.resource.findIndex(item => item.name === payload.name)
      if (keyIndex === -1) {
        console.error('无效的 name')
        return
      }
      const temp = state.resource[keyIndex]
      let resourceValue = +(temp[payload.key] + payload.value).toFixed(2)
      const isValueOverUpperLimit = payload.key === 'value' && (resourceValue >= temp.upperLimit)
      if (isValueOverUpperLimit) {
        resourceValue = temp.upperLimit
      }
      state.resource[keyIndex][payload.key] = resourceValue
    }
  },
  actions: {
    // 增加资源
    addResource({ commit }, { name, key, value }) {
      commit('ADD_RESOURCE', {
        name,
        key,
        value
      })
    },
    // 点击按钮增加某项资源的值
    addResourceValueByClick({ commit }, { name }) {
      console.log('name', name)
      commit('ADD_RESOURCE', {
        name,
        key: 'value',
        value: 1
      })
    }
  }
}
