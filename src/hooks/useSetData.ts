import { useEffect, useState } from "react";
import { getKeyedTranslation } from "../helpers/getKeyedTranslation";
import { getDefInjected } from "../helpers/getDefInjected";
import { DefinjectedData } from "../../types/DefInjectedData";
import { KeyedData } from "../../types/KeyedData";
import { getDataWithException } from './../helpers/getDataWithException';
import { CurrentTranslateLocalStorage } from "../../types/CurrentTranslateLocalStorage";

export const useSetData = () => {
    const [baseData, setBaseData] = useState<string[][]>([]);
    const [excludeData, setExcludeData] = useState<string[][]>([]);

    const [keyed, setKeyed] = useState<KeyedData[]>([]);
    const [defInjected, setDefInjected] = useState<DefinjectedData[]>([]);

    const keyDataExclude = "data-exclude";
    const keyDataBase = "data-base";
    const keyCurrentTranslate = "current-translate";


    // Este useEffect se activara al comienzo y cada vez que detecte cambios en el baseData y excludeData
    // 1. Verificara si existe el CurrentTranslate en el LocalStorage, si existe asignara los datos a keyed y defInjected
    // 2. Si no ocurre lo anterior verificara si existe los datos de traduccion con las excepciones y si se establecera a keyed y defInjected
    useEffect(()=> {
        const CurrentTranslateLocalStorage: CurrentTranslateLocalStorage | null = JSON.parse(window.localStorage.getItem( keyCurrentTranslate ) || "null");
        const dataWithException = getDataWithException( baseData, excludeData );

        if ( CurrentTranslateLocalStorage ) { 
            setKeyed( CurrentTranslateLocalStorage.keyed )
            setDefInjected( CurrentTranslateLocalStorage.defInjected )

         } else if ( dataWithException.length ) {
            setKeyed( getKeyedTranslation( dataWithException ) )
            setDefInjected( getDefInjected( dataWithException ) )
        }
    }, [baseData, excludeData])


    // Este useEffect se llamara solamente al principio
    // Buscara las dos variables de dataExclude y dataBase en el LocalStorage
    // Si existe lo asignara a los estado excludeData y baseData
    useEffect(() => {
        const dataExcludeLocalStorage :string[][] | null = JSON.parse( window.localStorage.getItem(keyDataExclude) || "null" );
        const dataBaseLocalStorage    :string[][] | null = JSON.parse( window.localStorage.getItem(keyDataBase) || "null" );

        if ( dataExcludeLocalStorage ) setExcludeData( dataExcludeLocalStorage ) 
        if ( dataBaseLocalStorage ) setBaseData( dataBaseLocalStorage ) 
    }, [])
    



    // EXIST FUNCTIONS
    const existBaseData = () => Boolean( baseData.length );
    const existExcludeData = () => Boolean( excludeData.length );




    // Funcion para establecer los archivos de traduccion
    const onSetTranslateFile = async(type: "exclude" | "base") => {
        const data = await window.electronAPI.readFileTranslate();
        
        if ( data === null ) return;

        window.localStorage.removeItem( keyCurrentTranslate );

        if ( type === "base" ) {
            window.localStorage.setItem( keyDataBase, JSON.stringify( data ) );
            setBaseData( data );
        }

        if ( type === "exclude" ) {
            window.localStorage.setItem( keyDataExclude, JSON.stringify( data ) );
            setExcludeData( data );
        }
    }


    // RETURN
    return {
        onSetTranslateFile,

        keyed,
        defInjected,

        existBaseData,
        existExcludeData,
    }
}