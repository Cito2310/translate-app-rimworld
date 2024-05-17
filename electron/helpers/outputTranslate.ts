import { mkdirSync, rmSync } from "fs";
import { join as pathJoin } from "path";

import { generateXML } from "./";

import { DefinjectedData } from "../../types/DefInjectedData";
import { KeyedData } from "../../types/KeyedData";

interface props {
    defInjected: DefinjectedData[];
    keyed: KeyedData[];
    prefix: string;
}

// Esta funcion tiene el objetivo de parsear los datos de DefInjected y Keyed, y establecer las rutas para que lo use generateXML
export const outputTranslate = ({ defInjected, keyed, prefix }: props) => {
    const pathTranslate = pathJoin(__dirname, "../../../", "dir", prefix);
    const pathDefInjected = pathJoin(pathTranslate, "DefInjected");
    const pathKeyed = pathJoin(pathTranslate, "Keyed");

    // PARSEAR DATOS
    // Parsear DefInjeted
    let parseDefInjected: any = {}

    defInjected.forEach(({ type, base, text }) => {
        if ( parseDefInjected[type] === undefined ) parseDefInjected[type] = {};
        
        parseDefInjected[type][base] = text;
    })

    // Parsear Keyed
    let parseKeyed: any = {}

    keyed.forEach(({ name, text }) => {
        if ( parseKeyed[name] === undefined ) parseKeyed[name] = {};

        parseKeyed[name] = text;
    })

    // GENERAR ARCHIVOS
    // Resetea la carpeta dir
    rmSync( pathTranslate, { recursive: true, force: true })

    // Generar carpeta: DefInjected
    mkdirSync( pathDefInjected, { recursive: true } )
    for (const typeDef in parseDefInjected) {

        const newFolderPath = pathJoin( pathDefInjected, typeDef );
        mkdirSync( newFolderPath );

        generateXML({
            data: parseDefInjected[typeDef],
            path: pathJoin(newFolderPath, `${prefix ? `${prefix}_` : ""}${typeDef}.xml`),
        })

    }

    // Generar carpeta: Keyed
    mkdirSync( pathKeyed, { recursive: true } )
    generateXML({
        data: parseKeyed,
        path: pathJoin(pathKeyed, `${prefix ? `${prefix}_` : ""}Misc_Gameplay.xml`),
    })

}