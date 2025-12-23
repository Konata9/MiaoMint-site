<script setup lang="ts">
import { ref } from 'vue'
import Layout from '../Layout.vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Search, Shield, Bookmark, Palette, LayoutGrid, Globe, X } from 'lucide-vue-next'

const selectedImage = ref<string | null>(null)

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

const screenshots = [
  { src: '/images/search-tab.png', title: 'Search Tabs & Bookmarks' },
  { src: '/images/list-tab.png', title: 'Visual Management' },
  { src: '/images/setting-page.png', title: 'Customizable' }
]

const heroBadges = [
  { label: 'Shortcut', value: 'Alt+M' },
  { label: 'Bookmark mode', value: '/b' },
  { label: 'Force search', value: 'Cmd/Ctrl+Enter' },
  { label: 'Processing', value: 'Local-only' },
]

const steps = [
  { title: 'Invoke', description: 'Press Alt+M from any page to toggle the palette.' },
  { title: 'Navigate', description: 'Use ↑/↓ to move, Enter to open.' },
  { title: 'Search', description: 'Type for tabs, or use /b for bookmarks.' },
  { title: 'Fallback', description: 'Open a URL directly or trigger a web search when needed.' },
]

const features = [
  {
    icon: Search,
    title: 'Global Command Palette',
    description: 'A Spotlight-style UI on every page. Alt+M to open, ↑/↓ to navigate, Enter to act.',
    accentClass: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/40 dark:text-cyan-300',
  },
  {
    icon: Bookmark,
    title: 'Bookmark Search',
    description: 'Type /b to search bookmarks by title or URL and open instantly.',
    accentClass: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-300',
  },
  {
    icon: LayoutGrid,
    title: 'Mixed Search Logic',
    description: 'Tabs, bookmarks, direct URL opening, plus Cmd/Ctrl+Enter to force web search.',
    accentClass: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-300',
  },
  {
    icon: Palette,
    title: 'Personalization',
    description: 'Multiple themes, opacity control, and a dedicated options page.',
    accentClass: 'text-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-950/40 dark:text-fuchsia-300',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'No backend servers. Tabs and bookmarks are processed locally in your browser.',
    accentClass: 'text-sky-600 bg-sky-50 dark:bg-sky-950/40 dark:text-sky-300',
  },
  {
    icon: Globe,
    title: 'Multi-language',
    description: 'English, Simplified/Traditional Chinese, and Japanese.',
    accentClass: 'text-violet-600 bg-violet-50 dark:bg-violet-950/40 dark:text-violet-300',
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
              Your browser, controlled like Spotlight.
            </h1>
            <p class="text-pretty text-muted-foreground sm:text-lg">
              MiaoMint is a keyboard-first command palette for Chrome. Search tabs and bookmarks, open URLs, and trigger web search—without leaving your current page.
            </p>

            <div class="flex flex-wrap gap-2">
              <div
                v-for="badge in heroBadges"
                :key="badge.label"
                class="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm"
              >
                <span class="text-foreground/70">{{ badge.label }}</span>
                <span class="font-medium text-foreground">{{ badge.value }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <Button size="lg" as-child>
                <a href="https://chromewebstore.google.com/detail/miaomint-smart-tab-manage/fhbglejcilmhdnmipnjhanffmbijjego?hl=en" target="_blank" rel="noreferrer">Add to Chrome</a>
              </Button>
              <Button size="lg" variant="outline" as-child>
                <a href="#screenshots">Browse screenshots</a>
              </Button>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-cyan-200/40 via-blue-200/40 to-fuchsia-200/40 blur-2xl dark:from-cyan-950/40 dark:via-blue-950/30 dark:to-fuchsia-950/40" />
            <Card class="overflow-hidden border shadow-2xl">
              <CardContent class="p-0">
                <div class="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    class="h-full w-full"
                    src="https://www.youtube.com/embed/eJVA4LdIj5I"
                    title="MiaoMint Demo"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            <div class="mt-3 flex items-center justify-between text-sm text-muted-foreground">
              <div>Quick demo</div>
              <a class="underline underline-offset-4" href="https://www.youtube.com/watch?v=eJVA4LdIj5I" target="_blank" rel="noreferrer">Open on YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y bg-muted/30">
      <div class="container mx-auto px-4 py-10">
        <div class="grid gap-6 md:grid-cols-4">
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
        <h2 class="text-balance font-heading text-3xl font-bold sm:text-4xl md:text-5xl">Feature highlights</h2>
        <p class="text-pretty text-muted-foreground sm:text-lg">
          Designed around a single flow: invoke, search, and open.
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
        <h2 class="text-3xl font-bold md:text-5xl">Screenshots</h2>
        <p class="text-muted-foreground text-lg">A closer look at the UI.</p>
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
