<template>
  <div v-if="isLoading" class="index">
    <img src="/images/pic-title.png" class="icon-logo" />
    <div class="pipe-productor pipe-1">
      <img src="/images/pipe01.png" />
    </div>
    <div class="pipe-productor pipe-2">
      <img src="/images/pipe01.png" />
    </div>
    <div class="pipe-productor pipe-3">
      <img src="/images/pipe00.png" />
    </div>
    <div class="pipe-productor pipe-4">
      <img src="/images/pipe01.png" />
    </div>
    <div class="pipe-productor pipe-5">
      <img src="/images/pipe01.png" />
    </div>
    <div class="pipe-horizontal">
      <img src="/images/pipe02.png" />
    </div>
    <div class="water-pump water-pump-left">
      <img src="/images/pic-water-pump.gif" />
    </div>
    <div class="pipe-connection-left pipe-1">
      <img src="/images/pipe03.png" />
    </div>
    <div class="pipe-connection-left pipe-2">
      <img src="/images/pipe03.png" />
    </div>
    <div class="pic-core">
      <img src="/images/pic-core.gif" />
    </div>

    <div class="pipe-connection-right pipe-1">
      <img src="/images/pipe04.png" />
    </div>
    <div class="pipe-connection-right pipe-2">
      <img src="/images/pipe04.png" />
    </div>
    <div class="water-pump water-pump-right">
      <img src="/images/pic-water-pump.gif" />
    </div>
    <div class="pipe-doule">
      <img src="/images/pipe05.png" />
    </div>

    <div class="water-pump water-pump-right">
      <img src="/images/pic-water-pump.gif" />
    </div>
    <div class="pipe-doule">
      <img src="/images/pipe05.png" />
    </div>
    <div class="pipe-productor-3">
      <img src="/images/pipe08.png" />
    </div>
    <div class="pipe-productor-4">
      <img src="/images/pipe07.png" />
    </div>

    <div class="consumer-images wh100per">
      <img class="image-1" src="/images/pic-blue1.gif" />
      <img class="image-2" src="/images/pic-blue2.gif" />
      <img class="image-3" src="/images/pic-green.gif" />
      <img class="image-4" src="/images/pic-yellow.gif" />
    </div>

    <div class="productor-images wh100per">
      <img class="image-1" src="/images/pic-input.gif" />
      <img class="image-2" src="/images/pic-input.gif" />
      <img class="image-3" src="/images/pic-input.gif" />
      <img class="image-4" src="/images/pic-input.gif" />
      <img class="image-5" src="/images/pic-input.gif" />
    </div>
    <datasource-consumer></datasource-consumer>
    <animation></animation>
    <chart></chart>
    <resource-overview></resource-overview>
    <datasource-productor></datasource-productor>
  </div>
</template>

<script>
import Vue from 'vue'
import Animation from '@/components/Animation'
import Chart from '@/components/Chart'
import ResourceOverview from '@/components/ResourceOverview'
import DatasourceConsumer from '@/components/DatasourceConsumer'
import DatasourceProductor from '@/components/DatasourceProductor'
import api from '@/api'

export default {
  name: 'Index',
  components: {
    Chart,
    Animation,
    ResourceOverview,
    DatasourceConsumer,
    DatasourceProductor
  },
  data() {
    return {
      isLoading: false
    }
  },
  async beforeCreate() {
    Vue.prototype.timeInterval = await api.getInterval()
    this.isLoading = true
  }
}
</script>
<style lang="scss" scoped>
.consumer-images {
  .image-1 {
    top: 911px;
    left: 1371px;
  }

  .image-2 {
    top: 826px;
    left: 1490px;
  }

  .image-3 {
    top: 766px;
    left: 1620px;
  }

  .image-4 {
    top: 694px;
    left: 1769px;
  }

  .image-5 {
    left: 1824px;
    top: 1015px;
  }
}

.productor-images {
  .image-1 {
    top: 367px;
    left: 15px;
  }

  .image-2 {
    top: 276px;
    left: 174px;
  }

  .image-3 {
    top: 182px;
    left: 337px;
  }

  .image-4 {
    top: 90px;
    left: 495px;
  }

  .image-5 {
    top: 0px;
    left: 658px;
  }

  .image-6 {
    left: 249px;
    top: 178px;
  }
}
.index {
  width: 100%;
  height: 100%;
  background-image: url(/images/pic-bg.png);
}

.icon-logo {
  float: left;
  margin: 28px 27px;
}

.pipe-productor {
  width: 132px;
  position: absolute;
  height: 124px;
  z-index: 2;

  &.pipe-1 {
    top: 536px;
    left: 118px;
  }

  &.pipe-2 {
    top: 445px;
    left: 278px;
  }

  &.pipe-3 {
    top: 351px;
    left: 440px;
  }

  &.pipe-4 {
    top: 258px;
    left: 597px;
  }

  &.pipe-5 {
    top: 167px;
    left: 761px;
  }
}

.pipe-horizontal {
  width: 715px;
  height: 425px;
  position: absolute;
  top: 263px;
  left: 194px;
}

.pipe-connection-left {
  width: 112px;
  height: 50px;
  position: absolute;
  z-index: 4;

  &.pipe-1 {
    top: 541px;
    left: 636px;
  }

  &.pipe-2 {
    top: 525px;
    left: 677px;
  }
}

.pipe-connection-right {
  width: 123px;
  height: 106px;
  position: absolute;
  z-index: 2;

  &.pipe-1 {
    top: 769px;
    left: 1142px;
  }

  &.pipe-2 {
    top: 737px;
    left: 1189px;
  }
}

.water-pump {
  width: 202px;
  height: 239px;
  position: absolute;
  z-index: 2;

  &.water-pump-left {
    left: 524px;
    top: 347px;
  }

  &.water-pump-right {
    left: 1231px;
    top: 703px;
  }
}

.pic-core {
  position: absolute;
  z-index: 2;
  top: 0px;
  left: 430px;
  height: 999px;
  width: 923px;
}

.pipe-doule {
  position: absolute;
  top: 750px;
  left: 1174px;
}

.pipe-productor-3 {
  left: 1408px;
  top: 885px;
  position: absolute;
}

.pipe-productor-4 {
  left: 1348px;
  top: 914px;
  position: absolute;
}
</style>
