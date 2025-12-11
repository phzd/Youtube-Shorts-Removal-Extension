chrome.runtime.onMessage.addListener((msg) => {
  const icon = msg.enabled ? "images/icon-on-32.png" : "images/icon-off-32.png";
  chrome.action.setIcon({ path: icon });
});
