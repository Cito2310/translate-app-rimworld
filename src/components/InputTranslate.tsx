import { Control, Controller, FieldValues } from "react-hook-form";
import { replaceForForm } from "../helpers/replaceForForm";

interface props {
    text: string;
    control: Control<FieldValues, any>;
    original: string;
    // DefInjected
    base?: string;
    type?: string;
    // Keyed
    name?: string;
}

export const InputTranslate = ({ base, text, control, type, original, name }: props) => {
    return <Controller 
        name={
            base 
            ? `DefInjectedForm.${type}.${replaceForForm(base)}`
            : `KeyedForm.${replaceForForm(name!)}`
        }
        control={ control }
        defaultValue={ text }
        render={({ field }) => <>


            <li className="m-3 bg-white p-2 px-4 rounded">
                {
                    base 
                    ? <label>{`${type}: ${base}`}</label>
                    : <label>{name}</label>
                }
                

                <textarea {...field}
                    className="w-full overflow-visible focus:outline-none px-2 bg-slate-100 rounded"
                />

                <p className="text-gray-500 text-sm px-2">{original}</p>
            </li>


        </>
        }
    />
}