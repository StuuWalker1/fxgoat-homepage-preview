/*!
 * FX GOAT ALGO V4 — public demo chart core (renderer + data validation).
 *
 * VISUAL DEMO ONLY. This file draws a candlestick chart with ENTRY / SL / TP1–TP5 levels that it is
 * GIVEN. It contains no Pine code, no strategy formulas and no signal logic, and it never fetches data.
 *
 * Single source of truth: src/lib/algo-preview/fxgoat-algo-core.js in the website repo.
 * `npm run sync:algo-starter` copies it verbatim into public/examples/fxgoat-algo-preview/
 * (a test fails if the copies drift). Plain ES module, no dependencies: the charting library is
 * injected (npm `lightweight-charts` in Next.js, the vendored standalone bundle in the starter).
 *
 * Charting: TradingView Lightweight Charts™ (Apache-2.0), see NOTICE / LICENSE next to the bundle.
 */

export const CORE_VERSION = "1.0.0";
export const TARGET_COUNT = 5;
export const MAX_CANDLES = 5000;

/** Default palettes. Every key can be overridden per theme via `options.colors`. */
export const DEFAULT_COLORS = Object.freeze({
  dark: Object.freeze({
    background: "#070B14",
    text: "#B8B4AA",
    grid: "transparent",
    border: "#25252A",
    crosshair: "#7E7B74",
    up: "#26A69A",
    down: "#EF5350",
    entry: "#F2C94C",
    entryText: "#141006",
    sl: "#EF5350",
    slText: "#FFFFFF",
    tp: "#35C96A",
    tpText: "#06120F",
    riskFill: "rgba(239,83,80,0.15)",
    rewardFill: "rgba(53,201,106,0.13)",
  }),
  light: Object.freeze({
    background: "#FFFFFF",
    text: "#3A3833",
    grid: "transparent",
    border: "#E2DED4",
    crosshair: "#8A867C",
    up: "#089981",
    down: "#E53935",
    entry: "#D9A514",
    entryText: "#141006",
    sl: "#E53935",
    slText: "#FFFFFF",
    tp: "#18A94B",
    tpText: "#FFFFFF",
    riskFill: "rgba(229,57,53,0.12)",
    rewardFill: "rgba(24,169,75,0.12)",
  }),
});

const isNum = (v) => typeof v === "number" && Number.isFinite(v);

/* ------------------------------------------------------------------------------------------------
 * Data contract + validation
 * ---------------------------------------------------------------------------------------------- */

/**
 * Validate candles: finite positive OHLC, high/low envelope, integer UTC-second timestamps strictly
 * ascending. Returns a normalised copy (only time/open/high/low/close are kept).
 */
export function validateCandles(candles) {
  const errors = [];
  if (!Array.isArray(candles)) return { ok: false, errors: ["candles must be an array"], value: [] };
  if (candles.length > MAX_CANDLES) return { ok: false, errors: [`too many candles (max ${MAX_CANDLES})`], value: [] };
  const value = [];
  let prev = -Infinity;
  candles.forEach((c, i) => {
    if (!c || typeof c !== "object") {
      errors.push(`candle ${i}: not an object`);
      return;
    }
    const { time, open, high, low, close } = c;
    if (!Number.isInteger(time) || time <= 0) errors.push(`candle ${i}: time must be a positive integer (UTC seconds)`);
    else if (time <= prev) errors.push(`candle ${i}: timestamps must be strictly ascending`);
    if (![open, high, low, close].every((v) => isNum(v) && v > 0)) {
      errors.push(`candle ${i}: open/high/low/close must be finite positive numbers`);
    } else {
      if (high < Math.max(open, close)) errors.push(`candle ${i}: high is below open/close`);
      if (low > Math.min(open, close)) errors.push(`candle ${i}: low is above open/close`);
    }
    if (Number.isInteger(time)) prev = Math.max(prev, time);
    value.push({ time, open, high, low, close });
  });
  return errors.length ? { ok: false, errors, value: [] } : { ok: true, errors: [], value };
}

/**
 * Validate a setup against the contract:
 * { symbol, timeframe, direction: "buy"|"sell", entry, stopLoss, targets: [5 numbers],
 *   startTime, endTime, source: "demo" }
 * Geometry: buy  → stopLoss < entry < TP1 < TP2 < TP3 < TP4 < TP5
 *           sell → stopLoss > entry > TP1 > TP2 > TP3 > TP4 > TP5
 * If candles are supplied, startTime must be one of their timestamps (the setup candle).
 */
