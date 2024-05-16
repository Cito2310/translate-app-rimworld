import { useForm } from "react-hook-form";
import { DefinjectedData } from "../../types/DefInjectedData";
import { KeyedData } from "../../types/KeyedData";


export const useControlTranslate = () => {
    const {watch, control, getValues} = useForm();

    const onClickGenerateTranslate = async() => {
        const { DefInjected, Keyed } = getValues();

        let parseDefInjected: DefinjectedData[] = [];
        for (const defType in DefInjected) {
            for (const defBase in DefInjected[defType]) {
                parseDefInjected.push({
                    base: defBase.replaceAll("-", "."),
                    type: defType,
                    text: DefInjected[defType][defBase],
                    original: ""
                })
            }
        }


        let parseKeyed: KeyedData[] = [];
        for (const key in Keyed) {
            parseKeyed.push({
                name: key ,
                text: Keyed[key],
                original: ""
            })
        }


        await window.electronAPI.generateFilesTranslate(parseKeyed, parseDefInjected, "Hussar")
    }


    return { control, watch, onClickGenerateTranslate }
}