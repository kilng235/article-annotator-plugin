# Article Annotator

> Obsidian 插件：文章批注 —— 像 Microsoft Word 一样高亮文本并添加批注

[![Release](https://img.shields.io/github/v/release/kilng235/article-annotator-plugin)](https://github.com/kilng235/article-annotator-plugin/releases)
[![Obsidian Plugins](https://img.shields.io/badge/Obsidian-Plugin-blue)](https://obsidian.md/plugins)

> 💖 如果觉得这个插件好用，请给个 Star 支持一下！

---

## 功能

- **文本高亮 + 批注**：在 Markdown 编辑器中高亮选中文字，添加类似 Word 的批注
- **即点即编**：点击批注卡片直接原地进入编辑，无弹窗打断，blur 自动保存，Esc 取消
- **笔记本内页风格**：批注卡片采用横线纸面、装订孔、页边距竖线和色条标记，视觉统一为纸质笔记质感
- **侧边栏管理**：在侧边栏面板中查看所有批注，支持定位、删除、导出
- **批注卡片拖拽排序**：在侧边栏中自由拖拽调整批注顺序
- **批注分组管理**：支持选择多个批注创建分组，拖拽归类，折叠/展开，重命名、取消分组
- **多端支持**：支持 **电脑（Desktop） / iPad / 手机（Android）** 三端同步
  - 批注同步文件：`article-annotator/annotations.json`
  - 安装后不会立刻创建；首次开始批注或从旧版本迁移数据时会自动创建
- **中英双语**：支持中英文界面切换
- **6 色高亮**：暖黄、浅绿、浅蓝、浅紫、浅红、橙色，支持自定义颜色
- **快捷键支持**：高亮、新建批注、删除批注均可绑定快捷键
- **移动端适配**：支持 Android 和 iPad 触摸操作

<details>
<summary>🔤 Features (English)</summary>

- **Text Highlight + Annotations**: Highlight selected text in Markdown editor and add Word-like comments
- **Click-to-Edit**: Click any annotation card to edit notes in place — no modal popup, blur auto-saves, Esc cancels
- **Notebook Style**: Cards feature ruled lines, punch holes, margin line, and color stripe for a paper notebook aesthetic
- **Sidebar Management**: View all annotations in the sidebar panel with locate, delete, and export support
- **Drag-and-Drop Cards**: Reorder annotation cards freely in the sidebar
- **Annotation Groups**: Create groups from multiple annotations, drag to organize, collapse/expand, rename, ungroup
- **Multi-Device Sync**: Sync annotations across **Desktop / iPad / Android**
  - Synced annotation file: `article-annotator/annotations.json`
  - Created automatically when you add your first annotation or when legacy data is migrated
- **Bilingual**: Switch between Chinese and English interfaces
- **6 Highlight Colors**: Warm Yellow, Light Green, Light Blue, Light Purple, Light Red, Orange — customizable
- **Keyboard Shortcuts**: Highlight, new annotation, and delete can all be bound to shortcuts
- **Mobile Support**: Touch-friendly on Android and iPad

</details>

---

## 安装

### Obsidian 社区插件市场（推荐）

1. 打开 Obsidian → 设置 → 社区插件 → 浏览
2. 搜索 `Article Annotator`
3. 点击安装并启用

### 手动安装

1. 从 [Releases](https://github.com/kilng235/article-annotator-plugin/releases) 下载最新版本的 `main.js`、`manifest.json`、`styles.css`
2. 在 Obsidian vault 的 `.obsidian/plugins/` 目录下新建文件夹 `article-annotator`
3. 将三个文件放入该文件夹
4. 重启 Obsidian，在设置 → 社区插件中启用

<details>
<summary>🔤 Installation (English)</summary>

#### Community Plugin Store (Recommended)

1. Open Obsidian → Settings → Community Plugins → Browse
2. Search `Article Annotator`
3. Click Install and Enable

#### Manual Install

1. Download the latest `main.js`, `manifest.json`, `styles.css` from [Releases](https://github.com/kilng235/article-annotator-plugin/releases)
2. Create a folder `article-annotator` under `.obsidian/plugins/` in your vault
3. Place the three files in that folder
4. Restart Obsidian and enable it in Settings → Community Plugins

</details>

---

## 使用说明

### 高亮文本

1. 在 **编辑模式** 下选中文字
2. 使用命令 `文章批注：高亮选中内容`（或绑定快捷键）
3. 高亮颜色在设置中可自定义

### 添加批注

1. 高亮后，在侧边栏 `Article Annotator` 面板点击 **新建批注**
2. 输入批注内容并保存
3. 批注卡片支持拖拽排序

### 管理批注

- **编辑**：点击批注卡片直接原地编辑，无需弹窗
- **删除**：点击删除按钮（全局删除有二次确认）
- **清空**：可一键清空所有批注
- **导出**：支持导出为 JSON 格式

### 阅读模式

> ⚠️ 阅读模式当前不显示批注高亮，请在编辑模式下查看。

<details>
<summary>🔤 Usage (English)</summary>

#### Highlight Text

1. Select text in **Editing mode**
2. Use command `Article Annotator: Highlight selected text` (or bind a shortcut)
3. Highlight color is customizable in settings

#### Add Annotation

1. After highlighting, click **New Annotation** in the `Article Annotator` sidebar panel
2. Enter annotation content and save
3. Annotation cards support drag-and-drop reordering

#### Manage Annotations

- **Edit**: Click annotation card to edit in place, no modal needed
- **Delete**: Click delete button (global delete has double confirmation)
- **Clear All**: One-click to clear all annotations
- **Export**: Export as JSON

#### Reading Mode

> ⚠️ Annotations are not visible in Reading mode. Please switch to Editing mode to view highlights.

</details>

---

## 设置

| 设置项 | 说明 |
|--------|------|
| 默认高亮颜色 | 选择新批注的默认颜色 |
| 语言 | 中文 / English 界面切换 |
| 高亮颜色列表 | 6 种颜色可自定义 |
| 快捷键 | 在 Obsidian 设置 → 快捷键中绑定 |

<details>
<summary>🔤 Settings (English)</summary>

| Setting | Description |
|---------|-------------|
| Default Color | Choose default color for new annotations |
| Language | Switch between Chinese and English interfaces |
| Highlight Colors | 6 customizable colors |
| Shortcuts | Bind in Obsidian Settings → Hotkeys |

</details>

---

## 版本历史

详见 [CHANGELOG](https://github.com/kilng235/article-annotator-plugin/blob/main/CHANGELOG.md)

<details>
<summary>🔤 Changelog (English)</summary>

See [CHANGELOG](https://github.com/kilng235/article-annotator-plugin/blob/main/CHANGELOG.md)

</details>

---

## 注意事项

- 所有批注数据独立保存于知识库根目录下的 `article-annotator/annotations.json`，**不修改原文文件**
- 安装插件后不会立刻创建该文件；首次开始批注或旧版数据迁移时会自动创建
- 旧版本保存在 `.obsidian/plugins/article-annotator/data.json` 的批注会自动迁移到新的同步文件
- 阅读模式下高亮不显示，仅编辑模式可见

<details>
<summary>🔤 Notes (English)</summary>

- All annotation data is stored independently in `article-annotator/annotations.json` at the root of your vault, **without modifying original files**
- This file is not created immediately on install; it is created automatically when you add your first annotation or when legacy data is migrated
- Existing annotations stored in `.obsidian/plugins/article-annotator/data.json` are migrated automatically to the new synced file
- Highlights are not visible in Reading mode, only in Editing mode

</details>

---

## 许可

MIT License

<details>
<summary>🔤 License (English)</summary>

MIT License

</details>
