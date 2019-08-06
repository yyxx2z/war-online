/* eslint-disable */
export const items = {
  description: '物品&工具',
  metal_ax: {
    name: '金属斧头',
    description: '只能用来砍树呦',
    influence: {//物品影响
      worker: {
        lumberjack: {
          production_coefficient: '+1',//生产系数
          influence_people: 1//影响人数
        }
      }
    },
    consume: {
      resources: {
        wood: '-10',
        metal: '-20',
      }
    },
    effect: {
      waiting_time: 5 * 1000,
      waiting_after: {
        items: {
          metal_ax: '+1',
        }
      }
    }
  },
  metal_pick: {
    name: '金属镐',
    description: '只能用来挖矿呦',
    influence: {
      worker: {
        miner: {
          production_coefficient: '+0.5',
          influence_people: 1
        }
      }
    },
    consume: {
      resources: {
        wood: '-10',
        metal: '-200',
      }
    },
    effect: {
      waiting_time: 5 * 1000,
      waiting_after: {
        items: {
          metal_pick: '+1',
        }
      }
    }
  },
  metal_smelter_tool: {
    name: '冶炼工具',
    description: '只能用来冶炼呦',
    influence: {
      worker: {
        miner: {
          production_coefficient: '+0.5',
          influence_people: 1
        }
      }
    },
    consume: {
      resources: {
        wood: '-10',
        metal: '-200',
      }
    },
    effect: {
      waiting_time: 5 * 1000,
      waiting_after: {
        items: {
          metal_smelter_tool: '+1',
        }
      }
    }
  },
  metal_sword: {
    name: '金属剑',
    description: '只能用来杀人呦',
    influence: {
      creature: {
        warrior: {
          attributes: {
            atk: '+2',
          },
          influence_people: 1
        }
      }
    },
    consume: {
      resources: {
        wood: '-10',
        metal: '-200',
      }
    },
    effect: {
      waiting_time: 5 * 1000,
      waiting_after: {
        items: {
          metal_sword: '+1',
        }
      }
    }
  },
};