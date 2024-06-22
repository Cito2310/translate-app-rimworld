import { useEffect } from "react";
import { Control, FieldValues, UseFormGetValues, useWatch } from "react-hook-form";
import { controlLocalStorage, parseData } from "../../helpers";
import { useAppSelector } from "../../store";

interface props {
    control: Control<FieldValues, any>;
    path: string;
    getValues: UseFormGetValues<FieldValues>;
}

export const useSaveLocalStorage = ({ control, path, getValues }: props) => {
    const { data, name } = useAppSelector( state => state.dataTranslateNew );
    const { defInjected, keyed } = data;
    const watchedValue = useWatch({ control, name: path });

    useEffect(() => {

        if ( getValues !== null ) {
            const { defInjected: defInjectedForm, keyed: keyedForm } = getValues();

            if ( defInjectedForm || keyedForm ) {
                controlLocalStorage("set", "current-translate", {
                    name,
                    data: parseData({ defInjected, defInjectedForm, keyed, keyedForm }) 
                })
            }
        }
    
    }, [watchedValue])
}