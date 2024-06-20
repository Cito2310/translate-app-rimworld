import { DefinjectedData } from "../../../types/DefInjectedData"

interface TypeDef {
    name: string;
    itemsDefs: ItemDef[]
}

interface ItemDef {
    name: string;
    parts: string[]
}

export const dataToDefInjectedScreen = ( dataDefInjected: DefinjectedData[] ) => {
    return dataDefInjected.reduce<TypeDef[]>((prev, curr)=>{

        

        // UNA COPIA DEL PREV PARA HACER LOS CAMBIOS PERTIENENTES
        let copyPrev = structuredClone(prev);

        const generateItemsDefs = ( itemsPartDef: string, itemsDefs: ItemDef[] ) => {
            let copyItemsDefs = structuredClone(itemsDefs);
            // console.log(itemsPartDef)

            const itemName = itemsPartDef.split(".")[0];
            const itemPart = itemsPartDef.split(".").slice(1).join(".");

            if ( itemsDefs.length === 0 || itemName !== itemsDefs[itemsDefs.length-1].name ) copyItemsDefs.push({ name: itemName, parts: [itemPart] });

            if (itemsDefs[itemsDefs.length-1]?.name === itemName ) copyItemsDefs[itemsDefs.length-1].parts.push(itemPart);

            return copyItemsDefs;

        }

        // prev.length === 0 = Detecta si el array esta vacio y añade los datos sin verificar nada, esto ocurre la primera vez
        // curr.type !== prev[prev.length-1].type = Cuando detecta que el ultimo typeDef no es el mismo añade un nuevo typeDef y añade los datos
        if (prev.length === 0 || curr.type !== prev[prev.length-1]?.name) copyPrev.push({ name: curr.type, itemsDefs: generateItemsDefs(curr.base, []) })

        // Cuando detecta que el typeDef es el mismo añade los datos itemDef al array existente
        if ( curr.type === prev[prev.length-1]?.name ) copyPrev[prev.length-1].itemsDefs = generateItemsDefs(curr.base, copyPrev[prev.length-1].itemsDefs)


        return copyPrev;
    },[] as any[])
}