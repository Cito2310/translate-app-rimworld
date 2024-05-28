// La funcion de este codigo es comparar dos bases de datos y excluir la informacion que se repite en la primera
export const getDataWithException = (baseData: string[][], excludeData: string[][] ): string[][] => {

    return baseData.map(( section, indexSection ) => section.reduce<string[]>((prev, curr) => {
        if ( curr[0] === "=" ) return [...prev, curr];

        if ( excludeData[indexSection].includes( curr ) === false ) return [...prev, curr];

        return prev;
    }, []))


}