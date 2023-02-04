<template>
  <div class="p flex items-center justify-center">
    <div class="main flex my-50">
      <div>
        <span></span>
        F
        <span></span>
      </div>
      <div>
        <span></span>
        O
        <span></span>
      </div>
      <div>
        <span></span>
        C
        <span></span>
      </div>
      <div>
        <span></span>
        U
        <span></span>
      </div>
      <div>
        <span></span>
        S
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const x = ref(0)

    x.value++
    return {
      x
    }
  }
}
</script>

<style lang="less" scoped>
.p {
  --w: 0.5rem;
  --color: rgb(0, 149, 255);
  height: 100vh;
  width: 100%;
  background-color: var(--color);
}

.main {
  font-size: 10rem;
  position: relative;
  color: #fff;
  > div {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    line-height: 8rem;
    margin: 0 1rem;
    filter: blur(0.5rem);
    &:hover {
      animation: focus 0.4s;
      filter: blur(0rem);
      span {
        animation: fadeIn 0.4s;
        opacity: 1;
      }
    }

    span {
      animation: fadeOut 0.4s;
      opacity: 0;
      position: relative;
      border-top: var(--w) solid #fff;
      border-right: var(--w) solid #fff;
      border-left: var(--w) solid #fff;
      display: block;
      height: 1.5rem;
      width: 130%;
      margin: 0.5rem 0 0 5%;
      &:last-child {
        transform: rotateX(180deg);
      }
      &:before {
        position: absolute;
        content: '';
        width: 50%;
        height: var(--w);
        background-color: var(--color);
        z-index: 2;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}

@keyframes focus {
  from {
    filter: blur(0.4rem);
  }
  to {
    filter: blur(0rem);
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