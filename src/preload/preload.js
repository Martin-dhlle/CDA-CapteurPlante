const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  sendApiKey: (apiUrl, apiKey) => {
    ipcRenderer.send("apiKey", { apiUrl, apiKey });
  },
});
