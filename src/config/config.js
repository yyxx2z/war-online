//参数配置文件

import building from './config_building';
import resources from './config_resources';
import operating from './config_operating';
import creature from './config_creature';

export const config = {
    'global': {},
    'operating': operating,//操作
    'creature': creature,//生物
    'resources': resources,
    'building': building,
    //***工种
    //
    //***兵种
    //民兵
    //步兵
    //弓箭手
    //投石器
    //***商人
    //商人资源&兑换比例
    //***
}