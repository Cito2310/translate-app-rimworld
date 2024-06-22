import { useForm } from "react-hook-form";
import { parseData } from "../helpers";
import { useAppSelector } from "../store";


export const useControlTranslate = () => {
    const { data, name } = useAppSelector(state => state.dataTranslateNew);
    const { defInjected, keyed } = data;

    const { control, getValues} = useForm();


    const onClickGenerateTranslate = async() => {
        const { defInjected: defInjectedForm, keyed: keyedForm } = getValues();

        const parse = parseData({ defInjected, defInjectedForm, keyed, keyedForm });

        await window.electronAPI.generateFilesTranslate({
            keyedData: parse.keyed,
            defInjectedData: parse.defInjected,
            prefix: name.split(" ").join("_"),
            fileTranslate: { data, name }
        })
    }



    return { control, onClickGenerateTranslate, getValues }
}