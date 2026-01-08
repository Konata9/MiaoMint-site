<div align="center">
  <img src="public/logo.png" alt="MiaoMint Logo" width="120" />
  <h1>MiaoMint Site</h1>
  <p><strong>MiaoMint 扩展官方网站</strong></p>

  <p>
    <a href="./README.md">English</a>
  </p>

  <p>
    <a href="https://miaomint.konata9.cc">
        <img src="https://img.shields.io/badge/Website-miaomint.konata9.cc-blue?style=flat-square&logo=google-chrome&logoColor=white" alt="Website">
    </a>
    <a href="https://chromewebstore.google.com/detail/miaomint-smart-tab-manage/fhbglejcilmhdnmipnjhanffmbijjego?hl=en">
        <img src="https://img.shields.io/badge/Chrome_Web_Store-Install-4285F4?style=flat-square&logo=google-chrome&logoColor=white" alt="Chrome Web Store">
    </a>
  </p>
</div>

---

## ⚠️ 重要说明

**本仓库包含 MiaoMint 网站的源代码。**

它 **不是** MiaoMint 扩展本身的源代码（扩展未开源）。
本仓库主要用于：
1.  托管网站代码。
2.  **问题反馈**：收集 MiaoMint 扩展的 Bug 报告和功能请求。

---

## ✨ 关于 MiaoMint 扩展

MiaoMint 是一款 Spotlight 风格的 Chrome 命令面板扩展：用一个统一入口，快速搜索与跳转标签页、书签与浏览历史，并支持 URL 直达与 Web 搜索。

### 核心功能

- **全局呼出**：在任意网页按 `Opt/Alt + M` 打开/关闭，支持自动聚焦与焦点保护。
- **极速启动**：插件在页面加载初期（document_start）即刻注入，无需等待页面完全渲染。
- **键盘优先**：`↑/↓` 选择，`Enter` 打开，`Esc` 关闭，`Tab` 键焦点锁定。
- **混合搜索**：智能合并已打开标签页与历史记录；自动去重，优先展示标签页。
- **懒加载优化**：书签与历史记录按需加载，提升首次打开速度与内存效率。
- **强制 Web 搜索**：`Cmd/Ctrl + Enter` 将输入作为关键词用默认搜索引擎搜索。
- **个性化设置**：主题颜色、窗口透明度、多语言（English/简体中文/繁体中文/日语），设置页即时生效。

## 🔒 隐私

- **无后端服务**：不提供后端服务，不会把你的标签页/书签/历史数据上传到任何服务器。
- **本地处理**：标签页、书签与历史数据仅在本地用于搜索与跳转。
- **同步存储**：设置使用 `chrome.storage.sync` 保存，可能会随浏览器同步到你的其他设备（取决于你的 Chrome 同步设置）。
- **搜索隐私**：当你触发 Web 搜索时，搜索词会交由你的默认搜索引擎处理，并遵循该服务的隐私政策。

## 🐞 问题反馈

如果你在使用 MiaoMint 扩展时遇到任何问题或有任何建议，请在本仓库提交 Issue。
