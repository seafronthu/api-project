import EventEmitter from "events";
import electron, { BrowserWindow, BrowserWindowConstructorOptions } from "electron";
import isDev from "electron-is-dev";
const { app } = electron;
// 使用该实例管理 BrowserWindow
class Application extends EventEmitter.EventEmitter {
  rendererProcess = new Set<BrowserWindow>();
  constructor() {
    super();
    app.on("browser-window-blur", this.emit.bind(this, "onHide"));
    app.on("browser-window-focus", this.emit.bind(this, "onShow"));
  }
  get currentWindow() {
    return BrowserWindow.getFocusedWindow();
  }
  create(url: string, options?: BrowserWindowConstructorOptions, query?: electron.LoadURLOptions | electron.LoadFileOptions) {
    let start: number;
    if (!options) {
      const { size } = electron.screen.getPrimaryDisplay();
      options = {
        backgroundColor: "#ececec",
        width: size.width,
        height: size.height,
        minWidth: 320,
        minHeight: 500,
        webPreferences: {
          nodeIntegration: true
        }
      };
    }
    const newWindow = new BrowserWindow(options);
    if (!options.show) {
      newWindow.once("ready-to-show", () => {
        console.log("start time: ", Date.now() - start);
        newWindow.show();
      });
    }

    start = Date.now();
    if (/^http/.test(url)) {
      newWindow.loadURL(url, query as electron.LoadURLOptions | undefined);
    } else {
      newWindow.loadFile(url, query as electron.LoadFileOptions | undefined);
    }
    if (isDev) {
      // Open the DevTools.
      newWindow.webContents.openDevTools();
    }
    this._register(newWindow);
    return newWindow;
  }
  _register(win: BrowserWindow) {
    this.rendererProcess.add(win);
    win.on("closed", () => {
      this.rendererProcess.delete(win);
      if (!BrowserWindow.getFocusedWindow()) {
        this.emit("onHide");
      }
    });
    this.emit("onShow");
  }
  /**
   * 与所有WebContents同学
   * @param action 行为
   * @param args 参数
   */
  dispatch(action: string, args: any) {
    this.rendererProcess.forEach(win => {
      if (win && win.webContents) {
        win.webContents.send("action", action, args);
      }
    });
  }
}
export default new Application();
