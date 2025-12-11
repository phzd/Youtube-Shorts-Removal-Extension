const toggleGuide = document.getElementById("removeShortsGuide");
const toggleFeed = document.getElementById("removeShortsFeed");
const togglePlayables = document.getElementById("removePlayables");

chrome.storage.sync.get(["removeShortsGuide", "removeShortsFeed", "removePlayables"], data => {
  toggleGuide.checked = data.removeShortsGuide !== false;
  toggleFeed.checked = data.removeShortsFeed !== false;
  togglePlayables.checked = data.removePlayables !== false;
});

const updateSettings = () => {
  const settings = {
    removeShortsGuide: toggleGuide.checked,
    removeShortsFeed: toggleFeed.checked,
    removePlayables: togglePlayables.checked
  };
  
  chrome.storage.sync.set(settings);
  chrome.runtime.sendMessage(settings);
};

toggleGuide.addEventListener("change", updateSettings);
toggleFeed.addEventListener("change", updateSettings);
togglePlayables.addEventListener("change", updateSettings);