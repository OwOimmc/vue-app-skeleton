<template>
  <div
    :class="{ 'bg-[#ffeb3b]': isYellow, 'bg-[#0095ff]': !isYellow }"
    class="p flex items-center justify-center"
  >
    <div class="main max-w-[120rem] my-50 w-full grid justify-between">
      <div
        v-for="(b, i) in arrBlocks"
        :key="`b-${i}`"
        :style="{
          'grid-area': b.x + '/' + b.y,
          width: `${b.box}rem`,
          height: `${b.box}rem`,
          background: b.acutal
        }"
        class="block"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isTimerMoveBox = ref(true)
const isTimerStyleBox = ref(true)
const isTimerStyleWrapper = ref(true)

const isYellow = ref(true)

const timerMoveBox = () => {
  if (isTimerMoveBox.value) {
    setTimeout(() => {
      move()
      timerMoveBox()
    }, 1000)
  }
}
const timerStyleBox = () => {
  if (isTimerStyleBox.value) {
    setTimeout(() => {
      style()
      timerStyleBox()
    }, 1000)
  }
}

const timerStyleWrapper = () => {
  if (isTimerStyleWrapper.value) {
    setTimeout(() => {
      style()

      isYellow.value = !isYellow.value

      timerStyleWrapper()
    }, 250)
  }
}

const arrBlocks = ref([
  { x: 1, y: 2, box: 3, bg1: '#0095ff', bg2: '#ffeb3b', acutal: '#0095ff' },
  { x: 2, y: 2, box: 3, bg1: '#0095ff', bg2: '#ffeb3b', acutal: '#0095ff' },
  { x: 1, y: 3, box: 3, bg1: '#0095ff', bg2: '#ffeb3b', acutal: '#0095ff' },
  { x: 4, y: 1, box: 3, bg1: '#0095ff', bg2: '#ffeb3b', acutal: '#0095ff' },
  { x: 2, y: 4, box: 3, bg1: '#0095ff', bg2: '#ffeb3b', acutal: '#0095ff' },
  { x: 3, y: 3, box: 3, bg1: '#0095ff', bg2: '#ffeb3b', acutal: '#0095ff' }
])

// const go = (axis) => {
//   axis <= 4 ? axis++ : (axis = 1)
//   return axis
// }

const getRadnom = (max) => {
  return Math.floor(Math.random() * max)
}

const move = () => {
  for (let index = 0; index < arrBlocks.value.length; index++) {
    arrBlocks.value[index].x = getRadnom(6)
    arrBlocks.value[index].y = getRadnom(6)
  }
}

const style = () => {
  for (let index = 0; index < arrBlocks.value.length; index++) {
    arrBlocks.value[index].box = getRadnom(10)
    arrBlocks.value[index].acutal =
      getRadnom(2) === 1
        ? arrBlocks.value[index].bg2
        : arrBlocks.value[index].bg1
  }
}

timerMoveBox()
timerStyleBox()
timerStyleWrapper()
</script>

<style lang="less" scoped>
.p {
  --w: 12rem;
  height: 100vh;
  width: 100%;
  // animation: blueToYellow 2s linear infinite;
}

.main {
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5rem;
  justify-items: center;
  align-items: center;
}

.block {
  width: 3rem;
  height: 3rem;
  // animation: yellowToBlue 500s linear infinite;
  transition: width 2s, height 2s;
}

@keyframes blueToYellow {
  0% {
    background-color: #0095ff;
  }
  100% {
    background-color: #ffeb3b;
  }
}

@keyframes yellowToBlue {
  25% {
    background-color: #ffeb3b;
    // filter: blur(0.4rem);
  }
  50% {
    background-color: #0095ff;
    // filter: blur(0rem);
  }
  75% {
    // filter: blur(0.4rem);
    background-color: #ffeb3b;
  }
  100% {
    background-color: #0095ff;
    // filter: blur(0rem);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

// div {
//   &::before {
//     content: '';
//     border: 0.1rem solid #000;
//     top: 0;
//     bottom: 0;
//     width: 100%;
//     position: absolute;
//   }
//   &::after {
//     content: '';
//   }
// }
</style>
