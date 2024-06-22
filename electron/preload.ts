import { DefinjectedData } from './../types/DefInjectedData';
import { KeyedData } from "../types/KeyedData"
import { ipcNames } from "../types/ipcNames"
import { DataTranslateState } from '../src/store/dataTranslate/dataTranslateSlice';

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    readFileTranslate: () => ipcRenderer.invoke('read-file-translate' as ipcNames),
    generateFilesTranslate: ({ keyedData, defInjectedData, prefix, fileTranslate }: {
        keyedData: KeyedData[];
        defInjectedData: DefinjectedData[];
        prefix: string;
        fileTranslate: DataTranslateState;
    }) => ipcRenderer.invoke("generate-files-translate" as ipcNames, { keyedData, defInjectedData, prefix, fileTranslate }),

    // APPLICATION CONTROL WINDOW
    appClose: () => ipcRenderer.invoke("app-close" as ipcNames),
    appMaximize: () => ipcRenderer.invoke("app-maximize" as ipcNames),
    appMinimize: () => ipcRenderer.invoke("app-minimize" as ipcNames),
})