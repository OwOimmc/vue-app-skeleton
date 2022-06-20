<template>
  <div>
    {{ x }}
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

<style>
</style>