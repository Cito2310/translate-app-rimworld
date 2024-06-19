interface props {
    label: string;
    onClick: () => void;
}

export const DropdownOption = ({ label, onClick }:props) => {
    return (
        <button
            onClick={ onClick }
            className="text-left rounded transition-base hover:bg-[#161616] pl-2 pr-6 py-[2px]"
        >{ label }</button>
    )
}