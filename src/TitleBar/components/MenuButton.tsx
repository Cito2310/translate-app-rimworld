import { Icon } from "../../components/Icon";

interface props {
    onClick: () => void;
}

export const MenuButton = ({ onClick }: props) => (
    <button 
        onClick={onClick}
        className="
        h-full flex justify-center items-center not-draggable gap-1 px-2
        bg-[#161616] hover:bg-[#353535] active:bg-[#525252]
    ">
            <Icon className="text-[1.2em]" element="icon"></Icon>
            <span className="text-[0.9em]">Menu</span>
    </button>
)