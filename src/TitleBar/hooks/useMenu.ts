import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store"
import { setDialog } from "../../store/dialog";
import { controlLocalStorage } from "../../helpers";
import { setDataTranslate } from "../../store/dataTranslate/dataTranslateSlice";
import { generateTranslate } from "../../helpers/generateTranslate";


export const useMenu = () => {
    const stateTranslate = useAppSelector(state => state.dataTranslate)

    const [displayed, setDisplayed] = useState(false)
    
    const onToggleMenu = () => { setDisplayed(!displayed) }


    const dispatch = useAppDispatch();

    const handleNewProject = () => { 
        dispatch( setDialog("newProject") ); 
        setDisplayed(false);
    }

    const handleOpenProject = async() => {
        const data = await window.electronAPI.readTranslateProject();

        controlLocalStorage("set", "current-translate", data);
        if ( data ) {
            dispatch(setDataTranslate(data))
            setDisplayed(false);
        }
    }

    const handleSaveProject = async() => { 
        await window.electronAPI.saveTranslateProject({ data: stateTranslate });
        setDisplayed(false);
    }

    const handleGenerateTranslate = async() => { 
        const dataTranslate = useAppSelector(state => state.dataTranslate)
        await generateTranslate(dataTranslate); 
        setDisplayed(false);

    }

    const handlePreferences = () => { 
        dispatch( setDialog("preferences") ); 
        setDisplayed(false);
    }
    const handleSettingProject = () => { 
        dispatch( setDialog("settingProject") ); 
        setDisplayed(false);
    }

    return {
        onToggleMenu,
        displayed,

        handleNewProject,
        handleSaveProject,
        handleGenerateTranslate,
        handlePreferences,
        handleOpenProject,
        handleSettingProject,
    }
}