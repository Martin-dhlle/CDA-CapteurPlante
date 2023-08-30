const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

const isMacos = process.platform === "darwin"; // savoir si l'environnement est macOs

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1500,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  isDev
    ? win.loadURL("http://localhost:3000")
    : win.loadFile(`${path.join(__dirname, "../build/index.html")}`);
};

app.whenReady().then(() => {
  createWindow();
});

/**
 * Si le système exploitation n'est pas macOs,
 * alors quitter l'application.
 */
app.on("window-all-closed", () => !isMacos && app.quit());
