import { DefinjectedData } from './../types/DefInjectedData';
import { KeyedData } from "../types/KeyedData"
import { ipcNames } from "../types/ipcNames"

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    readFileTranslate: () => ipcRenderer.invoke('read-file-translate' as ipcNames),
    getDataWithException: ( baseData: string[][], excludeData: string[][] ) => ipcRenderer.invoke("get-data-with-exception" as ipcNames, { baseData, excludeData }),
    generateFilesTranslate: ( keyedData: KeyedData, defInjectedData: DefinjectedData, prefix?: string ) => ipcRenderer.invoke("generate-files-translate" as ipcNames, { keyedData, defInjectedData, prefix }),
})