/* eslint-disable */
export const operating = {
  description: '操作参数',
  pick_food: {
    name: '采集食物',
    description: '自己动手丰衣足食',
    consume: {},//消耗
    effect: {
      waiting_time: 0,//操作等待时间 单位：毫秒
      waiting_after: {//等待后执行的操作
        resources: {
          food: '+1'
        }
      }
    }
  },
  create_people: {
    name: '造人',
    description: '点一下就怀孕',
    consume: {
      resources: {
        food: '-15',
      }
    },
    effect: {
      waiting_time: 10 * 1000,
      waiting_after: {
        creature: {
          young_child: '+1',
        }
      }
    }
  },
  train_warrior: {
    name: '训练战士',
    description: '训练战士',
    consume: {
      resources: {
        food: '-30',
      }
    },
    effect: {
      waiting_time: 10 * 1000,
      waiting_after: {
        creature: {
          adult: '-1',
          warrior: '+1',
        }
      }
    }
  },
  train_archer: {
    name: '训练弓箭手',
    description: '训练弓箭手',
    consume: {
      resources: {
        food: '-30',
      }
    },
    effect: {
      waiting_time: 10 * 1000,
      waiting_after: {
        creature: {
          adult: '-1',
          archer: '+1',
        }
      }
    }
  },
  train_catapult: {
    name: '训练投石车',
    description: '训练投石车',
    consume: {
      resources: {
        food: '-150',
      }
    },
    effect: {
      waiting_time: 10 * 1000,
      waiting_after: {
        creature: {
          adult: '-5',
          catapult: '+1',
        }
      }
    }
  }
}