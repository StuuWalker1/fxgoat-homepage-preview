# FX GOAT ALGO V4 — demo chart starter (standalone HTML/JS)

A dependency-free starter that renders the same **visual demo** as the FX GOAT website's ALGO panel:
candlesticks, a yellow ENTRY level, a red SL level with a red risk zone (SL ↔ ENTRY), and five green
TP1–TP5 levels with a green reward zone (ENTRY ↔ TP5). Boxes start at the setup candle and extend right;
tags sit at the right edge of the boxes.

> **Demo only.** The built-in data is synthetic (generated, not recorded). It is not market data, not a
> trade signal and not a backtest. This code draws levels it is given; it contains no Pine code, strategy
> formulas or signal logic, and it never fetches data on its own.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page markup, JSON data slot, script tags. No inline script or style (works under a strict CSP). |
| `starter.js` | Wires controls, CTA links and data into the core. |
| `config.js` | Dashboard origin (CTA target), theme, colours, TP5 OPEN style, precision, font. |
| `starter.css` | Page styling (FX GOAT graphite/gold). System fonts only: no font files are shipped. |
| `fxgoat-algo-core.js` | **Shared** renderer + validation. Identical copy of `src/lib/algo-preview/fxgoat-algo-core.js` from the website repo (`npm run sync:algo-starter`; a test fails if it drifts). |
| `vendor/lightweight-charts.standalone.production.js` | TradingView Lightweight Charts™ v5.2.1 standalone bundle, vendored from npm. |
| `vendor/LICENSE`, `vendor/NOTICE` | Apache-2.0 licence and upstream NOTICE for Lightweight Charts. Keep them with the bundle. |

## Run it

ES modules do not load from `file://`, so serve the folder over http(s), for example:

```sh
python -m http.server 8080      # then open http://localhost:8080/
# or: npx serve .
```

Review switches (synthetic data only): `?scenario=buy` (default), `?scenario=sell`, `?scenario=none`
(candles, no setup), `?scenario=empty` (no data).

## Configure

Edit `config.js`:

- `dashboardOrigin`: bare origin of the member dashboard, e.g. `http://localhost:3100` locally or
  `https://dashboard.fxgoat.com` once it is live. The primary CTA links to
  `<origin>/signup?product=fxgoat-algo-v4&source=public-preview`, the secondary to `<origin>/login`.
  Must be https (http only for localhost). **Leave it empty until the production signup is deployed**: the
  CTA then reads "Member signup opens when the FX GOAT dashboard launches" instead of a dead link.
- `theme`: `"dark"` or `"light"` (the page also has a toggle).
- `colors.dark` / `colors.light`: override any palette key: `background, text, grid, border, crosshair,
  up, down, entry, entryText, sl, slText, tp, tpText, riskFill, rewardFill`.
- `tp5Open`: draws TP5 as `TP5 OPEN <price>` with a dashed line. The TP5 price is always shown.

## Inject levels from a backend

Data contract (validated before drawing; invalid data is refused, never partially drawn):

```json
{
  "candles": [{ "time": 1767628800, "open": 3352.3, "high": 3353.6, "low": 3348.7, "close": 3349.2 }],
  "setup": {
    "symbol": "XAUUSD", "timeframe": "M5", "direction": "sell",
    "entry": 3349.2, "stopLoss": 3355.4, "targets": [3345.1, 3341.0, 3336.9, 3332.2, 3326.0],
    "startTime": 1767628800, "endTime": 1767639000, "source": "demo"
  }
}
```

Rules: `time`/`startTime`/`endTime` are integer UTC seconds; candle times strictly ascending; OHLC finite,
positive, `high ≥ max(open, close)`, `low ≤ min(open, close)`; exactly five targets;
buy → `SL < ENTRY < TP1 < … < TP5`, sell → `SL > ENTRY > TP1 > … > TP5`; `startTime` must equal a candle
time (the setup candle); `endTime > startTime` (may be beyond the last candle); `source` must be `"demo"`.
`"setup": null` renders candles with a "No setup" note.

1. **Server-rendered JSON** (CSP-friendly): write the JSON into
   `<script type="application/json" id="fxgoat-algo-data">…</script>` in `index.html`. Escape `<` as `\u003c` when serialising.
2. **JavaScript API**: after load, `window.fxgoatAlgo.setData({ candles, setup })` returns
   `{ state, errors }` where `state` is `ready | no-setup | invalid-setup | empty | invalid-candles`.

There is deliberately no live member endpoint here: wiring real data is separate work and must stay behind
the dashboard's authentication and entitlement checks.

## Licence and attribution

Lightweight Charts™ is © TradingView, Inc., licensed under Apache-2.0 (`vendor/LICENSE`). Its NOTICE
(`vendor/NOTICE`) must accompany the bundle and a link to https://www.tradingview.com/ must be shown to users:
the chart's built-in attribution logo (`layout.attributionLogo: true`) and the caption under the chart do this.
Do not remove them.
