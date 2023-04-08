<template>
  <div></div>
</template>
<script>
export default {
  name: 'AppIndex'
}
</script>
<script setup>
import { useThemeStore } from '@/stores/theme'
import { useLocalLangStore } from '@/stores/localLang'

const { initTheme } = useThemeStore()
initTheme()

const { initLocalLang } = useLocalLangStore()
initLocalLang()
</script>
<style lang="scss" src="@/assets/scss/_variable.scss"></style>
<style lang="scss" scoped>
</style>