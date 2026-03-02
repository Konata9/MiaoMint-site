<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTitle } from '@vueuse/core'
import Layout from '../Layout.vue'

const { t } = useI18n()
useTitle(() => t('meta.privacy_title'))
</script>

<template>
  <Layout>
    <div class="container mx-auto py-10 px-4 max-w-3xl">
      <div class="prose dark:prose-invert">
        <h1 class="text-4xl font-bold mb-8">{{ t('privacy.title') }}</h1>
        <p class="mb-4"><strong>{{ t('privacy.effective_date', { date: '2025-12-22' }) }}</strong></p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ t('privacy.intro_title') }}</h2>
        <p class="mb-4">
          {{ t('privacy.intro_text') }}
        </p>
        <p class="mb-4 font-medium">
          {{ t('privacy.core_principle') }}
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ t('privacy.data_handle_title') }}</h2>
        <h3 class="text-xl font-semibold mt-4 mb-2">{{ t('privacy.tab_info_title') }}</h3>
        <p class="mb-4">
          {{ t('privacy.tab_info_text') }}
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">{{ t('privacy.bookmark_info_title') }}</h3>
        <p class="mb-4">
          {{ t('privacy.bookmark_info_text') }}
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">{{ t('privacy.history_info_title') }}</h3>
        <p class="mb-4">
          {{ t('privacy.history_info_text') }}
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">{{ t('privacy.search_queries_title') }}</h3>
        <p class="mb-4" v-html="t('privacy.search_queries_text')"></p>

        <h3 class="text-xl font-semibold mt-4 mb-2">{{ t('privacy.user_settings_title') }}</h3>
        <p class="mb-4" v-html="t('privacy.user_settings_text')"></p>

        <h3 class="text-xl font-semibold mt-4 mb-2">{{ t('privacy.keyboard_interactions_title') }}</h3>
        <p class="mb-4">
          {{ t('privacy.keyboard_interactions_text') }}
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ t('privacy.data_protection_title') }}</h2>
        <h3 class="text-xl font-semibold mt-4 mb-2">{{ t('privacy.no_remote_collection_title') }}</h3>
        <p class="mb-4">
          {{ t('privacy.no_remote_collection_text') }}
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ t('privacy.permissions_title') }}</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li v-html="t('privacy.permissions.all_urls')"></li>
          <li v-html="t('privacy.permissions.tabs')"></li>
          <li v-html="t('privacy.permissions.bookmarks')"></li>
          <li v-html="t('privacy.permissions.history')"></li>
          <li v-html="t('privacy.permissions.storage')"></li>
          <li v-html="t('privacy.permissions.search')"></li>
          <li v-html="t('privacy.permissions.active_tab')"></li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ t('privacy.your_rights_title') }}</h2>
        <p class="mb-4">
          {{ t('privacy.your_rights_text') }}
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>{{ t('privacy.your_rights_list.item1') }}</li>
          <li>{{ t('privacy.your_rights_list.item2') }}</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ t('privacy.changes_title') }}</h2>
        <p class="mb-4">
          {{ t('privacy.changes_text') }}
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ t('privacy.contact_title') }}</h2>
        <p class="mb-4">
          {{ t('privacy.contact_text') }}
        </p>
      </div>
    </div>
  </Layout>
</template>
