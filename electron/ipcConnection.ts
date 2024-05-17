import { KeyedData } from './../types/KeyedData';
import { DefinjectedData } from './../types/DefInjectedData';
import { dialog, ipcMain } from 'electron';

import { ipcNames } from '../types/ipcNames';
import { outputTranslate, readFileTranslate } from './helpers';

export const ipConnection = () => {

    ipcMain.handle("read-file-translate" as ipcNames, async(e, args)=>{
        const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ["openFile"] });

        if ( canceled === false )  return readFileTranslate( filePaths[0] );
        return null;
    })

    ipcMain.handle("generate-files-translate" as ipcNames, async(e, args: { keyedData: KeyedData[], defInjectedData: DefinjectedData[], prefix: string })=>{
        const { defInjectedData, keyedData, prefix } = args;

        outputTranslate({ 
            defInjected: defInjectedData,
            keyed: keyedData, 
            prefix
        });
    })

}