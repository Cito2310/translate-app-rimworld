import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export const useAutosizeTextArea = ( field: string, defaultValue?: string ) => {
    const { register, watch } = useForm({ defaultValues: {value: defaultValue} });
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    // @ts-ignore
    const { ref, ...rest} = register(field)

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "0px";

            const scrollHeight = textAreaRef.current.scrollHeight;
        
            textAreaRef.current.style.height = scrollHeight + "px";
        }
      }, [textAreaRef.current, watch()]);

    return { ref, rest, textAreaRef }
}