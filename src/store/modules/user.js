import _ from 'lodash'
import game from '../../lib/game'

const stateTypeMap = {
  array: ['building', 'creature', 'operating', 'resources'],
  object: []
}

function stateTypeof(categoryKey) {
  if (stateTypeMap.array.includes(categoryKey) !== -1) {
    return 'array'
  } else if (stateTypeMap.object.includes(categoryKey) !== -1) {
    return 'object'
  } else {
    return 'No Sign'
  }
}

export default {
  namespaced: true,
  state: {
    building: [],
    creature: [],
    operating: [],
    resources: []
  },
  mutations: {
    RESET_USER_DATA: (state, { categoryKey, value }) => {
      state[categoryKey] = _.cloneDeep(value)
    },
    SET_USER_DATA: (state, { categoryKey, itemKey, operate, value }) => {
      // state[categoryKey][itemKey] = doOperating(operate, value)
    },
    UPDATE_USER_DATA: (state, { categoryKey, itemKey, valueKey, value }) => {
      state[categoryKey][itemKey][valueKey] = value
    },
    UNLOCK_USER_DATA: (state, { categoryKey, itemKey, value }) => {
      if (stateTypeof(categoryKey) === 'object') {
        state[categoryKey][itemKey] = value
      } else if (stateTypeof(categoryKey) === 'array') {
        state[categoryKey].push(value)
      }
    },
    DELETE_USER_DATA: (state, { categoryKey, itemKey, value }) => {
      // FIXME: Decide type
      if (stateTypeof(categoryKey) === 'object') {
        state[categoryKey][itemKey] = value
      } else if (stateTypeof(categoryKey) === 'array') {
        // finish it
      }
    }
  },
  actions: {
    resetUserData({ commit }, { categoryKey, value }) {
      commit('RESET_USER_DATA', { categoryKey, value })
    },
    setUserData({ commit }, { categoryKey, itemKey, operate, value }) {
      commit('SET_USER_DATA', {
        categoryKey,
        itemKey,
        operate,
        value
      })
    },
    upgrade({ commit }, { categoryKey, itemKey, value }) {
      this.actions.setUserData({ categoryKey, itemKey, operate: 'update', value })
    },
    // 解锁事项
    unlock({ state, commit }, unlocked) {
      Object.keys(unlocked).forEach(category => {
        Object.keys(unlocked[category]).forEach(key => {
          if (category === 'stock') {
            Object.keys(unlocked[category][key]).forEach(valueKey => {
              const itemIndex = state[key].findIndex(item => item.key === valueKey)
              commit('UPDATE_USER_DATA', {
                categoryKey: key,
                itemKey: itemIndex,
                valueKey: 'stock',
                value: unlocked[category][key][valueKey]
              })
            })
            return
          }
          if (unlocked[category][key]) {
            // 解锁
            const res = game.unlocked(key, category)
            commit('UNLOCK_USER_DATA', {
              categoryKey: category,
              itemKey: key,
              operate: 'unlock',
              value: res
            })
          } else {
            // 重新锁住
            commit('DELETE_USER_DATA', {
              categoryKey: category,
              itemKey: key,
              operate: 'unlock'
            })
          }
        })
      })
    },
    consume({ state, commit }, data) {
      console.log('consume data', data)
      const resultArr = [] // 检测结果数组
      // 检测是否可扣除
      Object.keys(data).forEach(category => {
        Object.keys(data[category]).forEach(key => {
          const expression = data[category][key]
          const itemIndex = state[category].findIndex(item => item.key === key)
          const res = game.consume(state[category][itemIndex]['value'], expression)
          resultArr.push(Object.assign({}, res, {
            categoryKey: category,
            itemKey: itemIndex,
            key: key,
            name: state[category][itemIndex]['name'],
            valueKey: 'value'
          }))
        })
      })
      const unvalidArr = resultArr.filter(item => !item.result)
      if (unvalidArr.length !== 0) {
        // 资源不足
        console.log('资源不足')
        const errString = unvalidArr.map(item => item.name).join(',')
        this.$message({
          type: 'warning',
          message: `${errString}资源不足`
        })
        return false
      }
      // 资源充足
      // Update 计算后的资源
      resultArr.forEach(item => {
        commit('UPDATE_USER_DATA', {
          categoryKey: item.categoryKey,
          itemKey: item.itemKey,
          valueKey: 'value',
          value: item.newValue
        })
      })
      return true
    },
    effect({ state, commit }, { waiting_after }) {
      console.log('effect action', waiting_after)
      const data = waiting_after
      Object.keys(data).forEach(category => {
        Object.keys(data[category]).forEach(itemKey => {
          const expression = data[category][itemKey]
          const itemIndex = state[category].findIndex(item => item.key === itemKey)
          const newValue = game.effect(state[category][itemIndex]['value'], expression, state[category][itemIndex]['level'])
          console.log('newValue in effect', newValue, 'key:', itemKey)
          console.log(state[category][itemIndex])
          if (newValue) {
            commit('UPDATE_USER_DATA', {
              categoryKey: category,
              itemKey: itemIndex,
              valueKey: 'value',
              value: newValue
            })
          }
        })
      })
    }
  }
}
