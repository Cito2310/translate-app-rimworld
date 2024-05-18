import { useForm } from "react-hook-form";
import { parseData } from "../helpers/parseData";
import { useEffect } from "react";
import { KeyedData } from "../../types/KeyedData";
import { DefinjectedData } from "../../types/DefInjectedData";

interface props {
    Keyed: KeyedData[];
    DefInjected: DefinjectedData[];
}

export const useControlTranslate = ({ DefInjected, Keyed }: props) => {
    const {watch, control, getValues, reset} = useForm();

    const onClickGenerateTranslate = async( prefix: string ) => {
        const { DefInjectedForm, KeyedForm } = getValues();

        const parse = parseData({ DefInjected, DefInjectedForm, Keyed, KeyedForm });

        await window.electronAPI.generateFilesTranslate(parse.keyed, parse.defInjected, prefix)
    }

    // Cada vez que detecte cambios en el DefInjected y Keyed se reiniciara el form
    // Esto solo ocurrira cada vez que se cambia el baseData o el excludeData
    useEffect(() => {
        reset()
    }, [DefInjected, Keyed])


    useEffect(() => {
        const { DefInjectedForm, KeyedForm } = getValues();
        if ( DefInjectedForm || KeyedForm ) {
            window.localStorage.setItem(
                "current-translate",
                JSON.stringify(
                    parseData({ DefInjected, DefInjectedForm, Keyed, KeyedForm }) 
            ))
        }
    }, [watch()])
    
    
    return { control, onClickGenerateTranslate }
}