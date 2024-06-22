import { KeyedData } from './../types/KeyedData';
import { DefinjectedData } from './../types/DefInjectedData';
import { BrowserWindow, dialog, ipcMain } from 'electron';

import { ipcNames } from '../types/ipcNames';
import { outputTranslate, readFileTranslate } from './helpers';
import { DataTranslateState } from '../src/store/dataTranslate/dataTranslateSlice';

export const ipConnection = (app: Electron.App, win: BrowserWindow) => {

    ipcMain.handle("read-file-translate" as ipcNames, async(e, args)=>{
        const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ["openFile"] });

        if ( canceled === false )  return readFileTranslate( filePaths[0] );
        return null;
    })

    ipcMain.handle("generate-files-translate" as ipcNames, async(e, args: { 
        keyedData: KeyedData[], 
        defInjectedData: DefinjectedData[], 
        prefix: string, 
        fileTranslate: DataTranslateState
    })=>{
        const { defInjectedData, keyedData, prefix, fileTranslate } = args;

        outputTranslate({ 
            defInjected: defInjectedData,
            keyed: keyedData, 
            prefix,
            fileTranslate,
        });
    })




    // APPLICATION CONTROL WINDOW
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