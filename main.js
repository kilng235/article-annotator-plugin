"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ArticleAnnotator
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var import_cm_state = require("@codemirror/state");
var import_cm_view = require("@codemirror/view");

// ==================== i18n System ====================
var LANGUAGES = {
  "en": {
  "pluginName": "Article Annotator",
  "commands": {
    "toggleSidebar": "Toggle annotation panel",
    "exportAnnotations": "Export current file annotations",
    "searchAnnotations": "Search all annotations",
    "clearFileAnnotations": "Clear current file annotations",
    "mobileHighlight": "Mobile: Highlight current selection (default color)",
    "mobileAddNote": "Mobile: Add note to current selection"
  },
  "notifications": {
    "pluginLoaded": "📝 Article Annotator loaded",
    "openFileFirst": "Please open a file first",
    "noAnnotations": "No annotations in current file",
    "openEditableNote": "Please open an editable note first",
    "annotationExists": "⚠️ This area already has an annotation, please delete it first before re-highlighting",
    "annotationSaved": "✅ Annotation saved",
    "confirmDelete": "Are you sure you want to delete this annotation?",
    "fileNotFound": "File not found or has been moved",
    "crossPageNotSupported": "Cross-page selection is not supported. Please select text within the same page.",
    "invalidHex": "Please enter a valid hex color, e.g. #FCD34D",
    "invalidHexColor": "Please enter a valid hex color, e.g. #FCD34D",
    "syncedStoreReadFailed": "Failed to read synced annotations file",
    "annotationsMigrated": "Annotations migrated to vault storage",
    "exportDone": "✅ Exported:",
    "clearFileConfirm": "Are you sure you want to clear all ${n} annotations in the current file?",
    "highlightAdded": "✅ ${color} Highlight added",
    "customColorSaved": "✅ Custom color saved",
    "customColorCleared": "✅ Custom color cleared",
    "customColorNameSaved": "✅ Custom color name saved",
    "fileCleared": "🗑️ Cleared ${n} annotations"
  },
  "ui": {
    "highlight": "Highlight",
    "note": "Note",
    "color": "Color:",
    "placeholder": "Enter your thoughts here...",
    "save": "💾 Save",
    "cancel": "Cancel",
    "searchPlaceholder": "Enter keywords to search...",
    "noResults": "No matching annotations found",
    "noData": "No annotation data yet",
    "all": "All",
    "highlights": "Highlights",
    "notes": "Notes",
    "emptyHint": "Select text, then right-click to highlight or add note",
    "deleteConfirm": "Delete this annotation?",
    "search": "🔍 Search",
    "export": "📤 Export",
    "clear": "🗑️ Clear",
    "navigate": "Navigate",
    "editNote": "Edit note",
    "editNoteTitle": "✏️ Edit note",
    "searchAll": "🔍 Search all annotations",
    "searchResults": "${n} annotations found",
    "clearFileConfirm": "Clear ${n} annotations for the current file?",
    "mobileHighlight": "🔖 Highlight",
    "mobileAddNote": "✏️ Add note",
    "mobileSidebar": "📚 Sidebar",
    "sidebarTitle": "📝 Article Annotator",
    "fabAriaLabel": "Article Annotator quick actions",
    "customColor": "Custom",
    "customColorDesc": "Custom highlight color (hex)",
    "customColorName": "Custom color name",
    "customColorNameDesc": "Display name for custom color in menu",
    "invalidHexColor": "Please enter a valid hex color, e.g. #FCD34D",
    "locationPage": "Page {page}",
    "locationLine": "Line {line}",
    "pdfAddNote": "✏️ Write note",
    "group": "📦 Group",
    "groupSelected": "Group selected",
    "cancelSelection": "Cancel selection",
    "selectMultiple": "☑️ Multi-select",
    "groupName": "Group name",
    "createGroup": "Create group",
    "renameGroup": "Rename group",
    "ungroup": "Ungroup",
    "collapseGroup": "Collapse group",
    "expandGroup": "Expand group",
    "groupCount": "${n} annotations"
  },
  "settings": {
    "defaultColor": "Default highlight color",
    "defaultColorDesc": "Color used when highlighting by default",
    "highlightColors": "Highlight colors",
    "custom": "Custom",
    "shortcuts": "Shortcuts",
    "about": "About",
    "language": "Language",
    "languageDesc": "Interface language for the plugin",
    "shortcutsHint": "💡 Set shortcuts in Obsidian Settings → Hotkeys",
    "notBound": "not bound",
    "readingModeNotice": "Note: Annotations are not visible in Reading mode. Please switch to Editing mode to view highlights.",
    "aboutText": "Article Annotator 0.2.0 — Inspired by Microsoft Word comments. All annotation data is stored independently and does not modify the original file. Supports sync across Desktop, iPad, and Android when your vault syncs the file <strong><code>article-annotator/annotations.json</code></strong>.\n\n💡 Custom highlight color uses hex code (e.g., #FCD34D).",
  },
  "colorNames": {
    "#FCD34D": "Warm Yellow",
    "#FBBF24": "Amber",
    "#F97316": "Orange",
    "#EF4444": "Red",
    "#8B5CF6": "Purple",
    "#06B6D4": "Cyan"
  },
  "time": {
    "today": "Today",
    "yesterday": "Yesterday"
  },
  "export": {
    "title": "# 📍 Annotations Export — ${name}\n\n",
    "exportTime": "> Export time: ",
    "totalCount": "> Total annotations: ",
    "items": " items",
    "note": "**Note:** ",
    "location": "*Location: ",
    "fileType": "*File type: ",
    "time": "*Time: ",
    "pdf": "PDF",
    "markdown": "Markdown",
    "fileSuffix": "-annotations-export.md",
    "exportDone": "✅ Exported:"
  }
},
  "zh": {
  "pluginName": "文章批注",
  "commands": {
    "toggleSidebar": "切换批注面板",
    "exportAnnotations": "导出当前文件批注",
    "searchAnnotations": "搜索全部批注",
    "clearFileAnnotations": "清空当前文件批注",
    "mobileHighlight": "手机端：高亮当前选中（默认颜色）",
    "mobileAddNote": "手机端：给当前选中写批注"
  },
  "notifications": {
    "pluginLoaded": "📝 文章批注已加载",
    "openFileFirst": "请先打开一个文件",
    "noAnnotations": "当前文件没有批注",
    "openEditableNote": "请先打开一个可编辑的笔记",
    "annotationExists": "⚠️ 该区域已有批注，请先删除再重新标注",
    "annotationSaved": "✅ 批注已保存",
    "confirmDelete": "确定删除这条批注？",
    "fileNotFound": "文件不存在或已被移动",
    "crossPageNotSupported": "跨页选择暂不支持，请在同一页内选择文本",
    "invalidHex": "请输入有效的 hex 颜色，如 #FCD34D",
    "invalidHexColor": "请输入有效的十六进制颜色，如 #FCD34D",
    "syncedStoreReadFailed": "同步批注文件读取失败",
    "annotationsMigrated": "批注已迁移到知识库存储",
    "exportDone": "✅ 已导出：",
    "clearFileConfirm": "确定清空当前文件的 ${n} 条批注？",
    "highlightAdded": "✅ ${color} 高亮已添加",
    "customColorSaved": "✅ 自定义颜色已保存",
    "customColorCleared": "✅ 自定义颜色已清空",
    "customColorNameSaved": "✅ 自定义颜色名称已保存",
    "fileCleared": "🗑️ 已清空 ${n} 条批注"
  },
  "ui": {
    "highlight": "高亮",
    "note": "批注",
    "color": "颜色：",
    "placeholder": "在此输入你的想法……",
    "save": "💾 保存",
    "cancel": "取消",
    "searchPlaceholder": "输入关键词搜索…",
    "noResults": "没有找到匹配的批注",
    "noData": "暂无批注数据",
    "all": "全部",
    "highlights": "高亮",
    "notes": "批注",
    "emptyHint": "选中文字后，右键选择高亮或批注",
    "deleteConfirm": "确定删除这条批注？",
    "search": "🔍 搜索",
    "export": "📤 导出",
    "clear": "🗑️ 清空",
    "navigate": "定位",
    "editNote": "编辑",
    "editNoteTitle": "✏️ 编辑批注",
    "searchAll": "🔍 搜索全部批注",
    "searchResults": "共 ${n} 条批注",
    "clearFileConfirm": "确定清空当前文件的 ${n} 条批注？",
    "mobileHighlight": "🔖 高亮",
    "mobileAddNote": "✏️ 写批注",
    "mobileSidebar": "📚 面板",
    "sidebarTitle": "📝 文章批注",
    "fabAriaLabel": "文章批注快捷操作",
    "customColor": "自定义",
    "customColorDesc": "自定义高亮颜色（十六进制）",
    "customColorName": "自定义颜色名称",
    "customColorNameDesc": "在菜单中显示的颜色名称",
    "invalidHexColor": "请输入有效的十六进制颜色，如 #FCD34D",
    "locationPage": "第 {page} 页",
    "locationLine": "第 {line} 行",
    "pdfAddNote": "✏️ 写批注",
    "group": "📦 分组",
    "groupSelected": "分组选中",
    "cancelSelection": "取消选择",
    "selectMultiple": "☑️ 多选",
    "groupName": "分组名称",
    "createGroup": "创建分组",
    "renameGroup": "重命名分组",
    "ungroup": "取消分组",
    "collapseGroup": "折叠分组",
    "expandGroup": "展开分组",
    "groupCount": "${n} 条批注"
  },
  "settings": {
    "defaultColor": "默认高亮颜色",
    "defaultColorDesc": "高亮时默认使用的颜色",
    "highlightColors": "高亮颜色",
    "custom": "自定义",
    "shortcuts": "快捷键",
    "about": "关于",
    "language": "语言",
    "languageDesc": "插件界面语言",
    "shortcutsHint": "💡 可在 Obsidian 设置 → 快捷键 中为上述命令绑定快捷键",
    "notBound": "未绑定",
    "readingModeNotice": "说明：阅读模式当前不显示批注高亮，请在编辑模式下查看高亮。",
    "aboutText": "文章批注 0.2.0 — 参考 Microsoft Word 批注设计。所有批注数据独立保存，不修改原文。当前已支持电脑、iPad、手机三端同步，需确保知识库同步文件 <strong><code>article-annotator/annotations.json</code></strong>。\n\n💡 自定义高亮颜色使用十六进制代码（如 #FCD34D）。",
  },
  "colorNames": {
    "#FCD34D": "暖黄",
    "#FBBF24": "琥珀",
    "#F97316": "橙色",
    "#EF4444": "赤红",
    "#8B5CF6": "紫色",
    "#06B6D4": "青色"
  },
  "time": {
    "today": "今天",
    "yesterday": "昨天"
  },
  "export": {
    "title": "# 📍 批注导出 — ${name}\n\n",
    "exportTime": "> 导出时间：",
    "totalCount": "> 批注总数：",
    "items": " 条",
    "note": "**批注：** ",
    "location": "*位置：",
    "fileType": "*类型：",
    "time": "*时间：",
    "pdf": "PDF",
    "markdown": "Markdown",
    "fileSuffix": "-批注导出.md",
    "exportDone": "✅ 已导出："
  }
}
};

