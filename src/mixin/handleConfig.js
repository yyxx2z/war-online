import { config } from '../config/config'
const OPERATING_CONFIG = config.operating

export default {
  data() {
    return {}
  },

  methods: {
    unLockedEvent(key, value) {
      // switch (key) {
      //   case 'stock':
      //     // 解锁库存
      //     break
      //   case 'operating':
      //     // 解锁操作
      //     var unlockedItems = Object.entries(value).filter(item => typeof item[1] === 'boolean' && item[1]).map(item => item[0])
      //     console.log('unLockedEvent :: unlockedItems: ', unlockedItems)
      //     this.handleOperating(unlockedItems)
      //     break
      //   case 'resources':
      //     // 解锁资源
      //     break
      //   default:
      //     break
      // }
    },
    dispatchEvent() {},
    handleBuilding() {},
    // handleOperating :: key => operate
    handleOperating(operate) {
      let operateArr
      // 传入参数为 operating 的 key 或者 key array
      if (typeof operate === 'object' && Array.isArray(operate)) {
        operateArr = [...operate]
      } else {
        operateArr = [operate]
      }
      const operatings = operateArr.map(key => {
        return OPERATING_CONFIG[key]
      }).filter(item => item)
      this.$store.dispatch('operating/updateOperating', operatings)
    },
    handleResource() {},
    handleCreature() {},
    handleWorker() {},
    handleStock() {},
    handleItems() {}
  }
}
