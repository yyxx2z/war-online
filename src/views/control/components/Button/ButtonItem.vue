<template>
  <div class="base-wrapper">
    <el-button 
        v-if="btn"
        :type="btn.type" 
        class="war-btn war-btn__normal" 
        @click="btn.clickEvent"
      >
        <span class="war-btn-name">{{ btn.name }}</span>
        <span class="war-btn-count" v-if="btn.count > 1">({{ btn.count }})</span>
        <span class="war-btn-delete">出售</span>
      </el-button>
  </div>
</template>

<script>
export default {
  props: {
    btn: {
      type: Object,
      default: null
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

  &-delete {
    
  }
}
</style>
