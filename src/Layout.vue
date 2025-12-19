<script setup lang="ts">
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
        </div>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="py-6 md:px-8 md:py-0">
      <div class="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
        <p class="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by <a href="https://github.com/Konata9" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">Konata9</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
