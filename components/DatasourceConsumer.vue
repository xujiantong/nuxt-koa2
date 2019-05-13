<template>
  <div class="wh100per">
    <div class="consumer-images wh100per">
      <fade ref="image-ref">
        <img class="image-5" src="/images/pic-consumer-end.png" />
      </fade>
    </div>
    <fade ref="consumer-ref">
      <div
        v-for="(detail, key) in consumer.details"
        :key="'consumer-' + key"
        class="pipe-consumer"
        :class="'pipe-' + (key + 1)"
      >
        <p class="datasource-count" v-text="detail.count"></p>
        <p class="sys-name" v-text="detail.systemName"></p>
      </div>
    </fade>
    <fade ref="total-ref">
      <p class="datasource-total consumer-total" v-text="consumer.total"></p>
    </fade>
  </div>
</template>
<script>
import DatasourceFadeFactory from '@/js/DatasourceFadeFactory'
import api from '@/api'
export default {
  mixins: [
    DatasourceFadeFactory.getDatasourceFade('consumer', 'listConsumers')
  ],
  data() {
    return {
      // 消费端数据源
      consumer: {
        // 总数
        total: '',
        // 详情
        details: [{}, {}, {}, {}]
      }
    }
  },
  methods: {
    // 获取消费者数据源
    async listConsumers() {
      const res = await api.listConsumers()
      return res
    },
    // 淡入
    fadeIn() {
      this.$refs['consumer-ref'].fadeIn()
      this.$refs['image-ref'].fadeIn()
      this.$refs['total-ref'].fadeIn()
    },
    // 淡出
    fadeOut() {
      this.$refs['consumer-ref'].fadeOut()
      if (this.tmp.total !== this.consumer.total) {
        this.$refs['image-ref'].fadeOut()
        this.$refs['total-ref'].fadeOut()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.consumer-images {
  .image-5 {
    left: 1818px;
    top: 1019px;
  }
}

.consumer-total {
  position: absolute;
  left: 1770px;
  top: 971px;
}

.pipe-consumer {
  width: 128px;
  height: 278px;
  position: absolute;

  .datasource-count,
  .sys-name {
    z-index: 10;
  }

  .sys-name {
    margin-left: 21px;
  }

  &.pipe-1 {
    top: 911px;
    left: 1371px;

    .datasource-count {
      top: 92px;
    }

    .sys-name {
      top: 117px;
    }
  }

  &.pipe-2 {
    top: 826px;
    left: 1490px;

    .datasource-count {
      top: 107px;
    }

    .sys-name {
      top: 132px;
    }
  }

  &.pipe-3 {
    top: 766px;
    left: 1620px;

    .datasource-count {
      top: 110px;
    }

    .sys-name {
      top: 135px;
    }
  }

  &.pipe-4 {
    top: 694px;
    left: 1769px;

    .datasource-count {
      top: 99px;
    }

    .sys-name {
      top: 124px;
    }
  }
}
</style>
