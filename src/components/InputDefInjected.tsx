import { Control, Controller, FieldValues } from "react-hook-form";
import { replaceForForm } from "../helpers/replaceForForm";

interface props {
    text: string;
    base: string;
    control: Control<FieldValues, any>;
    type: string;
    original: string;
}

export const InputDefInjected = ({ base, text, control, type, original }: props) => {
    return <Controller 
        name={`DefInjectedForm.${type}.${replaceForForm(base)}`}
        control={ control }
        defaultValue={ text }
        render={({ field }) => <>
            <tr>
                <td className="border-2 border-black flex-col px-2">
                    <p>{type}</p>
                    <p>{base}</p>
                </td>
                <td className="border-2 border-black flex-col">
                    <textarea {...field}
                        className="w-full overflow-visible focus:outline-none px-2"
                    />
                    <p className="text-gray-400 text-sm px-2">{original}</p>
                </td>
            </tr>
        </>
        }
    />
}