<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTitle } from '@vueuse/core'
import Layout from '../Layout.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Search, Shield, Bookmark, Palette, LayoutGrid, X, 
  Keyboard, Command, ArrowUp, ArrowDown, CornerDownLeft, 
  FileCode, Users, Gift, Star, Zap, Code
} from 'lucide-vue-next'

const { t } = useI18n()
useTitle(() => t('meta.title'))

const selectedImage = ref<string | null>(null)
const activeFeatureIndex = ref(0)

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

// Deep Dive Features (Existing)
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

// Tech Stack Data
const techStack = computed(() => [
    { name: 'Vue 3', desc: t('techstack.vue'), icon: 'V', color: 'text-green-500' },
    { name: 'TypeScript', desc: t('techstack.ts'), icon: 'TS', color: 'text-blue-500' },
    { name: 'Vite', desc: t('techstack.vite'), icon: '⚡', color: 'text-purple-500' },
    { name: 'Tailwind', desc: t('techstack.tailwind'), icon: 'TW', color: 'text-cyan-500' },
    { name: 'Extension API', desc: t('techstack.crx'), icon: 'CRX', color: 'text-orange-500' },
])
</script>

<template>
  <Layout>
    <!-- 1. Hero Section -->
    <section class="relative overflow-hidden pt-10 pb-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
       <!-- Background effects -->
       <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div class="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-cyan-500/10 blur-[100px] opacity-30" />
        <div class="absolute top-[10%] right-[0%] h-[800px] w-[800px] rounded-full bg-blue-600/10 blur-[100px] opacity-30" />
      </div>

      <div class="container mx-auto px-4 py-10 md:py-20 text-center">
        <!-- Logo & Title -->
        <div class="mb-8 animate-fade-in-up">
           <div class="inline-flex items-center gap-3 mb-4">
             <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <img :src="withBase('/logo.png')" alt="MiaoMint logo" class="h-8 w-8" />
             </div>
             <h1 class="text-5xl font-bold tracking-tight">{{ t('hero.title_main') }}</h1>
           </div>
           <p class="text-gray-400 text-lg">{{ t('hero.title_sub') }}</p>
        </div>

        <!-- Headline -->
        <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
           {{ t('hero.headline_prefix') }} <br class="hidden md:block" />
           <span class="text-cyan-400">{{ t('hero.headline_highlight') }}</span>
        </h2>

        <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          {{ t('hero.description') }}
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-300">
            <Button size="lg" class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 h-14 text-lg rounded-full" as-child>
                <a href="https://chromewebstore.google.com/detail/miaomint-smart-tab-manage/fhbglejcilmhdnmipnjhanffmbijjego?hl=en" target="_blank">
                  {{ t('hero.btn_add') }}
                </a>
            </Button>
            <Button size="lg" variant="outline" class="border-gray-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-8 h-14 text-lg rounded-full bg-transparent" as-child>
                <a href="https://github.com/Konata9/MiaoMint" target="_blank">
                   <Code class="w-5 h-5 mr-2" />
                   {{ t('hero.btn_github') }}
                </a>
            </Button>
        </div>

        <!-- Video Preview (Centered) -->
        <div class="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 animate-fade-in-up animation-delay-500">
            <div class="absolute top-0 left-0 right-0 h-8 bg-gray-900/90 backdrop-blur flex items-center px-4 gap-1.5 z-10 border-b border-white/5">
                <div class="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div class="w-3 h-3 rounded-full bg-amber-500/20"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            <video
                class="w-full aspect-video object-cover bg-gray-900"
                :src="withBase('/video/miaomint-demo.mp4')"
                controls
                muted
                autoplay
                loop
                playsinline
            />
        </div>
      </div>
    </section>

    <!-- 2. Core Features (3 Cards) -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">{{ t('core_features.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <Card class="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
                <CardContent class="p-8">
                    <div class="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center mb-6">
                        <Search class="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <h3 class="text-xl font-bold mb-3">{{ t('core_features.hybrid_title') }}</h3>
                    <p class="text-muted-foreground mb-4">{{ t('core_features.hybrid_desc') }}</p>
                    <div class="text-sm text-cyan-600 dark:text-cyan-400 font-mono bg-cyan-50 dark:bg-cyan-900/20 p-2 rounded">
                        {{ t('core_features.hybrid_meta') }}
                    </div>
                </CardContent>
            </Card>
             <!-- Card 2 -->
            <Card class="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
                <CardContent class="p-8">
                    <div class="w-14 h-14 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mb-6">
                        <Keyboard class="w-7 h-7 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 class="text-xl font-bold mb-3">{{ t('core_features.keyboard_title') }}</h3>
                    <p class="text-muted-foreground mb-4">{{ t('core_features.keyboard_desc') }}</p>
                    <div class="text-sm text-orange-600 dark:text-orange-400 font-mono bg-orange-50 dark:bg-orange-900/20 p-2 rounded">
                        {{ t('core_features.keyboard_meta') }}
                    </div>
                </CardContent>
            </Card>
             <!-- Card 3 -->
            <Card class="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
                <CardContent class="p-8">
                    <div class="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-6">
                        <Shield class="w-7 h-7 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 class="text-xl font-bold mb-3">{{ t('core_features.privacy_title') }}</h3>
                    <p class="text-muted-foreground mb-4">{{ t('core_features.privacy_desc') }}</p>
                    <div class="text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded">
                        {{ t('core_features.privacy_meta') }}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>

    <!-- 3. Deep Dive (Existing Interactive Section) -->
    <section id="features" class="container mx-auto px-4 py-16 md:py-24">
       <div class="mx-auto max-w-3xl text-center space-y-4 mb-16">
         <!-- Tags -->
         <div class="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
          <span>{{ t('features.tag_fast') }}</span>
          <span class="text-foreground/50">•</span>
          <span>{{ t('features.tag_keyboard') }}</span>
          <span class="text-foreground/50">•</span>
          <span>{{ t('features.tag_privacy') }}</span>
        </div>
        <h2 class="text-3xl font-bold">{{ t('features.title') }}</h2>
        <p class="text-muted-foreground text-lg">{{ t('features.subtitle') }}</p>
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
         <!-- Right: Preview -->
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

    <!-- 4. Shortcuts Section -->
    <section class="py-20 bg-gray-900 text-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-4">{{ t('shortcuts.title') }}</h2>
            <p class="text-gray-400 text-center mb-12 max-w-2xl mx-auto">{{ t('shortcuts.subtitle') }}</p>

            <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <!-- Core -->
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                        <Zap class="w-5 h-5 text-cyan-400" />
                        {{ t('shortcuts.core_title') }}
                    </h3>
                    <div class="space-y-4">
                         <div class="flex items-center justify-between">
                           <span class="text-gray-300">{{ t('shortcuts.open_close') }}</span>
                           <kbd class="px-3 py-1 bg-gray-700 rounded text-sm font-mono text-cyan-300">Opt/Alt + M</kbd>
                         </div>
                         <div class="flex items-center justify-between">
                           <span class="text-gray-300">{{ t('shortcuts.navigate') }}</span>
                           <div class="flex gap-1">
                             <kbd class="px-2 py-1 bg-gray-700 rounded text-sm font-mono">↑</kbd>
                             <kbd class="px-2 py-1 bg-gray-700 rounded text-sm font-mono">↓</kbd>
                           </div>
                         </div>
                         <div class="flex items-center justify-between">
                           <span class="text-gray-300">{{ t('shortcuts.open_selected') }}</span>
                           <kbd class="px-3 py-1 bg-gray-700 rounded text-sm font-mono">Enter</kbd>
                         </div>
                         <div class="flex items-center justify-between">
                           <span class="text-gray-300">{{ t('shortcuts.close') }}</span>
                           <kbd class="px-3 py-1 bg-gray-700 rounded text-sm font-mono">Esc</kbd>
                         </div>
                    </div>
                </div>
                 <!-- Advanced -->
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                        <Command class="w-5 h-5 text-orange-400" />
                        {{ t('shortcuts.advanced_title') }}
                    </h3>
                    <div class="space-y-4">
                         <div class="flex items-center justify-between">
                           <span class="text-gray-300">{{ t('shortcuts.force_web') }}</span>
                           <kbd class="px-3 py-1 bg-gray-700 rounded text-sm font-mono text-orange-300">Cmd/Ctrl + Enter</kbd>
                         </div>
                         <div class="flex items-center justify-between">
                           <span class="text-gray-300">{{ t('shortcuts.bookmark_search') }}</span>
                           <div class="flex items-center gap-1">
                             <kbd class="px-2 py-1 bg-gray-700 rounded text-sm font-mono">/</kbd>
                             <kbd class="px-2 py-1 bg-gray-700 rounded text-sm font-mono">b</kbd>
                           </div>
                         </div>
                         <div class="flex items-center justify-between">
                           <span class="text-gray-300">{{ t('shortcuts.history_search') }}</span>
                           <div class="flex items-center gap-1">
                             <kbd class="px-2 py-1 bg-gray-700 rounded text-sm font-mono">/</kbd>
                             <kbd class="px-2 py-1 bg-gray-700 rounded text-sm font-mono">h</kbd>
                           </div>
                         </div>
                          <div class="flex items-center justify-between">
                           <span class="text-gray-300">{{ t('shortcuts.open_settings') }}</span>
                           <div class="flex items-center gap-1">
                             <kbd class="px-2 py-1 bg-gray-700 rounded text-sm font-mono">/</kbd>
                             <kbd class="px-2 py-1 bg-gray-700 rounded text-sm font-mono">setting</kbd>
                           </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. Open Source Section -->
    <section class="py-20 bg-white dark:bg-gray-950">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12">
                     <div class="inline-flex items-center gap-3 mb-4">
                       <FileCode class="w-10 h-10 text-green-500" />
                       <h2 class="text-3xl font-bold">{{ t('opensource.title') }}</h2>
                     </div>
                     <p class="text-gray-600 dark:text-gray-400 text-lg">{{ t('opensource.subtitle') }}</p>
                </div>

                <div class="grid md:grid-cols-2 gap-8 mb-12">
                     <div class="flex items-start gap-4">
                       <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                         <FileCode class="w-6 h-6 text-green-600 dark:text-green-400" />
                       </div>
                       <div>
                         <h3 class="text-xl font-bold mb-2">{{ t('opensource.mit_title') }}</h3>
                         <p class="text-gray-600 dark:text-gray-400">{{ t('opensource.mit_desc') }}</p>
                       </div>
                     </div>
                     <div class="flex items-start gap-4">
                       <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Code class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                       </div>
                       <div>
                         <h3 class="text-xl font-bold mb-2">{{ t('opensource.transparent_title') }}</h3>
                         <p class="text-gray-600 dark:text-gray-400">{{ t('opensource.transparent_desc') }}</p>
                       </div>
                     </div>
                      <div class="flex items-start gap-4">
                       <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Users class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                       </div>
                       <div>
                         <h3 class="text-xl font-bold mb-2">{{ t('opensource.community_title') }}</h3>
                         <p class="text-gray-600 dark:text-gray-400">{{ t('opensource.community_desc') }}</p>
                       </div>
                     </div>
                      <div class="flex items-start gap-4">
                       <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Gift class="w-6 h-6 text-amber-600 dark:text-amber-400" />
                       </div>
                       <div>
                         <h3 class="text-xl font-bold mb-2">{{ t('opensource.free_title') }}</h3>
                         <p class="text-gray-600 dark:text-gray-400">{{ t('opensource.free_desc') }}</p>
                       </div>
                     </div>
                </div>

                <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-8">
                     <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                       <div>
                         <h3 class="text-2xl font-bold mb-2">{{ t('opensource.join_title') }}</h3>
                         <p class="text-gray-600 dark:text-gray-400">{{ t('opensource.join_desc') }}</p>
                       </div>
                       <div class="flex gap-4">
                         <Button as-child class="bg-gray-900 text-white hover:bg-black">
                            <a href="https://github.com/Konata9/MiaoMint" target="_blank">
                                <Star class="w-4 h-4 mr-2" />
                                {{ t('opensource.btn_star') }}
                            </a>
                         </Button>
                         <Button variant="outline" as-child>
                            <a href="https://github.com/Konata9/MiaoMint/issues" target="_blank">
                                {{ t('opensource.btn_issue') }}
                            </a>
                         </Button>
                       </div>
                     </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 6. Tech Stack -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900 border-t">
        <div class="container mx-auto px-4">
             <h2 class="text-2xl font-bold text-center mb-10">{{ t('techstack.title') }}</h2>
             <div class="flex flex-wrap justify-center gap-8 md:gap-16">
                 <div v-for="item in techStack" :key="item.name" class="text-center">
                     <div class="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-sm border">
                         <span class="text-2xl font-bold" :class="item.color">{{ item.icon }}</span>
                     </div>
                     <div class="font-semibold">{{ item.name }}</div>
                     <div class="text-sm text-muted-foreground">{{ item.desc }}</div>
                 </div>
             </div>
        </div>
    </section>

    <!-- 7. CTA (Existing) -->
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

    <!-- Lightbox (Existing) -->
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
