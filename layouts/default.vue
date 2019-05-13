<template>
  <div id="app">
    <nuxt />
  </div>
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

html,
body,
#app {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
}

.wh100per {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1080px;
}

.consumer-images,
.productor-images {
  img {
    position: absolute;
  }
}

@mixin font($size, $weight, $family) {
  font-size: $size;
  font-weight: $weight;
  font-family: $family;
}

.datasource-total {
  @include font(61px, bold, Acens);
  text-shadow: -2px -3px 0px rgba(8, 187, 253, 1);
  color: #f2fcff;
  transform: rotate3d(-2.4, 2.5, -1.2, 51deg) scaleZ(1.2);
  text-align: center;
  z-index: 6;
  width: 137px;
  height: 73px;
}

.sys-name {
  @include font(16px, bold, MicrosoftYaHei);
  width: 88px;
  height: 31px;
  color: rgba(255, 255, 255, 1);
  line-height: 32px;
  opacity: 0.8;
  text-shadow: 0px 3px 7px rgba(52, 52, 52, 0.22);
  position: absolute;
  text-align: center;
}

.datasource-count {
  @include font(28px, bold, Acens);
  width: 100%;
  color: #12fafd;
  line-height: 25px;
  text-shadow: 0px 3px 7px rgba(52, 52, 52, 0.22);
  text-align: center;
  position: absolute;
}

//单行显示，超出显示...
@mixin ellipsis() {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sys-name {
  @include ellipsis();
}

.box {
  border: 1px solid red;
}
</style>
