import { config } from '../config/config'
import _ from 'lodash'
// init

// expressionReg
const expressionReg = [
  {
    regex: /^(\+|\-){1}\d+/,
    calc: (value, expression) => {
      return +value + +(expression)
    }
  }
]

// data format
// 使用以下模板请用 _.cloneDeep() 进行深度克隆
const dataFormatMap = {
  resources: {
    name: '', // 资源名
    key: '', // key
    description: '', // 资源描述
    value: 0, // 资源现有值
    category: 'resources', // 类别
    isHidden: false,
    unlocked: true,
    stock: 0, // 库存，最大值
    rate: 0 // 变化速率
  },
  building: {
    name: '',
    key: '',
    description: '',
    category: 'building',
    sort: '', // 建筑物分类
    level: 1, // 等级
    isHidden: false,
    unlocked: true
  },
  operating: {
    name: '',
    key: '',
    description: '',
    category: 'operating',
    sort: 'operation',
    isHidden: false,
    unlocked: true
  }
}

// unlocked
// 解锁的时候进行数据的初始化
// 每种数据存储有各自的模板
// unlocked :: name -> category -> unlockedItem
export function unlocked(key, category) {
  const configTemplate = config[category][key]
  if (!configTemplate) {
    throw new Error('没有该模板', key, category, configTemplate)
  }
  const obj = Object.assign(_.cloneDeep(dataFormatMap[category]), configTemplate, {
    key
  })
  return obj
}

// upgrade

// cosume
export function cosume(oldVal, expression) {
  console.log('oldVal: ', oldVal, 'expression: ', expression)
  const afterCalc = {
    result: false,
    newValue: null
  }
  if (oldVal) {
    expressionReg.forEach((item, index) => {
      const canCalc = item.regex.test(expression)
      if (canCalc) {
        afterCalc.newValue = +item.calc(oldVal)
        afterCalc.result = /^[0-9]+.?[0-9]*/.test(afterCalc.newValue) && afterCalc.newValue > 0
      }
    })
  }
  return afterCalc
}

// expansion

// effect

// demand

// influence

export default {
  unlocked,
  cosume
}
