<template>
  <div class="wh100per">
    <div class="productor-images wh100per">
      <!-- <img class="image-1" src="/images/pic-input.gif" />
      <img class="image-2" src="/images/pic-input.gif" />
      <img class="image-3" src="/images/pic-input.gif" />
      <img class="image-4" src="/images/pic-input.gif" />
      <img class="image-5" src="/images/pic-input.gif" /> -->
      <fade ref="image-ref">
        <img class="image-6" src="/images/pic-production-end.png" />
      </fade>
    </div>

    <fade ref="productor-ref">
      <div
        v-for="(detail, key) in productor.details"
        :key="'productor-' + key"
        class="productor-item"
        :class="'item-' + (key + 1)"
      >
        <p class="datasource-count" v-text="detail.count"></p>
        <p class="sys-name" v-text="detail.systemName"></p>
      </div>
    </fade>
    <fade ref="total-ref">
      <p class="datasource-total productor-total" v-text="productor.total"></p>
    </fade>
  </div>
</template>
<script>
import DatasourceFadeFactory from '@/js/DatasourceFadeFactory'
import api from '@/api'

export default {
  mixins: [
    DatasourceFadeFactory.getDatasourceFade('productor', 'listProductors')
  ],
  data() {
    return {
      // 消费端数据源
      productor: {
        // 总数
        total: '',
        // 详情
        details: [{}, {}, {}, {}]
      }
    }
  },
  methods: {
    // 获取消费者数据源
    async listProductors() {
      const res = await api.listProductors()
      return res
    },
    // 淡入
    fadeIn() {
      this.$refs['productor-ref'].fadeIn()
      this.$refs['image-ref'].fadeIn()
      this.$refs['total-ref'].fadeIn()
    },
    // 淡出
    fadeOut() {
      this.$refs['productor-ref'].fadeOut()
      if (this.tmp.total !== this.productor.total) {
        this.$refs['image-ref'].fadeOut()
        this.$refs['total-ref'].fadeOut()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.productor-images {
  .image-6 {
    left: 249px;
    top: 178px;
  }
}

.productor-total {
  position: absolute;
  left: 203px;
  top: 127px;
}

.productor-item {
  width: 157px;
  height: 263px;
  position: absolute;

  &.item-1 {
    top: 367px;
    left: 15px;
  }

  &.item-2 {
    top: 276px;
    left: 174px;
  }

  &.item-3 {
    top: 182px;
    left: 337px;
  }

  &.item-4 {
    top: 90px;
    left: 495px;
  }

  &.item-5 {
    top: 0px;
    left: 658px;
  }

  .sys-name {
    margin-left: 35px;
    top: 34px;
  }

  .datasource-count {
    top: 9px;
  }
}
</style>
