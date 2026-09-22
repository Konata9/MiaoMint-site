<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { onClickOutside } from '@vueuse/core'

const { t, tm, locale } = useI18n()

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

const chromeUrl =
  'https://chromewebstore.google.com/detail/miaomint-smart-tab-manage/fhbglejcilmhdnmipnjhanffmbijjego?hl=en'
const reviewsUrl = `${chromeUrl}&tab=reviews`

const showLanguageMenu = ref(false)
const languageMenuRef = ref<HTMLElement | null>(null)

onClickOutside(languageMenuRef, () => {
  showLanguageMenu.value = false
})

const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'zh', label: '中文', short: '中文' },
  { code: 'ja', label: '日本語', short: '日本語' }
]

const currentShort = computed(
  () => languages.find((l) => l.code === locale.value)?.short ?? 'EN'
)

const footerBottom = computed(() => tm('footer.bottom') as unknown as string[])

const setLocale = (lang: string) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
  showLanguageMenu.value = false
}
</script>

<template>
  <div class="app">
    <a class="skip-link" href="#main">{{ t('layout.skip') }}</a>

    <header class="nav">
      <div class="container nav__inner">
        <a class="brand" href="index.html">
          <img :src="withBase('/logo.png')" alt="" width="24" height="24" />
          MiaoMint
        </a>

        <nav class="nav__links" aria-label="Sections">
          <a class="nav__link" href="#features">{{ t('nav.capabilities') }}</a>
          <a class="nav__link" href="#install">{{ t('nav.install') }}</a>
          <a class="nav__link" href="privacy.html">{{ t('nav.privacy') }}</a>
        </nav>

        <div class="nav__right">
          <div class="lang-wrap" ref="languageMenuRef">
            <button
              class="lang-switch"
              type="button"
              :aria-label="t('nav.language')"
              :aria-expanded="showLanguageMenu"
              @click="showLanguageMenu = !showLanguageMenu"
            >
              {{ currentShort }}
            </button>
            <div v-if="showLanguageMenu" class="lang-menu">
              <button
                v-for="lang in languages"
                :key="lang.code"
                class="lang-item"
                type="button"
                @click="setLocale(lang.code)"
              >
                <span class="lang-item__check">
                  <svg
                    v-if="locale === lang.code"
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M3.5 8.5 6.5 11.5 12.5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                {{ lang.label }}
              </button>
            </div>
          </div>

          <a class="btn btn--primary nav__download" :href="chromeUrl" target="_blank" rel="noreferrer">
            {{ t('nav.add_to_chrome') }}
          </a>
        </div>
      </div>
    </header>

    <main id="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <div>
            <a class="brand" href="index.html">
              <img :src="withBase('/logo.png')" alt="" width="24" height="24" />
              MiaoMint
            </a>
            <p class="footer__tagline">{{ t('footer.tagline') }}</p>
          </div>
          <nav class="footer__links" aria-label="Links">
            <a class="footer__link" href="privacy.html">{{ t('footer.links.privacy') }}</a>
            <a class="footer__link" :href="reviewsUrl" target="_blank" rel="noreferrer">
              {{ t('footer.links.feedback') }}
            </a>
            <a class="footer__link" href="https://konata9.cc/" target="_blank" rel="noreferrer">
              {{ t('footer.links.blog') }}
            </a>
            <a class="footer__link" :href="chromeUrl" target="_blank" rel="noreferrer">
              {{ t('footer.links.store') }}
            </a>
          </nav>
        </div>
        <div class="footer__bottom">
          <span v-for="item in footerBottom" :key="item">{{ item }}</span>
        </div>
      </div>
    </footer>
  </div>
</template>
