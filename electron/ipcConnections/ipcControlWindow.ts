import { BrowserWindow, ipcMain } from "electron"
import { ipcNames } from "../../types/ipcNames"

export const ipcControlWindow = (app: Electron.App, win: BrowserWindow) => {
    ipcMain.handle("app-close" as ipcNames, async(e, args)=>{
        app.quit()
    })

    ipcMain.handle("app-maximize" as ipcNames, async(e, args)=>{
        if(win.isMaximized()) { win.unmaximize() } 
        else { win.maximize() }
    })

    ipcMain.handle("app-minimize" as ipcNames, async(e, args)=>{
        win.minimize()
    })
}