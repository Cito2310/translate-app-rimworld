import { DefinjectedData } from "../../types/DefInjectedData";
import { KeyedData } from "../../types/KeyedData";
import { originalOnlyText } from "./";

interface props {
    keyedForm: any;
    defInjectedForm: any;
    keyed: KeyedData[];
    defInjected: DefinjectedData[];
}

export const parseData = ({
    defInjected,
    defInjectedForm,
    keyed,
    keyedForm,
}: props) => {

    let parseKeyed: KeyedData[] = [];
    for (const key in keyedForm) {

        const originalItem = keyed.find( keyedValue => keyedValue.name === key.replaceAll("--","."))!.original

        parseKeyed.push({
            name: key.replaceAll("--", ".") ,
            text: keyedForm[key],
            original: originalOnlyText( originalItem! ),
        })
    }


    let parseDefInjected: DefinjectedData[] = [];
    for (const defType in defInjectedForm) {
        for (const defBase in defInjectedForm[defType]) {
            const baseReplace = defBase.replaceAll("--", ".");
            const originalItem = defInjected.find( defInjectedValue => defInjectedValue.base === baseReplace && defInjectedValue.type && defType );

            parseDefInjected.push({
                base: baseReplace,
                type: defType,
                text: defInjectedForm[defType][defBase],
                original: originalOnlyText( originalItem!.original ),
            })
        }
    }


    return {
        keyed: parseKeyed,
        defInjected: parseDefInjected,
    }
}