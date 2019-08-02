<template>
  <div class="wrapper">
    <el-tabs type="border-card">
      <el-tab-pane label="营地">
        <Camp />
      </el-tab-pane>
      <el-tab-pane label="兵营">兵营</el-tab-pane>
      <el-tab-pane label="建筑">建筑</el-tab-pane>
      <el-tab-pane label="科技">科技</el-tab-pane>
      <el-tab-pane label="设置">设置</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Camp from './components/Camp'

export default {
  components: {
    Camp
  }
}
</script>

<style lang="scss" scoped>

</style>
