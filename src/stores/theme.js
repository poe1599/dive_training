import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

/**
 * 定義一個名為 useThemeStore 的狀態庫，該狀態庫包含了一些操作主題顏色的函數。
 * @returns {Object} 返回一個包含 theme、toggleTheme、initTheme 的對象。
 */
export const useThemeStore = defineStore(
  'themeControl',
  () => {
    /**
     * 生成一個媒體查詢對象，用於檢測當前使用者是否選擇深色模式。
     * @returns {MediaQueryList|null} 返回一個 MediaQueryList 物件或 null
     */
    const genDarkQuery = () => {
      try {
        return window.matchMedia('(prefers-color-scheme: dark)')
      } catch (error) {
        return null
      }
    }

    const theme = ref(genDarkQuery()?.matches ? 'dark' : 'light')

    /**
     * 切換主題模式。
     * 如果當前模式是淺色模式，則切換到深色模式，反之亦然。
     */
    const toggleTheme = () => {
      if (theme.value === 'light') theme.value = 'dark'
      else theme.value = 'light'

      doChangeTheme()
    }

    /**
     * 更改文檔根元素的 data-theme 屬性，以應用當前選定的主題模式。
     */
    const doChangeTheme = () => {
      document.documentElement.setAttribute('data-theme', theme.value)
    }

    /**
     * 初始化主題模式。
     * 在元素掛載後，設置當前選定的主題模式。
     */
    const initTheme = () => {
      onMounted(() => {
        doChangeTheme()
      })
    }

    return { theme, toggleTheme, initTheme }
  },
  { persist: true }
)
