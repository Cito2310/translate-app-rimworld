import { Control, FieldValues } from "react-hook-form";
import { InputDefInjected } from "./InputDefInjected";
import { DefinjectedData } from "../../types/DefInjectedData"

interface props {
    defInjected: DefinjectedData[];
    control: Control<FieldValues, any>;
}

export const SectionDefInjected = ({ control, defInjected }: props) => {
    return (
        <section className="mb-12">
            <h2 className="font-semibold text-2xl px-2">defInjected</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="w-[10%] border-2 border-black">Tipo y Base</th>
                        <th className="border-2 border-black">Texto</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        defInjected.map(({ text, base, type, original }) => <InputDefInjected 
                            key={type+base} 
                            type={type} 
                            base={base} 
                            control={control} 
                            text={text}
                            original={original}
                        />  )
                    }
                </tbody>
            </table>
        </section>
    )
}