import { TopButton } from "."
import { usePrefix } from "../hooks";
import { useAppDispatch, useAppSelector, startTranslateFile } from "../store";

interface props {
    onClickGenerateTranslate: (prefix: string) => void;
}

export const TopBar = ({ 
    onClickGenerateTranslate,
}: props) => {
    const { getPrefix, registerPrefix, watchPrefix, resetPrefix } = usePrefix()

    const dispatch = useAppDispatch()
    const { existBase, existExclude } = useAppSelector(state => state.dataTranslate.status)
    const onSetExclude = () => dispatch(startTranslateFile("exclude"));
    const onSetBase = async() =>{ await dispatch(startTranslateFile("base")); resetPrefix() };

    return (
        <div className="flex bg-slate-500 px-4 py-2 justify-between ">
            <div className="flex gap-2">
                <TopButton
                    isLoad={ existExclude } 
                    onClick={ onSetExclude } 
                    label="Establecer translate-exclude" />

                <TopButton 
                    isLoad={ existBase } 
                    onClick={ onSetBase } 
                    label="Establecer translate-base" />
            </div>
            
            <input placeholder="Titulo" className="text-lg focus:outline-none rounded px-2" {...registerPrefix("prefix")} />

            <TopButton 
                disabled={ !watchPrefix().prefix.trim() }
                onClick={ ()=> onClickGenerateTranslate(getPrefix())  } 
                label="Generar traducción" />
        </div>
)}