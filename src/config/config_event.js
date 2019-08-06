/* eslint-disable */
export const event = {
  food_harvest: {
    year_max_trigger: 1,//每年最大触发次数
    influence: {
      resources: {
        food: '+{o*2}/s'
      }
    },
    effect: {
      waiting_time: 30 * 1000,
      waiting_after: {
        resources: {
          food: '-{o/2}/s'
        }
      }
    }
  }
};
