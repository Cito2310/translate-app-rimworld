import { Icon } from "../../components";

interface props {
    element: "minus" | "square" | "xcross";
    isRed?: boolean;
    onClick: () => void;
}

export const ButtonWindow = ({ element, onClick, isRed }: props) => (
    <button
    onClick={onClick}
    className="
        w-[45px] not-draggable flex justify-center items-center transition-base
        bg-[#161616] hover:bg-[#353535] active:bg-[#525252]
    ">
        <Icon element={ element } />
    </button>
)