<template>
  <component :is="layout"></component>
</template>
<script>
export default {
  name: 'AppIndex'
}
</script>
<script setup>
import { useThemeStore } from '@/stores/theme'
import { useLocalLangStore } from '@/stores/localLang'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

/**
 * 共用工具
 */
const route = useRoute()

/**
 * layout
 */
const layout = computed(() => route.meta.layout)

const { initTheme } = useThemeStore()
initTheme()

const { initLocalLang } = useLocalLangStore()
initLocalLang()
</script>
<style lang="scss" scoped>
</style>