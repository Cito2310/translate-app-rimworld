export const ArrayOnly = ( type: "string" | "object" , array: any[] ) => {
    if ( type === "string" ) return array.every( element => typeof element === "string" );
    if ( type === "object" ) return array.every( element => typeof element === 'object' && !Array.isArray(element) && element !== null );
}