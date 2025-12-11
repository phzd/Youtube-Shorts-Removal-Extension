const toggleGuide = document.getElementById("removeShortsGuide");
const toggleFeed = document.getElementById("removeShortsFeed");

chrome.storage.sync.get(["removeShortsGuide", "removeShortsFeed"], data => {
  toggleGuide.checked = data.removeShortsGuide !== false;
  toggleFeed.checked = data.removeShortsFeed !== false;
});

const updateSettings = () => {
  const settings = {
    removeShortsGuide: toggleGuide.checked,
    removeShortsFeed: toggleFeed.checked
  };
  
  chrome.storage.sync.set(settings);
  chrome.runtime.sendMessage(settings);
};

toggleGuide.addEventListener("change", updateSettings);
toggleFeed.addEventListener("change", updateSettings);