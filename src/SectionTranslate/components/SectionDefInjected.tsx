import { dataToDefInjectedScreen } from "../helpers/dataToDefInjectedScreen";
import { DefinjectedData } from "../../../types/DefInjectedData";
import { KeyedData } from "../../../types/KeyedData";
import { TextItemDef, TextMain, TextTypeDef } from "./TextsForTranslate";
import { ContainerTranslate } from "./ContainerTranslate";
import { Control, FieldValues } from "react-hook-form";

interface props {
    data: {keyed: KeyedData[], defInjected: DefinjectedData[]};
    control: Control<FieldValues, any>;
}

export const SectionDefInjected = ({ data }: props) => {
    const defInjected = dataToDefInjectedScreen(data.defInjected);

  return (
    <>
        {
            defInjected.length && <>
                <TextMain text="DefInjected" />
                { defInjected.map( typeDef => <div key={typeDef.name}>
                    <TextTypeDef text={typeDef.name}/>
                    { typeDef.itemsDefs.map( itemDef => <div key={itemDef.name+itemDef.parts}>
                        <TextItemDef text={itemDef.name} />
                        <div className="flex flex-col gap-2">
                            { itemDef.parts.map( part => <ContainerTranslate key={part} name={part} original="This is the original text" value="Este es el texto a traducir" /> ) }
                        </div>
                    </div> ) }
                </div> ) }
            </>
        }
    </>
  )
}