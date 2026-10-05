/**
 * Homepage sample chart. Same renderer and synthetic XAUUSD M5 data as FX GOAT ALGO V4
 * (fxgoat-algo-core.js): yellow ENTRY, green TP1–TP5, red SL, reward and risk zones.
 * Backgrounds are pure white / true black, with no grid.
 */
import { makeDemoData, mountAlgoPreview } from "../../examples/fxgoat-algo-preview/fxgoat-algo-core.js";

const LIB_SRC = "/examples/fxgoat-algo-preview/vendor/lightweight-charts.standalone.production.js";
const FONT = '"JetBrains Mono Variable", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

function siteTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function loadLib() {
  const ready = window.LightweightCharts;
  if (ready?.createChart && ready.CandlestickSeries) return Promise.resolve(ready);
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = LIB_SRC;
    s.async = true;
    s.onload = () => {
      const lib = window.LightweightCharts;
      if (lib?.createChart && lib.CandlestickSeries) resolve(lib);
      else reject(new Error("chart library"));
    };
    s.onerror = () => reject(new Error("chart library"));
    document.head.appendChild(s);
  });
}

export function mountVipPreview(container) {
  const card = container.closest(".vp-card");
  let theme = siteTheme();
  let direction = "buy";
  const selected = card?.querySelector("[data-side][aria-selected='true']");
  if (selected?.dataset.side === "sell") direction = "sell";

  const themeBtn = card?.querySelector("[data-chart-theme]");
  const resetBtn = card?.querySelector("[data-reset]");
  let ctrl = null;
  let pendingReset = false;

  const syncThemeBtn = () => {
    if (!themeBtn) return;
    themeBtn.textContent = theme === "dark" ? "Light chart" : "Dark chart";
    themeBtn.setAttribute("aria-pressed", String(theme === "light"));
  };
  syncThemeBtn();

  card?.querySelectorAll("[data-side]").forEach((btn) => {
    btn.addEventListener("click", () => {
      direction = btn.dataset.side === "sell" ? "sell" : "buy";
      card.querySelectorAll("[data-side]").forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
      ctrl?.setData(makeDemoData(direction));
    });
  });
  resetBtn?.addEventListener("click", () => {
    if (ctrl) ctrl.resetView();
    else pendingReset = true;
  });
  themeBtn?.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    syncThemeBtn();
    ctrl?.setTheme(theme);
  });
  new MutationObserver(() => {
    const next = siteTheme();
    if (next === theme) return;
    theme = next;
    syncThemeBtn();
    ctrl?.setTheme(theme);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  loadLib()
    .then((lib) => {
      ctrl = mountAlgoPreview(lib, container, {
        theme,
        fontFamily: FONT,
        data: makeDemoData(direction),
      });
      container.dataset.ready = "true";
      if (pendingReset) ctrl.resetView();
    })
    .catch(() => {
      container.dataset.state = "error";
    });
}
