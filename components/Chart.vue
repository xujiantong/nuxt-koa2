<template>
  <div class="chart-group">
    <p class="chart-tab">
      <span :class="{ active: activeTab === 'In' }" @click="clickHandler('In')"
        >流入排名</span
      >
      <span
        :class="{ active: activeTab === 'Out' }"
        @click="clickHandler('Out')"
        >流出排名</span
      >
    </p>
    <div v-if="activeTab === 'In'" class="chart">
      <div class="boxContent boxContent2">
        <div
          v-for="(item, index) in inRecords"
          :key="'in' + index"
          class="line"
        >
          <span class="span1" v-text="item.systemName"></span>
          <div class="rate">
            <div
              class="rated"
              :style="{ width: rateCmp(item.end, 'in') }"
            ></div>
          </div>
          <div class="countp-data">
            <span class="span3">条</span>
            <span class="span2">
              <ICountUp
                :start-val="item.start"
                :end-val="item.end"
                :decimals="countUp.decimals"
                :duration="countUp.duration"
                :options="countUp.options"
              />
            </span>
          </div>
        </div>
        <div
          v-if="inRecords.length === 0"
          style="font-size: 26px;font-weight: bold;color: #aeedf9;text-align:center;line-height:126px"
        >
          暂无数据
        </div>
      </div>
    </div>
    <div v-if="activeTab === 'Out'" class="chart">
      <div class="boxContent boxContent2">
        <div
          v-for="(item, index) in outRecords"
          :key="'out' + index"
          class="line"
        >
          <span class="span1" v-text="item.systemName"></span>
          <div class="rate">
            <div
              class="rated"
              :style="{ width: rateCmp(item.end, 'out') }"
            ></div>
          </div>
          <div class="countp-data">
            <span class="span3">条</span>
            <span class="span2">
              <ICountUp
                :start-val="item.start"
                :end-val="item.end"
                :decimals="countUp.decimals"
                :duration="countUp.duration"
                :options="countUp.options"
              />
            </span>
          </div>
        </div>
        <div
          v-if="outRecords.length === 0"
          style="font-size: 26px;font-weight: bold;color: #aeedf9;text-align:center;line-height:126px"
        >
          暂无数据
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ICountUp from 'vue-countup-v2'
import Timer from '@/js/Timer'
import api from '@/api'

const defaultData = [
  { systemName: '暂无', start: 0, end: 0 },
  { systemName: '暂无', start: 0, end: 0 },
  { systemName: '暂无', start: 0, end: 0 },
  { systemName: '暂无', start: 0, end: 0 },
  { systemName: '暂无', start: 0, end: 0 }
]

export default {
  components: {
    ICountUp
  },
  data() {
    return {
      // 需要显示的tab页
      activeTab: 'In',
      // 输入记录数
      inRecords: JSON.parse(JSON.stringify(defaultData)),
      // 输出记录数
      outRecords: JSON.parse(JSON.stringify(defaultData)),
      // 计时器
      chartTimer: null,
      countUp: {
        decimals: 0,
        duration: 3,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        }
      }
    }
  },
  created() {
    this.clickHandler('In')
  },
  methods: {
    rateCmp(val, type) {
      let max = 1
      if (this[type + 'Records'].length > 0) {
        max = this[type + 'Records'][0].end
      }
      return ((0.85 * val) / max) * 100 + '%'
    },
    // 点击切换排名
    async clickHandler(name) {
      if (name) {
        this.activeTab = name
      }
      await this.loadChartData()
      if (this.chartTimer) {
        this.chartTimer.destroy()
      }
      this.chartTimer = new Timer(
        this.timeInterval[this.activeTab.toLowerCase() + 'put'],
        this.refreshChartTimer
      )
    },
    // 加载定时器
    async refreshChartTimer() {
      await this.loadChartData()
      this.clickHandler()
    },
    // 加载表格
    async loadChartData() {
      const res = await api['list' + this.activeTab + 'putOverview']()
      res.sort((record1, record2) => {
        return record2.count - record1.count
      })
      this[`${this.activeTab.toLowerCase()}Records`] = JSON.parse(
        JSON.stringify(defaultData)
      )
      this.$nextTick(() => {
        for (let i = 0; i < 5; i++) {
          this[`${this.activeTab.toLowerCase()}Records`][i].systemName =
            res[i].systemName
          const end = this[`${this.activeTab.toLowerCase()}Records`][i].end
          this[`${this.activeTab.toLowerCase()}Records`][i].start = end
          this[`${this.activeTab.toLowerCase()}Records`][i].end = res[i].count
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
//单行显示，超出显示...
@mixin ellipsis() {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chart-group {
  z-index: 10;
  position: absolute;
  height: 100%;
  width: 100%;
  .chart-tab {
    height: 62px;
    font-size: 26px;
    font-family: RTWSYueGoTrial-Regular;
    font-weight: 400;
    color: rgba(254, 254, 254, 0.2);
    line-height: 62px;
    width: 465px;
    top: 770px;
    left: 25px;
    position: absolute;
    text-align: left;
    cursor: pointer;
    span.active {
      color: rgba(255, 255, 255, 1);
      background-image: url(/images/pic-choice.png);
      display: inline-block;
      background-position: 6px 30px;
      background-repeat: no-repeat;
    }
    span:first-child {
      margin-right: 51px;
    }
  }
}

.chart {
  position: absolute;
  top: 848px;
  left: 25px;
  width: 465px;
  height: 205px;

  &.flexbox {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .boxContent {
    &.boxContent1 {
      .line {
        display: flex;
        height: 52px;
        align-items: center;
        justify-content: space-between;
        margin-top: 5px;

        span {
          font-size: 12px;

          &.span1 {
            color: red;
            margin-left: 19px;
          }

          &.span2 {
            color: green;
            font-size: 14px;
            margin-right: 18px;
            font-family: Acens;
          }

          em {
            font-size: 14px;
            margin-left: 5px;
            font-style: normal;
            font-family: 'MicrosoftYaHei';
          }
        }
      }
    }

    &.boxContent2 {
      .line {
        height: 42px;
        display: flex;
        align-items: center;

        .span1 {
          margin-left: 8px;
          margin-right: 8px;
          width: 93px;
          font-size: 18px;
          font-family: RTWSYueGoTrial-Regular;
          font-weight: 400;
          color: rgba(254, 254, 254, 1);
          opacity: 0.8;
          @include ellipsis();
        }

        .rate {
          display: inline-block;
          height: 14px;
          width: calc(100% - 160px);
          background: #2c365a;
          position: relative;
          margin-right: 8px;
          width: 260px;

          .rated {
            position: absolute;
            height: 100%;
            transition: 1s linear;
            background: linear-gradient(to right, #1cdf7c, #76ffb9);
            left: 0;
            top: 0;
            width: 0;
          }
        }

        .countp-data {
          width: 105px;
          float: right;

          .span2 {
            color: #1cff87;
            font-family: Acens;
            font-size: 24px;
            margin-right: 5px;
            float: right;
          }

          .span3 {
            height: 17px;
            font-size: 18px;
            font-family: RTWSYueGoTrial-Regular;
            float: right;
            padding-top: 5px;
            font-weight: 400;
            color: rgba(254, 254, 254, 1);
            opacity: 0.8;
          }
        }
      }
    }

    &.boxContent3 {
      flex: 1;
      display: flex;
    }
  }
}
</style>
