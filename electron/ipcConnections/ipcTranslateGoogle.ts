import { BrowserWindow, ipcMain, shell } from "electron";
import { ipcNames } from "../../types/ipcNames";
import translate from "google-translate-open-api";
// import { translate } from '@vitalets/google-translate-api';
// import { translate } from '@vitalets/google-translate-api';

export const ipcTranslateGoogle = (app: Electron.App, win: BrowserWindow) => {

    ipcMain.handle("translate-google" as ipcNames, async(e, args: string): Promise<void> =>{
        const textParsed = args.split(" ").join("%20")
        shell.openExternal(`https://translate.google.com/?hl=es&sl=auto&tl=es&text=${textParsed}&op=translate`)
    })

}