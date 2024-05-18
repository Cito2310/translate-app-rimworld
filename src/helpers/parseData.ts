import { DefinjectedData } from "../../types/DefInjectedData";
import { KeyedData } from "../../types/KeyedData";
import { originalOnlyText } from "./originalOnlyText";

interface props {
    KeyedForm: any;
    DefInjectedForm: any;
    Keyed: KeyedData[];
    DefInjected: DefinjectedData[];
}

export const parseData = ({
    DefInjected,
    DefInjectedForm,
    Keyed,
    KeyedForm,
}: props) => {

    let parseKeyed: KeyedData[] = [];
    for (const key in KeyedForm) {
        const originalItem = Keyed.find( keyedValue => keyedValue.name === (key+"").replace("--",".")  )!.original;

        parseKeyed.push({
            name: key ,
            text: KeyedForm[key],
            original: originalOnlyText( originalItem ),
        })
    }


    let parseDefInjected: DefinjectedData[] = [];
    for (const defType in DefInjectedForm) {
        for (const defBase in DefInjectedForm[defType]) {
            const baseReplace = defBase.replaceAll("--", ".");
            const originalItem = DefInjected.find( defInjectedValue => defInjectedValue.base === baseReplace && defInjectedValue.type && defType );

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