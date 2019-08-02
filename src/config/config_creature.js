/* eslint-disable */
export const creature = {
    young_child: {
        name: '幼儿',
        description: '我还是个孩子',
        demand: {
            resources: {
                food: '-0.5/s'
            }
        },
        attributes: {
            hp: 0,
            atk: 0,
            atk_range: 0,
        },
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
            atk: 10,
            atk_range: 1,
            cover_people: 1,
            atk_interval: 0,
            speed: 1
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
            atk: 5,
            atk_range: 5,
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
            atk: 20,
            atk_range: 7,
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