<div align="center">
  <img src="public/logo.png" alt="MiaoMint Logo" width="120" />
  <h1>MiaoMint Site</h1>
  <p><strong>Official Website for MiaoMint Extension</strong></p>
</div>

---

## ⚠️ Important Note

**This repository contains the source code for the MiaoMint website.**

It is **NOT** the source code for the MiaoMint extension itself. The extension is closed-source.
This repository is used for:
1.  Hosting the website code.
2.  **Issue Tracking**: Collecting bug reports and feature requests for the MiaoMint extension.

---

## ✨ About MiaoMint Extension

MiaoMint is a Spotlight-style Chrome command palette extension that provides a unified entry point to quickly search and jump to tabs, bookmarks, and browsing history, with support for direct URL navigation and web search.

### Core Features

- **Global Activation**: Press `Opt/Alt + M` on any webpage to open/close. Supports auto-focus and focus protection.
- **Instant Startup**: Injected immediately at page load (document_start), no need to wait for the page to render fully.
- **Keyboard First**: Navigate with `↑/↓`, open with `Enter`, close with `Esc`, and lock focus with `Tab`.
- **Hybrid Search**: Smartly merges open tabs and history; automatically deduplicates and prioritizes tabs.
- **Lazy Loading**: Bookmarks and history are loaded on demand to improve startup speed and memory efficiency.
- **Forced Web Search**: Press `Cmd/Ctrl + Enter` to force a web search using your default engine.
- **Personalization**: Customize theme colors, window opacity, and language (English/Simplified Chinese/Traditional Chinese/Japanese).

## 🔒 Privacy

- **No Backend Services**: We do not upload your tabs, bookmarks, or history data to any server.
- **Local Processing**: All data is processed locally for search and navigation purposes only.
- **Sync Storage**: Settings are saved using `chrome.storage.sync` and may sync across your devices depending on your Chrome settings.
- **Search Privacy**: Web searches are handled by your default search engine and are subject to their privacy policies.

## 🐞 Reporting Issues

If you encounter any issues or have suggestions for the MiaoMint extension, please open an issue in this repository.
