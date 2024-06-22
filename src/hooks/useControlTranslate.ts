import { useForm } from "react-hook-form";
import { parseData } from "../helpers";
import { useAppSelector } from "../store";


export const useControlTranslate = () => {
    const { defInjected, keyed } = useAppSelector(state => state.dataTranslateNew.data);

    const { control, getValues} = useForm();

    const onClickGenerateTranslate = async( prefix: string ) => {
        const { defInjectedForm, keyedForm } = getValues();

        const parse = parseData({ defInjected, defInjectedForm, keyed, keyedForm });

        await window.electronAPI.generateFilesTranslate(parse.keyed, parse.defInjected, prefix)
    }

    return { control, onClickGenerateTranslate, getValues }
}