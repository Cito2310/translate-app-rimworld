import { DefinjectedData } from './../types/DefInjectedData';
import { KeyedData } from "../types/KeyedData"
import { ipcNames } from "../types/ipcNames"
import { DataTranslateState } from '../src/store/dataTranslate/dataTranslateSlice';

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {

    // READ FILE TRANSLATE
    readFileTranslate: () => ipcRenderer.invoke('read-file-translate' as ipcNames),

    // GENERATE FILES TRANSLATE
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
    
    // CONTROL TRANSLATE PROJECT
    readTranslateProject: () => ipcRenderer.invoke("read-translate-project" as ipcNames),
    saveTranslateProject: ({ data }: { data: DataTranslateState }) => ipcRenderer.invoke("save-translate-project" as ipcNames, {data}),

    // GOOGLE TRANSLATE
    translateGoogle: (text: string) => ipcRenderer.invoke("translate-google" as ipcNames, text)

})