function t(key, plugin) {
  var lang = plugin?.settings?.language || "zh";
  var keys = key.split(".");
  var result = LANGUAGES[lang];
  for (var i = 0; i < keys.length; i++) {
    if (result && result[keys[i]] !== undefined) {
      result = result[keys[i]];
    } else {
      // Fallback to Chinese
      result = LANGUAGES["zh"];
      for (var j = i; j < keys.length; j++) {
        if (result && result[keys[j]] !== undefined) {
          result = result[keys[j]];
        } else {
          return key; // Return key if not found
        }
      }
      return result;
    }
  }
  return result;
}

function getColorName(color, plugin) {
  var lang = plugin?.settings?.language || "zh";
  return LANGUAGES[lang].colorNames[color] || color;
}
// ==================== End i18n System ====================


// CM6 StateEffect：通知装饰层更新高亮
var setHighlightsEffect = import_cm_state.StateEffect.define();

// CM6 StateField：管理 Decoration.mark 集合，自动跟随编辑调整位置
var highlightField = import_cm_state.StateField.define({
  create() {
    return import_cm_view.Decoration.none;
  },
  update(decorations, tr) {
    decorations = decorations.map(tr.changes);
    for (let e of tr.effects) {
      if (e.is(setHighlightsEffect)) {
        const ranges = e.value;
        if (!ranges || ranges.length === 0) {
          decorations = import_cm_view.Decoration.none;
        } else {
          const marks = ranges.map((r) => import_cm_view.Decoration.mark({
            attributes: {
              style: `background-color: ${r.color}40; border-bottom: 2px solid ${r.color}; border-radius: 2px;`
            }
          }).range(r.from, r.to));
          decorations = import_cm_view.Decoration.set(marks, true);
        }
      }
    }
    return decorations;
  },
  provide: (f) => import_cm_view.EditorView.decorations.from(f)
});

