import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export const useAutosizeTextArea = ( field: string, defaultValue?: string ) => {
    const { register, watch } = useForm({ defaultValues: {value: defaultValue} });
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    // @ts-ignore
    const { ref, ...rest} = register(field)

    // ACTIVAR ESTO CAMBIA EL TAMAÑO DEL TEXTAREA EN LA PRIMERA RENDERIZACION
    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "0px";

            const scrollHeight = textAreaRef.current.scrollHeight;
        
            textAreaRef.current.style.height = scrollHeight + "px";
        }
    }, [textAreaRef.current]);

    // ACTIVAR ESTO PROVOCA LAG PERO DE CAMBIA DE TAMAÑO EL TEXTAREA
    // useEffect(() => {
    //     console.log("Se activo este useeffect de useAutosizeTextArea")

    //     if (textAreaRef.current) {
    //         textAreaRef.current.style.height = "0px";

    //         const scrollHeight = textAreaRef.current.scrollHeight;
        
    //         textAreaRef.current.style.height = scrollHeight + "px";
    //     }
    //   }, [textAreaRef.current, watch()]);

    return { ref, rest, textAreaRef }
}