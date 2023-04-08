<template>
  <select v-model="localLang" @change="setLocalLang($event.target.value)">
    <option v-for="i in langList" :value="i.code" :key="i.code">{{ i.name }}</option>
  </select>

  <div>{{ t('to_be_or_not_to_be') }}</div>
</template>
<script>
export default {
  name: 'i18nExample'
}
</script>
<script setup>
import i18nMessages from '@/locales/hamlet'
import { useLocalLangStore } from '@/stores/localLang'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: i18nMessages
})

const { localLang, langList, setLocalLang } = useLocalLangStore()
</script>
<style lang="scss" scoped>
</style>