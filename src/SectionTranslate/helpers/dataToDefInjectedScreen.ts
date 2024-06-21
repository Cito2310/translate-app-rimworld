import { DefinjectedData } from "../../../types/DefInjectedData"

interface TypeDef {
    name: string;
    itemsDefs: ItemDef[]
}

interface ItemDef {
    name: string;
    parts: PartDef[]
}

interface PartDef {
    name: string;
    original: string;
    text: string;
    path: string;
}

export const dataToDefInjectedScreen = ( dataDefInjected: DefinjectedData[] ) => {
    return dataDefInjected.reduce<TypeDef[]>((prev, curr)=>{
        
        // UNA COPIA DEL PREV PARA HACER LOS CAMBIOS PERTIENENTES
        let copyPrev = structuredClone(prev);

        const generateItemsDefs = ( itemPart: DefinjectedData, itemsDefs: ItemDef[] ) => {
            let copyItemsDefs = structuredClone(itemsDefs);

            const itemName = itemPart.base.split(".")[0];
            const itemPartName = itemPart.base.split(".").slice(1).join(".");

            const objPart: PartDef = {
                name: itemPartName,
                original: itemPart.original,
                path: itemPart.base,
                text: itemPart.text
            }


            if ( itemsDefs.length === 0 || itemName !== itemsDefs[itemsDefs.length-1].name ) copyItemsDefs.push({ name: itemName, parts: [objPart] });

            if (itemsDefs[itemsDefs.length-1]?.name === itemName ) copyItemsDefs[itemsDefs.length-1].parts.push(objPart);

            return copyItemsDefs;

        }

        // prev.length === 0 = Detecta si el array esta vacio y añade los datos sin verificar nada, esto ocurre la primera vez
        // curr.type !== prev[prev.length-1].type = Cuando detecta que el ultimo typeDef no es el mismo añade un nuevo typeDef y añade los datos
        if (prev.length === 0 || curr.type !== prev[prev.length-1]?.name) copyPrev.push({ name: curr.type, itemsDefs: generateItemsDefs(curr, []) })

        // Cuando detecta que el typeDef es el mismo añade los datos itemDef al array existente
        if ( curr.type === prev[prev.length-1]?.name ) copyPrev[prev.length-1].itemsDefs = generateItemsDefs(curr, copyPrev[prev.length-1].itemsDefs)


        return copyPrev;
    },[] as any[])
}