import { DefinjectedData } from "../../../types/DefInjectedData"
import { KeyedData } from "../../../types/KeyedData"
import { ContainerTranslate } from "./ContainerTranslate"
import { TextMain } from "./TextsForTranslate"

interface props {
    data: {Keyed: KeyedData[], DefInjected: DefinjectedData[]}
}

export const SectionKeyed = ({data}: props) => {
  return (
    <>
        {data.Keyed.length && <>
            <TextMain text="Keyed" />
            { data.Keyed.map(({ name, original, text }) => <ContainerTranslate name={name} original={original} value={text} /> ) }
        </>}
    </>
  )
}
