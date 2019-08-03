<template>
  <div class="main-wrapper">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="panel-wrapper">
            <ShowModel />
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="panel-wrapper">
          <ControlModel />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="panel-wrapper">
            <LogModel />
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="war-panel">
      <WarArea />
    </div>
  </div>
</template>

<script>
import ShowModel from './show/index'
import LogModel from './log/index'
import ControlModel from './control/index'
import WarArea from './war-area/index'
import { mapState } from 'vuex'
let sourceCountInterval

export default {
  computed: {
    ...mapState({
      resource: state => state.source.resource
    }),
    lockedResource() {
      if (!this.resource || this.resource.length === 0) {
        return []
      }
      return this.resource.filter(item => item.unLocked)
    }
  },

  components: {
    WarArea,
    ShowModel,
    LogModel,
    ControlModel
  },

  mounted() {
    /**
     * 1. 读取配置，初始化数据
     *  1-1. 读取初始模板
     *  1-2. 读取存档
     * 2. 运行资源变化函数
     */
    this.startInterval()
  },

  methods: {
    startInterval() {
      sourceCountInterval = setInterval(() => {
        this.totalSourceComputed()
      }, 1000)
    },
    stopInterval() {
      clearInterval(sourceCountInterval)
    },
    // 美妙资源变化计算
    totalSourceComputed() {
      const resource = this.lockedResource
      let index = -1
      while(++index < resource.length) {
        if (resource[index].value < resource[index].upperLimit) {
          this.$store.dispatch('source/addResource', {
            name: resource[index].name,
            key: 'value',
            value: resource[index].rate
          })
        }
      }
    }
  }
}
</script>

<style lang="scss">
::-webkit-scrollbar {display:none}

.main-wrapper {
  margin-top: 20px;

  .panel-wrapper {
    height: 26rem;
    width: 100%;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.war-panel {
  margin-top: 10px;
}
</style>
