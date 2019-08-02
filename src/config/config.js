//参数配置文件

import building from './config_building';
import resources from './config_resources';
import operating from './config_operating';
import creature from './config_creature';
import worker from './config_worker';
import items from './config_items';
import technology from './config_technology';
import rules from './config_technology';

export const config = {
    'global': {},
    'rules': rules,//规则配置
    'resources': resources,//资源
    'creature': creature,//生物
    'worker': worker,//工种
    'building': building,//建筑
    'technology': technology,//科技
    'items': items,//物品
    'operating': operating,//操作
};