/* eslint-disable */
export const items = {
  description: '规则属性',
  rule: [
    'effect内  有三部分，第一部分是增+或减-效果，第二部分是数字或表达式，第三部分是单位，(单位暂时只有:s)',
    '第一部分，第二部分必有，第三部分可无，无则是一次性消耗',
    '第二部分，要么是数字，要么是表达式，不会都有，数字就是纯数字，表达式就会包含在{}内',
    'demand(需求)和consume(消耗)和effect(效果)对象内，会涉及到的数据有resources、technology、building、creature、iteams',
    '单位生产数量=相关工人数*(对应工种产量*工种科技影响*建筑生产系数*建筑物科技影响)*全局影响',
    '配置内记录的是等级效果，对应升级时，1、减去升级前配置，再加上当前配置  或者2全部重新统计',
  ],
  war: {//战争规则
    atk_range: {//伤害浮动范围
      min: 0.5,
      max: 1.25,
    },
    column_num: {//列方阵数
      min: 0,
      max: 10,
    }
  }
};