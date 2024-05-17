import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export interface PrefixForm {
    prefix: string;
}

const defaultValues: PrefixForm = {
    prefix: ""
}

export const usePrefix = () => {
    const { register, watch, getValues, setValue } = useForm<PrefixForm>({ defaultValues });

    const getPrefix = () => getValues("prefix").trim();

    useEffect(()=>{
        const currentPrefixLocalStorage = window.localStorage.getItem("currentPrefix");
        if ( currentPrefixLocalStorage ) setValue("prefix", currentPrefixLocalStorage);
    },[])

    useEffect(() => {
        if ( getPrefix().length ) window.localStorage.setItem("currentPrefix", getPrefix());
    }, [watch()])
    

    return {
        registerPrefix: register,
        getPrefix,
        watchPrefix: watch
    }


}
