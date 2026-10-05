// Starter configuration. Edit freely; nothing here is secret.
export const CONFIG = {
  // Bare origin of the member dashboard. The CTAs link to
  //   <origin>/signup?product=fxgoat-algo-v4&source=public-preview   and   <origin>/login
  // Leave "" until the dashboard signup is deployed: the CTA then says it opens when the dashboard launches.
  // Local review: "http://localhost:3100". Production (once live): "https://dashboard.fxgoat.com".
  dashboardOrigin: "",
  product: "fxgoat-algo-v4",
  source: "public-preview",

  // Initial chart theme: "dark" or "light".
  theme: "dark",
  // Show TP5 as "TP5 OPEN" with a dashed line (the TP5 price is still shown).
  tp5Open: false,
  // Price decimals.
  precision: 2,
  // Chart font. System fonts only: the starter ships no font files.
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",

  // Per-theme colour overrides. Any key of DEFAULT_COLORS in fxgoat-algo-core.js:
  // background, text, grid, border, crosshair, up, down, entry, entryText, sl, slText, tp, tpText, riskFill, rewardFill
  colors: {
    dark: {},
    light: {},
  },
};
