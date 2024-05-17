export const originalOnlyText = ( original: string ) => {
    return  original.match( /[\'\"].+[\'\"]/ )![0];
}