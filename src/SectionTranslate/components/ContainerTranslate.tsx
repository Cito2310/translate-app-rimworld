import { Control, Controller, FieldValues } from "react-hook-form";
import { useAutosizeTextArea } from "../hooks/useAutosizeTextArea";

interface props {
    value: string;
    original: string;
    name: string;
    control: Control<FieldValues, any>;
    path: string;
    className?: string;
}

export const ContainerTranslate = ({ original, value, name, control, path, className }: props) => {
    const { ref, rest, textAreaRef } = useAutosizeTextArea( "value", value )

    return (
        <Controller
            name={path}
            control={ control }
            defaultValue={ value }
            render={({ field }) => 
                <div className={`flex pl-9 gap-2 ${className}`}>
                    <h4>{name}:</h4>

                    <textarea {...field} 
                    // @ts-ignore
                        ref={(e) => {ref(e); textAreaRef.current = e}}  
                        name="value" rows={1} 
                        className="outline-none w-[100%] rounded px-1.5 py-.5 bg-[#363636]"
                    />
                </div>
            }
        
        />
    )
}