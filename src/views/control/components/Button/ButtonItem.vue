<template>
  <div class="base-wrapper">
    <el-popover
      placement="right"
      width="400"
      trigger="hover">
        <div class="content">
          <h4 style="margin-bottom: 10px;font-size: 16px;">{{ btn.name }}</h4>
          <div>
            {{ btn.description || '' }}
          </div>
          <div v-if="btn && btn.category === 'building'" class="popover-building-interaction">
            <el-button type="success" size="mini" style="margin-right:6px;">升级</el-button>
            <el-button type="danger" size="mini">销毁</el-button>
          </div>
        </div>
        <el-button 
          v-if="btn"
          :type="btn.type" 
          slot="reference"
          class="war-btn war-btn__normal"
          @click="clickButton"
        >
          <span class="war-btn-name">{{ btn.name }}</span>
          <span class="war-btn-count" v-if="btn.level > 1">({{ btn.level }})</span>
        </el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  props: {
    btn: {
      type: Object,
      default: null
    }
  },

  methods: {
    clickButton() {
      this.$emit('clickButton', this.btn)
    }
  }
}
</script>

<style lang="scss">
.war-btn {
  display: flex;
  margin: 0 10px 10px 0 !important;

  &__normal {
    width: 200px;
  }

  &-name {
    color: #212121;
  }
}

.popover-building-interaction {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}
</style>
