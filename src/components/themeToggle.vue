<template>
  <div>
    Color <br />
    <button @click="toggleTheme">{{ theme }}</button>
  </div>
</template>
<script>
export default {
  name: 'ThemeToggle'
}
</script>
<script setup>
import { useThemeStore } from '@/stores/theme'

const { toggleTheme, theme } = useThemeStore()
</script>
<style lang="scss" scoped>
</style>