export type keyLocalStorage = "data-exclude" 
                            | "data-base"
                            | "current-translate"
                            | "currentPrefix"

export type funcLocalStorage = "get" | "set" | "remove"


export const controlLocalStorage = ( func: funcLocalStorage, key: keyLocalStorage, data?: any ): any|null => {

    const returnData = (data: any) => {
        try { return JSON.parse(data || "null") } 
        catch (error) { return data }
    }

    switch (func) {
        case "get":
            const dataGet = window.localStorage.getItem(key);
            return returnData(dataGet);

            
        case "remove":
            const dataRemove = window.localStorage.getItem(key)
            window.localStorage.removeItem(key)
            return returnData(dataRemove);


        case "set":
            const dataSet = window.localStorage.getItem(key)
            window.localStorage.setItem(key, JSON.stringify(data)) 
            return returnData(dataSet);
    }
}