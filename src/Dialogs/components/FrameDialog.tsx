import { Icon } from "../../components";
import { ButtonDialog } from "./ButtonDialog";

interface props {
    children: JSX.Element | JSX.Element[];
    title: string;
    onExit: () => void;
    btnBottoms: {func: ()=>void; label: string}[];
}

export const FrameDialog = ({ children, title, onExit, btnBottoms }: props) => {
    return (
        <div className="
            z-20 rounded-md text-[#ddd] bg-[#161616] px-4 py-2 pb-3
            absolute left-[50%] translate-x-[-50%] top-24
            w-[90vw] sm:w-[600px]
        ">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-medium text-[1.2em]">{ title }</h1>
                <button 
                    onClick={ onExit }
                    className="text-[1.3em] aspect-square transition-base hover:brightness-105 active:brightness-[1.20]"
                >
                    <Icon element="xcross" />
                </button>
            </div>

            { children }

            <div className="flex justify-end gap-2 mt-4">
                { btnBottoms.map(({ func, label }) => 
                    <ButtonDialog key={label} className="w-[100px]" onClick={func} label={label} />
                )}
            </div>
        </div>
    )
}