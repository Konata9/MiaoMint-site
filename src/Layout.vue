<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { onClickOutside } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import { Languages, Check } from 'lucide-vue-next'

const { t, locale } = useI18n()

const showLanguageMenu = ref(false)
const languageMenuRef = ref(null)

onClickOutside(languageMenuRef, () => {
  showLanguageMenu.value = false
})

const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' }
]

const setLocale = (lang: string) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
  showLanguageMenu.value = false
}
</script>

<template>
  <div class="min-h-screen bg-background font-sans antialiased text-foreground">
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container mx-auto flex h-14 items-center px-4">
        <div class="mr-4 flex">
          <a class="mr-6 flex items-center space-x-2 font-bold" href="index.html">
            <span>MiaoMint</span>
          </a>
          <nav class="flex items-center space-x-6 text-sm font-medium">
            <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="index.html">{{ t('layout.home') }}</a>
            <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="privacy.html">{{ t('layout.privacy') }}</a>
          </nav>
        </div>
        <div class="flex flex-1 items-center justify-end space-x-2">
          <div class="relative" ref="languageMenuRef">
            <Button variant="ghost" size="icon" @click="showLanguageMenu = !showLanguageMenu" :title="t('layout.language')">
              <Languages class="h-5 w-5" />
            </Button>
            
            <div 
              v-if="showLanguageMenu" 
              class="absolute right-0 top-full mt-2 w-40 rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95 z-50"
            >
              <div 
                v-for="lang in languages" 
                :key="lang.code"
                class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                @click="setLocale(lang.code)"
              >
                <span class="mr-2 flex h-4 w-4 items-center justify-center">
                  <Check v-if="locale === lang.code" class="h-4 w-4" />
                </span>
                {{ lang.label }}
              </div>
            </div>
          </div>
          <Button size="sm" as-child>
            <a href="https://chromewebstore.google.com/detail/miaomint-smart-tab-manage/fhbglejcilmhdnmipnjhanffmbijjego?hl=en" target="_blank" rel="noreferrer">{{ t('layout.add_to_chrome') }}</a>
          </Button>
        </div>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="py-6 md:px-8 md:py-0">
      <div class="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
        <p class="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          {{ t('layout.built_by') }}
        </p>
      </div>
    </footer>
  </div>
</template>
