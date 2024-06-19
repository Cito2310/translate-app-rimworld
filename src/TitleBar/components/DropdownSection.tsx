interface propsDropdownSection {
    children: JSX.Element | JSX.Element[]
}

export const DropdownSection = ({ children }: propsDropdownSection) => (
    <div className="flex flex-col p-[5px]">
        {children}
    </div>
)