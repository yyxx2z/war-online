<template>
  <div class="wrapper">
    <h3>数据统计面板</h3>
    <ul class="panel-col" v-if="showList && showList.length !== 0">
      <li v-for="(row, index) in showList" :key="index">
        <div class="panel-row" v-if="row.unlocked">
          <div class="row-title">{{ row.name }}</div>
          <div class="row-value">
            <span
              class="row-value-current"
              :class="{ 'row-value-current__fulled': row.value >= row.stock }"
            >{{ row.value }}</span>
             /
            <span class="row-value-limit">{{ row.stock }}</span></div>
          <div class="row-rate">({{ row.rate }}/秒)</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TemlateMixin from '../../mixin/template'

export default {
  mixins: [TemlateMixin],

  computed: {
    ...mapState({
      showList: state => state.user.resources
    })
  },

  mounted() {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 2px 4px;
  text-align: left;
  width: 100%;

  .panel-col {
    width: 100%;
    margin-top: 10px;

    .panel-row {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      font-size: 13px;

      .row-title {
        width: 40px;
        margin-right: 6px;
      }

      .row-value {
        width: 30%;

        &-limit {
          color: #757575;
        }

        &-current {
          &__fulled {
            color: #d32f2f;
          }
        }
      }

      .row-rate {
        min-width: 40px;
      }
    }
  }
}
</style>
