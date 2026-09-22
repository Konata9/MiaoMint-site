<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTitle } from '@vueuse/core'
import Layout from '../Layout.vue'

const { t } = useI18n()
useTitle(() => t('meta.privacy_title'))
</script>

<template>
  <Layout>
    <section class="section section--flush">
      <div class="container">
        <article class="prose">
          <h1>{{ t('privacy.title') }}</h1>
          <p class="lead">{{ t('privacy.effective_date', { date: '2025-12-22' }) }}</p>

          <h2>{{ t('privacy.intro_title') }}</h2>
          <p>{{ t('privacy.intro_text') }}</p>
          <p><strong>{{ t('privacy.core_principle') }}</strong></p>

          <h2>{{ t('privacy.data_handle_title') }}</h2>
          <h3>{{ t('privacy.tab_info_title') }}</h3>
          <p>{{ t('privacy.tab_info_text') }}</p>

          <h3>{{ t('privacy.bookmark_info_title') }}</h3>
          <p>{{ t('privacy.bookmark_info_text') }}</p>

          <h3>{{ t('privacy.history_info_title') }}</h3>
          <p>{{ t('privacy.history_info_text') }}</p>

          <h3>{{ t('privacy.search_queries_title') }}</h3>
          <p v-html="t('privacy.search_queries_text')"></p>

          <h3>{{ t('privacy.user_settings_title') }}</h3>
          <p v-html="t('privacy.user_settings_text')"></p>

          <h3>{{ t('privacy.keyboard_interactions_title') }}</h3>
          <p>{{ t('privacy.keyboard_interactions_text') }}</p>

          <h2>{{ t('privacy.data_protection_title') }}</h2>
          <h3>{{ t('privacy.no_remote_collection_title') }}</h3>
          <p>{{ t('privacy.no_remote_collection_text') }}</p>

          <h2>{{ t('privacy.permissions_title') }}</h2>
          <ul>
            <li v-html="t('privacy.permissions.all_urls')"></li>
            <li v-html="t('privacy.permissions.tabs')"></li>
            <li v-html="t('privacy.permissions.bookmarks')"></li>
            <li v-html="t('privacy.permissions.history')"></li>
            <li v-html="t('privacy.permissions.storage')"></li>
            <li v-html="t('privacy.permissions.search')"></li>
            <li v-html="t('privacy.permissions.active_tab')"></li>
          </ul>

          <h2>{{ t('privacy.your_rights_title') }}</h2>
          <p>{{ t('privacy.your_rights_text') }}</p>
          <ul>
            <li>{{ t('privacy.your_rights_list.item1') }}</li>
            <li>{{ t('privacy.your_rights_list.item2') }}</li>
          </ul>

          <h2>{{ t('privacy.changes_title') }}</h2>
          <p>{{ t('privacy.changes_text') }}</p>

          <h2>{{ t('privacy.contact_title') }}</h2>
          <p>{{ t('privacy.contact_text') }}</p>
        </article>
      </div>
    </section>
  </Layout>
</template>
