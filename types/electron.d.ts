import { DataTranslateState } from "../src/store/dataTranslate/dataTranslateSlice";
import { DefinjectedData } from "./DefInjectedData"
import { KeyedData } from "./KeyedData"

declare global {
    interface Window {
        electronAPI: {
            readFileTranslate: () => Promise<string[][]>,
            generateFilesTranslate: ({ 
                keyedData,
                defInjectedData,
                prefix,
                fileTranslate,
            }: {
                keyedData: KeyedData[]; 
                defInjectedData: DefinjectedData[]; 
                prefix: string; 
                fileTranslate: DataTranslateState;
            }) => Promise<void>,


            appClose: () => Promise<void>,
            appMaximize: () => Promise<void>,
            appMinimize: () => Promise<void>,
        }
    }
}

export {}