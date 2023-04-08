import { defineStore } from 'pinia'
import { onMounted, ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLocalLangStore = defineStore(
  'localLangControl',
  () => {
    const { locale } = useI18n()

    const localLang = ref('zh')

    const langList = reactive([
      { name: '中文', code: 'zh' },
      { name: 'English', code: 'en' }
    ])

    const initLocalLang = () => {
      onMounted(() => {
        locale.value = localLang.value
      })
    }

    const setLocalLang = (lang) => {
      localLang.value = lang
      locale.value = lang
    }

    return { localLang, langList, initLocalLang, setLocalLang }
  },
  { persist: true }
)
