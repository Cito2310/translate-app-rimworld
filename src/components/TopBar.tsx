import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { PrefixForm } from "../hooks/usePrefix";
import { TopButton } from "./TopButton"
import { startTranslateFile } from "../store/product/dataTranslateThunks";
import { useAppDispatch, useAppSelector } from "../store/store";

interface props {
    getPrefix: () => string;
    onClickGenerateTranslate: (prefix: string) => void;
    registerPrefix: UseFormRegister<PrefixForm>;
    watchPrefix: UseFormWatch<PrefixForm>
}

export const TopBar = ({ 
    getPrefix,
    onClickGenerateTranslate,
    registerPrefix,
    watchPrefix
}: props) => {
    const dispatch = useAppDispatch()
    const { existBase, existExclude } = useAppSelector(state => state.dataTranslate.status)
    const onSetTranslateFile = (type: "base" | "exclude") => dispatch(startTranslateFile(type));

    return (
        <div className="flex bg-slate-500 px-4 py-2 justify-between fixed w-full">
            <div className="flex gap-2">
                <TopButton
                    isLoad={ existExclude } 
                    onClick={ ()=>onSetTranslateFile("exclude") } 
                    label="Establecer translate-exclude" />

                <TopButton 
                    isLoad={ existBase } 
                    onClick={ ()=>onSetTranslateFile("base") } 
                    label="Establecer translate-base" />
            </div>
            
            <input placeholder="Titulo" className="text-lg focus:outline-none rounded px-2" {...registerPrefix("prefix")} />

            <TopButton 
                disabled={ !watchPrefix().prefix.trim() }
                onClick={ ()=> onClickGenerateTranslate(getPrefix())  } 
                label="Generar traducción" />
        </div>
)}