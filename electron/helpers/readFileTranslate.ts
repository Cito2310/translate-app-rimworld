import { readFileSync } from "fs";

// Este codigo sirve para leer los archivos de error de traducción que te da rimworld.
export const readFileTranslate = ( pathFile: string ): string[][] => {
    const read = readFileSync( pathFile, "utf-8" );

    const splitText = read.split("\r\n");
    
    return splitText.reduce<string[][]>((prev, curr) => { 
        if ( curr[0] === "=" ) return [...prev, [curr]];
    
        if (curr.length) prev[prev.length-1]?.push( curr );
    
        return prev;
     }, []);
}