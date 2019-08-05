/* eslint-disable */
export const rules = {
  description: '规则属性',
  war: {//战争规则
    rules: {
      '算法策略': [
        '1、依次判断各个方阵的行为，判断后计算对应的参数',
        '2、依次执行攻击，并计算攻击产生后的影响',
        '3、依次执行移动',
        '目前：移动不能攻击，攻击不能移动，一回合只能做一个操作',
        '以后可能扩展：骑兵可选以下操作：1、位移两格  2、位移一格、攻击一次(50%伤害)  3、攻击两次(100%、50%)'
      ],
      '移动策略': [
        '坐标距离大于射程->无法攻击',
        '攻击时，三方都有敌人，攻击敌方，依次是：前、上、下',
        '无敌人移动时，方位依次为：前、上、下、无(无即不移动)',
      ],
    },
    column_num: {//列方阵数
      min: 0,
      max: 10,
    }
  },
  rule: [
    '配置内x，指目标等级或目标数量',
    'effect内  有三部分，第一部分是增+或减-效果，第二部分是数字或表达式，第三部分是单位，(单位暂时只有:s)',
    '单位，building内的effect内无',
    '第一部分，第二部分必有，第三部分可无，无则是一次性消耗',
    '第二部分，要么是数字，要么是表达式，不会都有，数字就是纯数字，表达式就会包含在{}内',
    'demand(需求)和consume(消耗)和effect(效果)对象内，会涉及到的数据有resources、technology、building、creature、items',
    '单位生产数量=(相关工人数*对应工种产量*工种科技影响*建筑生产系数*建筑物科技影响)*全局影响',
    '配置内记录的是等级效果，对应升级时，1、减去升级前配置，再加上当前配置  或者2全部重新统计',
    '资源不能为负',
  ],
  unlocked: {
    the_birth_of_technology: {
      description: '科技的诞生',
      condition: {
        resources: {
          population: 2,
          food: 10
        }
      }
    },
  }
};