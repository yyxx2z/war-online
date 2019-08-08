/* eslint-disable */
export const technology = {
  description: '科技',
  find_orchard: {
    name: '种植果园',
    description: '果树果树你快快生长',
    consume: {
      resources: {
        food: '-10',
      }
    },
    unlocked: {
      building: {
        orchard: true
      }
    }
  },
  find_metal: {
    name: '发现金属',
    description: '这这这也太硬了吧',
    consume: {
      resources: {
        food: '-100',
      }
    },
    unlocked: {
      building: {
        metal_factory: true
      },
      stock: {
        resources: {
          metal: true
        }
      }
    }
  },
  war: {
    name: '战争',
    description: '战争要来了，请尽快做好准备',
    unlocked: {
      building: {
        barracks: true
      }
    }
  },
  find_metal_tool: {
    name: '锻造工具',
    description: '让资源的开采更有效',
    consume: {
      resources: {
        wood: '-100',
        metal: '-500'
      }
    },
    unlocked: {
      building: {
        metal_tool_factory: true
      },
      technology: {
        find_metal_sword: true
      }
    }
  },
  find_metal_sword: {
    name: '锻造剑',
    description: '让战士的伤害更高',
    consume: {
      items: {
        wood: '-100',
        metal: '-300'
      }
    },
    unlocked: {
      items: {
        metal_sword: true
      }
    }
  },
  //解锁弓兵
  //解锁投石车
  //提升食物产量
  //提升矿物产量
  //提升金属产量
};