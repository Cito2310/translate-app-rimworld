import { ButtonWindow } from "./components/ButtonWindow"
import { InputSearch } from "./components/InputSearch"
import { useTitleBar } from "./hooks/useTitleBar"
import { useMenu } from "./hooks/useMenu"
import { Menu } from "./components/Menu"

interface props {
    onGenerateTranslate: () => Promise<void>;
}

export const TitleBar = ({ onGenerateTranslate }: props) => {
    const { appClose, appMaximize, appMinimize } = useTitleBar()
    const { 
        onToggleMenu,
        displayed,

        handleGenerateTranslate, 
        handleNewProject, 
        handleOpenProject, 
        handlePreferences, 
        handleSaveProject, 
        handleSettingProject } = useMenu({ onGenerateTranslate })

    return (
        <nav className="w-screen h-[34px] draggable flex justify-between bg-[#161616] text-[#dddddd]">
            {/* LEFT */}    
            <div className="basis-[0] flex-grow">
                <Menu
                displayed={displayed}
                onToggle={onToggleMenu}
                menuData={[
                    [
                        { label: "Nuevo Proyecto", handle: handleNewProject },
                        { label: "Abrir Proyecto", handle: handleOpenProject },
                        { label: "Guardar Proyecto", handle: handleSaveProject },
                        { label: "Generar Traducción", handle: handleGenerateTranslate },
                    ],
                    [
                        { label: "Preferencias", handle: handlePreferences },
                        { label: "Conf. Del Proyecto", handle: handleSettingProject },
                    ]
                ]} />
            </div>

            {/* CENTER */}
            <InputSearch />

            {/* RIGHT */}
            <div className="flex justify-end basis-[0] flex-grow">
                <ButtonWindow onClick={appMinimize} element="minus"/>
                <ButtonWindow onClick={appMaximize} element="square"/>
                <ButtonWindow onClick={appClose} element="xcross"/>
            </div>
        </nav>
    )
}