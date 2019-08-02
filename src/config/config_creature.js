export const creature = {
    young_child: {
        name: '幼儿',
        description: '我还是个孩子',
        rule: {
            waiting_time: 5 * 1000,
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
}