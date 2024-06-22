import { DropdownOption } from "./DropdownOption"
import { DropdownSection } from "./DropdownSection"
import { DropdownSeparate } from "./DropdownSeparate"

interface props {
    menuData: {label: string; handle: () => void}[][]
}

export const DropdownMenu = ({ menuData }: props) => {
    return (
        <div className="bg-[#363636] w-[200px] z-50 absolute rounded rounded-tl-none shadow-[0_0px_12px_0px_rgba(0,0,0,0.2)]">
            {
                menuData.map((section, index) => <div key={index+"Menudata"}>
                    <DropdownSection>
                        { section.map(({ handle, label }, index) => <DropdownOption key={label+index} label={label} onClick={handle} /> ) }
                    </DropdownSection>

                    { index !== menuData.length-1 && <DropdownSeparate /> }
                </div>)
            }
        </div>
    )
}