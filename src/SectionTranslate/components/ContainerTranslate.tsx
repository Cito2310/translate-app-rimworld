import { Control, Controller, FieldValues, UseFormGetValues } from "react-hook-form";
import { useAutosizeTextArea } from "../hooks/useAutosizeTextArea";
import { useSaveLocalStorage } from "../hooks/useSaveLocalStorage";
import { Icon } from "../../components/Icon";
import { ButtonContainerTranslate } from "./ButtonContainerTranslate";
import { useEffect, useState } from "react";


interface props {
    value: string;
    original: string;
    name: string;
    control: Control<FieldValues, any>;
    path: string;
    className?: string;
    getValues: UseFormGetValues<FieldValues>;
}

export const ContainerTranslate = ({ original, value, name, control, path, className, getValues }: props) => {
    const { ref, rest, textAreaRef } = useAutosizeTextArea( "value", value );
    useSaveLocalStorage({ control, path, getValues })

    const [showOriginal, setShowOriginal] = useState(false);
    const [showTranslate, setShowTranslate] = useState(false);
    const [translateText, setTranslateText] = useState("");

    const toggleShowOriginal = () => setShowOriginal(!showOriginal);
    const toggleShowTranslate = () => setShowTranslate(!showTranslate);

    useEffect(()=>{
        if (showTranslate === true) {
            // translate("", { tld: "com", to: "es" }).then((data) => console.log(data))
        }
    }, [showTranslate])

    return (
        <Controller
            name={path}
            control={ control }
            defaultValue={ value }
            render={({ field }) => 
                <div>
                    <div className={`flex gap-2 ${className} items-center`}>
                        <div className="flex">
                            <ButtonContainerTranslate onClick={toggleShowOriginal}>r</ButtonContainerTranslate>
                            <ButtonContainerTranslate onClick={toggleShowTranslate}><Icon element="translate" /></ButtonContainerTranslate>
                        </div>
                        <h4>{name}:</h4>

                        <textarea {...field} 
                        // @ts-ignore
                            ref={(e) => {ref(e); textAreaRef.current = e}}  
                            name="value" rows={1} 
                            className="outline-none w-[100%] rounded px-1.5 py-.5 bg-[#363636]"
                        />
                    </div>

                    <div className="flex">
                        { showOriginal && <p>{original}</p> }
                        { showTranslate && <p>{translateText}</p> }
                    </div>
                </div>
            }
        
        />
    )
}