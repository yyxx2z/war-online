export const worker = {
    fruit_farmer: {
        name: '果农',
        description: '采集少量食物',
        effect: {
            resources: {
                food: "5/s"
            }
        }
    },
    lumberjack: {
        name: '伐木工',
        description: '采集木材',
        effect: {
            resources: {
                wood: "5/s"
            }
        }
    },
    miner: {
        name: '矿工',
        description: '采集矿物',
        effect: {
            resources: {
                mineral: "5/s",
                gold: "0.005/s",
            }
        }
    },
};