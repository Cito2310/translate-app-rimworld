import { DropdownMenu } from "./DropdownMenu";
import { MenuButton } from "./MenuButton";

interface props {
    onToggle: () => void;
    displayed: boolean;
    menuData: {label: string; handle: () => void}[][]
}

export const Menu = ({ menuData, displayed, onToggle }: props) => {
    return(
        <div className="h-full">
            <MenuButton onClick={onToggle} />

            { displayed && <DropdownMenu menuData={ menuData } /> }
        </div>
)}