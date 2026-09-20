// FAQ content for the page's FAQ section. Classic script (not a module) so it
// loads over file:// like the other data/*.js files. Each item's `a` is an array
// of paragraphs: a plain string, or {parts:[...]} where each part is {text} or {em}.
// Franchise-specific items first, then the generic items every list shares
// (data/common-faq.js, owned by kit) — see that file for the sync rationale.
// Every entry needs a stable, hand-picked `id` (kebab-case) for its pilcrow
// anchor — see common-faq.js for why it can't be derived from the question.
// schema: faq.schema.json
window.FAQ_ITEMS = [
  {
    id: "play-in-order",
    q: "Do I need to play the franchise in order?",
    a: ["No. You can play the Kingdom Hearts franchise in any order, though the mainline entries build directly on each other's story."],
  },
  ...window.FAQ_ITEMS_COMMON,
];
