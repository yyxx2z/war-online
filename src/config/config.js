//参数配置文件

import building from './config_building';
import resources from './config_resources';
import operating from './config_operating';
import creature from './config_creature';
import worker from './config_worker';

export const config = {
    'global': {},
    'operating': operating,//操作
    'creature': creature,//生物
    'resources': resources,//资源
    'building': building,//建筑
    'worker': worker,//工种
    //***商人
    //商人资源&兑换比例
    //***
}