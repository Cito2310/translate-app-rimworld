import React from 'react'
import { useForm } from 'react-hook-form'

export interface PrefixForm {
    prefix: string;
}

const defaultValues: PrefixForm = {
    prefix: ""
}

export const usePrefix = () => {
    const { register, watch, getValues } = useForm<PrefixForm>({ defaultValues });

    const getPrefix = () => getValues("prefix");

    return {
        registerPrefix: register,
        getPrefix,
        watchPrefix: watch
    }


}
