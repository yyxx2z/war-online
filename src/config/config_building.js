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
                population: '100',
                stock: {
                    all: '1000'
                }
            },
            x: {
                population: '{1.2x}',
                stock: '{1.2x}'
            }
        },
        expansion:{}
    },
    orchard: {
        name: '果园',
        description: '果园，提供少量食物',
        upgrade: {
            1: {
                building: {
                    resources: {
                        wood: '15',
                    }
                },
                fruit_farmer: '2',
                stock: {
                    food: "100"
                }
            },
            x: {
                building: {
                    resources: {
                        wood: '15x',
                    }
                },
                fruit_farmer: '2x',
                stock: {
                    food: "{1.2}"
                }
            }
        },
        expansion:{
            x: {
                building: {
                    resources: {
                        wood: '30x',
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
                        wood: '15',
                    }
                },
                miner: '2',
                stock: {
                    mine: "100"
                }
            },
            x: {
                building: {
                    resources: {
                        wood: '15x',
                    }
                },
                miner: '2x',
                stock: {
                    mine: "{1.2}"
                }
            }
        },
        expansion:{
            x: {
                building: {
                    resources: {
                        wood: '30x',
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
                        wood: '15',
                    }
                },
                miner: '2',
                stock: {
                    mine: "100"
                }
            },
            x: {
                building: {
                    resources: {
                        wood: '15x',
                    }
                },
                miner: '2x',
                stock: {
                    mine: "{1.2}"
                }
            }
        },
        expansion:{
            x: {
                building: {
                    resources: {
                        wood: '30x',
                    }
                }
            }
        }
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
};