<template>
  <div class="camp-wrapper">
    <el-card class="box-card" v-for="(item, itemIndex) in campList" :key="itemIndex">
      <div slot="header" class="clearfix">
        <div class="card-header">{{ item.title }}</div>
      </div>
      <div class="btn-list">
        <el-button v-for="(btn, btnIndex) in item.children" :key="btnIndex" :type="btn.type" class="war-btn war-btn__normal" @click="btn.clickEvent">
          <span class="war-btn-name">{{ btn.name }}</span>
          <span class="war-btn-count" v-if="btn.count > 1">({{ btn.count }})</span>
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campList: [
        {
          title: '食物',
          children: [
            {
              name: '果园',
              count: 2,
              type: '', // 默认按钮样式
              clickEvent: () => {
                this.$store.dispatch('source/addResourceValueByClick', {
                  name: 'foods'
                })
              }
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.card-header {
  text-align: left;
  font-weight: 600;
}
</style>
