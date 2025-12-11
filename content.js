const removeShortsGuideItem = () => {
  const anchors = document.querySelectorAll('a#endpoint[title="Shorts"]');
  anchors.forEach(a => {
    const entry = a.closest('ytd-guide-entry-renderer');
    if (entry) entry.remove();
  });
};

const removeShortsFeed = () => {
  const shelves = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');
  shelves.forEach(shelf => {
    const section = shelf.closest('ytd-rich-section-renderer');
    if (section) section.remove();
  });
};

const tryRemove = () => {
  chrome.storage.sync.get(["removeShortsGuide", "removeShortsFeed"], data => {
    if (data.removeShortsGuide !== false) removeShortsGuideItem();
    if (data.removeShortsFeed !== false) removeShortsFeed();
  });
};

tryRemove();

chrome.runtime.onMessage.addListener(msg => {
  if (msg.removeShortsGuide !== undefined || msg.removeShortsFeed !== undefined) {
    tryRemove();
  }
});

const obs = new MutationObserver(() => tryRemove());
obs.observe(document.body, { childList: true, subtree: true });