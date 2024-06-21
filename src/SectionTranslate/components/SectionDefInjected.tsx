import { dataToDefInjectedScreen } from "../helpers/dataToDefInjectedScreen";
import { DefinjectedData } from "../../../types/DefInjectedData";
import { KeyedData } from "../../../types/KeyedData";
import { TextItemDef, TextMain, TextTypeDef } from "./TextsForTranslate";
import { ContainerTranslate } from "./ContainerTranslate";
import { Control, FieldValues } from "react-hook-form";
import { Virtuoso } from "react-virtuoso";
import { replaceForForm } from "../../helpers";

interface props {
    data: {keyed: KeyedData[], defInjected: DefinjectedData[]};
    control: Control<FieldValues, any>;
}

export const SectionDefInjected = ({ data, control }: props) => {
    const defInjected = dataToDefInjectedScreen(data.defInjected);

  return (
    <>
        {
            // defInjected.length && <>
            //     <TextMain text="DefInjected" />
            //     <Virtuoso 
            //         data={defInjected}
            //         itemContent={(index, typeDef) =>
            //             <div key={typeDef.name}>
            //                 <TextTypeDef text={typeDef.name}/>
            //                 { typeDef.itemsDefs.map( itemDef => <div key={itemDef.name+itemDef.parts}>
            //                     <TextItemDef text={itemDef.name} />
            //                     <div className="flex flex-col gap-2">
            //                         { itemDef.parts.map( part => <ContainerTranslate 
            //                             key={part.path} 
            //                             name={part.name} 
            //                             original={part.original} 
            //                             value={part.text}
            //                             control={ control }
            //                             path={ part.path }
            //                         /> ) }
            //                     </div>
            //                 </div> ) }
            //             </div>}
            //     />
            <>
                 { defInjected.map( typeDef => <div key={typeDef.name}>
                    <TextTypeDef text={typeDef.name}/>
                    { typeDef.itemsDefs.map( itemDef => <div key={itemDef.name+itemDef.parts}>
                        <TextItemDef text={itemDef.name} />
                        <div className="flex flex-col gap-2">
                            { itemDef.parts.map( part => <ContainerTranslate 
                                key={part.path} 
                                name={part.name} 
                                original={part.original} 
                                value={part.text}
                                control={ control }
                                path={`defInjected.${typeDef.name}.${replaceForForm( part.path )}`}
                            /> ) }
                        </div>
                    </div> ) }
                </div> ) } 
            </>
        }
    </>
  )
}