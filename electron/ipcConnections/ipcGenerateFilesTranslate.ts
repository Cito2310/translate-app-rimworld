import { BrowserWindow, ipcMain } from "electron";
import { KeyedData } from "../../types/KeyedData";
import { DefinjectedData } from "../../types/DefInjectedData";
import { DataTranslateState } from "../../src/store/dataTranslate/dataTranslateSlice";
import { ipcNames } from "../../types/ipcNames";
import { outputTranslate } from "../helpers";

export const ipcGenerateFilesTranslate = (app: Electron.App, win: BrowserWindow) => {
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
}