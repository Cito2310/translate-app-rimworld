import { KeyedData } from './../types/KeyedData';
import { DefinjectedData } from './../types/DefInjectedData';
import { dialog, ipcMain } from 'electron';

import { ipcNames } from '../types/ipcNames';
import { excludeData, outputTranslate, readFileTranslate } from './helpers';

export const ipConnection = () => {

    ipcMain.handle("read-file-translate" as ipcNames, async(e, args)=>{
        const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ["openFile"] });

        if ( canceled === false )  return readFileTranslate( filePaths[0] );
        return null;
    })

    ipcMain.handle("get-data-with-exception" as ipcNames, async(e, args: { excludeData: string[][], baseData: string[][] })=>{
        const dataWithExclusion = excludeData( args.baseData, args.excludeData )
        return dataWithExclusion;
    })

    ipcMain.handle("generate-files-translate" as ipcNames, async(e, args: { keyedData: KeyedData[], defInjectedData: DefinjectedData[], prefix?: string })=>{
        const { defInjectedData, keyedData, prefix } = args;

        outputTranslate({ 
            defInjected: defInjectedData,
            keyed: keyedData, 
            prefix
        });
    })

}