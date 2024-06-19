import { MenuButton } from "./components/MenuButton"
import { ButtonWindow } from "./components/ButtonWindow"
import { InputSearch } from "./components/InputSearch"
import { useTitleBar } from "./hooks/useTitleBar"

export const TitleBar = () => {
    const { appClose, appMaximize, appMinimize } = useTitleBar()

    return (
        <nav className="w-screen h-[34px] draggable flex justify-between bg-[#161616] text-[#dddddd]">
            {/* LEFT */}    
            <div className="basis-[0] flex-grow">
                <MenuButton handle={()=>console.log("TODO")} />
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