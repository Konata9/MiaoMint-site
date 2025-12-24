<script setup lang="ts">
import { ref } from 'vue'
import Layout from '../Layout.vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Search, Shield, Bookmark, Palette, LayoutGrid, X } from 'lucide-vue-next'

const selectedImage = ref<string | null>(null)

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

const screenshots = [
  { src: '/images/search-tab.png', title: 'Command Palette' },
  { src: '/images/list-tab.png', title: 'Fast Switching' },
  { src: '/images/setting-page.png', title: 'Settings & Themes' }
]

const heroBadges = [
  { label: 'Shortcut', value: 'Opt/Alt + M' },
  { label: 'Bookmarks', value: '/b' },
  { label: 'History', value: '/h' },
  { label: 'Privacy', value: 'Local-only' },
]

const steps = [
  { title: 'Invoke', description: 'Press Opt/Alt + M to open from any page.' },
  { title: 'Search', description: 'Tabs by default. /b bookmarks. /h history. /setting settings.' },
  { title: 'Open', description: 'Enter to open. Cmd/Ctrl + Enter forces web search.' },
]

const features = [
  {
    icon: Search,
    title: 'Unified Search',
    description: 'One input for tabs, bookmarks, history, URL navigation, and web search fallback.',
    accentClass: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/40 dark:text-cyan-300',
  },
  {
    icon: LayoutGrid,
    title: 'Keyboard Workflow',
    description: 'Opt/Alt + M to open, ↑/↓ to navigate, Enter to open, Esc to close.',
    accentClass: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-300',
  },
  {
    icon: Bookmark,
    title: 'Command Modes',
    description: 'Use /b for bookmarks, /h for history, and /setting to open preferences.',
    accentClass: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-300',
  },
  {
    icon: Palette,
    title: 'Polished & Personal',
    description: 'Themes, opacity control, and multilingual UI with instant updates.',
    accentClass: 'text-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-950/40 dark:text-fuchsia-300',
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    description: 'No backend. Your data stays on-device, only used to power search and navigation.',
    accentClass: 'text-sky-600 bg-sky-50 dark:bg-sky-950/40 dark:text-sky-300',
  },
]
</script>

<template>
  <Layout>
    <section class="relative overflow-hidden">
      <div class="container mx-auto px-4 py-10 md:py-14 lg:py-20">
        <div class="grid items-center gap-10 md:grid-cols-2">
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <img src="/logo.png" alt="MiaoMint Logo" class="h-12 w-12" />
              <div class="text-sm text-muted-foreground">
                Chrome Extension
              </div>
            </div>
            <h1 class="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Spotlight for tabs, bookmarks, and history.
            </h1>
            <p class="text-pretty text-muted-foreground sm:text-lg">
              Press <span class="font-medium text-foreground">Opt/Alt + M</span>, type a few letters, hit <span class="font-medium text-foreground">Enter</span>. Stay in flow.
            </p>

            <div class="flex flex-wrap gap-2">
              <div
                v-for="badge in heroBadges"
                :key="badge.label"
                class="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-sm backdrop-blur"
              >
                <span class="text-[11px] uppercase tracking-wide text-foreground/60">{{ badge.label }}</span>
                <span class="font-mono font-medium text-foreground">{{ badge.value }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <Button size="lg" as-child>
                <a href="https://chromewebstore.google.com/detail/miaomint-smart-tab-manage/fhbglejcilmhdnmipnjhanffmbijjego?hl=en" target="_blank" rel="noreferrer">Add to Chrome</a>
              </Button>
              <Button size="lg" variant="outline" as-child>
                <a href="#features">See highlights</a>
              </Button>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-cyan-200/40 via-blue-200/40 to-fuchsia-200/40 blur-2xl dark:from-cyan-950/40 dark:via-blue-950/30 dark:to-fuchsia-950/40" />
            <div class="pointer-events-none absolute -inset-12 -z-10 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.08)_1px,transparent_0)] [background-size:18px_18px] opacity-40" />
            <Card class="overflow-hidden border shadow-2xl">
              <CardContent class="p-0">
                <div class="aspect-video w-full">
                  <video
                    class="h-full w-full"
                    :src="withBase('/video/miaomint-demo.mp4')"
                    controls
                    playsinline
                    preload="metadata"
                  />
                </div>
              </CardContent>
            </Card>
            <div class="mt-3 flex items-center justify-between text-sm text-muted-foreground">
              <div>Quick demo</div>
              <a class="underline underline-offset-4" href="#screenshots">See UI screenshots</a>
            </div>
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

    <section id="features" class="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div class="mx-auto max-w-3xl text-center space-y-4">
        <div class="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
          <span>Fast</span>
          <span class="text-foreground/50">•</span>
          <span>Keyboard-first</span>
          <span class="text-foreground/50">•</span>
          <span>Privacy-focused</span>
        </div>
        <h2 class="text-balance font-heading text-3xl font-bold sm:text-4xl md:text-5xl">Highlights</h2>
        <p class="text-pretty text-muted-foreground sm:text-lg">
          Designed around one flow: invoke, search, open.
        </p>
      </div>

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card v-for="feature in features" :key="feature.title" class="border bg-background/60">
          <CardHeader class="space-y-2">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl" :class="feature.accentClass">
                <component :is="feature.icon" class="h-5 w-5" />
              </div>
              <CardTitle class="text-base">{{ feature.title }}</CardTitle>
            </div>
          </CardHeader>
          <CardContent class="text-sm text-muted-foreground">
            {{ feature.description }}
          </CardContent>
        </Card>
      </div>
    </section>

    <section id="screenshots" class="container mx-auto px-4 py-12 space-y-8">
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-bold md:text-5xl">UI preview</h2>
        <p class="text-muted-foreground text-lg">A quick glance at the experience.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-start max-w-7xl mx-auto">
        <div 
          v-for="shot in screenshots" 
          :key="shot.src"
          class="space-y-2 text-center group cursor-pointer" 
          @click="selectedImage = withBase(shot.src)"
        >
          <div class="overflow-hidden rounded-lg shadow-xl border border-gray-200 dark:border-gray-800">
            <img 
              :src="withBase(shot.src)" 
              :alt="shot.title" 
              class="w-full transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
          <h3 class="text-xl font-bold group-hover:text-blue-500 transition-colors">{{ shot.title }}</h3>
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
