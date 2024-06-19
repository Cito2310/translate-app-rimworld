import { Icon } from "../../components";

interface props {
    label: string;
    onClick: () => void;
}

export const ButtonTitleBar = ({ label, onClick }: props) => (
    <button 
    onClick={onClick}
    className="
    h-full flex justify-center items-center not-draggable gap-1 p-2
    bg-[#161616] hover:bg-[#353535] active:bg-[#525252]
    ">
        <Icon className="text-[1.2em]" element="icon"></Icon>
        <span className="text-[1em]">{label}</span>
    </button>
)