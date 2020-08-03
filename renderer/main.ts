// Modules to control application life and create native browser window
import electron from "electron";
import path from "path";
// const path = require("path");
import isDev from "electron-is-dev";
import Application from "./application";
const { app, BrowserWindow } = electron;
function createWindow() {
  // Create the browser window.
  const { size } = electron.screen.getPrimaryDisplay();
  let url: string;
  if (isDev) {
    url = "http://localhost:3000";
  } else {
    url = path.resolve(__dirname, "../build/index.html");
  }
  Application.create(url, {
    width: size.width,
    height: size.height,
    // show: false,
    minWidth: 800,
    minHeight: 600,
    // frame: false,
    // titleBarStyle: "hidden",
    webPreferences: {
      // webviewTag: true,
      // preload: path.join(__dirname, "preload.js")
    }
  });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
