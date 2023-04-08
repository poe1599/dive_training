<template>
  <div>
    <h2>Pinia</h2>
    <p>Example: useCounterStore</p>
    <p>counter.count: {{ counter.count }}</p>
    <p>counter.doubleCount: {{ counter.doubleCount }}</p>
    <p><button @click="counter.increment">Click Me</button></p>
  </div>
</template>
<script>
export default {
  name: 'PiniaCounter'
}
</script>
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>
<style lang="scss" scoped>
</style>