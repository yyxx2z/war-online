<template>
  <section class="war-wrapper">
    <div style="border:2px solid #212121;">
      <div>直接使用</div>
      soldier 1
      <el-button @click="logTestInfo">Log info</el-button>
      <el-button @click="soldierLevelUp">Level Up</el-button>
      <div>姓名: {{ xiaoMing && xiaoMing.name }}</div>
      <div>等级: {{ xiaoMing && xiaoMing.level }}</div>
    </div>
    <div style="border:2px solid #212121;">
      <div>通过 store 控制数据</div>
      soldier 2
      <el-button @click="logTestInfo2">Log info2</el-button>
      <el-button @click="soldier2 && soldier2.levelUp()">Level Up</el-button>
      <div>姓名: {{ soldier2 && soldier2.name }}</div>
      <div>等级: {{ soldier2 && soldier2.level }}</div>
    </div>
    <div class="war-header">
      <div class="war-title">对战</div>
      <el-button type="primary" @click="move">move</el-button>
      <el-button type="primary" @click="attacked">attacked</el-button>
      <el-button type="warning" @click="reset">reset</el-button>
    </div>
    <div class="war-area">
      <div class="war-area-bg"></div>
      <!-- 一列 8 个 -->
      <div 
        class="army-item left-army" 
        :style="{ left: left.position + 'rem' }"
      >
        <div class="army-item-col" v-for="(c, cIndex) in left.leftArmy" :key="cIndex">
          <div class="army-item-row" v-for="(r, rIndex) in c" :key="rIndex">
            <div class="army-item-row-bg" :style="{ opacity: left.opacity }"></div>
            <span v-if="left.attacked" class="attacked-value" :class="{ 'float-top': left.attacked }">-25%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// 取 store 文件夹里的 state 所需要的辅助函数
import { mapState } from 'vuex'
import { Warrior } from '../../lib/creature'

export default {
  data() {
    return {
      left: {
        position: 0,
        opacity: 1,
        attacked: false,
        leftArmy: [
          [1, 1, 1, 1, 1, 1],
          [],
          [1, 3, 4, 5, 6, 7, 5, 6],
          [],
          [3, 5]
        ]
      },
      testInfo: '',
      testInfo2: '',
      xiaoMing: null
    }
  },

  computed: {
    // 取得 soldier 里 state 的数据
    ...mapState({
      soldier2: state => state.soldier.soldier2
    })
  },

  methods: {
    logTestInfo() {
      // 类调用范例
      this.xiaoMing = new Warrior({
        name: '小明',
        level: 2
      })
      this.xiaoMing.getWarriorDetail()
      this.testInfo = '姓名: ' + this.xiaoMing.name + ' 等级：' + this.xiaoMing.level
    },
    soldierLevelUp() {
      this.xiaoMing.levelUp()
    },
    logTestInfo2() {
      const xiaoHua = {
        name: '小花',
        level: 3
      }
      this.$store.dispatch('soldier/setNewSoldier', xiaoHua)
      console.log('thid.soldier 2', this.soldier2)
      this.soldier2.getWarriorDetail()
      this.testInfo2 = '姓名: ' + this.soldier2.name + ' 等级：' + this.soldier2.level
    },
    move() {
      this.left.position += 2 // 移动
    },
    attacked() {
      this.left.opacity-= 0.25
      this.left.attacked = true
      setTimeout(() => {
        this.left.attacked = false
      }, 1400)
    },
    reset() {
      this.left = Object.assign(this.left, {
        position: 0,
        opacity: 1,
        attacked: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  font-size: 12px;
}

.war-wrapper {
  padding: 10px 20px;
  text-align: left;
  position: relative;

  .war-header {
    margin-bottom: 10px;

    .war-title {
      font-size: 16px;
      color: #212121;
    }
  }

  .war-area {
    border: 1px solid #e0e0e0;
    position: relative;
    min-height: 22rem;
    width: 100%;
    display: flex;
    align-items: center;

    .army-item {
      position: absolute;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      transition: left ease-in .3s;

      &-col {
        margin-left: 2px;
        width: 2rem;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      &-row {
        height: 2rem;
        width: 2rem;
        margin-top: 2px;
        position: relative;

        &-bg {
          background: #1e88e5;
          border-radius: 50%;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity ease 1s;
        }

        .attacked-value {
          color: #c62828;
          display: block;
          text-align: center;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          transition: top ease-in-out 1s;
        }
      }
    }

    .left-army {
      left: 0;
    }
  }
}

.float-top {
  animation: floatToTop 1.4s ease-in-out;
}

@keyframes floatToTop {
  0% {
    transform: translateY(0)
  }
  90% {
    transform: translateY(-3rem)
  }
  100% {
    transform: translateY(-3rem)
  }
}
</style>
