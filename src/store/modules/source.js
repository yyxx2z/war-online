export default {
  namespaced: true,
  state: {
    resource: [
      {
        name: 'foods',
        zh: '食物',
        value: 1000,
        upperLimit: 2000,
        rate: 2, // 每秒增长速率
        unLocked: true
      },
      {
        name: 'stone',
        zh: '石材',
        value: 12,
        upperLimit: 200,
        rate: 1.2,
        unLocked: true
      },
      {
        name: 'iron',
        zh: '金属',
        value: 6,
        upperLimit: 20,
        rate: 10.5,
        unLocked: true
      },
      {
        name: 'gold',
        zh: '黄金',
        value: 6,
        upperLimit: 20,
        rate: 10.5,
        unLocked: false
      }
    ]
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
