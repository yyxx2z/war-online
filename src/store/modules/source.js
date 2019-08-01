export default {
  namespaced: true,
  state: {
    showData: [
      {
        id: 'food',
        name: '食物',
        value: 1000,
        upperLimit: 2000,
        rate: 2
      },
      {
        id: 'stone',
        name: '石材',
        value: 12,
        upperLimit: 200,
        rate: 1.2
      },
      {
        id: 'iron',
        name: '金属',
        value: 6,
        upperLimit: 20,
        rate: 0.5
      }
    ]
  },
  mutations: {},
  actions: {}
}
