import { DefinjectedData } from "../types";

export const getDefInjected = ( dataMissing: string[][] ): DefinjectedData[] => {
    const sectionDefInjected = dataMissing[3];
    const withoutTitle = sectionDefInjected.slice(1);

    const data = withoutTitle.map( str => {
        const type = str.match(/[A-Za-z]+/)![0];
        const base = str.match(/: [A-Za-z._]+/)![0].slice(2);

        const text = str.match(/[\'\"].+[\'\"]/)![0];
        const withoutQuotes = `${text[1]+text.slice(2, text.length-1)}`

        return {
            type,
            base,
            text: withoutQuotes,
            original: str
        }
    });

    return data;
}