import { DefinjectedData } from './../types/DefInjectedData';
import { KeyedData } from "../types/KeyedData"
import { ipcNames } from "../types/ipcNames"

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    readFileTranslate: () => ipcRenderer.invoke('read-file-translate' as ipcNames),
    generateFilesTranslate: ( keyedData: KeyedData, defInjectedData: DefinjectedData, prefix: string ) => ipcRenderer.invoke("generate-files-translate" as ipcNames, { keyedData, defInjectedData, prefix }),

    // APPLICATION CONTROL WINDOW
    appClose: () => ipcRenderer.invoke("app-close" as ipcNames),
    appMaximize: () => ipcRenderer.invoke("app-maximize" as ipcNames),
    appMinimize: () => ipcRenderer.invoke("app-minimize" as ipcNames),
})