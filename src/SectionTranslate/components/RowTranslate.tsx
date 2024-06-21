import { Control, FieldValues } from "react-hook-form";
import { KeyedData } from "../../../types/KeyedData";
import { TypeDef } from "../helpers/dataToDefInjectedScreen"
import { ContainerTranslate } from "./ContainerTranslate";
import { TextItemDef, TextTypeDef } from "./TextsForTranslate";
import { replaceForForm } from "../../helpers";

interface propsKeyedRow {
    data: KeyedData;
    control: Control<FieldValues, any>;
}

interface propsDefInjectedRow {
    data: TypeDef;
    control: Control<FieldValues, any>;
}

export const KeyedRow = ({ control, data }: propsKeyedRow) => (
    <ContainerTranslate 
            className="mt-3"
            control={control} 
            key={data.name} 
            path={`keyed.${replaceForForm(data.name)}`} 
            name={data.name} 
            original={data.original} 
            value={data.text}
    />
)

export const DefInjectedRow = ({ control, data }: propsDefInjectedRow) => (
    <div key={data.name}>
        <TextTypeDef text={data.name}/>
        {/* @ts-ignore */}
        { data.itemsDefs.map( itemDef => <div key={itemDef.name+itemDef.parts}>
            <TextItemDef text={itemDef.name} />
            <div className="flex flex-col gap-2">
                {/* @ts-ignore */}
                { itemDef.parts.map( part => <ContainerTranslate 
                    key={part.path} 
                    name={part.name} 
                    original={part.original} 
                    value={part.text}
                    control={ control }
                    path={`defInjected.${data.name}.${replaceForForm( part.path )}`}
                /> ) }
            </div>
        </div> ) }
    </div>
)