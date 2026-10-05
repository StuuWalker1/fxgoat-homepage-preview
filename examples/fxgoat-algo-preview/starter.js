// FX GOAT ALGO V4 demo starter. Uses the SAME core as the website (fxgoat-algo-core.js, copied by
// `npm run sync:algo-starter`). Serve this folder over http(s); ES modules do not load from file://.
import { makeDemoData, mountAlgoPreview } from "./fxgoat-algo-core.js";
import { CONFIG } from "./config.js";

const $ = (id) => document.getElementById(id);
const LOCAL = new Set(["localhost", "127.0.0.1", "[::1]"]);

/** Same rules as the website: https origin (http only for localhost), no credentials, path or query. */
function parseOrigin(raw) {
  const v = typeof raw === "string" ? raw.trim() : "";
  if (!v) return null;
  let u;
  try {
    u = new URL(v);
  } catch {
    return null;
  }
  if (u.username || u.password || u.search || u.hash || (u.pathname !== "/" && u.pathname !== "")) return null;
  if (u.protocol === "https:" || (u.protocol === "http:" && LOCAL.has(u.hostname))) return u.origin;
  return null;
}

function setupCta() {
  const origin = parseOrigin(CONFIG.dashboardOrigin);
  if (!origin) {
    $("fxg-cta-off").hidden = false;
    return;
  }
  const signup = new URL("/signup", origin);
  signup.searchParams.set("product", CONFIG.product);
  signup.searchParams.set("source", CONFIG.source);
  $("fxg-signup").href = signup.toString();
  $("fxg-login").href = new URL("/login", origin).toString();
  $("fxg-signup").hidden = false;
  $("fxg-login").hidden = false;
}

/** Injected JSON wins; otherwise the synthetic demo. Review switches: ?scenario=buy|sell|none|empty */
function initialData(scenario) {
  const raw = $("fxgoat-algo-data")?.textContent?.trim();
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      return { candles: [] };
    }
  }
  const demo = makeDemoData(scenario === "buy" ? "buy" : "sell");
  if (scenario === "none") return { candles: demo.candles, setup: null };
  if (scenario === "empty") return { candles: [] };
  return demo;
}

const MESSAGES = {
  ready: "",
  "no-setup": "No setup in this sample.",
  empty: "No demo data to display.",
  "invalid-setup": "Setup data failed validation; candles only.",
  "invalid-candles": "Candle data failed validation.",
};

function main() {
  setupCta();
  const lib = window.LightweightCharts;
  const overlay = $("fxg-overlay");
  const root = $("fxg-demo");
  if (!lib) {
    overlay.textContent = "Chart library missing (vendor/lightweight-charts.standalone.production.js).";
    return;
  }
  const scenario = (new URLSearchParams(location.search).get("scenario") || "buy");
  let theme = CONFIG.theme === "light" ? "light" : "dark";

  const ctrl = mountAlgoPreview(lib, $("fxg-chart"), {
    theme,
    colors: CONFIG.colors,
    fontFamily: CONFIG.fontFamily,
    precision: CONFIG.precision,
    tp5Open: CONFIG.tp5Open,
    onState: ({ state, errors }) => {
      root.dataset.state = state;
      overlay.textContent = MESSAGES[state] ?? "";
      overlay.hidden = !overlay.textContent;
      if (errors.length) console.warn("[fxgoat-algo] data rejected:", errors);
      syncHeader();
    },
  });

  function syncHeader() {
    const s = ctrl?.getState().setup;
    const d = s ? s.direction : scenario === "buy" ? "buy" : "sell";
    document.querySelectorAll(".fxg-seg button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.direction === d)));
    if (s) {
      $("fxg-symbol").textContent = s.symbol;
      $("fxg-tf").textContent = s.timeframe;
    }
  }

  ctrl.setData(initialData(scenario));
  root.classList.toggle("fxg-light", theme === "light");

  document.querySelectorAll(".fxg-seg button").forEach((b) =>
    b.addEventListener("click", () => {
      ctrl.setData(makeDemoData(b.dataset.direction === "buy" ? "buy" : "sell"));
      syncHeader();
    }),
  );
  $("fxg-reset").addEventListener("click", () => ctrl.resetView());
  $("fxg-theme").addEventListener("click", (e) => {
    theme = theme === "dark" ? "light" : "dark";
    ctrl.setTheme(theme);
    root.classList.toggle("fxg-light", theme === "light");
    e.currentTarget.textContent = theme === "dark" ? "Light chart" : "Dark chart";
    e.currentTarget.setAttribute("aria-pressed", String(theme === "light"));
  });

  // Backend level injection (method 2): window.fxgoatAlgo.setData({ candles, setup }) from your own script.
  window.fxgoatAlgo = ctrl;
  root.dataset.ready = "true";
}

main();
