import { useEffect } from "react";
import { getKeyedTranslation } from "../helpers/getKeyedTranslation";
import { getDefInjected } from "../helpers/getDefInjected";
import { getDataWithException } from './../helpers/getDataWithException';
import { CurrentTranslateLocalStorage } from "../../types/CurrentTranslateLocalStorage";
import { useAppDispatch, useAppSelector } from "../store/store";
import { controlLocalStorage } from "../helpers/controlLocalStorage";
import { setBase, setDefInjected, setExclude, setKeyed } from "../store/product/dataTranslateSlice";

export const useSetData = () => {
    const { base, exclude } = useAppSelector( state => state.dataTranslate.rawData );
    const dispatch = useAppDispatch();

    // Este useEffect se activara al comienzo y cada vez que detecte cambios en el baseData y excludeData
    // 1. Verificara si existe el CurrentTranslate en el LocalStorage, si existe asignara los datos a keyed y defInjected
    // 2. Si no ocurre lo anterior verificara si existe los datos de traduccion con las excepciones y si se establecera a keyed y defInjected
    useEffect(()=> {
        // const CurrentTranslateLocalStorage: CurrentTranslateLocalStorage | null = JSON.parse(window.localStorage.getItem( keyCurrentTranslate ) || "null");
        const CurrentTranslateLocalStorage: CurrentTranslateLocalStorage | null = controlLocalStorage("get", "current-translate");
        const dataWithException = getDataWithException( base, exclude );

        if ( CurrentTranslateLocalStorage ) { 
            dispatch( setKeyed( CurrentTranslateLocalStorage.keyed ) )
            dispatch( setDefInjected( CurrentTranslateLocalStorage.defInjected ) )

         } else if ( dataWithException.length ) {
            dispatch( setKeyed( getKeyedTranslation( dataWithException ) ) )
            dispatch( setDefInjected( getDefInjected( dataWithException ) ) )
        }
    }, [exclude, base])

    // Este useEffect se llamara solamente al principio
    // Buscara las dos variables de dataExclude y dataBase en el LocalStorage
    // Si existe lo asignara a los estado excludeData y baseData
    useEffect(() => {
        const dataExcludeLocalStorage :string[][] | null = controlLocalStorage("get", "data-exclude");
        const dataBaseLocalStorage    :string[][] | null = controlLocalStorage("get", "data-base");

        if ( dataExcludeLocalStorage ) dispatch( setExclude( dataExcludeLocalStorage ) );
        if ( dataBaseLocalStorage ) dispatch( setBase( dataBaseLocalStorage ) );
    }, [])

}