export function validateSetup(setup, candles) {
  const errors = [];
  if (!setup || typeof setup !== "object") return { ok: false, errors: ["setup must be an object"], value: null };
  const { symbol, timeframe, direction, entry, stopLoss, targets, startTime, endTime, source } = setup;
  if (typeof symbol !== "string" || !/^[A-Za-z0-9._:\-/]{1,20}$/.test(symbol)) errors.push("symbol must be 1-20 letters/digits");
  if (typeof timeframe !== "string" || !/^[A-Za-z0-9]{1,6}$/.test(timeframe)) errors.push("timeframe must be 1-6 letters/digits (e.g. M5)");
  if (direction !== "buy" && direction !== "sell") errors.push('direction must be "buy" or "sell"');
  if (source !== "demo") errors.push('source must be "demo" (the public renderer only accepts demo data)');
  if (!isNum(entry) || entry <= 0) errors.push("entry must be a finite positive number");
  if (!isNum(stopLoss) || stopLoss <= 0) errors.push("stopLoss must be a finite positive number");
  const tpsOk = Array.isArray(targets) && targets.length === TARGET_COUNT && targets.every((t) => isNum(t) && t > 0);
  if (!tpsOk) errors.push(`targets must be ${TARGET_COUNT} finite positive numbers`);
  if (!Number.isInteger(startTime) || startTime <= 0) errors.push("startTime must be a positive integer (UTC seconds)");
  if (!Number.isInteger(endTime) || endTime <= 0) errors.push("endTime must be a positive integer (UTC seconds)");
  else if (Number.isInteger(startTime) && endTime <= startTime) errors.push("endTime must be after startTime");

  if (!errors.length) {
    const sign = direction === "buy" ? 1 : -1;
    if (sign * (entry - stopLoss) <= 0) errors.push(direction === "buy" ? "buy: stopLoss must be below entry" : "sell: stopLoss must be above entry");
    const chain = [entry, ...targets];
    for (let i = 1; i < chain.length; i++) {
      if (sign * (chain[i] - chain[i - 1]) <= 0) {
        errors.push(
          direction === "buy"
            ? `buy: TP${i} must be above ${i === 1 ? "entry" : `TP${i - 1}`}`
            : `sell: TP${i} must be below ${i === 1 ? "entry" : `TP${i - 1}`}`,
        );
      }
    }
  }
  if (!errors.length && Array.isArray(candles) && candles.length && !candles.some((c) => c.time === startTime)) {
    errors.push("startTime must match a candle timestamp (the setup candle)");
  }
  if (errors.length) return { ok: false, errors, value: null };
  return {
    ok: true,
    errors: [],
    value: { symbol, timeframe, direction, entry, stopLoss, targets: [...targets], startTime, endTime, source },
  };
}

/**
 * Validate a whole payload { candles, setup }. Never throws.
 * state: "ready" | "no-setup" (valid candles, setup null/absent) | "invalid-setup" (candles drawn,
 * setup rejected) | "empty" (no candles) | "invalid-candles".
 */
export function validatePreviewData(input) {
  const data = input && typeof input === "object" ? input : {};
  const c = validateCandles(data.candles ?? []);
  if (!c.ok) return { state: "invalid-candles", candles: [], setup: null, errors: c.errors };
  if (!c.value.length) return { state: "empty", candles: [], setup: null, errors: [] };
  if (data.setup == null) return { state: "no-setup", candles: c.value, setup: null, errors: [] };
  const s = validateSetup(data.setup, c.value);
  if (!s.ok) return { state: "invalid-setup", candles: c.value, setup: null, errors: s.errors };
  return { state: "ready", candles: c.value, setup: s.value, errors: [] };
}

/* ------------------------------------------------------------------------------------------------
 * Geometry (pure; unit-tested)
 * ---------------------------------------------------------------------------------------------- */

/**
 * Price-space geometry of a validated setup. Risk zone = SL↔ENTRY, reward zone = ENTRY↔TP5.
 * For a buy the reward zone is above entry; for a sell it is below.
 */
