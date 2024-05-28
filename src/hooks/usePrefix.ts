import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { controlLocalStorage } from '../helpers';

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
        const currentPrefixLocalStorage = controlLocalStorage("get", "currentPrefix")
        if ( currentPrefixLocalStorage ) setValue("prefix", currentPrefixLocalStorage);
    },[])

    useEffect(() => {
        if ( getPrefix().length ) controlLocalStorage("set", "currentPrefix", getPrefix());
    }, [watch()])
    
    const resetPrefix = () => {
        controlLocalStorage("remove", "currentPrefix");
        setValue("prefix", "");
    }

    return {
        registerPrefix: register,
        getPrefix,
        watchPrefix: watch,
        resetPrefix
    }


}
