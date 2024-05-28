import { DefinjectedData } from "../../types/DefInjectedData";
import { KeyedData } from "../../types/KeyedData";
import { originalOnlyText } from "./";

interface props {
    KeyedForm: any;
    DefInjectedForm: any;
    keyed: KeyedData[];
    defInjected: DefinjectedData[];
}

export const parseData = ({
    defInjected,
    DefInjectedForm,
    keyed,
    KeyedForm,
}: props) => {

    let parseKeyed: KeyedData[] = [];
    for (const key in KeyedForm) {

        const originalItem = keyed.find( keyedValue => keyedValue.name === key.replaceAll("--","."))!.original

        parseKeyed.push({
            name: key.replaceAll("--", ".") ,
            text: KeyedForm[key],
            original: originalOnlyText( originalItem! ),
        })
    }


    let parseDefInjected: DefinjectedData[] = [];
    for (const defType in DefInjectedForm) {
        for (const defBase in DefInjectedForm[defType]) {
            const baseReplace = defBase.replaceAll("--", ".");
            const originalItem = defInjected.find( defInjectedValue => defInjectedValue.base === baseReplace && defInjectedValue.type && defType );

            parseDefInjected.push({
                base: baseReplace,
                type: defType,
                text: DefInjectedForm[defType][defBase],
                original: originalOnlyText( originalItem!.original ),
            })
        }
    }


    return {
        keyed: parseKeyed,
        defInjected: parseDefInjected,
    }
}