export function setupGeometry(setup) {
  const tp5 = setup.targets[TARGET_COUNT - 1];
  const levels = [
    { key: "sl", label: "SL", price: setup.stopLoss },
    { key: "entry", label: "ENTRY", price: setup.entry },
    ...setup.targets.map((price, i) => ({ key: `tp${i + 1}`, label: `TP${i + 1}`, price })),
  ];
  return {
    direction: setup.direction,
    rewardAbove: setup.direction === "buy",
    risk: { top: Math.max(setup.entry, setup.stopLoss), bottom: Math.min(setup.entry, setup.stopLoss) },
    reward: { top: Math.max(setup.entry, tp5), bottom: Math.min(setup.entry, tp5) },
    levels,
  };
}

/** Autoscale range that keeps every level (SL through TP5) on screen. */
export function setupPriceRange(setup) {
  const prices = [setup.stopLoss, setup.entry, ...setup.targets];
  return { minValue: Math.min(...prices), maxValue: Math.max(...prices) };
}

/** Logical (bar-index) span of the setup boxes. endTime may lie beyond the last candle. */
export function setupLogicalSpan(setup, candles) {
  const start = candles.findIndex((c) => c.time === setup.startTime);
  if (start < 0) return null;
  const last = candles.length - 1;
  const step = candles.length > 1 ? candles[last].time - candles[last - 1].time : 60;
  let end;
  if (setup.endTime > candles[last].time) end = last + (setup.endTime - candles[last].time) / step;
  else {
    end = candles.findIndex((c) => c.time >= setup.endTime);
    if (end < 0) end = last;
  }
  return { start, end: Math.max(end, start + 1) };
}

/**
 * Vertical label de-collision. items: [{ y }] (desired centre y, px). Returns centre ys, same order,
 * at least `gap` apart and kept within [top + gap/2, bottom - gap/2] where possible.
 */
export function resolveLabelPositions(items, { gap, top = 0, bottom = Infinity }) {
  const order = items.map((it, i) => ({ i, y: it.y })).sort((a, b) => a.y - b.y);
  const half = gap / 2;
  for (let k = 0; k < order.length; k++) {
    const min = k === 0 ? top + half : order[k - 1].y + gap;
    if (order[k].y < min) order[k].y = min;
  }
  for (let k = order.length - 1; k >= 0; k--) {
    const max = k === order.length - 1 ? bottom - half : order[k + 1].y - gap;
    if (order[k].y > max) order[k].y = max;
  }
  const out = new Array(items.length);
  for (const o of order) out[o.i] = o.y;
  return out;
}

/** Visible logical range for "reset view": some history before the setup plus the whole box. */
export function defaultVisibleRange({ candleCount, span, width }) {
  const back = width < 420 ? 26 : width < 760 ? 40 : 64;
  if (!span) return { from: Math.max(0, candleCount - back * 1.4), to: candleCount + 3 };
  return { from: Math.max(-2, span.start - back), to: span.end + 2 };
}

/* ------------------------------------------------------------------------------------------------
 * Synthetic demo data (deterministic). NOT market data, NOT historical, NOT a signal.
 * ---------------------------------------------------------------------------------------------- */

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round2 = (v) => Math.round(v * 100) / 100;

/**
 * Documented synthetic scenario, XAUUSD M5 styling only:
 * - 96 history candles, 1 setup candle, 6 follow-up candles; bar spacing 300 s from a fixed anchor
 *   (2026-01-05 08:00 UTC, chosen arbitrarily; prices are generated, not recorded).
 * - Sell: history drifts up to ~3352, setup candle closes at ENTRY 3349.20,
 *   SL 3355.40 (+6.20), TP1–TP5 = 3345.10 / 3341.00 / 3336.90 / 3332.20 / 3326.00.
 * - Buy: exact mirror of the sell scenario around 3350.00.
 */
