<script setup lang="ts">
import { Github } from 'lucide-vue-next'
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
            <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="index.html">Home</a>
            <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="privacy.html">Privacy</a>
          </nav>
        </div>
        <div class="flex flex-1 items-center justify-end space-x-2">
          <nav class="flex items-center">
            <a target="_blank" rel="noreferrer" href="https://github.com/maochichen/MiaoMint">
              <div class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9">
                <Github class="h-4 w-4" />
                <span class="sr-only">GitHub</span>
              </div>
            </a>
          </nav>
        </div>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="py-6 md:px-8 md:py-0">
      <div class="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
        <p class="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by <a href="https://github.com/maochichen" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">maochichen</a>.
          The source code is available on <a href="https://github.com/maochichen/MiaoMint" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">GitHub</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
