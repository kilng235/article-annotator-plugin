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
    "exportDone": "✅ Exported:",
    "clearFileConfirm": "Are you sure you want to clear all ${n} annotations in the current file?",
    "highlightAdded": "✅ ${color} Highlight added",
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
    "navigate": "📍 Navigate",
    "editNote": "✏️ Edit note",
    "editNoteTitle": "✏️ Edit note",
    "searchAll": "🔍 Search all annotations",
    "searchResults": "${n} annotations found",
    "clearFileConfirm": "Clear ${n} annotations for the current file?",
    "mobileHighlight": "🔖 Highlight",
    "mobileAddNote": "✏️ Add note",
    "mobileSidebar": "📚 Sidebar",
    "sidebarTitle": "📝 Article Annotator",
    "fabAriaLabel": "Article Annotator quick actions",
    "locationPage": "Page {page}",
    "locationLine": "Line {line}",
    "pdfAddNote": "✏️ Write note"
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
    "aboutText": "Article Annotator v0.1.13 — Inspired by Microsoft Word comments. All annotation data is stored independently and does not modify the original file."
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
    "exportDone": "✅ 已导出：",
    "clearFileConfirm": "确定清空当前文件的 ${n} 条批注？",
    "highlightAdded": "✅ ${color} 高亮已添加",
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
    "navigate": "📍 定位",
    "editNote": "✏️ 编辑批注",
    "editNoteTitle": "✏️ 编辑批注",
    "searchAll": "🔍 搜索全部批注",
    "searchResults": "共 ${n} 条批注",
    "clearFileConfirm": "确定清空当前文件的 ${n} 条批注？",
    "mobileHighlight": "🔖 高亮",
    "mobileAddNote": "✏️ 写批注",
    "mobileSidebar": "📚 面板",
    "sidebarTitle": "📝 文章批注",
    "fabAriaLabel": "文章批注快捷操作",
    "locationPage": "第 {page} 页",
    "locationLine": "第 {line} 行",
    "pdfAddNote": "✏️ 写批注"
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
    "aboutText": "文章批注 v0.1.13 — 参考 Microsoft Word 批注设计。所有批注数据独立保存，不修改原文。目前仅支持 Windows 端。"
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
  language: "zh"
};
var VIEW_TYPE = "article-annotator-sidebar";
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
var ArticleAnnotator = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.data = [];
    this.activeFile = null;
    this.sidebarView = null;
    this.mobileFabEl = null;
    this.mobileFabPanelEl = null;
    this.pdfContextMenuHandler = null;
    this.pdfRenderTimers = /* @__PURE__ */ new Map();
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
    this.registerEvent(this.app.workspace.on("active-leaf-change", (leaf) => {
      const file = leaf?.view?.file || null;
      if (!file)
        return;
      this.handleActiveFileChange(file);
    }));
    this.registerEvent(this.app.workspace.on("layout-change", () => {
      this.schedulePdfRender();
    }));
    this.addCommand({
      id: "toggle-sidebar",
      name: t("commands.toggleSidebar", this.plugin),
      callback: () => this.activateSidebar()
    });
    this.addCommand({
      id: "export-annotations",
      name: t("commands.exportAnnotations", this.plugin),
      callback: () => this.exportAnnotations()
    });
    this.addCommand({
      id: "search-annotations",
      name: t("commands.searchAnnotations", this.plugin),
      callback: () => this.openSearchModal()
    });
    this.addCommand({
      id: "clear-file-annotations",
      name: t("commands.clearFileAnnotations", this.plugin),
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
  handleActiveFileChange(file) {
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
    if (!startPage || !endPage || startPage !== endPage)
      return null;
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
      item.setTitle("✏️ Write note");
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
    new import_obsidian.Notice(`✅ ${getColorName(color, this) || color} ${t("ui.highlight", this)} added`);
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
      new import_obsidian.Notice(t("notifications.fileNotFound", this.plugin));
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
    setTimeout(() => {
      const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      if (view && isMarkdownPosition(annotation.position)) {
        view.editor.setCursor({
          line: annotation.position.startLine,
          ch: annotation.position.startCh
        });
        view.editor.scrollIntoView({
          from: { line: annotation.position.startLine, ch: annotation.position.startCh },
          to: { line: annotation.position.endLine, ch: annotation.position.endCh }
        }, true);
        view.editor.focus();
      }
    }, 150);
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
  async loadSettingsAndData() {
    const saved = await this.loadData();
    if (saved) {
      this.data = Array.isArray(saved.annotations) ? saved.annotations.map(normalizeAnnotation).filter(Boolean) : [];
      this.settings = Object.assign({}, DEFAULT_SETTINGS, saved.settings || {});
    } else {
      this.data = [];
      this.settings = Object.assign({}, DEFAULT_SETTINGS);
    }
  }
  async persistAll() {
    const persisted = {
      annotations: this.data,
      settings: this.settings
    };
    await this.saveData(persisted);
  }
  async saveAnnotations() {
    await this.persistAll();
  }
  async saveSettings() {
    await this.persistAll();
  }
  getActiveFilePath() {
    return this.activeFile?.path || null;
  }
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
      new import_obsidian.Notice(t("notifications.openFileFirst", this.plugin));
      return;
    }
    const count = this.getAnnotationsForFile(this.activeFile.path).length;
    if (count === 0) {
      new import_obsidian.Notice(t("notifications.noAnnotations", this));
      return;
    }
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
    new import_obsidian.Notice(`🗑️ Cleared ${count} annotations`);
  }
  setupMobileFab() {
    this.cleanupMobileFab();
    const container = document.body;
    if (!container)
      return;
    const fab = container.createEl("button", {
      cls: "aa-mobile-fab",
      text: "✍️"
    });
    fab.setAttribute("aria-label", "Article Annotator quick actions");
    const panel = container.createDiv("aa-mobile-fab-panel");
    panel.addClass("is-hidden");
    const addBtn = panel.createEl("button", { text: "🔖 Highlight" });
    addBtn.onclick = async () => {
      const md = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      const editor = this.app.workspace.activeEditor?.editor;
      if (!md?.file || !editor) {
        new import_obsidian.Notice(t("notifications.openEditableNote", this));
        return;
      }
      await this.highlightSelection(editor, md, this.settings.defaultColor);
    };
    const noteBtn = panel.createEl("button", { text: "✏️ Add note" });
    noteBtn.onclick = async () => {
      const md = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      const editor = this.app.workspace.activeEditor?.editor;
      if (!md?.file || !editor) {
        new import_obsidian.Notice(t("notifications.openEditableNote", this));
        return;
      }
      await this.addNoteToSelection(editor, md);
    };
    const sidebarBtn = panel.createEl("button", { text: "📚 Sidebar" });
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
  async initSidebar() {
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    if (leaves.length === 0) {
      const leaf = this.app.workspace.getRightLeaf(false) || this.app.workspace.getLeaf("split", "vertical");
      if (leaf) {
        await leaf.setViewState({ type: VIEW_TYPE, active: true });
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
  addAnnotationMenuItems(menu, editor, view) {
    menu.addSeparator();
    this.settings.colors.forEach((color) => {
      menu.addItem((item) => {
        item.setIcon("pen-tool");
        item.setTitle(`${t("ui.highlight", this)} ${getColorName(color, this) || color}`);
        item.onClick(() => this.highlightSelection(editor, view, color));
      });
    });
    menu.addSeparator();
    menu.addItem((item) => {
      item.setIcon("sticky-note");
      item.setTitle("✏️ Write note");
      item.onClick(() => this.addNoteToSelection(editor, view));
    });
  }
  async highlightSelection(editor, view, color) {
    const selection = editor.getSelection();
    if (!selection || !view.file)
      return;
    const from = editor.getCursor("from");
    const to = editor.getCursor("to");
    const existing = this.getAnnotationsForFile(view.file.path);
    const overlap = existing.some((a) => positionsOverlap(a.position, {
      startLine: from.line,
      startCh: from.ch,
      endLine: to.line,
      endCh: to.ch
    }));
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
    new import_obsidian.Notice(`✅ ${getColorName(color, this)} ${t("ui.highlight", this)}${t("ui.highlight", this) === "Highlight" ? " added" : "已添加"}`);
  }
  async addNoteToSelection(editor, view) {
    const selection = editor.getSelection();
    if (!selection || !view.file)
      return;
    const from = editor.getCursor("from");
    const to = editor.getCursor("to");
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
  async exportAnnotations() {
    const file = this.activeFile;
    if (!file) {
      new import_obsidian.Notice(t("notifications.openFileFirst", this.plugin));
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
    let content = `# 📍 Annotations Export — ${file.basename}\n\n`;
    content += `> Export time: ${new Date().toLocaleString("en-US")}\n`;
    content += `> Total annotations: ${sorted.length}\n\n`;
    content += `---\n\n`;
    sorted.forEach((a, i) => {
      const colorName = getColorName(a.color, this.plugin) || t("ui.highlights", this.plugin);
      const hasNote = a.noteContent ? "📝" : "🔆";
      content += `## ${i + 1}. ${hasNote} ${colorName}\n\n`;
      content += `> "${a.highlightedText}"\n\n`;
      if (a.noteContent) {
        content += `**Note:** ${a.noteContent}\n\n`;
      }
      content += `*Location: ${getAnnotationLocationLabel(a, this)}*\n`;
      content += `*Type: ${a.fileType === "pdf" ? "PDF" : "Markdown"}*\n`;
      content += `*Time: ${formatTime(a.created, this)}*\n\n`;
      content += `---\n\n`;
    });
    const exportPath = `${file.parent?.path || ""}/${file.basename}-annotations-export.md`;
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
    new import_obsidian.Notice(`✅ Exported: ${exportFile.path}`);
    const leaf = this.app.workspace.getLeaf(false);
    if (leaf) {
      await leaf.openFile(exportFile);
    }
  }
  openSearchModal() {
    const modal = new SearchModal(this.app, this);
    modal.open();
  }
};
module.exports = ArticleAnnotator;
