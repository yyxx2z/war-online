/* eslint-disable */
export const worker = {
  description: '工作种类',
  fruit_farmer: {
    name: '果农',
    description: '采集少量食物',
    effect: {
      resources: {
        food: "+5/s"
      }
    }
  },
  lumberjack: {
    name: '伐木工',
    description: '采集木材',
    production_coefficient: 1,//生产系数
    effect: {
      resources: {
        wood: "+5/s"
      }
    }
  },
  miner: {
    name: '矿工',
    description: '采集矿物',
    effect: {
      resources: {
        mineral: "+5/s",
        gold: "+0.005/s",
      }
    }
  },
  smelter: {
    name: '冶炼工',
    description: '把矿物冶炼成金属块',
    effect: {
      resources: {
        mineral: "-4/s",
        wood: "-1/s",
        metal: "+1/s",
      }
    }
  },
};