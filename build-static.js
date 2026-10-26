#!/usr/bin/env node
/*
 * Re-bakes the Chinese (zh) text from js/content.js into index.html so the page
 * has real content without JavaScript (search engines, no-JS visitors).
 * js/content.js stays the single source of truth. Run after editing it:
 *     node build-static.js
 * Only touches: <title>, meta description, elements with data-i18n="key",
 * <ul data-i18n-list="key">, <ul data-i18n-tags="key"> (split on " · "), <ul data-i18n-stats="key">, and <a data-email="key">.
 */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const dir = __dirname;
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(dir, "js/content.js"), "utf8"), ctx);
const C = ctx.window.RESUME_CONTENT, L = "zh";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const get = (k) => { if (!C[k]) throw new Error("Missing key in content.js: " + k); return C[k][L]; };

const file = path.join(dir, "index.html");
let html = fs.readFileSync(file, "utf8"), n = 0;

html = html.replace(/<title>[^<]*<\/title>/, () => `<title>${esc(get("meta_title"))}</title>`);
html = html.replace(/(<meta name="description" content=")[^"]*(")/, (_, a, b) => a + esc(get("meta_description")) + b);
// Simple text elements (content contains no tags)
html = html.replace(/(<(\w+)\b[^>]*\bdata-i18n="([\w-]+)"[^>]*>)[^<]*(<\/\2>)/g, (_, open, tag, key, close) => { n++; return open + esc(get(key)) + close; });
// Lists
html = html.replace(/(<ul\b[^>]*\bdata-i18n-list="([\w-]+)"[^>]*>)[\s\S]*?(<\/ul>)/g, (_, open, key, close) => {
  n++; const items = get(key);
  return open + items.map((s) => `<li>${esc(s)}</li>`).join("") + close;
});
// Tag pills: "A · B · C" -> <li> per item
html = html.replace(/(<ul\b[^>]*\bdata-i18n-tags="([\w-]+)"[^>]*>)[\s\S]*?(<\/ul>)/g, (_, open, key, close) => {
  n++; return open + get(key).split(/\s*·\s*/).filter(Boolean).map((s) => `<li>${esc(s)}</li>`).join("") + close;
});
// Stats: "value|label" -> <li><strong>value</strong><span>label</span></li>
html = html.replace(/(<ul\b[^>]*\bdata-i18n-stats="([\w-]+)"[^>]*>)[\s\S]*?(<\/ul>)/g, (_, open, key, close) => {
  n++; return open + get(key).map((s) => { const [v, l] = s.split("|"); return `<li><strong>${esc(v)}</strong><span>${esc(l || "")}</span></li>`; }).join("") + close;
});
// Email links
html = html.replace(/<a\b[^>]*\bdata-email="([\w-]+)"[^>]*>[^<]*<\/a>/g, (_, key) => {
  n++; const e = esc(get(key));
  return `<a data-email="${key}" href="mailto:${e}">${e}</a>`;
});
fs.writeFileSync(file, html);
console.log(`index.html updated: ${n} elements baked with zh text.`);
