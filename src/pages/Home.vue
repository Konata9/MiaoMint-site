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
</script>

<template>
  <Layout>
    <!-- Hero Section -->
    <section class="space-y-4 pb-6 pt-4 md:pb-8 md:pt-6 lg:py-16">
      <div class="container mx-auto flex max-w-[64rem] flex-col items-center gap-2 text-center px-4">
        <img src="/logo.png" alt="MiaoMint Logo" class="w-24 h-24 mb-2" />
        <h1 class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          MiaoMint
        </h1>
        <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A Spotlight-style command palette for Chrome. Search tabs and bookmarks, open URLs, and trigger web search.
        </p>
        <div class="space-x-4">
          <!-- <Button size="lg" as-child>
            <a href="https://chrome.google.com/webstore/detail/your-extension-id" target="_blank">Add to Chrome</a>
          </Button> -->
        </div>
      </div>
    </section>

    <!-- Demo Video Section -->
    <section class="container mx-auto px-4 py-8 flex justify-center">
      <div class="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/eJVA4LdIj5I" 
          title="MiaoMint Demo" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="container mx-auto space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 px-4">
      <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-10">
        <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
          Features
        </h2>
        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to navigate tabs and bookmarks efficiently.
        </p>
      </div>
      
      <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <Card class="border-none shadow-none">
          <CardHeader class="flex flex-row items-center gap-4 space-y-0 pb-2">
            <Search class="h-8 w-8 text-blue-500" />
            <CardTitle class="text-base">Global Spotlight Search</CardTitle>
          </CardHeader>
          <CardContent>
            Press <code>Alt+M</code> on any page. Use <code>/b</code> for bookmarks and <code>Cmd/Ctrl+Enter</code> to force web search.
          </CardContent>
        </Card>
        
        <Card class="border-none shadow-none">
          <CardHeader class="flex flex-row items-center gap-4 space-y-0 pb-2">
            <LayoutGrid class="h-8 w-8 text-green-500" />
            <CardTitle class="text-base">Mixed Search Logic</CardTitle>
          </CardHeader>
          <CardContent>
            Switches between tab search, bookmark search, URL navigation, and web search fallback.
          </CardContent>
        </Card>

        <Card class="border-none shadow-none">
          <CardHeader class="flex flex-row items-center gap-4 space-y-0 pb-2">
            <Bookmark class="h-8 w-8 text-yellow-500" />
            <CardTitle class="text-base">Bookmark Search</CardTitle>
          </CardHeader>
          <CardContent>
            Search your browser bookmarks by title or URL and open them instantly.
          </CardContent>
        </Card>

        <Card class="border-none shadow-none">
          <CardHeader class="flex flex-row items-center gap-4 space-y-0 pb-2">
            <Palette class="h-8 w-8 text-purple-500" />
            <CardTitle class="text-base">Personalization</CardTitle>
          </CardHeader>
          <CardContent>
            Multiple themes (White, Ice Blue, Mint...), custom opacity, and independent settings page.
          </CardContent>
        </Card>

        <Card class="border-none shadow-none">
          <CardHeader class="flex flex-row items-center gap-4 space-y-0 pb-2">
            <Shield class="h-8 w-8 text-red-500" />
            <CardTitle class="text-base">Privacy First</CardTitle>
          </CardHeader>
          <CardContent>
            No backend servers. Tabs and bookmarks are processed locally inside your browser.
          </CardContent>
        </Card>

        <Card class="border-none shadow-none">
          <CardHeader class="flex flex-row items-center gap-4 space-y-0 pb-2">
            <Globe class="h-8 w-8 text-indigo-500" />
            <CardTitle class="text-base">Multi-language</CardTitle>
          </CardHeader>
          <CardContent>
            Supports English, Simplified/Traditional Chinese, and Japanese. Auto-detects browser language.
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Screenshots Section -->
    <section class="container mx-auto px-4 py-12 space-y-8">
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-bold md:text-5xl">Screenshots</h2>
        <p class="text-muted-foreground text-lg">A closer look at the experience.</p>
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
