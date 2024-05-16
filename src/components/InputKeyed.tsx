import { Control, Controller, FieldValues } from "react-hook-form";
import { replaceForForm } from "../helpers/replaceForForm";

interface props {
    text: string;
    name: string;
    control: Control<FieldValues, any>;

}

export const InputKeyed = ({ name, text, control }: props) => {
    return <Controller 
        name={`Keyed.${replaceForForm(name)}`}
        control={ control }
        defaultValue={ text }
        render={({ field }) => <>
            <tr>
                <td className="border-2 border-black">{name}</td>
                <td className="border-2 border-black flex-col">
                    <textarea {...field}
                        className="w-full overflow-visible focus:outline-none"
                    />
                    <p className="text-gray-400 text-sm">{text}</p>
                </td>
            </tr>
        </>
        }
    />
}