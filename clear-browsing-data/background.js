chrome.windows.onRemoved.addListener((_) => {
    var callback = function () {
        console.log('[Extension] Clearing all browsing data')
      };
    chrome.browsingData.remove({
    "since": 0
    }, {
    "appcache": true,
    "cache": true,
    "cacheStorage": true,
    "cookies": true,
    "downloads": true,
    "fileSystems": true,
    "formData": true,
    "history": true,
    "indexedDB": true,
    "localStorage": true,
    "passwords": true,
    "serviceWorkers": true,
    "webSQL": true
    }, callback);
  });
  