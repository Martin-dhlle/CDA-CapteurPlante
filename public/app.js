const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1500,
    height: 1200,
  });

  win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  createWindow();
});
