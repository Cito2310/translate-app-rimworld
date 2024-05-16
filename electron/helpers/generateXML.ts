import { writeFileSync } from "fs"
import { create }  from "xmlbuilder";


interface props {
    path: string;
    data: { [key: string]: string };
    
}

export const generateXML = ({ data, path }: props): void => {
    const xmlData = create({
        LanguageData: data
    }, { version: "1.0", encoding: "utf-8" }).end({ pretty: true })

    writeFileSync( path, xmlData )
}