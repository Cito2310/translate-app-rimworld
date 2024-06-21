import { useEffect } from "react";
import { useAppDispatch } from "../store"
import { controlLocalStorage } from "../helpers";
import { setDataTranslate } from "../store/dataTranslate/dataTranslateSlice";

export const useStartTranslate = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const data = controlLocalStorage("get", "current-translate");
        if ( data ) dispatch( setDataTranslate( data ) );
    }, [])
    
}