export function makeDemoData(direction = "sell", { seed = 5, symbol = "XAUUSD", timeframe = "M5" } = {}) {
  const rnd = mulberry32(seed);
  const step = 300;
  const t0 = Date.UTC(2026, 0, 5, 8, 0, 0) / 1000;
  const history = 96;
  const follow = 6;
  const entry = 3349.2;
  const raw = [];
  // History: a noisy climb that ends right under the setup, then the setup candle and a few quiet bars.
  let price = 3331.5;
  for (let i = 0; i < history; i++) {
    const drift = i < 60 ? 0.14 : 0.3;
    const open = price;
    const close = open + drift + (rnd() - 0.5) * 2.1;
    const high = Math.max(open, close) + rnd() * 0.9;
    const low = Math.min(open, close) - rnd() * 0.9;
    raw.push({ open, high, low, close });
    price = close;
  }
  // Tilt the walk linearly so the last history close lands just under the setup open (no gap candle).
  const setupOpen = 3352.3;
  const tilt = (setupOpen - 0.2 - raw[raw.length - 1].close) / (history - 1);
  raw.forEach((c, i) => {
    const d = tilt * i;
    c.open += i === 0 ? 0 : tilt * (i - 1);
    c.high += d;
    c.low += d;
    c.close += d;
    c.high = Math.max(c.high, c.open, c.close);
    c.low = Math.min(c.low, c.open, c.close);
  });
  raw.push({ open: setupOpen, high: 3353.6, low: entry - 0.5, close: entry });
  price = entry;
  for (let i = 0; i < follow; i++) {
    const open = price;
    const close = open - 0.35 + (rnd() - 0.5) * 1.4;
    raw.push({ open, high: Math.max(open, close) + rnd() * 0.6, low: Math.min(open, close) - rnd() * 0.6, close });
    price = close;
  }
  const pivot = 3350;
  const mirror = direction === "buy";
  const m = (v) => round2(mirror ? 2 * pivot - v : v);
  const candles = raw.map((c, i) => {
    const o = m(c.open);
    const cl = m(c.close);
    const h = mirror ? m(c.low) : m(c.high);
    const l = mirror ? m(c.high) : m(c.low);
    return { time: t0 + i * step, open: o, high: Math.max(h, o, cl), low: Math.min(l, o, cl), close: cl };
  });
  const startTime = t0 + history * step;
  const setup = {
    symbol,
    timeframe,
    direction: mirror ? "buy" : "sell",
    entry: m(entry),
    stopLoss: m(3355.4),
    targets: [3345.1, 3341.0, 3336.9, 3332.2, 3326.0].map(m),
    startTime,
    endTime: startTime + 34 * step,
    source: "demo",
  };
  return { candles, setup };
}

/* ------------------------------------------------------------------------------------------------
 * Series primitive: risk/reward rectangles, level segments and right-edge tags.
 * Coordinates are recomputed from logical indices + prices on every update, so pan, zoom and resize
 * stay aligned with the candles.
 * ---------------------------------------------------------------------------------------------- */

