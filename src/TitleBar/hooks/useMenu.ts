import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store"
import { setDialog } from "../../store/dialog";
import { controlLocalStorage } from "../../helpers";
import { setDataTranslate } from "../../store/dataTranslate/dataTranslateSlice";

interface props {
    onGenerateTranslate: () => Promise<void>;
}

export const useMenu = ({ onGenerateTranslate }: props) => {
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
        await onGenerateTranslate(); 
        setDisplayed(false);

    }

    const handlePreferences = () => {  }
    const handleSettingProject = () => {  }

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