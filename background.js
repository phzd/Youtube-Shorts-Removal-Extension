chrome.runtime.onMessage.addListener((msg) => {
  const icon = msg.enabled ? "icon-on-32.png" : "icon-off-32.png";
  chrome.action.setIcon({ path: icon });
});
