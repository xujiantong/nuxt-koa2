/* * @Author: lxt 淡入淡出 * @Date: 2019-05-10 09:17:13 * @Last Modified by: lxt
* @Last Modified time: 2019-05-10 11:47:27 */
<template>
  <transition name="fade">
    <div v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    // 淡入
    fadeIn() {
      this.show = true
    },
    // 淡出
    fadeOut() {
      this.show = false
    },
    // 淡入淡出
    fadeToggle() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
  z-index: 1000;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
