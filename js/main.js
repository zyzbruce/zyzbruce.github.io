(function () {
  "use strict";
  var C = window.RESUME_CONTENT || {};
  var KEY = "resume-lang";
  var SUPPORTED = ["zh", "en"];
  var root = document.documentElement;
  var reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ---------- Language ---------- */
  function pickInitial() {
    var q = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    if (q && SUPPORTED.indexOf(q) !== -1) return q;
    var s = null;
    try { s = localStorage.getItem(KEY); } catch (e) {}
    if (s && SUPPORTED.indexOf(s) !== -1) return s;
    return "zh";
  }
  function t(key, lang) { var e = C[key]; return e ? e[lang] : null; }
  function fillList(ul, items) {
    ul.textContent = "";
    items.forEach(function (s) { var li = document.createElement("li"); li.textContent = s; ul.appendChild(li); });
  }
  var current = null;
  function apply(lang) {
    current = lang;
    root.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"), lang);
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-list]").forEach(function (ul) {
      var items = t(ul.getAttribute("data-i18n-list"), lang);
      if (Array.isArray(items)) fillList(ul, items);
    });
    document.querySelectorAll("[data-i18n-tags]").forEach(function (ul) {
      var v = t(ul.getAttribute("data-i18n-tags"), lang);
      if (typeof v === "string") fillList(ul, v.split(/\s*·\s*/).filter(Boolean));
    });
    document.querySelectorAll("[data-i18n-stats]").forEach(function (ul) {
      var items = t(ul.getAttribute("data-i18n-stats"), lang);
      if (!Array.isArray(items)) return;
      ul.textContent = "";
      items.forEach(function (s) {
        var parts = s.split("|"), li = document.createElement("li");
        var v = document.createElement("strong"), l = document.createElement("span");
        v.textContent = parts[0]; l.textContent = parts[1] || "";
        li.appendChild(v); li.appendChild(l); ul.appendChild(li);
      });
    });
    var title = t("meta_title", lang); if (title) document.title = title;
    var desc = t("meta_description", lang);
    var m = document.querySelector('meta[name="description"]');
    if (m && desc) m.setAttribute("content", desc);
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
  }
  function setLang(lang) {
    if (lang === current) return;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    if (reduceMotion) { apply(lang); return; }
    // Cross-fade: fade out, swap text, fade back in
    root.classList.add("lang-switching");
    setTimeout(function () {
      apply(lang);
      requestAnimationFrame(function () { root.classList.remove("lang-switching"); });
    }, 160);
  }
  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  var pb = document.getElementById("print-btn");
  if (pb) pb.addEventListener("click", function () { window.print(); });
  apply(pickInitial());

  /* ---------- Scroll reveal (hidden state only added once JS runs) ---------- */
  var revealEls = document.querySelectorAll("main > section:not(.hero), .entry, .skill");
  if (!reduceMotion && "IntersectionObserver" in window) {
    revealEls.forEach(function (el) { el.classList.add("reveal"); });
    root.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
    // Never leave anything hidden when printing
    window.addEventListener("beforeprint", function () {
      revealEls.forEach(function (el) { el.classList.add("in"); });
    });
  }

  /* ---------- Scroll progress + scrollspy ---------- */
  var bar = document.querySelector(".progress-bar");
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav a[href^='#']"));
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); });
  var ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.scrollY || root.scrollTop;
    var max = root.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
    var probe = y + window.innerHeight * 0.3, active = -1;
    targets.forEach(function (sec, i) { if (sec && sec.offsetTop <= probe) active = i; });
    if (max > 0 && y >= max - 2) active = targets.length - 1; // bottom: last section
    links.forEach(function (a, i) {
      var on = i === active;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
