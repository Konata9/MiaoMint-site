import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'
import ja from './locales/ja.json'

const getBrowserLocale = () => {
  const persistedLocale = localStorage.getItem('locale')
  if (persistedLocale) {
    return persistedLocale
  }
  const navigatorLocale = navigator.language || 'en'
  if (navigatorLocale.startsWith('zh')) return 'zh'
  if (navigatorLocale.startsWith('ja')) return 'ja'
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
    ja
  }
})

export default i18n
