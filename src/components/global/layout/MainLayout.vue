<template>
  <div class="layout">
    <HeaderComponent></HeaderComponent>
    <div class="layout__container">
      <Router-view></Router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainLayout'
}
</script>
<script setup>
import HeaderComponent from '@/components/header.vue'
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;

  // &__container {
  // }
}
</style>
