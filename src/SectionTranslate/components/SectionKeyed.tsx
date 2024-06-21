import { Control, FieldValues } from "react-hook-form";
import { DefinjectedData } from "../../../types/DefInjectedData"
import { KeyedData } from "../../../types/KeyedData"
import { ContainerTranslate } from "./ContainerTranslate"
import { TextMain } from "./TextsForTranslate"
import { replaceForForm } from "../../helpers";

interface props {
    data: {keyed: KeyedData[], defInjected: DefinjectedData[]};
    control: Control<FieldValues, any>;
}

export const SectionKeyed = ({data, control}: props) => {
  return (
    <>
        {data.keyed.length && <>
            <TextMain text="Keyed" />
            <div className="flex flex-col gap-2">
                { data.keyed.map(({ name, original, text }) => <ContainerTranslate 
                    control={control} 
                    key={name} 
                    path={`keyed.${replaceForForm(name)}`} 
                    name={name} 
                    original={original} 
                    value={text}
                /> ) }
            </div>
        </>}
    </>
  )
}
