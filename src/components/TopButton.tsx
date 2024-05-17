import { Icon } from "./Icon";

interface props {
    isLoad?: boolean;
    onClick: () => void;
    label: string;
    disabled?: boolean;
}

export const TopButton = ({ isLoad, onClick, label, disabled }: props) => (

    <button 
        disabled={disabled}
        className="
            p-1 border border-black rounded bg-white transition-base
            hover:brightness-[.98] active:brightness-[.95]  
            disabled:border-gray-400 disabled:text-gray-400 disabled:bg-gray-100 disabled:pointer-events-none" 
        onClick={onClick}
    >

        <p className="flex items-center gap-1">
            { label } { isLoad &&  <Icon element="check" className="text-lg text-green-600" /> }
        </p>

    </button>

)