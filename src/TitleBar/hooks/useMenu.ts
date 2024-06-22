import { useState } from "react";
import { useAppDispatch } from "../../store"
import { setDialog } from "../../store/dialog";

interface props {
    onGenerateTranslate: () => Promise<void>;
}

export const useMenu = ({ onGenerateTranslate }: props) => {
    const [displayed, setDisplayed] = useState(false)
    
    const onToggleMenu = () => { setDisplayed(!displayed) }


    const dispatch = useAppDispatch();

    const handleNewProject = () => { dispatch( setDialog("newProject") ); setDisplayed(false); }
    const handleOpenProject = () => {  }
    const handleSaveProject = () => {  }
    const handleGenerateTranslate = async() => { await onGenerateTranslate() }
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