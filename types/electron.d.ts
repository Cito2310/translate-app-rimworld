declare global {
    interface Window {
        electronAPI: {
            readFileTranslate: () => Promise<string[][]>,
            getDataWithException: ( baseData: string[][], excludeData: string[][] ) => Promise<string[][]>,
            generateFilesTranslate: ( keyedData: KeyedData, defInjectedData: DefinjectedData, prefix?: string ) => Promise<undefined>,
        }
    }
}

export {}