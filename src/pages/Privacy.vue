<script setup lang="ts">
import Layout from '../Layout.vue'
</script>

<template>
  <Layout>
    <div class="container mx-auto py-10 px-4 max-w-3xl">
      <div class="prose dark:prose-invert">
        <h1 class="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p class="mb-4"><strong>Effective Date:</strong> 2025-12-18</p>
        
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
        <h3 class="text-xl font-semibold mt-4 mb-2">2.2 User Settings</h3>
        <p class="mb-4">
          Your preferences (theme, opacity, etc.) are stored locally using <code>chrome.storage.sync</code> to sync across your signed-in Chrome devices, subject to your browser's sync settings.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">3. Data Protection</h2>
        <h3 class="text-xl font-semibold mt-4 mb-2">3.1 No Remote Collection</h3>
        <p class="mb-4">
          We do not have any backend servers. We do not use Google Analytics or any third-party tracking scripts within the extension. Your browsing history never leaves your device through MiaoMint.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">4. Permissions Explained</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Read and change all your data on the websites you visit (`&lt;all_urls&gt;`)</strong>: This permission is technically required to inject the MiaoMint search bar (Spotlight-like UI) into every page you visit so you can invoke it with a shortcut. We do not read page content other than to display the search bar.</li>
          <li><strong>Read your browsing history</strong>: Required to search through your open tabs.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <p class="mb-4">
          Since we do not collect your data, there is no data for us to delete or export upon request. You have full control over the local data stored by the extension:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>You can uninstall the extension to immediately remove all associated local data.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
        <p class="mb-4">
          If you have questions about this policy, please contact us via the Chrome Web Store support tab.
        </p>
      </div>
    </div>
  </Layout>
</template>
