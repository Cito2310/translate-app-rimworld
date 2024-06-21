import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { controlLocalStorage, parseData } from "../helpers";
import { useAppSelector } from "../store";


export const useControlTranslate = () => {
    const { data, name } = useAppSelector(state => state.dataTranslateNew);
    const { defInjected, keyed } = data;

    const {watch, control, getValues} = useForm();

    const onClickGenerateTranslate = async( prefix: string ) => {
        const { defInjectedForm, keyedForm } = getValues();

        const parse = parseData({ defInjected, defInjectedForm, keyed, keyedForm });

        await window.electronAPI.generateFilesTranslate(parse.keyed, parse.defInjected, prefix)
    }


    // TOO MANY LAG - Razon desconocida
    useEffect(() => {
        const { defInjected: defInjectedForm, keyed: keyedForm } = getValues();
        if ( defInjectedForm || keyedForm ) {
            controlLocalStorage("set", "current-translate", {
                name,
                data: parseData({ defInjected, defInjectedForm, keyed, keyedForm }) 
            })
        }
    }, [watch()])
    
    
    return { control, onClickGenerateTranslate }
}