class SetupPrimitive {
  constructor() {
    this._chart = null;
    this._series = null;
    this._requestUpdate = null;
    this._setup = null;
    this._geom = null;
    this._span = null;
    this._range = null;
    this._colors = DEFAULT_COLORS.dark;
    this._opts = { precision: 2, fontFamily: "ui-monospace, Menlo, Consolas, monospace", tp5Open: false };
    this._frame = null;
    this._drawn = null;
    this._views = [
      { zOrder: () => "bottom", renderer: () => ({ draw: (t) => this._drawZones(t) }) },
      { zOrder: () => "top", renderer: () => ({ draw: (t) => this._drawLevels(t) }) },
    ];
  }
  attached({ chart, series, requestUpdate }) {
    this._chart = chart;
    this._series = series;
    this._requestUpdate = requestUpdate;
  }
  detached() {
    this._chart = this._series = this._requestUpdate = null;
  }
  set({ setup, candles, colors, opts }) {
    this._setup = setup;
    this._geom = setup ? setupGeometry(setup) : null;
    this._span = setup ? setupLogicalSpan(setup, candles) : null;
    this._range = setup ? setupPriceRange(setup) : null;
    if (colors) this._colors = colors;
    if (opts) this._opts = { ...this._opts, ...opts };
    this._requestUpdate?.();
  }
  paneViews() {
    return this._views;
  }
  updateAllViews() {
    this._frame = null;
    if (!this._geom || !this._span || !this._chart || !this._series) {
      this._drawn = null;
      return;
    }
    const ts = this._chart.timeScale();
    const x1 = logicalX(ts, this._span.start - 0.5);
    const x2 = logicalX(ts, this._span.end);
    if (x1 == null || x2 == null) return;
    const y = (p) => this._series.priceToCoordinate(p);
    const levels = this._geom.levels.map((l) => ({ ...l, y: y(l.price) }));
    if (levels.some((l) => l.y == null)) return;
    this._frame = { x1, x2, levels };
  }
  autoscaleInfo() {
    return this._range ? { priceRange: { ...this._range } } : null;
  }
  _drawZones(target) {
    const f = this._frame;
    if (!f) return;
    const c = this._colors;
    const byKey = Object.fromEntries(f.levels.map((l) => [l.key, l.y]));
    target.useMediaCoordinateSpace(({ context: ctx }) => {
      const w = f.x2 - f.x1;
      ctx.fillStyle = c.riskFill;
      ctx.fillRect(f.x1, Math.min(byKey.entry, byKey.sl), w, Math.abs(byKey.sl - byKey.entry));
      ctx.fillStyle = c.rewardFill;
      ctx.fillRect(f.x1, Math.min(byKey.entry, byKey.tp5), w, Math.abs(byKey.tp5 - byKey.entry));
    });
  }
  _drawLevels(target) {
    const f = this._frame;
    if (!f) return;
    const c = this._colors;
    const { precision, fontFamily, tp5Open } = this._opts;
    target.useMediaCoordinateSpace(({ context: ctx, mediaSize }) => {
      const right = Math.min(f.x2, mediaSize.width);
      const drawn = { x1: f.x1, x2: f.x2, pane: { width: mediaSize.width, height: mediaSize.height }, levels: f.levels.map((l) => ({ key: l.key, y: l.y })), labels: [] };
      this._drawn = drawn;
      // Segments.
      for (const l of f.levels) {
        const isEntry = l.key === "entry";
        const color = isEntry ? c.entry : l.key === "sl" ? c.sl : c.tp;
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = isEntry ? 2 : 1.25;
        if (l.key === "tp5" && tp5Open) ctx.setLineDash([5, 4]);
        ctx.beginPath();
        const yy = Math.round(l.y) + 0.5;
        ctx.moveTo(f.x1, yy);
        ctx.lineTo(f.x2, yy);
        ctx.stroke();
        ctx.restore();
      }
      if (right - Math.max(f.x1, 0) < 8) return;
      // Tags at the right edge of the boxes (clamped inside the pane), de-collided vertically.
      const fontSize = mediaSize.width < 420 ? 10 : 11;
      const h = fontSize + 7;
      ctx.font = `600 ${fontSize}px ${fontFamily}`;
      ctx.textBaseline = "middle";
      const texts = f.levels.map((l) => {
        const label = l.key === "tp5" && tp5Open ? "TP5 OPEN" : l.label;
        return `${label} ${l.price.toFixed(precision)}`;
      });
      const ys = resolveLabelPositions(
        f.levels.map((l) => ({ y: l.y })),
        { gap: h + 2, top: 0, bottom: mediaSize.height },
      );
      f.levels.forEach((l, i) => {
        const text = texts[i];
        const tw = Math.ceil(ctx.measureText(text).width) + 12;
        const x = Math.max(2, right - tw - 4);
        const yc = ys[i];
        const bg = l.key === "entry" ? c.entry : l.key === "sl" ? c.sl : c.tp;
        const fg = l.key === "entry" ? c.entryText : l.key === "sl" ? c.slText : c.tpText;
        ctx.fillStyle = bg;
        roundRect(ctx, x, yc - h / 2, tw, h, 3);
        ctx.fill();
        if (l.key === "tp5" && tp5Open) {
          ctx.strokeStyle = c.background;
          ctx.setLineDash([3, 2]);
          ctx.lineWidth = 1;
          roundRect(ctx, x + 1.5, yc - h / 2 + 1.5, tw - 3, h - 3, 2);
          ctx.stroke();
          ctx.setLineDash([]);
        }
        ctx.fillStyle = fg;
        ctx.fillText(text, x + 6, yc + 0.5);
        drawn.labels.push({ key: l.key, text, x, y: yc - h / 2, w: tw, h });
      });
    });
  }
}

/**
 * logicalToCoordinate() only resolves whole bar indices (fractions come back as 0), so convert the
 * integer part and add the fraction in bar-spacing units.
 */
