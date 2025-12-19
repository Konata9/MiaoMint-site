import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import zhCN from '../locales/zh-CN.json';
import zhTW from '../locales/zh-TW.json';
import ja from '../locales/ja.json';

type MessageSchema = typeof en;

const messages = {
  'en': en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'ja': ja
};

export type SupportedLocale = 'en' | 'zh-CN' | 'zh-TW' | 'ja';

export const SUPPORTED_LOCALES: { code: SupportedLocale; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'zh-CN', name: '简体中文' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'ja', name: '日本語' }
];

export function getBrowserLocale(): SupportedLocale {
  const navigatorLocale = navigator.language;
  
  if (navigatorLocale === 'zh-TW' || navigatorLocale === 'zh-HK') {
    return 'zh-TW';
  }
  
  if (navigatorLocale.startsWith('zh')) {
    return 'zh-CN';
  }
  
  if (navigatorLocale.startsWith('ja')) {
    return 'ja';
  }
  
  return 'en';
}

const i18n = createI18n<[MessageSchema], SupportedLocale>({
  legacy: false, // Vue 3 Composition API mode
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages
});

export default i18n;
