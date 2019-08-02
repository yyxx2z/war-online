export const resources = {
    pick_food: {
        name: '采集食物',
        description: '手动获取食物',
        effect: {
            waiting_time: 0,
            waiting_after: {
                food: '+1'
            }
        }
    },
    create_people: {
        name: '造人',
        description: '点一下就怀孕',
        effect: {
            waiting_time: 10 * 1000,
            waiting_after: {
                young_child: '+1',
            }
        }
    }
}