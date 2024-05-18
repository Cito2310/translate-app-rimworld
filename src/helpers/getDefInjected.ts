import { DefinjectedData } from "../../types/DefInjectedData";
import { originalOnlyText } from "./originalOnlyText";

export const getDefInjected = ( dataMissing: string[][] ): DefinjectedData[] => {
    const sectionDefInjected = dataMissing[3];
    const withoutTitle = sectionDefInjected.slice(1);

    const data = withoutTitle.map( (str: string) => {
        const type = str.match(/[A-Za-z]+/)![0];
        const base = str.match(/: [A-Za-z0-9._\-]+/)![0].slice(2);

        const text = str.match(/[\'\"].+[\'\"]/)![0];
        const withoutQuotes = `${text[1]+text.slice(2, text.length-1)}`

        return {
            type,
            base,
            text: withoutQuotes,
            original: originalOnlyText( str )
        }
    });

    return data;
}