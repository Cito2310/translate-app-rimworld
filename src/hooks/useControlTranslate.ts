import { useForm } from "react-hook-form";
import { parseData } from "../helpers/parseData";


export const useControlTranslate = () => {
    const {watch, control, getValues} = useForm();

    const onClickGenerateTranslate = async() => {
        const { DefInjected, Keyed } = getValues();

        const parse = parseData( Keyed, DefInjected );

        // useEffect(() => {
        //     window.localStorage.setItem("current-translate", JSON.stringify(getValues()));
        // }, [watch()])
        
        await window.electronAPI.generateFilesTranslate(parse.keyed, parse.defInjected, "Hussar")
    }


    return { control, watch, onClickGenerateTranslate }
}