function logicalX(ts, logical) {
  const i = Math.floor(logical);
  const x = ts.logicalToCoordinate(i);
  if (x == null) return null;
  return x + (logical - i) * ts.options().barSpacing;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/* ------------------------------------------------------------------------------------------------
 * Mount
 * ---------------------------------------------------------------------------------------------- */

function paletteFor(theme, overrides) {
  const base = DEFAULT_COLORS[theme === "light" ? "light" : "dark"];
  return { ...base, ...(overrides && overrides[theme === "light" ? "light" : "dark"]) };
}

/**
 * Mount the demo chart into `container`.
 * @param lib  { createChart, CandlestickSeries } from lightweight-charts v5 (npm import or window.LightweightCharts)
 * @param container  an element with a height (the chart uses autoSize)
 * @param options  { theme: "dark"|"light", colors: { dark?, light? }, fontFamily, precision, tp5Open,
 *                   data: { candles, setup }, onState(result) }
 * @returns controller { setData, setTheme, setColors, setOptions, resetView, getState, destroy }
 */
export function mountAlgoPreview(lib, container, options = {}) {
  if (!lib || typeof lib.createChart !== "function" || !lib.CandlestickSeries) {
    throw new Error("mountAlgoPreview: pass the lightweight-charts v5 module ({ createChart, CandlestickSeries })");
  }
  let theme = options.theme === "light" ? "light" : "dark";
  let overrides = options.colors || null;
  const opts = {
    precision: Number.isInteger(options.precision) ? options.precision : 2,
    fontFamily: options.fontFamily || "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
    tp5Open: Boolean(options.tp5Open),
  };
  let current = { state: "empty", candles: [], setup: null, errors: [] };
  let destroyed = false;

  const chart = lib.createChart(container, {
    autoSize: true,
    layout: { attributionLogo: true, fontFamily: opts.fontFamily, fontSize: 11 },
    handleScroll: { vertTouchDrag: false },
    timeScale: { timeVisible: true, secondsVisible: false, rightOffset: 6 },
    rightPriceScale: { scaleMargins: { top: 0.08, bottom: 0.08 } },
    crosshair: { mode: 0 },
  });
  const series = chart.addSeries(lib.CandlestickSeries, {
    borderVisible: false,
    priceLineVisible: false,
    lastValueVisible: false,
    priceFormat: { type: "price", precision: opts.precision, minMove: 1 / 10 ** opts.precision },
  });
  const primitive = new SetupPrimitive();
  series.attachPrimitive(primitive);

  function applyTheme() {
    const c = paletteFor(theme, overrides);
    chart.applyOptions({
      layout: { background: { type: "solid", color: c.background }, textColor: c.text },
      grid: {
        vertLines: { visible: false, color: "transparent" },
        horzLines: { visible: false, color: "transparent" },
      },
      timeScale: { borderColor: c.border },
      rightPriceScale: { borderColor: c.border },
      crosshair: { vertLine: { color: c.crosshair, labelBackgroundColor: c.border }, horzLine: { color: c.crosshair, labelBackgroundColor: c.border } },
    });
    series.applyOptions({ upColor: c.up, downColor: c.down, wickUpColor: c.up, wickDownColor: c.down });
    primitive.set({ setup: current.setup, candles: current.candles, colors: c, opts });
  }

  function resetView() {
    if (destroyed) return;
    const ts = chart.timeScale();
    if (!current.candles.length) return;
    const span = current.setup ? setupLogicalSpan(current.setup, current.candles) : null;
    ts.setVisibleLogicalRange(defaultVisibleRange({ candleCount: current.candles.length, span, width: container.clientWidth }));
    chart.priceScale("right").applyOptions({ autoScale: true });
  }

  function setData(data) {
    if (destroyed) return current;
    current = validatePreviewData(data);
    series.setData(current.candles);
    primitive.set({ setup: current.setup, candles: current.candles, colors: paletteFor(theme, overrides), opts });
    resetView();
    options.onState?.({ state: current.state, errors: current.errors.slice() });
    return { state: current.state, errors: current.errors.slice() };
  }

  applyTheme();
  if (options.data) setData(options.data);

  return {
    setData,
    resetView,
    setTheme(next) {
      theme = next === "light" ? "light" : "dark";
      applyTheme();
    },
    setColors(next) {
      overrides = next || null;
      applyTheme();
    },
    setOptions(next = {}) {
      if (typeof next.tp5Open === "boolean") opts.tp5Open = next.tp5Open;
      applyTheme();
    },
    getState: () => ({ state: current.state, errors: current.errors.slice(), setup: current.setup }),
    /** Test hook: pixel geometry of the drawn frame (null when nothing is drawn). */
    debugFrame: () => {
      primitive.updateAllViews();
      const f = primitive._frame;
      return f ? { x1: f.x1, x2: f.x2, levels: f.levels.map((l) => ({ key: l.key, price: l.price, y: l.y })) } : null;
    },
    /** Test hook: what the last paint actually drew (segments, tag rectangles, pane size). */
    debugDrawn: () => primitive._drawn,
    chart,
    series,
    destroy() {
      if (destroyed) return;
      destroyed = true;
      series.detachPrimitive(primitive);
      chart.remove();
    },
  };
}
