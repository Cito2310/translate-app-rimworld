import { useAutosizeTextArea } from "../hooks/useAutosizeTextArea";

interface props {
    value: string;
    original: string;
    name: string;
}

export const ContainerTranslate = ({ original, value, name }: props) => {
    const { ref, rest, textAreaRef } = useAutosizeTextArea( "value", value )

    return (
        <div className="flex pl-9 gap-2">
            <h4>{name}:</h4>

            <textarea {...rest} 
            // @ts-ignore
                ref={(e) => {ref(e); textAreaRef.current = e}}  
                name="value" rows={1} 
                className="outline-none w-[100%] rounded px-1.5 py-.5 bg-[#363636]"
            />
        </div>
    )
}