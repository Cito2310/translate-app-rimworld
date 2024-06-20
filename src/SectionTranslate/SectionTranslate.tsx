import { Control, FieldValues } from "react-hook-form";
import { SectionDefInjected } from "./components/SectionDefInjected";
import { SectionKeyed } from "./components/SectionKeyed";
import { useAppSelector } from "../store";

interface props {
    control: Control<FieldValues, any>;
}

export const SectTranslate = ({ control }: props) => {
    const data = useAppSelector( state => state.dataTranslate.parsedData );

    return (
        <div className="bg-[#1f1f1f] min-[100%] overflow-auto text-[#ddd] px-4">
            <SectionDefInjected control={control} data={data} />

            <SectionKeyed control={control} data={data} />
        </div>
    )
}