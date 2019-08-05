/* eslint-disable */
export const creature = {
  description: '生物',
  young_child: {
    name: '幼儿',
    description: '我还是个孩子',
    demand: {
      resources: {
        food: '-0.5/s'
      }
    },
    attributes: {},
    rule: {
      waiting_time: 5 * 1000,
      waiting_after: {
        creature: {
          young_child: '-1',
          adult: '+1',
        }
      }
    }
  },
  adult: {
    name: '成年人',
    description: '为部落的崛起而努力',
    demand: {
      resources: {
        food: '-1/s'
      }
    },
    attributes: {
      hp: 0,
      atk: 0,
      atk_range: 0,
    },
  },
  warrior: {
    name: '战士',
    description: '干干干',
    demand: {
      resources: {
        food: '-2/s'
      }
    },
    attributes: {
      hp: 20,
      atk: 5,
      atk_range: 1,
      effect_range: 3,//被攻击限制人数，最多被3个单位攻击
      cover_people: 1,//攻击覆盖人数，最多攻击1个单位
      atk_interval: 0,//攻击间隔，间隔0回合
      speed: 1//每回合最大可移动距离
    },
  },
  archer: {
    name: '弓箭手',
    description: '射射射',
    demand: {
      resources: {
        food: '-2/s'
      }
    },
    attributes: {
      hp: 10,
      atk: 3,
      atk_range: 5,
      effect_range: 3,
      cover_people: 1,
      atk_interval: 0,
      speed: 1
    },
  },
  catapult: {
    name: '投石器小队',
    description: '投投投',
    demand: {
      resources: {
        food: '-10/s'
      }
    },
    attributes: {
      hp: 10,
      atk: 200,
      atk_range: 10,
      effect_range: 20,
      cover_people: 5,
      atk_interval: 1,
      speed: 1
    },
  }

  //***兵种
  //民兵
  //步兵
  //弓箭手
  //投石器
};