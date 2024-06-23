import { app, BrowserWindow } from 'electron';
import * as path from 'path';

import { ipConnection } from './ipcConnection';

let win: BrowserWindow;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      // contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: "icon.ico",
    frame: false,
    backgroundColor: "#1f1f1f"
  })

  win.maximize();
  win.show();

  if (app.isPackaged) {
    // 'build/index.html'
    win.loadURL(`file://${__dirname}/../index.html`);
  } else {
    win.loadURL('http://localhost:3000/index.html');

    // win.webContents.openDevTools();
  }


  win.webContents.on('before-input-event', (_, input) => {
    if (input.type === 'keyDown' && input.key === 'F12') {
      win.webContents.isDevToolsOpened()
        ? win.webContents.closeDevTools()
        : win.webContents.openDevTools({ mode: "right" });
    }
});
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  ipConnection(app, win);
});
