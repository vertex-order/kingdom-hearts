// site/data/site.js -- owned by this repo, not vendored.
// schema: site-config.schema.json
window.SITE_CONFIG = {
  name: "Kingdom Hearts",
  // No storagePrefix: this repo has no production visitors yet, so there's
  // nothing to preserve -- page.dc.html derives a stable one ("kingdomHeartsPlayOrder")
  // from `name` instead. Set this explicitly, once, before this repo has real
  // visitors with saved checklist/theme state, and never change it after.
  tagline: [
    { text: "A recommended way to experience the Kingdom Hearts franchise, listing the mainline games alongside their remakes, manga, and novels. Optional extras are marked — skip them and the series still holds together." }
  ],
  description: "A recommended order for playing the Kingdom Hearts games, remakes, manga, and novels — Vertex Order.",
  lastUpdated: "2026-08-01",
  entities: ["Disney", "Square Enix"],
  noticeUrl: "https://github.com/vertex-order/kingdom-hearts/blob/main/NOTICE.md",
  discussionsUrl: "https://github.com/vertex-order/kingdom-hearts/discussions",
};
