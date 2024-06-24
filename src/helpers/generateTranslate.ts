import { parseData } from "./parseData";
import { useAppSelector } from "../store";
import { UseFormGetValues } from "react-hook-form";
import { DataTranslateState } from "../store/dataTranslate/dataTranslateSlice";


export const generateTranslate = async(dataTranslate: DataTranslateState, getValues: UseFormGetValues<any>) => {
    const { data, name } = dataTranslate;
    const { defInjected, keyed } = data;

    const { defInjected: defInjectedForm, keyed: keyedForm } = getValues!();

    const parse = parseData({ defInjected, defInjectedForm, keyed, keyedForm });

    await window.electronAPI.generateFilesTranslate({
        keyedData: parse.keyed,
        defInjectedData: parse.defInjected,
        prefix: name.split(" ").join("_"),
        // @ts-ignore
        fileTranslate: { data, name }
    })
}