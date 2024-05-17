import { Control, FieldValues } from "react-hook-form";
import { DefinjectedData } from "../../types/DefInjectedData"
import { InputTranslate } from "./InputTranslate";
import { KeyedData } from "../../types/KeyedData";

interface props {
    defInjected: DefinjectedData[];
    control: Control<FieldValues, any>;
    type: "defInjected" | "keyed";
    keyed: KeyedData[];
}

export const SectionTranslate = ({ control, defInjected, keyed, type }: props) => {
    return (
        <section>
            <h2 className="font-semibold text-2xl px-2">defInjected</h2>

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