export interface FormTranslate {
    defInjected: DefInjectedForm;
    keyed: KeyedForm;
}

export interface DefInjectedForm {
    [key:string] : {
        [key:string]: string
    }
}

export interface KeyedForm {
    [key:string]: string
}