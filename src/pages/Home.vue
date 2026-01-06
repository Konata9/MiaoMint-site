<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTitle } from '@vueuse/core'
import Layout from '../Layout.vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Search, Shield, Bookmark, Palette, LayoutGrid, X } from 'lucide-vue-next'

const { t } = useI18n()
useTitle(() => t('meta.title'))

const selectedImage = ref<string | null>(null)
const activeFeatureIndex = ref(0)

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

const features = computed(() => [
  {
    icon: Search,
    title: t('features.unified_title'),
    description: t('features.unified_desc'),
    accentClass: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/40 dark:text-cyan-300',
    image: '/images/search-tab.png'
  },
  {
    icon: LayoutGrid,
    title: t('features.keyboard_title'),
    description: t('features.keyboard_desc'),
    accentClass: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-300',
    image: '/images/list-tab.png'
  },
  {
    icon: Bookmark,
    title: t('features.command_title'),
    description: t('features.command_desc'),
    accentClass: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-300',
    image: '/images/list-bookmark.png'
  },
  {
    icon: Palette,
    title: t('features.polished_title'),
    description: t('features.polished_desc'),
    accentClass: 'text-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-950/40 dark:text-fuchsia-300',
    image: '/images/setting-page.png'
  },
  {
    icon: Shield,
    title: t('features.privacy_title'),
    description: t('features.privacy_desc'),
    accentClass: 'text-sky-600 bg-sky-50 dark:bg-sky-950/40 dark:text-sky-300',
    image: '/images/list-history.png'
  },
])

const heroBadges = computed(() => [
  { label: t('hero.badge_shortcut'), value: 'Opt/Alt + M' },
  { label: t('hero.badge_bookmarks'), value: '/b' },
  { label: t('hero.badge_history'), value: '/h' },
  { label: t('hero.badge_privacy'), value: t('hero.badge_privacy_value') },
])

const steps = computed(() => [
  { title: t('steps.invoke_title'), description: t('steps.invoke_desc') },
  { title: t('steps.search_title'), description: t('steps.search_desc') },
  { title: t('steps.open_title'), description: t('steps.open_desc') },
])
</script>

