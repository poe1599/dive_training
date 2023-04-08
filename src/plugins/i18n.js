import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

// 設置 i18n
const i18n = createI18n({
  globalInjection: true, // 全域注入，讓你在 <template> 可以使用 $t
  legacy: false, // 在 composition API 中使用
  messages,
  locale: 'zh',
  fallbackLocale: 'en',
  availableLocales: ['zh', 'en']
})

export default i18n
