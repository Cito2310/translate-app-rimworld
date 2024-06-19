import { DropdownOption } from "./DropdownOption"
import { DropdownSeparate } from "./DropdownSeparate"

interface propsDropdownSection {
    children: JSX.Element | JSX.Element[]
}

const DropdownSection = ({ children }: propsDropdownSection) => (
    <div className="flex flex-col p-[5px]">
        {children}
    </div>
)

export const DropdownMenu = () => {
    return (
        <div className="bg-[#363636] z-50 absolute rounded rounded-tl-none shadow-[0_0px_12px_0px_rgba(0,0,0,0.2)]">
            <DropdownSection>
                <DropdownOption label="Nuevo Proyecto" onClick={()=>console.log("TODO")} />
                <DropdownOption label="Guardar Proyecto" onClick={()=>console.log("TODO")} />
                <DropdownOption label="Generar Traducción" onClick={()=>console.log("TODO")} />
            </DropdownSection>

            <DropdownSeparate />

            <DropdownSection>
                <DropdownOption label="Preferencias" onClick={()=>console.log("TODO")} />
            </DropdownSection>
        </div>
    )
}