import { createApp } from 'vue'
import pinia from './plugins/pinia'
import i18n from './plugins/i18n'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

const init = async (vueApp) => {
  /**
   * 動態註冊全域組件
   */
  const dynamicImportComponents = async () => {
    const requireComponent = import.meta.glob('./components/global/**/*.vue')
    const requireKeys = Object.keys(requireComponent)

    for (let i = 0; i < requireKeys.length; i++) {
      const moduleName = requireKeys[i]
      const mod = await requireComponent[moduleName]()
      const split = moduleName.split('/')
      const name = split[split.length - 1].split('.')[0]
      vueApp.component(name, mod.default)
    }
  }
  await dynamicImportComponents()

  vueApp.use(router)
  vueApp.use(pinia)
  vueApp.use(i18n)

  vueApp.mount('#app')
}

init(app)
