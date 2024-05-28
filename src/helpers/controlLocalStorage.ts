export type keyLocalStorage = "data-exclude" 
                            | "data-base"
                            | "current-translate"
                            | "currentPrefix"

export type funcLocalStorage = "get" | "set" | "remove"


export const controlLocalStorage = ( func: funcLocalStorage, key: keyLocalStorage, data?: any ): any|null => {

    switch (func) {
        case "get":
            const dataGet = window.localStorage.getItem(key);
            return JSON.parse(dataGet || "null");

            
        case "remove":
            const dataRemove = window.localStorage.getItem(key)
            window.localStorage.removeItem(key)
            return JSON.parse(dataRemove || "null");


        case "set":
            const dataSet = window.localStorage.getItem(key)
            window.localStorage.setItem(key, JSON.stringify(data)) 
            return JSON.parse(dataSet || "null");
    }
}