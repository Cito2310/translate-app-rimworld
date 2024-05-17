import { Control, FieldValues } from "react-hook-form";
import { InputKeyed } from "./InputKeyed";
import { KeyedData } from "../../types/KeyedData";

interface props {
    keyed: KeyedData[];
    control: Control<FieldValues, any>;
}

export const SectionKeyed = ({ control, keyed }: props) => {
  return (
    <section>
        <h2 className="font-semibold text-2xl px-2">keyed</h2>
        <table className="w-full">
            <thead>
                <tr>
                    <th className="w-[10%]">Nombre</th>
                    <th>Texto</th>
                </tr>
            </thead>

            <tbody>
                {
                    keyed.map(({ text, name, original }) => <InputKeyed 
                        key={name} 
                        name={name} 
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