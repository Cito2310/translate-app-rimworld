import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect, useMemo } from "react";
import { transformToForm } from "../helpers/transformToForm";
import { useGetValuesContext } from "../context/useGetValuesContext";


export const useControlTranslate = () => {
    const data = useAppSelector(state => state.dataTranslate.data);
    const { setGetValues } = useGetValuesContext();

    const defaultValues = useMemo(()=>transformToForm(data),[data])
    
    const { control, getValues} = useForm({defaultValues});

    useEffect(() => {
        setGetValues(()=>getValues)
    }, [])
    




    return { control, getValues }
}