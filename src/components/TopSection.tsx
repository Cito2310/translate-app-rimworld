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
}: props) => {

    const handleGenerateTranslate = () => {
        const prefix = getPrefix();

    }

    useEffect(() => {
      console.log( watchPrefix())
    
    }, [watchPrefix()])
    

    return (

        <div className="flex gap-6 bg-black">
            <TopButton
                isLoad={ existExcludeData() } 
                onClick={ ()=>onSetTranslateFile("exclude") } 
                label="Establecer translate-exclude" />

            <TopButton 
                isLoad={ existBaseData() } 
                onClick={ ()=>onSetTranslateFile("base") } 
                label="Establecer translate-base" />

            <TopButton 
                disabled={ !watchPrefix().prefix }
                onClick={ ()=> onClickGenerateTranslate(getPrefix())  } 
                label="Generar traducción" />
            
            <input className="border border-black" {...registerPrefix("prefix")} />
    </div>

    )
}