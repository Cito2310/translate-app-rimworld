import { useForm } from "react-hook-form";
import { parseData } from "../helpers/parseData";
import { useEffect } from "react";


export const useControlTranslate = () => {
    const {watch, control, getValues} = useForm();

    const onClickGenerateTranslate = async() => {
        const { DefInjected, Keyed } = getValues();

        const parse = parseData( Keyed, DefInjected );


        await window.electronAPI.generateFilesTranslate(parse.keyed, parse.defInjected, "Hussar")
    }

    useEffect(() => {
        const { DefInjected, Keyed } = getValues();
        if ( DefInjected || Keyed ) {
            window.localStorage.setItem("current-translate", JSON.stringify( parseData( Keyed, DefInjected ) ))
        }
    }, [watch()])
    


    return { control, watch, onClickGenerateTranslate }
}