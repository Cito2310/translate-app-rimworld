import { writeFileSync } from "fs"
import { create } from "xmlbuilder2"

interface props {
    path: string;
    data: { [key: string]: string };
    
}

export const generateXML = ({ data, path }: props): void => {
    const xmlData = create({ version: "1.0", encoding: "utf-8" }, {
        LanguageData: data
    }).end({ prettyPrint: true })

    writeFileSync( path, xmlData )
}