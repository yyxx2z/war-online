export const resources = {
    young_child: {
        name: '幼儿',
        description: '我还是个孩子',
        rule: {
            waiting_time: 1000,
            waiting_after: {
                young_child: '-1',
                adult: '+1',
            }
        }
    },
    adult: {
        name: '成年人',
        description: '为部落的崛起而努力'
    },
    food: {
        name: '食物',
        description: '没食物，人是活不下去的'
    },
    wood: {
        name: '木头',
        description: '居家过日子必备材料'
    },
    mineral: {
        name: '矿物',
        description: '矿物含量很高的岩石'
    },
}