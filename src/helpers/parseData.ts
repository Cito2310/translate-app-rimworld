import { DefinjectedData } from "../../types/DefInjectedData";
import { KeyedData } from "../../types/KeyedData";

export const parseData = ( KeyedForm: any, DefInjectForm: any ) => {
    let parseKeyed: KeyedData[] = [];
    for (const key in KeyedForm) {
        parseKeyed.push({
            name: key ,
            text: KeyedForm[key],
            original: ""
        })
    }

    let parseDefInjected: DefinjectedData[] = [];
    for (const defType in DefInjectForm) {
        for (const defBase in DefInjectForm[defType]) {
            parseDefInjected.push({
                base: defBase.replaceAll("-", "."),
                type: defType,
                text: DefInjectForm[defType][defBase],
                original: ""
            })
        }
    }

    return {
        keyed: parseKeyed,
        defInjected: parseDefInjected,
    }
}