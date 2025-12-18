<script setup lang="ts">
import Layout from '../Layout.vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Search, Shield, Zap } from 'lucide-vue-next'
</script>

<template>
  <Layout>
    <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div class="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center px-4">
        <h1 class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Manage your tabs like a Pro
        </h1>
        <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          MiaoMint is a Spotlight-style tab manager for Chrome. Fast, keyboard-centric, and privacy-focused.
        </p>
        <div class="space-x-4">
          <Button size="lg" as-child>
            <a href="https://chrome.google.com/webstore/detail/your-extension-id" target="_blank">Add to Chrome</a>
          </Button>
          <Button variant="outline" size="lg" as-child>
            <a href="https://github.com/maochichen/MiaoMint" target="_blank">View on GitHub</a>
          </Button>
        </div>
      </div>
    </section>

    <section id="features" class="container mx-auto space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 px-4">
      <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
          Features
        </h2>
        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Designed for power users who want to navigate their browser with speed and precision.
        </p>
      </div>
      <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <Card>
          <CardHeader>
            <Search class="h-10 w-10 mb-2" />
            <CardTitle>Quick Search</CardTitle>
          </CardHeader>
          <CardContent>
            Instantly search open tabs, history, and bookmarks with fuzzy matching.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Shield class="h-10 w-10 mb-2" />
            <CardTitle>Privacy First</CardTitle>
          </CardHeader>
          <CardContent>
            All data stays on your device. No tracking, no external servers.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap class="h-10 w-10 mb-2" />
            <CardTitle>Lightning Fast</CardTitle>
          </CardHeader>
          <CardContent>
            Optimized for performance. Open with a shortcut and navigate instantly.
          </CardContent>
        </Card>
      </div>
    </section>
  </Layout>
</template>
