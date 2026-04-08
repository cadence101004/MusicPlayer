// electron window functionality
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 700,
    height: 900,
    resizable: false,
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",
    alwaysOnTop: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true
    }
  });

  win.loadFile("index.html");

  win.webContents.on("did-finish-load", () => {
    win.webContents.setZoomFactor(0.75);
  });
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.on("minimize", () => {
    win.minimize();
  });

  ipcMain.on("close", () => {
    win.close();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});