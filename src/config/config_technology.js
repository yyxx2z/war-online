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
  }
};