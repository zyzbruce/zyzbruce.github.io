#!/usr/bin/env node
/*
 * Bundles index.html + css + js + favicon into ONE self-contained HTML file:
 *     node bundle-single.js   ->  ../resume-site-dist/bruce-zhang-resume.html
 * Run `node build-static.js` first so the baked Chinese text is current.
 */
"use strict";
const fs = require("fs"), path = require("path");
const dir = __dirname;
const read = (f) => fs.readFileSync(path.join(dir, f), "utf8");
const outDir = path.join(dir, "..", "resume-site-dist");
const out = path.join(outDir, "bruce-zhang-resume.html");

let html = read("index.html");
const favicon = "data:image/svg+xml;base64," + Buffer.from(read("favicon.svg")).toString("base64");

// <link rel="stylesheet" href="x.css" [media="..."]>  ->  <style>[ @media ... { ] css [ } ]</style>
html = html.replace(/<link rel="stylesheet" href="([^"]+)"(?: media="([^"]+)")?>/g, (_, href, media) => {
  const css = read(href).replace(/<\/style/gi, "<\\/style");
  return media ? `<style>@media ${media} {\n${css}\n}</style>` : `<style>\n${css}\n</style>`;
});
html = html.replace(/<script src="([^"]+)"><\/script>/g, (_, src) =>
  `<script>\n${read(src).replace(/<\/script/gi, "<\\/script")}\n</script>`);
html = html.replace(/(href|src)="favicon\.svg"/g, `$1="${favicon}"`);

const leftovers = html.match(/(href|src)="(?!#|mailto:|data:)[^"]+"/g);
if (leftovers) throw new Error("Unbundled references remain: " + leftovers.join(", "));
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(out, html);
console.log(`Wrote ${out} (${fs.statSync(out).size} bytes)`);
