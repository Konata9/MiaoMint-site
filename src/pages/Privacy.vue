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
        <h1 class="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p class="mb-4"><strong>Effective Date:</strong> 2025-12-22</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p class="mb-4">
          MiaoMint ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how our Chrome Extension ("MiaoMint") handles your data.
        </p>
        <p class="mb-4 font-medium">
          Core Principle: We believe your browsing data belongs to you. MiaoMint is designed to operate locally on your device. We do not collect, store, or transmit your personal data to any external servers.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">2. Data We Handle</h2>
        <h3 class="text-xl font-semibold mt-4 mb-2">2.1 Tab Information</h3>
        <p class="mb-4">
          MiaoMint accesses your open tabs' titles and URLs solely to provide the search and navigation functionality. This processing happens entirely within your browser's memory.
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">2.2 Bookmark Information</h3>
        <p class="mb-4">
          When you use bookmark search (e.g. bookmark mode), MiaoMint reads your browser bookmarks' titles and URLs to provide local search and open-bookmark functionality. Bookmark data is processed locally in your browser and is not transmitted to us.
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">2.3 History Information</h3>
        <p class="mb-4">
          When you use history search (e.g. history mode), MiaoMint searches your browsing history to provide local search and open-history functionality. History data is processed locally in your browser and is not transmitted to us.
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">2.4 Search Queries</h3>
        <p class="mb-4">
          If you choose to run a web search from MiaoMint, your query is passed to your browser's built-in search feature (e.g. <code>chrome.search.query</code>) and will be handled by your default search engine according to its own privacy policy. We do not receive or store your search queries.
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">2.5 User Settings</h3>
        <p class="mb-4">
          Your preferences (theme, opacity, etc.) are stored using <code>chrome.storage.sync</code>. If you have Chrome Sync enabled, these settings may be synchronized across your signed-in Chrome devices by Google as part of the browser's sync feature. You can control this behavior in your browser sync settings.
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">2.6 Session Data (Smart Sessions)</h3>
        <p class="mb-4">
          When you use the "Smart Sessions" feature to save a workspace, we store the layout of your windows and the URLs/titles of your tabs locally on your device using <code>chrome.storage.local</code>. This data allows you to restore your window layout and tabs later. It is stored <strong>only on your device</strong> and is never uploaded to our servers or any third-party cloud storage. You can delete any saved session at any time within the extension.
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">2.7 Payment & Licensing Data</h3>
        <p class="mb-4">
          MiaoMint offers a Pro version via a one-time license purchase. Payments are securely processed by our Merchant of Record, <strong>Lemon Squeezy</strong>. MiaoMint does <strong>not</strong> collect, see, or store your credit card details or billing address.
        </p>
        <p class="mb-4">
          When you activate a license key, the extension communicates directly with the Lemon Squeezy API to verify the key's validity. We locally store only your <strong>License Key</strong> and its <strong>Activation Status</strong> (e.g., "active" or "expired") to unlock Pro features.
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">2.8 Keyboard Interactions</h3>
        <p class="mb-4">
          MiaoMint uses keyboard events to support the command shortcut and in-UI navigation (e.g. Escape, Arrow keys, Enter). These events are not recorded, stored, or sent to us.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">3. Data Protection</h2>
        <h3 class="text-xl font-semibold mt-4 mb-2">3.1 No Remote Collection</h3>
        <p class="mb-4">
          We do not have any backend servers. We do not use Google Analytics or any third-party tracking scripts within the extension. Your tab and bookmark data is processed locally in your browser and is not transmitted to us.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">4. Permissions Explained</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Read and change all your data on the websites you visit (`&lt;all_urls&gt;`)</strong>: This permission is technically required to inject the MiaoMint search bar (Spotlight-like UI) into every page you visit so you can invoke it with a shortcut. We do not read page content other than to display the search bar.</li>
          <li><strong>Tabs</strong>: Required to list your currently open tabs (title, URL) so you can search and switch between them.</li>
          <li><strong>Bookmarks</strong>: Required to list your browser bookmarks (title, URL) so you can search and open them.</li>
          <li><strong>History</strong>: Required to search your browser history (title, URL) so you can find and open visited pages.</li>
          <li><strong>Storage</strong>: Required to save your preferences (theme, opacity, language).</li>
          <li><strong>Search</strong>: Required to trigger a web search using your browser's default search engine when you choose to do so.</li>
          <li><strong>Active Tab</strong>: Required to interact with the currently active tab when you invoke the extension (e.g. showing the UI and opening a selected result).</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <p class="mb-4">
          Since we do not collect your data, there is no data for us to delete or export upon request. You have full control over the local data stored by the extension:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>You can uninstall the extension to immediately remove all associated local data.</li>
          <li>If you have Chrome Sync enabled, you can disable sync or clear synced data via your browser sync settings.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
        <p class="mb-4">
          We may update this privacy policy from time to time. If we make significant changes, we will notify you by updating the date at the top of this policy and, where appropriate, through the extension.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">7. Contact</h2>
        <p class="mb-4">
          If you have questions about this policy, please contact us via the Chrome Web Store support tab.
        </p>
      </div>
    </div>
  </Layout>
</template>
