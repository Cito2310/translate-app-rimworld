import { useForm } from "react-hook-form";
import { parseData } from "../helpers/parseData";
import { useEffect } from "react";
import { KeyedData } from "../../types/KeyedData";
import { DefinjectedData } from "../../types/DefInjectedData";
import { useAppSelector } from "../store/store";


export const useControlTranslate = () => {
    const { defInjected, keyed } = useAppSelector(state => state.dataTranslate.parsedData);

    const {watch, control, getValues, reset} = useForm();

    const onClickGenerateTranslate = async( prefix: string ) => {
        const { DefInjectedForm, KeyedForm } = getValues();

        const parse = parseData({ defInjected, DefInjectedForm, keyed, KeyedForm });

        await window.electronAPI.generateFilesTranslate(parse.keyed, parse.defInjected, prefix)
    }

    // Cada vez que detecte cambios en el DefInjected y Keyed se reiniciara el form
    // Esto solo ocurrira cada vez que se cambia el baseData o el excludeData
    useEffect(() => {
        reset()
    }, [defInjected, keyed])


    useEffect(() => {
        const { DefInjectedForm, KeyedForm } = getValues();
        if ( DefInjectedForm || KeyedForm ) {
            window.localStorage.setItem(
                "current-translate",
                JSON.stringify(
                    parseData({ defInjected, DefInjectedForm, keyed, KeyedForm }) 
            ))
        }
    }, [watch()])
    
    
    return { control, onClickGenerateTranslate }
}