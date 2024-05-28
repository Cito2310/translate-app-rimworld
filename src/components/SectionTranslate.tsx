import { Control, FieldValues } from "react-hook-form";
import { InputTranslate } from "./";
import { useAppSelector } from "../store";

interface props {
    control: Control<FieldValues, any>;
    type: "defInjected" | "keyed";
}

export const SectionTranslate = ({ control, type }: props) => {
    const { defInjected, keyed } = useAppSelector(state => state.dataTranslate.parsedData);

    return (
        <section>
            <h2 className="font-semibold text-2xl px-2">{type}</h2>

            <ul>
                {
                    type === "defInjected" && defInjected.map(({ text, base, type, original }) => <InputTranslate
                    key={type+base} 
                    type={type} 
                    base={base} 
                    control={control} 
                    text={text}
                    original={original}
                />  )
                }

                {
                    type === "keyed" && keyed.map(({ text, original, name }) => <InputTranslate
                    key={name + text} 
                    type={type} 
                    name={name} 
                    control={control} 
                    text={text}
                    original={original}
                />  )
                }
            </ul>

        </section>
    )
}