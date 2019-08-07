export default {
  namespaced: true,
  state: {
    operations: []
  },
  mutations: {
    UPDATE_OPERATING_ARRAY: (state, payload) => {
      const data = payload.map(item => {
        // 定义点击事件
        const obj = {
          type: 'operation',
          clickEvent: () => {
            console.log('operation click event')
            // 是否可以消耗
            // 消耗资源
            // 消耗完成则执行影响
            // 影响有等待时间，等待时间之后有对资源造成的影响
          }
        }
        return Object.assign(item, obj)
      })
      state.operations.push(...data)
    }
  },
  actions: {
    updateOperating({ commit }, data) {
      console.log('data----------', data)
      commit('UPDATE_OPERATING_ARRAY', data)
    }
  }
}