<template>
  <Layout>
    <section class="relative overflow-hidden pt-10">
      <!-- Background Decorations -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-cyan-400/20 blur-[100px] opacity-30 animate-pulse-soft" />
        <div class="absolute top-[10%] right-[0%] h-[800px] w-[800px] rounded-full bg-blue-500/20 blur-[100px] opacity-30 animate-pulse-soft animation-delay-500" />
      </div>

      <div class="container mx-auto px-4 py-10 md:py-14 lg:py-20">
        <div class="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div class="space-y-8">
            <div class="flex items-center gap-3 animate-fade-in-up opacity-0">
              <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-slate-900 dark:ring-white/10">
                <img :src="withBase('/logo.png')" alt="MiaoMint logo" class="h-10 w-10" />
              </div>
              <div>
                <h2 class="text-lg font-semibold tracking-tight">MiaoMint</h2>
                <div class="text-sm text-muted-foreground">Chrome Extension</div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h1 class="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-fade-in-up opacity-0 animation-delay-100">
                {{ t('hero.title_prefix') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">{{ t('hero.title_highlight') }}</span>.
              </h1>
              <p class="text-pretty text-muted-foreground sm:text-lg animate-fade-in-up opacity-0 animation-delay-200" v-html="t('hero.description')">
              </p>
            </div>

            <div class="flex flex-wrap gap-2 animate-fade-in-up opacity-0 animation-delay-300">
              <div
                v-for="badge in heroBadges"
                :key="badge.label"
                class="inline-flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1 text-sm backdrop-blur-sm transition-colors hover:bg-background/80 hover:border-primary/20"
              >
                <span class="text-[11px] uppercase tracking-wide text-foreground/60">{{ badge.label }}</span>
                <span class="font-mono font-medium text-foreground">{{ badge.value }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animation-delay-500">
              <Button size="lg" class="h-12 px-8 text-base shadow-lg shadow-blue-500/20 transition-transform hover:scale-105 active:scale-95" as-child>
                <a href="https://chromewebstore.google.com/detail/miaomint-smart-tab-manage/fhbglejcilmhdnmipnjhanffmbijjego?hl=en" target="_blank" rel="noreferrer">
                  {{ t('hero.btn_add') }}
                </a>
              </Button>
              <Button size="lg" variant="outline" class="h-12 px-8 text-base transition-transform hover:scale-105 active:scale-95 bg-background/50 backdrop-blur-sm" as-child>
                <a href="#features">{{ t('hero.btn_highlights') }}</a>
              </Button>
            </div>
            
            <div class="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up opacity-0 animation-delay-500">
               <Shield class="h-4 w-4 text-green-500" />
               <span>{{ t('hero.privacy_note') }}</span>
            </div>
          </div>

          <div class="relative animate-fade-in-up opacity-0 animation-delay-300">
            <!-- Glow effect behind video -->
            <div class="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-2xl rounded-[2rem]" />
            
            <Card class="relative overflow-hidden rounded-[1.5rem] border shadow-2xl ring-1 ring-white/10">
              <div class="absolute top-0 left-0 right-0 h-8 bg-muted/80 backdrop-blur flex items-center px-4 gap-1.5 z-10 border-b">
                <div class="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div class="w-3 h-3 rounded-full bg-amber-400/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-400/80"></div>
              </div>
              <CardContent class="p-0 pt-8 bg-zinc-950">
                <div class="aspect-video w-full">
                  <video
                    class="h-full w-full object-cover"
                    :src="withBase('/video/miaomint-demo.mp4')"
                    controls
                    playsinline
                    preload="metadata"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y bg-muted/30">
      <div class="container mx-auto px-4 py-10">
        <div class="grid gap-6 md:grid-cols-3">
          <div v-for="step in steps" :key="step.title" class="space-y-2">
            <div class="text-sm font-medium text-foreground">{{ step.title }}</div>
            <div class="text-sm text-muted-foreground">{{ step.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div class="mx-auto max-w-3xl text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
          <span>{{ t('features.tag_fast') }}</span>
          <span class="text-foreground/50">•</span>
          <span>{{ t('features.tag_keyboard') }}</span>
          <span class="text-foreground/50">•</span>
          <span>{{ t('features.tag_privacy') }}</span>
        </div>
        <h2 class="text-balance font-heading text-3xl font-bold sm:text-4xl md:text-5xl">{{ t('features.title') }}</h2>
        <p class="text-pretty text-muted-foreground sm:text-lg">
          {{ t('features.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
        <!-- Left: Feature List -->
        <div class="lg:col-span-5 space-y-4">
          <div 
            v-for="(feature, index) in features" 
            :key="feature.title"
            class="group p-4 rounded-xl cursor-pointer transition-all duration-300 border border-transparent"
            :class="activeFeatureIndex === index ? 'bg-muted/50 border-border shadow-sm' : 'hover:bg-muted/30'"
            @mouseenter="activeFeatureIndex = index"
          >
            <div class="flex items-center gap-4">
              <div 
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300"
                :class="activeFeatureIndex === index ? feature.accentClass : 'bg-muted text-muted-foreground'"
              >
                <component :is="feature.icon" class="h-5 w-5" />
              </div>
              <div class="space-y-1">
                <h3 class="font-semibold text-foreground transition-colors" :class="{ 'text-primary': activeFeatureIndex === index }">
                  {{ feature.title }}
                </h3>
                <p 
                  class="text-sm text-muted-foreground transition-all duration-300 overflow-hidden"
                  :class="activeFeatureIndex === index ? 'max-h-20 opacity-100 mt-1' : 'max-h-0 opacity-0'"
                >
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Dynamic Preview -->
        <div class="lg:col-span-7">
          <div class="relative aspect-[16/10] w-full overflow-hidden rounded-xl border bg-zinc-950 shadow-2xl ring-1 ring-white/10">
             <!-- Traffic Lights -->
             <div class="absolute top-0 left-0 right-0 h-8 bg-muted/80 backdrop-blur flex items-center px-4 gap-1.5 z-20 border-b">
                <div class="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div class="w-3 h-3 rounded-full bg-amber-400/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-400/80"></div>
              </div>
              
              <!-- Images with Transition -->
              <TransitionGroup name="fade">
                <div 
                  v-for="(feature, index) in features" 
                  :key="feature.title"
                  v-show="activeFeatureIndex === index"
                  class="absolute inset-0 pt-8 flex items-center justify-center bg-zinc-900 cursor-zoom-in"
                  @click="selectedImage = withBase(feature.image)"
                >
                  <img 
                    :src="withBase(feature.image)" 
                    :alt="feature.title"
                    class="w-full h-full object-contain p-1"
                  />
                </div>
              </TransitionGroup>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="border-t bg-muted/30">
      <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="mx-auto max-w-3xl text-center space-y-8">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {{ t('cta.title') }}
          </h2>
          <p class="text-lg text-muted-foreground">
            {{ t('cta.desc') }}
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" class="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-blue-500/20" as-child>
              <a href="https://chromewebstore.google.com/detail/miaomint-smart-tab-manage/fhbglejcilmhdnmipnjhanffmbijjego?hl=en" target="_blank" rel="noreferrer">
                {{ t('cta.btn_add') }}
              </a>
            </Button>
            <Button size="lg" variant="outline" class="h-14 px-8 text-lg w-full sm:w-auto" as-child>
              <a href="https://github.com/Konata9/MiaoMint-site" target="_blank" rel="noreferrer">
                {{ t('cta.btn_github') }}
              </a>
            </Button>
          </div>
          <p class="text-sm text-muted-foreground">
            {{ t('cta.footer') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="selectedImage" 
          class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8" 
          @click="selectedImage = null"
        >
          <div class="relative max-w-7xl w-full max-h-full flex items-center justify-center">
            <button 
              class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2" 
              @click.stop="selectedImage = null"
            >
              <X class="h-8 w-8" />
              <span class="sr-only">Close</span>
            </button>
            <img 
              :src="selectedImage" 
              alt="Enlarged screenshot" 
              class="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain" 
              @click.stop
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </Layout>
</template>
