import { useAppDispatch, useAppSelector } from "../store"
import { setNoneDialog } from "../store/dialog"
import { MenuNewProject } from "./Menus/MenuNewProject"
import { MenuPreferences } from "./Menus/MenuPreferences"
import { MenuSettingProject } from "./Menus/MenuSettingProject"

export const TitleDialog = ({ text }: { text: string }) => <h1 className="font-semibold ">{ text }</h1>

export const Dialogs = () => {
    const dispatch = useAppDispatch();
    const { currentDialog, noneDialog } = useAppSelector(state => state.dialog);

    const onExit = () => dispatch(setNoneDialog());

    return (
        <>
            {
                !noneDialog &&
                <div className="w-screen h-full absolute bg-[#0000003d] top-0 left-0"></div>
            }
            
            { currentDialog === "newProject" && <MenuNewProject onExit={onExit} /> }
            { currentDialog === "settingProject" && <MenuSettingProject onExit={onExit} /> }
            { currentDialog === "preferences" && <MenuPreferences onExit={onExit} /> }
        </>
    )
}