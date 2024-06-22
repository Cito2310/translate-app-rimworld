import { BrowserWindow, dialog, ipcMain } from "electron";
import { ipcNames } from "../../types/ipcNames";
import { readFileSync, writeFileSync } from "fs";
import { DataTranslateState } from "../../src/store/dataTranslate/dataTranslateSlice";
import path = require("path");

export const ipcControlTranslateProject = (app: Electron.App, win: BrowserWindow) => {


    ipcMain.handle("read-translate-project" as ipcNames, async(e, args):  Promise<DataTranslateState | null>  =>{
        const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ["openFile"], filters: [
            { name: "Translate-Project-File", extensions: ["json"] }
        ] });

        if ( canceled === false ) {
            const TranslateProjectData = readFileSync(filePaths[0], "utf-8");
            return JSON.parse(TranslateProjectData);
        }

        return null
    })

    ipcMain.handle("save-translate-project" as ipcNames, async(e, args: { data: DataTranslateState }):  Promise<void>  =>{
        const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ["openDirectory"]});

        if ( canceled === false ) {
            const pathFile = path.join(filePaths[0], args.data.name.split(" ").join("_")+"_Translate")
            writeFileSync(pathFile, JSON.stringify(args.data), "utf-8");
        }
    })


}