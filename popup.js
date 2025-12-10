const toggle = document.getElementById("toggle");

chrome.storage.sync.get("enabled", data => {
  toggle.checked = data.enabled !== false; // default true
});

toggle.addEventListener("change", () => {
  const enabled = toggle.checked;
  chrome.storage.sync.set({ enabled });
  chrome.runtime.sendMessage({ enabled });
});
