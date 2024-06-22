import { BrowserWindow, dialog, ipcMain } from "electron";
import { ipcNames } from "../../types/ipcNames";
import { readFileSync } from "fs";

export const ipcReadFileTranslate = (app: Electron.App, win: BrowserWindow) => {

    ipcMain.handle("read-file-translate" as ipcNames, async(e, args)=>{
        const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ["openFile"] });

        if ( canceled === false ) {

            const read = readFileSync( filePaths[0], "utf-8" );
            const splitText = read.split("\r\n");

            return splitText.reduce<string[][]>((prev, curr) => { 
                if ( curr[0] === "=" ) return [...prev, [curr]];
            
                if (curr.length) prev[prev.length-1]?.push( curr );
            
                return prev;
            }, []);
        }

        return null;
    })

}