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

const removePlayables = () => {
  const shelves = document.querySelectorAll('ytd-rich-shelf-renderer');
  shelves.forEach(shelf => {
    const hasPlayables = shelf.querySelector('ytd-mini-game-card-view-model');
    if (hasPlayables) {
      const section = shelf.closest('ytd-rich-section-renderer');
      if (section) section.remove();
    }
  });
};

const tryRemove = () => {
  chrome.storage.sync.get(["removeShortsGuide", "removeShortsFeed", "removePlayables"], data => {
    if (data.removeShortsGuide !== false) removeShortsGuideItem();
    if (data.removeShortsFeed !== false) removeShortsFeed();
    if (data.removePlayables !== false) removePlayables();
  });
};

tryRemove();

chrome.runtime.onMessage.addListener(msg => {
  if (msg.removeShortsGuide !== undefined || msg.removeShortsFeed !== undefined || msg.removePlayables !== undefined) {
    tryRemove();
  }
});

const obs = new MutationObserver(() => tryRemove());
obs.observe(document.body, { childList: true, subtree: true });