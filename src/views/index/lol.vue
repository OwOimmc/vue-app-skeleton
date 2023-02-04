<template>
  <div class="p flex items-center justify-center">
    <div class="main max-w-[120rem] my-50 w-full grid justify-between">
      <div
        v-for="(b, i) in arrBlocks"
        :key="`b-${i}`"
        :style="{ 'grid-area': b.x + '/' + b.y }"
        class="block"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const countDown = ref(true)

const countDownTimer = () => {
  if (countDown.value) {
    setTimeout(() => {
      doIt()
      // countDown.value -= 1
      countDownTimer()
    }, 500)
  }
}

const arrBlocks = ref([
  { x: 1, y: 2 },
  { x: 2, y: 2 },
  { x: 1, y: 3 },
  { x: 4, y: 1 },
  { x: 2, y: 4 },
  { x: 3, y: 3 }
])

const go = (axis) => {
  axis <= 4 ? axis++ : (axis = 1)
  return axis
}

const doIt = () => {
  arrBlocks.value.forEach((b) => {
    b.x = go(b.x)
    b.y = go(b.y)
  })
}

countDownTimer()
</script>

<style lang="less" scoped>
.p {
  --w: 12rem;
  height: 100vh;
  width: 100%;
  animation: blueToYellow 1s linear infinite;
  // animation: blueToYellow 800s linear infinite;
}

.main {
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5rem;
  justify-items: center;
  align-items: center;
}

.block {
  width: 10rem;
  height: 10rem;
  // animation: yellowToBlue 500s linear infinite;
  transition: all 3s;

  animation: yellowToBlue 0.4s linear infinite;

  // &:nth-child(1) {
  //   grid-area: 1 / 1;
  // }
  // &:nth-child(2) {
  //   grid-area: 1 / 5;
  // }
  // &:nth-child(3) {
  //   grid-area: 2 / 3;
  // }
  // &:nth-child(4) {
  //   grid-area: 1 / 2;
  // }
  // &:nth-child(5) {
  //   grid-area: 4 / 1;
  // }
  // &:nth-child(6) {
  //   grid-area: 5 / 4;
  // }
}

// .main {
//   font-size: 10rem;
//   position: relative;
//   color: #fff;
//   > div {
//     display: flex;
//     flex-direction: column;
//     justify-items: center;
//     align-items: center;
//     line-height: 8rem;
//     margin: 0 1rem;
//     // filter: blur(0.5rem);
//     &:hover {
//       animation: focus 0.4s;
//       filter: blur(0rem);
//       span {
//         animation: fadeIn 0.4s;
//         opacity: 1;
//       }
//     }

//     span {
//       animation: fadeOut 0.4s;
//       opacity: 0;
//       position: relative;
//       border-top: var(--w) solid #fff;
//       border-right: var(--w) solid #fff;
//       border-left: var(--w) solid #fff;
//       display: block;
//       height: 1.5rem;
//       width: 130%;
//       margin: 0.5rem 0 0 5%;
//       &:last-child {
//         transform: rotateX(180deg);
//       }
//       &:before {
//         position: absolute;
//         content: '';
//         width: 50%;
//         height: var(--w);
//         background-color: var(--color);
//         z-index: 2;
//         top: -5px;
//         left: 50%;
//         transform: translateX(-50%);
//       }
//     }
//   }
// }

@keyframes blueToYellow {
  from {
    // filter: blur(0.4rem);
    background-color: #0095ff;
  }
  to {
    background-color: #ffeb3b;
    // filter: blur(0rem);
  }
}

@keyframes yellowToBlue {
  from {
    // filter: blur(0.4rem);
    background-color: #ffeb3b;
  }
  to {
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