// 刷新当前编辑器高亮：从 annotation 数据计算文档偏移量，dispatch 到 CM6
function getFileType(file) {
  return file?.extension === "pdf" ? "pdf" : "markdown";
}
function isMarkdownPosition(position) {
  return !!position && (position.kind === "markdown" || typeof position.startLine === "number");
}
function isPdfPosition(position) {
  return !!position && position.kind === "pdf";
}
function normalizeRect(rect) {
  if (!rect)
    return null;
  const x = Number(rect.x);
  const y = Number(rect.y);
  const width = Number(rect.width);
  const height = Number(rect.height);
  if (![x, y, width, height].every(Number.isFinite))
    return null;
  if (width <= 0 || height <= 0)
    return null;
  return {
    x: Math.max(0, x),
    y: Math.max(0, y),
    width,
    height
  };
}
function normalizeAnnotation(annotation) {
  if (!annotation || !annotation.filePath)
    return null;
  const fileType = annotation.fileType || (annotation.filePath.toLowerCase().endsWith(".pdf") ? "pdf" : "markdown");
  const base = {
    id: annotation.id || generateId(),
    filePath: annotation.filePath,
    fileType,
    type: annotation.type || "highlight",
    color: annotation.color || DEFAULT_SETTINGS.defaultColor,
    highlightedText: annotation.highlightedText || "",
    noteContent: annotation.noteContent || "",
    groupId: annotation.groupId || null,
    created: typeof annotation.created === "number" ? annotation.created : Date.now(),
    updated: typeof annotation.updated === "number" ? annotation.updated : Date.now(),
    order: typeof annotation.order === "number" ? annotation.order : typeof annotation.created === "number" ? annotation.created : Date.now()
  };
  if (fileType === "pdf") {
    const position = annotation.position || {};
    const rects = Array.isArray(position.rects) ? position.rects.map(normalizeRect).filter(Boolean) : [];
    if (rects.length === 0 || !Number.isFinite(position.page))
      return null;
    return {
      ...base,
      position: {
        kind: "pdf",
        page: Number(position.page),
        rects,
        quote: position.quote || annotation.highlightedText || "",
        pageLabel: position.pageLabel || String(position.page),
        viewportBase: position.viewportBase && Number.isFinite(position.viewportBase.pageWidth) && Number.isFinite(position.viewportBase.pageHeight) ? {
          pageWidth: Number(position.viewportBase.pageWidth),
          pageHeight: Number(position.viewportBase.pageHeight)
        } : null
      }
    };
  }
  const position = annotation.position || {};
  if (!isMarkdownPosition(position))
    return null;
  return {
    ...base,
    position: {
      kind: "markdown",
      startLine: Number(position.startLine) || 0,
      startCh: Number(position.startCh) || 0,
      endLine: Number(position.endLine) || 0,
      endCh: Number(position.endCh) || 0
    }
  };
}
function getPdfPageElementFromNode(node) {
  if (!(node instanceof Element))
    return null;
  return node.closest('.page[data-page-number], [data-page-number].page, .pdf-page, [data-page-number]');
}
function getPdfPageNumber(pageEl) {
  if (!(pageEl instanceof Element))
    return null;
  const raw = pageEl.getAttribute("data-page-number") || pageEl.dataset?.pageNumber || pageEl.getAttribute("data-page") || pageEl.getAttribute("aria-label")?.match(/\d+/)?.[0];
  const page = Number(raw);
  return Number.isFinite(page) ? page : null;
}
function getPdfPageRect(pageEl) {
  if (!(pageEl instanceof HTMLElement))
    return null;
  const rect = pageEl.getBoundingClientRect();
  if (!rect.width || !rect.height)
    return null;
  return rect;
}
function ensurePdfLayer(pageEl) {
  if (!(pageEl instanceof HTMLElement))
    return null;
  let layer = pageEl.querySelector(":scope > .aa-pdf-highlight-layer");
  if (!(layer instanceof HTMLElement)) {
    layer = pageEl.ownerDocument.createElement("div");
    layer.className = "aa-pdf-highlight-layer";
    const position = window.getComputedStyle(pageEl).position;
    if (!position || position === "static") {
      pageEl.style.position = "relative";
    }
    pageEl.appendChild(layer);
  }
  return layer;
}
function getAnnotationLocationLabel(annotation, plugin) {
  if (annotation.fileType === "pdf" && isPdfPosition(annotation.position)) {
    return t("ui.locationPage", plugin).replace("{page}", annotation.position.page);
  }
  return t("ui.locationLine", plugin).replace("{line}", annotation.position.startLine + 1);
}
function refreshHighlights(plugin) {
  const view = plugin.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
  if (!view?.file)
    return;
  const cm = view.editor.cm;
  if (!cm)
    return;
  const annotations = plugin.getAnnotationsForFile(view.file.path).filter((ann) => ann.fileType !== "pdf" && isMarkdownPosition(ann.position));
  if (annotations.length === 0) {
    cm.dispatch({ effects: setHighlightsEffect.of([]) });
    return;
  }
  const doc = cm.state.doc;
  const ranges = [];
  for (const ann of annotations) {
    const startLine = ann.position.startLine + 1;
    const endLine = ann.position.endLine + 1;
    if (startLine > doc.lines || endLine > doc.lines)
      continue;
    const from = doc.line(startLine).from + ann.position.startCh;
    const to = doc.line(endLine).from + ann.position.endCh;
    if (from >= 0 && to <= doc.length && from <= to) {
      ranges.push({ from, to, color: ann.color });
    }
  }
  cm.dispatch({ effects: setHighlightsEffect.of(ranges) });
}
var DEFAULT_SETTINGS = {
  defaultColor: "#FCD34D",
  colors: ["#FCD34D", "#FBBF24", "#F97316", "#EF4444", "#8B5CF6", "#06B6D4"],
  customHighlightColor: "",
  customHighlightColorName: "自定义",
  language: "zh"
};
var VIEW_TYPE = "article-annotator-sidebar";
var ANNOTATION_STORE_DIR = "article-annotator";
var ANNOTATION_STORE_FILE = "annotations.json";
var LEGACY_ANNOTATION_STORE_DIR = "_article-annotator";
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}
function formatTime(ts, plugin) {
  const d = new Date(ts);
  const now = /* @__PURE__ */ new Date();
  const pad = (n) => n.toString().padStart(2, "0");
  if (d.toDateString() === now.toDateString()) {
    return `${t("time.today", plugin)} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (d.toDateString() === yesterday.toDateString()) {
    return `${t("time.yesterday", plugin)} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  return `${d.getMonth() + 1}/${d.getDate()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function positionsOverlap(a, b) {
  if (a.endLine < b.startLine || a.endLine === b.startLine && a.endCh <= b.startCh)
    return false;
  if (a.startLine > b.endLine || a.startLine === b.endLine && a.startCh >= b.endCh)
    return false;
  return true;
}

// ==================== 颜色验证 ====================
function validateHexColor(hex) {
  if (!hex || typeof hex !== "string") return false;
  return /^#[0-9A-Fa-f]{6}$/.test(hex.trim());
}
var ArticleAnnotator = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.data = [];
    this.groups = [];
    this.activeFile = null;
    this.sidebarView = null;
    this.mobileFabEl = null;
    this.mobileFabPanelEl = null;
    this.pdfContextMenuHandler = null;
    this.pdfRenderTimers = /* @__PURE__ */ new Map();
    this.annotationStorePath = `${ANNOTATION_STORE_DIR}/${ANNOTATION_STORE_FILE}`;
    this.isReloadingAnnotationStore = false;
  }
  // ==================== 生命周期 ====================
  async onload() {
    console.log("\u{1F4DD} \u6587\u7AE0\u6279\u6CE8: loading...");
    await this.loadSettingsAndData();
    this.registerEditorExtension(highlightField);
    this.registerView(VIEW_TYPE, (leaf) => {
      this.sidebarView = new AnnotatorSidebarView(leaf, this);
      return this.sidebarView;
    });
    this.addRibbonIcon("pen-tool", t("pluginName", this), () => {
      this.activateSidebar();
    });
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor, view) => {
        const selection = editor.getSelection();
        if (!selection)
          return;
        this.addAnnotationMenuItems(menu, editor, view);
      })
    );
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf) => {
        const file = leaf?.view?.file || null;
        if (!file)
          return;
        this.handleActiveFileChange(file);
      })
    );
    this.registerEvent(
      this.app.workspace.on("layout-change", () => {
        this.schedulePdfRender();
      })
    );
    this.registerEvent(
      this.app.vault.on("modify", async (file) => {
        if (file?.path === this.getAnnotationStorePath()) {
          await this.reloadAnnotationStoreFromVault();
        }
      })
    );
    this.addCommand({
      id: "toggle-sidebar",
      name: t("commands.toggleSidebar", this),
      callback: () => this.activateSidebar()
    });
    this.addCommand({
      id: "export-annotations",
      name: t("commands.exportAnnotations", this),
      callback: () => this.exportAnnotations()
    });
    this.addCommand({
      id: "search-annotations",
      name: t("commands.searchAnnotations", this),
      callback: () => this.openSearchModal()
    });
    this.addCommand({
      id: "clear-file-annotations",
      name: t("commands.clearFileAnnotations", this),
      callback: () => this.clearFileAnnotations()
    });
    this.addCommand({
      id: "mobile-highlight-default-color",
      name: t("commands.mobileHighlight", this),
      editorCallback: async (editor, view) => {
        await this.highlightSelection(editor, view, this.settings.defaultColor);
      }
    });
    this.addCommand({
      id: "mobile-add-note-to-selection",
      name: t("commands.mobileAddNote", this),
      editorCallback: async (editor, view) => {
        await this.addNoteToSelection(editor, view);
      }
    });
    this.addSettingTab(new AnnotatorSettingTab(this.app, this));
    this.app.workspace.onLayoutReady(() => {
      this.initSidebar();
      this.bindPdfContextMenus();
      refreshHighlights(this);
      this.schedulePdfRender();
      if (import_obsidian.Platform.isMobile) {
        this.setupMobileFab();
      }
    });
    this.register(() => this.clearPdfRenderTimers());
    new import_obsidian.Notice(t("notifications.pluginLoaded", this));
  }
  onunload() {
    this.cleanupMobileFab();
    this.clearPdfHighlightLayers();
    this.clearPdfRenderTimers();
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
  }
  async handleActiveFileChange(file) {
    await this.reloadAnnotationStoreFromVault();
    this.activeFile = file;
    if (this.sidebarView)
      this.sidebarView.update(file);
    if (getFileType(file) === "pdf") {
      this.schedulePdfRender(file.path, 120);
    } else {
      setTimeout(() => refreshHighlights(this), 50);
      this.clearPdfHighlightLayers();
    }
  }
  getActivePdfView() {
    const leaves = this.app.workspace.getLeavesOfType("pdf");
    const activeLeaf = this.app.workspace.activeLeaf;
    if (activeLeaf?.view?.file?.extension === "pdf")
      return activeLeaf.view;
    const matching = leaves.find((leaf) => leaf.view?.file?.path === this.activeFile?.path);
    return matching?.view || null;
  }
  getPdfContainer(view = this.getActivePdfView()) {
    const container = view?.containerEl || view?.contentEl || null;
    if (!(container instanceof HTMLElement))
      return null;
    return container.querySelector(".pdf-view-container, .pdf-container, .mod-pdf .view-content, .view-content") || container;
  }
  getPdfPageSelector(page) {
    return `.page[data-page-number="${page}"], [data-page-number="${page}"].page, [data-page-number="${page}"]`;
  }
  clearPdfRenderTimers() {
    for (const timer of this.pdfRenderTimers.values()) {
      clearTimeout(timer);
    }
    this.pdfRenderTimers.clear();
  }
  schedulePdfRender(filePath = this.activeFile?.path, delay = 80) {
    if (!filePath)
      return;
    const existing = this.pdfRenderTimers.get(filePath);
    if (existing)
      clearTimeout(existing);
    const timer = setTimeout(() => {
      this.pdfRenderTimers.delete(filePath);
      this.renderPdfHighlights(filePath);
    }, delay);
    this.pdfRenderTimers.set(filePath, timer);
  }
  bindPdfContextMenus() {
    if (this.pdfContextMenuHandler)
      return;
    this.pdfContextMenuHandler = (event) => {
      const target = event.target;
      const pageEl = getPdfPageElementFromNode(target);
      const view = this.getActivePdfView();
      const file = view?.file;
      if (!pageEl || !file || getFileType(file) !== "pdf")
        return;
      const selection = this.capturePdfSelection();
      if (!selection || selection.filePath !== file.path)
        return;
      event.preventDefault();
      event.stopPropagation();
      const menu = new import_obsidian.Menu();
      this.addPdfAnnotationMenuItems(menu, selection);
      menu.showAtMouseEvent(event);
    };
    this.registerDomEvent(document, "contextmenu", this.pdfContextMenuHandler, true);
    this.registerDomEvent(document, "selectionchange", () => {
      if (this.activeFile?.extension === "pdf")
        this.schedulePdfRender();
    });
  }
  capturePdfSelection() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed)
      return null;
    const text = selection.toString().trim();
    if (!text)
      return null;
    const range = selection.getRangeAt(0);
    const startPage = getPdfPageElementFromNode(range.startContainer);
    const endPage = getPdfPageElementFromNode(range.endContainer);
    if (!startPage || !endPage)
      return null;
    if (startPage !== endPage) {
      new import_obsidian.Notice(t("notifications.crossPageNotSupported", this));
      return null;
    }
    const page = getPdfPageNumber(startPage);
    const pageRect = getPdfPageRect(startPage);
    const filePath = this.activeFile?.path;
    if (!filePath || !page || !pageRect)
      return null;
    const rawRects = Array.from(range.getClientRects());
    const rects = rawRects.map((rect) => {
      const normalized = normalizeRect({
        x: (rect.left - pageRect.left) / pageRect.width,
        y: (rect.top - pageRect.top) / pageRect.height,
        width: rect.width / pageRect.width,
        height: rect.height / pageRect.height
      });
      return normalized;
    }).filter(Boolean);
    if (rects.length === 0)
      return null;
    return {
      filePath,
      page,
      highlightedText: text,
      rects,
      pageLabel: startPage.getAttribute("data-page-label") || String(page),
      viewportBase: {
        pageWidth: pageRect.width,
        pageHeight: pageRect.height
      }
    };
  }
  addPdfAnnotationMenuItems(menu, selection) {
    menu.addSeparator();
    this.settings.colors.forEach((color) => {
      menu.addItem((item) => {
        item.setIcon("pen-tool");
        item.setTitle(`${t("ui.highlight", this)} ${getColorName(color, this) || color}`);
        item.onClick(() => this.highlightPdfSelection(selection, color));
      });
    });
    menu.addSeparator();
    menu.addItem((item) => {
      item.setIcon("sticky-note");
      item.setTitle(t("ui.pdfAddNote", this));
      item.onClick(() => this.addNoteToPdfSelection(selection));
    });
  }
  createPdfAnnotation(selection, color, type = "highlight") {
    return normalizeAnnotation({
      id: generateId(),
      filePath: selection.filePath,
      fileType: "pdf",
      type,
      color,
      highlightedText: selection.highlightedText,
      noteContent: "",
      position: {
        kind: "pdf",
        page: selection.page,
        rects: selection.rects,
        quote: selection.highlightedText,
        pageLabel: selection.pageLabel,
        viewportBase: selection.viewportBase
      },
      created: Date.now(),
      updated: Date.now(),
      order: Date.now()
    });
  }
  async highlightPdfSelection(selection, color) {
    if (!selection)
      return;
    const existing = this.getAnnotationsForFile(selection.filePath).filter((ann) => ann.fileType === "pdf" && isPdfPosition(ann.position) && ann.position.page === selection.page);
    const overlap = existing.some((ann) => ann.position.rects.some((rect) => selection.rects.some((candidate) => !(rect.x + rect.width <= candidate.x || candidate.x + candidate.width <= rect.x || rect.y + rect.height <= candidate.y || candidate.y + candidate.height <= rect.y))));
    if (overlap) {
      new import_obsidian.Notice(t("notifications.annotationExists", this));
      return;
    }
    const annotation = this.createPdfAnnotation(selection, color, "highlight");
    if (!annotation)
      return;
    await this.addAnnotation(annotation);
    new import_obsidian.Notice(t("notifications.highlightAdded", this).replace("${color}", getColorName(color, this) || color));
  }
  async addNoteToPdfSelection(selection) {
    if (!selection)
      return;
    const annotation = this.createPdfAnnotation(selection, this.settings.defaultColor, "note");
    if (!annotation)
      return;
    await this.addAnnotation(annotation);
    const modal = new NoteModal(this.app, this, annotation, (content) => {
      this.updateAnnotation(annotation.id, { noteContent: content, type: "note" });
    });
    modal.open();
  }
  clearPdfHighlightLayers(filePath = null) {
    const root = this.app.workspace.containerEl;
    if (!(root instanceof HTMLElement))
      return;
    root.querySelectorAll(".aa-pdf-highlight-layer").forEach((layer) => {
      const owner = layer.getAttribute("data-file-path");
      if (!filePath || owner === filePath)
        layer.remove();
    });
  }
  renderPdfHighlights(filePath = this.activeFile?.path) {
    if (!filePath)
      return;
    const view = this.getActivePdfView();
    if (!view?.file || view.file.path !== filePath)
      return;
    const container = this.getPdfContainer(view);
    if (!(container instanceof HTMLElement))
      return;
    const pageElements = container.querySelectorAll('.page[data-page-number], [data-page-number].page, .pdf-page, [data-page-number]');
    if (!pageElements.length)
      return;
    const annotations = this.getAnnotationsForFile(filePath).filter((ann) => ann.fileType === "pdf" && isPdfPosition(ann.position));
    pageElements.forEach((pageEl) => {
      if (!(pageEl instanceof HTMLElement))
        return;
      const page = getPdfPageNumber(pageEl);
      const layer = ensurePdfLayer(pageEl);
      if (!page || !layer)
        return;
      layer.setAttribute("data-file-path", filePath);
      layer.empty();
      const pageRect = getPdfPageRect(pageEl);
      if (!pageRect)
        return;
      annotations.filter((ann) => ann.position.page === page).forEach((ann) => {
        ann.position.rects.forEach((rect) => {
          const el = layer.createDiv("aa-pdf-highlight");
          el.style.left = `${rect.x * 100}%`;
          el.style.top = `${rect.y * 100}%`;
          el.style.width = `${rect.width * 100}%`;
          el.style.height = `${rect.height * 100}%`;
          el.style.backgroundColor = `${ann.color}40`;
          el.style.borderColor = ann.color;
          el.setAttribute("data-annotation-id", ann.id);
          el.setAttribute("title", ann.noteContent || ann.highlightedText);
        });
      });
    });
  }
  async navigateToAnnotation(annotation) {
    const file = this.app.vault.getAbstractFileByPath(annotation.filePath);
    if (!(file instanceof import_obsidian.TFile)) {
      new import_obsidian.Notice(t("notifications.fileNotFound", this));
      return;
    }
    const leaf = this.app.workspace.getLeaf(false);
    if (!leaf)
      return;
    await leaf.openFile(file);
    if (annotation.fileType === "pdf") {
      setTimeout(() => this.jumpToPdfAnnotation(annotation), 220);
      return;
    }
    this.waitForViewAndNavigate(annotation);
  }
  waitForViewAndNavigate(annotation, retries = 10) {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (view?.editor && isMarkdownPosition(annotation.position)) {
      view.editor.setCursor({
        line: annotation.position.startLine,
        ch: annotation.position.startCh
      });
      view.editor.scrollIntoView(
        {
          from: { line: annotation.position.startLine, ch: annotation.position.startCh },
          to: { line: annotation.position.endLine, ch: annotation.position.endCh }
        },
        true
      );
      view.editor.focus();
    } else if (retries > 0) {
      setTimeout(() => this.waitForViewAndNavigate(annotation, retries - 1), 120);
    }
  }
  jumpToPdfAnnotation(annotation) {
    if (annotation.fileType !== "pdf" || !isPdfPosition(annotation.position))
      return;
    const view = this.getActivePdfView();
    const container = this.getPdfContainer(view);
    if (!(container instanceof HTMLElement))
      return;
    const pageEl = container.querySelector(this.getPdfPageSelector(annotation.position.page));
    if (!(pageEl instanceof HTMLElement)) {
      const fallback = container.querySelector(`[data-page-number], .page, .pdf-page`);
      if (fallback instanceof HTMLElement) {
        fallback.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      this.schedulePdfRender(annotation.filePath, 200);
      return;
    }
    pageEl.scrollIntoView({ behavior: "smooth", block: "center" });
    this.renderPdfHighlights(annotation.filePath);
    const marker = pageEl.querySelector(`.aa-pdf-highlight[data-annotation-id="${annotation.id}"]`);
    if (marker instanceof HTMLElement) {
      marker.classList.add("is-active");
      setTimeout(() => marker.classList.remove("is-active"), 1600);
    }
  }
  // ==================== 数据持久化 ====================
  getAnnotationStorePath() {
    return this.annotationStorePath;
  }
  getLegacyAnnotationStorePath() {
    return `${LEGACY_ANNOTATION_STORE_DIR}/${ANNOTATION_STORE_FILE}`;
  }
  async ensureAnnotationStoreDir() {
    const adapter = this.app.vault.adapter;
    try {
      if (!await adapter.exists(ANNOTATION_STORE_DIR)) {
        await adapter.mkdir(ANNOTATION_STORE_DIR);
      }
    } catch (error) {
      if (!await adapter.exists(ANNOTATION_STORE_DIR)) {
        throw error;
      }
    }
  }
  async readAnnotationStoreFile(filePath) {
    const adapter = this.app.vault.adapter;
    if (!await adapter.exists(filePath)) {
      return null;
    }
    try {
      const raw = await adapter.read(filePath);
      return JSON.parse(raw);
    } catch (error) {
      console.error(`Article Annotator: failed to read annotation store: ${filePath}`, error);
      new import_obsidian.Notice(t("notifications.syncedStoreReadFailed", this));
      return null;
    }
  }
  async readAvailableAnnotationStore() {
    const primary = await this.readAnnotationStoreFile(this.getAnnotationStorePath());
    if (primary) {
      return { data: primary, source: "primary" };
    }
    const legacy = await this.readAnnotationStoreFile(this.getLegacyAnnotationStorePath());
    if (legacy) {
      return { data: legacy, source: "legacy" };
    }
    return { data: null, source: null };
  }
  getAnnotationStoreCollections(data) {
    return {
      annotations: Array.isArray(data?.annotations) ? data.annotations.map(normalizeAnnotation).filter(Boolean) : [],
      groups: Array.isArray(data?.groups) ? data.groups : []
    };
  }
  hasAnnotationStoreContent(data) {
    const { annotations, groups } = this.getAnnotationStoreCollections(data);
    return annotations.length > 0 || groups.length > 0;
  }
  applyAnnotationStoreData(data) {
    const { annotations, groups } = this.getAnnotationStoreCollections(data);
    this.data = annotations;
    this.groups = groups;
  }
  async readAnnotationStore() {
    const { data } = await this.readAvailableAnnotationStore();
    return data;
  }
  async writeAnnotationStore(data) {
    const adapter = this.app.vault.adapter;
    await this.ensureAnnotationStoreDir();
    await adapter.write(this.getAnnotationStorePath(), JSON.stringify(data, null, 2));
  }
  async readLegacyPluginData() {
    const legacy = await this.loadData();
    return legacy && typeof legacy === "object" ? legacy : null;
  }
  async writeLegacyPluginData(data) {
    const local = await this.readLegacyPluginData() || {};
    await this.saveData({
      ...local,
      ...data
    });
  }
  async migrateLegacyPluginData(settingsFallback = null) {
    const legacy = await this.readLegacyPluginData();
    if (!legacy)
      return settingsFallback || null;
    const migratedAnnotations = Array.isArray(legacy.annotations) ? legacy.annotations : [];
    const migratedGroups = Array.isArray(legacy.groups) ? legacy.groups : [];
    if (migratedAnnotations.length > 0 || migratedGroups.length > 0) {
      await this.writeAnnotationStore({
        annotations: migratedAnnotations,
        groups: migratedGroups
      });
      new import_obsidian.Notice(t("notifications.annotationsMigrated", this));
    }
    const nextSettings = Object.assign({}, settingsFallback || DEFAULT_SETTINGS, legacy.settings || {});
    await this.writeLegacyPluginData({ settings: nextSettings });
    return nextSettings;
  }
  async loadSettingsAndData() {
    const local = await this.readLegacyPluginData();
    const hasLocalAnnotationData = this.hasAnnotationStoreContent(local);
    this.settings = Object.assign({}, DEFAULT_SETTINGS, local?.settings || {});
    const { data: synced, source } = await this.readAvailableAnnotationStore();
    if (!synced) {
      if (hasLocalAnnotationData) {
        const migratedSettings = await this.migrateLegacyPluginData(this.settings);
        if (migratedSettings) {
          this.settings = migratedSettings;
        }
        const migrated = await this.readAnnotationStoreFile(this.getAnnotationStorePath());
        if (migrated) {
          this.applyAnnotationStoreData(migrated);
          return;
        }
      }
      this.data = [];
      this.groups = [];
      return;
    }
    if (source === "legacy") {
      if (this.hasAnnotationStoreContent(synced)) {
        // Only create the new sync file immediately when we are migrating real annotation data.
        await this.writeAnnotationStore(synced);
      } else if (hasLocalAnnotationData) {
        const migratedSettings = await this.migrateLegacyPluginData(this.settings);
        if (migratedSettings) {
          this.settings = migratedSettings;
        }
        const migrated = await this.readAnnotationStoreFile(this.getAnnotationStorePath());
        if (migrated) {
          this.applyAnnotationStoreData(migrated);
          return;
        }
      }
    }
    this.applyAnnotationStoreData(synced);
  }
  async reloadAnnotationStoreFromVault() {
    if (this.isReloadingAnnotationStore)
      return;
    this.isReloadingAnnotationStore = true;
    try {
      const synced = await this.readAnnotationStore();
      this.applyAnnotationStoreData(synced);
      if (this.sidebarView) {
        this.sidebarView.update(this.activeFile);
      }
      refreshHighlights(this);
      this.schedulePdfRender();
    } finally {
      this.isReloadingAnnotationStore = false;
    }
  }
  async persistAll() {
    const persisted = {
      annotations: this.data,
      groups: this.groups
    };
    await this.writeAnnotationStore(persisted);
    await this.writeLegacyPluginData(persisted);
  }
  async saveAnnotations() {
    await this.persistAll();
  }
  async saveSettings() {
    await this.writeLegacyPluginData({ settings: this.settings });
  }
  getActiveFilePath() {
    return this.activeFile?.path || null;
  }
  // ==================== 标注 CRUD ====================
  getAnnotationsForFile(filePath) {
    return this.data.filter((a) => a.filePath === filePath);
  }
  async addAnnotation(annotation) {
    const normalized = normalizeAnnotation(annotation);
    if (!normalized)
      return;
    this.data.push(normalized);
    await this.saveAnnotations();
    if (this.sidebarView)
      this.sidebarView.update(this.activeFile);
    refreshHighlights(this);
    if (normalized.fileType === "pdf")
      this.schedulePdfRender(normalized.filePath, 60);
  }
  async removeAnnotation(id) {
    const target = this.data.find((a) => a.id === id) || null;
    this.data = this.data.filter((a) => a.id !== id);
    await this.saveAnnotations();
    if (this.sidebarView)
      this.sidebarView.update(this.activeFile);
    refreshHighlights(this);
    if (target?.fileType === "pdf")
      this.schedulePdfRender(target.filePath, 60);
  }
  async updateAnnotation(id, updates) {
    const idx = this.data.findIndex((a) => a.id === id);
    if (idx === -1)
      return;
    const next = normalizeAnnotation({ ...this.data[idx], ...updates, updated: Date.now() });
    if (!next)
      return;
    this.data[idx] = next;
    await this.saveAnnotations();
    if (this.sidebarView)
      this.sidebarView.update(this.activeFile);
    refreshHighlights(this);
    if (next.fileType === "pdf")
      this.schedulePdfRender(next.filePath, 60);
  }
  async clearFileAnnotations() {
    if (!this.activeFile) {
      new import_obsidian.Notice(t("notifications.openFileFirst", this));
      return;
    }
    const count = this.getAnnotationsForFile(this.activeFile.path).length;
    if (count === 0) {
      new import_obsidian.Notice(t("notifications.noAnnotations", this));
      return;
    }
    const msg = t("notifications.clearFileConfirm", this).replace("${n}", String(count));
    if (!confirm(msg))
      return;
    const activePath = this.activeFile.path;
    const activeType = getFileType(this.activeFile);
    this.data = this.data.filter((a) => a.filePath !== activePath);
    await this.saveAnnotations();
    if (this.sidebarView)
      this.sidebarView.update(this.activeFile);
    refreshHighlights(this);
    if (activeType === "pdf") {
      this.clearPdfHighlightLayers(activePath);
      this.schedulePdfRender(activePath, 60);
    }
    new import_obsidian.Notice(t("notifications.fileCleared", this).replace("${n}", String(count)));
  }
  // ==================== 分组管理 ====================
  getGroupsForFile(filePath) {
    return this.groups.filter((g) => g.filePath === filePath);
  }
  async addGroup(name, filePath) {
    const group = {
      id: generateId(),
      name,
      filePath,
      collapsed: false,
      order: Date.now(),
      created: Date.now()
    };
    this.groups.push(group);
    await this.persistAll();
    return group;
  }
  async removeGroup(groupId) {
    // 将分组中的批注移出分组
    this.data = this.data.map((a) => {
      if (a.groupId === groupId) {
        return { ...a, groupId: null };
      }
      return a;
    });
    this.groups = this.groups.filter((g) => g.id !== groupId);
    await this.persistAll();
  }
  async renameGroup(groupId, newName) {
    const group = this.groups.find((g) => g.id === groupId);
    if (!group) return;
    group.name = newName;
    await this.persistAll();
  }
  async updateGroup(groupId, updates) {
    const group = this.groups.find((g) => g.id === groupId);
    if (!group) return;
    Object.assign(group, updates);
    await this.persistAll();
  }
  async addAnnotationToGroup(annotationId, groupId) {
    const annotation = this.data.find((a) => a.id === annotationId);
    if (!annotation) return;
    annotation.groupId = groupId;
    annotation.updated = Date.now();
    await this.persistAll();
  }
  async removeAnnotationFromGroup(annotationId) {
    const annotation = this.data.find((a) => a.id === annotationId);
    if (!annotation) return;
    annotation.groupId = null;
    annotation.updated = Date.now();
    await this.persistAll();
  }
  getAnnotationsForGroup(groupId) {
    return this.data.filter((a) => a.groupId === groupId);
  }
  setupMobileFab() {
    this.cleanupMobileFab();
    const container = document.body;
    if (!container)
      return;
    const fab = container.createEl("button", {
      cls: "aa-mobile-fab",
      text: "\u270D\uFE0F"
    });
    fab.setAttribute("aria-label", t("ui.fabAriaLabel", this));
    const panel = container.createDiv("aa-mobile-fab-panel");
    panel.addClass("is-hidden");
    const addBtn = panel.createEl("button", { text: t("ui.mobileHighlight", this) });
    addBtn.onclick = async () => {
      const md = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      const editor = this.app.workspace.activeEditor?.editor;
      if (!md?.file || !editor) {
        new import_obsidian.Notice(t("notifications.openEditableNote", this));
        return;
      }
      await this.highlightSelection(editor, md, this.settings.defaultColor);
    };
    const noteBtn = panel.createEl("button", { text: t("ui.mobileAddNote", this) });
    noteBtn.onclick = async () => {
      const md = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      const editor = this.app.workspace.activeEditor?.editor;
      if (!md?.file || !editor) {
        new import_obsidian.Notice(t("notifications.openEditableNote", this));
        return;
      }
      await this.addNoteToSelection(editor, md);
    };
    const sidebarBtn = panel.createEl("button", { text: t("ui.mobileSidebar", this) });
    sidebarBtn.onclick = () => this.activateSidebar();
    fab.onclick = (e) => {
      e.preventDefault();
      panel.toggleClass("is-hidden");
    };
    const dismiss = (e) => {
      if (!panel.contains(e.target) && e.target !== fab) {
        panel.addClass("is-hidden");
      }
    };
    document.addEventListener("click", dismiss, true);
    this.register(() => document.removeEventListener("click", dismiss, true));
    this.mobileFabEl = fab;
    this.mobileFabPanelEl = panel;
  }
  cleanupMobileFab() {
    if (this.mobileFabPanelEl) {
      this.mobileFabPanelEl.remove();
      this.mobileFabPanelEl = null;
    }
    if (this.mobileFabEl) {
      this.mobileFabEl.remove();
      this.mobileFabEl = null;
    }
  }
  // ==================== 侧边栏管理 ====================
  async initSidebar() {
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    if (leaves.length === 0) {
      const leaf = this.app.workspace.getRightLeaf(false) || this.app.workspace.getLeaf("split", "vertical");
      if (leaf) {
        await leaf.setViewState({ type: VIEW_TYPE, active: true });
        this.app.workspace.revealLeaf(leaf);
      }
    }
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (activeView?.file) {
      this.activeFile = activeView.file;
      if (this.sidebarView)
        this.sidebarView.update(activeView.file);
    }
  }
  async activateSidebar() {
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      leaf = workspace.getRightLeaf(false);
      if (!leaf) {
        leaf = workspace.getLeaf("split", "vertical");
      }
      if (leaf) {
        await leaf.setViewState({ type: VIEW_TYPE, active: true });
      }
    }
    if (leaf) {
      workspace.revealLeaf(leaf);
    }
  }
  // ==================== 右键菜单 ====================
  addAnnotationMenuItems(menu, editor, view) {
    menu.addSeparator();
    this.settings.colors.forEach((color) => {
      menu.addItem((item) => {
        item.setIcon("pen-tool");
        item.setTitle(`${t("ui.highlight", this)} ${getColorName(color, this) || color}`);
        item.onClick(() => this.highlightSelection(editor, view, color));
      });
    });
    // 自定义颜色（如果已设置）
    if (this.settings.customHighlightColor && validateHexColor(this.settings.customHighlightColor)) {
      const colorName = this.settings.customHighlightColorName || t("ui.customColor", this);
      menu.addItem((item) => {
        item.setIcon("pen-tool");
        item.setTitle(`${t("ui.highlight", this)} ${colorName} (${this.settings.customHighlightColor})`);
        item.onClick(() => this.highlightSelection(editor, view, this.settings.customHighlightColor));
      });
    }
    menu.addSeparator();
    menu.addItem((item) => {
      item.setIcon("sticky-note");
      item.setTitle(t("ui.pdfAddNote", this));
      item.onClick(() => this.addNoteToSelection(editor, view));
    });
  }
  // ==================== 高亮操作 ====================
  async highlightSelection(editor, view, color) {
    const selection = editor.getSelection();
    if (!selection || !view.file)
      return;
    const from = editor.getCursor("from");
    const to = editor.getCursor("to");
    const existing = this.getAnnotationsForFile(view.file.path);
    const overlap = existing.some(
      (a) => positionsOverlap(a.position, {
        startLine: from.line,
        startCh: from.ch,
        endLine: to.line,
        endCh: to.ch
      })
    );
    if (overlap) {
      new import_obsidian.Notice(t("notifications.annotationExists", this));
      return;
    }
    const annotation = {
      id: generateId(),
      filePath: view.file.path,
      type: "highlight",
      color,
      highlightedText: selection,
      noteContent: "",
      position: {
        startLine: from.line,
        startCh: from.ch,
        endLine: to.line,
        endCh: to.ch
      },
      created: Date.now(),
      updated: Date.now(),
      order: Date.now()
    };
    await this.addAnnotation(annotation);
    new import_obsidian.Notice(t("notifications.highlightAdded", this).replace("${color}", getColorName(color, this)));
  }
  // ==================== 批注操作 ====================
  async addNoteToSelection(editor, view) {
    const selection = editor.getSelection();
    if (!selection || !view.file)
      return;
    const from = editor.getCursor("from");
    const to = editor.getCursor("to");
    const overlap = this.getAnnotationsForFile(view.file.path).some(
      (a) => positionsOverlap(a.position, {
        startLine: from.line,
        startCh: from.ch,
        endLine: to.line,
        endCh: to.ch
      })
    );
    if (overlap) {
      new import_obsidian.Notice(t("notifications.annotationExists", this));
      return;
    }
    const annotation = {
      id: generateId(),
      filePath: view.file.path,
      type: "note",
      color: this.settings.defaultColor,
      highlightedText: selection,
      noteContent: "",
      position: {
        startLine: from.line,
        startCh: from.ch,
        endLine: to.line,
        endCh: to.ch
      },
      created: Date.now(),
      updated: Date.now(),
      order: Date.now()
    };
    await this.addAnnotation(annotation);
    const modal = new NoteModal(this.app, this, annotation, (content) => {
      this.updateAnnotation(annotation.id, { noteContent: content, type: "note" });
    });
    modal.open();
  }
  // ==================== 导出 ====================
  async exportAnnotations() {
    const file = this.activeFile;
    if (!file) {
      new import_obsidian.Notice(t("notifications.openFileFirst", this));
      return;
    }
    const annotations = this.getAnnotationsForFile(file.path);
    if (annotations.length === 0) {
      new import_obsidian.Notice(t("notifications.noAnnotations", this));
      return;
    }
    const sorted = [...annotations].sort((a, b) => {
      if (a.fileType === "pdf" && b.fileType === "pdf") {
        if (a.position.page !== b.position.page)
          return a.position.page - b.position.page;
        return a.created - b.created;
      }
      if (a.fileType === "pdf")
        return -1;
      if (b.fileType === "pdf")
        return 1;
      if (a.position.startLine !== b.position.startLine)
        return a.position.startLine - b.position.startLine;
      return a.position.startCh - b.position.startCh;
    });
    let content = t("export.title", this).replace("${name}", file.basename);
    content += `> ${t("export.exportTime", this)}${(/* @__PURE__ */ new Date()).toLocaleString()}
`;
    content += `> ${t("export.totalCount", this)}${sorted.length}${t("export.items", this)}

`;
    content += `---

`;
    sorted.forEach((a, i) => {
      const colorName = getColorName(a.color, this) || t("ui.highlights", this);
      const hasNote = a.noteContent ? "\u{1F4DD}" : "\u{1F506}";
      content += `## ${i + 1}. ${hasNote} ${colorName}

`;
      content += `> \u201C${a.highlightedText}\u201D

`;
      if (a.noteContent) {
        content += `${t("export.note", this)}${a.noteContent}

`;
      }
      content += `${t("export.location", this)}${getAnnotationLocationLabel(a, this)}*
`;
      content += `${t("export.fileType", this)}${a.fileType === "pdf" ? t("export.pdf", this) : t("export.markdown", this)}*
`;
      content += `${t("export.time", this)}${formatTime(a.created, this)}*

`;
      content += `---

`;
    });
    const exportPath = `${file.parent?.path || ""}/${file.basename}${t("export.fileSuffix", this)}`;
    let exportFile;
    try {
      const existing = this.app.vault.getAbstractFileByPath(exportPath);
      if (existing instanceof import_obsidian.TFile) {
        await this.app.vault.modify(existing, content);
        exportFile = existing;
      } else {
        exportFile = await this.app.vault.create(exportPath, content);
      }
    } catch {
      exportFile = await this.app.vault.create(exportPath, content);
    }
    new import_obsidian.Notice(`${t("notifications.exportDone", this)}${exportFile.path}`);
    const leaf = this.app.workspace.getLeaf(false);
    if (leaf) {
      await leaf.openFile(exportFile);
    }
  }
  // ==================== 搜索 ====================
  openSearchModal() {
    const modal = new SearchModal(this.app, this);
    modal.open();
  }
};
var NoteModal = class extends import_obsidian.Modal {
  constructor(app, plugin, annotation, onSave) {
    super(app);
    this.plugin = plugin;
    this.annotation = annotation;
    this.onSave = onSave;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("aa-note-modal");
    contentEl.createEl("h3", { text: t("ui.editNoteTitle", this.plugin) });
    const quoteBlock = contentEl.createDiv("aa-note-modal-quote");
    quoteBlock.createEl("p", { text: this.annotation.highlightedText });
    quoteBlock.style.setProperty("--aa-quote-accent", this.annotation.color);
    const colorRow = contentEl.createDiv("aa-note-modal-colors");
    colorRow.createEl("span", { text: t("ui.color", this.plugin) });
    this.plugin.settings.colors.forEach((color) => {
      const swatch = colorRow.createEl("span", { cls: "aa-color-swatch" });
      swatch.style.background = color;
      if (color === this.annotation.color) {
        swatch.addClass("is-selected");
      }
      swatch.onclick = () => {
        this.plugin.updateAnnotation(this.annotation.id, { color });
        this.annotation.color = color;
        quoteBlock.style.setProperty("--aa-quote-accent", color);
        contentEl.querySelectorAll(".aa-color-swatch").forEach((el) => {
          el.classList.remove("is-selected");
        });
        swatch.addClass("is-selected");
      };
    });
    const textarea = contentEl.createEl("textarea", {
      attr: { placeholder: t("ui.placeholder", this.plugin), rows: "8" }
    });
    if (this.annotation.noteContent) {
      textarea.value = this.annotation.noteContent;
    }
    const btnRow = contentEl.createDiv("aa-modal-buttons");
    const saveBtn = btnRow.createEl("button", { text: t("ui.save", this.plugin) });
    saveBtn.addClass("aa-button");
    saveBtn.addClass("aa-button-primary");
    const cancelBtn = btnRow.createEl("button", { text: t("ui.cancel", this.plugin) });
    cancelBtn.addClass("aa-button");
    cancelBtn.addClass("aa-button-secondary");
    saveBtn.onclick = () => {
      this.onSave(textarea.value);
      this.close();
      new import_obsidian.Notice(t("notifications.annotationSaved", this.plugin));
    };
    cancelBtn.onclick = () => this.close();
    textarea.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "Enter") {
        saveBtn.click();
      }
    });
    setTimeout(() => textarea.focus(), 100);
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SearchModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("aa-search-modal");
    contentEl.createEl("h3", { text: t("ui.searchAll", this.plugin) });
    const input = contentEl.createEl("input", {
      attr: { type: "text", placeholder: t("ui.searchPlaceholder", this.plugin), autofocus: "true" }
    });
    this.resultsEl = contentEl.createDiv("aa-search-results");
    const doSearch = (query) => this.renderResults(query);
    input.oninput = () => doSearch(input.value);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape")
        this.close();
      if (e.key === "Enter")
        doSearch(input.value);
    });
    setTimeout(() => input.focus(), 100);
    this.renderResults("");
  }
  renderResults(query) {
    this.resultsEl.empty();
    let results = this.plugin.data;
    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        (a) => a.highlightedText.toLowerCase().includes(q) || a.noteContent.toLowerCase().includes(q) || a.filePath.toLowerCase().includes(q)
      );
    }
    results = [...results].sort((a, b) => b.created - a.created);
    if (results.length === 0) {
      this.resultsEl.createEl("p", {
        text: query.trim() ? t("ui.noResults", this.plugin) : t("ui.noData", this.plugin),
        cls: "aa-no-results"
      });
      return;
    }
    const stats = this.resultsEl.createDiv("aa-search-stats");
    stats.setText(t("ui.searchResults", this.plugin).replace("${n}", results.length));
    const list = this.resultsEl.createDiv("aa-search-list");
    results.slice(0, 80).forEach((a) => {
      const card = list.createDiv("aa-search-card");
      const colorBar = card.createDiv("aa-card-color");
      colorBar.style.background = a.color;
      const body = card.createDiv("aa-card-body");
      const textEl = body.createDiv("aa-search-card-text");
      textEl.setText(a.highlightedText);
      if (a.noteContent) {
        const noteEl = body.createDiv("aa-search-card-note");
        noteEl.setText(`\u{1F4AC} ${a.noteContent}`);
      }
      const meta = body.createDiv("aa-card-meta");
      const fileName = a.filePath.split(/[\\/]/).pop() || a.filePath;
      meta.setText(`${fileName} \xB7 ${getAnnotationLocationLabel(a, this.plugin)} \xB7 ${formatTime(a.created, this.plugin)}`);
      const colorLabel = body.createDiv("aa-card-color-label");
      colorLabel.style.color = a.color;
      colorLabel.setText(getColorName(a.color, this.plugin) || t("ui.highlights", this.plugin));
      card.onclick = () => {
        this.close();
        this.plugin.navigateToAnnotation(a);
      };
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var AnnotatorSidebarView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.currentFile = null;
    this.plugin = plugin;
    this.icon = "pen-tool";
    this.selectedAnnotations = new Set();
    this.isMultiSelectMode = false;
    this.editingId = null;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return t("pluginName", this.plugin);
  }
  async onOpen() {
    const container = this.containerEl;
    container.addClass("aa-sidebar");
    this.render();
  }
  update(file) {
    this.currentFile = file;
    this.render();
  }
  render() {
    const container = this.containerEl;
    container.empty();
    const header = container.createDiv("aa-sidebar-header");
    const titleEl = header.createEl("h3", { text: t("ui.sidebarTitle", this.plugin) });
    const closeBtn = header.createEl("button", { text: "\xD7" });
    closeBtn.onclick = () => {
      this.plugin.app.workspace.detachLeavesOfType(VIEW_TYPE);
    };
    if (!this.currentFile) {
      const emptyEl = container.createDiv("aa-sidebar-empty");
      emptyEl.createEl("p", { text: t("notifications.openFileFirst", this.plugin) });
      return;
    }
    const annotations = this.plugin.getAnnotationsForFile(this.currentFile.path);
    const stats = container.createDiv("aa-sidebar-stats");
    const highlightCount = annotations.filter((a) => a.type === "highlight").length;
    const noteCount = annotations.filter((a) => a.noteContent).length;
    const totalCount = annotations.length;
    const createStat = (label, value) => {
      const el = stats.createDiv("aa-stat");
      el.createEl("div", {
        text: String(value),
        cls: "aa-stat-value"
      });
      el.createEl("div", {
        text: label,
        cls: "aa-stat-label"
      });
    };
    createStat(t("ui.all", this.plugin), totalCount);
    createStat(t("ui.highlights", this.plugin), highlightCount);
    createStat(t("ui.notes", this.plugin), noteCount);
    const actions = container.createDiv("aa-sidebar-actions");
    const searchBtn = actions.createEl("button", { text: t("ui.search", this.plugin) });
    searchBtn.onclick = () => this.plugin.openSearchModal();
    const exportBtn = actions.createEl("button", { text: t("ui.export", this.plugin) });
    exportBtn.onclick = () => this.plugin.exportAnnotations();
    const clearBtn = actions.createEl("button", { text: t("ui.clear", this.plugin) });
    clearBtn.onclick = async () => {
      const count = annotations.length;
      if (count === 0)
        return;
      if (!confirm(t("notifications.clearFileConfirm", this.plugin).replace("${n}", String(count))))
        return;
      await this.plugin.clearFileAnnotations();
      this.render();
    };
    // 多选按钮
    const multiSelectBtn = actions.createEl("button", { text: t("ui.selectMultiple", this.plugin) });
    if (this.isMultiSelectMode) {
      multiSelectBtn.addClass("is-active");
    }
    multiSelectBtn.onclick = () => {
      this.isMultiSelectMode = !this.isMultiSelectMode;
      if (!this.isMultiSelectMode) {
        this.selectedAnnotations.clear();
      }
      this.render();
    };
    // 分组按钮（仅在多选模式下显示）
    if (this.isMultiSelectMode && this.selectedAnnotations.size > 0) {
      const groupBtn = actions.createEl("button", { text: t("ui.groupSelected", this.plugin) });
      groupBtn.onclick = () => this.showCreateGroupDialog();
    }
    // 取消选择按钮（仅在多选模式下显示）
    if (this.isMultiSelectMode) {
      const cancelBtn = actions.createEl("button", { text: t("ui.cancelSelection", this.plugin) });
      cancelBtn.onclick = () => {
        this.isMultiSelectMode = false;
        this.selectedAnnotations.clear();
        this.render();
      };
    }
    const list = container.createDiv("aa-sidebar-list");
    if (annotations.length === 0) {
      const emptyEl = list.createDiv("aa-sidebar-empty");
      emptyEl.style.cssText = "padding:24px;text-align:center;color:var(--text-muted);";
      emptyEl.createEl("p", {
        text: t("ui.emptyHint", this.plugin)
      });
      return;
    }
    const sorted = [...annotations].sort((a, b) => {
      const ao = typeof a.order === "number" ? a.order : a.created;
      const bo = typeof b.order === "number" ? b.order : b.created;
      return bo - ao;
    });
    
    // 获取当前文件的分组
    const groups = this.plugin.getGroupsForFile(this.currentFile.path);
    
    // 按分组组织批注
    const groupedAnnotations = new Map();
    const ungroupedAnnotations = [];
    
    // 初始化分组Map
    groups.forEach(group => {
      groupedAnnotations.set(group.id, []);
    });
    
    // 将批注分到对应分组
    sorted.forEach(annotation => {
      if (annotation.groupId && groupedAnnotations.has(annotation.groupId)) {
        groupedAnnotations.get(annotation.groupId).push(annotation);
      } else {
        ungroupedAnnotations.push(annotation);
      }
    });
    
    // 渲染分组
    groups.forEach(group => {
      const groupAnnotations = groupedAnnotations.get(group.id);
      if (groupAnnotations.length === 0) return;
      
      const groupContainer = list.createDiv("aa-group-container");
      groupContainer.style.cssText = "margin:8px 0;border:1px solid var(--background-modifier-border);border-radius:8px;overflow:hidden;";
      
      // 分组头部
      const groupHeader = groupContainer.createDiv("aa-group-header");
      groupHeader.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--background-secondary);cursor:pointer;";
      
      const groupTitle = groupHeader.createDiv("aa-group-title");
      groupTitle.style.cssText = "display:flex;align-items:center;gap:6px;";
      
      const collapseIcon = groupTitle.createEl("span", { 
        text: group.collapsed ? "▶" : "▼",
        cls: "aa-collapse-icon"
      });
      collapseIcon.style.cssText = "font-size:10px;transition:transform 0.2s;";
      
      const groupNameEl = groupTitle.createEl("span", { text: group.name });
      groupNameEl.style.cssText = "font-weight:600;font-size:13px;";
      
      const groupCount = groupHeader.createEl("span", { 
        text: t("ui.groupCount", this.plugin).replace("${n}", String(groupAnnotations.length))
      });
      groupCount.style.cssText = "font-size:11px;color:var(--text-muted);";
      
      // 分组操作按钮
      const groupActions = groupHeader.createDiv("aa-group-actions");
      groupActions.style.cssText = "display:flex;gap:4px;";
      
      const renameBtn = groupActions.createEl("button", { text: "✏️" });
      renameBtn.style.cssText = "background:none;border:none;cursor:pointer;font-size:12px;padding:2px;";
      renameBtn.title = t("ui.renameGroup", this.plugin);
      renameBtn.onclick = (e) => {
        e.stopPropagation();
        this.showRenameGroupDialog(group);
      };
      
      const ungroupBtn = groupActions.createEl("button", { text: "📤" });
      ungroupBtn.style.cssText = "background:none;border:none;cursor:pointer;font-size:12px;padding:2px;";
      ungroupBtn.title = t("ui.ungroup", this.plugin);
      ungroupBtn.onclick = async (e) => {
        e.stopPropagation();
        if (!confirm(`确定将 "${group.name}" 中的 ${groupAnnotations.length} 个批注取消分组？`)) return;
        for (const annotation of groupAnnotations) {
          await this.plugin.removeAnnotationFromGroup(annotation.id);
        }
        await this.plugin.removeGroup(group.id);
        this.render();
      };
      
      // 点击折叠/展开
      groupHeader.onclick = () => {
        group.collapsed = !group.collapsed;
        this.plugin.updateGroup(group.id, { collapsed: group.collapsed });
        this.render();
      };
      
      // 分组内容（可折叠）
      if (!group.collapsed) {
        const groupContent = groupContainer.createDiv("aa-group-content");
        groupContent.style.cssText = "padding:4px;background:var(--background-primary);";
        
        groupAnnotations.forEach(annotation => {
          this.renderAnnotationCard(groupContent, annotation);
        });
      }
      
      // 分组容器作为拖拽放置目标
      groupContainer.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        groupContainer.addClass("aa-group-drop-target");
        groupContainer.style.borderColor = "var(--interactive-accent)";
        groupContainer.style.backgroundColor = "color-mix(in srgb, var(--interactive-accent) 8%, transparent)";
      });
      
      groupContainer.addEventListener("dragleave", (ev) => {
        // 只有当真正离开容器时才移除样式
        if (!groupContainer.contains(ev.relatedTarget)) {
          groupContainer.removeClass("aa-group-drop-target");
          groupContainer.style.borderColor = "";
          groupContainer.style.backgroundColor = "";
        }
      });
      
      groupContainer.addEventListener("drop", async (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        groupContainer.removeClass("aa-group-drop-target");
        groupContainer.style.borderColor = "";
        groupContainer.style.backgroundColor = "";
        
        const annotationId = ev.dataTransfer?.getData("text/plain");
        if (!annotationId) return;
        
        // 将批注添加到该分组
        await this.plugin.addAnnotationToGroup(annotationId, group.id);
        this.render();
      });
    });
    
    // 渲染未分组的批注
    if (ungroupedAnnotations.length > 0) {
      if (groups.length > 0) {
        const separator = list.createDiv("aa-ungrouped-separator");
        separator.style.cssText = "padding:8px 12px;font-size:11px;color:var(--text-muted);border-top:1px solid var(--background-modifier-border);";
        separator.setText("未分组批注");
      }
      
      ungroupedAnnotations.forEach(annotation => {
        this.renderAnnotationCard(list, annotation);
      });
    }
  }
  renderAnnotationCard(container, annotation) {
    const a = annotation;
    const isEditing = this.editingId === a.id;
    const card = container.createDiv("aa-card");
    if (isEditing) card.addClass("is-editing");

    // 顶部色条
    const stripe = card.createDiv("aa-card-color-stripe");
    stripe.style.background = a.color;

    // 装订孔
    const holes = card.createDiv("aa-card-holes");
    for (let i = 0; i < 3; i++) holes.createDiv("aa-card-hole");

    // 多选复选框
    if (this.isMultiSelectMode && !isEditing) {
      const checkboxContainer = card.createDiv("aa-card-checkbox");
      checkboxContainer.style.cssText = "position:absolute;top:6px;left:24px;z-index:4;";
      const checkbox = checkboxContainer.createEl("input", { type: "checkbox" });
      checkbox.checked = this.selectedAnnotations.has(a.id);
      checkbox.style.cssText = "cursor:pointer;";
      checkbox.onchange = () => {
        if (checkbox.checked) {
          this.selectedAnnotations.add(a.id);
        } else {
          this.selectedAnnotations.delete(a.id);
        }
        this.render();
      };
    }

    // 内容区
    const body = card.createDiv("aa-card-body");
    const colorName = getColorName(a.color, this.plugin) || t("ui.highlights", this.plugin);

    if (isEditing) {
      // ===== 编辑模式 =====
      const headerRow = body.createDiv("aa-card-header");
      const typeBadge = headerRow.createEl("span");
      typeBadge.setText(colorName);
      typeBadge.addClass("aa-card-color-label");
      typeBadge.style.color = a.color;

      const textEl = body.createDiv("aa-card-text");
      textEl.setText(a.highlightedText);

      const textarea = body.createEl("textarea", { cls: "aa-card-edit-textarea" });
      textarea.value = a.noteContent || "";
      textarea.placeholder = this.plugin.settings.language === "zh" ? "写下批注…" : "Write a note…";
      textarea.rows = 3;

      const lineInfo = body.createDiv("aa-card-line");
      lineInfo.setText(getAnnotationLocationLabel(a, this.plugin));

      const editActions = body.createDiv("aa-card-actions");
      editActions.style.opacity = "1";
      const eBtnStyle = "flex:1;padding:3px 6px;font-size:10px;border:none;background:transparent;cursor:pointer;border-radius:3px;";
      const saveBtn = editActions.createEl("button", { text: this.plugin.settings.language === "zh" ? "保存" : "Save" });
      saveBtn.style.cssText = eBtnStyle + "color:var(--interactive-accent);font-weight:600;";
      saveBtn.onclick = async (e) => {
        e.stopPropagation();
        await this.plugin.updateAnnotation(a.id, { noteContent: textarea.value.trim() });
        this.editingId = null;
        this.render();
      };
      const cancelBtn = editActions.createEl("button", { text: this.plugin.settings.language === "zh" ? "取消" : "Cancel" });
      cancelBtn.style.cssText = eBtnStyle;
      cancelBtn.onclick = (e) => {
        e.stopPropagation();
        this.editingId = null;
        this.render();
      };

      requestAnimationFrame(() => {
        textarea.focus();
        textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      });

      textarea.addEventListener("keydown", (e) => {
        if (e.key === "Escape") { e.preventDefault(); this.editingId = null; this.render(); }
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); saveBtn.click(); }
      });

      textarea.addEventListener("blur", () => {
        setTimeout(() => {
          if (this.editingId === a.id && document.activeElement !== textarea) {
            this.plugin.updateAnnotation(a.id, { noteContent: textarea.value.trim() });
            this.editingId = null;
            this.render();
          }
        }, 150);
      });

    } else {
      // ===== 展示模式 =====
      const headerRow = body.createDiv("aa-card-header");
      const typeBadge = headerRow.createEl("span");
      typeBadge.setText(colorName);
      typeBadge.addClass("aa-card-color-label");
      typeBadge.style.color = a.color;
      headerRow.createEl("span", { text: formatTime(a.created, this.plugin) }).addClass("aa-card-time");

      const textEl = body.createDiv("aa-card-text");
      textEl.setText(a.highlightedText);

      if (a.noteContent) {
        const noteEl = body.createDiv("aa-card-note");
        noteEl.setText(a.noteContent);
      }

      const lineInfo = body.createDiv("aa-card-line");
      lineInfo.setText(getAnnotationLocationLabel(a, this.plugin));

      const cardActions = body.createDiv("aa-card-actions");
      const actionBtnStyle = "flex:1;padding:3px 6px;font-size:10px;border:none;background:transparent;cursor:pointer;border-radius:3px;";
      const navBtn = cardActions.createEl("button", { text: t("ui.navigate", this.plugin) });
      navBtn.style.cssText = actionBtnStyle;
      navBtn.onclick = async (e) => {
        e.stopPropagation();
        await this.plugin.navigateToAnnotation(a);
      };
      const deleteBtn = cardActions.createEl("button", { text: this.plugin.settings.language === "zh" ? "删除" : "Delete" });
      deleteBtn.addClass("is-danger");
      deleteBtn.style.cssText = actionBtnStyle;
      deleteBtn.onclick = async (e) => {
        e.stopPropagation();
        if (!confirm(t("ui.deleteConfirm", this.plugin))) return;
        await this.plugin.removeAnnotation(a.id);
        this.render();
      };

      // 点击卡片正文进入编辑
      body.addEventListener("click", (e) => {
        if (e.target.closest(".aa-card-actions")) return;
        this.editingId = a.id;
        this.render();
      });
      body.style.cursor = "pointer";
    }

    // 拖拽排序（仅当前文件内）
    card.draggable = true;
    card.dataset.annotationId = a.id;
    card.addClass("aa-draggable-card");

    card.addEventListener("dragstart", (ev) => {
      card.addClass("aa-card-dragging");
      if (ev.dataTransfer) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text/plain", a.id);
      }
    });

    card.addEventListener("dragend", () => {
      card.removeClass("aa-card-dragging");
      container.querySelectorAll(".aa-card-drop-target").forEach((el) => el.classList.remove("aa-card-drop-target"));
    });

    card.addEventListener("dragover", (ev) => {
      ev.preventDefault();
      card.addClass("aa-card-drop-target");
    });

    card.addEventListener("dragleave", () => {
      card.removeClass("aa-card-drop-target");
    });

    card.addEventListener("drop", async (ev) => {
      ev.preventDefault();
      card.removeClass("aa-card-drop-target");
      const fromId = ev.dataTransfer?.getData("text/plain");
      const toId = a.id;
      if (!fromId || fromId === toId)
        return;

      const current = [...this.plugin.getAnnotationsForFile(this.currentFile.path)].sort((x, y) => {
        const xo = typeof x.order === "number" ? x.order : x.created;
        const yo = typeof y.order === "number" ? y.order : y.created;
        return yo - xo;
      });

      const fromIdx = current.findIndex((x) => x.id === fromId);
      const toIdx = current.findIndex((x) => x.id === toId);
      if (fromIdx < 0 || toIdx < 0)
        return;

      const [moved] = current.splice(fromIdx, 1);
      current.splice(toIdx, 0, moved);

      const base = Date.now();
      const reordered = current.map((ann, i) => normalizeAnnotation({
        ...ann,
        order: base - i,
        updated: Date.now()
      }));
      this.plugin.data = this.plugin.data.map((ann) => {
        if (ann.filePath !== this.currentFile.path)
          return ann;
        const next = reordered.find((c) => c.id === ann.id);
        return next ? next : ann;
      });
      await this.plugin.saveAnnotations();
      this.render();
    });
  }
  showCreateGroupDialog() {
    const selectedIds = Array.from(this.selectedAnnotations);
    if (selectedIds.length === 0) return;
    
    // 创建对话框
    const modal = new import_obsidian.Modal(this.plugin.app);
    modal.titleEl.setText(t("ui.createGroup", this.plugin));
    
    const content = modal.contentEl;
    content.createEl("p", { 
      text: `将 ${selectedIds.length} 个批注分组到：` 
    });
    
    const input = content.createEl("input", {
      type: "text",
      placeholder: t("ui.groupName", this.plugin)
    });
    input.style.cssText = "width:100%;padding:8px;margin:8px 0;border-radius:4px;border:1px solid var(--background-modifier-border);";
    input.addClass("aa-input");
    
    const buttonContainer = content.createDiv("aa-modal-buttons");
    
    const cancelBtn = buttonContainer.createEl("button", { text: t("ui.cancel", this.plugin) });
    cancelBtn.addClass("aa-button");
    cancelBtn.addClass("aa-button-secondary");
    cancelBtn.onclick = () => modal.close();
    
    const confirmBtn = buttonContainer.createEl("button", { text: t("ui.createGroup", this.plugin) });
    confirmBtn.style.cssText = "background:var(--interactive-accent);color:var(--text-on-accent);";
    confirmBtn.addClass("aa-button");
    confirmBtn.addClass("aa-button-primary");
    confirmBtn.onclick = async () => {
      const groupName = input.value.trim();
      if (!groupName) return;
      
      // 创建分组
      const group = await this.plugin.addGroup(groupName, this.currentFile.path);
      
      // 将选中的批注添加到分组
      for (const annotationId of selectedIds) {
        await this.plugin.addAnnotationToGroup(annotationId, group.id);
      }
      
      // 退出多选模式
      this.isMultiSelectMode = false;
      this.selectedAnnotations.clear();
      
      modal.close();
      this.render();
    };
    
    // 回车确认
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        confirmBtn.click();
      }
    });
    
    modal.open();
    input.focus();
  }
  showRenameGroupDialog(group) {
    const modal = new import_obsidian.Modal(this.plugin.app);
    modal.titleEl.setText(t("ui.renameGroup", this.plugin));
    
    const content = modal.contentEl;
    content.createEl("p", { 
      text: `重命名分组 "${group.name}"：` 
    });
    
    const input = content.createEl("input", {
      type: "text",
      value: group.name
    });
    input.style.cssText = "width:100%;padding:8px;margin:8px 0;border-radius:4px;border:1px solid var(--background-modifier-border);";
    
    const buttonContainer = content.createDiv("aa-modal-buttons");
    
    const cancelBtn = buttonContainer.createEl("button", { text: t("ui.cancel", this.plugin) });
    cancelBtn.addClass("aa-button");
    cancelBtn.addClass("aa-button-secondary");
    cancelBtn.onclick = () => modal.close();
    
    const confirmBtn = buttonContainer.createEl("button", { text: t("ui.renameGroup", this.plugin) });
    confirmBtn.style.cssText = "background:var(--interactive-accent);color:var(--text-on-accent);";
    confirmBtn.addClass("aa-button");
    confirmBtn.addClass("aa-button-primary");
    confirmBtn.onclick = async () => {
      const newName = input.value.trim();
      if (!newName || newName === group.name) {
        modal.close();
        return;
      }
      
      await this.plugin.renameGroup(group.id, newName);
      modal.close();
      this.render();
    };
    
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        confirmBtn.click();
      }
    });
    
    modal.open();
    input.select();
  }
};
var AnnotatorSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: t("pluginName", this.plugin) + " · " + t("settings.about", this.plugin) });
    containerEl.createEl("p", {
      text: t("ui.emptyHint", this.plugin)
    });
    containerEl.createEl("hr");
    
    // Default color
    new import_obsidian.Setting(containerEl)
      .setName(t("settings.defaultColor", this.plugin))
      .setDesc(t("settings.defaultColorDesc", this.plugin))
      .addDropdown((dropdown) => {
        this.plugin.settings.colors.forEach((color) => {
          dropdown.addOption(color, `● ${getColorName(color, this.plugin)}`);
        });
        dropdown.setValue(this.plugin.settings.defaultColor);
        dropdown.onChange(async (value) => {
          this.plugin.settings.defaultColor = value;
          await this.plugin.saveSettings();
        });
      });
    
    containerEl.createEl("hr");
    new import_obsidian.Setting(containerEl)
      .setName(t("settings.language", this.plugin))
      .setDesc(t("settings.languageDesc", this.plugin))
      .addDropdown((dropdown) => {
        dropdown.addOption("zh", "中文");
        dropdown.addOption("en", "English");
        dropdown.setValue(this.plugin.settings.language);
        dropdown.onChange(async (value) => {
          this.plugin.settings.language = value;
          await this.plugin.saveSettings();
          this.display();
        });
      });
    
    containerEl.createEl("h3", { text: t("settings.highlightColors", this.plugin) });
    const colorList = containerEl.createDiv("aa-settings-colors");
    this.plugin.settings.colors.forEach((color, i) => {
      const row = colorList.createDiv("aa-color-row");
      row.style.cssText = "display:flex;align-items:center;gap:8px;margin:4px 0;";
      const swatch = row.createEl("span");
      swatch.style.cssText = `display:inline-block;width:24px;height:24px;background:${color};border-radius:4px;border:1px solid var(--background-modifier-border);`;
      const hexInput = row.createEl("input", {
        attr: { type: "text", value: color, maxlength: "7" }
      });
      hexInput.style.cssText = "width:80px;padding:2px 6px;font-family:monospace;";
      const label = row.createEl("span", {
        text: getColorName(color, this.plugin) || t("settings.custom", this.plugin)
      });
      label.style.cssText = "font-size:12px;color:var(--text-muted);";
      hexInput.onchange = async () => {
        const newColor = hexInput.value.trim();
        if (!/^#[0-9a-fA-F]{6}$/.test(newColor)) {
          new import_obsidian.Notice(t("notifications.invalidHex", this.plugin));
          return;
        }
        this.plugin.settings.colors[i] = newColor;
        swatch.style.background = newColor;
        await this.plugin.saveSettings();
      };
    });
    
    // 自定义颜色设置
    const customColorRow = colorList.createDiv("aa-color-row");
    customColorRow.style.cssText = "display:flex;align-items:center;gap:8px;margin:4px 0;padding:8px 0;border-top:1px dashed var(--background-modifier-border);";
    const customSwatch = customColorRow.createEl("span");
    customSwatch.style.cssText = "display:inline-block;width:24px;height:24px;border-radius:4px;border:1px solid var(--background-modifier-border);background:var(--background-secondary);";
    const customHexInput = customColorRow.createEl("input", {
      attr: { type: "text", placeholder: "#FCD34D", maxlength: "7" }
    });
    customHexInput.style.cssText = "width:80px;padding:2px 6px;font-family:monospace;";
    const customLabel = customColorRow.createEl("span", {
      text: t("ui.customColor", this.plugin)
    });
    customLabel.style.cssText = "font-size:12px;color:var(--text-muted);";
    
    // 更新预览色块
    const updateCustomSwatch = () => {
      const value = customHexInput.value.trim();
      if (validateHexColor(value)) {
        customSwatch.style.background = value;
        customSwatch.style.borderColor = value;
      } else {
        customSwatch.style.background = "var(--background-secondary)";
        customSwatch.style.borderColor = "var(--background-modifier-border)";
      }
    };
    
    // 初始化预览
    if (this.plugin.settings.customHighlightColor && validateHexColor(this.plugin.settings.customHighlightColor)) {
      customHexInput.value = this.plugin.settings.customHighlightColor;
      updateCustomSwatch();
    }
    
    // 输入时实时更新预览
    customHexInput.oninput = () => {
      updateCustomSwatch();
    };
    
    // 失去焦点时验证并保存
    customHexInput.onblur = async () => {
      const value = customHexInput.value.trim();
      if (value && !validateHexColor(value)) {
        new import_obsidian.Notice(t("ui.invalidHexColor", this.plugin));
        customHexInput.value = this.plugin.settings.customHighlightColor || "";
        updateCustomSwatch();
        return;
      }
      this.plugin.settings.customHighlightColor = value || "";
      await this.plugin.saveSettings();
      new import_obsidian.Notice(value ? t("notifications.customColorSaved", this.plugin) : t("notifications.customColorCleared", this.plugin));
    };
    
    // 自定义颜色名称输入框
    const customNameRow = colorList.createDiv("aa-color-row");
    customNameRow.style.cssText = "display:flex;align-items:center;gap:8px;margin:4px 0;padding:4px 0 8px 32px;";
    const customNameLabel = customNameRow.createEl("span", {
      text: t("ui.customColorName", this.plugin)
    });
    customNameLabel.style.cssText = "font-size:11px;color:var(--text-muted);min-width:80px;";
    const customNameInput = customNameRow.createEl("input", {
      attr: { type: "text", placeholder: "自定义", maxlength: "12" }
    });
    customNameInput.style.cssText = "width:120px;padding:2px 6px;font-size:12px;";
    
    // 初始化名称
    if (this.plugin.settings.customHighlightColorName) {
      customNameInput.value = this.plugin.settings.customHighlightColorName;
    }
    
    // 失去焦点时保存名称
    customNameInput.onblur = async () => {
      const name = customNameInput.value.trim();
      this.plugin.settings.customHighlightColorName = name || "自定义";
      await this.plugin.saveSettings();
      new import_obsidian.Notice(t("notifications.customColorNameSaved", this.plugin));
    };
    
    containerEl.createEl("hr");
    containerEl.createEl("h3", { text: t("settings.shortcuts", this.plugin) });
    const shortcuts = containerEl.createDiv();
    const notBound = t("settings.notBound", this.plugin);
    shortcuts.createEl("p", { text: "• " + t("commands.toggleSidebar", this.plugin) + " — " + notBound });
    shortcuts.createEl("p", { text: "• " + t("commands.exportAnnotations", this.plugin) + " — " + notBound });
    shortcuts.createEl("p", { text: "• " + t("commands.searchAnnotations", this.plugin) + " — " + notBound });
    shortcuts.createEl("p", { text: "• " + t("commands.clearFileAnnotations", this.plugin) + " — " + notBound });
    shortcuts.createEl("p", {
      text: t("settings.shortcutsHint", this.plugin)
    }).style.cssText = "color:var(--text-muted);font-size:12px;";
    
    containerEl.createEl("hr");
    const readingModeNotice = containerEl.createDiv();
    readingModeNotice.style.cssText = "padding:10px 12px;margin:8px 0;border-radius:8px;background:var(--background-secondary);color:var(--text-muted);font-size:12px;line-height:1.6;border:1px solid var(--background-modifier-border);";
    readingModeNotice.setText(t("settings.readingModeNotice", this.plugin));
    containerEl.createEl("h3", { text: t("settings.about", this.plugin) });
    const aboutEl = containerEl.createEl("p");
    aboutEl.innerHTML = t("settings.aboutText", this.plugin);
  }
};

/* nosourcemap */
/* nosourcemap */
/* nosourcemap */
