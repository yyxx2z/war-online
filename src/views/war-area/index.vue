<template>
  <section class="war-wrapper">
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
      }
    }
  },

  methods: {
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
      this.left = {
        position: 0,
        opacity: 1,
        attacked: false
      }
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

    &-bg {}

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
