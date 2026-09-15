// FAQ content for the page's FAQ section. Classic script (not a module) so it
// loads over file:// like the other data/*.js files. Each item's `a` is an array
// of paragraphs: a plain string, or {parts:[...]} where each part is {text} or {em}.
// Franchise-specific items first, then the generic items every list shares
// (data/common-faq.js, owned by kit) — see that file for the sync rationale.
window.FAQ_ITEMS = [
  {
    q: "Do I need to play the franchise in order?",
    a: ["No. You can play the Kingdom Hearts franchise in any order, though the mainline entries build directly on each other's story."],
  },
  {
    q: "Why is a Kingdom Hearts title missing?",
    a: ["It may have come out after the last update of this list, check last updated at the bottom of the page and if so, please submit it!"],
  },
  ...window.FAQ_ITEMS_COMMON,
];
