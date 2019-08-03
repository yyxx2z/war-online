/* eslint-disable */
export const building = {
  description: '建筑',
  main_base: {
    name: '主基地',
    description: '主基地，提供一些物品容量和人口上限',
    upgrade: {
      1: {
        building: {
          resources: {}
        },
        unlocked: {
          resources: {
            population: true
          },
          stock: {
            food: true,
            wood: true
          }
        },
        effect: {
          resources: {
            population: '+100', // 对应资源增加数值
          },
          stock: {
            food: '+1000',
            wood: '+500',
          }
        }
      },
      x: {
        building: {
          resources: {}
        },
        effect: {
          resources: {
            population: '+{100+50*x}',
          },
          stock: {
            food: '+{1000+200*x}',
            wood: '+{500+100*x}',
          }
        }
      }
    },
    expansion: {}
  },
  orchard: {
    name: '果园',
    description: '果园，提供少量食物',
    upgrade: {
      1: {
        building: {
          resources: {
            wood: '-15',
          }
        },
        unlocked: {
          worker: {
            fruit_farmer: true
          }
        },
        production_coefficient: 2,
        effect: {
          worker: {
            fruit_farmer: '+2',
          },
          stock: {
            food: '+400'
          }
        }
      },
      x: {
        building: {
          resources: {
            wood: '-{15+(7.5*x)}',
          }
        },
        production_coefficient: '{2+0.1*x}',
        effect: {
          worker: {
            fruit_farmer: '+{2*x}',
          },
          stock: {
            food: '+{400+(200*x)}'
          }
        }
      }
    },
    expansion: {
      x: {
        building: {
          resources: {
            wood: '-{30*x}',
          }
        }
      }
    }
  },
  mine: {
    name: '矿场',
    description: '矿场，提供采矿的场所',
    upgrade: {
      1: {
        building: {
          resources: {
            wood: '-15',
          }
        },
        unlocked: {
          worker: {
            miner: true
          }
        },
        production_coefficient: 1,
        effect: {
          worker: {
            miner: '+2'
          },
          stock: {
            mine: "+200"
          }
        },
      },
      x: {
        building: {
          resources: {
            wood: '-{15+(7.5*x)}',
          }
        },
        production_coefficient: '{1+0.0.5*x}',
        effect: {
          worker: {
            miner: '+2x'
          },
          stock: {
            mine: "+{200+(100*x)}"
          }
        }
      }
    },
    expansion: {
      x: {
        building: {
          resources: {
            wood: '-30*x',
          }
        }
      }
    }
  },
  metal_factory: {
    name: '金属工厂',
    description: '可以将矿石冶炼成金属',
    upgrade: {
      1: {
        building: {
          resources: {
            wood: '-300',
            mineral: '-150',
          }
        },
        production_coefficient: 1,
        unlocked: {
          worker: {
            smelter: true
          }
        },
        effect: {
          worker: {
            smelter: '+2',
          },
          stock: {
            metal: '+500'
          }
        }
      },
      x: {
        building: {
          resources: {
            wood: '-{300+(150*x)}',
            mineral: '-{150+(75*x)}',
          }
        },
        production_coefficient: '{1+0.1*x}',
        effect: {
          worker: {
            smelter: '+{2*x}',
          },
          stock: {
            metal: '+{500+(250*x)}'
          }
        }
      }
    },
    expansion: {
      x: {
        building: {
          resources: {
            wood: '-{300*(0.5*x+0.5)}',
          }
        }
      }
    }
  },
  barracks: {
    name: '兵营',
    description: '部落训练战士攻防敌人的场所',
    upgrade: {
      1: {
        building: {
          resources: {
            wood: '-15',
          }
        },
        unlocked: {
          creature: {
            warrior: true
          }
        }
      },
      x: {
        building: {
          resources: {
            wood: '-15x',
          }
        }
      }
    },
    expansion: false
  }
  //***建筑(工位，容量，效率)
  //主营地
  //果园
  //石场
  //伐木场
  //研究处
  //畜牧场
  //金属加工厂
  //仓库
  //*防御建筑
  //城墙
}