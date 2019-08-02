export const resources = {
    pick_food: {
        name: '采集食物',
        description: '手动获取食物',
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
    }
}