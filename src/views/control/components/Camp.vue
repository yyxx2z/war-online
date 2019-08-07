<template>
  <div class="camp-wrapper">
    <el-tabs 
      tab-position="top"
      v-model="sortTabValue"
      style="padding-top: 5px;"
      @tab-click="handleClickSortTab"
    >
      <el-tab-pane 
        v-for="tab in sortTab" 
        :key="tab.value" 
        :label="tab.label"
      ></el-tab-pane>
    </el-tabs>
    <el-button 
      type="primary" 
      icon="el-icon-plus" 
      style="float:left;margin-bottom:10px;"
      size="mini"
      v-if="sortTabValue === '0'"
      @click="toggleDialog('building', true)"
    >建造</el-button>
    <div class="btn-list">
      <!-- <ButtonItem 
        v-for="(btn, btnIndex) in operations"
        :key="btnIndex"
        :btn="btn"
      /> -->
      <ButtonItem 
        v-for="(btn, btnIndex) in campListAvilid"
        :key="btnIndex"
        :btn="btn"
      />
    </div>

    <el-dialog
      title="新建建筑"
      :visible.sync="buildingDialogVisible"
    >
    </el-dialog>
  </div>
</template>

<script>
import ButtonItem from './Button/ButtonItem'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      buildingDialogVisible: false,
      sortTabValue: '0',
      sortTab: [
        { label: '全部', value: 'all' },
        { label: '操作', value: 'operation' },
        { label: '食物', value: 'food' },
        { label: '矿石', value: 'stone' },
        { label: '人口', value: 'population' },
        { label: '其他', value: 'others' }
      ],
      campListAvilid: [],
      campList: [
        {
          name: '果园',
          sort: 'food',
          count: 2,
          type: ''
        },
        {
          name: '小屋',
          sort: 'population',
          count: 4,
          type: ''
        },
        {
          name: '矿场',
          sort: 'stone',
          count: 2,
          type: ''
        },
        {
          name: '牧场',
          sort: 'food',
          count: 2,
          type: ''
        },
        {
          name: '农田',
          sort: 'food',
          count: 2,
          type: ''
        },
        {
          name: '学院',
          sort: 'others',
          count: 2,
          type: ''
        },
        {
          name: '仓库',
          sort: 'others',
          count: 2,
          type: ''
        }
      ]
    }
  },

  computed: {
    ...mapState({
      operations: state => state.operating.operations
    })
  },

  components: {
    ButtonItem
  },

  watch: {
    sortTabValue() {
      this.toggleSortTab(this.sortTabValue)
    }
  },

  mounted() {
    this.campList.unshift(...this.operations)
    this.toggleSortTab(this.sortTabValue)
    console.log('this.campList', this.campList)
  },

  methods: {
    toggleSortTab(tabIndex) {
      const type = this.sortTab[+tabIndex]['value']
      if (type === 'all') {
        this.campListAvilid = this.campList
        return
      }
      this.campListAvilid = this.campList.filter(item => item.sort === type)
      this.$forceUpdate()
    },
    toggleDialog(name, status = false) {
      switch (name) {
        case 'building':
          this.buildingDialogVisible = status
          break
      }
    },
    handleClickSortTab(tab, event) {
      // console.log(tab, event)
      // console.log(this.sortTabValue)
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

.operations {
  border: 1px solid #c0c0c0;
  margin: 40px 0 10px;
  text-align: left;
}
</style>
