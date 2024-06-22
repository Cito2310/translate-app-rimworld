import { useAppSelector } from "../../store";

interface props {
    label: string;
    onClick: () => void;
    needData?: boolean;
}

export const DropdownOption = ({ label, onClick, needData }:props) => {
    const existData = useAppSelector( state => state.dataTranslate.existData );

    return (
        <button
            onClick={ onClick }
            disabled={ needData ? !existData : false }
            className="
                text-left rounded  pl-2 pr-6 py-[2px]
                transition-base hover:bg-[#161616]
                disabled:bg-transparent disabled:text-[#878787]
            "
        >{ label }</button>
    )
}