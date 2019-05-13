<template>
  <div class="wh100per">
    <div class="flow-item item-in">
      <div class="flow-count">
        <ICountUp
          :start-val="recordOverview.in.start"
          :end-val="recordOverview.in.end"
          :decimals="countUp.decimals"
          :duration="countUp.duration"
          :options="countUp.options"
        />
        <span class="flow-count" v-text="recordOverview.in.unit"></span>
      </div>
      <img class="image" src="/images/pic-entry.png" />
      <span class="font">流入</span>
    </div>

    <div class="flow-item item-out">
      <div class="flow-count">
        <ICountUp
          :start-val="recordOverview.out.start"
          :end-val="recordOverview.out.end"
          :decimals="countUp.decimals"
          :duration="countUp.duration"
          :options="countUp.options"
        />
        <span class="flow-count" v-text="recordOverview.out.unit"></span>
      </div>
      <img src="/images/pic-out.png" />
      <span class="font">流出</span>
    </div>
    <div class="data-count source">
      <p>
        <ICountUp
          :start-val="totalResources.start"
          :end-val="totalResources.end"
          :decimals="countUp.decimals"
          :duration="countUp.duration"
          :options="countUp.options"
        />
        <span v-text="totalResources.unit"></span>
      </p>
      <div class="data">
        <img src="/images/pic-resources.png" />
        <span>资源总数</span>
      </div>
    </div>

    <div class="data-count record">
      <p>
        <ICountUp
          :start-val="recordOverview.all.start"
          :end-val="recordOverview.all.end"
          :decimals="countUp.decimals"
          :duration="countUp.duration"
          :options="countUp.options"
        />
        <span v-text="recordOverview.all.unit"></span>
      </p>
      <div class="data">
        <img src="/images/pic-record.png" />
        <span>记录总数</span>
      </div>
    </div>
  </div>
</template>
<script>
import ICountUp from 'vue-countup-v2'
import Timer from '@/js/Timer'
import Utils from '@/js/Utils'
import api from '@/api'

export default {
  components: {
    ICountUp
  },
  data() {
    return {
      // 资源总数
      totalResources: {
        start: 0,
        end: 0,
        unit: '+'
      },
      // 记录概览
      recordOverview: {
        all: {
          start: 0,
          end: 0,
          unit: '+'
        },
        in: {
          start: 0,
          end: 0,
          unit: '+'
        },
        out: {
          start: 0,
          end: 0,
          unit: '+'
        }
      },
      // 记录定时器
      recordTimer: null,
      // 资源定时器
      resourceTimer: null,
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
  async created() {
    await this.getResource()
    this.recordTimer = new Timer(this.timeInterval.record, this.getRecords)
    await this.getRecords()
    this.resourceTimer = new Timer(this.timeInterval.resource, this.getResource)
  },
  methods: {
    // 获取资源数
    async getResource() {
      this.totalResources.start = this.totalResources.end
      const res = await api.getResourceTotal()
      this.formatData(this.totalResources, res.total)
    },
    // 获取记录数
    async getRecords() {
      const res = await api.getRecordOverview()
      this.formatData(this.recordOverview.all, res.all)
      this.formatData(this.recordOverview.in, res.in, true)
      this.formatData(this.recordOverview.out, res.out, true)
    },
    // 格式化数据
    formatData(target, source, flag) {
      target.start = target.end
      const formatter = Utils.formatNumber(source)
      target.end = formatter.num
      target.unit = formatter.unit
      if (!flag) {
        target.unit += '+'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.flow-item {
  position: absolute;
  z-index: 10;

  .font {
    font-size: 22px;
    font-family: RTWSYueGoTrial-Regular;
    font-weight: 400;
    color: rgba(255, 214, 92, 1);
    text-shadow: 0px 3px 7px rgba(52, 52, 52, 0.22);
    margin-left: 6px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }

  .flow-count {
    font-size: 40px;
    font-family: Acens;
    font-weight: bold;
    color: rgba(242, 252, 255, 1);
    text-shadow: 0px 3px 7px rgba(52, 52, 52, 0.22);
  }

  &.item-in {
    left: 862px;
    top: 309px;
    width: 251px;
  }

  &.item-out {
    left: 860px;
    top: 430px;
    width: 254px;
  }
}

.data-count {
  height: 112px;
  position: absolute;
  z-index: 10;

  p {
    height: 57px;
    font-size: 77px;
    font-family: Acens;
    font-weight: bold;
    color: rgba(18, 250, 253, 1);
  }

  .data {
    position: absolute;
    right: 0px;
    top: 106px;

    img {
      position: absolute;
      right: 174px;
    }

    span {
      font-size: 34px;
      font-family: RTWSYueGoTrial-Regular;
      font-weight: 400;
      color: rgba(254, 254, 254, 1);
      opacity: 0.8;
      position: absolute;
      width: 175px;
      right: 0px;
    }
  }

  &.record {
    top: 281px;
    right: 51px;
  }

  &.source {
    top: 95px;
    right: 51px;
  }
}
</style>
