import { KeyedData } from "../../types/KeyedData";

export const getKeyedTranslation = ( dataMissing: string[][] ): KeyedData[] => {
    const sectionKeyed = dataMissing[2];
    const withoutTitle = sectionKeyed.slice(1);

    
    const firstPart = withoutTitle.map( str => str.match( /[a-zA-Z_.]+/g )![0] );

    const secondPart = withoutTitle.map(str => {
        const text = str.match(/[\'\"].+[\'\"]/)![0]; // detecta todo lo que este dentro de las comillas
        return `${text[1]+text.slice(2, text.length-1)}` // elimina la primer comilla y la ultima
    })

    const joinParts = firstPart.map((name, idx) => ({ 
        name, 
        text: secondPart[idx], 
        original: withoutTitle[idx] 
    }));

    return joinParts;
}