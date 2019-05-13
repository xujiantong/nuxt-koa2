<template>
  <div class="wh100per">
    <span class="play-circle circle-1"></span>
    <span class="play-circle circle-2"></span>
    <span class="play-circle circle-3"></span>
    <span class="play-circle circle-4"></span>
    <span class="play-circle circle-5"></span>
    <span class="play-circle circle-6"></span>
    <span class="play-circle circle-7"></span>

    <span class="play-circle circle-8"></span>
    <span class="play-circle circle-9"></span>
    <span class="play-circle circle-10"></span>
    <span class="play-circle circle-11"></span>

    <span class="play-circle circle-12"></span>
    <span class="play-circle circle-13"></span>
  </div>
</template>
<style lang="scss" scoped>
.play-circle {
  border-radius: 50%;
  background: url(/images/point.png) center center;
  width: 28px;
  height: 28px;
  background-size: cover;
  position: absolute;
  animation-direction: normal;
  opacity: 0;
  z-index: 1;
}

.circle-1 {
  animation: circle-animation-1 7s ease-in-out infinite;
}

@mixin lto($left, $top, $opacity: 1) {
  left: $left;
  top: $top;
  opacity: $opacity;
}

@mixin circle-1-end() {
  @include lto(573px, 481px, 0);
}

@mixin circle-1-last() {
  @include lto(550px, 460px, 1);
}

@keyframes circle-animation-1 {
  0% {
    @include lto(114px, 535px, 1);
  }

  50% {
    @include lto(224px, 604px, 1);
  }

  60% {
    @include lto(226px, 644px, 1);
  }

  90% {
    @include circle-1-last();
  }

  100% {
    @include circle-1-end();
  }
}

.circle-2 {
  animation: circle-animation-2 6s ease-in-out infinite;
}

@keyframes circle-animation-2 {
  0% {
    @include lto(273px, 443px, 1);
  }

  50% {
    @include lto(384px, 514px, 1);
  }

  60% {
    @include lto(386px, 553px, 1);
  }

  90% {
    @include circle-1-last();
  }

  100% {
    @include circle-1-end();
  }
}

.circle-3 {
  animation: circle-animation-3 4s ease-in-out infinite;
}

@keyframes circle-animation-3 {
  0% {
    @include lto(435px, 350px, 1);
  }

  50% {
    @include lto(545px, 419px, 1);
  }

  60% {
    @include circle-1-last();
  }

  100% {
    @include circle-1-end();
  }
}

.circle-4 {
  animation: circle-animation-4 6s ease-in-out infinite;
}

@keyframes circle-animation-4 {
  0% {
    @include lto(594px, 258px, 1);
  }

  50% {
    @include lto(703px, 325px, 1);
  }

  60% {
    @include lto(703px, 368px, 1);
  }

  90% {
    @include circle-1-last();
  }

  100% {
    @include circle-1-end();
  }
}

.circle-5 {
  animation: circle-animation-5 7s ease-in-out infinite;
}

@keyframes circle-animation-5 {
  0% {
    @include lto(757px, 168px, 1);
  }

  50% {
    @include lto(867px, 235px, 1);
  }

  60% {
    @include lto(870px, 275px, 1);
  }

  90% {
    @include circle-1-last();
  }

  100% {
    @include circle-1-end();
  }
}

.circle-6 {
  z-index: 5;
  animation: circle-animation-6 1.7s ease-in-out infinite;
  animation-delay: 6s;
}

@keyframes circle-animation-6 {
  0% {
    @include lto(677px, 538px, 0.2);
  }

  20% {
    @include lto(705px, 549px, 0.2);
  }

  60% {
    @include lto(727px, 526px, 1);
  }

  100% {
    @include lto(763px, 547px, 0);
  }
}

.circle-7 {
  z-index: 5;
  animation: circle-animation-7 1.5s ease-in-out infinite;
  animation-delay: 4s;
}

@keyframes circle-animation-7 {
  0% {
    @include lto(641px, 558px, 1);
  }

  20% {
    @include lto(664px, 564px, 1);
  }

  60% {
    @include lto(685px, 541px, 1);
  }

  100% {
    @include lto(721px, 561px, 0);
  }
}

.circle-8 {
  animation: circle-animation-8 1.6s ease-in-out infinite;
  animation-delay: 6s;
}

@keyframes circle-animation-8 {
  0% {
    @include lto(1139px, 771px, 1);
  }

  50% {
    @include lto(1205px, 813px, 1);
  }

  70% {
    @include lto(1220px, 839px, 0.8);
  }

  100% {
    @include lto(1235px, 853px, 0);
  }
}

.circle-9 {
  animation: circle-animation-9 2.7s ease-in-out infinite;
  animation-delay: 8s;
}

@keyframes circle-animation-9 {
  0% {
    @include lto(1187px, 739px, 1);
  }

  50% {
    @include lto(1250px, 779px, 1);
  }

  70% {
    @include lto(1264px, 806px, 0.8);
  }

  100% {
    @include lto(1282px, 822px, 0);
  }
}

.circle-10 {
  animation: circle-animation-10 3s ease-in-out infinite;
  animation-delay: 8s;
}

@keyframes circle-animation-10 {
  0% {
    @include lto(1282px, 900px, 1);
  }

  50% {
    @include lto(1188px, 964px, 1);
  }

  60% {
    @include lto(1189px, 1007px, 1);
  }

  70% {
    @include lto(1221px, 1030px, 1);
  }

  100% {
    @include lto(1295px, 1070px, 0);
  }
}

.circle-11 {
  animation: circle-animation-11 3s ease-in-out infinite;
  animation-delay: 10s;
}

@keyframes circle-animation-11 {
  0% {
    @include lto(1383px, 842px, 1);
  }

  40% {
    @include lto(1499px, 769px, 1);
  }

  50% {
    @include lto(1531px, 757px, 1);
  }

  60% {
    @include lto(1570px, 769px, 1);
  }

  70% {
    @include lto(1621px, 804px, 0);
  }

  89% {
    @include lto(1721px, 861px, 0);
  }

  90% {
    @include lto(1721px, 861px, 1);
  }

  100% {
    @include lto(1791px, 905px, 0);
  }
}

.circle-12 {
  animation: circle-animation-12 1.5s ease-in-out infinite;
  animation-delay: 10s;
}

@keyframes circle-animation-12 {
  0% {
    @include lto(1349px, 909px, 1);
  }

  50% {
    @include lto(1375px, 932px, 0);
  }

  70% {
    @include lto(1422px, 988px, 0);
  }

  78% {
    @include lto(1472px, 1021px, 0);
  }

  80% {
    @include lto(1472px, 1021px, 1);
  }

  100% {
    @include lto(1510px, 1045px, 0);
  }
}

.circle-13 {
  animation: circle-animation-13 2s ease-in-out infinite;
  animation-delay: 10s;
}

@keyframes circle-animation-13 {
  0% {
    @include lto(1407px, 880px, 1);
  }

  40% {
    @include lto(1471px, 918px, 1);
  }

  50% {
    @include lto(1496px, 912px, 0);
  }

  70% {
    @include lto(1534px, 900px, 0);
  }

  84% {
    @include lto(1589px, 931px, 0);
  }

  85% {
    @include lto(1591px, 931px, 1);
  }

  100% {
    @include lto(1652px, 969px, 0);
  }
}
</style>
