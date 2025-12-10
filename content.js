const removeShortsGuideItem = () => {
  const anchors = document.querySelectorAll('a#endpoint[title="Shorts"]');
  anchors.forEach(a => {
    const entry = a.closest('ytd-guide-entry-renderer');
    if (entry) entry.remove();
  });
};

const tryRemove = () => {
  chrome.storage.sync.get("enabled", data => {
    if (data.enabled === false) return;
    removeShortsGuideItem();
  });
};

// do it once
tryRemove();

// listen for changes
chrome.runtime.onMessage.addListener(msg => {
  if (msg.enabled) tryRemove();
});

// observe DOM changes still
const obs = new MutationObserver(() => tryRemove());
obs.observe(document.body, { childList: true, subtree: true });
