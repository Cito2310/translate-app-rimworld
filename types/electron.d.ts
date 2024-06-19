declare global {
    interface Window {
        electronAPI: {
            readFileTranslate: () => Promise<string[][]>,
            generateFilesTranslate: ( keyedData: KeyedData, defInjectedData: DefinjectedData, prefix: string ) => Promise<undefined>,


            appClose: () => Promise<undefined>,
            appMaximize: () => Promise<undefined>,
            appMinimize: () => Promise<undefined>,
        }
    }
}

export {}