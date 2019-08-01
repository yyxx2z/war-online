<template>
  <div class="main-wrapper">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <ShowModel />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <ControlModel />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <LogModel />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ShowModel from './show/index'
import LogModel from './log/index'
import ControlModel from './control/index'

export default {
  components: {
    ShowModel,
    LogModel,
    ControlModel
  }
}
</script>

<style lang="scss">
.main-wrapper {
  margin-top: 20px;
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
</style>
