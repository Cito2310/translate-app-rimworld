import { Icon } from "../components"

interface propsButtonFrame {
    element: "minus" | "square" | "xcross";
    isRed?: boolean;
    onClick: () => void;
}

export const ButtonFrame = ({ element, onClick, isRed }: propsButtonFrame) => (
    <button
    onClick={onClick}
    className="
        w-[45px] not-draggable flex justify-center items-center transition-base
        bg-[#161616] hover:bg-[#353535] active:bg-[#525252]
    ">
        <Icon element={ element } />
    </button>
)


export const useTitleBar = () => {
    const appClose = () => window.electronAPI.appClose()
    const appMinimize = () => window.electronAPI.appMinimize()
    const appMaximize = () => window.electronAPI.appMaximize()

    return { appClose, appMaximize, appMinimize }
}




export const TitleBar = () => {
    const { appClose, appMaximize, appMinimize } = useTitleBar()

    return (
        <nav className="w-screen h-[34px] draggable flex justify-between bg-[#161616] text-[#dddddd]">
            {/* LEFT */}
            <div>

            </div>

            {/* RIGHT */}
            <div className="flex">
                <ButtonFrame onClick={appMinimize} element="minus"/>
                <ButtonFrame onClick={appMaximize} element="square"/>
                <ButtonFrame onClick={appClose} element="xcross"/>
            </div>
        </nav>
    )
}