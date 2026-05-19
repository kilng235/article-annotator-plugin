# Changelog

All notable changes to this plugin will be documented in this file.

## [0.1.15] - 2026-05-19

### Added
- 支持平板（iPad）设备适配
- 设置页面关于文本更新：说明支持电脑/iPad/手机三端

## [0.1.14] - 2026-05-18

### Added
- 支持手机端（Android）适配
- 设置页面关于文本更新：说明支持 Android 端

## [0.1.13] - 2026-05-18

### Added
- 新增中/英文界面切换功能
- 批注全局删除操作增加两次确认提示，防止误删

### Release
- Tag: `0.1.13`（无 v 前缀）
- Assets: `main.js`, `manifest.json`, `styles.css`

## [0.1.12] - 2026-05-17

### Changed
- 本地插件目录、仓库 `manifest.json`、GitHub Release tag 统一升级到 `0.1.12`
- 延续 `0.1.11` 的审核修复状态：Release 仅保留 `main.js`、`manifest.json`、`styles.css`，仓库已补 `LICENSE`

### Release
- Tag: `0.1.12`（无 v 前缀）
- Assets: `main.js`, `manifest.json`, `styles.css`

## [0.1.11] - 2026-05-17

### Added
- 本地插件目录、仓库 `manifest.json`、GitHub Release tag 统一升级到 `0.1.11`
- 补充英文主内容 + 中文折叠区 README
- 手动安装说明改为直接下载 `main.js`、`manifest.json`、`styles.css`

### Audit Fix
- 删除 `0.1.10` Release 中多余的 `article-annotator.zip`
- 删除 `0.1.11` Release 中多余的 `article-annotator.zip`
- 为仓库补充 `LICENSE`（MIT）
- 对齐 README 与当前 Release 资产，移除 zip 相关描述

### Release
- Tag: `0.1.11`（无 v 前缀）
- Assets: `main.js`, `manifest.json`, `styles.css`

## [0.1.8] - 2026-05-16

### Changed
- 更新 `main.js` 到 v0.1.8 功能
- 更新 `styles.css` 增强 UI 样式
- 更新 `manifest.json` 版本号

### Removed
- 移除英文版界面（i18n 保留中文翻译，lang 硬编码为 zh）

### Release
- Tag: `0.1.8`（无 v 前缀）
- Assets: `main.js`, `manifest.json`, `styles.css`

## [0.1.0] - 2026-05-15

### Added
- 首次发布：文本高亮和批注功能（类似 Microsoft Word 批注）
- 侧边栏面板管理批注
- 批注卡片拖拽排序
- 仅支持 Windows 桌面端
