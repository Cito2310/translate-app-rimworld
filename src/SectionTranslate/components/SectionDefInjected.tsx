import { dataToDefInjectedScreen } from "../helpers/dataToDefInjectedScreen";
import { DefinjectedData } from "../../../types/DefInjectedData";
import { KeyedData } from "../../../types/KeyedData";
import { TextItemDef, TextMain, TextTypeDef } from "./TextsForTranslate";
import { ContainerTranslate } from "./ContainerTranslate";

interface props {
    data: {Keyed: KeyedData[], DefInjected: DefinjectedData[]}
}

export const SectionDefInjected = ({ data }: props) => {
    const defInjected = dataToDefInjectedScreen(data.DefInjected);

  return (
    <>
        {
            defInjected.length && <>
                <TextMain text="DefInjected" />
                { defInjected.map( typeDef => <div>
                    <TextTypeDef text={typeDef.name}/>
                    { typeDef.itemsDefs.map( itemDef => <div>
                        <TextItemDef text={itemDef.name} />
                        { itemDef.parts.map( part => <ContainerTranslate name={part} original="This is the original text" value="Este es el texto a traducir" /> ) }
                    </div> ) }
                </div> ) }
            </>
        }
    </>
  )
}