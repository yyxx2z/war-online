import { config } from '../config/config'

// init

// data format
const dataFormatMap = {
  resources: {
    name: '', // 资源名
    key: '', // key
    description: '', // 资源描述
    val: null, // 资源现有值
    category: 'resources', // 类别
    isHidden: false,
    unlocked: true,
    stock: null, // 库存，最大值
    rate: 0 // 变化速率
  },
  building: {
    name: '',
    key: '',
    description: '',
    category: 'building',
    level: 1, // 等级
    isHidden: false,
    unlocked: true
  },
  operating: {
    name: '',
    key: '',
    description: '',
    category: 'operating',
    isHidden: false,
    unlocked: true
  }
}

// unlocked
// 解锁的时候进行数据的初始化
// 每种数据存储有各自的模板
// unlocked :: name -> category -> unlockedItem
export function unlocked(key, category) {
  // console.log('game unlock func', category, key)
  const configTemplate = config[category][key]
  // console.log('config template', configTemplate)
  if (!configTemplate) {
    throw new Error('没有该模板', key, category, configTemplate)
  }
  // console.log('before assign', key, category)
  const obj = Object.assign(dataFormatMap[category], configTemplate, {
    key
  })
  return obj
}

// upgrade

// cosume

// expansion

// effect

// demand

// influence

export default {
  unlocked
}
