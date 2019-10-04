import { app, BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
// const widevine = require('electron-widevinecdm');

// widevine.load(app);
app.commandLine.appendSwitch(
  'widevine-cdm-path',
  '/Applications/Google Chrome.app/Contents/Frameworks/Google Chrome Framework.framework/Versions/77.0.3865.90/Libraries/WidevineCdm/_platform_specific/mac_x64/ibwidevinecdm.dylib'
);
// The version of plugin can be got from `chrome://plugins` page in Chrome.
app.commandLine.appendSwitch('widevine-cdm-version', '4.10.1503.4');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow | null = null;

const windowOptions: BrowserWindowConstructorOptions = {
  height: 800,
  width: 1400,
  title: 'Theater.app',
  webPreferences: {
    webviewTag: true,
    nodeIntegration: true,
    plugins: true,
    // sandbox: true,
  },
};

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    ...windowOptions,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

app.on('widevine-ready', (version, lastVersion) => {
  if (null !== lastVersion) {
    console.log(
      'Widevine ' + version + ', upgraded from ' + lastVersion + ', is ready to be used!'
    );
  } else {
    console.log('Widevine ' + version + ' is ready to be used!');
  }
});
