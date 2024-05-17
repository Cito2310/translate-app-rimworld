import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { PrefixForm } from "../hooks/usePrefix";
import { TopButton } from "./TopButton"
import { useEffect } from "react";

interface props {
    existExcludeData: () => boolean;
    existBaseData: () => boolean;
    onSetTranslateFile: ( type: "exclude" | "base" ) => void;
    getPrefix: () => string;
    onClickGenerateTranslate: (prefix: string) => void;
    registerPrefix: UseFormRegister<PrefixForm>;
    watchPrefix: UseFormWatch<PrefixForm>
}

export const TopSection = ({ 
    existBaseData, 
    existExcludeData,
    getPrefix,
    onSetTranslateFile,
    onClickGenerateTranslate,
    registerPrefix,
    watchPrefix
}: props) => (


    <div className="flex bg-slate-500 px-4 py-2 justify-between">
        <div className="flex gap-2">
            <TopButton
                isLoad={ existExcludeData() } 
                onClick={ ()=>onSetTranslateFile("exclude") } 
                label="Establecer translate-exclude" />

            <TopButton 
                isLoad={ existBaseData() } 
                onClick={ ()=>onSetTranslateFile("base") } 
                label="Establecer translate-base" />
        </div>
        
        <input placeholder="Titulo" className="border focus:outline-none rounded px-2 border-black" {...registerPrefix("prefix")} />

        <TopButton 
            disabled={ !watchPrefix().prefix.trim() }
            onClick={ ()=> onClickGenerateTranslate(getPrefix())  } 
            label="Generar traducción" />

    </div>


)