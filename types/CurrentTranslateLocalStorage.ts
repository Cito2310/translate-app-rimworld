import { DefinjectedData } from "./DefInjectedData"
import { KeyedData } from "./KeyedData"

export interface CurrentTranslateLocalStorage {
    keyed: KeyedData[]
    defInjected: DefinjectedData[]
}