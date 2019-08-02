/* eslint-disable */
export const operating = {
    pick_food: {
        name: '采集食物',
        description: '自己动手丰衣足食',
        consume: {},
        effect: {
            waiting_time: 0,
            waiting_after: {
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
            food: '-15',
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
            food: '-30',
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
            food: '-30',
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
            food: '-150',
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
    },
}