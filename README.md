# war-online
Not online game

### 启动
```
  cd war-online
  npm run dev
```

### 文件目录

```
  - doc // Document folder. 文档文件夹
  - src
    |- assets // Static assets. 静态资源
    |- compoments // Global compoments. 全局组件
    |- config // Game configure folder. 游戏配置
      |
      |- config_building.js // 建筑配置
      |- config_creature.js // 生物配置
      |- config_init.js // 初始化配置
      |- config_items.js // 物品配置
      |- config_operating.js // 操作配置
      |- config_resources.js // 资源配置
      |- config_rules.js // 游戏规则配置
      |- config_technology.js // 科技配置
      |- config_worker.js // 工作配置
      |- config.js // Configure entry file. 配置入口文件
    |- mixin // Mixin methods folder. 混合方法
    |- plugins // Vue plugins. Vue 插件
    |- store // Game data manage store. 游戏数据管理文件
      |
      |- index.js // Entry file. 入口文件
      |- modules // 模块文件
        |
        |- config.js // Config data manage. 配置数据管理
        |- foods.js // Foods data manage. 食物数据管理
        |- solder.js // Solder data manage. 士兵数据管理
        |- source.js // Resource data manage, includes data of show panel. 资源数据管理，包括显示面板显示数据
    |- utils // Utils folder. 工具箱文件夹
    |- views // Views page folder. 视图
      |
      |- control // Operating panel in the middle. 处于中间的操作面板
        |
        |- components // Control components. 控制面板组件
          |
          |- Button // Button components. 按钮组件
            |
            |- ButtonItem.vue // Base button for Control panel interaction. 控制面板的基础交互组件
        |- index.vue // Mudules view entry file. 模块入口文件
      |- log // Log pannel in the right. 处于右侧的日志面板
        |
        |- components // Log components. 日志面板组件
        |- index.vue // Mudules view entry file. 模块入口文件
      |- show // Show panel in the left to show the resource. 右侧展示资源数据的面板
        |
        |- index.vue // Mudules view entry file. 模块入口文件
      |- war-area // War views. 战斗视图
        |- index.vue // Mudules view entry file. 模块入口文件
      |- index.vue // Game views entry. 总视图入口
    |- App.vue // App entry and Global Style. 应用视图和全局样式
    |- element-variables.scss // Element UI global style. Element 全局样式
    |- main.js // Vue mounted file. Vue 全局挂载文件

```