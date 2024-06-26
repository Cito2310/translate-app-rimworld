import { KeyedData } from "../../types/KeyedData";
import { originalOnlyText } from ".";

export const getKeyed = ( dataMissing: string[][] ): KeyedData[] => {
    const sectionKeyed = dataMissing[2];
    const withoutTitle = sectionKeyed.slice(1);

    
    const firstPart = withoutTitle.map( str => str.match( /[a-zA-Z0-9_.]+/g )![0] );

    const secondPart = withoutTitle.map(str => {
        const text = str.match(/[\'\"].+[\'\"]/)![0]; // detecta todo lo que este dentro de las comillas
        return `${text[1]+text.slice(2, text.length-1)}` // elimina la primer comilla y la ultima
    })

    const joinParts = firstPart.map((name, idx) => ({ 
        name, 
        text: secondPart[idx], 
        original: originalOnlyText( withoutTitle[idx] ) 
    }));

    return joinParts;
}