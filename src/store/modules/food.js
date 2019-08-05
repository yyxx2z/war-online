export default {
  namespaced: true,
  state: {
    // 数据
    foodsNum: 0
  },
  mutations: {
    // 对 state 中数据进行操作
    TOGGLE_FOODS_COUNT: (state, payload) => {
      state.foodsNum = state.foodsNum + payload
    }
  },
  actions: {
    // 执行的操作
    addFoods({ commit, dispatch, state }, { event }) {
      // 增加事件
      let countNum
      switch (event) {
        case 'click':
          countNum = 1
          break
        default:
          break
      }
      // 增加数量
      commit('TOGGLE_FOODS_COUNT', countNum)
      console.log('state.foodsNum', state.foodsNum)
      dispatch('source/setResource', {
        id: 'foods',
        key: 'value',
        value: state.foodsNum
      }, { root: true })
    }
  }
}
