import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { controlLocalStorage, getDataWithException, getDefInjected, getKeyed } from "../../helpers";
import { setDataTranslate } from "../../store/dataTranslate/dataTranslateSlice";
import { useAppDispatch } from "../../store";

export const useMenuNewProject = () => {
    const dispatch = useAppDispatch();

    const { register, getValues, watch } = useForm();

    const [fileExclude, setFileExclude] = useState<string[][]>();
    const [fileTranslate, setFileTranslate] = useState<string[][]>();

    const [availableCreate, setAvailableCreate] = useState(false);
    useEffect(() => { 
        if ( fileExclude && fileTranslate && getValues().value.trim() ) setAvailableCreate(true) 
        if ( !getValues().value.trim() ) setAvailableCreate(false)
            
    }, [fileExclude, fileTranslate, watch()])

    const handleCreate = () => {
        if ( fileExclude && fileTranslate ) {
            const rawData = getDataWithException(fileTranslate, fileExclude);
            const data = {
                defInjected: getDefInjected(rawData),
                keyed: getKeyed(rawData)
            }

            const newState = { data, name: getValues().value.trim() };
            controlLocalStorage("set", "current-translate", newState);
            dispatch(setDataTranslate(newState))
        }
    }

    const handleSelectFileExclude = async() => { 
        const data = await window.electronAPI.readFileTranslate()
        setFileExclude(data);
    }

    const handleSelectFileTranslate = async() => {
        const data = await window.electronAPI.readFileTranslate()
        setFileTranslate(data);
    }


    return {
        registerNameProject: register,
        
        handleCreate,
        availableCreate,

        handleSelectFileExclude,
        handleSelectFileTranslate
    }
}