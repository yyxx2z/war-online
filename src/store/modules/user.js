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
        console.log('category: ', category)
        Object.keys(unlocked[category]).forEach(key => {
          if (category === 'stock') {
            console.log('state', state, category, key)
            console.log('state[category]', state[category])
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
            // console.log('解锁 获取初始值', res)
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
    }
  }
}
