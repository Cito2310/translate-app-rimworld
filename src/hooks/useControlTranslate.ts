import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../store";
import { useMemo } from "react";
import { transformToForm } from "../helpers/transformToForm";
import { setGetValues } from "../store/dataTranslate/dataTranslateSlice";


export const useControlTranslate = () => {
    const data = useAppSelector(state => state.dataTranslate.data);

    const defaultValues = useMemo(()=>transformToForm(data),[data])
    
    const { control, getValues} = useForm({defaultValues});
    const dispatch = useAppDispatch();
    dispatch(setGetValues(getValues))


    return { control, getValues }
}