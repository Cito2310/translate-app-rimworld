import { useEffect, useState } from "react";
import { getKeyedTranslation } from "../helpers/getKeyedTranslation";
import { getDefInjected } from "../helpers/getDefInjected";
import { DefinjectedData } from "../../types/DefInjectedData";
import { KeyedData } from "../../types/KeyedData";

export const useSetData = () => {
    const [baseData, setBaseData] = useState<string[][]>([]);
    const [excludeData, setExcludeData] = useState<string[][]>([]);
    const [dataWithException, setDataWithException] = useState<string[][]>([]);

    const [keyed, setKeyed] = useState<KeyedData[]>([]);
    const [defInjected, setDefInjected] = useState<DefinjectedData[]>([]);

    const keyDataExclude = "data-exclude";
    const keyDataBase = "data-base";
    const keyCurrentTranslate = "current-translate";


    
    useEffect(() => {
        if ( baseData.length !== 0 && excludeData.length !== 0 ) {
            window.electronAPI.getDataWithException( baseData, excludeData ).then( value => setDataWithException( value ) );
        }
    }, [baseData, excludeData]);



    useEffect(() => {
        const dataExcludeLocalStorage = window.localStorage.getItem(keyDataExclude);
        const dataBaseLocalStorage = window.localStorage.getItem(keyDataBase);

        if ( dataExcludeLocalStorage ) setExcludeData( JSON.parse(dataExcludeLocalStorage) ) 
        if ( dataBaseLocalStorage ) setBaseData( JSON.parse(dataBaseLocalStorage) ) 
    }, [])
    



    // EXIST FUNCTIONS
    const existBaseData = () => Boolean( baseData.length );
    const existExcludeData = () => Boolean( excludeData.length );




    // ON CLICK
    const onClickSetExcludeTranslate = async() => {
        const data = await window.electronAPI.readFileTranslate();
        window.localStorage.setItem( keyDataExclude, JSON.stringify( data ) );
        window.localStorage.removeItem( keyCurrentTranslate );
        setExcludeData( data );
    }
    
    const onClickSetBaseTranslate = async() => {
        const data = await window.electronAPI.readFileTranslate();
        window.localStorage.setItem( keyDataBase, JSON.stringify( data ) );
        window.localStorage.removeItem( keyCurrentTranslate );
        setBaseData( data );
    }



    // Keyed && DefInjected
    useEffect(() => {
        const existCurrentTranslateLocalStorage = JSON.parse(window.localStorage.getItem( keyCurrentTranslate ) || "null");
        
        if ( existCurrentTranslateLocalStorage ) { 
            setKeyed( existCurrentTranslateLocalStorage.keyed )
            setDefInjected( existCurrentTranslateLocalStorage.defInjected )

         } else if ( dataWithException.length !== 0 ) {
            setKeyed( getKeyedTranslation( dataWithException ) )
            setDefInjected( getDefInjected( dataWithException ) )
        }
    }, [dataWithException])
    


    // RETURN
    return {
        onClickSetExcludeTranslate,
        onClickSetBaseTranslate,

        keyed,
        defInjected,

        existBaseData,
        existExcludeData,
    }


}